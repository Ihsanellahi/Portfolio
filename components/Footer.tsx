"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-3xl opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold">Ihsan Ellahi</h2>
            <p className="text-gray-400 mt-3 text-sm">
              AI Automation Engineer + Data Analyst.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link href="#home" className="hover:text-white transition">Home</Link>
              <Link href="#projects" className="hover:text-white transition">Projects</Link>
              <Link href="#case-studies" className="hover:text-white transition">Case Studies</Link>
              <Link href="#Services" className="hover:text-white transition">Services</Link>

              <Link href="#contact" className="hover:text-white transition">Contact</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <div className="text-gray-400 text-sm space-y-2">
              <p>Email: ihsane.codes@gmail.com</p>
              <p>Location: Pakistan</p>
              <p>Available: Freelance / Upwork</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>© {new Date().getFullYear()} All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Built with Next.js , Tailwind , Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
}