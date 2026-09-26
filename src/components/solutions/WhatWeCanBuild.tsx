import {
  Layout,
  Building2,
  ShoppingCart,
  LayoutDashboard,
  Settings2,
  Code2,
  ArrowRight,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { solutions } from "@/data/solutions";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/config";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Building2,
  ShoppingCart,
  LayoutDashboard,
  Settings2,
  Code2,
};

const cardAccents = [
  {
    icon: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400",
    badge: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400",
    dot: "bg-indigo-400",
    link: "text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300",
  },
  {
    icon: "bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400",
    badge: "bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400",
    dot: "bg-violet-400",
    link: "text-violet-500 hover:text-violet-700 dark:hover:text-violet-300",
  },
  {
    icon: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-400",
    link: "text-emerald-600 hover:text-emerald-800 dark:hover:text-emerald-300",
  },
  {
    icon: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400",
    badge: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400",
    dot: "bg-blue-400",
    link: "text-blue-500 hover:text-blue-700 dark:hover:text-blue-300",
  },
  {
    icon: "bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400",
    badge: "bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400",
    dot: "bg-orange-400",
    link: "text-orange-500 hover:text-orange-700 dark:hover:text-orange-300",
  },
  {
    icon: "bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400",
    badge: "bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400",
    dot: "bg-pink-400",
    link: "text-pink-500 hover:text-pink-700 dark:hover:text-pink-300",
  },
];

export default function WhatWeCanBuild() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="section-padding bg-white dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label="Solutions"
            title="What We Can Build"
            subtitle="Dari website sederhana hingga sistem bisnis custom, kami membangun solusi digital sesuai kebutuhan bisnis Anda."
          />
        </AnimateOnScroll>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          role="list"
          aria-label="Solutions list"
        >
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon] ?? Code2;
            const accent = cardAccents[index % cardAccents.length];

            return (
              <AnimateOnScroll key={solution.id} delay={index * 0.08}>
                <article
                  role="listitem"
                  className="group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6 card-hover h-full hover:border-neutral-200 dark:hover:border-neutral-700"
                  aria-label={`Solution: ${solution.title}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${accent.icon}`}
                      aria-hidden="true"
                    >
                      <Icon size={22} />
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${accent.badge}`}>
                      {solution.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
                    {solution.description}
                  </p>

                  <ul
                    className="flex flex-col gap-2 flex-1"
                    aria-label={`${solution.title} use cases`}
                  >
                    {solution.useCases.map((useCase) => (
                      <li
                        key={useCase}
                        className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <span
                          className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${accent.dot}`}
                          aria-hidden="true"
                        />
                        {useCase}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-5 border-t border-neutral-100 dark:border-neutral-800">
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group/link ${accent.link}`}
                      aria-label={`Explore ${solution.title} solution`}
                    >
                      Explore Solution
                      <ArrowRight
                        size={13}
                        aria-hidden="true"
                        className="group-hover/link:translate-x-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom CTA — always dark regardless of mode */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-14 rounded-2xl bg-neutral-950 dark:bg-neutral-900 dark:border dark:border-neutral-800 px-6 py-10 md:px-12 md:py-12 text-center relative overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                Don&apos;t See What You Need?
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed mb-7">
                Every business is different. Tell us what you&apos;re trying to
                build, and we&apos;ll help you find the right digital solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-400 rounded-xl transition-colors shadow-lg shadow-indigo-900/20 group"
                  aria-label="Discuss your project — go to contact section"
                >
                  Discuss Your Project
                  <ArrowRight size={15} aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href={whatsappUrl("Halo BeOne, saya ingin diskusi mengenai project saya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors"
                  aria-label="Chat on WhatsApp about your project"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
