"use client";

import { useState } from "react";
import { Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Info, Zap } from "lucide-react";
import {
  entryPricingPlans,
  portfolioPricingPlans,
  businessPricingPlans,
  addons,
  type PricingPlan,
} from "@/data/pricing";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/config";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"entry" | "portfolio" | "business">("entry");

  const currentPlans =
    activeTab === "entry"
      ? entryPricingPlans
      : activeTab === "portfolio"
      ? portfolioPricingPlans
      : businessPricingPlans;

  const handleSelectPlan = (plan: PricingPlan) => {
    if (typeof window !== "undefined") {
      let mappedService = "Website Portofolio Pribadi";
      if (plan.id === "promo-design") mappedService = "Desain Konten Promosi";
      else if (plan.id === "umkm-catalog") mappedService = "Katalog Digital UMKM";
      else if (plan.id === "business-landing-page") mappedService = "Landing Page Bisnis";
      else if (plan.id === "company-profile") mappedService = "Company Profile";
      else if (plan.id === "business-website") mappedService = "Business Website";
      else if (plan.id === "ecommerce") mappedService = "E-Commerce";
      else if (plan.id === "custom-web-app") mappedService = "Custom Web App";

      window.dispatchEvent(
        new CustomEvent("beone-select-plan", {
          detail: {
            service: mappedService,
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
            label="Pricing Strategy"
            title="Daftar Harga & Paket Transparan"
            subtitle="Pilihan paket hemat mulai Rp75.000 untuk menguji pasar dan mulai online secepatnya, dengan batasan ruang lingkup yang jelas."
          />
        </AnimateOnScroll>

        {/* Category Switcher Tabs */}
        <AnimateOnScroll delay={0.05}>
          <div className="flex justify-center mb-10">
            <div
              role="tablist"
              aria-label="Pilihan kategori paket harga"
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
                Entry-Level (Rp75rb–Rp500rb)
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
                Website Portofolio Lengkap
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
                Solusi Bisnis & Kustom
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
                  aria-label={`${plan.name} pricing plan`}
                >
                  {/* Badge */}
                  {isPopular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-0.5 bg-indigo-500 text-white text-[11px] font-bold rounded-full shadow-xs whitespace-nowrap"
                      aria-label="Paket rekomendasi utama"
                    >
                      <Sparkles size={11} aria-hidden="true" />
                      Rekomendasi Utama
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
                      aria-label={`Fitur dalam paket ${plan.name}`}
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
            <div className="space-y-1">
              <span className="font-bold text-neutral-900 dark:text-white block">
                Cakupan & Batas Revisi Paket Entry-Level:
              </span>
              <p>
                1. <strong>Domain Khusus (.com/.id)</strong> tidak termasuk dalam paket entry-level kecuali dinyatakan secara eksplisit (kami menyediakan panduan gratis / bantuan setup).<br />
                2. <strong>Hosting Gratis</strong> (Vercel/Netlify) digunakan tanpa biaya sewa server bulanan untuk website portofolio, katalog, dan landing page sederhana.<br />
                3. <strong>Fitur Backend Kompleks</strong> seperti database besar, sistem pembayaran otomatis (payment gateway), atau dashboard admin tidak termasuk dalam paket sederhana.<br />
                4. <strong>Paket Desain Promosi</strong> adalah paket 5 desain konten siap posting (bukan harga per 1 desain) dengan materi teks & info dari pelanggan.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Add-ons List */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8">
            <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                  Add-on & Fitur Tambahan
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Tambahkan fitur atau halaman ekstra sesuai kebutuhan proyek Anda dengan biaya terukur.
                </p>
              </div>
              <a
                href={whatsappUrl("Halo BeOne, saya ingin menanyakan add-on untuk project saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 hover:text-indigo-600"
              >
                <MessageCircle size={14} />
                Tanya Kebutuhan Khusus
              </a>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5"
              role="list"
              aria-label="Daftar add-ons"
            >
              {addons.map((addon) => (
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
              * Estimasi biaya add-on dapat disesuaikan berdasarkan kompleksitas spesifik yang diinginkan.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
