"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { useLanguage } from "@/lib/language";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-[var(--surface)] relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Two-column intro */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <AnimateOnScroll>
              <p className="editorial-label mb-8">{lang === "id" ? "Tentang BeOne" : "About BeOne"}</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                id="about-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[var(--ink)]"
              >
                {lang === "id" ? (
                  <>
                    Studio pengembangan digital
                    <br />
                    yang membangun solusi{" "}
                    <span className="italic font-medium">sesuai kebutuhan</span>
                    <br />
                    Anda.
                  </>
                ) : (
                  <>
                    An independent studio
                    <br />
                    built for{" "}
                    <span className="italic font-medium">your needs.</span>
                  </>
                )}
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-5 lg:pt-16 space-y-5">
            <AnimateOnScroll delay={0.2}>
              <p className="text-base text-[var(--ink-soft)] leading-relaxed">
                {lang === "id"
                  ? "BeOne adalah independent digital development studio. Kami membantu individu dan bisnis membangun website serta solusi digital yang dirancang sesuai kebutuhan mereka — bukan template jadi yang dipaksakan."
                  : "BeOne is an independent digital development studio. We help individuals and businesses build websites and digital solutions designed around their specific needs — not forced into a generic template."}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <p className="text-base text-[var(--ink-soft)] leading-relaxed">
                {lang === "id"
                  ? "Dari portofolio pribadi sederhana hingga aplikasi web atau e-commerce berskala penuh, setiap proyek dikerjakan dengan perhatian penuh: desain yang cermat, kode yang bersih, dan komunikasi yang jujur dari awal hingga serah terima."
                  : "From a simple personal portfolio to a full-scale web application or e-commerce platform, every project is handled with full care: thoughtful design, clean code, and honest communication from start to handover."}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:opacity-60 transition-opacity duration-200"
              >
                {lang === "id" ? "Diskusi proyek Anda" : "Discuss your project"}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Pillars */}
        <div className="h-px bg-[var(--border)] mt-20 md:mt-28 mb-16 md:mb-20" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              num: "01",
              title: lang === "id" ? "Kustom, Selalu" : "Custom, Always",
              body: lang === "id"
                ? "Setiap proyek dibangun dari nol berdasarkan tujuan Anda — tidak dipaksakan ke dalam template."
                : "Every project is built from scratch around your goals — not forced into a template.",
            },
            {
              num: "02",
              title: lang === "id" ? "Teknologi Modern" : "Modern Technology",
              body: lang === "id"
                ? "Kami membangun dengan Next.js, TypeScript, dan standar web modern — cepat, dapat diakses, dan mudah dikembangkan."
                : "We build with Next.js, TypeScript, and modern web standards — fast, accessible, and easy to maintain.",
            },
            {
              num: "03",
              title: lang === "id" ? "Proses Transparan" : "Transparent Process",
              body: lang === "id"
                ? "Scope pasti, timeline jujur, tanpa biaya tersembunyi. Anda tahu persis apa yang didapat sebelum pengerjaan dimulai."
                : "Fixed scope, honest timeline, no hidden costs. You know exactly what you're getting before work begins.",
            },
            {
              num: "04",
              title: lang === "id" ? "Kepemilikan Penuh" : "Full Ownership",
              body: lang === "id"
                ? "Anda memiliki segalanya. Serah terima source code penuh setelah pelunasan, garansi bug 30 hari pada setiap proyek."
                : "You own everything. Full source code handover after final payment, 30-day bug guarantee on every project.",
            },
          ].map(({ num, title, body }, i) => (
            <AnimateOnScroll key={num} delay={0.08 * i}>
              <div
                className={[
                  "py-8 pr-8",
                  i === 1 || i === 2 || i === 3
                    ? "border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8 sm:pr-0"
                    : "",
                  i === 2 ? "border-t lg:border-t-0 lg:border-l border-[var(--border)] lg:pl-8" : "",
                  i === 3 ? "border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-8" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="editorial-label text-[var(--accent)] mb-5 block">{num}</span>
                <h3 className="font-display text-xl font-semibold text-[var(--ink)] mb-3">{title}</h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
