"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function InView({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const steps = [
  {
    num: "01",
    title: "Discovery",
    subtitle: "Konsultasi & Brief",
    body: "We discuss your goals, visual preferences, and required materials. This forms the foundation of every decision that follows.",
    duration: "Day 1",
  },
  {
    num: "02",
    title: "Planning",
    subtitle: "Penawaran & Kesepakatan Scope",
    body: "We define the right package, timeline, and pricing — transparently. Official work begins once all materials are received.",
    duration: "Day 1–2",
  },
  {
    num: "03",
    title: "Design & Build",
    subtitle: "Desain UI & Pengerjaan Teknis",
    body: "We design a responsive interface and build the site using modern Next.js and TypeScript — fast, accessible, and SEO-ready.",
    duration: "Day 2–7",
  },
  {
    num: "04",
    title: "Review",
    subtitle: "Review & Revisi",
    body: "You preview the live site and request adjustments within your revision allowance. We refine until it's right.",
    duration: "Day 7–9",
  },
  {
    num: "05",
    title: "Launch",
    subtitle: "Finalisasi & Serah Terima",
    body: "We deploy to cloud hosting, verify SSL, hand over full access, and activate a 30-day bug guarantee.",
    duration: "Day 9–14",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding bg-[var(--surface)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top divider */}
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 mb-16 md:mb-20">
          <InView className="lg:col-span-5">
            <p className="editorial-label mb-6">How We Work</p>
            <h2
              id="process-heading"
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-[var(--ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              From brief
              <br />
              to launch in{" "}
              <span className="italic font-medium">five</span>
              <br />
              clear steps.
            </h2>
          </InView>
          <InView delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              No surprises, no scope creep. Every project follows this same
              structured process — giving you full visibility and control
              from the first conversation to the final handover.
            </p>
          </InView>
        </div>

        {/* Steps — single wide table on desktop, stacked on mobile */}
        <div className="h-px bg-[var(--border)]" />

        <div>
          {steps.map((step, i) => (
            <InView key={step.num} delay={0.06 * i}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-[var(--border)] group">
                {/* Step number */}
                <div className="md:col-span-1 flex items-start">
                  <span className="editorial-label text-[var(--accent)]">
                    {step.num}
                  </span>
                </div>

                {/* Title + subtitle */}
                <div className="md:col-span-3 flex flex-col justify-start">
                  <h3
                    className="font-display text-xl font-semibold text-[var(--ink)]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--ink-muted)] mt-1 italic">
                    {step.subtitle}
                  </p>
                </div>

                {/* Body */}
                <div className="md:col-span-6">
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                    {step.body}
                  </p>
                </div>

                {/* Duration */}
                <div className="md:col-span-2 flex md:justify-end items-start">
                  <span className="editorial-label text-[var(--ink-muted)]">
                    {step.duration}
                  </span>
                </div>
              </div>
            </InView>
          ))}
        </div>

        {/* Footnote */}
        <InView delay={0.1}>
          <p className="mt-8 text-xs text-[var(--ink-muted)] leading-relaxed max-w-xl">
            * Timeline estimates begin once all materials are submitted and scope is agreed.
            Complex projects or delayed materials will adjust the schedule transparently.
          </p>
        </InView>
      </div>
    </section>
  );
}
