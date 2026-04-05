import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Blog Vintage — Guides, conseils et actualités",
  description:
    "Explorez nos articles sur le vintage : guides d'achat, évaluations de prix, conseils d'entretien, histoire des objets et meilleures adresses pour chiner.",
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(24, 0);

  return (
    <>
      {/* Header page */}
      <div style={{
        background: "var(--color-secondary-dark)",
        borderBottom: "1px solid rgba(160, 120, 74, 0.2)",
        padding: "3.5rem 0 3rem",
      }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <Link href="/" style={{ color: "rgba(249,244,237,0.5)", textDecoration: "none", fontFamily: "var(--font-accent)", fontSize: "0.88rem" }}>
              Accueil
            </Link>
            <span style={{ color: "rgba(249,244,237,0.3)", fontSize: "0.8rem" }}>›</span>
            <span style={{ color: "var(--color-amber-light)", fontFamily: "var(--font-accent)", fontSize: "0.88rem" }}>Blog</span>
          </div>
          <p className="section-eyebrow" style={{ color: "var(--color-primary-light)" }}>Articles & Guides</p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "white",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}>
            Blog Vintage
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(249,244,237,0.7)", maxWidth: "55ch" }}>
            Guides pratiques, analyses de prix et conseils d&apos;experts pour passionnés du vintage et collectionneurs.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "5rem 2rem",
              background: "var(--color-surface-warm)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-light)",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📜</div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                color: "var(--color-secondary)",
                marginBottom: "0.75rem",
              }}>
                Aucun article publié pour le moment.
              </h2>
              <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)", marginBottom: "2rem" }}>
                Nos experts préparent des guides complets sur l&apos;univers du vintage.
              </p>
              <Link href="/" className="btn-outline" style={{ fontSize: "0.95rem" }}>
                Retour à l&apos;accueil
              </Link>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.75rem",
            }} className="blog-listing-grid">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .blog-listing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .blog-listing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
