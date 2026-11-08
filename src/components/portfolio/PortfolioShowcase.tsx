"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

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
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  isConceptual: boolean;
  note: string;
  highlights: string[];
  accentColor: string;
  mockLabel: string;
}

const projects: Project[] = [
  {
    id: "finvera",
    index: "01",
    title: "Finvera",
    category: "Financial & Expense Tracker App",
    description:
      "A modern personal finance management app to track income and expenses in a structured way, with automatic balance calculation and transaction summary visualization.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://finvera-app.vercel.app/",
    isConceptual: false,
    note: "A functional personal app project with a clean, fast interface.",
    highlights: [
      "Quick income & expense transaction recording",
      "Dynamic balance calculation with no lag",
      "Responsive interface across smartphones and laptops",
    ],
    accentColor: "#2D7D6E",
    mockLabel: "Finance App",
  },
  {
    id: "tickitz",
    index: "02",
    title: "Tickitz",
    category: "Cinema Ticket Booking Platform",
    description:
      "An online cinema ticket booking platform featuring currently showing movies, structured showtime schedules, an interactive seat selection flow, and order checkout simulation.",
    techStack: ["Next.js", "React", "Tailwind CSS", "REST API"],
    demoUrl: "https://tickitz-liard.vercel.app/",
    isConceptual: false,
    note: "An interactive cinema ticket booking web platform project.",
    highlights: [
      "Explore movie schedules and theater locations",
      "Interactive theater seat selection grid",
      "Intuitive booking flow from seat selection to invoice",
    ],
    accentColor: "#7C3AED",
    mockLabel: "Booking Platform",
  },
  {
    id: "designer-portfolio-concept",
    index: "03",
    title: "Arga Wicaksono",
    category: "Personal Portfolio Website (Conceptual)",
    description:
      "An interactive portfolio website concept for graphic and UI/UX designers: visual project showcase gallery, design skill highlights, experience history, and direct contact buttons.",
    techStack: ["Modern Layout", "Framer Motion", "Tailwind CSS", "Responsive"],
    demoUrl: undefined,
    isConceptual: true,
    note: "A ready-to-adapt portfolio concept template for designers, creators, and professionals.",
    highlights: [
      "Hero section focusing on personal statement & design specialties",
      "Curated visual project grid with case study breakdowns",
      "About, Experience, Tools sections & Direct WhatsApp CTA",
    ],
    accentColor: "#C8A96E",
    mockLabel: "Portfolio Concept",
  },
];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors duration-300 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View project: ${project.title}`}
    >
      {/* Visual area */}
      <div
        className="relative h-64 sm:h-72 overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: `${project.accentColor}12` }}
      >
        {/* Index number — large background */}
        <span
          className="absolute top-4 right-5 font-display text-[7rem] font-bold leading-none select-none pointer-events-none opacity-[0.06]"
          style={{
            color: project.accentColor,
            fontFamily: "var(--font-playfair)",
          }}
          aria-hidden="true"
        >
          {project.index}
        </span>

        {/* Mock visual */}
        <div className="relative z-10 flex flex-col gap-3 w-48">
          <div
            className="h-2 rounded-sm"
            style={{ backgroundColor: `${project.accentColor}40` }}
          />
          <div
            className="h-2 rounded-sm w-3/4"
            style={{ backgroundColor: `${project.accentColor}30` }}
          />
          <div className="mt-2 flex gap-2">
            <div
              className="h-16 w-1/2 rounded-sm"
              style={{ backgroundColor: `${project.accentColor}20` }}
            />
            <div
              className="h-16 w-1/2 rounded-sm"
              style={{ backgroundColor: `${project.accentColor}15` }}
            />
          </div>
          <div
            className="h-1.5 rounded-sm w-2/3"
            style={{ backgroundColor: `${project.accentColor}25` }}
          />
        </div>

        {/* Tag */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: project.isConceptual ? "#C8A96E" : "#2D7D6E" }}
          />
          <span className="editorial-label text-[var(--ink-muted)]">
            {project.isConceptual ? "Concept" : "Live"}
          </span>
        </div>

        {/* Arrow indicator on hover */}
        <div className="absolute bottom-4 right-4 w-9 h-9 border border-[var(--border)] flex items-center justify-center bg-[var(--surface)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight size={14} className="text-[var(--ink)]" aria-hidden="true" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="editorial-label text-[var(--ink-muted)] mb-2">
              {project.category}
            </p>
            <h3
              className="font-display text-2xl font-bold text-[var(--ink)] group-hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {project.title}
            </h3>
          </div>
          <span className="editorial-label text-[var(--border-strong)] mt-1 shrink-0">
            {project.index}
          </span>
        </div>

        <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-medium border border-[var(--border)] text-[var(--ink-muted)]"
            >
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

  // Lock scroll when modal open
  const openModal = (project: Project) => {
    setActiveProject(project);
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
      className="section-padding bg-[var(--surface)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top divider */}
        <div className="h-px bg-[var(--border)] mb-16 md:mb-24" />

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 mb-16 md:mb-20">
          <InView className="lg:col-span-5">
            <p className="editorial-label mb-6">Selected Works</p>
            <h2
              id="portfolio-heading"
              className="font-display text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-[var(--ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Real projects,
              <br />
              <span className="italic font-medium">real results.</span>
            </h2>
          </InView>
          <InView delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p className="text-base text-[var(--ink-soft)] leading-relaxed">
              A selection of live applications and portfolio concepts we have
              built. Every project is documented honestly — no invented
              clients, no fabricated screenshots.
            </p>
          </InView>
        </div>

        {/* Project grid — asymmetric: first card full-width on large, then 2-col */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Card 1 — spans 7 cols */}
          <div className="lg:col-span-7">
            <ProjectCard project={projects[0]} onClick={() => openModal(projects[0])} />
          </div>
          {/* Card 2 — spans 5 cols */}
          <div className="lg:col-span-5">
            <ProjectCard project={projects[1]} onClick={() => openModal(projects[1])} />
          </div>
          {/* Card 3 — spans full then 6 */}
          <div className="lg:col-span-6">
            <ProjectCard project={projects[2]} onClick={() => openModal(projects[2])} />
          </div>
          {/* CTA panel — spans 6 */}
          <InView className="lg:col-span-6" delay={0.2}>
            <div className="h-full border border-[var(--border)] bg-[var(--surface-2)] flex flex-col justify-between p-8 sm:p-10 min-h-[300px]">
              <div>
                <p className="editorial-label text-[var(--accent)] mb-6">
                  Your project, next.
                </p>
                <h3
                  className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] text-[var(--ink)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Want a portfolio
                  <br />
                  that truly{" "}
                  <span className="italic font-medium">represents</span>
                  <br />
                  you?
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-[var(--background)] bg-[var(--ink)] hover:opacity-80 transition-opacity"
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
          </InView>
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
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/50 backdrop-blur-sm"
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
                      backgroundColor: activeProject.isConceptual ? "#C8A96E" : "#2D7D6E",
                    }}
                  />
                  <h3
                    className="font-display text-lg font-bold text-[var(--ink)]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal body */}
              <div className="px-7 py-7 flex-1 space-y-7">
                {/* Category + label */}
                <div>
                  <p className="editorial-label text-[var(--ink-muted)] mb-1">
                    {activeProject.category}
                  </p>
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <p className="editorial-label text-[var(--accent)] mb-4">
                    Highlights
                  </p>
                  <ul className="space-y-2.5">
                    {activeProject.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-[var(--ink-soft)]">
                        <span
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: activeProject.accentColor }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <p className="editorial-label text-[var(--accent)] mb-4">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium border border-[var(--border)] text-[var(--ink-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div className="border-t border-[var(--border)] pt-5">
                  <p className="text-xs text-[var(--ink-muted)] italic">
                    {activeProject.note}
                  </p>
                </div>
              </div>

              {/* Modal footer */}
              <div className="px-7 py-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {activeProject.demoUrl ? (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[var(--background)] bg-[var(--ink)] hover:opacity-80 transition-opacity"
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
