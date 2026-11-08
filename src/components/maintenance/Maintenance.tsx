"use client";

import { Check, X } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";

export default function Maintenance() {
  const { t } = useLanguage();

  return (
    <section
      id="maintenance"
      aria-labelledby="maintenance-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Header — single row */}
        <AnimateOnScroll>
          <p className="editorial-label mb-6">{t.maintenance.label}</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-18">
            <h2
              id="maintenance-heading"
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-[var(--ink)]"
            >
              {t.maintenance.heading}
            </h2>
            <p className="text-base text-[var(--ink-soft)] leading-relaxed max-w-md lg:text-right">
              {t.maintenance.subheading}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[var(--border)]">
          {t.maintenance.plans.map((plan, i) => (
            <AnimateOnScroll key={plan.id} delay={0.08 * i}>
              <div
                className={`flex flex-col p-7 sm:p-8 h-full ${i < t.maintenance.plans.length - 1 ? "border-b sm:border-b-0 sm:border-r border-[var(--border)]" : ""}`}
                style={{ backgroundColor: "var(--surface)" }}
              >
                <div className="mb-6">
                  <p className="editorial-label text-[var(--accent)] mb-3">{`0${i + 1}`}</p>
                  <h3 className="font-display text-2xl font-bold text-[var(--ink)] mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl font-bold text-[var(--ink)]">{plan.price}</span>
                    <span className="text-sm text-[var(--ink-muted)]">/ {plan.period}</span>
                  </div>
                </div>

                <div className="h-px bg-[var(--border)] mb-6" />

                {/* Inclusions */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--ink-soft)]">
                      <Check size={13} strokeWidth={2.5} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Exclusions */}
                {plan.exclusions && plan.exclusions.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {plan.exclusions.map((ex) => (
                      <li key={ex} className="flex items-start gap-2.5 text-xs text-[var(--ink-muted)]">
                        <X size={11} className="mt-0.5 shrink-0 text-[var(--ink-muted)]" aria-hidden="true" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[var(--on-dark)] bg-[var(--surface-dark)] hover:opacity-80 transition-opacity"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(
                        new CustomEvent("beone-select-plan", {
                          detail: { planId: `maintenance-${plan.id}`, serviceId: "maintenance" },
                        })
                      );
                    }
                  }}
                >
                  Pilih Paket
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Note */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-8 p-6 border border-[var(--border)] bg-[var(--surface-2)]">
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{t.maintenance.note}</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
