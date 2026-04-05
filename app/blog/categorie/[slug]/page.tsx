import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPostsByCategory, getCategoryInfo } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryInfo(slug);
  return {
    title: `${category?.label || slug} — Blog Vintage | Unikvintage64`,
    description: `Découvrez tous nos articles sur la catégorie ${category?.label || slug} : guides d'achat, conseils et évaluations de prix.`,
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [posts, category] = await Promise.all([
    getBlogPostsByCategory(slug, 24, 0),
    getCategoryInfo(slug),
  ]);

  const catLabel = category?.label || slug;

  return (
    <>
      {/* Header */}
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
            <Link href="/blog" style={{ color: "rgba(249,244,237,0.5)", textDecoration: "none", fontFamily: "var(--font-accent)", fontSize: "0.88rem" }}>
              Blog
            </Link>
            <span style={{ color: "rgba(249,244,237,0.3)", fontSize: "0.8rem" }}>›</span>
            <span style={{ color: "var(--color-amber-light)", fontFamily: "var(--font-accent)", fontSize: "0.88rem" }}>{catLabel}</span>
          </div>
          <p className="section-eyebrow" style={{ color: "var(--color-primary-light)" }}>Catégorie</p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
          }}>
            {catLabel}
          </h1>
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
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📂</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--color-secondary)", marginBottom: "0.75rem" }}>
                Aucun article publié pour le moment.
              </h2>
              <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)", marginBottom: "2rem" }}>
                Des contenus sur la catégorie {catLabel} seront bientôt disponibles.
              </p>
              <Link href="/blog" className="btn-outline" style={{ fontSize: "0.95rem" }}>
                Voir tous les articles
              </Link>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.75rem",
            }} className="cat-blog-grid">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cat-blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cat-blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
