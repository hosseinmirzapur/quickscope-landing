"use client";

import { Suspense } from "react";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LiveSpeed from "./components/LiveSpeed";
import SafetySignals from "./components/SafetySignals";
import TierSystem from "./components/TierSystem";
import TokenSageAI from "./components/TokenSageAI";
import TradingTerminals from "./components/TradingTerminals";
import TrustArchitecture from "./components/TrustArchitecture";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      <LiveSpeed />
      <SafetySignals />
      <TokenSageAI />
      <TradingTerminals />
      <TierSystem />
      <TrustArchitecture />
      <FinalCTA />
      <Footer />
    </main>
  );
}
