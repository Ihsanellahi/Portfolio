"use client";

import Link from "next/link";

export default function BizPilotCaseStudy() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          Live Product — Deployed & Working
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          BizPilot AI
        </h1>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          An all-in-one AI-powered business operating system built for the US market.
          Combines 5 automation modules — lead capture, support, intake, outreach, and analytics —
          into one unified platform that runs 24/7 without human intervention.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://bizpilot-ai-inky.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition duration-200"
          >
            View Live Demo →
          </a>
          <a
            href="https://bizpilot-ai-inky.vercel.app/admin.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition duration-200"
          >
            Admin Dashboard →
          </a>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { num: "80%", label: "Manual work reduced" },
          { num: "24/7", label: "Always-on automation" },
          { num: "3x", label: "Faster response times" },
          { num: "$0", label: "Build cost (free tools)" },
        ].map((s, i) => (
          <div key={i} className="border border-white/10 rounded-2xl p-6 bg-white/5 text-center">
            <div className="text-4xl font-bold text-blue-400">{s.num}</div>
            <div className="text-gray-400 text-sm mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      {/* GRID SECTIONS */}
      <div className="mt-20 grid md:grid-cols-2 gap-16">

        {/* PROBLEM */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-red-400">Problem</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            US small businesses — law firms, clinics, real estate agencies, home service companies —
            spend 40% of their week on repetitive tasks: chasing leads, handling support tickets,
            processing client intake, and writing proposals manually. Enterprise automation software
            costs $2,000+/month. Hiring ops staff costs $60,000/year. Most small businesses have no solution.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-green-400">Solution</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Built BizPilot AI — a unified automation platform with 4 intelligent modules.
            Every lead gets AI-scored and followed up. Every support ticket gets classified
            and answered instantly. Every intake request gets prioritized. Every qualified
            lead receives a personalized AI proposal. All running on free tools with zero ongoing cost.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-blue-400">Tech Stack</h2>
          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• n8n Cloud (Workflow automation — 4 active workflows)</li>
            <li>• Google Gemini AI (Lead scoring, ticket classification, proposal generation)</li>
            <li>• Google Sheets API (Live CRM database — 3 tabs)</li>
            <li>• Gmail API (Automated email responses)</li>
            <li>• Next.js + Vercel (Frontend — live at bizpilot-ai-inky.vercel.app)</li>
            <li>• Webhooks (Real-time data pipeline)</li>
          </ul>
        </div>

        {/* KEY FEATURES */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-purple-400">Key Features</h2>
          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• AI lead scoring (1–10) with automated follow-up emails</li>
            <li>• Support ticket classification + instant AI-generated responses</li>
            <li>• Smart client intake with urgency-based priority routing</li>
            <li>• One-click AI proposal generation and delivery</li>
            <li>• Admin dashboard with live CRM data and outreach controls</li>
            <li>• 100% free infrastructure — $0 monthly running cost</li>
          </ul>
        </div>

      </div>

      {/* MODULES */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold mb-10">4 Modules, 1 Platform</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🎯", title: "Lead Engine", color: "text-blue-400", desc: "Captures every lead, scores with AI, sends personalized welcome email. Zero leads missed." },
            { icon: "🧠", title: "Support Brain", color: "text-green-400", desc: "Classifies tickets by category and urgency. AI generates and sends professional responses 24/7." },
            { icon: "📋", title: "Smart Intake", color: "text-purple-400", desc: "Routes client intake by priority and budget. High-value clients contacted first, automatically." },
            { icon: "🚀", title: "Outreach Autopilot", color: "text-yellow-400", desc: "Generates personalized business proposals using AI and sends them to qualified leads instantly." },
          ].map((m, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition duration-200">
              <div className="text-3xl mb-4">{m.icon}</div>
              <h3 className={`text-lg font-semibold ${m.color}`}>{m.title}</h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WORKFLOW */}
      <div className="mt-20 border border-white/10 rounded-2xl p-10 bg-white/5">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {[
            { step: "Form Submitted", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
            { step: "→", color: "text-gray-500" },
            { step: "Webhook Triggered", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
            { step: "→", color: "text-gray-500" },
            { step: "Gemini AI Analyzes", color: "bg-green-500/20 text-green-300 border-green-500/30" },
            { step: "→", color: "text-gray-500" },
            { step: "Sheets CRM Updated", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
            { step: "→", color: "text-gray-500" },
            { step: "Email Sent Instantly", color: "bg-red-500/20 text-red-300 border-red-500/30" },
          ].map((item, i) => (
            item.step === "→"
              ? <span key={i} className="text-gray-500 font-bold text-lg">{item.step}</span>
              : <span key={i} className={`px-4 py-2 rounded-lg border text-sm font-medium ${item.color}`}>{item.step}</span>
          ))}
        </div>
      </div>

      {/* IMPACT */}
      <div className="mt-16 border border-white/10 rounded-2xl p-10 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <h2 className="text-3xl font-semibold">Impact</h2>
        <p className="text-gray-300 mt-4 max-w-3xl leading-relaxed">
          BizPilot AI solves a real problem for 33 million US small businesses that can't afford enterprise
          automation software. Built entirely with free tools — n8n, Gemini AI, Google Sheets, Gmail, Vercel —
          it delivers enterprise-level automation at zero cost. The platform is live, fully functional, and
          actively used. It targets the highest-paying automation market in the world: US law firms, healthcare
          clinics, real estate agencies, and home service businesses.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://bizpilot-ai-inky.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition duration-200"
          >
            Test Live Demo →
          </a>
          <Link
            href="/#contact"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition duration-200"
          >
            Get This System →
          </Link>
        </div>
      </div>

    </div>
  );
}