"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";

export default function Services() {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const personalServices = t.services.items.filter(
    (s) => s.category === t.services.categoryPersonal
  );
  const businessServices = t.services.items.filter(
    (s) => s.category === t.services.categoryBusiness
  );
  const advancedServices = t.services.items.filter(
    (s) => s.category === t.services.categoryAdvanced
  );

  const categories = [
    { label: t.services.categoryPersonal, items: personalServices },
    { label: t.services.categoryBusiness, items: businessServices },
    { label: t.services.categoryAdvanced, items: advancedServices },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <AnimateOnScroll>
          <p className="editorial-label mb-6">{t.services.label}</p>
        </AnimateOnScroll>
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 mb-16 md:mb-20 items-end">
          <AnimateOnScroll delay={0.1} className="lg:col-span-7">
            <h2
              id="services-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[var(--ink)] whitespace-pre-line"
            >
              {t.services.heading}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              {t.services.subheading}
            </p>
          </AnimateOnScroll>
        </div>

        {/* Services grouped by category */}
        {categories.map((cat, catIdx) => (
          <div key={cat.label} className={catIdx > 0 ? "mt-12 md:mt-16" : ""}>
            <AnimateOnScroll>
              <div className="flex items-center gap-4 mb-0">
                <div className="h-px flex-1 bg-[var(--border)]" />
                <span className="editorial-label text-[var(--accent)] shrink-0">{cat.label}</span>
              </div>
            </AnimateOnScroll>

            {cat.items.map((svc, i) => (
              <AnimateOnScroll key={svc.id} delay={0.05 * i}>
                <div
                  className="relative border-b border-[var(--border)] group cursor-pointer"
                  onMouseEnter={() => setHoveredId(svc.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <motion.div
                    className="absolute inset-0 bg-[var(--surface-2)] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === svc.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 py-6 sm:py-7">
                    <span className="editorial-label text-[var(--accent)] w-10 shrink-0">{svc.num}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[var(--ink)] group-hover:opacity-75 transition-opacity">
                        {svc.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-[var(--ink-muted)] leading-relaxed max-w-2xl">
                        {svc.description}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 shrink-0 sm:ml-8">
                      <div className="flex flex-wrap gap-1.5">
                        {svc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-medium border border-[var(--border)] text-[var(--ink-muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-semibold text-[var(--ink)]">
                          {svc.startingPrice}
                        </span>
                        <a
                          href="#contact"
                          aria-label={`Tanya tentang ${svc.title}`}
                          className="w-8 h-8 flex items-center justify-center border border-[var(--border)] text-[var(--ink-muted)] group-hover:bg-[var(--surface-dark)] group-hover:text-[var(--on-dark)] group-hover:border-[var(--surface-dark)] transition-all duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        ))}

        <AnimateOnScroll delay={0.1}>
          <p className="mt-10 text-xs text-[var(--ink-muted)] max-w-lg">
            {t.services.footerNote}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
