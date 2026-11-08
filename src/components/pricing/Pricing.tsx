"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Clock, RefreshCw, Server } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";
import type { PricingPlanTranslation } from "@/lib/i18n/types";

type Tab = "entry" | "business" | "advanced";

function PlanCard({
  plan,
  isLast,
  onSelect,
}: {
  plan: PricingPlanTranslation;
  isLast: boolean;
  onSelect: () => void;
}) {
  const isPopular = !!plan.popular;
  return (
    <div
      className={`relative flex flex-col p-7 sm:p-8 ${!isLast ? "border-r border-[var(--border)]" : ""}`}
      style={{ backgroundColor: isPopular ? "var(--surface-dark)" : "var(--surface)" }}
    >
      {isPopular && (
        <span className="editorial-label mb-4 block" style={{ color: "var(--accent)" }}>
          Paling Diminati
        </span>
      )}

      <h3
        className="font-display text-lg font-semibold mb-1"
        style={{ color: isPopular ? "var(--on-dark)" : "var(--ink)" }}
      >
        {plan.name}
      </h3>

      <div className="mt-4 mb-5">
        <span
          className="font-display text-3xl font-bold"
          style={{ color: isPopular ? "var(--on-dark)" : "var(--ink)" }}
        >
          {plan.price}
        </span>
        {plan.priceNote && (
          <p className="text-xs mt-1" style={{ color: isPopular ? "rgba(248,245,240,0.55)" : "var(--ink-muted)" }}>
            {plan.priceNote}
          </p>
        )}
      </div>

      <div
        className="flex flex-col gap-1.5 mb-5 text-xs"
        style={{ color: isPopular ? "rgba(248,245,240,0.6)" : "var(--ink-muted)" }}
      >
        <span className="flex items-center gap-1.5">
          <Clock size={11} aria-hidden="true" /> {plan.duration}
        </span>
        {plan.revisions && (
          <span className="flex items-center gap-1.5">
            <RefreshCw size={11} aria-hidden="true" /> {plan.revisions}
          </span>
        )}
        {plan.hostingInfo && (
          <span className="flex items-center gap-1.5">
            <Server size={11} aria-hidden="true" /> {plan.hostingInfo}
          </span>
        )}
      </div>

      <div className="h-px mb-5" style={{ backgroundColor: isPopular ? "rgba(248,245,240,0.15)" : "var(--border)" }} />

      <ul className="flex flex-col gap-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check size={13} strokeWidth={2.5} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
            <span className="text-xs leading-relaxed" style={{ color: isPopular ? "rgba(248,245,240,0.75)" : "var(--ink-soft)" }}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        onClick={onSelect}
        className="mt-8 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-opacity hover:opacity-80"
        style={
          isPopular
            ? { backgroundColor: "var(--on-dark)", color: "var(--surface-dark)" }
            : { backgroundColor: "var(--surface-dark)", color: "var(--on-dark)" }
        }
      >
        {plan.cta}
        <ArrowUpRight size={13} aria-hidden="true" />
      </a>
    </div>
  );
}

export default function Pricing() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>("entry");

  const tabs: { id: Tab; label: string }[] = [
    { id: "entry", label: t.pricing.tabEntry },
    { id: "business", label: t.pricing.tabBusiness },
    { id: "advanced", label: t.pricing.tabAdvanced },
  ];

  const planMap: Record<Tab, readonly PricingPlanTranslation[]> = {
    entry: t.pricing.entryPlans,
    business: t.pricing.businessPlans,
    advanced: t.pricing.advancedPlans,
  };

  const currentPlans = planMap[activeTab];

  const dispatchPlan = (id: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("beone-select-plan", { detail: { planId: id } }));
    }
  };

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-padding bg-[var(--surface)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        <AnimateOnScroll>
          <p className="editorial-label mb-6">{t.pricing.label}</p>
          <h2
            id="pricing-heading"
            className="font-display text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-[var(--ink)] max-w-3xl mb-5 whitespace-pre-line"
          >
            {t.pricing.heading}
          </h2>
          <p className="text-base text-[var(--ink-soft)] leading-relaxed max-w-xl mb-14 md:mb-16">
            {t.pricing.subheading}
          </p>
        </AnimateOnScroll>

        {/* Tabs */}
        <AnimateOnScroll delay={0.1}>
          <div className="flex gap-0 border border-[var(--border)] w-fit mb-10 md:mb-12" role="tablist" aria-label={t.pricing.label}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-3 text-sm font-medium transition-colors duration-150"
                style={{
                  backgroundColor: activeTab === tab.id ? "var(--surface-dark)" : "transparent",
                  color: activeTab === tab.id ? "var(--on-dark)" : "var(--ink-muted)",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Plans */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border border-[var(--border)]"
            style={{ display: "grid", gridTemplateColumns: `repeat(${currentPlans.length}, minmax(0, 1fr))` }}
            role="tabpanel"
          >
            {currentPlans.map((plan, i) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                isLast={i === currentPlans.length - 1}
                onSelect={() => dispatchPlan(plan.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Add-ons */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-16 md:mt-20">
            <div className="h-px bg-[var(--border)] mb-10" />
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <p className="editorial-label mb-3">{t.pricing.addonsTitle}</p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{t.pricing.addonsNote}</p>
              </div>
              <div className="lg:col-span-9">
                <div className="border border-[var(--border)]">
                  {t.pricing.addons.map((addon, i) => (
                    <div
                      key={addon.name}
                      className={`flex items-center justify-between px-5 py-4 text-sm ${i < t.pricing.addons.length - 1 ? "border-b border-[var(--border)]" : ""}`}
                    >
                      <span className="text-[var(--ink-soft)]">{addon.name}</span>
                      <span className="text-[var(--ink)] font-medium ml-4 shrink-0 text-xs">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Payment Terms */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-14 md:mt-18">
            <div className="h-px bg-[var(--border)] mb-10" />
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <p className="editorial-label mb-3">{t.pricing.paymentTitle}</p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{t.pricing.paymentNote}</p>
              </div>
              <div className="lg:col-span-9">
                <div className="grid sm:grid-cols-2 gap-0 border border-[var(--border)]">
                  {t.pricing.paymentTerms.map((term, i) => (
                    <div
                      key={term.condition}
                      className={`p-6 ${i < t.pricing.paymentTerms.length - 1 ? "border-b sm:border-b-0 sm:border-r border-[var(--border)]" : ""}`}
                    >
                      <p className="editorial-label text-[var(--accent)] mb-4">{term.condition}</p>
                      <ol className="space-y-2">
                        {term.steps.map((step, j) => (
                          <li key={step} className="flex items-start gap-2.5 text-sm text-[var(--ink-soft)]">
                            <span className="editorial-label text-[var(--ink-muted)] shrink-0 mt-0.5">{j + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
