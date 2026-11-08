"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border-b border-[var(--border)]">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${id}`}
      >
        <span className={`text-base sm:text-[1.05rem] font-medium leading-snug transition-opacity ${isOpen ? "text-[var(--ink)]" : "text-[var(--ink)] group-hover:opacity-65"}`}>
          {question}
        </span>
        <span
          className="w-7 h-7 flex items-center justify-center border shrink-0 transition-all duration-200"
          style={
            isOpen
              ? { borderColor: "var(--surface-dark)", backgroundColor: "var(--surface-dark)", color: "var(--on-dark)" }
              : { borderColor: "var(--border)", color: "var(--ink-muted)" }
          }
        >
          {isOpen ? <Minus size={13} aria-hidden="true" /> : <Plus size={13} aria-hidden="true" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-${id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-sm text-[var(--ink-soft)] leading-relaxed max-w-3xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(t.faq.items[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-[var(--surface)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">

          {/* Left column */}
          <div className="lg:col-span-4">
            <AnimateOnScroll>
              <p className="editorial-label mb-6">{t.faq.label}</p>
              <h2
                id="faq-heading"
                className="font-display text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-[var(--ink)] whitespace-pre-line"
              >
                {t.faq.heading}
              </h2>
              <p className="mt-6 text-sm text-[var(--ink-muted)] leading-relaxed">{t.faq.supportText}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:opacity-60 transition-opacity"
              >
                {t.faq.askLabel}
              </a>
            </AnimateOnScroll>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7 lg:col-start-6">
            <AnimateOnScroll delay={0.1}>
              <div className="border-t border-[var(--border)]">
                {t.faq.items.map((item) => (
                  <FAQItem
                    key={item.id}
                    id={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openId === item.id}
                    onToggle={() => setOpenId((p) => (p === item.id ? null : item.id))}
                  />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
