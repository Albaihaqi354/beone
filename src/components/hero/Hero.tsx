"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Code2, Globe, Zap } from "lucide-react";
import { whatsappUrl } from "@/lib/config";

const trustBadges = [
  { icon: Code2, label: "Modern Technology" },
  { icon: Globe, label: "Responsive Design" },
  { icon: Zap, label: "SEO Friendly" },
  { icon: Sparkles, label: "Custom Development" },
];

const floatingCards = [
  {
    id: "tech",
    content: (
      <div className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">Live</span>
        </div>
        <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
          Next.js + TypeScript
        </div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Modern stack</div>
      </div>
    ),
    className: "top-12 right-4 md:top-20 md:right-8",
  },
  {
    id: "speed",
    content: (
      <div className="p-3">
        <div className="text-2xl font-black text-indigo-500">98</div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">Lighthouse Score</div>
        <div className="mt-1.5 h-1 w-full bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
          <div className="h-full w-[98%] bg-indigo-400 rounded-full" />
        </div>
      </div>
    ),
    className: "bottom-24 left-0 md:bottom-32 md:left-4",
  },
  {
    id: "responsive",
    content: (
      <div className="p-3 flex items-center gap-2.5">
        <div className="flex flex-col gap-0.5">
          <div className="w-8 h-5 border-2 border-neutral-300 dark:border-neutral-600 rounded-sm" />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="w-5 h-6 border-2 border-neutral-300 dark:border-neutral-600 rounded-sm" />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="w-4 h-7 border-2 border-indigo-400 rounded-sm" />
        </div>
        <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
          Responsive
        </span>
      </div>
    ),
    className: "top-1/2 -right-2 md:right-0 -translate-y-1/2",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Label pill */}
            <motion.div variants={fadeIn} className="inline-flex mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                <Sparkles size={11} aria-hidden="true" />
                Digital Development Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.05]"
            >
              Build Digital.
              <br />
              <span className="gradient-text">Be One Step</span>
              <br />
              Ahead.
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Kami membantu bisnis membangun website dan aplikasi digital yang
              modern, cepat, dan sesuai kebutuhan.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors duration-150 shadow-md shadow-indigo-200 group"
                aria-label="Start your project — go to contact section"
              >
                Start Your Project
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-xl transition-colors duration-150 group"
                aria-label="Explore solutions — go to solutions section"
              >
                <Play size={14} aria-hidden="true" className="fill-current" />
                Explore Solutions
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400"
                >
                  <Icon size={12} className="text-indigo-400" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Browser window mockup */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-4 bg-indigo-500/10 blur-3xl rounded-2xl"
              />

              {/* Window */}
              <div className="relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-100 dark:border-neutral-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-md px-3 py-1 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-xs text-neutral-400 dark:text-neutral-300 font-mono">
                        beone.dev
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mock content */}
                <div className="p-6 bg-gradient-to-br from-neutral-50 dark:from-neutral-800 to-white dark:to-neutral-900 min-h-[280px]">
                  {/* Mock navbar */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-4 bg-neutral-200 dark:bg-neutral-700 rounded" />
                    <div className="flex gap-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-3 bg-neutral-100 dark:bg-neutral-700 rounded"
                        />
                      ))}
                    </div>
                    <div className="w-16 h-6 bg-indigo-100 dark:bg-indigo-900/60 rounded-lg" />
                  </div>

                  {/* Mock hero text */}
                  <div className="space-y-3 mb-6">
                    <div className="w-3/4 h-5 bg-neutral-800 dark:bg-neutral-300 rounded" />
                    <div className="w-1/2 h-5 bg-indigo-300 dark:bg-indigo-500 rounded" />
                    <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-700 rounded mt-4" />
                    <div className="w-5/6 h-3 bg-neutral-100 dark:bg-neutral-700 rounded" />
                  </div>

                  {/* Mock CTAs */}
                  <div className="flex gap-3 mb-6">
                    <div className="w-28 h-8 bg-indigo-500 rounded-lg" />
                    <div className="w-24 h-8 border border-neutral-200 dark:border-neutral-600 rounded-lg" />
                  </div>

                  {/* Mock cards row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-16 bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-xl p-2"
                      >
                        <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/60 rounded-lg mb-1.5" />
                        <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-700 rounded" />
                        <div className="w-2/3 h-2 bg-neutral-100 dark:bg-neutral-700 rounded mt-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card) => (
                <motion.div
                  key={card.id}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 1.5,
                  }}
                  className={`absolute ${card.className} bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg min-w-[120px]`}
                >
                  {card.content}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="text-xs text-neutral-400 dark:text-neutral-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-6 bg-gradient-to-b from-neutral-300 to-transparent rounded"
          />
        </motion.div>
      </div>
    </section>
  );
}
