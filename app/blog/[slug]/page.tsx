import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

import { MarkdownLink } from "@/components/MarkdownLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getBlogPostBySlug } from "@/lib/blog";
import { injectDofollowMarker } from "@/lib/dofollow";

const buildAlternatesByLocale = (post: { slug: string; default_locale?: string | null; translations?: unknown }) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  const buildArticleUrl = (articleSlug: string) =>
    siteOrigin ? `${siteOrigin}/blog/${articleSlug}` : `/blog/${articleSlug}`;

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = buildArticleUrl(post.slug);

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(post.translations as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug = typeof translation.slug === "string" ? translation.slug : "";
      const status = typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || status !== "published") continue;
      languages[locale] = buildArticleUrl(translatedSlug);
    }
  }

  return languages;
};

export const revalidate = 21600;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.seo_title || post.h1 || post.slug,
    description: post.meta_description || post.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Traduction
  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const [, val] of Object.entries(post.translations)) {
      if ((val as { slug?: string }).slug === slug) {
        displayH1 = (val as { h1?: string }).h1 || displayH1;
        displayBody = (val as { body_md?: string }).body_md || displayBody;
        break;
      }
    }
  }

  const bodyMd = injectDofollowMarker(displayBody || "");
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      {/* Cover Hero */}
      {post.cover?.file_url && (
        <div style={{ position: "relative", height: "50vh", minHeight: "320px", maxHeight: "520px", overflow: "hidden" }}>
          <Image
            src={post.cover.file_url}
            alt={post.cover.alt || displayH1 || post.slug}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 30%, rgba(30,18,8,0.75) 100%)",
          }} />
        </div>
      )}

      {/* Article */}
      <div style={{
        background: "var(--color-bg)",
        minHeight: "60vh",
      }}>
        <div className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "5rem" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.75rem" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)", textDecoration: "none", fontFamily: "var(--font-accent)", fontSize: "0.83rem" }}>
              Accueil
            </Link>
            <span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>›</span>
            <Link href="/blog" style={{ color: "var(--color-text-muted)", textDecoration: "none", fontFamily: "var(--font-accent)", fontSize: "0.83rem" }}>
              Blog
            </Link>
            <span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>›</span>
            <span style={{ color: "var(--color-primary)", fontFamily: "var(--font-accent)", fontSize: "0.83rem" }}>Article</span>
          </div>

          {/* Catégorie badge */}
          {post.categories?.[0]?.label && (
            <span className="badge badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>
              {post.categories[0].label}
            </span>
          )}

          <article>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "var(--color-secondary)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}>
              {displayH1 || post.seo_title || post.slug}
            </h1>

            {/* Meta */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1rem 0",
              borderTop: "1px solid var(--color-border-light)",
              borderBottom: "1px solid var(--color-border-light)",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}>
              {date && (
                <span style={{ fontFamily: "var(--font-accent)", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                  📅 {date}
                </span>
              )}
              <LanguageSwitcher post={post} currentSlug={slug} />
            </div>

            {/* Body */}
            <div className="prose-blog">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
                {bodyMd}
              </ReactMarkdown>
            </div>

            {/* Auteur */}
            {post.author && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--color-border)",
                background: "var(--color-primary-pale)",
                borderRadius: "var(--radius-md)",
                padding: "1.5rem",
              }}>
                {post.author.avatar_url && (
                  <Image
                    src={post.author.avatar_url}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-primary)" }}
                  />
                )}
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-secondary)", marginBottom: "0.25rem" }}>
                    {post.author.name}
                  </p>
                  {post.author.bio && (
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            )}
          </article>

          {/* Back link */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border-light)" }}>
            <Link href="/blog" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-primary)",
              textDecoration: "none",
              fontFamily: "var(--font-accent)",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "all var(--transition)",
            }}>
              ← Retour au blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
