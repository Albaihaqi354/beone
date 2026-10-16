"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language";

const SCROLL_THRESHOLD = 350;

function subscribe(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getSnapshot(): boolean {
  return typeof window !== "undefined" && window.scrollY > SCROLL_THRESHOLD;
}

function getServerSnapshot(): boolean {
  return false;
}

export default function ScrollToTop() {
  const { t } = useLanguage();
  const isVisible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      aria-label={t.nav.scrollToTop}
      title={t.nav.scrollToTop}
      className={`fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      } bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-200 border-neutral-200/90 dark:border-neutral-800 shadow-neutral-950/10 dark:shadow-black/60 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:-translate-y-1 active:translate-y-0 active:scale-95`}
    >
      <ArrowUp className="w-5 h-5 stroke-[2.2] transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
