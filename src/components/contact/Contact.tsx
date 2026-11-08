"use client";

import { useState, useEffect, type FormEvent } from "react";
import { Send, MessageCircle, CheckCircle2, Copy, Check, ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { whatsappUrl, siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/language";

interface FormState {
  name: string;
  whatsapp: string;
  email: string;
  business: string;
  serviceId: string;
  budgetId: string;
  description: string;
}

const initialForm: FormState = {
  name: "",
  whatsapp: "",
  email: "",
  business: "",
  serviceId: "",
  budgetId: "",
  description: "",
};

const fieldBase =
  "w-full px-0 py-3 text-sm text-[var(--ink)] bg-transparent border-b border-[var(--border)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--ink)] transition-colors duration-150";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [preparedUrl, setPreparedUrl] = useState("");
  const [preparedMessage, setPreparedMessage] = useState("");
  const [copied, setCopied] = useState(false);

  /* Pre-fill service from plan selection events */
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ planId?: string; serviceId?: string }>).detail;
      if (!detail) return;
      setStatus("idle");
      if (detail.serviceId) {
        setForm((p) => ({ ...p, serviceId: detail.serviceId! }));
      }
    };
    window.addEventListener("beone-select-plan", handler);
    return () => window.removeEventListener("beone-select-plan", handler);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => { const n = { ...p }; delete n[name]; return n; });
  };

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t.contact.errors.name;
    if (!form.whatsapp.trim()) {
      e.whatsapp = t.contact.errors.contact;
    } else if (!/^[0-9+\-\s()]{8,20}$/.test(form.whatsapp)) {
      e.whatsapp = t.contact.errors.contactFormat;
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = t.contact.errors.emailFormat;
    }
    if (!form.serviceId) e.serviceId = t.contact.errors.service;
    if (!form.description.trim()) e.description = t.contact.errors.description;
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      document.getElementById(Object.keys(errs)[0])?.focus();
      return;
    }

    const serviceLabel = t.contact.services.find((s) => s.id === form.serviceId)?.label ?? form.serviceId;
    const budgetLabel = t.contact.budgets.find((b) => b.id === form.budgetId)?.label;

    const lines = [
      t.contact.msgGreeting,
      "",
      `👤 *${t.contact.msgName}:* ${form.name}`,
      `📱 *${t.contact.msgWhatsapp}:* ${form.whatsapp}`,
      form.email ? `✉️ *${t.contact.msgEmail}:* ${form.email}` : null,
      form.business ? `🏢 *${t.contact.msgBusiness}:* ${form.business}` : null,
      `🛠️ *${t.contact.msgService}:* ${serviceLabel}`,
      budgetLabel ? `💰 *${t.contact.msgBudget}:* ${budgetLabel}` : null,
      "",
      `📝 *${t.contact.msgDesc}:*`,
      form.description,
    ]
      .filter(Boolean)
      .join("\n");

    const url = whatsappUrl(lines);
    setPreparedMessage(lines);
    setPreparedUrl(url);
    setStatus("ready");
    try { window.open(url, "_blank", "noopener,noreferrer"); } catch { /* fallback */ }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* ignore */ }
  };

  const fieldClass = (name: string) =>
    errors[name]
      ? `${fieldBase} border-[var(--color-error)] focus:border-[var(--color-error)]`
      : fieldBase;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-[var(--surface-dark)]">

      {/* Editorial dark headline */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-20">
        <AnimateOnScroll>
          <p className="editorial-label mb-6" style={{ color: "var(--accent)" }}>
            {t.contact.sectionLabel}
          </p>
          <h2
            id="contact-heading"
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.97] tracking-tight"
            style={{ color: "var(--on-dark)" }}
          >
            {t.contact.headline1}
            <br />
            <span className="italic font-medium">{t.contact.headline2}</span>
          </h2>
        </AnimateOnScroll>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12" style={{ borderTop: "1px solid rgba(248,245,240,0.12)" }} />

      {/* Form area */}
      <div className="bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left info */}
            <AnimateOnScroll className="lg:col-span-4">
              <div className="space-y-10">
                <div>
                  <p className="editorial-label mb-4">{t.contact.directContactLabel}</p>
                  <div className="space-y-4">
                    <a
                      href={whatsappUrl(t.shared.whatsappDefaultMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
                    >
                      <span className="w-9 h-9 flex items-center justify-center border border-[var(--border)] group-hover:bg-[var(--surface-dark)] group-hover:text-[var(--on-dark)] group-hover:border-[var(--surface-dark)] transition-all">
                        <MessageCircle size={15} aria-hidden="true" />
                      </span>
                      <span>WhatsApp +{siteConfig.whatsappNumber}</span>
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group flex items-center gap-3 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
                    >
                      <span className="w-9 h-9 flex items-center justify-center border border-[var(--border)] group-hover:bg-[var(--surface-dark)] group-hover:text-[var(--on-dark)] group-hover:border-[var(--surface-dark)] transition-all text-xs font-medium">
                        @
                      </span>
                      <span>{siteConfig.email}</span>
                    </a>
                  </div>
                </div>
                <div>
                  <p className="editorial-label mb-4">{t.contact.expectLabel}</p>
                  <ul className="space-y-3 text-sm text-[var(--ink-muted)]">
                    {t.contact.expectItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right: form or ready */}
            <AnimateOnScroll className="lg:col-span-8" delay={0.1}>
              {status === "ready" ? (
                <div className="py-10 text-center border border-[var(--border)] px-8">
                  <div className="w-12 h-12 border border-[var(--border)] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={24} className="text-[var(--accent-dark)]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--ink)] mb-2">{t.contact.readyTitle}</h3>
                  <p className="text-sm text-[var(--ink-muted)] max-w-md mx-auto mb-8 leading-relaxed">{t.contact.readyDesc}</p>
                  <div className="p-4 text-left text-xs font-mono text-[var(--ink-soft)] whitespace-pre-line max-h-48 overflow-y-auto mb-7 border border-[var(--border)]" style={{ backgroundColor: "var(--surface-2)" }}>
                    {preparedMessage}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
                    <a
                      href={preparedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[var(--on-dark)] bg-[var(--surface-dark)] hover:opacity-80 transition-opacity"
                    >
                      <MessageCircle size={15} /> {t.contact.openWhatsapp}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[var(--ink)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors"
                    >
                      {copied ? <><Check size={15} className="text-[var(--accent-dark)]" /> {t.contact.messageCopied}</> : <><Copy size={15} /> {t.contact.copyMessage}</>}
                    </button>
                  </div>
                  <button type="button" onClick={() => setStatus("idle")} className="text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] underline transition-colors">
                    {t.contact.backToForm}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Formulir proyek">

                  {/* Name + WhatsApp */}
                  <div className="grid sm:grid-cols-2 gap-x-10 border-b border-[var(--border)]">
                    <div className="py-2">
                      <label htmlFor="name" className="editorial-label block mb-2">
                        {t.contact.nameLabel} <span style={{ color: "var(--color-error)" }}>*</span>
                      </label>
                      <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange} placeholder={t.contact.namePlaceholder} className={`${fieldClass("name")} border-b-0`} aria-required="true" aria-invalid={!!errors.name} />
                      {errors.name && <p role="alert" className="mt-1 text-xs" style={{ color: "var(--color-error)" }}>{errors.name}</p>}
                    </div>
                    <div className="py-2 border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8">
                      <label htmlFor="whatsapp" className="editorial-label block mb-2">
                        {t.contact.whatsappLabel} <span style={{ color: "var(--color-error)" }}>*</span>
                      </label>
                      <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" value={form.whatsapp} onChange={handleChange} placeholder={t.contact.whatsappPlaceholder} className={`${fieldClass("whatsapp")} border-b-0`} aria-required="true" aria-invalid={!!errors.whatsapp} />
                      {errors.whatsapp && <p role="alert" className="mt-1 text-xs" style={{ color: "var(--color-error)" }}>{errors.whatsapp}</p>}
                    </div>
                  </div>

                  {/* Email + Business */}
                  <div className="grid sm:grid-cols-2 gap-x-10 border-b border-[var(--border)]">
                    <div className="py-5">
                      <label htmlFor="email" className="editorial-label block mb-2">
                        {t.contact.emailLabel} <span className="text-[var(--ink-muted)] font-normal normal-case tracking-normal text-[11px]">{t.contact.emailOptional}</span>
                      </label>
                      <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder={t.contact.emailPlaceholder} className={`${fieldClass("email")} border-b-0`} />
                      {errors.email && <p role="alert" className="mt-1 text-xs" style={{ color: "var(--color-error)" }}>{errors.email}</p>}
                    </div>
                    <div className="py-5 border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8">
                      <label htmlFor="business" className="editorial-label block mb-2">
                        {t.contact.businessLabel} <span className="text-[var(--ink-muted)] font-normal normal-case tracking-normal text-[11px]">{t.contact.businessOptional}</span>
                      </label>
                      <input id="business" name="business" type="text" autoComplete="organization" value={form.business} onChange={handleChange} placeholder={t.contact.businessPlaceholder} className={`${fieldClass("business")} border-b-0`} />
                    </div>
                  </div>

                  {/* Service + Budget */}
                  <div className="grid sm:grid-cols-2 gap-x-10 border-b border-[var(--border)]">
                    <div className="py-5">
                      <label htmlFor="serviceId" className="editorial-label block mb-2">
                        {t.contact.serviceLabel} <span style={{ color: "var(--color-error)" }}>*</span>
                      </label>
                      <select id="serviceId" name="serviceId" value={form.serviceId} onChange={handleChange} className={`${fieldClass("serviceId")} border-b-0 cursor-pointer bg-transparent`} aria-required="true">
                        <option value="">{t.contact.servicePlaceholder}</option>
                        {t.contact.services.map((s) => (
                          <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                      </select>
                      {errors.serviceId && <p role="alert" className="mt-1 text-xs" style={{ color: "var(--color-error)" }}>{errors.serviceId}</p>}
                    </div>
                    <div className="py-5 border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8">
                      <label htmlFor="budgetId" className="editorial-label block mb-2">
                        {t.contact.budgetLabel} <span className="text-[var(--ink-muted)] font-normal normal-case tracking-normal text-[11px]">{t.contact.budgetOptional}</span>
                      </label>
                      <select id="budgetId" name="budgetId" value={form.budgetId} onChange={handleChange} className={`${fieldClass("budgetId")} border-b-0 cursor-pointer bg-transparent`}>
                        <option value="">{t.contact.budgetPlaceholder}</option>
                        {t.contact.budgets.map((b) => (
                          <option key={b.id} value={b.id}>{b.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="border-b border-[var(--border)] py-5">
                    <label htmlFor="description" className="editorial-label block mb-2">
                      {t.contact.descLabel} <span style={{ color: "var(--color-error)" }}>*</span>
                    </label>
                    <textarea id="description" name="description" rows={5} value={form.description} onChange={handleChange} placeholder={t.contact.descPlaceholder} className={`${fieldClass("description")} border-b-0 resize-none`} aria-required="true" aria-invalid={!!errors.description} />
                    {errors.description && <p role="alert" className="mt-1 text-xs" style={{ color: "var(--color-error)" }}>{errors.description}</p>}
                  </div>

                  {/* Submit */}
                  <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button type="submit" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[var(--on-dark)] bg-[var(--surface-dark)] hover:opacity-80 transition-opacity group">
                      <Send size={14} aria-hidden="true" />
                      {t.contact.submitBtn}
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                    </button>
                    <p className="text-xs text-[var(--ink-muted)]">{t.contact.submitHint}</p>
                  </div>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
