"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useSyncExternalStore,
} from "react";
import { usePathname } from "next/navigation";
import { id } from "./i18n/id";
import { en } from "./i18n/en";
import type { Translations } from "./i18n/types";

export type Lang = "id" | "en";

const dictionaries: Record<Lang, Translations> = { id, en };

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "id",
  t: id,
  setLang: () => {},
});

const STORAGE_KEY = "beone-lang";

/** Determine language from URL path (server + client) */
function getLangFromPath(pathname: string | null): Lang {
  if (!pathname) return "id";
  return pathname.startsWith("/en") ? "en" : "id";
}

function getStoredLang(): Lang {
  if (typeof window === "undefined") return "id";
  // Path takes priority over stored preference
  const pathLang = getLangFromPath(window.location.pathname);
  if (pathLang !== "id") return pathLang;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") return saved;
  } catch {
    // fallback
  }
  return "id";
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("beone-lang-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("beone-lang-change", callback);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentLang = useSyncExternalStore<Lang>(
    subscribe,
    () => getStoredLang(),
    () => getLangFromPath(pathname) // SSR snapshot from path
  );

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    // Navigate to correct URL for SEO
    if (typeof window !== "undefined") {
      const newPath = next === "en" ? "/en" : "/";
      if (window.location.pathname !== newPath) {
        window.location.href = newPath;
      } else {
        window.dispatchEvent(new Event("beone-lang-change"));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = currentLang;
      document.title = dictionaries[currentLang].meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", dictionaries[currentLang].meta.description);
      }
    }
  }, [currentLang]);

  return (
    <LanguageContext.Provider
      value={{ lang: currentLang, t: dictionaries[currentLang], setLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
