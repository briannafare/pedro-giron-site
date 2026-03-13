"use client";

import { useLang } from "@/lib/i18n";
import { ReactNode } from "react";

interface Props {
  overline: { en: string; es: string };
  headline: { en: string; es: string };
  headline_accent: { en: string; es: string };
  sub: { en: string; es: string };
  cta?: { en: string; es: string };
  illustration?: ReactNode;
  accentColor?: "fuego" | "oro" | "calma";
}

export default function InnerHero({ overline, headline, headline_accent, sub, illustration, accentColor = "fuego" }: Props) {
  const { t } = useLang();
  const glowColors: Record<string, string> = {
    fuego: "bg-fuego/[0.06]",
    oro: "bg-oro/[0.06]",
    calma: "bg-calma/[0.06]",
  };
  const glowColors2: Record<string, string> = {
    fuego: "bg-oro/[0.04]",
    oro: "bg-calma/[0.04]",
    calma: "bg-fuego/[0.04]",
  };

  return (
    <section className="bg-midnight pt-28 pb-14 md:pt-36 md:pb-20 relative overflow-hidden">
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay z-[1]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />
      {/* Ambient glows */}
      <div className={`absolute top-[-60px] right-[-40px] w-[280px] h-[280px] ${glowColors[accentColor]} rounded-full blur-[100px]`} />
      <div className={`absolute bottom-[-30px] left-[15%] w-[220px] h-[220px] ${glowColors2[accentColor]} rounded-full blur-[80px]`} />
      {/* Illustration background — right side, clipped */}
      {illustration && (
        <div className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[45%] opacity-25 md:opacity-35 pointer-events-none z-0">
          {illustration}
        </div>
      )}
      {/* Gradient fade over illustration for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/95 to-midnight/50 z-[2] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-oro mb-4">
            {t(overline.en, overline.es)}
          </div>
          <h1 className="mb-2">
            <span className="block font-display text-[clamp(36px,6vw,68px)] font-extrabold text-white leading-[0.92] tracking-tighter">
              {t(headline.en, headline.es)}
            </span>
            <span className="block font-accent text-[clamp(34px,5.5vw,64px)] italic text-fuego leading-[1.1] mt-1">
              {t(headline_accent.en, headline_accent.es)}
            </span>
          </h1>
          <p className="text-white/35 text-[15px] leading-relaxed max-w-lg mt-5">
            {t(sub.en, sub.es)}
          </p>
        </div>
      </div>
    </section>
  );
}
