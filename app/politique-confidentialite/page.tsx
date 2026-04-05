import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Unikvintage64",
  description:
    "Politique de confidentialité d'Unikvintage64 : données collectées, droits des utilisateurs, cookies et contact DPO.",
};

export default function PolitiqueConfidentialitePage() {
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
            <span style={{ color: "var(--color-amber-light)", fontFamily: "var(--font-accent)", fontSize: "0.86rem" }}>Confidentialité</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
          }}>
            Politique de Confidentialité
          </h1>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          <div className="prose-blog">

            <p>
              La présente politique de confidentialité décrit comment <strong>Unikvintage64</strong> (accessible à l&apos;adresse <a href="https://unikvintage64.com">unikvintage64.com</a>) collecte, utilise et protège les données personnelles de ses visiteurs, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>

            <p style={{ fontStyle: "italic", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est l&apos;éditeur du site Unikvintage64, domicilié à Pau, Pyrénées-Atlantiques (64), France.<br />
              <strong>Contact DPO :</strong> <a href="mailto:contact@unikvintage64.com">contact@unikvintage64.com</a>
            </p>

            <h2>2. Données collectées</h2>
            <p>Unikvintage64 collecte les données suivantes :</p>
            <ul>
              <li><strong>Données de navigation :</strong> adresse IP (anonymisée), type de navigateur, pages visitées, durée de session — dans un cadre d&apos;analytics d&apos;audience.</li>
              <li><strong>Données de contact :</strong> si vous nous contactez par email, nous traitons votre adresse email et le contenu de votre message.</li>
              <li><strong>Cookies techniques :</strong> nécessaires au fonctionnement du site (préférences, session).</li>
            </ul>
            <p>
              <strong>Ce que nous ne collectons pas :</strong> Unikvintage64 ne collecte aucune donnée bancaire, aucun document d&apos;identité et n&apos;effectue aucun profilage commercial.
            </p>

            <h2>3. Finalités du traitement</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul>
              <li>Améliorer le contenu et l&apos;expérience utilisateur du site.</li>
              <li>Répondre à vos demandes de contact.</li>
              <li>Assurer la sécurité et le bon fonctionnement du site.</li>
            </ul>
            <p>
              Nous n&apos;utilisons vos données à aucune fin commerciale, marketing ou publicitaire sans votre consentement explicite.
            </p>

            <h2>4. Durée de conservation</h2>
            <ul>
              <li><strong>Données de navigation :</strong> 13 mois maximum (conformément aux recommandations CNIL).</li>
              <li><strong>Emails de contact :</strong> 3 ans à compter du dernier échange.</li>
            </ul>

            <h2>5. Cookies</h2>
            <p>Unikvintage64 utilise deux types de cookies :</p>
            <ul>
              <li><strong>Cookies techniques essentiels :</strong> indispensables au fonctionnement du site. Ils ne nécessitent pas votre consentement.</li>
              <li><strong>Cookies d&apos;analytics :</strong> permettent de comprendre comment les visiteurs utilisent le site. Ils ne sont déposés qu&apos;après votre accord.</li>
            </ul>
            <p>
              Vous pouvez à tout moment gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>

            <h2>6. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> consulter les données vous concernant.</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes.</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données (&laquo;droit à l&apos;oubli&raquo;).</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer à certains traitements.</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré.</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@unikvintage64.com">contact@unikvintage64.com</a><br />
              Nous répondrons à votre demande dans un délai d&apos;un mois.
            </p>
            <p>
              Vous disposez également du droit d&apos;introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>

            <h2>7. Sécurité des données</h2>
            <p>
              Unikvintage64 met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction. Le site utilise le protocole HTTPS (chiffrement SSL/TLS) pour toutes les communications.
            </p>

            <h2>8. Modifications de cette politique</h2>
            <p>
              Cette politique de confidentialité peut être modifiée à tout moment pour refléter des changements légaux ou de pratiques. Nous vous encourageons à consulter cette page régulièrement.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pour toute question relative à cette politique ou à vos données personnelles :<br />
              <a href="mailto:contact@unikvintage64.com">contact@unikvintage64.com</a>
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
