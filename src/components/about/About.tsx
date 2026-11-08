"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const pillars = [
  {
    num: "01",
    title: "Custom-Built, Always",
    body: "Every project is built from scratch around your goals — not stuffed into a template. We design and engineer each piece deliberately.",
  },
  {
    num: "02",
    title: "Modern Technology",
    body: "We build with Next.js, TypeScript, and modern web standards — fast, accessible, scalable sites that are easy to maintain long-term.",
  },
  {
    num: "03",
    title: "Transparent Process",
    body: "Fixed scope, honest timelines, no hidden costs. You see exactly what you are getting before a single line of code is written.",
  },
  {
    num: "04",
    title: "Lasting Ownership",
    body: "You own everything. Full codebase handover, free cloud hosting setup, and a 30-day bug guarantee on every project we ship.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-[var(--surface)] relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Two-column intro */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <AnimateOnScroll>
              <p className="editorial-label mb-8">About BeOne</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                id="about-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[var(--ink)]"
              >
                An independent studio
                <br />
                built for{" "}
                <span className="italic font-medium">ambitious</span>
                <br />
                digital work.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-5 lg:pt-16 space-y-5">
            <AnimateOnScroll delay={0.2}>
              <p className="text-base text-[var(--ink-soft)] leading-relaxed">
                BeOne is a small, focused digital development studio. We
                partner with individuals, creators, and businesses who want
                a real web presence — not a generic template stamped out in
                an afternoon.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <p className="text-base text-[var(--ink-soft)] leading-relaxed">
                From a quick personal portfolio to a full e-commerce
                platform or custom web application, we approach every
                project with the same care: thoughtful design, clean code,
                and honest communication from start to finish.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:opacity-60 transition-opacity duration-200"
              >
                Work with us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Pillars */}
        <div className="h-px bg-[var(--border)] mt-20 md:mt-28 mb-16 md:mb-20" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ num, title, body }, i) => (
            <AnimateOnScroll key={num} delay={0.08 * i}>
              <div
                className={[
                  "py-8 pr-8",
                  i > 0 ? "border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8 sm:pr-0" : "",
                  i === 2 ? "border-t lg:border-t-0 lg:border-l border-[var(--border)] lg:pl-8" : "",
                  i === 3 ? "border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="editorial-label text-[var(--accent)] mb-5 block">{num}</span>
                <h3 className="font-display text-xl font-semibold text-[var(--ink)] mb-3">{title}</h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
