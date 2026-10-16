"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/config";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#solutions", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md shadow-sm border-b border-neutral-100 dark:border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 group focus-visible:outline-none"
            aria-label="BeOne — go to homepage"
          >
            <span className="text-xl font-black tracking-tight text-neutral-950 dark:text-white group-hover:opacity-80 transition-opacity">
              Be<span className="text-indigo-500">One</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors duration-150"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right — toggle + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a
              href={whatsappUrl("Halo BeOne, saya ingin konsultasi mengenai pembuatan website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors duration-150 shadow-sm"
              aria-label="Let's Talk — open WhatsApp chat"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile right — toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
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
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800`}
      >
        <nav className="max-w-7xl mx-auto px-4 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className="px-4 py-3 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={whatsappUrl("Halo BeOne, saya ingin konsultasi mengenai pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors shadow-sm"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
