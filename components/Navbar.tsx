"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  const links = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Case Studies", id: "case-studies" },
    { name: "Contact", id: "contact" },
  ];

  /* ================= SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 50);

      if (open) setOpen(false);

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  /* ================= SCROLL FUNCTION ================= */
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{
          y: hidden && !open ? -120 : 0,
          scale: scrolled ? 0.96 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`
          fixed top-0 w-full z-50
          border-b border-zinc-800
          transition-all duration-500
          ${
            scrolled
              ? "py-2 bg-black/70 backdrop-blur-2xl shadow-lg"
              : "py-4 bg-black/40 backdrop-blur-md"
          }
        `}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">

          {/* ✅ LOGO (CLICKABLE → HOME) */}
          <h1
            onClick={() => scrollToSection("home")}
            className={`
              font-bold text-white cursor-pointer select-none
              hover:text-blue-400 transition-all duration-300
              ${scrolled ? "text-base" : "text-lg"}
            `}
          >
            Ihsan Ellahi<span className="text-blue-500">.</span>
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link, i) => (
              <motion.span
                key={i}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-4 py-2 rounded-full text-sm font-medium cursor-pointer
                  bg-white/5 text-gray-300 border border-white/10
                  hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30
                  transition-all duration-300 backdrop-blur-xl
                "
              >
                {link.name}
              </motion.span>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-white"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-sm
              bg-black/95 backdrop-blur-2xl z-50
              border-l border-zinc-800 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-white font-semibold text-lg">Menu</h2>
                <button onClick={() => setOpen(false)} className="text-white text-2xl">
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {links.map((link, i) => (
                  <motion.div
                    key={i}
                    onClick={() => scrollToSection(link.id)}
                    whileTap={{ scale: 0.95 }}
                    className="
                      px-4 py-3 rounded-xl border cursor-pointer
                      bg-white/5 text-gray-300 border-white/10
                      hover:bg-blue-500/10 hover:text-blue-400
                      transition-all duration-300 text-sm
                    "
                  >
                    {link.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}