"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  isConceptual: boolean;
  note: string;
  highlights: string[];
  /* CSS color token name or hsl — stays within warm palette */
  hue: string; // used for the tinted preview band
}

const projects: Project[] = [
  {
    id: "finvera",
    index: "01",
    title: "Finvera",
    subtitle: "Finance Tracker",
    category: "Financial & Expense Tracker App",
    description:
      "A modern personal finance management app to track income and expenses with automatic balance calculation and transaction summary visualization.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://finvera-app.vercel.app/",
    isConceptual: false,
    note: "A functional personal app project with a clean, fast interface.",
    highlights: [
      "Quick income & expense transaction recording",
      "Dynamic balance calculation with no lag",
      "Responsive interface across smartphones and laptops",
    ],
    hue: "160",
  },
  {
    id: "tickitz",
    index: "02",
    title: "Tickitz",
    subtitle: "Cinema Booking",
    category: "Cinema Ticket Booking Platform",
    description:
      "An online cinema ticket booking platform with structured showtime schedules, an interactive seat-selection flow, and order checkout simulation.",
    techStack: ["Next.js", "React", "Tailwind CSS", "REST API"],
    demoUrl: "https://tickitz-liard.vercel.app/",
    isConceptual: false,
    note: "An interactive cinema ticket booking web platform project.",
    highlights: [
      "Explore movie schedules and theater locations",
      "Interactive theater seat selection grid",
      "Intuitive booking flow from seat selection to invoice",
    ],
    hue: "250",
  },
  {
    id: "designer-portfolio-concept",
    index: "03",
    title: "Arga Wicaksono",
    subtitle: "UI/UX Designer Portfolio",
    category: "Personal Portfolio Website — Conceptual",
    description:
      "An interactive portfolio website concept for graphic and UI/UX designers: visual project showcase, skill highlights, experience history, and direct contact.",
    techStack: ["Modern Layout", "Framer Motion", "Tailwind CSS", "Responsive"],
    demoUrl: undefined,
    isConceptual: true,
    note: "A ready-to-adapt portfolio concept template for designers, creators, and professionals.",
    highlights: [
      "Hero focused on personal statement & design specialties",
      "Curated visual project grid with case study breakdowns",
      "About, Experience, Tools sections & Direct WhatsApp CTA",
    ],
    hue: "36",
  },
];

/* Editorial project card — typography-led, no generic colored bars */
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group border border-[var(--border)] cursor-pointer flex flex-col h-full"
      style={{
        borderColor: hovered ? "var(--border-strong)" : undefined,
        transition: "border-color 0.25s ease",
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View project: ${project.title}`}
    >
      {/* Preview band — typographic, not decorative bars */}
      <div
        className="relative overflow-hidden flex flex-col justify-between p-8 h-56 sm:h-64"
        style={{ backgroundColor: `hsl(${project.hue} 30% 94%)` }}
      >
        {/* Oversized index number as texture */}
        <span
          className="absolute -bottom-4 -right-3 font-display text-[9rem] font-bold leading-none select-none pointer-events-none"
          style={{
            color: `hsl(${project.hue} 25% 75%)`,
            fontFamily: "var(--font-playfair)",
          }}
          aria-hidden="true"
        >
          {project.index}
        </span>

        {/* Status pill */}
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: project.isConceptual
                ? "var(--accent)"
                : "var(--status-live)",
            }}
          />
          <span className="editorial-label" style={{ color: `hsl(${project.hue} 20% 42%)` }}>
            {project.isConceptual ? "Concept" : "Live"}
          </span>
        </div>

        {/* Title + subtitle in the preview itself */}
        <div>
          <p
            className="editorial-label mb-1"
            style={{ color: `hsl(${project.hue} 20% 50%)` }}
          >
            {project.subtitle}
          </p>
          <p
            className="font-display text-3xl font-bold leading-tight"
            style={{
              color: `hsl(${project.hue} 30% 22%)`,
              fontFamily: "var(--font-playfair)",
            }}
          >
            {project.title}
          </p>
        </div>

        {/* Hover arrow */}
        <motion.div
          className="absolute bottom-4 right-4 w-9 h-9 border flex items-center justify-center"
          style={{ borderColor: `hsl(${project.hue} 20% 70%)` }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          <ArrowUpRight size={14} style={{ color: `hsl(${project.hue} 20% 35%)` }} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <p className="editorial-label text-[var(--ink-muted)] mb-2">{project.category}</p>
        <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-5 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-[11px] font-medium border border-[var(--border)] text-[var(--ink-muted)]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openModal = (p: Project) => {
    setActiveProject(p);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "";
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="section-padding bg-[var(--background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Header — full-width centered rule style */}
        <AnimateOnScroll>
          <p className="editorial-label mb-6">Selected Works</p>
        </AnimateOnScroll>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 mb-16 md:mb-20">
          <AnimateOnScroll delay={0.1} className="lg:col-span-6">
            <h2
              id="portfolio-heading"
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-[var(--ink)]"
            >
              Real projects,
              <br />
              <span className="italic font-medium">real results.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} className="lg:col-span-5 lg:col-start-8 lg:pt-10">
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              A selection of live applications and portfolio concepts we have
              built — documented honestly, with no invented clients or
              fabricated screenshots.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <ProjectCard project={projects[0]} onClick={() => openModal(projects[0])} />
          </div>
          <div className="lg:col-span-5">
            <ProjectCard project={projects[1]} onClick={() => openModal(projects[1])} />
          </div>
          <div className="lg:col-span-5">
            <ProjectCard project={projects[2]} onClick={() => openModal(projects[2])} />
          </div>

          {/* CTA panel */}
          <AnimateOnScroll className="lg:col-span-7" delay={0.15}>
            <div className="h-full border border-[var(--border)] bg-[var(--surface-2)] flex flex-col justify-between p-8 sm:p-10 min-h-[280px]">
              <div>
                <p className="editorial-label text-[var(--accent)] mb-6">Your project, next.</p>
                <h3 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] text-[var(--ink)]">
                  Want a site that truly
                  <br />
                  <span className="italic font-medium">represents you?</span>
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-[var(--on-dark)] bg-[var(--surface-dark)] hover:opacity-80 transition-opacity"
                >
                  Start a Consultation
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-[var(--ink)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            style={{ backgroundColor: "var(--overlay)" }}
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-[var(--surface)] border border-[var(--border)] overflow-y-auto flex flex-col"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-7 py-5 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: activeProject.isConceptual
                        ? "var(--accent)"
                        : "var(--status-live)",
                    }}
                  />
                  <h3 className="font-display text-lg font-bold text-[var(--ink)]">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="px-7 py-7 flex-1 space-y-7">
                <div>
                  <p className="editorial-label text-[var(--ink-muted)] mb-1">{activeProject.category}</p>
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{activeProject.description}</p>
                </div>
                <div>
                  <p className="editorial-label text-[var(--accent)] mb-4">Highlights</p>
                  <ul className="space-y-2.5">
                    {activeProject.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-[var(--ink-soft)]">
                        <span className="w-1 h-1 rounded-full mt-2 shrink-0 bg-[var(--accent)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="editorial-label text-[var(--accent)] mb-4">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium border border-[var(--border)] text-[var(--ink-muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-[var(--border)] pt-5">
                  <p className="text-xs text-[var(--ink-muted)] italic">{activeProject.note}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-7 py-5 border-t border-[var(--border)] flex flex-col sm:flex-row gap-3">
                {activeProject.demoUrl ? (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[var(--on-dark)] bg-[var(--surface-dark)] hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    View Live Project
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center px-5 py-3 text-sm text-[var(--ink-muted)] border border-[var(--border)]">
                    Concept — No Live Demo
                  </span>
                )}
                <a
                  href="#contact"
                  onClick={closeModal}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[var(--ink)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors"
                >
                  Build Mine
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
