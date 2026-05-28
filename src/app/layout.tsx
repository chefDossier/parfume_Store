import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Importation du Footer sensationnel

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison Aura | Haute Parfumerie & Fragrances d'Exception",
  description: "Découvrez Maison Aura, créateur de fragrances invisibles et mémorables. Explorez nos collections de parfums de luxe, extraits de parfum et réalisez votre diagnostic olfactif personnalisé.",
  keywords: ["parfumerie de luxe", "parfum sur mesure", "Maison Aura", "extraits de parfum", "haute parfumerie", "fragrances"],
  authors: [{ name: "Maison Aura" }],
  openGraph: {
    title: "Maison Aura | Haute Parfumerie",
    description: "Chaque fragrance raconte une histoire invisible, capturée dans un flacon d'exception.",
    url: "https://maison-aura.com",
    siteName: "Maison Aura",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fcfbfa] text-neutral-900 selection:bg-[#fef2f2] selection:text-[#e21e26]">
        {/* Le Header fixe qui chapeautera toutes les pages de ta boutique */}
        <Header />
        
        {/* Conteneur principal qui laisse de l'espace pour le header fixe si nécessaire */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Le Footer élégant ancré au pied de toutes les pages */}
        <Footer />
      </body>
    </html>
  );
}