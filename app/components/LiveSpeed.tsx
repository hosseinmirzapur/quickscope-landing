"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Zap, TrendingUp, Clock, Activity } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function LiveSpeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [tokenCount, setTokenCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setTokenCount(prev => (prev >= 847 ? 847 : prev + 23));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const tokens = [
    { symbol: "$PEPE2", mc: "$2.4M", change: "+1,247%", time: "2s ago" },
    { symbol: "$BONK", mc: "$890K", change: "+832%", time: "5s ago" },
    { symbol: "$WIF", mc: "$1.8M", change: "+654%", time: "8s ago" },
    { symbol: "$DOGE2", mc: "$3.1M", change: "+421%", time: "12s ago" },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Activity className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
              Real-Time Intelligence
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Every launch.
            <br />
            <span className="text-purple-500">Every second.</span>
          </h2>

          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            We monitor Pump.fun at sub-100ms intervals. No delays. No missed
            opportunities. Just raw speed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Millisecond Precision
                </h3>
                <p className="text-zinc-500">
                  Direct Jupiter API integration. No third-party bottlenecks.
                  Updates stream in under 100ms.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Zero Lag Filtering</h3>
                <p className="text-zinc-500">
                  Instant client-side sorting. Market cap, liquidity, volume—all
                  sub-second.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  First-Mover Advantage
                </h3>
                <p className="text-zinc-500">
                  See tokens the moment they graduate. Before they pump. Before
                  the crowd.
                </p>
              </div>
            </div>

            <motion.div
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
              style={{ y }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-zinc-500 uppercase tracking-wider font-bold">
                  Tracked Today
                </span>
                <Zap className="w-5 h-5 text-purple-500" />
              </div>
              <motion.p
                className="text-6xl font-black text-white"
                animate={isInView ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {tokenCount}
              </motion.p>
              <p className="text-xs text-zinc-600 mt-2">Launches monitored</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
            <div className="relative space-y-3 p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">
                  Live Feed
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400 font-bold">LIVE</span>
                </div>
              </div>

              {tokens.map((token, i) => (
                <motion.div
                  key={i}
                  className="p-4 bg-black/40 border border-zinc-800/50 rounded-xl hover:border-purple-500/30 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-black text-white group-hover:text-purple-400 transition-colors">
                      {token.symbol}
                    </span>
                    <span className="text-xs text-zinc-600 font-mono">
                      {token.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">{token.mc}</span>
                    <span className="text-sm font-bold text-green-400">
                      {token.change}
                    </span>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg text-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-xs text-purple-300 font-bold">
                  +12 NEW TOKENS IN LAST 60 SECONDS
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
