"use client";

import { useState, useEffect, type FormEvent } from "react";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
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
  if (!data.description.trim()) {
    errors.description = errMsgs.description;
  }
  return errors;
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [preparedUrl, setPreparedUrl] = useState<string>("");
  const [preparedMessage, setPreparedMessage] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // Sync with plan selection events from Services, Pricing, or Hero
  useEffect(() => {
    const handlePlanSelect = (e: Event) => {
      const detail = (
        e as CustomEvent<{
          planId?: string;
          serviceId?: string;
          service?: string;
          plan?: string;
        }>
      ).detail;
      if (detail) {
        setStatus("idle");
        setForm((prev) => {
          let matchedService = prev.serviceId;
          let matchedPackage = prev.packageId;

          if (detail.serviceId) {
            matchedService = detail.serviceId;
          }

          if (detail.planId) {
            matchedPackage = detail.planId;
            const foundPkg = t.contact.packages.find((p) => p.id === detail.planId);
            if (foundPkg) {
              matchedService = foundPkg.serviceId;
            }
          }

          return {
            ...prev,
            serviceId: matchedService,
            packageId: matchedPackage,
          };
        });
      }
    };

    window.addEventListener("beone-select-plan", handlePlanSelect);
    return () => window.removeEventListener("beone-select-plan", handlePlanSelect);
  }, [t.contact.packages]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form, t.contact.errors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    const selectedProfession = t.contact.professions.find(
      (p) => p.id === form.professionId
    )?.label;
    const selectedService = t.contact.services.find(
      (s) => s.id === form.serviceId
    )?.label;
    const selectedPackage = t.contact.packages.find(
      (p) => p.id === form.packageId
    )?.label;
    const selectedBudget = t.contact.budgets.find(
      (b) => b.id === form.budgetId
    )?.label;

    // Format clean professional WhatsApp inquiry message in active language
    const messageLines = [
      t.contact.msgGreeting,
      "",
      `👤 *${t.contact.msgName}:* ${form.name}`,
      `📱 *${t.contact.msgContact}:* ${form.contact}`,
      form.email ? `✉️ *${t.contact.msgEmail}:* ${form.email}` : null,
      selectedProfession
        ? `💼 *${t.contact.msgProfession}:* ${selectedProfession}`
        : null,
      selectedService
        ? `🛠️ *${t.contact.msgService}:* ${selectedService}`
        : null,
      selectedPackage
        ? `📦 *${t.contact.msgPackage}:* ${selectedPackage}`
        : null,
      selectedBudget
        ? `💰 *${t.contact.msgBudget}:* ${selectedBudget}`
        : null,
      "",
      `📝 *${t.contact.msgDesc}:*`,
      form.description,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const targetUrl = whatsappUrl(messageLines);
    setPreparedMessage(messageLines);
    setPreparedUrl(targetUrl);
    setStatus("ready");

    try {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Fallback handled smoothly by the ready screen
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard fallback
    }
  };

  const fieldClass = (name: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent ${
      errors[name]
        ? "border-red-300 dark:border-red-700 bg-red-50/50 dark:bg-red-950/20"
        : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
    }`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-white dark:bg-neutral-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label={t.contact.label}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct WhatsApp & Info */}
          <AnimateOnScroll className="lg:col-span-5" direction="left">
            <div className="space-y-5">
              <div className="p-6 bg-gradient-to-br from-indigo-50/60 to-white dark:from-neutral-900 dark:to-neutral-900 rounded-2xl border border-indigo-100 dark:border-neutral-800 shadow-sm">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500 text-white mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  {t.contact.whatsappBadge}
                </div>
                <h3 className="text-base font-bold text-neutral-950 dark:text-white mb-2">
                  {t.contact.whatsappTitle}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
                  {t.contact.whatsappDesc}
                </p>
                <a
                  href={whatsappUrl(t.shared.whatsappDefaultMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors"
                  aria-label={`${t.contact.whatsappCta} +${siteConfig.whatsappNumber}`}
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  {t.contact.whatsappCta} +{siteConfig.whatsappNumber}
                </a>
              </div>

              <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {t.contact.privacyTitle}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
                      {t.contact.privacyText}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">{t.contact.emailLabel}</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-indigo-500 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Interactive Inquiry Form / WhatsApp Action Screen */}
          <AnimateOnScroll className="lg:col-span-7" direction="right" delay={0.1}>
            {status === "ready" ? (
              <div
                className="p-8 sm:p-10 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-indigo-100 dark:border-neutral-800 text-center shadow-md animate-in fade-in"
                role="region"
                aria-label={t.contact.readyTitle}
              >
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-black text-neutral-950 dark:text-white mb-2">
                  {t.contact.readyTitle}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed mb-6">
                  {t.contact.readyDesc}
                </p>

                {/* Prepared message preview */}
                <div className="mb-6 p-4 bg-white dark:bg-neutral-800/80 rounded-xl border border-neutral-200 dark:border-neutral-700 text-left text-xs font-mono text-neutral-700 dark:text-neutral-300 whitespace-pre-line max-h-48 overflow-y-auto">
                  {preparedMessage}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                  <a
                    href={preparedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors"
                  >
                    <MessageCircle size={16} />
                    {t.contact.openChat}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-xl transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={16} className="text-green-500" />
                        {t.contact.messageCopied}
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        {t.contact.copyMessage}
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-indigo-500 underline transition-colors"
                >
                  {t.contact.backToForm}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label={t.contact.formAria}
                className="space-y-4 bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
              >
                {/* Name & Contact */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      {t.contact.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className={fieldClass("name")}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      {t.contact.contactLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      autoComplete="tel"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder={t.contact.contactPlaceholder}
                      className={fieldClass("contact")}
                      aria-required="true"
                      aria-invalid={!!errors.contact}
                    />
                    {errors.contact && (
                      <p role="alert" className="mt-1 text-xs text-red-500">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Profession */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      {t.contact.emailLabel2} <span className="text-neutral-400 font-normal">{t.contact.emailOptional}</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      className={fieldClass("email")}
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="professionId"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      {t.contact.professionLabel}
                    </label>
                    <select
                      id="professionId"
                      name="professionId"
                      value={form.professionId}
                      onChange={handleChange}
                      className={`${fieldClass("professionId")} cursor-pointer`}
                    >
                      <option value="">{t.contact.professionPlaceholder}</option>
                      {t.contact.professions.map((prof) => (
                        <option key={prof.id} value={prof.id}>
                          {prof.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service & Package */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="serviceId"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      {t.contact.serviceLabel} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceId"
                      name="serviceId"
                      value={form.serviceId}
                      onChange={handleChange}
                      className={`${fieldClass("serviceId")} cursor-pointer font-medium`}
                      aria-required="true"
                    >
                      <option value="">{t.contact.servicePlaceholder}</option>
                      {t.contact.services.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.id === "personal-portfolio" ? "⭐ " + srv.label : srv.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p role="alert" className="mt-1 text-xs text-red-500">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="packageId"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      {t.contact.packageLabel}
                    </label>
                    <select
                      id="packageId"
                      name="packageId"
                      value={form.packageId}
                      onChange={handleChange}
                      className={`${fieldClass("packageId")} cursor-pointer`}
                    >
                      <option value="">{t.contact.packagePlaceholder}</option>
                      {t.contact.packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budgetId"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                  >
                    {t.contact.budgetLabel} <span className="text-neutral-400 font-normal">{t.contact.budgetOptional}</span>
                  </label>
                  <select
                    id="budgetId"
                    name="budgetId"
                    value={form.budgetId}
                    onChange={handleChange}
                    className={`${fieldClass("budgetId")} cursor-pointer`}
                  >
                    <option value="">{t.contact.budgetPlaceholder}</option>
                    {t.contact.budgets.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                  >
                    {t.contact.descLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    placeholder={t.contact.descPlaceholder}
                    className={`${fieldClass("description")} resize-none`}
                    aria-required="true"
                    aria-invalid={!!errors.description}
                  />
                  {errors.description && (
                    <p role="alert" className="mt-1 text-xs text-red-500">
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors shadow-md shadow-indigo-200 dark:shadow-indigo-950/40 group"
                  aria-label={t.contact.submitAriaLabel}
                >
                  <Send size={16} aria-hidden="true" />
                  {t.contact.submitBtn}
                </button>

                <p className="text-[11px] text-neutral-400 dark:text-neutral-500 text-center">
                  {t.contact.submitHint}
                </p>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
