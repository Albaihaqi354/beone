"use client";

import { Check, Sparkles, MessageCircle } from "lucide-react";
import { pricingPlans, addons } from "@/data/pricing";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/config";

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-padding bg-neutral-50 dark:bg-neutral-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label="Pricing"
            title="Simple & Transparent Pricing"
            subtitle="Pilih paket yang sesuai dengan kebutuhan bisnis Anda."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {pricingPlans.map((plan, index) => (
            <AnimateOnScroll key={plan.id} delay={index * 0.07}>
              <div
                className={`relative flex flex-col h-full rounded-2xl border transition-all duration-200 ${
                  plan.popular
                    ? "border-indigo-400 bg-indigo-500 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-900/30"
                    : "border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md"
                }`}
                aria-label={`${plan.name} pricing plan`}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-white text-indigo-600 text-xs font-bold rounded-full shadow-sm border border-indigo-100"
                    aria-label="Most popular plan"
                  >
                    <Sparkles size={11} aria-hidden="true" />
                    Most Popular
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-5">
                    <div
                      className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold mb-2 ${
                        plan.popular
                          ? "bg-indigo-400/30 text-indigo-100"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {plan.label}
                    </div>
                    <h3
                      className={`text-xl font-black ${
                        plan.popular ? "text-white" : "text-neutral-950 dark:text-white"
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/20 dark:border-neutral-700/50">
                    {plan.priceNote && (
                      <span
                        className={`text-xs ${
                          plan.popular ? "text-indigo-200" : "text-neutral-400 dark:text-neutral-500"
                        }`}
                      >
                        {plan.priceNote}
                      </span>
                    )}
                    <div
                      className={`text-3xl font-black ${
                        plan.popular ? "text-white" : "text-neutral-950 dark:text-white"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <div
                      className={`text-sm mt-1 ${
                        plan.popular ? "text-indigo-200" : "text-neutral-400 dark:text-neutral-500"
                      }`}
                    >
                      Estimasi: {plan.duration}
                    </div>
                  </div>

                  <ul
                    className="flex flex-col gap-2.5 flex-1"
                    aria-label={`Features included in ${plan.name} plan`}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          aria-hidden="true"
                          className={`flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-indigo-200" : "text-indigo-500"
                          }`}
                        />
                        <span
                          className={`text-sm leading-snug ${
                            plan.popular ? "text-indigo-100" : "text-neutral-600 dark:text-neutral-400"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-white/10 dark:border-neutral-700/50">
                    <a
                      href={
                        plan.isCustom
                          ? whatsappUrl(`Halo BeOne, saya ingin diskusi Custom Web App.`)
                          : "#contact"
                      }
                      target={plan.isCustom ? "_blank" : undefined}
                      rel={plan.isCustom ? "noopener noreferrer" : undefined}
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                        plan.popular
                          ? "bg-white text-indigo-600 hover:bg-indigo-50 shadow-sm"
                          : plan.isCustom
                          ? "bg-indigo-500 text-white hover:bg-indigo-600 shadow-sm"
                          : "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100"
                      }`}
                      aria-label={`${plan.cta} — ${plan.name} plan`}
                    >
                      {plan.isCustom && <MessageCircle size={15} aria-hidden="true" />}
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Add-ons */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-16 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                Need Something More?
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                Tambahkan fitur sesuai kebutuhan project Anda.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
              role="list"
              aria-label="Available add-ons"
            >
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  role="listitem"
                  className="flex items-center justify-between py-3 px-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
                >
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {addon.name}
                  </span>
                  <span className="text-sm font-bold text-indigo-500 ml-4 whitespace-nowrap">
                    {addon.startingPrice}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-500">
              * Harga add-on dapat berubah berdasarkan kompleksitas kebutuhan.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
