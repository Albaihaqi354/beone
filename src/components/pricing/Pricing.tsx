"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Clock, RefreshCw, Server } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

type Tab = "entry" | "portfolio" | "business";

interface Plan {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  duration: string;
  revisions?: string;
  hostingInfo?: string;
  features: string[];
  cta: string;
  popular?: boolean;
  isCustom?: boolean;
}

const tabs: { id: Tab; label: string }[] = [
  { id: "entry", label: "Entry-Level" },
  { id: "portfolio", label: "Portfolio" },
  { id: "business", label: "Business" },
];

const plans: Record<Tab, Plan[]> = {
  entry: [
    {
      id: "promo-design",
      name: "Promotional Content Design",
      price: "Rp75,000–100,000",
      priceNote: "Pack of 5 designs",
      duration: "1–2 business days",
      revisions: "1–2x minor",
      hostingInfo: "High-res PNG/JPG files delivered",
      features: [
        "5 promotional content designs",
        "1 agreed format (Feed 1:1 or Story 9:16)",
        "Brand-aligned visual styling",
        "High-resolution final files (PNG / JPG)",
        "1–2 rounds of minor revisions",
      ],
      cta: "Order Design Pack",
    },
    {
      id: "umkm-catalog",
      name: "Small Business Digital Catalog",
      price: "From Rp150,000",
      duration: "1–2 business days",
      revisions: "1x minor",
      hostingInfo: "Free hosting via Vercel / Netlify",
      features: [
        "Online product or menu catalog",
        "Photos, names, prices, descriptions",
        "WhatsApp order button per item",
        "Smartphone-optimized responsive layout",
        "Free cloud hosting — no monthly fees",
      ],
      cta: "Choose Catalog",
    },
    {
      id: "portfolio-starter-entry",
      name: "Personal Portfolio Starter",
      price: "From Rp150,000",
      duration: "1–3 business days",
      revisions: "1x minor",
      hostingInfo: "Free hosting via Vercel / Netlify / GitHub Pages",
      popular: true,
      features: [
        "1 structured single page",
        "Profile, skills, experience highlights",
        "Up to 3 selected projects",
        "Contact section & social links",
        "Responsive design (mobile & desktop)",
        "Published on free cloud hosting",
      ],
      cta: "Choose Starter",
    },
    {
      id: "business-landing-page",
      name: "Business Landing Page",
      price: "Rp350,000–500,000",
      priceNote: "Depends on section count",
      duration: "2–4 business days",
      revisions: "2x",
      hostingInfo: "Free hosting, zero monthly fees",
      features: [
        "Single-page conversion-focused site",
        "Hero with clear value proposition",
        "Service/product overview section",
        "WhatsApp / contact CTA buttons",
        "Mobile-first responsive design",
        "Free cloud hosting",
      ],
      cta: "Choose Landing Page",
    },
  ],
  portfolio: [
    {
      id: "portfolio-starter",
      name: "Portfolio Starter",
      price: "From Rp150,000",
      duration: "1–3 business days",
      revisions: "1x minor",
      hostingInfo: "Free hosting, no monthly fee",
      features: [
        "1 structured single page",
        "Short profile & professional bio",
        "Education / work experience history",
        "Skills list",
        "Up to 3 selected projects",
        "Contact & social links",
        "Responsive design",
      ],
      cta: "Choose Starter",
    },
    {
      id: "portfolio-professional",
      name: "Portfolio Professional",
      price: "Rp349,000",
      priceNote: "Most popular & curated",
      duration: "3–5 business days",
      revisions: "2x",
      hostingInfo: "Free hosting + custom domain help",
      popular: true,
      features: [
        "1 page with distinct personal branding",
        "Full sections: About, Skills, Projects, Experience, Contact",
        "Up to 6 interactive project showcases",
        "Smooth animations & transitions",
        "Mobile-first responsive design",
        "WhatsApp CTA & direct contact form",
        "Domain connection guidance",
      ],
      cta: "Choose Professional",
    },
    {
      id: "portfolio-premium",
      name: "Portfolio Premium",
      price: "From Rp599,000",
      duration: "5–10 business days",
      revisions: "3x",
      hostingInfo: "Free hosting / custom server as agreed",
      isCustom: true,
      features: [
        "Advanced architecture & bespoke design",
        "In-depth project case studies",
        "Additional pages/sections as agreed",
        "Project filters, blog, or custom forms",
        "Cross-browser testing",
        "Custom animations & micro-interactions",
        "Final price confirmed after consultation",
      ],
      cta: "Consult Premium",
    },
  ],
  business: [
    {
      id: "company-profile",
      name: "Company Profile",
      price: "Rp2,500,000",
      duration: "7–14 business days",
      revisions: "3x",
      hostingInfo: ".com domain & 1st-year hosting included",
      features: [
        "Up to 5–6 professional pages",
        "Custom UI/UX & corporate identity",
        "Home, About, Services, Portfolio, Contact",
        "WhatsApp button & contact form",
        "Google Maps & basic on-page SEO",
        "Google Analytics & SSL / HTTPS",
        "30-day bug guarantee",
      ],
      cta: "Choose Company Profile",
    },
    {
      id: "business-website",
      name: "Full Business Website",
      price: "Rp4,000,000",
      duration: "2–3 weeks",
      revisions: "4x",
      hostingInfo: ".com domain & 1st-year hosting included",
      popular: true,
      features: [
        "Up to 10 structured pages",
        "Custom UI/UX & design system",
        "Dynamic product/service catalog",
        "Content search & filtering",
        "Company blog/news system",
        "Lightweight CMS for content management",
        "Database & backend API",
        "30-day bug guarantee",
      ],
      cta: "Choose Business Website",
    },
    {
      id: "ecommerce",
      name: "E-Commerce Store",
      price: "From Rp6,000,000",
      duration: "3–5 weeks",
      revisions: "Per scope",
      hostingInfo: "Domain & 1st-year hosting included",
      features: [
        "Product catalog & detail pages",
        "Shopping cart & checkout flow",
        "User accounts & order history",
        "Admin dashboard for inventory",
        "WhatsApp order / payment gateway",
        "Mobile-first responsive design",
        "SSL & production deployment",
        "30-day bug warranty",
      ],
      cta: "Choose E-Commerce",
    },
    {
      id: "custom-web-app",
      name: "Custom Web App",
      price: "From Rp7,500,000",
      duration: "Based on scope",
      isCustom: true,
      features: [
        "Inventory, POS, HR, Booking, CRM, SaaS",
        "Features built around your workflow",
        "Custom UI/UX & modern database",
        "REST API & role-based auth",
        "Analytics dashboard & reporting",
        "Cloud / server deployment",
        "30-day bug warranty & documentation",
      ],
      cta: "Discuss Custom Project",
    },
  ],
};

const addons = [
  { name: "Additional Page", price: "Rp200,000" },
  { name: "Additional Section", price: "Rp100,000" },
  { name: "Custom Domain Setup (.com/.id)", price: "Rp250,000" },
  { name: "User Authentication / Login", price: "Rp500,000" },
  { name: "Admin Dashboard", price: "Rp750,000" },
  { name: "Database & Backend API", price: "Rp750,000" },
  { name: "Payment Gateway Integration", price: "Rp750,000" },
  { name: "CMS / Content Management", price: "Rp1,000,000" },
  { name: "Third-Party API Integration", price: "Rp500,000" },
  { name: "Advanced SEO Optimization", price: "Rp750,000" },
];

/* Popular card uses fixed --surface-dark / --on-dark tokens — no dark: overrides needed */
function PlanCard({ plan, onSelect }: { plan: Plan; onSelect: () => void }) {
  const isPopular = !!plan.popular;

  return (
    <div
      className="relative flex flex-col p-7 sm:p-8"
      style={{
        backgroundColor: isPopular ? "var(--surface-dark)" : "var(--surface)",
      }}
    >
      {isPopular && (
        <span className="editorial-label mb-4 block" style={{ color: "var(--accent)" }}>
          Top Pick
        </span>
      )}

      <h3
        className="font-display text-lg font-semibold mb-1"
        style={{ color: isPopular ? "var(--on-dark)" : "var(--ink)" }}
      >
        {plan.name}
      </h3>

      <div className="mt-4 mb-6">
        <span
          className="font-display text-3xl font-bold"
          style={{ color: isPopular ? "var(--on-dark)" : "var(--ink)" }}
        >
          {plan.price}
        </span>
        {plan.priceNote && (
          <p
            className="text-xs mt-1"
            style={{ color: isPopular ? "rgba(248,245,240,0.55)" : "var(--ink-muted)" }}
          >
            {plan.priceNote}
          </p>
        )}
      </div>

      {/* Meta — lucide icons replace emojis */}
      <div
        className="flex flex-col gap-1.5 mb-6 text-xs"
        style={{ color: isPopular ? "rgba(248,245,240,0.6)" : "var(--ink-muted)" }}
      >
        <span className="flex items-center gap-1.5">
          <Clock size={11} aria-hidden="true" />
          {plan.duration}
        </span>
        {plan.revisions && (
          <span className="flex items-center gap-1.5">
            <RefreshCw size={11} aria-hidden="true" />
            {plan.revisions} revisions
          </span>
        )}
        {plan.hostingInfo && (
          <span className="flex items-center gap-1.5">
            <Server size={11} aria-hidden="true" />
            {plan.hostingInfo}
          </span>
        )}
      </div>

      <div
        className="h-px mb-6"
        style={{ backgroundColor: isPopular ? "rgba(248,245,240,0.15)" : "var(--border)" }}
      />

      <ul className="flex flex-col gap-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check
              size={13}
              strokeWidth={2.5}
              className="mt-0.5 shrink-0"
              style={{ color: "var(--accent)" }}
              aria-hidden="true"
            />
            <span
              className="text-xs leading-relaxed"
              style={{ color: isPopular ? "rgba(248,245,240,0.75)" : "var(--ink-soft)" }}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        onClick={onSelect}
        className="mt-8 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-opacity hover:opacity-80"
        style={
          isPopular
            ? { backgroundColor: "var(--on-dark)", color: "var(--surface-dark)" }
            : { backgroundColor: "var(--surface-dark)", color: "var(--on-dark)" }
        }
      >
        {plan.cta}
        <ArrowUpRight size={13} aria-hidden="true" />
      </a>
    </div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Tab>("entry");

  const dispatchPlan = (id: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("beone-select-plan", { detail: { planId: id } }));
    }
  };

  const currentPlans = plans[activeTab];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-padding bg-[var(--surface)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Header — inline label+heading on single row, no right column */}
        <AnimateOnScroll>
          <p className="editorial-label mb-6">Packages &amp; Investment</p>
          <h2
            id="pricing-heading"
            className="font-display text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-[var(--ink)] max-w-3xl mb-5"
          >
            Transparent pricing
            <br />
            for <span className="italic font-medium">every budget.</span>
          </h2>
          <p className="text-base text-[var(--ink-soft)] leading-relaxed max-w-lg mb-14 md:mb-16">
            Every package has a defined scope, honest timeline, and no hidden costs.
            Prices are fixed — what you see is what you pay.
          </p>
        </AnimateOnScroll>

        {/* Tab switcher */}
        <AnimateOnScroll delay={0.1}>
          <div
            className="flex gap-0 border border-[var(--border)] w-fit mb-10 md:mb-12"
            role="tablist"
            aria-label="Pricing category"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-3 text-sm font-medium transition-colors duration-150"
                style={{
                  backgroundColor: activeTab === tab.id ? "var(--surface-dark)" : "transparent",
                  color: activeTab === tab.id ? "var(--on-dark)" : "var(--ink-muted)",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Plans */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border border-[var(--border)]"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${currentPlans.length}, minmax(0, 1fr))`,
            }}
            role="tabpanel"
          >
            {currentPlans.map((plan, i) => (
              <div
                key={plan.id}
                className={i < currentPlans.length - 1 ? "border-r border-[var(--border)]" : ""}
              >
                <PlanCard plan={plan} onSelect={() => dispatchPlan(plan.id)} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Add-ons */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-16 md:mt-20">
            <div className="h-px bg-[var(--border)] mb-10" />
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <p className="editorial-label mb-3">Add-ons</p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  Extend any package with modular extras — priced transparently.
                </p>
              </div>
              <div className="lg:col-span-9">
                <div className="border border-[var(--border)]">
                  {addons.map((addon, i) => (
                    <div
                      key={addon.name}
                      className={`flex items-center justify-between px-5 py-4 text-sm border-b border-[var(--border)] ${
                        i === addons.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <span className="text-[var(--ink-soft)]">{addon.name}</span>
                      <span className="text-[var(--ink)] font-medium ml-4 shrink-0 text-xs">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
