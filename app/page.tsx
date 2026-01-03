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
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center text-zinc-400">
            Loading Speed Insights...
          </div>
        }
      >
        <LiveSpeed />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center text-zinc-400">
            Loading Safety Protocols...
          </div>
        }
      >
        <SafetySignals />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center text-zinc-400">
            Loading AI Analysis...
          </div>
        }
      >
        <TokenSageAI />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center text-zinc-400">
            Loading Trading Tools...
          </div>
        }
      >
        <TradingTerminals />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center text-zinc-400">
            Loading Access Levels...
          </div>
        }
      >
        <TierSystem />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center text-zinc-400">
            Loading Architecture...
          </div>
        }
      >
        <TrustArchitecture />
      </Suspense>
      <FinalCTA />
      <Footer />
    </main>
  );
}
