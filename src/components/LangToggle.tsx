"use client";

import { useLang } from "@/lib/i18n";
import { useEffect, useState } from "react";

interface Props {
  size?: "nav" | "hero";
}

export default function LangToggle({ size = "nav" }: Props) {
  const { lang, toggle } = useLang();
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setPulse(true), 800);
    const t2 = setTimeout(() => setPulse(false), 2400);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  if (size === "hero") {
    return (
      <button
        onClick={toggle}
        aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
        className={`
          group relative inline-flex items-center rounded-full
          border-2 border-oro/30 hover:border-oro/60
          transition-all duration-500 overflow-hidden
          ${pulse ? "ring-2 ring-oro/20 ring-offset-2 ring-offset-midnight" : ""}
        `}
      >
        <span
          className={`
            relative z-10 text-[14px] font-bold tracking-wide px-5 py-2.5
            transition-all duration-300
            ${lang === "en"
              ? "text-midnight bg-oro"
              : "text-white/40 group-hover:text-white/60"
            }
          `}
        >
          EN
        </span>
        <span
          className={`
            relative z-10 text-[14px] font-bold tracking-wide px-5 py-2.5
            transition-all duration-300
            ${lang === "es"
              ? "text-midnight bg-oro"
              : "text-white/40 group-hover:text-white/60"
            }
          `}
        >
          ES
        </span>
      </button>
    );
  }

  // Nav size — smaller, still visible
  return (
    <button
      onClick={toggle}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      className="group relative inline-flex items-center rounded-full border border-oro/25 hover:border-oro/50 transition-all duration-300 overflow-hidden"
    >
      <span
        className={`
          text-[11px] font-bold tracking-wide px-3.5 py-1.5
          transition-all duration-300
          ${lang === "en"
            ? "text-midnight bg-oro"
            : "text-white/30 group-hover:text-white/50"
          }
        `}
      >
        EN
      </span>
      <span
        className={`
          text-[11px] font-bold tracking-wide px-3.5 py-1.5
          transition-all duration-300
          ${lang === "es"
            ? "text-midnight bg-oro"
            : "text-white/30 group-hover:text-white/50"
          }
        `}
      >
        ES
      </span>
    </button>
  );
}
