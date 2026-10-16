"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Palette,
  CheckCircle2,
  X,
  Globe,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";
import type { ProjectTranslation } from "@/lib/i18n/types";

interface DisplayProject extends ProjectTranslation {
  id: string;
  techStack: string[];
  demoUrl?: string;
  isConceptual?: boolean;
}

export default function PortfolioShowcase() {
  const { t, lang } = useLanguage();
  const [activeModal, setActiveModal] = useState<DisplayProject | null>(null);

  const projects: DisplayProject[] = [
    {
      id: "finvera",
      ...t.portfolio.projects.finvera,
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://finvera-app.vercel.app/",
      isConceptual: false,
    },
    {
      id: "tickitz",
      ...t.portfolio.projects.tickitz,
      techStack: ["Next.js", "React", "Tailwind CSS", "REST API"],
      demoUrl: "https://tickitz-liard.vercel.app/",
      isConceptual: false,
    },
    {
      id: "designer-portfolio-concept",
      ...t.portfolio.projects.designerPortfolio,
      techStack: ["Modern Layout", "Framer Motion", "Tailwind CSS", "Responsive"],
      demoUrl: undefined,
      isConceptual: true,
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeModal) {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="section-padding bg-neutral-50/70 dark:bg-neutral-900/40 relative overflow-hidden"
    >
      {/* Background accents */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            label={t.portfolio.label}
            title={t.portfolio.title}
            subtitle={t.portfolio.subtitle}
          />
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {projects.map((project, index) => {
            const isFinvera = project.id === "finvera";
            const isTickitz = project.id === "tickitz";
            const isConcept = project.isConceptual;

            return (
              <AnimateOnScroll key={project.id} delay={index * 0.1}>
                <article
                  className="flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 group"
                  aria-label={`Portfolio project: ${project.title}`}
                >
                  {/* Visual Preview Header */}
                  <div className="relative h-56 sm:h-60 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 border-b border-neutral-100 dark:border-neutral-800 overflow-hidden flex flex-col justify-between p-4">
                    {/* Simulated window top bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-black/5 dark:border-white/5">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="ml-1 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 truncate max-w-[140px]">
                          {project.demoUrl ? new URL(project.demoUrl).hostname : "preview.concept"}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900 shadow-xs">
                        {isConcept ? (
                          <Palette size={11} aria-hidden="true" />
                        ) : (
                          <Globe size={11} aria-hidden="true" />
                        )}
                        {project.badge}
                      </span>
                    </div>

                    {/* Distinct Simulated Visual Mockup per Project */}
                    {isFinvera && (
                      <div className="mt-3 bg-white dark:bg-neutral-950 rounded-xl p-3.5 shadow-md border border-neutral-200/60 dark:border-neutral-800 transform group-hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex justify-between items-center mb-2.5">
                          <div>
                            <span className="text-[10px] text-neutral-400 block font-medium">Finvera Balance</span>
                            <span className="text-sm font-black text-neutral-900 dark:text-white">Rp 14.850.000</span>
                          </div>
                          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                            {lang === "en" ? "+12.4% this mo" : "+12.4% bln ini"}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[10px]">
                          <div className="bg-neutral-50 dark:bg-neutral-900 p-1.5 rounded-lg border border-neutral-100 dark:border-neutral-800">
                            <span className="text-neutral-400 block">{lang === "en" ? "Income" : "Pemasukan"}</span>
                            <span className="font-bold text-emerald-600">Rp 18.2 jt</span>
                          </div>
                          <div className="bg-neutral-50 dark:bg-neutral-900 p-1.5 rounded-lg border border-neutral-100 dark:border-neutral-800">
                            <span className="text-neutral-400 block">{lang === "en" ? "Expense" : "Pengeluaran"}</span>
                            <span className="font-bold text-rose-500">Rp 3.35 jt</span>
                          </div>
                          <div className="bg-neutral-50 dark:bg-neutral-900 p-1.5 rounded-lg border border-neutral-100 dark:border-neutral-800">
                            <span className="text-neutral-400 block">{lang === "en" ? "Savings" : "Tabungan"}</span>
                            <span className="font-bold text-indigo-500">Rp 14.8 jt</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {isTickitz && (
                      <div className="mt-3 bg-white dark:bg-neutral-950 rounded-xl p-3.5 shadow-md border border-neutral-200/60 dark:border-neutral-800 transform group-hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold text-neutral-900 dark:text-white">
                            Spider-Man: Across The Spider-Verse
                          </span>
                          <span className="text-[9px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold px-1.5 py-0.5 rounded">
                            IMAX 2D
                          </span>
                        </div>
                        {/* Simulated Cinema Screen & Seat Grid */}
                        <div className="w-full h-1 bg-indigo-400/50 rounded-full mb-2" />
                        <div className="grid grid-cols-6 gap-1 px-4 py-1">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-2 rounded-xs ${
                                i === 4 || i === 5
                                  ? "bg-indigo-500"
                                  : i % 3 === 0
                                  ? "bg-neutral-200 dark:bg-neutral-700"
                                  : "bg-neutral-300 dark:bg-neutral-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {isConcept && (
                      <div className="mt-3 bg-white dark:bg-neutral-950 rounded-xl p-3.5 shadow-md border border-neutral-200/60 dark:border-neutral-800 transform group-hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">
                            AW
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-neutral-900 dark:text-white block leading-tight">
                              Arga Wicaksono
                            </span>
                            <span className="text-[9px] text-neutral-400 block">
                              UI/UX & Visual Designer
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="h-9 bg-purple-50 dark:bg-purple-950/40 rounded border border-purple-100 dark:border-purple-900/50 flex items-center justify-center text-[9px] font-medium text-purple-600 dark:text-purple-300">
                            Mobile App UI
                          </div>
                          <div className="h-9 bg-indigo-50 dark:bg-indigo-950/40 rounded border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-[9px] font-medium text-indigo-600 dark:text-indigo-300">
                            Brand Identity
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Body */}
                  <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
                    <div>
                      {/* Category */}
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block font-mono">
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <ul className="space-y-1.5 mb-5" role="list">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-indigo-500 flex-shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Transparent disclosure note */}
                      <p className="text-[11px] italic text-neutral-400 dark:text-neutral-500 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                        ℹ️ {project.note}
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
                          aria-label={`${t.portfolio.viewDemo} — ${project.title}`}
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                          {t.portfolio.viewDemo}
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setActiveModal(project)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
                          aria-label={`${t.portfolio.viewDemo} — ${project.title}`}
                        >
                          <Palette size={14} aria-hidden="true" />
                          {t.portfolio.viewDemo}
                        </button>
                      )}

                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-1 px-3.5 py-2.5 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 text-xs font-semibold rounded-xl transition-colors"
                        aria-label={`${t.portfolio.buildMine} — ${project.title}`}
                      >
                        {t.portfolio.buildMine}
                        <ArrowRight size={13} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom Portfolio Guarantee Note */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 flex items-center justify-center flex-shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold text-neutral-950 dark:text-white">
                  {lang === "en"
                    ? "Want a Portfolio that Truly Represents You?"
                    : "Ingin Portofolio yang Mewakili Karakter Anda Sendiri?"}
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-2xl leading-relaxed">
                  {lang === "en"
                    ? "We build portfolio websites tailored to your unique identity, favorite aesthetics, and profession — not rigid generic templates. Ready to launch in 1–3 business days once materials are ready."
                    : "Kami membuat website portofolio dari nol sesuai identitas, warna kesukaan, dan profesi Anda — bukan sekadar template kaku. Siap tayang dalam 1–3 hari kerja setelah materi lengkap diserahkan."}
                </p>
              </div>
            </div>
            <a
              href="#contact"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("beone-select-plan", {
                      detail: {
                        planId: "portfolio-starter",
                        service: "Website Portofolio Pribadi",
                      },
                    })
                  );
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              {lang === "en" ? "Start Portfolio Consultation" : "Mulai Konsultasi Portofolio"}
              <ArrowRight size={16} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Conceptual Designer Portfolio Modal Preview */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.portfolio.projects.designerPortfolio.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModal(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-500" />
                <h3 className="text-sm font-bold text-neutral-950 dark:text-white">
                  {lang === "en"
                    ? "Concept Preview: Creative & Designer Portfolio Website"
                    : "Preview Konsep: Website Portofolio Kreatif & Desainer"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-white rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-700 transition-colors"
                aria-label={t.portfolio.close}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content Preview */}
            <div className="p-6 overflow-y-auto space-y-6 text-neutral-900 dark:text-neutral-100">
              {/* Simulated Hero */}
              <div className="p-6 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-2xl border border-indigo-100 dark:border-indigo-950">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center text-base shadow-sm">
                    AW
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-950 dark:text-white">
                      Arga Wicaksono
                    </h4>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      UI/UX Designer · Brand Strategist · Visual Thinker
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
                  {lang === "en"
                    ? "“Helping startups and modern businesses create intuitive digital experiences and visual systems that leave a lasting impression.”"
                    : "“Membantu startup dan bisnis global menciptakan pengalaman digital intuitif dan sistem visual yang meninggalkan kesan mendalam.”"}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 bg-white dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 font-medium">
                    📍 Jakarta / Remote
                  </span>
                  <span className="px-2.5 py-1 bg-white dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 font-medium">
                    ⚡ Open for Freelance & Full-time
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-md border border-emerald-200 dark:border-emerald-900 font-semibold">
                    ● {lang === "en" ? "Available this month" : "Tersedia bulan ini"}
                  </span>
                </div>
              </div>

              {/* Simulated Project Showcase Grid */}
              <div>
                <h5 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-3">
                  {lang === "en" ? "Featured Case Studies" : "Studi Kasus Pilihan"}
                </h5>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl border border-neutral-200/70 dark:border-neutral-700">
                    <span className="text-[10px] text-indigo-500 font-bold uppercase tracking-wide">Mobile Banking App</span>
                    <h6 className="text-sm font-bold text-neutral-900 dark:text-white mt-1 mb-1.5">
                      NexaPay — Redesign Pengalaman Transfer
                    </h6>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {lang === "en"
                        ? "Streamlined 3-step money transfer flow resulting in a 28% drop-off rate reduction in user testing."
                        : "Penyederhanaan alur transfer uang 3-langkah dengan penurunan drop-off rate sebesar 28% pada user test."}
                    </p>
                    <div className="mt-3 flex gap-1.5 text-[10px] text-neutral-500">
                      <span className="bg-white dark:bg-neutral-700 px-2 py-0.5 rounded">Figma</span>
                      <span className="bg-white dark:bg-neutral-700 px-2 py-0.5 rounded">Design System</span>
                      <span className="bg-white dark:bg-neutral-700 px-2 py-0.5 rounded">Usability Test</span>
                    </div>
                  </div>

                  <div className="p-4 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl border border-neutral-200/70 dark:border-neutral-700">
                    <span className="text-[10px] text-purple-500 font-bold uppercase tracking-wide">Brand Identity & Web</span>
                    <h6 className="text-sm font-bold text-neutral-900 dark:text-white mt-1 mb-1.5">
                      KoffieHaus — Digital Brand Direction
                    </h6>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {lang === "en"
                        ? "Visual identity design for a modern cafe spanning physical packaging, interactive menu website, and social media branding."
                        : "Perancangan identitas visual kafe modern mulai dari packaging fisik, website menu interaktif, hingga visual social media."}
                    </p>
                    <div className="mt-3 flex gap-1.5 text-[10px] text-neutral-500">
                      <span className="bg-white dark:bg-neutral-700 px-2 py-0.5 rounded">Branding</span>
                      <span className="bg-white dark:bg-neutral-700 px-2 py-0.5 rounded">Web Design</span>
                      <span className="bg-white dark:bg-neutral-700 px-2 py-0.5 rounded">Art Direction</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Experience */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-50 dark:bg-neutral-800/40 rounded-xl">
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    {lang === "en" ? "Core Skills & Tools" : "Keahlian & Tools"}
                  </h5>
                  <div className="flex flex-wrap gap-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                    {["UI/UX Design", "Wireframing", "Figma", "Design Tokens", "Micro-copy", "Framer", "Prototyping", "Design QA"].map((s) => (
                      <span key={s} className="px-2 py-1 bg-white dark:bg-neutral-700 rounded-md text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-neutral-50 dark:bg-neutral-800/40 rounded-xl">
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    {lang === "en" ? "Experience Timeline" : "Riwayat Pengalaman"}
                  </h5>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-neutral-900 dark:text-white block">Senior Product Designer</span>
                      <span className="text-neutral-400 text-[11px]">
                        {lang === "en" ? "PT Inovasi Digital Nusantara · 2023 – Present" : "PT Inovasi Digital Nusantara · 2023 – Sekarang"}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-900 dark:text-white block">UI/UX Designer Freelance</span>
                      <span className="text-neutral-400 text-[11px]">
                        {lang === "en" ? "Multiple Global Clients · 2021 – 2023" : "Multiple Global Clients · 2021 – 2023"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-neutral-500">
                {t.portfolio.interested}
              </p>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-700 rounded-xl transition-colors"
                >
                  {t.portfolio.close}
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveModal(null)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors"
                >
                  {t.portfolio.buildMine}
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
