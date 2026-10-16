"use client";

import { Check, Shield } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";
import type { MaintenancePlanTranslation } from "@/lib/i18n/types";

export default function Maintenance() {
  const { t } = useLanguage();

  const handleSelectPlan = (plan: MaintenancePlanTranslation) => {
    if (typeof window !== "undefined") {
      const planKey = `maintenance-${plan.id.toLowerCase()}`;
      window.dispatchEvent(
        new CustomEvent("beone-select-plan", {
          detail: {
            planId: planKey,
            serviceId: "maintenance",
            service: "Website Maintenance",
            plan: `${plan.name} (${plan.price}/${plan.period})`,
          },
        })
      );
    }
  };

  return (
    <section
      id="maintenance"
      aria-labelledby="maintenance-heading"
      className="section-padding bg-neutral-50 dark:bg-neutral-900/50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label={t.maintenance.label}
            title={t.maintenance.title}
            subtitle={t.maintenance.subtitle}
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {t.maintenance.plans.map((plan, index) => (
            <AnimateOnScroll key={plan.id} delay={index * 0.08}>
              <div
                className={`flex flex-col h-full rounded-2xl border p-6 transition-all duration-200 hover:shadow-md ${
                  index === 2
                    ? "border-indigo-200 dark:border-indigo-800 bg-white dark:bg-neutral-900"
                    : "border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                }`}
                aria-label={`${plan.name} ${t.maintenance.planAria}`}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <Shield size={20} />
                </div>

                {/* Header */}
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-2 mb-5">
                  <span className="text-2xl font-black text-neutral-950 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-neutral-400 dark:text-neutral-500 ml-1">
                    / {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul
                  className="flex flex-col gap-2.5 flex-1"
                  aria-label={`${t.maintenance.featuresAria}: ${plan.name}`}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        aria-hidden="true"
                        className="flex-shrink-0 mt-0.5 text-indigo-500"
                      />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={() => handleSelectPlan(plan)}
                  className="mt-5 flex items-center justify-center py-2.5 rounded-xl text-sm font-semibold border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
                  aria-label={`${t.maintenance.selectPlan} ${plan.name}`}
                >
                  {t.maintenance.selectPlan} {plan.name}
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.15}>
          <div className="mt-8 p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 text-center max-w-3xl mx-auto space-y-1">
            <p className="font-semibold text-neutral-800 dark:text-neutral-200">
              {t.maintenance.transparencyTitle}
            </p>
            <p>
              {t.maintenance.transparencyText}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
