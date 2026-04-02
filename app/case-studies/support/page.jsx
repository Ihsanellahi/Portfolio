"use client";

import { motion } from "framer-motion";

export default function SupportCaseStudy() {
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
          AI Support Ticket System
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          An intelligent customer support automation system that classifies tickets,
          prioritizes issues, and generates instant AI-powered responses to improve
          customer satisfaction.
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
            Businesses struggle with handling large volumes of customer queries.
            Manual support systems lead to delayed responses, misclassification of issues,
            and poor customer experience.
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
            We built an AI-driven support system that automatically reads incoming tickets,
            classifies them based on urgency and category, and generates instant responses
            using AI automation workflows.
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
            <li>• Next.js (Frontend UI)</li>
            <li>• Node.js API Routes</li>
            <li>• OpenAI / LLM Integration</li>
            <li>• n8n Automation Workflows</li>
            <li>• MongoDB+Google Sheets Database</li>
            <li>• Webhooks for real-time processing</li>
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
            <li>• AI ticket classification</li>
            <li>• Automated response generation</li>
            <li>• Priority-based issue handling</li>
            <li>• 24/7 support automation</li>
            <li>• CRM integration support system</li>
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
          This system significantly reduces customer response time, improves support efficiency,
          and allows businesses to handle large-scale customer queries without increasing human workload.
        </p>
      </motion.div>

    </div>
  );
}