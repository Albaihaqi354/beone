"use client";

import { useLanguage, type Lang } from "@/lib/language";
import { usePathname } from "next/navigation";

const options: { value: Lang; label: string }[] = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

interface Props {
  className?: string;
}

export default function LanguageSwitcher({ className = "" }: Props) {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={t.nav.langToggle}
      className={`inline-flex items-center border border-[var(--border)] overflow-hidden text-xs font-bold ${className}`}
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
            className={`px-2.5 py-1.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-inset ${
              isActive
                ? "bg-[var(--surface-dark)] text-[var(--on-dark)]"
                : "text-[var(--ink-muted)] hover:text-[var(--ink)] bg-transparent"
            } ${i < options.length - 1 ? "border-r border-[var(--border)]" : ""}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
