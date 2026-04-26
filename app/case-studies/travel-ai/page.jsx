"use client";

export default function TravelCaseStudy() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          AI Travel Package Automation System
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          An AI-powered automation system that generates personalized travel itineraries,
          calculates trip costs, and delivers structured travel plans instantly via Email and WhatsApp.
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
            Travel planning is time-consuming and inefficient. Travel agents manually create itineraries,
            calculate pricing, and respond to customer queries, leading to delays, inconsistencies,
            and limited scalability in handling multiple clients.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-green-400">
            Solution
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            We built an automated n8n workflow that takes user travel preferences as input,
            generates AI-powered itineraries, calculates dynamic pricing based on budget and duration,
            and instantly sends structured travel plans via Email and WhatsApp.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-blue-400">
            Tech Stack
          </h2>

          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• n8n Automation Platform</li>
            <li>• Google Gemini / AI Models (Itinerary Generation)</li>
            <li>• JavaScript (Data processing & formatting)</li>
            <li>• Google Sheets API (Lead storage & CRM)</li>
            <li>• Twilio WhatsApp API (Messaging automation)</li>
            <li>• Gmail API (Email delivery)</li>
          </ul>
        </div>

        {/* KEY FEATURES */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-purple-400">
            Key Features
          </h2>

          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• AI-generated day-by-day travel itineraries</li>
            <li>• Dynamic pricing engine (budget, days, people)</li>
            <li>• Automated Email delivery with structured content</li>
            <li>• WhatsApp notifications with formatted travel plans</li>
            <li>• Lead capture via frontend form (Webhook)</li>
            <li>• Google Sheets CRM integration</li>
            <li>• End-to-end automated workflow</li>
          </ul>
        </div>

      </div>

      {/* IMPACT SECTION */}
      <div className="mt-20 border border-white/10 rounded-2xl p-10 bg-gradient-to-r from-purple-900/20 to-transparent">

        <h2 className="text-3xl font-semibold">
          Impact
        </h2>

        <p className="text-gray-300 mt-4 max-w-3xl leading-relaxed">
          This system reduces travel planning time by over 95% and enables instant delivery
          of personalized travel packages. It allows travel agencies and freelancers to handle
          multiple clients simultaneously, improve response time, and scale operations efficiently.
          The system also provides a strong foundation for building a full travel SaaS platform.
        </p>

      </div>

    </div>
  );
}