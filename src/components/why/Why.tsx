import {
  Layers,
  Zap,
  Monitor,
  Search,
  FileText,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import { benefits } from "@/data/why";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Zap,
  Monitor,
  Search,
  FileText,
  HeadphonesIcon: PhoneCall,
};

export default function Why() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="section-padding bg-white dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label="Why Us"
            title="Why BeOne?"
            subtitle="Kami percaya bahwa setiap individu dan bisnis berhak memiliki kehadiran digital profesional yang dirancang sesuai identitas unik mereka."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] ?? Zap;

            return (
              <AnimateOnScroll key={benefit.id} delay={index * 0.07}>
                <div className="flex gap-4 p-6 bg-neutral-50 dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-800 border border-transparent hover:border-neutral-100 dark:hover:border-neutral-700 rounded-2xl transition-all duration-200 hover:shadow-sm group">
                  <div
                    className="flex-shrink-0 w-10 h-10 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/60 rounded-xl flex items-center justify-center transition-colors"
                    aria-hidden="true"
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-neutral-950 dark:text-white mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {benefit.description}
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
