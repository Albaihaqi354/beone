"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-white dark:bg-neutral-950"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Pertanyaan yang sering ditanyakan oleh calon client."
          />
        </AnimateOnScroll>

        <dl className="flex flex-col gap-3" aria-label="Frequently asked questions">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <AnimateOnScroll key={item.id} delay={index * 0.05}>
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors">
                  <dt>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-question-${item.id}`}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <span className="text-base font-semibold text-neutral-900 dark:text-white pr-2">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`flex-shrink-0 text-neutral-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </dt>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0 border-t border-neutral-100 dark:border-neutral-800">
                          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed pt-4">
                            {item.answer}
                          </p>
                        </div>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateOnScroll>
            );
          })}
        </dl>

        {/* Still have questions */}
        <AnimateOnScroll delay={0.15}>
          <div className="mt-10 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              Masih ada pertanyaan lain?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
            >
              Tanya Kami Langsung
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
