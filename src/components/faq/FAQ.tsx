"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const faqs = [
  {
    id: "entry-services",
    q: "What entry-level services does BeOne offer?",
    a: "BeOne offers four affordable entry-level services to get you online fast: Promotional Content Design (Rp75,000–100,000 for a pack of 5), Small Business Digital Catalog (from Rp150,000), Personal Portfolio Starter (from Rp150,000), and Business Landing Page (Rp350,000–500,000). Timeline estimates run 1–3 business days after all materials are received.",
  },
  {
    id: "promo-design",
    q: "How does the Promotional Content Design pack work?",
    a: "The Rp75,000–100,000 price covers a complete pack of 5 promotional content designs — not a single design. You choose one format size (Feed 1:1 or Story 9:16), provide your text and product photos, and we produce professional ready-to-post visuals with 1–2 minor revision rounds.",
  },
  {
    id: "catalog-vs-ecommerce",
    q: "What is the difference between the Digital Catalog and a full E-Commerce store?",
    a: "The Digital Catalog (from Rp150,000) displays photos, prices, and descriptions with a WhatsApp order button per item — zero monthly hosting cost. It has no payment gateway, admin dashboard, or database. If you need automatic checkout, payment processing, and inventory management, the full E-Commerce package (from Rp6,000,000) is the right fit.",
  },
  {
    id: "portfolio-tiers",
    q: "What is the difference between Starter, Professional, and Premium portfolio packages?",
    a: "Starter (Rp150,000) is a single-page site with up to 3 projects and 1 minor revision — ideal for students or early-career professionals. Professional (Rp349,000) adds a more curated design, up to 6 project showcases, smooth animations, 2 revisions, and domain connection guidance. Premium (from Rp599,000) is for those needing in-depth case studies, custom architecture, additional sections, or filters — finalized after a consultation.",
  },
  {
    id: "timeline",
    q: "When does the project timeline officially start?",
    a: "Business-day counts begin once all materials (text, photos, logo), brief, and agreed scope are fully delivered. Mid-project scope additions or delayed material delivery will adjust the schedule — we communicate this transparently.",
  },
  {
    id: "bug-guarantee",
    q: "What does the 30-day bug guarantee cover?",
    a: "It covers free fixes for functional code errors, broken layouts, or technical issues inherent to what BeOne built — within the originally agreed scope. It does not cover new feature requests, major redesigns, or modifications made by third parties after handover.",
  },
  {
    id: "free-hosting",
    q: "How does the free hosting work?",
    a: "Sites are deployed on modern cloud platforms (Vercel, Netlify, or GitHub Pages) with active SSL — no monthly server fees. Custom domains (.com, .id, .dev) are purchased separately and we provide clear setup guidance or hands-on assistance.",
  },
  {
    id: "custom-app",
    q: "Can BeOne build a custom internal system or SaaS product?",
    a: "Yes. BeOne is fully capable of building bespoke web applications — inventory management, POS, booking systems, HR dashboards, or custom SaaS products. These projects are scoped individually; contact us to discuss your requirements.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[var(--border)]">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.id}`}
      >
        {/* Question text — Inter medium, not Playfair */}
        <span
          className={`text-base sm:text-[1.05rem] font-medium leading-snug transition-opacity ${
            isOpen ? "text-[var(--ink)]" : "text-[var(--ink)] group-hover:opacity-65"
          }`}
        >
          {faq.q}
        </span>
        <span
          className="w-7 h-7 flex items-center justify-center border shrink-0 transition-all duration-200"
          style={
            isOpen
              ? {
                  borderColor: "var(--surface-dark)",
                  backgroundColor: "var(--surface-dark)",
                  color: "var(--on-dark)",
                }
              : {
                  borderColor: "var(--border)",
                  color: "var(--ink-muted)",
                }
          }
        >
          {isOpen ? <Minus size={13} aria-hidden="true" /> : <Plus size={13} aria-hidden="true" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-${faq.id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-sm text-[var(--ink-soft)] leading-relaxed max-w-3xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("entry-services");

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Sticky header column */}
          <div className="lg:col-span-4">
            <AnimateOnScroll>
              <p className="editorial-label mb-6">FAQ</p>
              <h2
                id="faq-heading"
                className="font-display text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-[var(--ink)]"
              >
                Common
                <br />
                <span className="italic font-medium">questions,</span>
                <br />
                answered.
              </h2>
              <p className="mt-6 text-sm text-[var(--ink-muted)] leading-relaxed">
                Still have questions? Reach us directly on WhatsApp — we
                typically respond within a few hours.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:opacity-60 transition-opacity"
              >
                Ask a question
              </a>
            </AnimateOnScroll>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7 lg:col-start-6">
            <AnimateOnScroll delay={0.1}>
              <div className="border-t border-[var(--border)]">
                {faqs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    isOpen={openId === faq.id}
                    onToggle={() => setOpenId((p) => (p === faq.id ? null : faq.id))}
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
