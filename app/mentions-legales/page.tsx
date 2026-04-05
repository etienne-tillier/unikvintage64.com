import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Unikvintage64",
  description: "Mentions légales du site Unikvintage64.com : éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div style={{
        background: "var(--color-secondary-dark)",
        borderBottom: "1px solid rgba(160, 120, 74, 0.2)",
        padding: "3rem 0 2.5rem",
      }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <Link href="/" style={{ color: "rgba(249,244,237,0.5)", textDecoration: "none", fontFamily: "var(--font-accent)", fontSize: "0.86rem" }}>
              Accueil
            </Link>
            <span style={{ color: "rgba(249,244,237,0.3)", fontSize: "0.8rem" }}>›</span>
            <span style={{ color: "var(--color-amber-light)", fontFamily: "var(--font-accent)", fontSize: "0.86rem" }}>Mentions légales</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
          }}>
            Mentions Légales
          </h1>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          <div className="prose-blog">

            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>unikvintage64.com</strong> est édité par Unikvintage64, sous la responsabilité d&apos;un particulier domicilié dans les Pyrénées-Atlantiques (64), France.
            </p>
            <p>
              <strong>Email de contact :</strong> <a href="mailto:contact@unikvintage64.com">contact@unikvintage64.com</a>
            </p>
            <p>
              <strong>Directeur de la publication :</strong> L&apos;équipe éditoriale Unikvintage64
            </p>

            <h2>2. Hébergeur</h2>
            <p>
              Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, guides, analyses de prix, graphiques) est protégé par le droit d&apos;auteur et constitue la propriété exclusive d&apos;Unikvintage64, sauf mention contraire explicite.
            </p>
            <p>
              Toute reproduction, distribution, modification ou utilisation commerciale du contenu, en tout ou en partie, sans autorisation écrite préalable est strictement interdite.
            </p>
            <p>
              Les images référencées depuis des tiers (plateformes de vente, bases iconographiques) restent la propriété de leurs auteurs respectifs. Nous les utilisons dans un cadre éditorial et informatif.
            </p>

            <h2>4. Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. Unikvintage64 ne saurait être tenu responsable du contenu de ces sites externes. La mise en place de liens hypertextes vers unikvintage64.com est autorisée sous réserve de ne pas nuire à l&apos;image du site.
            </p>

            <h2>5. Responsabilité éditoriale</h2>
            <p>
              Les guides, estimations de prix et conseils publiés sur ce site ont une vocation <strong>purement informative</strong>. Ils ne constituent pas des évaluations professionnelles certifiées. Unikvintage64 décline toute responsabilité en cas de transaction basée uniquement sur les informations publiées sur ce site.
            </p>
            <p>
              Pour une expertise officielle d&apos;un objet, nous recommandons de consulter un commissaire-priseur ou un expert agréé.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking ou de publicité ciblée n&apos;est utilisé sans votre consentement explicite.
            </p>
            <p>
              Pour plus d&apos;informations, consultez notre <Link href="/politique-confidentialite">politique de confidentialité</Link>.
            </p>

            <h2>7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents sont ceux du ressort de Pau (Pyrénées-Atlantiques, France).
            </p>

            <h2>8. Contact</h2>
            <p>
              Pour toute question relative à ces mentions légales ou au contenu du site, contactez-nous à l&apos;adresse : <a href="mailto:contact@unikvintage64.com">contact@unikvintage64.com</a>
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
