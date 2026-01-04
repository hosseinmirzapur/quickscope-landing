"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing QUICKSCOPE AI (qsai.fun or app.qsai.fun), you agree to these Terms of Service. If you don't agree, stop using the platform immediately.",
        "We reserve the right to modify these terms at any time. Continued use means you accept the changes.",
        "You must be 18+ to use this service. Trading crypto is for adults only.",
      ],
    },
    {
      title: "2. Service Description",
      content: [
        "QUICKSCOPE AI provides real-time token monitoring, security analysis, and AI-powered insights for Solana-based tokens.",
        "We aggregate data from Jupiter, RugCheck, and other third-party APIs. We don't control these sources.",
        "This is a data tool, not investment advice. We don't recommend any specific trades.",
      ],
    },
    {
      title: "3. Risk Disclaimer (READ THIS)",
      content: [
        "Trading memecoins is EXTREMELY RISKY. You can lose 100% of your capital.",
        "Our tool reduces information asymmetry—it does NOT eliminate risk.",
        "RugCheck scores, AI analysis, and safety flags are indicators, not guarantees.",
        "Tokens can still rug pull, crash, or become worthless—even with good scores.",
        "You are solely responsible for your trading decisions. We provide data. You make choices.",
      ],
    },
    {
      title: "4. No Financial Advice",
      content: [
        "Nothing on QUICKSCOPE AI constitutes financial, investment, legal, or tax advice.",
        "TokenSage AI provides data-driven analysis, not recommendations.",
        "Consult a licensed professional before making financial decisions.",
        "We are not financial advisors. We are software engineers.",
      ],
    },
    {
      title: "5. Account & Access",
      content: [
        "You authenticate via Solana wallet. No email required.",
        "You're responsible for securing your wallet and private keys.",
        "We don't store private keys. We can't recover lost access.",
        "Account tiers (FREE, PRO, ALPHA) are enforced via JWT tokens.",
        "We may suspend or terminate accounts for abuse, fraud, or violations.",
      ],
    },
    {
      title: "6. Payment & Subscriptions",
      content: [
        "PRO and ALPHA tiers require payment in USDC via Solana Pay or credit card.",
        "Subscriptions auto-renew monthly unless canceled.",
        "No refunds for partial months. Cancel before renewal to avoid charges.",
        "Whitelisted users receive access by invitation only.",
        "We reserve the right to change pricing with 30 days notice.",
      ],
    },
    {
      title: "7. Data Usage & Privacy",
      content: [
        "We collect wallet addresses, tier info, and usage data.",
        "We don't sell your data to third parties.",
        "API calls may be logged for rate limiting and abuse prevention.",
        "See our Privacy Policy for full details.",
      ],
    },
    {
      title: "8. Service Availability",
      content: [
        "We aim for 99.9% uptime but don't guarantee it.",
        "Downtime may occur during maintenance, upgrades, or outages.",
        "Third-party API failures (Jupiter, RugCheck) may impact functionality.",
        "We're not liable for missed trades due to downtime.",
      ],
    },
    {
      title: "9. Prohibited Activities",
      content: [
        "No API abuse, scraping, or reverse engineering.",
        "No sharing account access or reselling subscriptions.",
        "No using the platform for illegal activities.",
        "No attempting to manipulate data or exploit vulnerabilities.",
        "Violators will be banned immediately.",
      ],
    },
    {
      title: "10. Intellectual Property",
      content: [
        "QUICKSCOPE AI owns all platform code, design, and branding.",
        "You may not copy, reproduce, or redistribute our content.",
        "API data remains property of original sources (Jupiter, RugCheck).",
      ],
    },
    {
      title: "11. Limitation of Liability",
      content: [
        "We provide the platform 'AS IS' with no warranties, express or implied.",
        "We're not liable for trading losses, missed opportunities, or data inaccuracies.",
        "Maximum liability is limited to fees paid in the last 30 days.",
        "We're not responsible for third-party API failures or blockchain issues.",
        "Use at your own risk. Seriously.",
      ],
    },
    {
      title: "12. Dispute Resolution",
      content: [
        "Any disputes will be resolved through binding arbitration.",
        "Arbitration will be conducted in English.",
        "You waive the right to class action lawsuits.",
        "Governing law: jurisdiction where QUICKSCOPE AI is registered.",
      ],
    },
    {
      title: "13. Contact",
      content: [
        "Questions? Email: support@qsai.fun",
        "We respond within 48 hours (usually faster for PRO/ALPHA users).",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            QUICKSCOPE<span className="text-purple-500"> AI</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <FileText className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
                Legal
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              Terms of Service
            </h1>

            <p className="text-zinc-500 text-lg">
              Last updated: January 4, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warning Banner */}
      <motion.div
        className="max-w-4xl mx-auto px-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-2xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-2">
                Critical Risk Disclaimer
              </h3>
              <p className="text-sm text-red-300 leading-relaxed">
                Trading memecoins is EXTREMELY HIGH RISK. You can lose 100% of
                your investment. This platform provides data and tools—NOT
                financial advice. You are solely responsible for your trading
                decisions. Most tokens go to zero. Trade accordingly.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
            >
              <h2 className="text-2xl font-black mb-4 text-white">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, pi) => (
                  <p key={pi} className="text-sm text-zinc-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 p-8 bg-purple-500/5 border border-purple-500/20 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Questions?</h3>
          <p className="text-zinc-500 text-sm mb-4">
            Contact us at{" "}
            <a
              href="mailto:support@qsai.fun"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              support@qsai.fun
            </a>
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm rounded-xl transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
