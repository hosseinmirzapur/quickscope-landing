"use client";

import { motion, useInView } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Lock,
  Users,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useRef } from "react";

export default function SafetySignals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const signals = [
    {
      icon: Lock,
      title: "Authority Status",
      description: "Mint & freeze authority verification",
      status: "Renounced",
      good: true,
    },
    {
      icon: Users,
      title: "Holder Distribution",
      description: "Top 10 concentration analysis",
      status: "7.3%",
      good: true,
    },
    {
      icon: Shield,
      title: "RugCheck Score",
      description: "Automated security audit",
      status: "Safe",
      good: true,
    },
    {
      icon: AlertTriangle,
      title: "Risk Flags",
      description: "Insider detection & bundling",
      status: "None",
      good: true,
    },
  ];

  const riskExample = {
    good: [
      { label: "Mint Authority", value: "Disabled", icon: CheckCircle },
      { label: "Freeze Authority", value: "Disabled", icon: CheckCircle },
      { label: "Top 10 Holdings", value: "8.2%", icon: CheckCircle },
      { label: "LP Locked", value: "94%", icon: CheckCircle },
    ],
    bad: [
      { label: "Mint Authority", value: "Active", icon: XCircle },
      { label: "Freeze Authority", value: "Active", icon: XCircle },
      { label: "Top 10 Holdings", value: "67%", icon: XCircle },
      { label: "LP Locked", value: "12%", icon: XCircle },
    ],
  };

  return (
    <section ref={containerRef} className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-red-400" />
            <span className="text-xs font-bold text-red-300 uppercase tracking-widest">
              Risk Reduction
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Avoid stupid mistakes.
            <br />
            <span className="text-purple-500">Not all of them.</span>
          </h2>

          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            RugCheck integration + real-time authority monitoring. We reduce
            risk, but can't remove it. Trade smart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {signals.map((signal, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 blur-xl transition-all duration-500 rounded-2xl" />
              <div className="relative p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl backdrop-blur-sm h-full">
                <signal.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{signal.title}</h3>
                <p className="text-sm text-zinc-500 mb-4">
                  {signal.description}
                </p>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                    signal.good
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {signal.good ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <XCircle className="w-3 h-3" />
                  )}
                  {signal.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            className="p-8 bg-green-500/5 border-2 border-green-500/20 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-black text-green-400">SAFE</h3>
            </div>
            <div className="space-y-3">
              {riskExample.good.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between p-3 bg-black/30 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <span className="text-sm text-zinc-400">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">
                      {item.value}
                    </span>
                    <item.icon className="w-4 h-4 text-green-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-8 bg-red-500/5 border-2 border-red-500/20 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-400" />
              <h3 className="text-2xl font-black text-red-400">DANGER</h3>
            </div>
            <div className="space-y-3">
              {riskExample.bad.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between p-3 bg-black/30 rounded-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <span className="text-sm text-zinc-400">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">
                      {item.value}
                    </span>
                    <item.icon className="w-4 h-4 text-red-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-zinc-500 text-sm">
            <strong className="text-white">Disclaimer:</strong> No tool
            eliminates risk. Trade at your own risk. We provide data, not
            guarantees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
