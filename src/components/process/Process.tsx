"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding bg-[var(--surface-2)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-12 md:mb-16" />

        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 md:mb-18">
            <div>
              <p className="editorial-label mb-4">{t.process.label}</p>
              <h2
                id="process-heading"
                className="font-display text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-[var(--ink)] whitespace-pre-line"
              >
                {t.process.heading}
              </h2>
            </div>
            <p className="text-sm text-[var(--ink-muted)] max-w-xs leading-relaxed sm:text-right pb-1">
              {t.process.subheading}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="h-px bg-[var(--border)]" />
        {t.process.steps.map((step, i) => (
          <AnimateOnScroll key={step.num} delay={0.06 * i}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-[var(--border)]">
              <div className="md:col-span-1">
                <span className="editorial-label text-[var(--accent)]">{step.num}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{step.description}</p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <span className="editorial-label text-[var(--ink-muted)]">{step.duration}</span>
              </div>
            </div>
          </AnimateOnScroll>
        ))}

        <AnimateOnScroll delay={0.1}>
          <p className="mt-7 text-xs text-[var(--ink-muted)] leading-relaxed max-w-lg">
            {t.process.note}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
