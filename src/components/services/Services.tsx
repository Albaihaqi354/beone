"use client";

import { useState } from "react";
import {
  Sparkles,
  Palette,
  BookOpen,
  Layout,
  Building2,
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";
import type { ServiceItemTranslation } from "@/lib/i18n/types";

const iconMap: Record<string, LucideIcon> = {
  "personal-portfolio": Sparkles,
  "promo-design": Palette,
  "umkm-catalog": BookOpen,
  "business-landing-page": Layout,
  "company-profile": Building2,
  "business-website": Globe,
  ecommerce: ShoppingCart,
  "custom-web-app": Code2,
  "mobile-app": Smartphone,
};

const entryServiceIds = new Set([
  "personal-portfolio",
  "promo-design",
  "umkm-catalog",
  "business-landing-page",
]);

type CategoryTabId = "all" | "entry" | "personal" | "business" | "advanced";

export default function Services() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryTabId>("all");

  const categoryTabs: { id: CategoryTabId; label: string; icon?: LucideIcon }[] = [
    { id: "all", label: t.services.filterAll },
    { id: "entry", label: t.services.filterEntry, icon: Zap },
    { id: "personal", label: t.services.filterPersonal },
    { id: "business", label: t.services.filterBusiness },
    { id: "advanced", label: t.services.filterAdvanced },
  ];

  const filteredServices = t.services.items.filter((s) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "entry") return entryServiceIds.has(s.id);
    return s.category === activeCategory;
  });

  const handleSelectService = (service: ServiceItemTranslation) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("beone-select-plan", {
          detail: {
            planId: service.id,
            serviceId: service.id,
            service: service.title,
            plan: service.title,
          },
        })
      );
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-white dark:bg-neutral-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label={t.services.label}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
        </AnimateOnScroll>

        {/* Category Tabs Filter */}
        <AnimateOnScroll delay={0.05}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-xs"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  {Icon && <Icon size={14} className={isActive ? "text-white" : "text-amber-500"} />}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label={t.services.label}
        >
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.id] ?? Code2;
            const isEntry = entryServiceIds.has(service.id);

            return (
              <AnimateOnScroll key={service.id} delay={index * 0.05}>
                <article
                  role="listitem"
                  className={`group relative flex flex-col h-full bg-white dark:bg-neutral-900 rounded-2xl p-6 sm:p-7 border transition-all duration-200 ${
                    isEntry
                      ? "border-indigo-200/90 dark:border-indigo-900/60 shadow-sm hover:border-indigo-400 hover:shadow-md"
                      : "border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm"
                  }`}
                  aria-label={`${t.services.label}: ${service.title}`}
                >
                  {/* Top Badges */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${
                        isEntry
                          ? "bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon size={22} />
                    </div>

                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {service.badge && (
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                          {service.badge}
                        </span>
                      )}
                      <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                        {service.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Scope Summary */}
                  {service.scopeSummary && (
                    <div className="mb-4 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-300">
                      <span className="font-semibold block text-neutral-900 dark:text-white mb-0.5">
                        {lang === "en" ? "Service Scope:" : "Cakupan Layanan:"}
                      </span>
                      {service.scopeSummary}
                    </div>
                  )}

                  {/* Use Cases list */}
                  {service.useCases && service.useCases.length > 0 && (
                    <div className="mb-5 flex-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-2">
                        {t.services.useCases}:
                      </span>
                      <ul className="space-y-1.5" aria-label={`${t.services.useCases} ${service.title}`}>
                        {service.useCases.slice(0, 3).map((useCase) => (
                          <li
                            key={useCase}
                            className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400"
                          >
                            <CheckCircle2
                              size={13}
                              className="text-indigo-500 flex-shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bottom: Price & CTA */}
                  <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-neutral-400 dark:text-neutral-500 block">
                        {service.priceNote || (lang === "en" ? "Investment" : "Investasi")}
                      </span>
                      <span className="text-base sm:text-lg font-black text-neutral-950 dark:text-white">
                        {service.startingPrice}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      onClick={() => handleSelectService(service)}
                      className="inline-flex items-center gap-1 px-3.5 py-2 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-500 text-indigo-600 dark:text-indigo-400 hover:text-white text-xs font-semibold rounded-xl transition-all duration-150 group/btn"
                      aria-label={`${t.services.selectService} — ${service.title}`}
                    >
                      {t.services.selectService}
                      <ArrowRight
                        size={13}
                        className="group-hover/btn:translate-x-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Note on Scope & Custom Requests */}
        <AnimateOnScroll delay={0.15}>
          <div className="mt-12 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h4 className="text-sm font-bold text-neutral-950 dark:text-white">
                {lang === "en"
                  ? "Have Specific or Custom Requirements Outside These Packages?"
                  : "Punya Kebutuhan Spesifik atau Custom Diluar Paket?"}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-2xl">
                {lang === "en"
                  ? "We are ready to tailor deliverables to your exact business needs with upfront, transparent cost and delivery timelines."
                  : "Kami siap menyesuaikan ruang lingkup pengerjaan sesuai kebutuhan unik Anda dengan estimasi biaya dan waktu yang transparan sejak awal."}
              </p>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-semibold bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 rounded-xl transition-colors whitespace-nowrap shadow-xs"
            >
              {lang === "en" ? "Custom Project Consultation" : "Konsultasi Proyek Kustom"}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
