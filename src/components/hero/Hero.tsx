"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
    >
      {/* Subtle noise texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">

        {/* Top row: label + tagline */}
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="editorial-label text-[var(--ink-muted)]"
          >
            Digital Development Studio
          </motion.p>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="hidden sm:block editorial-label text-[var(--ink-muted)]"
          >
            Est. 2024
          </motion.p>
        </div>

        {/* Main headline block */}
        <div className="max-w-5xl">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold leading-[0.95] tracking-tight text-[var(--ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            We build
            <br />
            <span className="italic font-medium">digital</span>
            <br />
            experiences.
          </motion.h1>
        </div>

        {/* Sub-row: description + CTA */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="max-w-sm text-base md:text-lg text-[var(--ink-soft)] leading-relaxed font-light"
          >
            BeOne is an independent digital development studio creating
            thoughtful websites and digital solutions for ambitious
            businesses, creators, and individuals.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="flex flex-col sm:flex-row gap-4 items-start md:items-end"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[var(--background)] bg-[var(--ink)] hover:opacity-80 transition-opacity duration-200 group"
            >
              Start a Project
              <ArrowDownRight
                size={15}
                aria-hidden="true"
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200"
              />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[var(--ink)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors duration-200"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar: stats + scroll indicator */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full mt-20 md:mt-24">
        {/* Top border */}
        <div className="h-px bg-[var(--border)]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6">
          {/* Stats */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="flex items-center gap-10"
          >
            {[
              { value: "3+", label: "Live Projects" },
              { value: "100%", label: "Custom Built" },
              { value: "30d", label: "Bug Guarantee" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span
                  className="font-display text-2xl font-bold text-[var(--ink)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {value}
                </span>
                <span className="editorial-label">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.9}
            className="flex items-center gap-2 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors group"
            aria-label="Scroll down"
          >
            <span className="editorial-label">Scroll</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-5 flex items-center justify-center"
              aria-hidden="true"
            >
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1v14M1 10l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
