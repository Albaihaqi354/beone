"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

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
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    num: "01",
    title: "Custom-Built, Always",
    body: "Every project is built from scratch around your goals — not stuffed into a template. We design and engineer each piece of the experience deliberately.",
  },
  {
    num: "02",
    title: "Modern Technology",
    body: "We build with Next.js, TypeScript, and modern web standards — sites that are fast, accessible, scalable, and easy to maintain.",
  },
  {
    num: "03",
    title: "Transparent Process",
    body: "Fixed scope, honest timelines, no hidden costs. You see exactly what you're getting before a single line of code is written.",
  },
  {
    num: "04",
    title: "Lasting Ownership",
    body: "You own everything. Full codebase handover, free cloud hosting setup, and a 30-day bug guarantee on every project.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-[var(--surface)] relative"
    >
      {/* Top rule */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Two-column intro layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">

          {/* Left — label + large statement */}
          <div className="lg:col-span-7">
            <InView>
              <p className="editorial-label mb-8">About BeOne</p>
            </InView>
            <InView delay={0.1}>
              <h2
                id="about-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[var(--ink)]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                An independent studio
                <br />
                built for{" "}
                <span className="italic font-medium">ambitious</span>
                <br />
                digital work.
              </h2>
            </InView>
          </div>

          {/* Right — description paragraphs */}
          <div className="lg:col-span-5 lg:pt-16 space-y-5">
            <InView delay={0.2}>
              <p className="text-base text-[var(--ink-soft)] leading-relaxed">
                BeOne is a small, focused digital development studio. We
                partner with individuals, creators, and businesses who want
                a real web presence — not a generic template stamped out in
                an afternoon.
              </p>
            </InView>
            <InView delay={0.3}>
              <p className="text-base text-[var(--ink-soft)] leading-relaxed">
                From a quick personal portfolio to a full e-commerce
                platform or custom web application, we approach every
                project with the same care: thoughtful design, clean code,
                and honest communication from start to finish.
              </p>
            </InView>
            <InView delay={0.4}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:opacity-60 transition-opacity duration-200"
              >
                Work with us
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </InView>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--border)] mt-20 md:mt-28 mb-16 md:mb-20" />

        {/* Four pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {pillars.map(({ num, title, body }, i) => (
            <InView key={num} delay={0.1 * i}>
              <div
                className={`py-8 pr-8 ${
                  i < 3 ? "lg:border-r border-[var(--border)]" : ""
                } ${i > 0 ? "lg:pl-8 lg:pr-0" : ""} ${
                  i > 0 ? "border-t lg:border-t-0 border-[var(--border)]" : ""
                }`}
              >
                <span className="editorial-label text-[var(--accent)] mb-5 block">
                  {num}
                </span>
                <h3
                  className="font-display text-xl font-semibold text-[var(--ink)] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  {body}
                </p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
