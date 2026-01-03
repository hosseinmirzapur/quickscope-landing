"use client";

import { motion, useInView } from "framer-motion";
import { Star, Crown, Zap, Check } from "lucide-react";
import { useRef } from "react";

export default function TierSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const tiers = [
    {
      name: "FREE",
      icon: Zap,
      price: "$0",
      period: "forever",
      tokens: "10 tokens",
      ai: "Limited AI",
      features: [
        "10 token limit",
        "Real-time updates",
        "Basic security checks",
        "Community alerts",
      ],
      cta: "Start Free",
      highlight: false,
      color: "zinc",
    },
    {
      name: "PRO",
      icon: Star,
      price: "$25",
      period: "per month",
      tokens: "50 tokens",
      ai: "50 AI queries/mo",
      features: [
        "50 token limit",
        "Full security audits",
        "TokenSage AI chat",
        "Priority support",
      ],
      cta: "Go Pro",
      highlight: false,
      color: "blue",
    },
    {
      name: "ALPHA",
      icon: Crown,
      price: "$99",
      period: "per month",
      tokens: "100 tokens",
      ai: "200 AI queries/mo",
      features: [
        "100 token limit",
        "Advanced AI analysis",
        "Priority alerts",
        "Dedicated support",
      ],
      cta: "Go Alpha",
      highlight: true,
      color: "purple",
    },
    {
      name: "WHITELISTED",
      icon: Crown,
      price: "Invite",
      period: "only",
      tokens: "Unlimited",
      ai: "Unlimited AI",
      features: [
        "Full access",
        "Unlimited tokens",
        "Unlimited AI",
        "VIP support",
      ],
      cta: "Request Access",
      highlight: false,
      color: "yellow",
    },
  ];

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Crown className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
              Access Levels
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Pick your power level.
            <br />
            <span className="text-purple-500">Upgrade anytime.</span>
          </h2>

          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Start free. Scale as you win. ALPHA tier for serious operators.
            Whitelist by invitation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`relative group ${tier.highlight ? "lg:scale-105" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {tier.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity rounded-2xl" />
              )}

              <div
                className={`relative h-full p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  tier.highlight
                    ? "bg-purple-500/10 border-2 border-purple-500/30 group-hover:border-purple-500/50"
                    : "bg-zinc-900/50 border border-zinc-800 group-hover:border-zinc-700"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-black rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <tier.icon
                    className={`w-8 h-8 ${
                      tier.highlight
                        ? "text-purple-400"
                        : tier.name === "WHITELISTED"
                          ? "text-yellow-400"
                          : "text-zinc-400"
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-black mb-2">{tier.name}</h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">
                      {tier.price}
                    </span>
                    {tier.period !== "only" && (
                      <span className="text-sm text-zinc-600">
                        /{tier.period}
                      </span>
                    )}
                  </div>
                  {tier.period === "only" && (
                    <p className="text-xs text-zinc-600 mt-1">
                      Elite access granted
                    </p>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between p-2 bg-black/30 rounded-lg">
                    <span className="text-xs text-zinc-400">Tokens</span>
                    <span className="text-sm font-bold text-white">
                      {tier.tokens}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-black/30 rounded-lg">
                    <span className="text-xs text-zinc-400">AI Access</span>
                    <span className="text-sm font-bold text-white">
                      {tier.ai}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          tier.highlight
                            ? "text-purple-400"
                            : tier.name === "WHITELISTED"
                              ? "text-yellow-400"
                              : "text-zinc-600"
                        }`}
                      />
                      <span className="text-zinc-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                    tier.highlight
                      ? "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                      : tier.name === "WHITELISTED"
                        ? "bg-yellow-600 hover:bg-yellow-500 text-black"
                        : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-zinc-500 text-sm">
            All tiers include real-time updates, safety indicators, and terminal
            access. Upgrade or downgrade anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
