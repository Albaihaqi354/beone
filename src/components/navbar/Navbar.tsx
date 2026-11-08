"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/config";
import { useLanguage } from "@/lib/language";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Selected Works" },
    { href: "#contact", label: "Contact" },
  ];

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Intersection observer for active section tracking
    const sections = ["home", "about", "services", "portfolio", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Wordmark */}
          <Link
            href="/"
            className="group focus-visible:outline-none"
            aria-label="BeOne — homepage"
          >
            <span
              className="font-display text-xl font-bold tracking-tight text-[var(--ink)] group-hover:opacity-70 transition-opacity duration-300"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Be<span className="italic">One</span>
            </span>
          </Link>

          {/* Desktop nav links — centered */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map(({ href, label }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative text-sm tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-[var(--ink)]"
                        : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--ink)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-[var(--background)] bg-[var(--ink)] hover:opacity-80 transition-opacity duration-200"
            >
              Start a Project
              <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[var(--ink)] hover:opacity-70 transition-opacity"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-16 bg-[var(--background)] z-40 flex flex-col"
          >
            {/* Top border line */}
            <div className="h-px bg-[var(--border)]" />

            <nav className="flex-1 px-6 pt-10 pb-8 flex flex-col justify-between">
              <ul className="flex flex-col gap-1" role="list">
                {navLinks.map(({ href, label }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: "easeOut" }}
                  >
                    <a
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 text-3xl font-display font-medium text-[var(--ink)] border-b border-[var(--border)] hover:opacity-60 transition-opacity"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="pt-8 flex flex-col gap-3"
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-[var(--background)] bg-[var(--ink)] hover:opacity-80 transition-opacity"
                >
                  Start a Project
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a
                  href={whatsappUrl(t.shared.whatsappDefaultMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-[var(--ink)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors"
                >
                  WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
