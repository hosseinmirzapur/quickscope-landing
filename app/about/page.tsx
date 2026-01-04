"use client";

import { motion } from "framer-motion";
import {
  Target,
  Zap,
  Shield,
  Code,
  Rocket,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  const stats = [
    { value: "<100ms", label: "Response Time" },
    { value: "99.9%", label: "Uptime" },
    { value: "100K+", label: "Tokens Tracked" },
    { value: "24/7", label: "Monitoring" },
  ];

  const values = [
    {
      icon: Zap,
      title: "Speed First",
      description:
        "We obsess over milliseconds. Every feature is optimized for zero-latency decision making.",
    },
    {
      icon: Shield,
      title: "No Bullshit",
      description:
        "No fake testimonials. No paid shills. No marketing fluff. Just honest tools for serious traders.",
    },
    {
      icon: Code,
      title: "Engineering Excellence",
      description:
        "Production-grade architecture. Clean code. Security by design. No shortcuts.",
    },
    {
      icon: Target,
      title: "Trader-Centric",
      description:
        "Built by traders who got tired of slow, unreliable tools. We know what you need because we are you.",
    },
  ];

  const timeline = [
    {
      year: "2024 Q4",
      title: "Concept & Research",
      description:
        "Identified gap in Solana memecoin tooling. Existing platforms were too slow, too expensive, or too sketchy.",
    },
    {
      year: "2025 Q1",
      title: "MVP Launch",
      description:
        "Launched QUICKSCOPE AI with real-time monitoring, RugCheck integration, and TokenSage AI.",
    },
    {
      year: "2025 Q2",
      title: "Scaling Up",
      description:
        "Added tier system, payment infrastructure, and terminal integrations. Crossed 1,000 active users.",
    },
    {
      year: "2025+",
      title: "Future Vision",
      description:
        "Advanced AI models, cross-chain expansion, and community-driven features. We're just getting started.",
    },
  ];

  const team = [
    {
      role: "Engineering",
      description:
        "Full-stack devs obsessed with speed and reliability. Next.js, Solana, Edge runtime—we ship fast.",
    },
    {
      role: "Product",
      description:
        "Ex-traders who know the pain points. We build what we wish existed when we started.",
    },
    {
      role: "Security",
      description:
        "Paranoid about vulnerabilities. Every line of code is reviewed. Every API is rate-limited.",
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
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
                Our Story
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              Built by traders.
              <br />
              <span className="text-purple-500">For traders.</span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              QUICKSCOPE AI exists because we got tired of slow, unreliable
              tools. We built what we needed. Now we're sharing it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <p className="text-4xl font-black text-purple-400 mb-2">
                {stat.value}
              </p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <Target className="w-8 h-8 text-purple-400 shrink-0" />
            <div>
              <h2 className="text-3xl font-black mb-4">Our Mission</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                <strong className="text-white">Level the playing field.</strong>{" "}
                Solana memecoins move fast. Insiders, bots, and KOLs have
                advantages. We can't eliminate that. But we can give retail
                traders better tools.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                <strong className="text-white">Speed matters.</strong> A few
                seconds of delay means missed entries, bad fills, or worse—rug
                pulls you didn't see coming. We built QUICKSCOPE AI to be the
                fastest, most reliable platform for Solana token intelligence.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-white">
                  No compromises on security.
                </strong>{" "}
                We integrate RugCheck, monitor authorities, track holder
                concentration, and flag suspicious patterns. We can't guarantee
                safety—nothing can. But we reduce stupidity risk.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-4xl font-black mb-4">Our Values</h2>
          <p className="text-zinc-500">
            What drives us. What we won't compromise on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
            >
              <value.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-4xl font-black mb-4">Our Journey</h2>
          <p className="text-zinc-500">From idea to execution.</p>
        </motion.div>

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="relative pl-8 pb-6 border-l-2 border-purple-500/30 last:border-l-0 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-black" />
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-purple-400 uppercase tracking-wider">
                    {item.year}
                  </span>
                  <div className="h-px flex-1 bg-zinc-800" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-4xl font-black mb-4">Who We Are</h2>
          <p className="text-zinc-500">Small team. Big ambitions.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
            >
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{member.role}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-4">What's Next</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            We're expanding TokenSage AI with more advanced pattern recognition.
            Cross-chain support is coming. We're exploring partnerships with
            other terminals. And we're listening to user feedback—constantly
            shipping improvements.
          </p>
          <p className="text-zinc-500 text-sm">
            This is version 1. We're just getting started.
          </p>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
          <p className="text-zinc-500 text-sm mb-6">
            We're building in public. Follow our progress, suggest features, or
            just trade smarter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.qsai.fun"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm rounded-xl transition-all"
            >
              Launch Terminal
            </Link>
            <a
              href="https://app.qsai.fun/contact"
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold text-sm rounded-xl transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
