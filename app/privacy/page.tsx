"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Eye, Database } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. What We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Wallet Data",
          text: "We collect your Solana wallet address when you connect. This is used for authentication and tier enforcement. We do NOT store your private keys—ever.",
        },
        {
          subtitle: "Usage Data",
          text: "We log API calls, page views, and feature usage. This helps us improve performance and detect abuse. Logs are anonymized after 30 days.",
        },
        {
          subtitle: "Payment Info",
          text: "For PRO/ALPHA tiers, we process payments via Solana Pay or Stripe. We don't store credit card numbers—payment processors handle that.",
        },
        {
          subtitle: "AI Query Data",
          text: "TokenSage AI queries are logged to enforce quota limits. We don't train models on your queries. Your data stays private.",
        },
      ],
    },
    {
      title: "2. What We DON'T Collect",
      icon: Shield,
      content: [
        {
          subtitle: "No Email Required",
          text: "We don't ask for emails unless you explicitly provide one for support.",
        },
        {
          subtitle: "No Tracking Pixels",
          text: "We don't use Facebook Pixel, Google Analytics, or invasive trackers.",
        },
        {
          subtitle: "No Selling Data",
          text: "We never sell, rent, or share your data with advertisers or third parties.",
        },
        {
          subtitle: "No Private Keys",
          text: "We can't access your wallet. Authentication happens client-side via signature verification.",
        },
      ],
    },
    {
      title: "3. How We Use Your Data",
      icon: Eye,
      content: [
        {
          subtitle: "Authentication",
          text: "Your wallet address is used to generate JWT tokens for secure session management.",
        },
        {
          subtitle: "Tier Enforcement",
          text: "We track your subscription level (FREE, PRO, ALPHA) to enforce token limits and AI quotas.",
        },
        {
          subtitle: "Rate Limiting",
          text: "API usage is monitored to prevent abuse and ensure fair access for all users.",
        },
        {
          subtitle: "Service Improvement",
          text: "Anonymized usage data helps us optimize performance, fix bugs, and prioritize features.",
        },
      ],
    },
    {
      title: "4. Data Storage & Security",
      icon: Lock,
      content: [
        {
          subtitle: "Encryption",
          text: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256).",
        },
        {
          subtitle: "Database Security",
          text: "We use Supabase with Row-Level Security (RLS) enabled. Access is strictly controlled.",
        },
        {
          subtitle: "JWT Tokens",
          text: "Session tokens expire after 30 days. Tokens are signed with HS256 and validated on every request.",
        },
        {
          subtitle: "No Third-Party Access",
          text: "Only authorized team members can access backend systems. All access is logged and audited.",
        },
      ],
    },
    {
      title: "5. Third-Party Services",
      icon: Shield,
      content: [
        {
          subtitle: "Jupiter API",
          text: "We fetch token data from Jupiter. They have their own privacy policy.",
        },
        {
          subtitle: "RugCheck API",
          text: "Security audits are powered by RugCheck. They may log API calls.",
        },
        {
          subtitle: "Solana RPC",
          text: "We connect to Solana blockchain nodes. On-chain transactions are public by design.",
        },
        {
          subtitle: "Payment Processors",
          text: "ATLOS handles payments. It have separate privacy policy which can be read on their website.",
        },
      ],
    },
    {
      title: "6. Cookies & Local Storage",
      icon: Database,
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use HTTP-only cookies to store JWT tokens. These are required for authentication.",
        },
        {
          subtitle: "No Tracking Cookies",
          text: "We don't use advertising or analytics cookies.",
        },
        {
          subtitle: "Local Storage",
          text: "We may store UI preferences (theme, layout) in your browser's local storage. This data never leaves your device.",
        },
      ],
    },
    {
      title: "7. Your Rights (GDPR/CCPA)",
      icon: Shield,
      content: [
        {
          subtitle: "Access",
          text: "You can request a copy of your data at any time. Email support@qsai.fun.",
        },
        {
          subtitle: "Deletion",
          text: "You can request account deletion. We'll wipe your data within 30 days.",
        },
        {
          subtitle: "Portability",
          text: "You can export your data in JSON format.",
        },
        {
          subtitle: "Opt-Out",
          text: "You can disconnect your wallet anytime. This stops all data collection.",
        },
      ],
    },
    {
      title: "8. Data Retention",
      icon: Database,
      content: [
        {
          subtitle: "Active Accounts",
          text: "Data is retained while your account is active.",
        },
        {
          subtitle: "Inactive Accounts",
          text: "After 12 months of inactivity, we may delete your data.",
        },
        {
          subtitle: "Logs",
          text: "API logs are anonymized after 30 days and deleted after 90 days.",
        },
        {
          subtitle: "Backups",
          text: "Database backups are retained for 30 days for disaster recovery.",
        },
      ],
    },
    {
      title: "9. International Users",
      icon: Shield,
      content: [
        {
          subtitle: "Global Service",
          text: "QUICKSCOPE AI is accessible worldwide. Data may be processed in multiple regions.",
        },
        {
          subtitle: "GDPR Compliance",
          text: "EU users have rights under GDPR. Contact us to exercise them.",
        },
        {
          subtitle: "CCPA Compliance",
          text: "California users have rights under CCPA. We don't sell personal data.",
        },
      ],
    },
    {
      title: "10. Children's Privacy",
      icon: Shield,
      content: [
        {
          subtitle: "18+ Only",
          text: "QUICKSCOPE AI is not intended for users under 18. We don't knowingly collect data from minors.",
        },
        {
          subtitle: "Parental Notice",
          text: "If you believe a minor has accessed our platform, contact us immediately.",
        },
      ],
    },
    {
      title: "11. Policy Changes",
      icon: Lock,
      content: [
        {
          subtitle: "Updates",
          text: "We may update this policy as we add features or comply with new regulations.",
        },
        {
          subtitle: "Notification",
          text: "Major changes will be announced on the platform and via email (if provided).",
        },
        {
          subtitle: "Effective Date",
          text: "Changes take effect 30 days after posting.",
        },
      ],
    },
    {
      title: "12. Contact Us",
      icon: Shield,
      content: [
        {
          subtitle: "Privacy Questions",
          text: "Email: support@qsai.fun",
        },
        {
          subtitle: "Data Requests",
          text: "For access, deletion, or portability requests, email us with your wallet address.",
        },
        {
          subtitle: "Response Time",
          text: "We respond within 48 hours (usually faster).",
        },
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
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Lock className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
                Privacy
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              Privacy Policy
            </h1>

            <p className="text-zinc-500 text-lg mb-6">
              Last updated: January 4, 2026
            </p>

            <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
              We don't sell your data. We don't track you. We don't store your
              private keys. Simple.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles Banner */}
      <motion.div
        className="max-w-4xl mx-auto px-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-2xl">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-green-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-2">
                Our Privacy Principles
              </h3>
              <ul className="space-y-2 text-sm text-green-300">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-2" />
                  <span>Minimal data collection—only what's necessary</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-2" />
                  <span>No selling or sharing data with third parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-2" />
                  <span>Encryption everywhere (in transit and at rest)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-2" />
                  <span>
                    You control your data—request access or deletion anytime
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Privacy Content */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <motion.div
          className="space-y-8"
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
              transition={{ duration: 0.6, delay: 0.5 + i * 0.03 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <section.icon className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                <h2 className="text-2xl font-black text-white">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4">
                {section.content.map((item, ci) => (
                  <div key={ci}>
                    <h3 className="text-sm font-bold text-zinc-300 mb-1">
                      {item.subtitle}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
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
          <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Privacy Questions?</h3>
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
