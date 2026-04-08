"use client";


export default function LeadIntelligenceCaseStudy() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Business Lead Generation & Intelligence Agent
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          An AI-powered automation system built with n8n that extracts, enriches,
          and classifies business data into structured, ready-to-use lead databases.
        </p>
      </div>

      {/* GRID SECTIONS */}
      <div className="mt-20 grid md:grid-cols-2 gap-16">

        {/* PROBLEM */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-red-400">
            Problem
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Finding verified business leads across industries and locations is slow,
            manual, and unscalable. Businesses struggle to gather accurate data like
            emails, websites, LinkedIn profiles, and business classifications.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-green-400">
            Solution
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            We built an automated n8n workflow that takes industry and location as input,
            scrapes business data from multiple sources, enriches it using AI,
            classifies business types (B2B, B2C, Online), and stores everything in Google Sheets.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-blue-400">
            Tech Stack
          </h2>

          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• n8n Automation Platform</li>
            <li>• Google Search / SERP APIs</li>
            <li>• Web Scraping (Apify / HTTP Requests)</li>
            <li>• OpenAI (Data classification & structuring)</li>
            <li>• Google Sheets API</li>
            <li>• JavaScript (Data processing)</li>
          </ul>
        </div>

        {/* KEY FEATURES */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-purple-400">
            Key Features
          </h2>

          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• Industry & location-based lead generation</li>
            <li>• Multi-source business data extraction</li>
            <li>• AI-powered business classification</li>
            <li>• Email, website & LinkedIn enrichment</li>
            <li>• Automated Google Sheets dataset creation</li>
            <li>• Scalable batch processing workflow</li>
          </ul>
        </div>

      </div>

      {/* IMPACT SECTION */}
      <div className="mt-20 border border-white/10 rounded-2xl p-10 bg-gradient-to-r from-purple-900/20 to-transparent">

        <h2 className="text-3xl font-semibold">
          Impact
        </h2>

        <p className="text-gray-300 mt-4 max-w-3xl leading-relaxed">
          This system reduces manual lead research time by over 90% and enables
          instant creation of structured, high-quality business databases.
          It helps marketing agencies, SaaS founders, and sales teams scale outreach efficiently.
        </p>

      </div>

    </div>
  );
}