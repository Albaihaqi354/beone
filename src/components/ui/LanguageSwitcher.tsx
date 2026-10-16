"use client";

import { useLanguage, type Lang } from "@/lib/language";

const options: { value: Lang; label: string }[] = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

interface Props {
  className?: string;
}

export default function LanguageSwitcher({ className = "" }: Props) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.langToggle}
      className={`inline-flex items-center rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden text-xs font-bold ${className}`}
    >
      {options.map(({ value, label }, i) => {
        const isActive = lang === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setLang(value)}
            aria-pressed={isActive}
            aria-label={
              value === "id"
                ? lang === "id"
                  ? "Bahasa Indonesia (Aktif)"
                  : "Ganti ke Bahasa Indonesia"
                : lang === "en"
                ? "English (Active)"
                : "Switch to English"
            }
            className={`px-2.5 py-1.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-inset ${
              isActive
                ? "bg-indigo-500 text-white"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-transparent"
            } ${i < options.length - 1 ? "border-r border-neutral-200 dark:border-neutral-700" : ""}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
