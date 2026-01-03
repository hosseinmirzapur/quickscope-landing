"use client";

import { motion, useInView } from "framer-motion";
import { Shield, Code, Zap, Lock, Server, Database } from "lucide-react";
import { useRef } from "react";

export default function TrustArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const stack = [
    {
      icon: Code,
      title: "Next.js 16.1",
      description: "Edge runtime, App Router, sub-100ms response times",
    },
    {
      icon: Database,
      title: "Direct APIs",
      description: "Jupiter, RugCheck, Solana RPC—no middlemen",
    },
    {
      icon: Lock,
      title: "JWT + Wallet Auth",
      description: "Secure sign-in, session management, tier enforcement",
    },
    {
      icon: Server,
      title: "Edge Deployment",
      description: "Global CDN, instant updates, zero downtime",
    },
    {
      icon: Zap,
      title: "Real-Time Streams",
      description: "WebSocket-style updates, no polling lag",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "RLS, rate limiting, API key rotation, audit logs",
    },
  ];

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
              Built Right
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Speed without compromise.
            <br />
            <span className="text-purple-500">Security by design.</span>
          </h2>

          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Production-grade architecture. No shortcuts. No vulnerabilities. No
            excuses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stack.map((item, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 blur-xl transition-all duration-500 rounded-2xl" />
              <div className="relative p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl backdrop-blur-sm h-full group-hover:border-zinc-700 transition-colors">
                <item.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="lg:col-span-2 p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-purple-400" />
              Engineering Discipline
            </h3>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                <strong className="text-white">No fake testimonials.</strong> No
                paid shills. No marketing fluff. Just a tool built by traders
                for traders.
              </p>
              <p>
                <strong className="text-white">Open architecture.</strong> You
                can verify every integration. Jupiter API for data. RugCheck for
                audits. Solana RPC for speed.
              </p>
              <p>
                <strong className="text-white">Zero downtime promise.</strong>{" "}
                Edge deployment across multiple regions. Automatic failover.
                Rate limiting to prevent abuse.
              </p>
            </div>
          </div>

          <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-400" />
              Security
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                <span>Wallet-based auth, no email required</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                <span>JWT tokens with expiry enforcement</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                <span>API rate limiting per tier</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                <span>No data leaks, no tracking</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-zinc-400 text-sm">
            <strong className="text-white">Built in public.</strong> Open-source
            mindset. No hidden behavior. No dark patterns. Just professional
            software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
