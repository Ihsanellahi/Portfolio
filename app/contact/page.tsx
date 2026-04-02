"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative min-h-screen flex items-center justify-center
        px-6 py-28 overflow-hidden

        bg-white dark:bg-black
        text-black dark:text-white

        transition-colors duration-700
      "
    >
      {/* 🌫 Apple background glow like Hero */}
      <div className="absolute inset-0">
        <div className="
          absolute inset-0
          bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent
          dark:from-blue-600/10 dark:via-purple-600/5
          blur-3xl
        " />
      </div>

      {/* HERO STYLE CONTENT (NOT A CARD) */}
      <div className="relative z-10 text-center max-w-4xl">

         {/* CTA SECTION (APPLE STYLE ENDING) */}
      <div className="relative py-32 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl opacity-60" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white tracking-tight"
          >
            Ready to Automate Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 mt-6 text-lg"
          >
            Book a consultation and build your AI-powered system.
          </motion.p>

          {/* BUTTON */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-purple-500/40 transition-all"
          >
            Book Your Consultation →
          </motion.a>
          
        {/* ICON ROW */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-10 mt-12 text-3xl"
        >
          <a
            href="https://wa.me/923177153250"
            className="text-green-500 hover:scale-125 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/ihsan-elahi-bb0b4724b"
            className="text-blue-500 hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ihsane.codes@gmail.com"
            className="text-red-500 hover:scale-125 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* FOOT TEXT */}
        <p className="mt-10 text-sm text-gray-500 dark:text-gray-600">
          Available for automation systems, CRM & AI workflows
        </p>

        </div>
      </div>



      </div>
    </section>
  );
}