"use client";

import { useLang } from "@/lib/i18n";
import { useEffect, useState } from "react";

interface Props {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}

export default function LangToggle({ size = "md", variant = "dark" }: Props) {
  const { lang, toggle } = useLang();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Subtle entrance pulse on first render to draw attention
  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const sizes = {
    sm: { text: "text-[10px]", px: "px-3", py: "py-1.5", gap: "gap-0" },
    md: { text: "text-[12px]", px: "px-4", py: "py-2", gap: "gap-0" },
    lg: { text: "text-[14px]", px: "px-5", py: "py-2.5", gap: "gap-0" },
  };

  const s = sizes[size];

  const isDark = variant === "dark";
  const activeBg = "bg-fuego";
  const activeText = "text-white";
  const inactiveBg = isDark ? "bg-white/[0.04]" : "bg-midnight/[0.04]";
  const inactiveText = isDark ? "text-white/30" : "text-midnight/30";
  const borderColor = isDark ? "border-white/[0.08]" : "border-midnight/[0.08]";

  return (
    <button
      onClick={toggle}
      className={`
        relative inline-flex items-center ${s.gap} rounded-full border ${borderColor}
        overflow-hidden transition-all duration-300
        ${!hasAnimated ? "animate-pulse" : ""}
      `}
      aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
    >
      <span
        className={`
          ${s.text} font-semibold tracking-wide ${s.px} ${s.py}
          transition-all duration-300 relative z-10
          ${lang === "en" ? `${activeBg} ${activeText}` : `${inactiveBg} ${inactiveText} hover:${isDark ? "text-white/50" : "text-midnight/50"}`}
        `}
      >
        EN
      </span>
      <span
        className={`
          ${s.text} font-semibold tracking-wide ${s.px} ${s.py}
          transition-all duration-300 relative z-10
          ${lang === "es" ? `${activeBg} ${activeText}` : `${inactiveBg} ${inactiveText} hover:${isDark ? "text-white/50" : "text-midnight/50"}`}
        `}
      >
        ES
      </span>
    </button>
  );
}
