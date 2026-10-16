"use client";

import { useState } from "react";
import { Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Info, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/config";
import { useLanguage } from "@/lib/language";
import type { PricingPlanTranslation } from "@/lib/i18n/types";

const planToServiceIdMap: Record<string, string> = {
  "promo-design": "promo-design",
  "umkm-catalog": "umkm-catalog",
  "portfolio-starter": "personal-portfolio",
  "portfolio-professional": "personal-portfolio",
  "portfolio-premium": "personal-portfolio",
  "business-landing-page": "business-landing-page",
  "company-profile": "company-profile",
  "business-website": "business-website",
  ecommerce: "ecommerce",
  "custom-web-app": "custom-web-app",
};

export default function Pricing() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"entry" | "portfolio" | "business">("entry");

  const currentPlans =
    activeTab === "entry"
      ? t.pricing.entryPlans
      : activeTab === "portfolio"
      ? t.pricing.portfolioPlans
      : t.pricing.businessPlans;

  const handleSelectPlan = (plan: PricingPlanTranslation) => {
    if (typeof window !== "undefined") {
      const serviceId = planToServiceIdMap[plan.id] || "personal-portfolio";
      window.dispatchEvent(
        new CustomEvent("beone-select-plan", {
          detail: {
            planId: plan.id,
            serviceId,
            service: plan.name,
            plan: plan.name,
          },
        })
      );
    }
  };

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-padding bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label={t.pricing.label}
            title={t.pricing.title}
            subtitle={t.pricing.subtitle}
          />
        </AnimateOnScroll>

        {/* Category Switcher Tabs */}
        <AnimateOnScroll delay={0.05}>
          <div className="flex justify-center mb-10">
            <div
              role="tablist"
              aria-label={t.pricing.categoryAria}
              className="inline-flex p-1.5 rounded-2xl bg-neutral-200/80 dark:bg-neutral-800 border border-neutral-300/60 dark:border-neutral-700 shadow-inner max-w-full overflow-x-auto"
            >
              <button
                type="button"
                role="tab"
                id="tab-entry"
                aria-selected={activeTab === "entry"}
                aria-controls="pricing-panel"
                onClick={() => setActiveTab("entry")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  activeTab === "entry"
                    ? "bg-white dark:bg-neutral-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                <Zap size={14} className="text-amber-500" aria-hidden="true" />
                {t.pricing.tabEntry}
              </button>

              <button
                type="button"
                role="tab"
                id="tab-portfolio"
                aria-selected={activeTab === "portfolio"}
                aria-controls="pricing-panel"
                onClick={() => setActiveTab("portfolio")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  activeTab === "portfolio"
                    ? "bg-white dark:bg-neutral-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                <Sparkles size={14} aria-hidden="true" />
                {t.pricing.tabPortfolio}
              </button>

              <button
                type="button"
                role="tab"
                id="tab-business"
                aria-selected={activeTab === "business"}
                aria-controls="pricing-panel"
                onClick={() => setActiveTab("business")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  activeTab === "business"
                    ? "bg-white dark:bg-neutral-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                {t.pricing.tabBusiness}
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Pricing Cards Grid */}
        <div
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className={`grid grid-cols-1 ${
            activeTab === "entry"
              ? "sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
              : activeTab === "portfolio"
              ? "md:grid-cols-3 max-w-6xl mx-auto"
              : "md:grid-cols-2 xl:grid-cols-4"
          } gap-6 items-stretch`}
        >
          {currentPlans.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <AnimateOnScroll key={plan.id} delay={index * 0.06}>
                <div
                  className={`relative flex flex-col h-full rounded-2xl border transition-all duration-200 ${
                    isPopular
                      ? "border-indigo-500/80 bg-white dark:bg-neutral-900 shadow-xl shadow-indigo-500/10 dark:shadow-indigo-950/40 ring-2 ring-indigo-500/30"
                      : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md"
                  }`}
                  aria-label={`${plan.name} ${t.pricing.planAria}`}
                >
                  {/* Badge */}
                  {isPopular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-0.5 bg-indigo-500 text-white text-[11px] font-bold rounded-full shadow-xs whitespace-nowrap"
                      aria-label={t.pricing.recommended}
                    >
                      <Sparkles size={11} aria-hidden="true" />
                      {t.pricing.recommended}
                    </div>
                  )}

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    {/* Header: Name and Category label */}
                    <div className="mb-3">
                      <div className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 mb-2">
                        {plan.label}
                      </div>
                      <h3 className="text-lg font-black text-neutral-950 dark:text-white leading-tight">
                        {plan.name}
                      </h3>
                      {plan.target && (
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed line-clamp-2">
                          {plan.target}
                        </p>
                      )}
                    </div>

                    {/* Price and duration */}
                    <div className="mb-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                      {plan.priceNote && (
                        <span className="text-[11px] text-neutral-400 block mb-0.5">
                          {plan.priceNote}
                        </span>
                      )}
                      <div className="text-2xl sm:text-3xl font-black text-neutral-950 dark:text-white">
                        {plan.price}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">
                        <span>⏱️ {plan.duration}</span>
                        {plan.revisions && <span>• 🔄 {plan.revisions}</span>}
                      </div>
                    </div>

                    {/* Hosting or Delivery Info */}
                    {plan.hostingInfo && (
                      <div className="mb-4 p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-300 flex items-start gap-1.5">
                        <Info size={13} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{plan.hostingInfo}</span>
                      </div>
                    )}

                    {/* Features list */}
                    <ul
                      className="flex flex-col gap-2 flex-1 mb-5"
                      aria-label={`${t.pricing.featuresAria}: ${plan.name}`}
                    >
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                          <Check
                            size={14}
                            aria-hidden="true"
                            className="flex-shrink-0 mt-0.5 text-indigo-500"
                          />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
                      <a
                        href="#contact"
                        onClick={() => handleSelectPlan(plan)}
                        className={`flex items-center justify-center gap-1.5 w-full py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 shadow-xs ${
                          isPopular
                            ? "bg-indigo-500 text-white hover:bg-indigo-600"
                            : "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100"
                        }`}
                        aria-label={`${plan.cta} — ${plan.name}`}
                      >
                        {plan.cta}
                        <ArrowRight size={13} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Pricing Terms & Scope Notice */}
        <AnimateOnScroll delay={0.15}>
          <div className="mt-10 p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/60 text-xs text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 items-start">
            <ShieldCheck size={18} className="text-indigo-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1.5 leading-relaxed">
              <span className="font-bold text-neutral-900 dark:text-white block">
                {t.pricing.termsTitle}
              </span>
              <div className="space-y-1">
                {t.pricing.terms.map((term, i) => (
                  <p key={term.label}>
                    {i + 1}. <strong>{term.label}</strong> {term.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Add-ons List */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8">
            <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                  {t.pricing.addonsTitle}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {t.pricing.addonsSubtitle}
                </p>
              </div>
              <a
                href={whatsappUrl(t.pricing.askWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 hover:text-indigo-600"
              >
                <MessageCircle size={14} />
                {t.pricing.addonsAskCustom}
              </a>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5"
              role="list"
              aria-label={t.pricing.addonsTitle}
            >
              {t.pricing.addons.map((addon) => (
                <div
                  key={addon.name}
                  role="listitem"
                  className="flex items-center justify-between py-2.5 px-3.5 bg-neutral-50 dark:bg-neutral-800/70 border border-neutral-100 dark:border-neutral-800 rounded-xl"
                >
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    {addon.name}
                  </span>
                  <span className="text-xs font-bold text-indigo-500 ml-2 whitespace-nowrap">
                    {addon.startingPrice}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-500">
              {t.pricing.addonsNote}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
