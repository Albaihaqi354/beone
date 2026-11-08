"use client";

import { useState, useEffect, type FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { whatsappUrl, siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/language";
import type { Translations } from "@/lib/i18n/types";

interface FormState {
  name: string;
  contact: string;
  email: string;
  professionId: string;
  serviceId: string;
  packageId: string;
  budgetId: string;
  description: string;
}

const initialForm: FormState = {
  name: "",
  contact: "",
  email: "",
  professionId: "",
  serviceId: "personal-portfolio",
  packageId: "",
  budgetId: "",
  description: "",
};

function validate(
  data: FormState,
  errMsgs: Translations["contact"]["errors"]
): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.name.trim()) errors.name = errMsgs.name;
  if (!data.contact.trim()) {
    errors.contact = errMsgs.contact;
  } else if (!/^[0-9+\-\s()]{8,20}$/.test(data.contact)) {
    errors.contact = errMsgs.contactFormat;
  }
  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = errMsgs.emailFormat;
  }
  if (!data.serviceId) errors.service = errMsgs.service;
  if (!data.description.trim()) errors.description = errMsgs.description;
  return errors;
}

function InView({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const fieldBase =
  "w-full px-4 py-3 text-sm text-[var(--ink)] bg-transparent border-b border-[var(--border)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--ink)] transition-colors duration-150";
const fieldError = "border-red-400 focus:border-red-500";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [preparedUrl, setPreparedUrl] = useState<string>("");
  const [preparedMessage, setPreparedMessage] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handlePlanSelect = (e: Event) => {
      const detail = (
        e as CustomEvent<{
          planId?: string;
          serviceId?: string;
        }>
      ).detail;
      if (detail) {
        setStatus("idle");
        setForm((prev) => {
          let matchedService = prev.serviceId;
          let matchedPackage = prev.packageId;
          if (detail.serviceId) matchedService = detail.serviceId;
          if (detail.planId) {
            matchedPackage = detail.planId;
            const foundPkg = t.contact.packages.find((p) => p.id === detail.planId);
            if (foundPkg) matchedService = foundPkg.serviceId;
          }
          return { ...prev, serviceId: matchedService, packageId: matchedPackage };
        });
      }
    };
    window.addEventListener("beone-select-plan", handlePlanSelect);
    return () => window.removeEventListener("beone-select-plan", handlePlanSelect);
  }, [t.contact.packages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form, t.contact.errors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      document.getElementById(Object.keys(validationErrors)[0])?.focus();
      return;
    }

    const selectedProfession = t.contact.professions.find((p) => p.id === form.professionId)?.label;
    const selectedService = t.contact.services.find((s) => s.id === form.serviceId)?.label;
    const selectedPackage = t.contact.packages.find((p) => p.id === form.packageId)?.label;
    const selectedBudget = t.contact.budgets.find((b) => b.id === form.budgetId)?.label;

    const messageLines = [
      t.contact.msgGreeting, "",
      `👤 *${t.contact.msgName}:* ${form.name}`,
      `📱 *${t.contact.msgContact}:* ${form.contact}`,
      form.email ? `✉️ *${t.contact.msgEmail}:* ${form.email}` : null,
      selectedProfession ? `💼 *${t.contact.msgProfession}:* ${selectedProfession}` : null,
      selectedService ? `🛠️ *${t.contact.msgService}:* ${selectedService}` : null,
      selectedPackage ? `📦 *${t.contact.msgPackage}:* ${selectedPackage}` : null,
      selectedBudget ? `💰 *${t.contact.msgBudget}:* ${selectedBudget}` : null,
      "", `📝 *${t.contact.msgDesc}:*`, form.description,
    ].filter(Boolean).join("\n");

    const targetUrl = whatsappUrl(messageLines);
    setPreparedMessage(messageLines);
    setPreparedUrl(targetUrl);
    setStatus("ready");
    try { window.open(targetUrl, "_blank", "noopener,noreferrer"); } catch { /* fallback */ }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* ignore */ }
  };

  const field = (name: string) =>
    `${fieldBase} ${errors[name] ? fieldError : ""}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top divider */}
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-14 md:mb-18">
          <InView className="lg:col-span-5">
            <p className="editorial-label mb-6">Get in Touch</p>
            <h2
              id="contact-heading"
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-[var(--ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tell us about
              <br />
              your{" "}
              <span className="italic font-medium">project.</span>
            </h2>
          </InView>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left — info */}
          <InView className="lg:col-span-4" delay={0}>
            <div className="space-y-10">
              {/* Direct WhatsApp */}
              <div>
                <p className="editorial-label mb-4">Direct Contact</p>
                <div className="space-y-4">
                  <a
                    href={whatsappUrl(t.shared.whatsappDefaultMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center border border-[var(--border)] group-hover:bg-[var(--ink)] group-hover:text-[var(--background)] group-hover:border-[var(--ink)] transition-all">
                      <MessageCircle size={15} aria-hidden="true" />
                    </span>
                    <span>WhatsApp +{siteConfig.whatsappNumber}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-3 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center border border-[var(--border)] group-hover:bg-[var(--ink)] group-hover:text-[var(--background)] group-hover:border-[var(--ink)] transition-all text-xs">
                      @
                    </span>
                    <span>{siteConfig.email}</span>
                  </a>
                </div>
              </div>

              {/* What to expect */}
              <div>
                <p className="editorial-label mb-4">What to Expect</p>
                <ul className="space-y-3 text-sm text-[var(--ink-muted)]">
                  {[
                    "Response within 24 hours",
                    "Free initial consultation",
                    "Transparent scope & pricing",
                    "No commitment required",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </InView>

          {/* Right — form or ready state */}
          <InView className="lg:col-span-8" delay={0.1}>
            {status === "ready" ? (
              <div className="py-10 text-center border border-[var(--border)] px-8">
                <div className="w-12 h-12 border border-[var(--border)] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={24} className="text-[var(--accent-dark)]" />
                </div>
                <h3
                  className="font-display text-2xl font-bold text-[var(--ink)] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Message Ready
                </h3>
                <p className="text-sm text-[var(--ink-muted)] max-w-md mx-auto mb-8 leading-relaxed">
                  Your message has been prepared. If WhatsApp didn&apos;t open
                  automatically, use the button below.
                </p>
                <div className="bg-[var(--surface-2)] border border-[var(--border)] p-4 text-left text-xs font-mono text-[var(--ink-soft)] whitespace-pre-line max-h-48 overflow-y-auto mb-7">
                  {preparedMessage}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
                  <a
                    href={preparedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[var(--background)] bg-[var(--ink)] hover:opacity-80 transition-opacity"
                  >
                    <MessageCircle size={15} />
                    Open WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[var(--ink)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors"
                  >
                    {copied ? <><Check size={15} className="text-[var(--accent-dark)]" /> Copied</> : <><Copy size={15} /> Copy Message</>}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] underline transition-colors"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Project inquiry form"
                className="space-y-0"
              >
                {/* Name + Contact row */}
                <div className="grid sm:grid-cols-2 gap-x-8 border-b border-[var(--border)]">
                  <div className="py-2">
                    <label htmlFor="name" className="editorial-label block mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`${field("name")} border-b-0`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p role="alert" className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div className="py-2 border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8">
                    <label htmlFor="contact" className="editorial-label block mb-2">
                      WhatsApp / Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      autoComplete="tel"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="+62 8xx-xxxx-xxxx"
                      className={`${field("contact")} border-b-0`}
                      aria-required="true"
                      aria-invalid={!!errors.contact}
                    />
                    {errors.contact && <p role="alert" className="mt-1 text-xs text-red-400">{errors.contact}</p>}
                  </div>
                </div>

                {/* Email + Profession */}
                <div className="grid sm:grid-cols-2 gap-x-8 border-b border-[var(--border)]">
                  <div className="py-5">
                    <label htmlFor="email" className="editorial-label block mb-2">
                      Email <span className="text-[var(--ink-muted)] font-normal normal-case tracking-normal text-[11px]">(optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${field("email")} border-b-0`}
                    />
                    {errors.email && <p role="alert" className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                  <div className="py-5 border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8">
                    <label htmlFor="professionId" className="editorial-label block mb-2">
                      Profession
                    </label>
                    <select
                      id="professionId"
                      name="professionId"
                      value={form.professionId}
                      onChange={handleChange}
                      className={`${field("professionId")} border-b-0 cursor-pointer bg-transparent`}
                    >
                      <option value="">Select your profession</option>
                      {t.contact.professions.map((p) => (
                        <option key={p.id} value={p.id}>{p.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service + Package */}
                <div className="grid sm:grid-cols-2 gap-x-8 border-b border-[var(--border)]">
                  <div className="py-5">
                    <label htmlFor="serviceId" className="editorial-label block mb-2">
                      Service Needed <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="serviceId"
                      name="serviceId"
                      value={form.serviceId}
                      onChange={handleChange}
                      className={`${field("serviceId")} border-b-0 cursor-pointer bg-transparent`}
                      aria-required="true"
                    >
                      <option value="">Choose a service</option>
                      {t.contact.services.map((s) => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                      ))}
                    </select>
                    {errors.service && <p role="alert" className="mt-1 text-xs text-red-400">{errors.service}</p>}
                  </div>
                  <div className="py-5 border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8">
                    <label htmlFor="packageId" className="editorial-label block mb-2">
                      Package
                    </label>
                    <select
                      id="packageId"
                      name="packageId"
                      value={form.packageId}
                      onChange={handleChange}
                      className={`${field("packageId")} border-b-0 cursor-pointer bg-transparent`}
                    >
                      <option value="">Select a package</option>
                      {t.contact.packages.map((p) => (
                        <option key={p.id} value={p.id}>{p.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div className="border-b border-[var(--border)] py-5">
                  <label htmlFor="budgetId" className="editorial-label block mb-2">
                    Budget Range <span className="text-[var(--ink-muted)] font-normal normal-case tracking-normal text-[11px]">(optional)</span>
                  </label>
                  <select
                    id="budgetId"
                    name="budgetId"
                    value={form.budgetId}
                    onChange={handleChange}
                    className={`${field("budgetId")} border-b-0 cursor-pointer bg-transparent`}
                  >
                    <option value="">Select a budget range</option>
                    {t.contact.budgets.map((b) => (
                      <option key={b.id} value={b.id}>{b.label}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="border-b border-[var(--border)] py-5">
                  <label htmlFor="description" className="editorial-label block mb-2">
                    Project Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project — what you're building, your goals, and any specific requirements..."
                    className={`${field("description")} border-b-0 resize-none`}
                    aria-required="true"
                    aria-invalid={!!errors.description}
                  />
                  {errors.description && <p role="alert" className="mt-1 text-xs text-red-400">{errors.description}</p>}
                </div>

                {/* Submit */}
                <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[var(--background)] bg-[var(--ink)] hover:opacity-80 transition-opacity group"
                  >
                    <Send size={14} aria-hidden="true" />
                    Send via WhatsApp
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  </button>
                  <p className="text-xs text-[var(--ink-muted)]">
                    Opens WhatsApp with your details pre-filled
                  </p>
                </div>
              </form>
            )}
          </InView>
        </div>
      </div>
    </section>
  );
}
