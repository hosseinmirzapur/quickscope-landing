import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://qsai.fun"),
  title: "QUICKSCOPE AI - Solana Sniper Terminal",
  description:
    "See launches first. Decide faster. Win before the herd. Real-time Pump.fun monitoring with AI-powered analysis and instant execution.",
  keywords:
    "solana, pump.fun, memecoin sniper, trading terminal, rugcheck, AI analysis, token scanner, solana trading",
  authors: [{ name: "QUICKSCOPE AI" }],
  openGraph: {
    title: "QUICKSCOPE AI - Solana Sniper Terminal",
    description:
      "Real-time Pump.fun monitoring with AI analysis. Trade faster.",
    url: "https://qsai.fun",
    siteName: "QUICKSCOPE AI",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "QUICKSCOPE AI - Solana Sniper Terminal",
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
    creator: "@quickscope_ai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
