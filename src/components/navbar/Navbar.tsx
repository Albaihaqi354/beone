"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/config";
import { useLanguage } from "@/lib/language";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#services", label: t.nav.services },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#process", label: t.nav.process },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

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

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 dark:border-neutral-800"
          : "bg-white/60 dark:bg-neutral-950/60 backdrop-blur-xs"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label={t.nav.navAria}
      >
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 group focus-visible:outline-none"
            aria-label={`BeOne — ${t.nav.home}`}
          >
            <span className="text-xl font-black tracking-tight text-neutral-950 dark:text-white group-hover:opacity-85 transition-opacity">
              Be<span className="text-indigo-500">One</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-lg transition-colors duration-150"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right — lang switcher + theme toggle + primary CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-all duration-150 shadow-sm shadow-indigo-200 dark:shadow-indigo-950/40"
              aria-label={`${t.nav.cta} — menuju formulir kontak`}
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile right — lang switcher + toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1.5">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
        aria-label={t.nav.mobileMenuAria}
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[85vh] opacity-100 shadow-xl" : "max-h-0 opacity-0 pointer-events-none"
        } bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800`}
      >
        <nav className="max-w-7xl mx-auto px-4 pb-6 pt-3 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className="px-4 py-3 text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-2">
            <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 dark:bg-neutral-900/80 rounded-xl">
              <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                {t.nav.langToggle}
              </span>
              <LanguageSwitcher />
            </div>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors shadow-sm"
            >
              {t.nav.cta}
            </a>
            <a
              href={whatsappUrl(t.shared.whatsappDefaultMsg)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl transition-colors"
            >
              <MessageCircle size={16} aria-hidden="true" />
              {t.nav.chatWhatsapp}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
