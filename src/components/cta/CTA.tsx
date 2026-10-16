"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/config";
import { useLanguage } from "@/lib/language";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="section-padding bg-neutral-950 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-4">
            {t.cta.eyebrow}
          </p>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            {t.cta.headline1}
            <br />
            <span className="gradient-text">{t.cta.headline2}</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {t.cta.subtext}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-400 rounded-xl transition-colors duration-150 shadow-lg shadow-indigo-900/30 group"
              aria-label={t.cta.ctaPrimaryLabel}
            >
              {t.cta.ctaPrimary}
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href={whatsappUrl(t.shared.whatsappDefaultMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors duration-150"
              aria-label={t.cta.ctaSecondaryLabel}
            >
              <MessageCircle size={16} aria-hidden="true" />
              {t.cta.ctaSecondary}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
