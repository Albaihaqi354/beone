"use client";

import {
  Layout,
  Building2,
  ShoppingCart,
  LayoutDashboard,
  Settings2,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>> = {
  "landing-page": Layout,
  "company-profile": Building2,
  ecommerce: ShoppingCart,
  "business-dashboard": LayoutDashboard,
  "management-system": Settings2,
  "custom-web-app": Code2,
};

export default function WhatWeCanBuild() {
  const { t } = useLanguage();

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="section-padding bg-[var(--surface)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Header */}
        <AnimateOnScroll>
          <p className="editorial-label mb-6">{t.solutions.label}</p>
        </AnimateOnScroll>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 mb-16 md:mb-20">
          <AnimateOnScroll delay={0.1} className="lg:col-span-6">
            <h2
              id="solutions-heading"
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-[var(--ink)]"
            >
              {t.solutions.title}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} className="lg:col-span-5 lg:col-start-8 lg:pt-10">
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              {t.solutions.subtitle}
            </p>
          </AnimateOnScroll>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[var(--border)]">
          {t.solutions.items.map((item, i) => {
            const Icon = iconMap[item.id] ?? Code2;
            const isLastRow = i >= t.solutions.items.length - (t.solutions.items.length % 3 || 3);
            const isLastInRow = (i + 1) % 3 === 0;
            return (
              <AnimateOnScroll key={item.id} delay={0.05 * i}>
                <div
                  className={[
                    "flex flex-col p-7 sm:p-8 h-full group",
                    !isLastInRow ? "border-r-0 lg:border-r border-[var(--border)]" : "",
                    !isLastRow ? "border-b border-[var(--border)]" : "",
                    // always add border-b on sm (2-col) and mobile
                    i < t.solutions.items.length - 1 ? "border-b lg:border-b-0" : "",
                    i < t.solutions.items.length - 1 && !isLastRow ? "lg:border-b border-[var(--border)]" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    borderRight: !isLastInRow ? `1px solid var(--border)` : undefined,
                    borderBottom:
                      i < t.solutions.items.length - (t.solutions.items.length % 3 === 0 ? 3 : t.solutions.items.length % 3)
                        ? `1px solid var(--border)`
                        : undefined,
                  }}
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--ink-muted)] group-hover:border-[var(--border-strong)] group-hover:text-[var(--ink)] transition-all duration-200">
                      <Icon size={18} aria-hidden={true} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-[var(--ink)] mb-3 group-hover:opacity-75 transition-opacity">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-5 flex-1">
                    {item.description}
                  </p>

                  {/* Examples */}
                  <ul className="space-y-1 mb-6">
                    {item.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] border-b border-[var(--border)] pb-0.5 hover:border-[var(--ink)] hover:opacity-70 transition-all duration-200 self-start"
                    aria-label={`${item.cta} — ${item.title}`}
                  >
                    {item.cta}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
