"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

function InView({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
      priceNote: "Package of 5 designs",
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
      cta: "Order Design Package",
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
        "Free cloud hosting (no monthly fees)",
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
      cta: "Choose Portfolio Starter",
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
        "Business strengths & highlights",
        "WhatsApp / contact CTA buttons",
        "Mobile-first responsive design",
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
        "Self-setup domain guide",
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
      hostingInfo: "Free hosting + custom domain connection help",
      popular: true,
      features: [
        "1 page with distinct personal branding",
        "Full sections: About, Skills, Projects, Experience, Contact",
        "Up to 6 interactive project showcases",
        "Smooth animations & transitions",
        "Mobile-first responsive design",
        "WhatsApp CTA & direct contact form",
        "Domain connection guidance & assistance",
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
        "Final price after consultation",
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
        "Content search & category filtering",
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

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Tab>("entry");

  const dispatchPlan = (id: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("beone-select-plan", { detail: { planId: id } })
      );
    }
  };

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top divider */}
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 mb-14 md:mb-18">
          <InView className="lg:col-span-5">
            <p className="editorial-label mb-6">Packages & Investment</p>
            <h2
              id="pricing-heading"
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-[var(--ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Transparent
              <br />
              pricing for
              <br />
              <span className="italic font-medium">every budget.</span>
            </h2>
          </InView>
          <InView delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              Every package has a defined scope, honest timeline, and no
              hidden costs. Prices are fixed — what you see is what you
              pay.
            </p>
          </InView>
        </div>

        {/* Tab switcher */}
        <InView>
          <div
            className="flex gap-0 border border-[var(--border)] w-fit mb-12 md:mb-16"
            role="tablist"
            aria-label="Pricing category"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium transition-colors duration-150 ${
                  activeTab === tab.id
                    ? "bg-[var(--ink)] text-[var(--background)]"
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </InView>

        {/* Plans grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--border)]"
            role="tabpanel"
          >
            {plans[activeTab].map((plan, i) => (
              <div
                key={plan.id}
                className={`relative flex flex-col p-7 sm:p-8 ${
                  i < plans[activeTab].length - 1 ? "border-r border-[var(--border)]" : ""
                } ${plan.popular ? "bg-[var(--ink)]" : "bg-[var(--surface)]"}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <span className="editorial-label text-[var(--accent)] mb-4 block">
                    Top Pick
                  </span>
                )}

                {/* Name */}
                <h3
                  className={`font-display text-lg font-semibold mb-1 ${
                    plan.popular ? "text-[var(--background)] dark:text-white" : "text-[var(--ink)]"
                  }`}
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4 mb-6">
                  <span
                    className={`font-display text-3xl font-bold ${
                      plan.popular ? "text-[var(--background)] dark:text-white" : "text-[var(--ink)]"
                    }`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <p
                      className={`text-xs mt-1 ${
                        plan.popular ? "text-[var(--background)]/60" : "text-[var(--ink-muted)]"
                      }`}
                    >
                      {plan.priceNote}
                    </p>
                  )}
                </div>

                {/* Meta */}
                <div
                  className={`flex flex-col gap-1 mb-6 text-xs ${
                    plan.popular ? "text-[var(--background)]/70" : "text-[var(--ink-muted)]"
                  }`}
                >
                  <span>⏱ {plan.duration}</span>
                  {plan.revisions && <span>✎ {plan.revisions} revisions</span>}
                  {plan.hostingInfo && <span>☁ {plan.hostingInfo}</span>}
                </div>

                {/* Divider */}
                <div
                  className={`h-px mb-6 ${
                    plan.popular ? "bg-white/20" : "bg-[var(--border)]"
                  }`}
                />

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={13}
                        strokeWidth={2.5}
                        className={`mt-0.5 shrink-0 ${
                          plan.popular ? "text-[var(--accent)]" : "text-[var(--accent-dark)]"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-xs leading-relaxed ${
                          plan.popular
                            ? "text-[var(--background)]/80"
                            : "text-[var(--ink-soft)]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={() => dispatchPlan(plan.id)}
                  className={`mt-8 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-opacity hover:opacity-80 ${
                    plan.popular
                      ? "bg-[var(--background)] text-[var(--ink)]"
                      : "bg-[var(--ink)] text-[var(--background)]"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Add-ons */}
        <InView delay={0.1}>
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[var(--border)]">
                  {addons.map((addon, i) => (
                    <div
                      key={addon.name}
                      className={`flex items-center justify-between px-5 py-4 text-sm ${
                        i % 3 !== 2 ? "border-r border-[var(--border)]" : ""
                      } border-b border-[var(--border)]`}
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
        </InView>
      </div>
    </section>
  );
}
