"use client";

import { useLang } from "@/lib/i18n";

interface Props {
  overline: { en: string; es: string };
  headline: { en: string; es: string };
  headline_accent: { en: string; es: string };
  sub: { en: string; es: string };
}

export default function InnerHero({ overline, headline, headline_accent, sub }: Props) {
  const { t } = useLang();
  return (
    <section className="bg-midnight pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      <div className="absolute top-[-80px] right-[-50px] w-[300px] h-[300px] bg-fuego/[0.06] rounded-full blur-[100px]" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-oro mb-4">
            {t(overline.en, overline.es)}
          </div>
          <h1 className="mb-2">
            <span className="block font-display text-[clamp(34px,5.5vw,64px)] font-extrabold text-white leading-[0.95] tracking-tighter">
              {t(headline.en, headline.es)}
            </span>
            <span className="block font-accent text-[clamp(32px,5vw,60px)] italic text-fuego leading-[1.1]">
              {t(headline_accent.en, headline_accent.es)}
            </span>
          </h1>
          <p className="text-white/40 text-[15px] leading-relaxed max-w-lg mt-5">
            {t(sub.en, sub.es)}
          </p>
        </div>
      </div>
    </section>
  );
}
