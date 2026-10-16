"use client";

import {
  Code2,
  ShieldCheck,
  Globe,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";

const trustIcons = [Code2, ShieldCheck, Globe, Sparkles, CheckCircle2];

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.trust.label}
      className="border-y border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {t.trust.items.map((item, index) => {
            const Icon = trustIcons[index] ?? Sparkles;
            return (
              <AnimateOnScroll key={item.title} delay={index * 0.05}>
                <div className="flex items-start gap-3 p-2">
                  <div
                    className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-indigo-100/80 dark:border-indigo-900/40"
                    aria-hidden="true"
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
