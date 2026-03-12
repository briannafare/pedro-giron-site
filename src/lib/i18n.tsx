"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "en" | "es";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: (en: string, es: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggle: () => {},
  t: (en) => en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  }, []);

  const t = useCallback(
    (en: string, es: string) => (lang === "en" ? en : es),
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
