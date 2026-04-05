import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const title = post.h1 || post.seo_title || post.slug;
  const excerpt = post.meta_description || post.excerpt || "";
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Cover image */}
        {post.cover?.file_url && (
          <div style={{ position: "relative", height: "210px", overflow: "hidden", flexShrink: 0 }}>
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || title}
              fill
              style={{ objectFit: "cover" }}
              className="blog-card-img"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Gold overlay on hover */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(30,18,8,0.5) 0%, transparent 60%)",
            }} />
          </div>
        )}
        {/* Content */}
        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
          {post.categories?.[0]?.label && (
            <span className="badge badge-gold" style={{ marginBottom: "0.85rem", display: "inline-block", alignSelf: "flex-start" }}>
              {post.categories[0].label}
            </span>
          )}
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            color: "var(--color-secondary)",
            marginBottom: "0.7rem",
            lineHeight: 1.3,
            flex: 1,
          }}>
            {title}
          </h3>
          {excerpt && (
            <p style={{
              fontSize: "0.93rem",
              color: "var(--color-text-light)",
              lineHeight: 1.65,
              marginBottom: "1rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
              fontFamily: "var(--font-body)",
            }}>
              {excerpt}
            </p>
          )}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "0.85rem",
            borderTop: "1px solid var(--color-border-light)",
            marginTop: "auto",
          }}>
            {date && (
              <span style={{
                fontSize: "0.78rem",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-accent)",
                letterSpacing: "0.02em",
              }}>
                {date}
              </span>
            )}
            <span style={{
              fontSize: "0.88rem",
              color: "var(--color-primary)",
              fontWeight: 600,
              marginLeft: "auto",
              fontFamily: "var(--font-accent)",
              letterSpacing: "0.02em",
            }}>
              Lire l&apos;article →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
