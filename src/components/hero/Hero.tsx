"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useLanguage } from "@/lib/language";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[var(--background)]"
    >
      {/* Noise texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Top row */}
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="editorial-label"
          >
            {t.hero.label}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden sm:block editorial-label"
          >
            Est. 2024
          </motion.p>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold leading-[0.95] tracking-tight text-[var(--ink)] max-w-5xl"
        >
          {t.hero.headline1}
          <br />
          <span className="italic font-medium">{t.hero.headline2}</span>
        </motion.h1>

        {/* Sub-row */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="max-w-sm text-base md:text-lg text-[var(--ink-soft)] leading-relaxed font-light"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
            className="flex flex-col sm:flex-row gap-4 items-start md:items-end"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[var(--on-dark)] bg-[var(--surface-dark)] hover:opacity-80 transition-opacity duration-200 group"
            >
              {t.hero.ctaPrimary}
              <ArrowDownRight
                size={15}
                aria-hidden="true"
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[var(--ink)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors duration-200"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full mt-20 md:mt-24">
        <div className="h-px bg-[var(--border)]" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="flex items-center gap-10"
          >
            {[
              { value: t.hero.stat1Value, label: t.hero.stat1Label },
              { value: t.hero.stat2Value, label: t.hero.stat2Label },
              { value: t.hero.stat3Value, label: t.hero.stat3Label },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-display text-2xl font-bold text-[var(--ink)]">{value}</span>
                <span className="editorial-label">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            className="flex items-center gap-2 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
            aria-label={t.hero.scrollLabel}
          >
            <span className="editorial-label">{t.hero.scrollLabel}</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-5 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                <path d="M6 1v14M1 10l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
