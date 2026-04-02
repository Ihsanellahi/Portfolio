"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-all duration-700">

      {/* 🌌 BACKGROUND GRADIENT (APPLE STYLE) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent dark:from-blue-500/20 dark:via-purple-500/20 blur-3xl" />

        {/* floating blobs */}
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* 🧊 MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* PROFILE IMAGE (3D FLOAT EFFECT) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl" />
{/* ihsan first comit */}
          <Image
            src="/ihsan.jpg"
            width={160}
            height={160}
            alt="profile"
            className="relative rounded-full border border-white/20 shadow-2xl"
          />
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mt-8 tracking-tight"
        >
          AI Automation Engineer
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
        >
          I build AI-powered automation systems that help businesses save time,
          manage leads, and optimize workflows using n8n, APIs, and intelligent systems.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-5"
        >

          {/* PRIMARY */}
          <a
            href="/projects"
            className="px-8 py-3 rounded-full font-medium
            bg-black text-white dark:bg-white dark:text-black
            shadow-lg hover:shadow-blue-500/30
            hover:scale-105 transition-all duration-300"
          >
            View Work →
          </a>

          {/* SECONDARY */}
          <a
            href="/contact"
            className="px-8 py-3 rounded-full font-medium
            border border-gray-300 dark:border-gray-700
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black
            transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </a>

        </motion.div>

        {/* SCROLL INDICATOR (APPLE TOUCH) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          className="mt-20 text-gray-500 text-sm"
        >
          ↓ Scroll to explore
        </motion.div>

      </div>

    </section>
  );
}