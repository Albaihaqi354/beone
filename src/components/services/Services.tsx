"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

const services = [
  {
    num: "01",
    title: "Personal Portfolio Website",
    category: "Personal & Creative",
    price: "From Rp150,000",
    description:
      "A single-page website showcasing your profile, skills, and best work — built around your personal brand, not a rigid template.",
    tags: ["Single Page", "Responsive", "Free Hosting"],
  },
  {
    num: "02",
    title: "Promotional Content Design",
    category: "Personal & Creative",
    price: "Rp75,000–100,000",
    description:
      "A complete pack of 5 ready-to-post promotional visuals for social media — crafted to match your brand identity.",
    tags: ["Package of 5", "PNG/JPG", "Social Media"],
  },
  {
    num: "03",
    title: "Digital Catalog for Small Businesses",
    category: "Business Websites",
    price: "From Rp150,000",
    description:
      "A clean online product menu or catalog letting customers browse and order directly via WhatsApp — no monthly server fees.",
    tags: ["WhatsApp Order", "Mobile-First", "Free Hosting"],
  },
  {
    num: "04",
    title: "Business Landing Page",
    category: "Business Websites",
    price: "Rp350,000–500,000",
    description:
      "A conversion-focused single page featuring your offer, key advantages, and a clear WhatsApp call-to-action.",
    tags: ["1 Page", "Conversion-Focused", "Free Hosting"],
  },
  {
    num: "05",
    title: "Company Profile",
    category: "Business Websites",
    price: "From Rp2,500,000",
    description:
      "A professional 5–6 page website presenting your company identity, services, and credentials to corporate clients.",
    tags: ["5–6 Pages", "Custom UI/UX", ".com Domain + Hosting"],
  },
  {
    num: "06",
    title: "Full Business Website",
    category: "Business Websites",
    price: "From Rp4,000,000",
    description:
      "A feature-rich website with dynamic product catalog, blog, search filters, and a lightweight CMS for easy content management.",
    tags: ["Up to 10 Pages", "CMS", ".com Domain + Hosting"],
  },
  {
    num: "07",
    title: "E-Commerce Store",
    category: "Advanced Development",
    price: "From Rp6,000,000",
    description:
      "A complete online store with product management, cart, checkout flow, and an admin dashboard for orders and inventory.",
    tags: ["Full Store", "Admin Dashboard", "Payment Gateway"],
  },
  {
    num: "08",
    title: "Custom Web Application",
    category: "Advanced Development",
    price: "From Rp7,500,000",
    description:
      "Bespoke web systems built around your unique workflow — inventory management, POS, booking, HR, or SaaS products.",
    tags: ["Custom Scope", "REST API", "Role-Based Auth"],
  },
  {
    num: "09",
    title: "Mobile Application",
    category: "Advanced Development",
    price: "From Rp8,000,000",
    description:
      "Cross-platform Android & iOS mobile apps for business operations or customer-facing digital products.",
    tags: ["Android & iOS", "Cross-Platform", "Modern UX"],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 mb-16 md:mb-20">
          <InView className="lg:col-span-5">
            <p className="editorial-label mb-6">What We Do</p>
            <h2
              id="services-heading"
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-[var(--ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Services built
              <br />
              for every scale
              <br />
              <span className="italic font-medium">& budget.</span>
            </h2>
          </InView>
          <InView delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-16">
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              From affordable entry-level packages to full-scale custom systems —
              every service is delivered with clean code, honest pricing, and
              results that outlast the project itself.
            </p>
          </InView>
        </div>

        {/* Top divider */}
        <div className="h-px bg-[var(--border)]" />

        {/* Service list */}
        <div>
          {services.map((service, i) => (
            <InView key={service.num} delay={0.04 * i}>
              <div
                className="relative border-b border-[var(--border)] group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                role="article"
                aria-label={service.title}
              >
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-[var(--surface-2)] pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />

                <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 py-6 sm:py-7 px-0 sm:px-2">
                  {/* Number */}
                  <span className="editorial-label text-[var(--accent)] w-10 shrink-0">
                    {service.num}
                  </span>

                  {/* Title + category */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3
                        className="font-display text-xl sm:text-2xl font-semibold text-[var(--ink)] group-hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {service.title}
                      </h3>
                      <span className="editorial-label text-[var(--ink-muted)]">
                        {service.category}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-[var(--ink-muted)] leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags + price + arrow */}
                  <div className="flex flex-col sm:items-end gap-2 shrink-0 sm:ml-8">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-medium border border-[var(--border)] text-[var(--ink-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm font-semibold text-[var(--ink)]">
                        {service.price}
                      </span>
                      <a
                        href="#contact"
                        aria-label={`Inquire about ${service.title}`}
                        className="w-8 h-8 flex items-center justify-center border border-[var(--border)] text-[var(--ink-muted)] group-hover:bg-[var(--ink)] group-hover:text-[var(--background)] group-hover:border-[var(--ink)] transition-all duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (typeof window !== "undefined") {
                            window.dispatchEvent(
                              new CustomEvent("beone-select-plan", {
                                detail: { serviceId: service.num },
                              })
                            );
                          }
                        }}
                      >
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </InView>
          ))}
        </div>

        {/* Footer CTA */}
        <InView delay={0.1}>
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-sm text-[var(--ink-muted)] max-w-md">
              Not sure which service fits your needs? Let&apos;s talk through your
              project and find the right scope together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[var(--background)] bg-[var(--ink)] hover:opacity-80 transition-opacity shrink-0"
            >
              Free Consultation
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </InView>
      </div>
    </section>
  );
}
