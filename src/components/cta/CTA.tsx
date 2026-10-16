import { ArrowRight, MessageCircle } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { whatsappUrl } from "@/lib/config";

export default function CTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="section-padding bg-neutral-950 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <p className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-4">
            Mulai Sekarang
          </p>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Your Work Deserves
            <br />
            <span className="gradient-text">to Be Seen.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Mulai bangun kehadiran digital Anda hari ini. Tampilkan karya, bangun personal branding, atau kembangkan bisnis Anda bersama BeOne.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-400 rounded-xl transition-colors duration-150 shadow-lg shadow-indigo-900/30 group"
              aria-label="Start a project — go to contact form"
            >
              Start a Project
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors duration-150"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
