"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const categories = [
  {
    id: "personal",
    label: "Personal & Creative",
    services: [
      {
        num: "01",
        title: "Personal Portfolio Website",
        price: "From Rp150,000",
        description:
          "A single-page site showcasing your profile, skills, and best work — built around your personal brand, not a template.",
        tags: ["Single Page", "Responsive", "Free Hosting"],
      },
      {
        num: "02",
        title: "Promotional Content Design",
        price: "Rp75,000–100,000",
        description:
          "A complete pack of 5 ready-to-post promotional visuals for social media — crafted to match your brand identity.",
        tags: ["Pack of 5", "PNG/JPG", "Social Media"],
      },
    ],
  },
  {
    id: "business",
    label: "Business Websites",
    services: [
      {
        num: "03",
        title: "Digital Catalog for Small Businesses",
        price: "From Rp150,000",
        description:
          "A clean online product menu letting customers browse and order directly via WhatsApp — no monthly hosting fees.",
        tags: ["WhatsApp Order", "Mobile-First", "Free Hosting"],
      },
      {
        num: "04",
        title: "Business Landing Page",
        price: "Rp350,000–500,000",
        description:
          "A conversion-focused single page featuring your offer, key advantages, and a direct WhatsApp call-to-action.",
        tags: ["1 Page", "Conversion-Focused", "Free Hosting"],
      },
      {
        num: "05",
        title: "Company Profile",
        price: "From Rp2,500,000",
        description:
          "A professional 5–6 page website presenting your company identity, services, and credentials to corporate clients.",
        tags: ["5–6 Pages", "Custom UI/UX", "Domain + Hosting"],
      },
      {
        num: "06",
        title: "Full Business Website",
        price: "From Rp4,000,000",
        description:
          "A feature-rich website with dynamic catalog, blog, search filters, and a lightweight CMS for easy content management.",
        tags: ["Up to 10 Pages", "CMS", "Domain + Hosting"],
      },
    ],
  },
  {
    id: "advanced",
    label: "Advanced Development",
    services: [
      {
        num: "07",
        title: "E-Commerce Store",
        price: "From Rp6,000,000",
        description:
          "A complete online store with product management, cart, checkout flow, and an admin dashboard for orders and inventory.",
        tags: ["Full Store", "Admin Dashboard", "Payment Gateway"],
      },
      {
        num: "08",
        title: "Custom Web Application",
        price: "From Rp7,500,000",
        description:
          "Bespoke web systems built around your workflow — inventory management, POS, booking, HR, or SaaS products.",
        tags: ["Custom Scope", "REST API", "Role-Based Auth"],
      },
      {
        num: "09",
        title: "Mobile Application",
        price: "From Rp8,000,000",
        description:
          "Cross-platform Android & iOS mobile apps for business operations or customer-facing digital products.",
        tags: ["Android & iOS", "Cross-Platform", "Modern UX"],
      },
    ],
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header — full-width display style (different from 2-col) */}
        <AnimateOnScroll>
          <p className="editorial-label mb-6">What We Do</p>
        </AnimateOnScroll>
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 mb-16 md:mb-20 items-end">
          <AnimateOnScroll delay={0.1} className="lg:col-span-7">
            <h2
              id="services-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[var(--ink)]"
            >
              Services built
              <br />
              for every scale
              <br />
              <span className="italic font-medium">&amp; budget.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              From affordable entry-level packages to full-scale custom
              systems — every service is delivered with clean code, honest
              pricing, and results that outlast the project.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Services grouped by category */}
        {categories.map((cat, catIdx) => (
          <div key={cat.id} className={catIdx > 0 ? "mt-12 md:mt-16" : ""}>
            {/* Category header rule */}
            <AnimateOnScroll>
              <div className="flex items-center gap-4 mb-0">
                <div className="h-px flex-1 bg-[var(--border)]" />
                <span className="editorial-label text-[var(--accent)] shrink-0">{cat.label}</span>
              </div>
            </AnimateOnScroll>

            {cat.services.map((svc, i) => (
              <AnimateOnScroll key={svc.num} delay={0.05 * i}>
                <div
                  className="relative border-b border-[var(--border)] group cursor-pointer"
                  onMouseEnter={() => setHoveredId(svc.num)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <motion.div
                    className="absolute inset-0 bg-[var(--surface-2)] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === svc.num ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 py-6 sm:py-7">
                    <span className="editorial-label text-[var(--accent)] w-10 shrink-0">{svc.num}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[var(--ink)] group-hover:opacity-75 transition-opacity">
                        {svc.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-[var(--ink-muted)] leading-relaxed max-w-2xl">
                        {svc.description}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 shrink-0 sm:ml-8">
                      <div className="flex flex-wrap gap-1.5">
                        {svc.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-[11px] font-medium border border-[var(--border)] text-[var(--ink-muted)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-semibold text-[var(--ink)]">{svc.price}</span>
                        <a
                          href="#contact"
                          aria-label={`Inquire about ${svc.title}`}
                          className="w-8 h-8 flex items-center justify-center border border-[var(--border)] text-[var(--ink-muted)] group-hover:bg-[var(--surface-dark)] group-hover:text-[var(--on-dark)] group-hover:border-[var(--surface-dark)] transition-all duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        ))}

        {/* Footer note */}
        <AnimateOnScroll delay={0.1}>
          <p className="mt-10 text-xs text-[var(--ink-muted)] max-w-lg">
            Not sure which service fits? Contact us for a free consultation — we will find the right scope together.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
