import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Mobilier Vintage — Guide d'achat, prix et authentification",
  description:
    "Tout savoir sur le mobilier vintage : meubles mid-century, Art Déco, style industriel. Guide d'achat, estimation des prix, conseils d'entretien et meilleures périodes de l'histoire du design.",
};

const features = [
  {
    icon: "🪑",
    title: "Mid-Century Modern (1940–1970)",
    desc: "L'âge d'or du design scandinave et américain. Lignes épurées, bois clairs, fonctionnalité élégante. Les pièces de Knoll, Herman Miller ou Fritz Hansen restent les plus recherchées.",
    price: "200 € – 8 000 €",
  },
  {
    icon: "🏛️",
    title: "Art Déco (1920–1940)",
    desc: "Symétrie, luxe et modernité des années folles. Bois précieux incrustés, motifs géométriques, ferrures dorées. Buffets, commodes et chaises longues à valeur patrimoniale.",
    price: "500 € – 15 000 €",
  },
  {
    icon: "⚙️",
    title: "Style Industriel",
    desc: "Métaux bruts, acier patiné, bois récupéré. Tendance forte depuis les années 2010, mais déjà ancré dans l'histoire des ateliers et usines du XXe siècle.",
    price: "150 € – 3 500 €",
  },
  {
    icon: "🌿",
    title: "Années 50–70 Françaises",
    desc: "Formica, Skaï, lignes rondes et couleurs pop. Buffets bahut, chaises en plastique Kartell françaises — une madeleine de Proust en vogue sur le marché vintage.",
    price: "80 € – 2 000 €",
  },
];

const tips = [
  {
    icon: "🔎",
    title: "1. Examinez les assemblages",
    desc: "Les chevilles en bois, queues d'aronde et tenons-mortaises sont des indicateurs d'un meuble ancien. Les vis modernes ou l'aggloméré révèlent souvent une reproduction.",
  },
  {
    icon: "🪵",
    title: "2. Identifiez les essences de bois",
    desc: "Chêne, noyer, merisier, palissandre — chaque époque a ses essences favorites. Le bois anciens présente une patine naturelle et des traces d'usure cohérentes.",
  },
  {
    icon: "📐",
    title: "3. Vérifiez les proportions",
    desc: "Les fabricants anciens respectaient des proportions précises. Des meubles trop parfaitement symétriques ou trop légers peuvent indiquer une copie récente.",
  },
  {
    icon: "🏷️",
    title: "4. Cherchez les estampilles et marques",
    desc: "Ébénistes, maisons de design, éditeurs : les estampilles sous les tiroirs ou à l'arrière des meubles multiplient la valeur d'une pièce.",
  },
];

export default function MobilierPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: "70vh" }}>
        <Image
          src="/images/cat-mobilier.jpeg"
          alt="Mobilier vintage authentique collection"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="container hero-content" style={{ width: "100%" }}>
          <div style={{ maxWidth: "600px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Link href="/" style={{ color: "rgba(249,244,237,0.5)", textDecoration: "none", fontFamily: "var(--font-accent)", fontSize: "0.85rem" }}>
                Accueil
              </Link>
              <span style={{ color: "rgba(249,244,237,0.3)" }}>›</span>
              <span style={{ color: "var(--color-amber-light)", fontFamily: "var(--font-accent)", fontSize: "0.85rem" }}>Mobilier</span>
            </div>
            <p className="section-eyebrow" style={{ color: "var(--color-amber-light)" }}>Univers Vintage</p>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}>
              Mobilier Vintage
              <br />
              <span style={{ color: "var(--color-amber-light)" }}>Guide Complet</span>
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.08rem", color: "rgba(249,244,237,0.8)", lineHeight: 1.75, marginBottom: "2rem" }}>
              De l&apos;Art Déco au Mid-Century Modern, tout savoir pour identifier, acheter et entretenir les plus belles pièces de mobilier ancien.
            </p>
            <Link href="/blog" className="btn-primary" style={{ fontSize: "1rem" }}>
              Explorer les articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Styles de mobilier */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Grandes Périodes</p>
            <h2 className="section-title">Styles & Époques du Mobilier Ancien</h2>
            <div className="divider-gold-center" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Chaque décennie du XXe siècle a produit des meubles au caractère unique. Apprenez à reconnaître les grandes tendances pour mieux chiner.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.75rem",
          }} className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="card-patinated" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                  <div className="feature-icon" style={{ flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-secondary)", marginBottom: "0.5rem" }}>
                      {f.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "0.85rem" }}>
                      {f.desc}
                    </p>
                    <div className="price-tag">
                      💰 Fourchette de prix : <strong>{f.price}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .features-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Guide d'authentification */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="auth-grid">
            <div>
              <p className="section-eyebrow">Expertise & Authenticité</p>
              <h2 className="section-title">Comment authentifier<br />un meuble ancien ?</h2>
              <div className="divider-gold" />
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--color-text-light)", marginBottom: "2rem", lineHeight: 1.75 }}>
                Le marché regorge de reproductions et de faux. Voici les indices essentiels que nos experts examinent systématiquement avant d&apos;estimer une pièce.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {tips.map((tip) => (
                  <div key={tip.title} className="card-warm" style={{ padding: "1.25rem 1.5rem" }}>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{tip.icon}</span>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-secondary)", marginBottom: "0.3rem" }}>
                          {tip.title}
                        </h3>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.65 }}>
                          {tip.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "4/5", boxShadow: "var(--shadow-warm)" }}>
              <Image
                src="/images/hero-mobilier.jpeg"
                alt="Authentification mobilier vintage expertise"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .auth-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA Blog */}
      <section className="section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow" style={{ color: "var(--color-amber-light)" }}>Approfondissez vos connaissances</p>
          <h2 className="section-title" style={{ color: "white" }}>Nos articles spécialisés<br />sur le mobilier vintage</h2>
          <div className="divider-gold-center" />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(249,244,237,0.7)", maxWidth: "50ch", margin: "0 auto 2.5rem" }}>
            Retrouvez dans notre blog des guides détaillés sur chaque style, des analyses de prix et des conseils d&apos;entretien pour votre mobilier ancien.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/blog" className="btn-primary">
              Lire le blog →
            </Link>
            <Link href="/electronique" className="btn-outline-light">
              Électronique rétro
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
