import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Posez vos questions vintage à nos experts",
  description:
    "Contactez l'équipe Unikvintage64 pour toute question sur l'authentification, l'estimation ou l'achat d'objets vintage. Nous répondons sous 48h.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div style={{
        background: "var(--color-secondary-dark)",
        borderBottom: "1px solid rgba(160, 120, 74, 0.2)",
        padding: "3.5rem 0 3rem",
      }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: "var(--color-primary-light)" }}>Parlons vintage</p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "white",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}>
            Contactez nos Experts
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "rgba(249,244,237,0.7)", maxWidth: "55ch" }}>
            Une question sur un objet vintage, une demande d&apos;estimation ou simplement l&apos;envie d&apos;échanger avec des passionnés ?
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }} className="contact-grid">

            {/* Infos contact */}
            <div>
              <p className="section-eyebrow">Nous écrire</p>
              <h2 className="section-title">Comment nous contacter&nbsp;?</h2>
              <div className="divider-gold" />

              <div style={{
                background: "var(--color-primary-pale)",
                border: "1px solid var(--color-border-warm)",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                marginBottom: "2rem",
              }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-secondary)", marginBottom: "0.5rem" }}>
                  Adresse email
                </p>
                <a
                  href="mailto:contact@unikvintage64.com"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  contact@unikvintage64.com
                </a>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--color-text-light)", lineHeight: 1.7 }}>
                  Nous répondons à toutes les demandes sous <strong>48 heures ouvrables</strong>, avec le soin et la rigueur qui caractérisent notre approche du vintage.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "🔍", title: "Identification d'objet", desc: "Vous avez trouvé une pièce mystérieuse ? Envoyez-nous des photos et une description." },
                  { icon: "💰", title: "Estimation de valeur", desc: "Avant d'acheter ou vendre, demandez une estimation indicative à nos experts." },
                  { icon: "📚", title: "Suggestions de guides", desc: "Un sujet vintage qui vous tient à cœur et qu'on n'a pas encore traité ? Dites-nous !" },
                  { icon: "🤝", title: "Partenariats", desc: "Brocanteur, antiquaire, plateforme de vente ? Parlons de collaboration." },
                ].map((item) => (
                  <div key={item.title} className="card-warm" style={{ padding: "1.25rem" }}>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-secondary)", marginBottom: "0.25rem" }}>
                          {item.title}
                        </h3>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Localisation et engagement */}
            <div>
              <div className="card" style={{ padding: "2.5rem", marginBottom: "2rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📍</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--color-secondary)", marginBottom: "0.75rem" }}>
                  Ancrés dans les Pyrénées-Atlantiques
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--color-text-light)", lineHeight: 1.75 }}>
                  Basés à Pau, dans le Béarn, nous sommes au cœur d&apos;une région riche en marchés aux puces, vide-greniers et antiquaires. Le département 64 des Pyrénées-Atlantiques donne son nom à notre site.
                </p>
              </div>

              <div className="card-patinated" style={{ padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--color-secondary)", marginBottom: "1.25rem" }}>
                  ✦ Notre engagement qualité
                </h3>
                {[
                  "Réponse sous 48h ouvrables",
                  "Conseils désintéressés et objectifs",
                  "Confidentialité garantie de vos demandes",
                  "Expertise basée sur l'expérience terrain",
                ].map((eng) => (
                  <div key={eng} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.65rem 0",
                    borderBottom: "1px solid var(--color-border-light)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "var(--color-text-light)",
                  }}>
                    <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>✓</span>
                    {eng}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <a
                  href="mailto:contact@unikvintage64.com"
                  className="btn-primary"
                  style={{ display: "inline-flex", fontSize: "1rem" }}
                >
                  ✉ Écrire à nos experts →
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
