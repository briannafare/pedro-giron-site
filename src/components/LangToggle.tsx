"use client";

import { useLang } from "@/lib/i18n";
import { useEffect, useState } from "react";

interface Props {
  size?: "nav" | "hero";
}

export default function LangToggle({ size = "nav" }: Props) {
  const { lang, toggle } = useLang();
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPulse(true), 600);
    const t2 = setTimeout(() => setPulse(false), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (size === "hero") {
    return (
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={toggle}
          aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
          className={`
            group relative inline-flex items-center rounded-full
            border-2 transition-all duration-500 overflow-hidden
            ${pulse
              ? "border-oro shadow-[0_0_20px_rgba(212,165,32,0.2)]"
              : "border-oro/30 hover:border-oro/70"
            }
          `}
        >
          <span className={`
            text-[15px] font-bold tracking-wider px-6 py-3
            transition-all duration-400
            ${lang === "en" ? "bg-oro text-midnight" : "text-white/30 group-hover:text-white/50"}
          `}>
            ENGLISH
          </span>
          <span className={`
            text-[15px] font-bold tracking-wider px-6 py-3
            transition-all duration-400
            ${lang === "es" ? "bg-oro text-midnight" : "text-white/30 group-hover:text-white/50"}
          `}>
            ESPAÑOL
          </span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      className="group inline-flex items-center rounded-full border border-calma/30 hover:border-oro/50 transition-all duration-300 overflow-hidden"
    >
      <span className={`
        text-[11px] font-bold tracking-wide px-3.5 py-1.5
        transition-all duration-300
        ${lang === "en" ? "bg-oro text-midnight" : "text-white/30 group-hover:text-white/50"}
      `}>EN</span>
      <span className={`
        text-[11px] font-bold tracking-wide px-3.5 py-1.5
        transition-all duration-300
        ${lang === "es" ? "bg-oro text-midnight" : "text-white/30 group-hover:text-white/50"}
      `}>ES</span>
    </button>
  );
}
