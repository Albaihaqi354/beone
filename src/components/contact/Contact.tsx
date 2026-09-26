"use client";

import { useState, type FormEvent } from "react";
import { Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { whatsappUrl, siteConfig } from "@/lib/config";

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  service: string;
  budget: string;
  description: string;
}

interface FormErrors {
  [key: string]: string;
}

const services = [
  "Landing Page",
  "Company Profile",
  "Business Website",
  "E-Commerce",
  "Custom Web App",
  "Mobile App",
  "Website Maintenance",
  "Lainnya",
];

const budgetOptions = [
  "< Rp2 juta",
  "Rp2–5 juta",
  "Rp5–10 juta",
  "Rp10–20 juta",
  "> Rp20 juta",
];

const initialForm: FormData = {
  name: "",
  email: "",
  whatsapp: "",
  company: "",
  service: "",
  budget: "",
  description: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Nama wajib diisi.";
  if (!data.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Format email tidak valid.";
  }
  if (!data.whatsapp.trim()) {
    errors.whatsapp = "Nomor WhatsApp wajib diisi.";
  } else if (!/^[0-9+\-\s()]{8,16}$/.test(data.whatsapp)) {
    errors.whatsapp = "Nomor WhatsApp tidak valid.";
  }
  if (!data.service) errors.service = "Pilih layanan yang dibutuhkan.";
  if (!data.description.trim())
    errors.description = "Deskripsi project wajib diisi.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

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
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error
      const firstKey = Object.keys(validationErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    setStatus("loading");

    // Build WhatsApp message from form data
    const message = [
      `*Project Inquiry — BeOne*`,
      ``,
      `Nama: ${form.name}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `Bisnis/Perusahaan: ${form.company || "-"}`,
      `Layanan: ${form.service}`,
      `Budget: ${form.budget || "-"}`,
      ``,
      `Deskripsi:`,
      form.description,
    ].join("\n");

    // Simulate brief loading then redirect to WhatsApp
    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    }, 800);
  };

  const fieldClass = (name: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent ${
      errors[name]
        ? "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-950/20"
        : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
    }`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-white dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label="Contact"
            title="Let's Work Together"
            subtitle="Ceritakan kebutuhan project Anda dan kami akan segera menghubungi Anda."
          />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left — info */}
          <AnimateOnScroll className="lg:col-span-2" direction="left">
            <div className="space-y-6">
              <div className="p-5 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                <h3 className="text-sm font-bold text-neutral-950 dark:text-white mb-1.5">
                  Chat via WhatsApp
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3 leading-relaxed">
                  Lebih suka diskusi langsung? Chat kami di WhatsApp untuk
                  respons lebih cepat.
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
                  aria-label="Open WhatsApp chat with BeOne"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="p-5 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                <h3 className="text-sm font-bold text-neutral-950 dark:text-white mb-3">
                  Informasi Kontak
                </h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-xs text-neutral-400 dark:text-neutral-500 mb-0.5">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="p-5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 rounded-2xl">
                <p className="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
                  <strong>Konsultasi gratis.</strong> Kami akan membalas dalam
                  1×24 jam di hari kerja.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — form */}
          <AnimateOnScroll className="lg:col-span-3" direction="right" delay={0.1}>
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center gap-4 p-12 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 text-center"
                role="alert"
                aria-live="polite"
              >
                <CheckCircle2
                  size={48}
                  className="text-green-500"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                  Pesan Terkirim!
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
                  Anda akan diarahkan ke WhatsApp. Kami akan segera merespons
                  pesan Anda.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setStatus("idle");
                  }}
                  className="px-5 py-2.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
                >
                  Kirim Inquiry Lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Project inquiry form"
                className="space-y-5"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Nama <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nama lengkap Anda"
                      className={fieldClass("name")}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Email <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@bisnis.com"
                      className={fieldClass("email")}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* WhatsApp + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      WhatsApp <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      autoComplete="tel"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                      className={fieldClass("whatsapp")}
                      aria-required="true"
                      aria-invalid={!!errors.whatsapp}
                      aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                    />
                    {errors.whatsapp && (
                      <p id="whatsapp-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Bisnis / Perusahaan
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nama bisnis atau perusahaan"
                      className={fieldClass("company")}
                    />
                  </div>
                </div>

                {/* Service + Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Layanan yang Dibutuhkan <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${fieldClass("service")} cursor-pointer`}
                      aria-required="true"
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "service-error" : undefined}
                    >
                      <option value="" disabled>
                        Pilih layanan...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.service}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`${fieldClass("budget")} cursor-pointer`}
                    >
                      <option value="">Pilih budget...</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                  >
                    Deskripsi Project <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Ceritakan kebutuhan project Anda: tujuan, fitur yang diinginkan, referensi, dll."
                    className={`${fieldClass("description")} resize-none`}
                    aria-required="true"
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? "description-error" : undefined}
                  />
                  {errors.description && (
                    <p id="description-error" role="alert" className="mt-1 text-xs text-red-500">
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed rounded-xl transition-colors shadow-md shadow-indigo-200 group"
                  aria-label="Send project inquiry"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2
                        size={16}
                        aria-hidden="true"
                        className="animate-spin"
                      />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Send Project Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
                  Form ini akan mengarahkan Anda ke WhatsApp dengan detail
                  project yang sudah diisi.
                </p>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
