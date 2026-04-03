"use client";

import { motion } from "framer-motion";
import WorkflowDiagram from "../../components/WorkflowDiagram";
import { FaUserMd, FaChartLine, FaRobot } from "react-icons/fa";
import React from "react";

/* ================= TYPES ================= */

type Step = {
  title: string;
  desc: string;
};

type Result = {
  value: string;
  label: string;
};

type CaseStudyProps = {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  steps: Step[];
  diagram: string[];
  results: Result[];
};

/* ================= COMPONENT ================= */

function CaseStudy({
  icon,
  title,
  problem,
  solution,
  steps,
  diagram,
  results,
}: CaseStudyProps) {
  return (
    <div className="py-20 border-b border-zinc-800 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center gap-4">
          <div className="text-3xl text-blue-500">{icon}</div>
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>

        {/* PROBLEM vs SOLUTION */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
            <h3 className="font-semibold text-red-400">Problem</h3>
            <p className="text-gray-400 mt-2">{problem}</p>
          </div>

          <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
            <h3 className="font-semibold text-green-400">Solution</h3>
            <p className="text-gray-400 mt-2">{solution}</p>
          </div>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition"
            >
              <h4 className="font-semibold text-white">{step.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* WORKFLOW */}
        <div className="mt-12">
          <WorkflowDiagram steps={diagram} />
        </div>

        {/* RESULTS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {results.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-center"
            >
              <h3 className="text-2xl font-bold text-blue-500">{r.value}</h3>
              <p className="text-gray-400 mt-2">{r.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="/#contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Get This System
          </a>
        </div>

      </div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-all duration-700">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent dark:from-blue-500/20 dark:via-purple-500/20 blur-3xl" />
      </div>

      <div className="relative z-10">

        {/* HEADER */}
        <div className="text-center py-20">
          <h1 className="text-5xl font-bold">Case Studies</h1>
          <p className="text-gray-400 mt-4">
            Real automation systems delivering real results
          </p>
        </div>

        {/* MEDICAL */}
        <CaseStudy
          icon={<FaUserMd />}
          title="AI Medical Intake System"
          problem="Clinics were manually handling patient data, causing delays and poor prioritization."
          solution="Built an automated system that collects patient data, analyzes symptoms, and assigns priority instantly."
          diagram={["Form", "Webhook", "AI", "Priority", "DB", "Email"]}
          steps={[
            { title: "Patient Form", desc: "Patient submits details." },
            { title: "Webhook", desc: "Automation triggered instantly." },
            { title: "AI Analysis", desc: "Symptoms processed." },
            { title: "Priority", desc: "Urgent cases identified." },
            { title: "Database", desc: "Stored in Sheets." },
            { title: "Notification", desc: "Emails sent." },
          ]}
          results={[
            { value: "80%", label: "Manual Work Reduced" },
            { value: "3x", label: "Faster Response" },
            { value: "24/7", label: "Automation Running" },
          ]}
        />

        {/* LEAD */}
        <CaseStudy
          icon={<FaChartLine />}
          title="Smart Lead Automation"
          problem="Businesses were losing leads due to slow responses and lack of tracking."
          solution="Created a system that captures, filters, and manages leads automatically."
          diagram={["Form", "Webhook", "Filter", "CRM", "Email"]}
          steps={[
            { title: "Capture", desc: "User submits form." },
            { title: "Processing", desc: "Data handled instantly." },
            { title: "Filtering", desc: "Quality leads identified." },
            { title: "CRM", desc: "Stored in pipeline." },
            { title: "Follow-up", desc: "Auto emails sent." },
          ]}
          results={[
            { value: "2x", label: "Lead Conversion" },
            { value: "Instant", label: "Response Time" },
            { value: "0%", label: "Missed Leads" },
          ]}
        />

        {/* SUPPORT */}
        <CaseStudy
          icon={<FaRobot />}
          title="AI Support System"
          problem="Support teams were overwhelmed with manual ticket handling."
          solution="Built an AI system that responds instantly and manages tickets automatically."
          diagram={["User", "AI", "Intent", "Ticket", "Response"]}
          steps={[
            { title: "Query", desc: "User sends message." },
            { title: "AI", desc: "Intent detected." },
            { title: "Response", desc: "Auto reply generated." },
            { title: "Ticket", desc: "Created if needed." },
            { title: "Resolve", desc: "Issue solved." },
          ]}
          results={[
            { value: "3x", label: "Faster Replies" },
            { value: "70%", label: "Workload Reduced" },
            { value: "24/7", label: "Support Active" },
          ]}
        />

      </div>
    </section>
  );
}