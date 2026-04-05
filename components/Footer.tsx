import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Decorative top line */}
        <div style={{
          marginBottom: "3rem",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}>
          <div className="deco-line" style={{ flex: 1 }} />
          <span style={{ color: "var(--color-amber-light)", fontSize: "1rem", opacity: 0.7 }}>✦</span>
          <div className="deco-line" style={{ flex: 1 }} />
        </div>

        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr repeat(3, 1fr)",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(160, 120, 74, 0.18)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.1rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #7D5C35 0%, #A0784A 50%, #C8974A 100%)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                border: "1px solid rgba(200,151,74,0.3)",
              }}>
                🏺
              </div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--color-amber-light)",
              }}>
                Unikvintage64
              </div>
            </div>
            <p style={{ fontSize: "0.97rem", lineHeight: 1.75, marginBottom: "1.35rem", maxWidth: "26ch", fontFamily: "var(--font-body)" }}>
              La référence française pour les passionnés du vintage, collectionneurs et chineurs passionnés.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                color: "var(--color-amber-light)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                fontFamily: "var(--font-accent)",
              }}
            >
              ✉ {siteConfig.email}
            </a>
          </div>

          {/* Nav columns */}
          {siteConfig.footerNav.map((col) => (
            <div key={col.title}>
              <p className="footer-title">{col.title}</p>
              {col.links.map((link) => (
                <Link key={link.href + link.title} href={link.href} className="footer-link">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "1.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ fontSize: "0.82rem", color: "rgba(249, 244, 237, 0.42)", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Unikvintage64. Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/mentions-legales" className="footer-link" style={{ fontSize: "0.82rem" }}>
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="footer-link" style={{ fontSize: "0.82rem" }}>
              Confidentialité
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
