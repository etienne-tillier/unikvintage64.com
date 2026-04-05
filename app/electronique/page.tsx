import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Électronique Rétro — Guide d'achat Hi-Fi, radios et téléviseurs anciens",
  description:
    "Amplificateurs à lampes, platines vinyles, radios d'époque, téléviseurs rétro : guide complet pour acheter, authentifier et restaurer l'électronique vintage. Prix et conseils d'experts.",
};

const categories = [
  {
    icon: "📻",
    title: "Radios & Transistors",
    period: "1930 – 1970",
    desc: "Des postes en bakélite des années 30 aux transistors colorés des 60-70, la radio vintage incarne une époque révolue. Les marques Telefunken, Grundig et Philips dominent le marché.",
    price: "30 € – 800 €",
    tips: "Testr toujours le son avant d'acheter. Une radio qui fonctionne vaut 3 à 5 fois plus.",
  },
  {
    icon: "🎵",
    title: "Hi-Fi & Amplificateurs",
    period: "1960 – 1985",
    desc: "L'âge d'or de la haute-fidélité : amplis à lampes, platines vinyles Thorens et Dual, enceintes vintage. Le son analogique fait son grand retour chez les mélomanes exigeants.",
    price: "100 € – 5 000 €",
    tips: "Les amplis à lampes nécessitent souvent un recâblage. Prévoir 150-400 € pour une révision professionnelle.",
  },
  {
    icon: "📺",
    title: "Téléviseurs Vintage",
    period: "1950 – 1980",
    desc: "Premiers postes en bois, télés oeuf des années 70, Trinatron de Sony — les téléviseurs anciens transforment un intérieur. Déco plébiscitée, restauration complexe.",
    price: "50 € – 1 500 €",
    tips: "Un téléviseur en état de marche vaut 2 à 4 fois plus qu'un modèle décoratif uniquement.",
  },
  {
    icon: "🕹️",
    title: "Jeux Vidéo Rétro",
    period: "1970 – 2000",
    desc: "Atari, Nintendo NES, Sega Megadrive, Game Boy — le rétrogaming explose. Les boîtes complètes et jeux CIB (Complete In Box) atteignent des prix records aux enchères.",
    price: "10 € – 3 000 €",
    tips: "Les jeux dans leur boîte avec notice valent 5 à 10 fois plus que cartouches seules.",
  },
];

const brands = [
  { name: "Telefunken", icon: "🇩🇪", spec: "Radio & Hi-Fi" },
  { name: "Grundig", icon: "📡", spec: "Électronique générale" },
  { name: "Philips", icon: "🇳🇱", spec: "Audio & TV" },
  { name: "Thorens", icon: "🎵", spec: "Platines vinyles" },
  { name: "Bang & Olufsen", icon: "💎", spec: "Design premium" },
  { name: "Marantz", icon: "🔊", spec: "Amplis & tuners" },
];

export default function ElectroniqueRetroPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: "70vh" }}>
        <Image
          src="/images/cat-electronics.jpeg"
          alt="Électronique rétro vintage collection"
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
              <span style={{ color: "var(--color-amber-light)", fontFamily: "var(--font-accent)", fontSize: "0.85rem" }}>Électronique</span>
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
              Électronique Rétro
              <br />
              <span style={{ color: "var(--color-amber-light)" }}>Guide Expert</span>
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.08rem", color: "rgba(249,244,237,0.8)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Hi-fi à lampes, radios en bakélite, jeux vidéo d&apos;enfance — tout ce qu&apos;il faut savoir pour collectionner l&apos;électronique vintage avec expertise.
            </p>
            <Link href="/blog" className="btn-primary" style={{ fontSize: "1rem" }}>
              Lire nos guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Catégories électronique */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Types de Collectibles</p>
            <h2 className="section-title">Les Grandes Familles<br />de l&apos;Électronique Vintage</h2>
            <div className="divider-gold-center" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              De la radio en bakélite au jeu vidéo d&apos;antan, chaque catégorie cache ses pépites pour le chineur averti.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }} className="elec-grid">
            {categories.map((cat) => (
              <div key={cat.title} className="card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div className="feature-icon" style={{ flexShrink: 0 }}>{cat.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-secondary)", marginBottom: "0.1rem" }}>
                      {cat.title}
                    </h3>
                    <span className="badge badge-gold">{cat.period}</span>
                  </div>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {cat.desc}
                </p>
                <div className="price-tag" style={{ marginBottom: "0.75rem" }}>
                  💰 {cat.price}
                </div>
                <div style={{
                  background: "var(--color-accent-pale)",
                  border: "1px solid var(--color-accent-light)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.65rem 1rem",
                  fontSize: "0.85rem",
                  color: "var(--color-accent-dark)",
                  fontFamily: "var(--font-body)",
                }}>
                  💡 Conseil : {cat.tips}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .elec-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Marques de référence */}
      <section className="section-warm">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p className="section-eyebrow">Marques Collectibles</p>
            <h2 className="section-title">Les Grandes Marques à Connaître</h2>
            <div className="divider-gold-center" />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Ces fabricants iconiques du siècle dernier font loi sur le marché vintage électronique. Leurs noms sur un appareil multiplient immédiatement la valeur.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }} className="brands-grid">
            {brands.map((brand) => (
              <div key={brand.name} className="card-warm" style={{
                padding: "1.5rem",
                textAlign: "center",
                cursor: "default",
              }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{brand.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--color-secondary)", marginBottom: "0.3rem" }}>
                  {brand.name}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                  {brand.spec}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .brands-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .brands-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow" style={{ color: "var(--color-amber-light)" }}>Continuez votre exploration</p>
          <h2 className="section-title" style={{ color: "white" }}>Du mobilier aux vinyles :<br />l&apos;univers vintage complet</h2>
          <div className="divider-gold-center" />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(249,244,237,0.7)", maxWidth: "50ch", margin: "0 auto 2.5rem" }}>
            Explorez toutes nos thématiques vintage et trouvez les guides qui correspondent à votre passion de collectionneur.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/mobilier" className="btn-primary">
              Mobilier vintage →
            </Link>
            <Link href="/blog" className="btn-outline-light">
              Tous les articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
