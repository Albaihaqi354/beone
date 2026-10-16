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
import { packagePlanOptions, planToServiceMap } from "@/data/pricing";
import { services } from "@/data/services";

interface FormData {
  name: string;
  contact: string;
  email: string;
  profession: string;
  service: string;
  packagePlan: string;
  budget: string;
  description: string;
}

interface FormErrors {
  [key: string]: string;
}

const servicesList = [
  ...services.map((s) => s.title),
  "Website Maintenance",
  "Lainnya",
];

const packageOptions = packagePlanOptions;

const professionOptions = [
  "Web Developer / Programmer",
  "UI/UX / Graphic Designer",
  "Freelancer / Content Creator",
  "Mahasiswa / Fresh Graduate",
  "Profesional / Konsultan",
  "Pemilik Bisnis / UMKM",
  "Lainnya",
];

const budgetOptions = [
  "< Rp150 ribu (Desain Promosi)",
  "Rp150rb – Rp350 ribu (Portofolio / Katalog)",
  "Rp350rb – Rp1 juta (Landing Page Bisnis / Portofolio Pro)",
  "Rp1 – 3 juta",
  "Rp3 – 6 juta",
  "> Rp6 juta (Web App / E-Commerce)",
  "Sesuai Rekomendasi Solusi",
];

const initialForm: FormData = {
  name: "",
  contact: "",
  email: "",
  profession: "",
  service: "Website Portofolio Pribadi",
  packagePlan: "",
  budget: "",
  description: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Nama lengkap wajib diisi.";
  if (!data.contact.trim()) {
    errors.contact = "Nomor WhatsApp atau kontak wajib diisi.";
  } else if (!/^[0-9+\-\s()]{8,20}$/.test(data.contact)) {
    errors.contact = "Format nomor kontak tidak valid.";
  }
  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Format email tidak valid.";
  }
  if (!data.service) errors.service = "Pilih layanan yang dibutuhkan.";
  if (!data.description.trim()) {
    errors.description = "Ceritakan sedikit kebutuhan atau tujuan website Anda.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [preparedUrl, setPreparedUrl] = useState<string>("");
  const [preparedMessage, setPreparedMessage] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // Sync with plan selection events from Services, Pricing, or Hero
  useEffect(() => {
    const handlePlanSelect = (e: Event) => {
      const detail = (
        e as CustomEvent<{ planId?: string; service?: string; plan?: string }>
      ).detail;
      if (detail) {
        setStatus("idle");
        setForm((prev) => {
          let matchedService = prev.service;
          let matchedPlan = prev.packagePlan;

          if (detail.planId && planToServiceMap[detail.planId]) {
            matchedService = planToServiceMap[detail.planId].service;
            matchedPlan = planToServiceMap[detail.planId].packageOption;
          } else {
            if (detail.service) {
              const foundSrv = servicesList.find(
                (s) =>
                  s.toLowerCase().includes(detail.service!.toLowerCase()) ||
                  detail.service!.toLowerCase().includes(s.toLowerCase())
              );
              if (foundSrv) matchedService = foundSrv;
            }

            if (detail.plan) {
              const foundPlan = packageOptions.find(
                (opt) =>
                  opt.toLowerCase().includes(detail.plan!.toLowerCase()) ||
                  detail.plan!.toLowerCase().includes(opt.toLowerCase())
              );
              if (foundPlan) matchedPlan = foundPlan;
            }
          }

          return {
            ...prev,
            service: matchedService,
            packagePlan: matchedPlan,
          };
        });
      }
    };

    window.addEventListener("beone-select-plan", handlePlanSelect);
    return () => window.removeEventListener("beone-select-plan", handlePlanSelect);
  }, []);

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
      const firstKey = Object.keys(validationErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    // Format clean professional WhatsApp inquiry message
    const messageLines = [
      `*Halo BeOne, saya ingin konsultasi pembuatan website:*`,
      ``,
      `👤 *Nama:* ${form.name}`,
      `📱 *Kontak:* ${form.contact}`,
      form.email ? `✉️ *Email:* ${form.email}` : null,
      form.profession ? `💼 *Profesi / Bisnis:* ${form.profession}` : null,
      `🛠️ *Layanan:* ${form.service}`,
      form.packagePlan ? `📦 *Paket Diminati:* ${form.packagePlan}` : null,
      form.budget ? `💰 *Estimasi Budget:* ${form.budget}` : null,
      ``,
      `📝 *Deskripsi & Kebutuhan:*`,
      form.description,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const targetUrl = whatsappUrl(messageLines);
    setPreparedMessage(messageLines);
    setPreparedUrl(targetUrl);
    setStatus("ready");

    // Open directly within user action context to prevent popup blockers
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
            label="Contact & Consultation"
            title="Mulai Konsultasi Kebutuhan Anda"
            subtitle="Ceritakan profil, karya, atau proyek yang ingin Anda bangun. Kami akan membantu merancang solusi website terbaik untuk Anda."
          />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct WhatsApp & Info */}
          <AnimateOnScroll className="lg:col-span-5" direction="left">
            <div className="space-y-5">
              <div className="p-6 bg-gradient-to-br from-indigo-50/60 to-white dark:from-neutral-900 dark:to-neutral-900 rounded-2xl border border-indigo-100 dark:border-neutral-800 shadow-sm">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500 text-white mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  Respons Cepat via WhatsApp
                </div>
                <h3 className="text-base font-bold text-neutral-950 dark:text-white mb-2">
                  Diskusi Langsung dengan Tim BeOne
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
                  Ingin bertanya langsung seputar website portofolio, pilihan paket mulai Rp150.000, atau penyesuaian fitur? Hubungi kami via WhatsApp sekarang.
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors"
                  aria-label="Buka obrolan WhatsApp BeOne"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  Chat WhatsApp: +{siteConfig.whatsappNumber}
                </a>
              </div>

              <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Privasi & Keamanan Data
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
                      Informasi kontak Anda hanya digunakan untuk keperluan konsultasi project dan tidak akan dibagikan ke pihak manapun.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Email Resmi:</span>
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
                aria-label="Status penyiapan pesan WhatsApp"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-black text-neutral-950 dark:text-white mb-2">
                  Detail Inquiry Siap Dikirim
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed mb-6">
                  Tautan WhatsApp telah disiapkan dengan detail proyek Anda. Silakan klik tombol di bawah untuk membuka chat atau salin format pesan.
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
                    Buka Chat WhatsApp Sekarang
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 text-sm font-semibold rounded-xl transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={16} className="text-green-500" />
                        Pesan Tersalin!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Salin Format Pesan
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-indigo-500 underline transition-colors"
                >
                  ← Kembali edit formulir
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulir inquiry proyek BeOne"
                className="space-y-4 bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
              >
                {/* Name & Contact */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
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
                      Nomor WhatsApp / HP <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      autoComplete="tel"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="Contoh: 081234567890"
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
                      Email <span className="text-neutral-400 font-normal">(Opsional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
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
                      htmlFor="profession"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Profesi / Bidang Usaha
                    </label>
                    <select
                      id="profession"
                      name="profession"
                      value={form.profession}
                      onChange={handleChange}
                      className={`${fieldClass("profession")} cursor-pointer`}
                    >
                      <option value="">Pilih profesi / bidang...</option>
                      {professionOptions.map((prof) => (
                        <option key={prof} value={prof}>
                          {prof}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service & Package */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Layanan yang Dibutuhkan <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${fieldClass("service")} cursor-pointer font-medium`}
                      aria-required="true"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv === "Personal Portfolio Website" ? "⭐ " + srv : srv}
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
                      htmlFor="packagePlan"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Paket yang Diminati
                    </label>
                    <select
                      id="packagePlan"
                      name="packagePlan"
                      value={form.packagePlan}
                      onChange={handleChange}
                      className={`${fieldClass("packagePlan")} cursor-pointer`}
                    >
                      <option value="">Pilih paket atau konsultasi bebas...</option>
                      {packageOptions.map((pkg) => (
                        <option key={pkg} value={pkg}>
                          {pkg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                  >
                    Estimasi Anggaran <span className="text-neutral-400 font-normal">(Opsional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={`${fieldClass("budget")} cursor-pointer`}
                  >
                    <option value="">Pilih rentang estimasi budget...</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
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
                    Deskripsi Kebutuhan & Ekspektasi <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Contoh: Saya seorang web developer, ingin membuat portofolio single page untuk menampilkan 3 proyek terbaik dan resume pendidikan/keahlian..."
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
                  aria-label="Kirim formulir konsultasi via WhatsApp"
                >
                  <Send size={16} aria-hidden="true" />
                  Kirim & Mulai Konsultasi WhatsApp
                </button>

                <p className="text-[11px] text-neutral-400 dark:text-neutral-500 text-center">
                  Mengisi formulir ini akan menyiapkan pesan chat WhatsApp yang rapi ke kontak resmi BeOne.
                </p>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
