import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison Plus SARL | BTP, Locations Meublées & Services Immobiliers",
  description: "Maison Plus SARL : Rénovation BTP, construction, locations meublées haut de gamme, conciergerie digitale et assistance. Votre maison, où que vous soyez, avec un peu plus.",
  keywords: ["Maison Plus", "BTP", "Locations Meublées", "Conciergerie Digitale", "Pack Bienvenue", "Assurance Location", "Rénovation Paris", "Services Immobiliers"],
  authors: [{ name: "Maison Plus SARL" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, playfair.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
