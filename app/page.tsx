"use client"
import Hero from "../components/Hero";
import Projects from "./projects/page";
import Services from "../components/Services";

import CaseStudies from "./case-studies/page";
import Contact from "./contact/page";



export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      <Hero />

      <Projects />

      

      <Services />

      <CaseStudies />

      <Contact />

    </div>
  );
}