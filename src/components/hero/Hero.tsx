"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Check,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/lib/language";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export default function Hero() {
  const { t, lang } = useLanguage();

  const floatingCards = [
    {
      id: "portfolio-preview",
      delay: 0,
      content: (
        <div className="p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              {t.hero.portfolioLive}
            </span>
          </div>
          <div className="text-xs font-bold text-neutral-900 dark:text-white">
            yourname.vercel.app
          </div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">
            {t.hero.floatingHostingFree}
          </div>
        </div>
      ),
      className: "top-8 right-2 md:top-14 md:right-6",
    },
    {
      id: "pricing-card",
      delay: 0.6,
      content: (
        <div className="p-3">
          <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
            {t.hero.floatingPriceFrom}
          </div>
          <div className="text-xl font-black text-indigo-500">
            {lang === "en" ? "Rp150,000" : "Rp150.000"}
          </div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 flex items-center gap-1">
            <ShieldCheck size={11} className="text-indigo-400" />
            {t.hero.floatingTransparent}
          </div>
        </div>
      ),
      className: "bottom-16 left-0 md:bottom-24 md:left-2",
    },
    {
      id: "responsive",
      delay: 1.2,
      content: (
        <div className="p-3 flex items-center gap-2.5">
          <div className="flex flex-col gap-0.5">
            <div className="w-8 h-5 border-2 border-neutral-300 dark:border-neutral-600 rounded-xs" />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="w-4 h-7 border-2 border-indigo-400 rounded-xs" />
          </div>
          <div>
            <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block">
              Responsive
            </span>
            <span className="text-[10px] text-neutral-400 block">
              Mobile & Desktop
            </span>
          </div>
        </div>
      ),
      className: "top-1/2 -right-3 md:right-0 -translate-y-1/2",
    },
  ];

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-indigo-500/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-purple-500/8 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/8 rounded-full blur-[90px]" />
      </div>

      {/* Subtle modern grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column — Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Eyebrow pill */}
            <motion.div variants={fadeIn} className="inline-flex mb-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800 shadow-xs">
                <Sparkles size={13} aria-hidden="true" />
                {t.hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.14]"
            >
              {t.hero.headline1}
              <br />
              <span className="gradient-text">{t.hero.headline2}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* Quick Micro-copy value statement */}
            <motion.div
              variants={fadeUp}
              className="mt-3 text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400"
            >
              {t.hero.microcopy}
            </motion.div>

            {/* Main Action CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-all duration-150 shadow-md shadow-indigo-200 dark:shadow-indigo-950/50 group"
                aria-label={t.hero.ctaPrimaryLabel}
              >
                {t.hero.ctaPrimary}
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-xl transition-colors duration-150 group"
                aria-label={t.hero.ctaSecondaryLabel}
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Value Highlights List */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-8 border-t border-neutral-200/60 dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left"
            >
              {t.hero.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400"
                >
                  <span className="w-4 h-4 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 flex items-center justify-center flex-shrink-0">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Aesthetic Portfolio Browser Window Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer soft ambient glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 blur-2xl rounded-3xl"
              />

              {/* Browser Mockup Window */}
              <div className="relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl overflow-hidden">
                {/* Browser Window Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-800/90 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-white dark:bg-neutral-700/80 border border-neutral-200 dark:border-neutral-600 rounded-md px-3 py-1 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[11px] text-neutral-600 dark:text-neutral-300 font-mono">
                          beone-here.vercel.app
                        </span>
                      </div>
                      <ExternalLink size={10} className="text-neutral-400" />
                    </div>
                  </div>
                </div>

                {/* Mockup Inside: Interactive Portfolio Snapshot */}
                <div className="p-5 bg-gradient-to-b from-neutral-50/50 to-white dark:from-neutral-900 dark:to-neutral-950 space-y-4">
                  {/* Mock Profile Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                      B1
                    </div>
                    <div>
                      <div className="text-xs font-bold text-neutral-900 dark:text-white">
                        {t.hero.mockupTitle}
                      </div>
                      <div className="text-[11px] text-indigo-500 font-medium">
                        {t.hero.mockupRole}
                      </div>
                    </div>
                  </div>

                  {/* Mock Hero statement inside mockup */}
                  <div className="p-3 bg-white dark:bg-neutral-800/80 rounded-xl border border-neutral-100 dark:border-neutral-700/60 shadow-xs">
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                      &ldquo;{t.hero.mockupQuote}&rdquo;
                    </p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="w-16 h-5 bg-indigo-500 rounded-md flex items-center justify-center text-[9px] font-bold text-white px-1">
                        {t.hero.mockupViewProjects}
                      </span>
                      <span className="w-14 h-5 border border-neutral-200 dark:border-neutral-600 rounded-md flex items-center justify-center text-[9px] font-semibold text-neutral-600 dark:text-neutral-300">
                        {t.hero.mockupContact}
                      </span>
                    </div>
                  </div>

                  {/* Mock Projects Grid */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      {t.hero.mockupShowcase}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-100 dark:border-neutral-700">
                        <div className="w-full h-10 bg-indigo-100 dark:bg-indigo-950/60 rounded mb-1.5 flex items-center justify-center text-[10px] text-indigo-500 font-mono font-semibold">
                          Finvera App
                        </div>
                        <div className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 truncate">
                          Expense Tracker
                        </div>
                        <div className="text-[9px] text-neutral-400">
                          Next.js · TypeScript
                        </div>
                      </div>

                      <div className="p-2.5 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-100 dark:border-neutral-700">
                        <div className="w-full h-10 bg-purple-100 dark:bg-purple-950/60 rounded mb-1.5 flex items-center justify-center text-[10px] text-purple-500 font-mono font-semibold">
                          Tickitz Cinema
                        </div>
                        <div className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 truncate">
                          Ticket Booking
                        </div>
                        <div className="text-[9px] text-neutral-400">
                          Interactive UI
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards with deterministic delays */}
              {floatingCards.map((card) => (
                <motion.div
                  key={card.id}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  }}
                  className={`absolute ${card.className} bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-xl border border-neutral-200/90 dark:border-neutral-700 shadow-xl min-w-[130px] z-10`}
                >
                  {card.content}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
