"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Quickscope"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-black tracking-tight">
                  QUICKSCOPE<span className="text-purple-500"> AI</span>
                </h3>
                <p className="text-xs text-zinc-600">qsai.fun</p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Real-time Solana terminal. Built for traders who move fast.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://app.qsai.fun"
                  className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
                >
                  Launch App
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="https://app.qsai.fun"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@qsai.fun"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          className="pt-8 border-t border-zinc-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">
              © {currentYear} QUICKSCOPE AI. All rights reserved.
            </p>

            <div className="text-xs text-zinc-600 text-center md:text-right max-w-md">
              <strong className="text-zinc-500">Risk Disclaimer:</strong>{" "}
              Trading memecoins is extremely risky. You can lose everything.
              This tool provides data, not advice. Trade at your own risk.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
