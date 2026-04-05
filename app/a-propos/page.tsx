import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Notre passion et expertise du vintage",
  description:
    "Découvrez l'histoire d'Unikvintage64, né de la passion de chineurs passionnés des Pyrénées. Notre mission : rendre le vintage accessible à tous les collectionneurs.",
};

const values = [
  {
    icon: "🔍",
    title: "Authenticité avant tout",
    desc: "Nous ne publions que des informations vérifiées par des experts terrain. Pas de théorie sans pratique : chaque guide est fruit d'une expérience réelle de chineur.",
  },
  {
    icon: "📚",
    title: "Expertise accessible",
    desc: "Le savoir des antiquaires ne doit pas rester réservé aux initiés. Nous traduisons les connaissances des spécialistes en guides pratiques pour tous.",
  },
  {
    icon: "🌱",
    title: "Vintage & éco-responsabilité",
    desc: "Acheter vintage, c'est choisir la durabilité contre le consumérisme. Nos guides encouragent une économie circulaire noble, centrée sur les objets de qualité.",
  },
  {
    icon: "🤝",
    title: "Communauté de passionnés",
    desc: "Derrière Unikvintage64, c'est toute une communauté de chineurs, brocanteurs et collectionneurs qui partage son amour des belles pièces d'époque.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: "65vh" }}>
        <Image
          src="/images/about-hero.jpeg"
          alt="Expert vintage authentification objets anciens"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="container hero-content" style={{ width: "100%" }}>
          <div style={{ maxWidth: "600px" }}>
            <p className="section-eyebrow" style={{ color: "var(--color-amber-light)" }}>Notre histoire</p>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}>
              La Passion du Vintage,
              <br />
              <span style={{ color: "var(--color-amber-light)" }}>Notre Raison d&apos;Être</span>
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.08rem", color: "rgba(249,244,237,0.8)", lineHeight: 1.75 }}>
              Unikvintage64 est né au pied des Pyrénées, entre les greniers familiaux et les marchés aux puces de Pau, Bayonne et Biarritz.
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "4rem", alignItems: "start" }} className="histoire-grid">
            <div>
              <p className="section-eyebrow">Depuis 2004</p>
              <h2 className="section-title">Une aventure née dans les greniers béarnais</h2>
              <div className="divider-gold" />

              <div style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--color-text-light)", lineHeight: 1.85 }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  Tout a commencé lors d&apos;un vide-grenier à Pau, en 2004. Étienne, alors étudiant en histoire de l&apos;art, tombe par hasard sur un amplificateur Marantz des années 70, quasi parfait, abandonné pour quelques euros. Une révélation.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  Ce premier achat déclenche une passion dévorante pour les objets du passé — leur histoire, leurs secrets, leur valeur cachée. En vingt ans, notre équipe a expertisé plus de 5 000 pièces, de la radio en bakélite au mobilier Art Déco, en passant par les luminaires spoutnik des années 60.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  Unikvintage64 est née de la frustration de voir des collectionneurs se faire arnaquer par manque d&apos;informations, ou passer à côté de trésors faute de savoir les reconnaître. Notre mission : démocratiser l&apos;expertise vintage.
                </p>
                <p>
                  Aujourd&apos;hui, notre équipe de quatre passionnés — deux historiens de l&apos;art, un restaurateur de mobilier et une chineuse professionnelle — distille ses connaissances dans des guides pratiques, accessibles à tous, du débutant au collectionneur confirmé.
                </p>
              </div>
            </div>

            <div>
              {/* Chiffres clés */}
              <div className="card-patinated" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-secondary)", marginBottom: "1.5rem" }}>
                  En chiffres
                </h3>
                {[
                  { val: "20+", label: "Années d'expérience" },
                  { val: "5 000+", label: "Objets expertisés" },
                  { val: "4", label: "Experts passionnés" },
                  { val: "64", label: "Références aux Pyrénées-Atlantiques" },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.85rem 0",
                    borderBottom: "1px solid var(--color-border-light)",
                  }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--color-primary)" }}>
                      {stat.val}
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-text-muted)", textAlign: "right", maxWidth: "18ch", lineHeight: 1.4 }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="card-warm" style={{ padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  &ldquo;Chaque objet vintage a une âme. Notre rôle est de vous aider à l&apos;entendre.&rdquo;
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--color-text-muted)" }}>
                  — L&apos;équipe Unikvintage64
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .histoire-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Nos valeurs */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Ce qui nous guide</p>
            <h2 className="section-title">Nos Valeurs</h2>
            <div className="divider-gold-center" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.75rem" }} className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="card" style={{ padding: "2rem" }}>
                <div className="feature-icon" style={{ marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--color-secondary)", marginBottom: "0.65rem" }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--color-text-light)", lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .values-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA Contact */}
      <section className="section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow" style={{ color: "var(--color-amber-light)" }}>Parlons vintage</p>
          <h2 className="section-title" style={{ color: "white" }}>Une question sur un objet ?<br />Contactez nos experts</h2>
          <div className="divider-gold-center" />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(249,244,237,0.7)", maxWidth: "50ch", margin: "0 auto 2.5rem" }}>
            Identification, estimation, conseil d&apos;achat ou de revente — notre équipe répond à vos questions avec passion et rigueur.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem" }}>
            Nous écrire →
          </Link>
        </div>
      </section>
    </>
  );
}
