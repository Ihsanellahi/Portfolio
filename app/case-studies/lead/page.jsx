"use client";

import { motion } from "framer-motion";

export default function LeadCaseStudy() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Smart Lead Capture System
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          An automated lead generation and CRM integration system that captures,
          organizes, and instantly notifies businesses about new potential customers.
        </p>
      </motion.div>

      {/* GRID SECTIONS */}
      <div className="mt-20 grid md:grid-cols-2 gap-16">

        {/* PROBLEM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 rounded-2xl p-8 bg-white/5"
        >
          <h2 className="text-2xl font-semibold text-red-400">
            Problem
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Businesses lose valuable customers due to slow or unorganized lead management.
            Manual tracking in spreadsheets or emails leads to missed opportunities,
            delayed responses, and poor conversion rates.
          </p>
        </motion.div>

        {/* SOLUTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-white/10 rounded-2xl p-8 bg-white/5"
        >
          <h2 className="text-2xl font-semibold text-green-400">
            Solution
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            We built an automated lead capture system that collects data from forms,
            websites, and ads, then instantly stores it in a CRM while sending real-time
            notifications to sales teams.
          </p>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-white/10 rounded-2xl p-8 bg-white/5"
        >
          <h2 className="text-2xl font-semibold text-blue-400">
            Tech Stack
          </h2>

          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• Next.js (Frontend)</li>
            <li>• Node.js API Routes</li>
            <li>• n8n Automation Workflows</li>
            <li>• Google Sheets / CRM Integration</li>
            <li>• Webhooks for real-time sync</li>
            <li>• Email & WhatsApp API Notifications</li>
          </ul>
        </motion.div>

        {/* KEY FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border border-white/10 rounded-2xl p-8 bg-white/5"
        >
          <h2 className="text-2xl font-semibold text-purple-400">
            Key Features
          </h2>

          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• Automatic lead capture from forms</li>
            <li>• CRM synchronization</li>
            <li>• Instant WhatsApp / Email alerts</li>
            <li>• Lead categorization system</li>
            <li>• 24/7 automated data processing</li>
          </ul>
        </motion.div>

      </div>

      {/* IMPACT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 border border-white/10 rounded-2xl p-10 bg-gradient-to-r from-blue-900/20 to-transparent"
      >
        <h2 className="text-3xl font-semibold">
          Impact
        </h2>

        <p className="text-gray-300 mt-4 max-w-3xl leading-relaxed">
          This system dramatically improves lead response time, increases conversion rates,
          and removes manual workload from sales teams upto 75%. Businesses can now respond instantly
          to potential customers, increasing revenue opportunities by 60%.
        </p>
      </motion.div>

    </div>
  );
}