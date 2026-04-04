import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
const DOFOLLOW_TITLE_MARKER = "__DOFOLLOW__";
const isDofollowTitle = (value: string) => /\bdofollow\b/i.test(value.trim());
const isLegacyDofollowTitle = (value: string) => /^_+$/.test(value.trim());
const isDomainLikeText = (value: string) =>
    /^(?:https?:\/\/)?(?:www\.)?[a-z0-9][a-z0-9.-]+\.[a-z]{2,}(?:\/)?$/i.test(value.trim());

const normalizeHostname = (value: string) => value.trim().toLowerCase().replace(/^www\./, "");

const resolveSiteHostname = () => {
    const candidates = [process.env.SITE_DOMAIN, process.env.NEXT_PUBLIC_SITE_URL];
    for (const candidate of candidates) {
        if (!candidate) continue;
        const raw = candidate.trim();
        if (!raw) continue;

        try {
            const withProtocol = raw.startsWith("http://") || raw.startsWith("https://")
                ? raw
                : `https://${raw}`;
            return normalizeHostname(new URL(withProtocol).hostname);
        } catch {
            const cleaned = raw.replace(/^https?:\/\//i, "").split("/")[0] ?? "";
            if (cleaned) return normalizeHostname(cleaned);
        }
    }
    return "";
};

const parseHttpUrl = (value: string) => {
    try {
        if (value.startsWith("//")) {
            return new URL(`https:${value}`);
        }
        const parsed = new URL(value);
        if (parsed.protocol === "http:" || parsed.protocol === "https:") {
            return parsed;
        }
    } catch {
        return null;
    }
    return null;
};

const extractDomainHref = (value: string): string | null => {
    const trimmed = value.trim();
    if (!trimmed) return null;
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    if (/^(?:www\.)?[a-z0-9][a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s<)]*)?$/i.test(trimmed)) {
        return `https://${trimmed}`;
    }
    return null;
};

const extractTextFromChildren = (children: unknown): string => {
    if (typeof children === "string") return children;
    if (typeof children === "number") return String(children);
    if (Array.isArray(children)) return children.map((child) => extractTextFromChildren(child)).join(" ");
    if (children && typeof children === "object" && "props" in (children as Record<string, unknown>)) {
        const props = (children as { props?: { children?: unknown } }).props;
        return extractTextFromChildren(props?.children);
    }
    return "";
};

export const MarkdownLink = ({ href, children, title, ...props }: LinkProps) => {
    const text = extractTextFromChildren(children);
    const fallbackHref = extractDomainHref(text);
    const rawTitle = typeof title === "string" ? title : "";
    const cleanTitle =
        rawTitle && rawTitle !== DOFOLLOW_TITLE_MARKER && !isDofollowTitle(rawTitle)
            ? rawTitle
            : undefined;
    if (!href) {
        if (fallbackHref) {
            return <a href={fallbackHref} target="_blank" rel="noopener noreferrer" title={cleanTitle} {...props}>{children}</a>;
        }
        return <a title={cleanTitle} {...props}>{children}</a>;
    }

    const dofollowMarker = "{dofollow}";
    const dofollowMarkerEncoded = "%7Bdofollow%7D";
    const dofollowParam = "__dofollow=1";
    const hasDofollowMarker =
        href.includes(dofollowMarker) ||
        href.toLowerCase().includes(dofollowMarkerEncoded) ||
        href.includes(dofollowParam) ||
        /[?&]__=1(?=&|$)/i.test(href) ||
        rawTitle === DOFOLLOW_TITLE_MARKER ||
        isDofollowTitle(rawTitle) ||
        isLegacyDofollowTitle(rawTitle);

    let cleanHref = href.replace(dofollowMarker, "").replace(/%7Bdofollow%7D/gi, "");
    if (cleanHref.startsWith("http://") || cleanHref.startsWith("https://")) {
        try {
            const parsed = new URL(cleanHref);
            parsed.searchParams.delete("__dofollow");
            parsed.searchParams.delete("__");
            cleanHref = parsed.toString();
        } catch {
            cleanHref = cleanHref
                .replace(/[?&]__dofollow=1(?=&|$)/g, "")
                .replace(/[?&]__=1(?=&|$)/g, "");
        }
    } else {
        cleanHref = cleanHref
            .replace(/[?&]__dofollow=1(?=&|$)/g, "")
            .replace(/[?&]__=1(?=&|$)/g, "");
    }
    cleanHref = cleanHref
        .replace(/^[?&]?__dofollow=1$/i, "")
        .replace(/^[?&]?__=1$/i, "")
        .replace(/\?&/g, "?")
        .replace(/[?&]$/g, "")
        .trim();

    if (!cleanHref && fallbackHref) {
        cleanHref = fallbackHref;
    }
    if (!cleanHref) {
        return <span {...props}>{children}</span>;
    }

    const isHttpAbsolute = cleanHref.startsWith("http://")
        || cleanHref.startsWith("https://")
        || cleanHref.startsWith("//");

    if (!isHttpAbsolute) {
        if (cleanHref.startsWith("mailto:") || cleanHref.startsWith("tel:")) {
            return <a href={cleanHref} title={cleanTitle} {...props}>{children}</a>;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <Link href={cleanHref} title={cleanTitle} {...(props as any)}>{children}</Link>;
    }

    const parsedHref = parseHttpUrl(cleanHref);
    const siteHostname = resolveSiteHostname();
    const hrefHostname = parsedHref ? normalizeHostname(parsedHref.hostname) : "";
    const fallbackHostname = fallbackHref ? normalizeHostname(parseHttpUrl(fallbackHref)?.hostname || "") : "";
    const domainLabelPointsToSameHost = Boolean(
        isDomainLikeText(text) && hrefHostname && fallbackHostname && hrefHostname === fallbackHostname,
    );
    const isInternalAbsolute = Boolean(siteHostname && hrefHostname && hrefHostname === siteHostname);

    if (isInternalAbsolute && parsedHref) {
        const internalHref = `${parsedHref.pathname}${parsedHref.search}${parsedHref.hash}`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <Link href={internalHref || "/"} title={cleanTitle} {...(props as any)}>{children}</Link>;
    }

    return (
        <a
            href={cleanHref}
            target="_blank"
            rel={hasDofollowMarker || domainLabelPointsToSameHost ? "noopener noreferrer" : "nofollow noopener noreferrer"}
            title={cleanTitle}
            {...props}
        >
            {children}
        </a>
    );
};
