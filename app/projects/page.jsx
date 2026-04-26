"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "medical",
    title: "AI Medical Intake System",
    desc: "Automates patient intake, analyzes symptoms, and prioritizes urgent cases instantly.",
    image: "/medical.png",
  },
  {
    id: "lead",
    title: "Smart Lead Capture System",
    desc: "Captures, filters, and stores leads in CRM with automated follow-ups.",
    image: "/lead.png",
  },
  {
    id: "support",
    title: "AI Support Ticket System",
    desc: "Automatically categorizes tickets and sends instant AI-powered responses.",
    image: "/support.png",
  },
  {
    id: "business-lead",
    title: "Business Lead Generation & Intelligence Agent",
    desc: "AI-powered n8n system that extracts, enriches, and classifies business leads automatically.",
    image: "/Business-lead.png",
  },
  {
    id: "travel-ai",
    title: "AI Travel Package Automation System",
    desc: "Generates personalized travel itineraries, calculates trip costs, and delivers plans via Email & WhatsApp instantly.",
    image: "/travelworkflow.png", // make sure this exists in /public
  },
];

export default function Projects() {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 overflow-hidden">

      {/* 🌌 BACKGROUND GRADIENT */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent dark:from-blue-500/20 dark:via-purple-500/20 blur-3xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Real-world automation systems built for business efficiency
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/40 transition duration-300 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {project.desc}
                </p>

                {/* CTA */}
                <Link
                  href={`/case-studies/${project.id}`}
                  className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}