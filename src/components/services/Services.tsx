import {
  Layout,
  Building2,
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Building2,
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
};

const iconColors = [
  "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400",
  "bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400",
  "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400",
  "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
  "bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400",
  "bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400",
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-neutral-50 dark:bg-neutral-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label="Services"
            title="What We Build"
            subtitle="Dari website sederhana hingga aplikasi bisnis yang kompleks."
          />
        </AnimateOnScroll>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          role="list"
          aria-label="Services list"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Code2;
            const colorClass = iconColors[index % iconColors.length];

            return (
              <AnimateOnScroll key={service.id} delay={index * 0.08}>
                <article
                  role="listitem"
                  className="group relative flex flex-col bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6 card-hover h-full"
                  aria-label={`Service: ${service.title}`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${colorClass}`}
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="mt-5 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-neutral-400 dark:text-neutral-500 block mb-0.5">
                        Starting from
                      </span>
                      <span className="text-base font-bold text-neutral-950 dark:text-white">
                        {service.startingPrice}
                      </span>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 group/link transition-colors"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
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
      </div>
    </section>
  );
}
