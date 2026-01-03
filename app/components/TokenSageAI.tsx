"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles, Brain, Target, Shield } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function TokenSageAI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    { role: "user", text: "Is this gonna 10x or rug?" },
    {
      role: "assistant",
      text: "Alpha Score: 73/100. Fair launch detected. Bundle risk: LOW. Top 10 holders: 12%. Mint authority renounced. No KOL coordination yet. Entry at $240K MC = decent R/R if you size properly.",
    },
    { role: "user", text: "Dev holding bags?" },
    {
      role: "assistant",
      text: "Dev wallet: 2.1% supply ($5K worth). Reasonable. No massive insider concentration. LP locked 89%. Risk level: MEDIUM-LOW.",
    },
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setMessageIndex(prev => (prev + 1) % messages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, messages.length]);

  const features = [
    {
      icon: Brain,
      title: "Structured Analysis",
      description:
        "Alpha scoring, risk breakdown, holder distribution—all automated.",
    },
    {
      icon: Target,
      title: "Entry/Exit Strategy",
      description: "Recommended sizing, stop-loss levels, profit-taking zones.",
    },
    {
      icon: Shield,
      title: "Real-Time Context",
      description: "Live RugCheck + Jupiter data. No generic AI garbage.",
    },
  ];

  return (
    <section ref={containerRef} className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
              AI-Powered Analysis
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            TokenSage AI.
            <br />
            <span className="text-purple-500">Your unfair advantage.</span>
          </h2>

          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Contextual AI trained on Solana memecoins. Not a chatbot. A decision
            engine.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-purple-500/20 blur-[120px] rounded-full" />
            <div className="relative p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold text-zinc-300">
                  TokenSage AI
                </span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400 font-bold">LIVE</span>
                </div>
              </div>

              <div className="space-y-4 min-h-100">
                {messages.slice(0, messageIndex + 1).map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.3 }}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                        msg.role === "user"
                          ? "bg-purple-600 text-white rounded-tr-none"
                          : "bg-zinc-800/50 text-zinc-200 rounded-tl-none border border-zinc-700"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {messageIndex === messages.length - 1 && (
                  <motion.div
                    className="flex items-center gap-2 text-xs text-zinc-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-75" />
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-150" />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              >
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl shrink-0">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-zinc-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    <strong className="text-white">Not generic AI.</strong>{" "}
                    TokenSage pulls live on-chain data, RugCheck audits, and
                    holder graphs. Every response is contextual. Every answer is
                    actionable.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
