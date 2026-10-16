"use client";

import {
  MessageSquare,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";

const iconMap: Record<string, LucideIcon> = {
  discovery: MessageSquare,
  planning: ClipboardList,
  development: Code2,
  review: Palette,
  launch: Rocket,
};

export default function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding bg-neutral-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label={t.process.label}
            title={t.process.title}
            subtitle={t.process.subtitle}
          />
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"
          />

          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
            aria-label={t.process.stepsAria}
          >
            {t.process.steps.map((step, index) => {
              const Icon = iconMap[step.id] ?? Code2;

              return (
                <AnimateOnScroll key={step.id} delay={index * 0.1} direction="up">
                  <li className="relative flex flex-col">
                    {/* Number + icon */}
                    <div className="relative flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0 mb-4">
                      {/* Step number bubble */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center group hover:bg-indigo-500 hover:border-indigo-400 transition-all duration-200"
                          aria-hidden="true"
                        >
                          <Icon size={24} className="text-neutral-300 group-hover:text-white transition-colors" />
                        </div>
                        <span
                          className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 text-white text-xs font-black rounded-full flex items-center justify-center"
                          aria-label={`${t.process.stepLabel} ${step.number}`}
                        >
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <div className="text-xs font-semibold text-indigo-400 mb-1 font-mono">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </AnimateOnScroll>
              );
            })}
          </ol>
        </div>

        {/* Bottom note */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 p-5 bg-neutral-900 border border-neutral-800 rounded-2xl text-center">
            <p className="text-sm text-neutral-400">
              {t.process.bottomNote}{" "}
              <span className="text-indigo-400 font-medium">
                {t.process.guarantee}
              </span>{" "}
              {t.process.guaranteeDetail}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
