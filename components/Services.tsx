"use client";

import { FaRobot, FaChartLine, FaCogs, FaDatabase } from "react-icons/fa";

const services = [

  
  {
    icon: <FaRobot />,
    title: "AI Business Automation",
    desc: "Automate workflows and reduce manual effort with AI systems.",
  },
  {
    icon: <FaChartLine />,
    title: "CRM & Lead Automation",
    desc: "Capture and convert leads with automated CRM pipelines.",
  },
  {
    icon: <FaCogs />,
    title: "Workflow Optimization",
    desc: "Improve efficiency with optimized business processes.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Analytics",
    desc: "Turn data into insights with dashboards and tracking.",
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-all duration-700">

      {/* 🌌 BACKGROUND GRADIENT (APPLE STYLE) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent dark:from-blue-500/20 dark:via-purple-500/20 blur-3xl" />
        </div>  
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />

      <div className="relative z-10">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">Services</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Solutions designed to automate and scale your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/40 transition"
            >
              <div className="text-3xl text-blue-500 mb-4">{s.icon}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}