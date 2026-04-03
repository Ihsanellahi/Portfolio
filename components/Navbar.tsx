"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
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

  return (
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

        {/* LOGO */}
        <h1
          className={`
            font-bold text-white transition-all duration-500
            ${scrolled ? "text-base" : "text-lg"}
          `}
        >
          Ihsan Ellahi<span className="text-blue-500">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          {links.map((link, i) => {
            const active = pathname === link.path;

            return (
              <Link key={i} href={link.path}>
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium cursor-pointer
                    transition-all duration-300
                    backdrop-blur-xl border
                    ${
                      active
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/40 shadow-lg shadow-blue-500/20"
                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30"
                    }
                  `}
                >
                  {link.name}

                  {/* Glow Effect */}
                  {active && (
                    <motion.span
                      layoutId="nav-glow"
                      className="absolute inset-0 rounded-full bg-blue-500/10 blur-md -z-10"
                    />
                  )}
                </motion.span>
              </Link>
            );
          })}

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 py-6 space-y-4
          bg-black/95 backdrop-blur-2xl
          border-t border-zinc-800"
        >
          {links.map((link, i) => {
            const active = pathname === link.path;

            return (
              <Link key={i} href={link.path} onClick={() => setOpen(false)}>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-4 py-3 rounded-xl border cursor-pointer
                    transition-all duration-300
                    ${
                      active
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/40"
                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-blue-500/10 hover:text-blue-400"
                    }
                  `}
                >
                  {link.name}
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
}