"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function InView({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function CTA() {
  return (
    /* Pakai warna literal supaya konsisten di light & dark mode —
       #1a1714 adalah neutral-900 dari design token (warm near-black) */
    <section aria-label="Call to action" style={{ backgroundColor: "#1a1714" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-28 md:py-36">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <InView className="lg:col-span-8">
            <p
              className="editorial-label mb-6"
              style={{ color: "var(--accent)" }}
            >
              Let&apos;s Work Together
            </p>
            <h2
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.97] tracking-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                /* warm ivory — kontras tinggi di atas #1a1714 */
                color: "#f8f5f0",
              }}
            >
              Have a project
              <br />
              <span className="italic font-medium">in mind?</span>
              <br />
              Let&apos;s make it
              <br />
              happen.
            </h2>
          </InView>
          <InView delay={0.2} className="lg:col-span-4 flex flex-col gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-5 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "#f8f5f0",
                color: "#1a1714",
              }}
            >
              Start a Project
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-5 text-sm font-medium border transition-colors"
              style={{
                borderColor: "rgba(248,245,240,0.2)",
                color: "rgba(248,245,240,0.65)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(248,245,240,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#f8f5f0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(248,245,240,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(248,245,240,0.65)";
              }}
            >
              View Pricing
            </a>
          </InView>
        </div>
      </div>
    </section>
  );
}
