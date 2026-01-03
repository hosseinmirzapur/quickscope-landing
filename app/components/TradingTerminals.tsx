"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function TradingTerminals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const terminals = [
    {
      name: "GMGN.AI",
      logo: "/gmgn.png",
      color: "from-emerald-500/20 to-emerald-600/10",
      border: "border-emerald-500/30",
    },
    {
      name: "PHOTON",
      logo: "/photon.png",
      color: "from-orange-500/20 to-orange-600/10",
      border: "border-orange-500/30",
    },
    {
      name: "ALPH.AI",
      logo: "/alphai.png",
      color: "from-purple-500/20 to-purple-600/10",
      border: "border-purple-500/30",
    },
    {
      name: "NOVA",
      logo: "/nova.png",
      color: "from-purple-500/20 to-purple-600/10",
      border: "border-purple-500/30",
    },
  ];

  const flow = [
    { step: "1", label: "Spot Launch", time: "<100ms" },
    { step: "2", label: "Analyze Risk", time: "instant" },
    { step: "3", label: "One-Click", time: "instant" },
    { step: "4", label: "Execute", time: "<1s" },
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
              Instant Execution
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            One click to trade.
            <br />
            <span className="text-purple-500">Four terminals.</span>
          </h2>

          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Direct links to GMGN, Photon, Alph, and Nova. No copy-paste. No
            friction. Just speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {terminals.map((terminal, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${terminal.color} blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`}
              />
              <div
                className={`relative p-8 bg-zinc-900/50 border ${terminal.border} rounded-2xl backdrop-blur-sm h-full flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105`}
              >
                <div className="w-16 h-16 relative mb-4 bg-zinc-800 rounded-xl p-3">
                  <Image
                    src={terminal.logo}
                    alt={terminal.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-black tracking-tight">
                  {terminal.name}
                </h3>
                <ArrowRight className="w-5 h-5 text-purple-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full" />
          <div className="relative p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-black mb-8 text-center">
              Speed → <span className="text-purple-500">Execution</span>
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {flow.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-purple-500/10 border-2 border-purple-500/30 flex items-center justify-center mb-3">
                    <span className="text-2xl font-black text-purple-400">
                      {item.step}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-zinc-600 font-mono">{item.time}</p>

                  {i < flow.length - 1 && (
                    <motion.div
                      className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-purple-500 to-transparent absolute"
                      style={{
                        left: `${(i + 1) * 25}%`,
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-4 bg-black/40 border border-zinc-800 rounded-xl text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-sm text-zinc-400">
                Every terminal is one click away. No manual address entry. No
                delays.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
