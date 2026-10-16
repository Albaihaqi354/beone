"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useSyncExternalStore,
} from "react";
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

function getStoredLang(): Lang {
  if (typeof window === "undefined") return "id";
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
  const currentLang = useSyncExternalStore<Lang>(
    subscribe,
    getStoredLang,
    () => "id"
  );

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event("beone-lang-change"));
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
