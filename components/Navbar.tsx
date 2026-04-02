"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

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

  // Scroll behavior (Apple hide/show)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 50);

      // Hide on scroll down, show on scroll up
      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{
        y: hidden ? -120 : 0,
        scale: scrolled ? 0.96 : 1,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`
        fixed top-0 w-full z-50
        border-b border-gray-200 dark:border-zinc-800
        transition-all duration-500
        ${
          scrolled
            ? "py-2 bg-white/70 dark:bg-black/60 backdrop-blur-2xl shadow-lg"
            : "py-4 bg-white/40 dark:bg-black/30 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">

        {/* LOGO */}
        <h1
          className={`
            font-bold transition-all duration-500 text-gray-900 dark:text-white
            ${scrolled ? "text-base" : "text-lg"}
          `}
        >
          Ihsan Ellahi<span className="text-blue-600">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link, i) => (
            <Link key={i} href={link.path}>
              <span
                className={`
                  relative text-sm font-medium cursor-pointer
                  transition-colors duration-300
                  ${
                    pathname === link.path
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  }
                `}
              >
                {link.name}

                {/* ACTIVE UNDERLINE (APPLE STYLE) */}
                {pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600"
                  />
                )}
              </span>
            </Link>
          ))}

          {/* THEME TOGGLE */}
          <ThemeToggle />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-900 dark:text-white"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 py-5 space-y-4
          bg-white/80 dark:bg-black/80 backdrop-blur-2xl
          border-t border-gray-200 dark:border-zinc-800"
        >
          {links.map((link, i) => (
            <Link key={i} href={link.path} onClick={() => setOpen(false)}>
              <p className="text-gray-800 dark:text-gray-200 border-b pb-2">
                {link.name}
              </p>
            </Link>
          ))}

          <ThemeToggle />
        </motion.div>
      )}
    </motion.nav>
  );
}