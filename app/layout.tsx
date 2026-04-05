import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Unikvintage64 - Guide complet des objets vintage et antiquités",
    template: "%s | Unikvintage64",
  },
  description:
    "Découvrez l'univers du vintage : guides d'achat, prix, authentification et conseils pour meubles, vinyles, objets anciens. Expertise vintage depuis 1900.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Unikvintage64 - Votre expert en objets vintage",
    description:
      "Mobilier vintage, électronique rétro, vinyles, luminaires spoutnik... Guides d'achat, estimations de prix et conseils d'experts pour passionnés de vintage.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unikvintage64 - Guide complet des objets vintage",
    description:
      "Découvrez l'univers du vintage : guides d'achat, prix, authentification et conseils pour meubles, vinyles, objets anciens.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
