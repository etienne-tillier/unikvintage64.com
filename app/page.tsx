import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Unikvintage64 - Guide complet des objets vintage et antiquités",
  description:
    "Découvrez l'univers du vintage : guides d'achat, prix, authentification et conseils pour meubles, vinyles, objets anciens. Expertise vintage depuis 1900.",
};

const categories = [
  {
    title: "Mobilier Vintage",
    slug: "mobilier",
    icon: "🪑",
    description: "Fauteuils, tables, buffets d'époque",
    href: "/mobilier",
    img: "/images/hero-mobilier.jpeg",
  },
  {
    title: "Électronique Rétro",
    slug: "electronique",
    icon: "📻",
    description: "Hi-fi, téléviseurs, radios anciens",
    href: "/electronique",
    img: "/images/cat-electronics.jpeg",
  },
  {
    title: "Vinyles & Musique",
    slug: "vinyles",
    icon: "🎵",
    description: "Disques vinyl, platines, juke-box",
    href: "/blog",
    img: "/images/hero-vinyl.jpeg",
  },
  {
    title: "Luminaires",
    slug: "luminaires",
    icon: "💡",
    description: "Lampes spoutnik, appliques rétro",
    href: "/blog",
    img: "/images/hero-lighting.jpeg",
  },
  {
    title: "Objets déco",
    slug: "deco",
    icon: "🏺",
    description: "Bibelots, céramiques, tableaux vintage",
    href: "/blog",
    img: "/images/hero-deco.jpeg",
  },
];

const expertises = [
  {
    num: "20+",
    label: "ans d'expertise",
    desc: "Nous collectionnons, évaluons et authentifions des objets vintage depuis plus de deux décennies.",
  },
  {
    num: "5 000+",
    label: "objets expertisés",
    desc: "Mobilier, électronique, vinyles, luminaires… une connaissance encyclopédique du marché vintage.",
  },
  {
    num: "100%",
    label: "contenu authentique",
    desc: "Chaque guide est rédigé par des passionnés, jamais des algorithmes.",
  },
];

export default async function HomePage() {
  const posts = await getPublishedBlogPosts(6, 0);

  return (
    <>
      {/* ============================================
          HERO
      ============================================ */}
      <section className="hero patina-texture">
        <Image
          src="/images/hero-home.jpeg"
          alt="Collection vintage objets anciens"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-glow" />

        <div className="container hero-content" style={{ width: "100%" }}>
          <div style={{ maxWidth: "640px" }}>
            <div className="animate-fade-up" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(160, 120, 74, 0.18)",
              border: "1px solid rgba(200, 151, 74, 0.35)",
              borderRadius: "2px",
              padding: "0.4rem 1rem",
              marginBottom: "1.5rem",
            }}>
              <span style={{ color: "var(--color-amber-light)", fontSize: "0.75rem", letterSpacing: "0.16em", fontFamily: "var(--font-accent)", textTransform: "uppercase" }}>
                ✦ Depuis 1900 jusqu&apos;à nos jours ✦
              </span>
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.12,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Découvrez l&apos;art
              <br />
              <span style={{
                background: "linear-gradient(135deg, #C8974A 0%, #DEB96A 60%, #A0784A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                du Vintage
              </span>
            </h1>

            <p
              className="animate-fade-up delay-200"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.18rem",
                color: "rgba(249, 244, 237, 0.80)",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
                maxWidth: "52ch",
              }}
            >
              Guides d&apos;achat, authentification, évaluation des prix — tout ce qu&apos;il faut pour chiner, collectionner et revendre en expert averti.
            </p>

            <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/blog" className="btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
                Explorer nos guides →
              </Link>
              <Link href="/a-propos" className="btn-outline-light" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
                Notre expertise
              </Link>
            </div>
          </div>

          {/* Stats flottantes */}
          <div
            className="hero-stats animate-fade-up delay-500"
            style={{
              position: "absolute",
              bottom: "2.5rem",
              right: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(3, auto)",
              gap: "1.5rem",
              background: "rgba(30, 18, 8, 0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(160, 120, 74, 0.25)",
              borderRadius: "6px",
              padding: "1.25rem 2rem",
            }}
          >
            {[
              { val: "1900", label: "Depuis" },
              { val: "5K+", label: "Objets expertisés" },
              { val: "100%", label: "Authentique" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--color-amber-light)",
                  lineHeight: 1,
                }}>
                  {s.val}
                </div>
                <div style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(249, 244, 237, 0.55)",
                  marginTop: "0.3rem",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-stats { display: none !important; }
          }
        `}</style>
      </section>

      {/* ============================================
          CATÉGORIES VINTAGE
      ============================================ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Collections & Univers</p>
            <h2 className="section-title">Catégories Vintage</h2>
            <div className="divider-gold-center" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Du mobilier mid-century aux appareils électroniques rétro, explorez chaque univers du vintage avec nos guides spécialisés.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1.25rem",
          }} className="categories-grid">
            {categories.map((cat, i) => (
              <Link key={cat.slug} href={cat.href} style={{ textDecoration: "none" }}>
                <div
                  className={`category-card animate-fade-up delay-${(i + 1) * 100}`}
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="category-card-overlay" />
                  <div className="category-card-content">
                    <div style={{
                      fontSize: "2rem",
                      marginBottom: "0.5rem",
                    }}>
                      {cat.icon}
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "0.3rem",
                    }}>
                      {cat.title}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      color: "rgba(249,244,237,0.7)",
                      lineHeight: 1.4,
                    }}>
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .categories-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .categories-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ============================================
          GUIDES POPULAIRES
      ============================================ */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
            className="guide-grid">
            {/* Texte gauche */}
            <div>
              <p className="section-eyebrow">Guides pratiques</p>
              <h2 className="section-title">Acheter vintage<br />en toute confiance</h2>
              <div className="divider-gold" />
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--color-text-light)",
                marginBottom: "2rem",
                lineHeight: 1.75,
              }}>
                Le marché du vintage peut être complexe. Nos guides vous donnent les clés pour identifier une pièce authentique, en estimer la valeur et l&apos;acheter au juste prix.
              </p>

              {[
                { icon: "🔍", title: "Comment évaluer un meuble ancien", sub: "Marqueterie, patine, ferrures — tous les indices d'authenticité" },
                { icon: "📊", title: "Guide des prix 2024 par catégorie", sub: "Fourchettes de prix actuelles sur le marché vintage français" },
                { icon: "🛍️", title: "Où acheter du vintage de qualité", sub: "Brocantes, sites en ligne, enchères : notre sélection d'adresses" },
                { icon: "🧹", title: "Entretien et restauration", sub: "Techniques pour préserver et valoriser vos pièces vintage" },
              ].map((guide) => (
                <Link key={guide.title} href="/blog" style={{ textDecoration: "none" }}>
                  <div className="guide-item" style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1rem",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "0.75rem",
                  }}>
                    <div className="feature-icon" style={{ flexShrink: 0 }}>{guide.icon}</div>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        color: "var(--color-secondary)",
                        marginBottom: "0.2rem",
                      }}>
                        {guide.title}
                      </h3>
                      <p style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.88rem",
                        color: "var(--color-text-muted)",
                      }}>
                        {guide.sub}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              <Link href="/blog" className="btn-primary" style={{ marginTop: "1rem", display: "inline-flex" }}>
                Tous nos guides →
              </Link>
            </div>

            {/* Image droite */}
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "4/5", boxShadow: "var(--shadow-warm)" }}>
              <Image
                src="/images/cat-mobilier.jpeg"
                alt="Mobilier vintage authentique expertise"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Badge sophistication */}
              <div style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(30, 18, 8, 0.88)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(200, 151, 74, 0.4)",
                borderRadius: "var(--radius-md)",
                padding: "0.85rem 1.25rem",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.65rem", color: "var(--color-amber-light)", lineHeight: 1 }}>
                  ✦
                </div>
                <div style={{ fontFamily: "var(--font-accent)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(249,244,237,0.7)", marginTop: "0.3rem" }}>
                  Expertise<br />certifiée
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .guide-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ============================================
          DERNIERS ARTICLES BLOG
      ============================================ */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p className="section-eyebrow">Blog & Actualités</p>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Derniers Articles</h2>
              <div className="divider-gold" style={{ marginBottom: 0 }} />
            </div>
            <Link href="/blog" className="btn-outline" style={{ fontSize: "0.9rem", padding: "0.6rem 1.4rem" }}>
              Voir tous les articles
            </Link>
          </div>

          {posts.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "var(--color-surface-warm)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-light)",
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📝</div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-secondary)", marginBottom: "0.5rem" }}>
                Aucun article publié pour le moment.
              </p>
              <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
                Nos experts préparent du contenu de qualité sur l&apos;univers vintage.
              </p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }} className="blog-grid">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .blog-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ============================================
          SECTION EXPERTISE & CONFIANCE
      ============================================ */}
      <section className="section-dark patina-texture">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow" style={{ color: "var(--color-amber-light)" }}>Notre promesse</p>
            <h2 className="section-title" style={{ color: "white" }}>Une expertise authentique<br />au service du vintage</h2>
            <div className="divider-gold-center" />
            <p className="section-subtitle" style={{ margin: "0 auto", color: "rgba(249,244,237,0.7)" }}>
              Unikvintage64 est né de la passion de chineurs aguerris. Chaque guide, chaque évaluation de prix est le fruit d&apos;une expérience terrain accumulée depuis des décennies.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }} className="expertise-grid">
            {expertises.map((exp) => (
              <div key={exp.num} className="expertise-card" style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(160, 120, 74, 0.25)",
                borderRadius: "var(--radius-md)",
                padding: "2.5rem 2rem",
                textAlign: "center",
                backdropFilter: "blur(4px)",
                transition: "all var(--transition)",
              }}>
                <div className="expertise-num">{exp.num}</div>
                <div style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-amber-light)",
                  marginBottom: "0.75rem",
                }}>
                  {exp.label}
                </div>
                <div className="deco-line" style={{ margin: "0.75rem auto 1rem", width: "40px" }} />
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.97rem",
                  color: "rgba(249,244,237,0.68)",
                  lineHeight: 1.7,
                }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/a-propos" className="btn-outline-light" style={{ marginRight: "1rem" }}>
              Notre histoire
            </Link>
            <Link href="/contact" className="btn-primary">
              Nous écrire →
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .expertise-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ============================================
          SECTION NEWSLETTER / CTA FINAL
      ============================================ */}
      <section className="section-warm">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }} className="cta-final-grid">
            <div>
              <p className="section-eyebrow">Ensemble, on va chiner</p>
              <h2 className="section-title">Rejoignez la communauté<br />des passionnés du vintage</h2>
              <div className="divider-gold" />
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--color-text-light)",
                marginBottom: "2rem",
                lineHeight: 1.75,
              }}>
                Que vous soyez chineur du dimanche ou collectionneur aguerri, nos guides vous aident à trouver les plus belles pièces, au meilleur prix, dans les meilleures conditions.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/mobilier" className="btn-primary">
                  Explorer le mobilier →
                </Link>
                <Link href="/electronique" className="btn-outline">
                  Électronique rétro
                </Link>
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "1/1", boxShadow: "var(--shadow-warm)" }}>
              <Image
                src="/images/hero-deco.jpeg"
                alt="Objets décoratifs vintage et antiquités"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(30,18,8,0.2) 0%, transparent 60%)",
              }} />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .cta-final-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
