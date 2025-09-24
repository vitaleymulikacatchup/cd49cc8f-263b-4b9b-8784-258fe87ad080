import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemeCoinLab",
  description: "A playful, single-page memecoin site with a simple buy guide, clear tokenomics, and a vibrant hero.",
  keywords: ["memecoin","crypto","token","how to buy","tokenomics","community","landing page","fun","crypto meme","buy memecoin"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "MemeCoinLab",
    description: "A playful, single-page memecoin site with a simple buy guide, clear tokenomics, and a vibrant hero.",
    type: "website",
    url: "/",
    siteName: "MemeCoinLab",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "MemeCoinLab",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemeCoinLab",
    description: "A playful, single-page memecoin site with a simple buy guide, clear tokenomics, and a vibrant hero.",
    images: ["/images/logo.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}