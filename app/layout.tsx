import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

// @ts-ignore
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUICKSCOPE AI - Solana Sniper Terminal",
  description:
    "Snipe before the herd wakes up. Real-time Pump.fun monitoring with AI-powered analysis, rug checks, and instant execution on Solana.",
  keywords: [
    "solana sniper",
    "pump.fun dashboard",
    "memecoin trading",
    "solana token scanner",
    "rugcheck",
    "AI token analysis",
    "solana trading bot",
    "meme coin sniper",
    "solana real-time monitor",
  ].join(", "),
  authors: [{ name: "QUICKSCOPE AI Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "QUICKSCOPE AI - Dominate Solana Memecoin Launches",
    description:
      "Real-time monitoring, AI signals, and one-click execution for Pump.fun alphas.",
    url: "https://qsai.fun",
    siteName: "QUICKSCOPE AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QUICKSCOPE.AI Solana Sniper Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QUICKSCOPE AI - Solana Sniper Terminal",
    description: "See launches first. Decide faster. Win before the herd.",
    images: ["/logo.jpg"],
    creator: "@quickscope_ai", // Assuming our X handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "QUICKSCOPE AI",
      description:
        "Real-time Solana trading intelligence for Pump.fun launches",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    }),
  },
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} antialiased bg-black text-zinc-100 min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
