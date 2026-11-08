"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    num: "01",
    title: "Discovery",
    body: "We discuss your goals, visual preferences, and required materials. This conversation forms the foundation of every decision that follows.",
    duration: "Day 1",
  },
  {
    num: "02",
    title: "Planning",
    body: "We define the right package, transparent timeline, and pricing. Official work begins once all materials are received and scope is agreed.",
    duration: "Day 1–2",
  },
  {
    num: "03",
    title: "Design & Build",
    body: "We design a responsive interface and build the site using modern Next.js and TypeScript — fast, accessible, and SEO-ready out of the box.",
    duration: "Day 2–7",
  },
  {
    num: "04",
    title: "Review",
    body: "You preview the live site and request adjustments within your revision allowance. We refine until it reads exactly as intended.",
    duration: "Day 7–9",
  },
  {
    num: "05",
    title: "Launch",
    body: "We deploy to cloud hosting, verify SSL, hand over full access, and activate a 30-day bug guarantee on everything we built.",
    duration: "Day 9–14",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding bg-[var(--surface-2)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header — single-column, full-width rule variation */}
        <div className="h-px bg-[var(--border)] mb-12 md:mb-16" />
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 md:mb-18">
            <div>
              <p className="editorial-label mb-4">How We Work</p>
              <h2
                id="process-heading"
                className="font-display text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-[var(--ink)]"
              >
                From brief to launch
                <br />
                in <span className="italic font-medium">five clear steps.</span>
              </h2>
            </div>
            <p className="text-sm text-[var(--ink-muted)] max-w-xs leading-relaxed sm:text-right pb-1">
              No surprises, no scope creep. Full visibility and control from
              first conversation to final handover.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Step table */}
        <div className="h-px bg-[var(--border)]" />
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.num} delay={0.06 * i}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-[var(--border)] group">
              <div className="md:col-span-1">
                <span className="editorial-label text-[var(--accent)]">{step.num}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{step.body}</p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <span className="editorial-label text-[var(--ink-muted)]">{step.duration}</span>
              </div>
            </div>
          </AnimateOnScroll>
        ))}

        <AnimateOnScroll delay={0.1}>
          <p className="mt-7 text-xs text-[var(--ink-muted)] leading-relaxed max-w-lg">
            * Timeline estimates begin once all materials are submitted and scope is agreed.
            Mid-project additions or delayed materials adjust the schedule transparently.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
