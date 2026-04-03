"use client";

import Hero from "../components/Hero";
import Projects from "./projects/page";
import Services from "../components/Services";
import CaseStudies from "./case-studies/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* EACH SECTION WRAPPED WITH ID FOR SCROLLING */}

      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="case-studies">
        <CaseStudies />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}