"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import ScrollReveal from "@/components/ScrollReveal";
import { StarsConstellation, ValleyScene } from "@/components/Illustrations";
import { TESTIMONIALS, SITE } from "@/lib/data";
import { ArrowRight, Phone, Star } from "lucide-react";

export default function TestimonialsPage() {
  const { t } = useLang();

  return (
    <>
      <Nav />
      <InnerHero
        overline={{ en: "Reviews", es: "Reseñas" }}
        headline={{ en: "18 FIVE-STARS.", es: "18 CINCO ESTRELLAS." }}
        headline_accent={{ en: "Zero exceptions.", es: "Sin excepciones." }}
        sub={{ en: "Real reviews from real clients. No edits, no cherry-picking. This is what working with Pedro actually looks like.", es: "Reseñas reales de clientes reales. Sin ediciones, sin selección. Así es realmente trabajar con Pedro." }}
        illustration={<StarsConstellation className="w-full h-full" />}
        accentColor="oro"
      />

      {/* Rating summary bar */}
      <section className="bg-midnight py-8 md:py-10">
        <div className="max-w-3xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-oro text-[24px] md:text-[28px] font-extrabold">{SITE.google.rating}</span>
            <div className="flex gap-0.5">{Array(5).fill(0).map((_,i) => <Star key={i} size={16} className="text-oro fill-oro" />)}</div>
          </div>
          <div className="text-white/60 text-[13px]">{t(`${SITE.google.count} reviews on Google`, `${SITE.google.count} reseñas en Google`)}</div>
          <div className="text-white/60 text-[13px]">100% {t("recommend on Facebook", "recomiendan en Facebook")}</div>
        </div>
      </section>

      {/* All reviews */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TESTIMONIALS.map((review, i) => {
              const avatarColors = ["bg-fuego/10 text-fuego", "bg-oro/10 text-oro", "bg-calma/10 text-calma", "bg-fuego/10 text-fuego"];
              const borderAccents = ["hover:border-fuego/15", "hover:border-oro/15", "hover:border-calma/15", "hover:border-fuego/15"];
              const isFirst = i === 0;
              return (
                <ScrollReveal key={i} delay={i * 0.08} className={isFirst ? "md:col-span-2" : ""}>
                  <div className={`bg-white rounded-2xl ${isFirst ? "p-8" : "p-6"} border border-haze ${borderAccents[i % 4]} transition-colors h-full relative overflow-hidden`}>
                    {isFirst && <div className="absolute top-3 right-5 text-midnight/[0.03] font-accent text-[80px] leading-none select-none">&ldquo;</div>}
                    <div className="text-oro text-[12px] mb-3">★★★★★</div>
                    <p className={`font-accent italic text-midnight ${isFirst ? "text-[17px] md:text-[19px]" : "text-[14px]"} leading-relaxed relative z-10`}>&ldquo;{review.text}&rdquo;</p>
                    <div className="mt-5 pt-4 border-t border-haze flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full ${avatarColors[i % 4]} flex items-center justify-center font-bold text-[12px]`}>{review.name[0]}</div>
                      <div>
                        <div className="font-display text-[13px] font-bold text-midnight">{review.name}</div>
                        <div className="text-calma text-[11px]">{t(review.context.en, review.context.es)}</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-midnight py-16 md:py-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 opacity-15"><ValleyScene className="w-full" variant="dark" /></div>
        <div className="absolute top-[-40px] right-[-30px] w-[180px] h-[180px] bg-oro/[0.06] rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-extrabold text-white tracking-tight text-center md:text-left">
            {t("Ready to be the next ", "¿Listo para ser la próxima ")}<span className="font-accent italic text-oro">{t("success story?", "historia de éxito?")}</span>
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-7 py-3.5 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(214,44,38,0.2)]">{t("Book a Free Call", "Agendar Llamada Gratis")}<ArrowRight size={15} /></Link>
            <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="text-calma/40 border border-calma/15 text-[13px] rounded-lg px-5 py-3.5 hover:border-calma/30 transition-colors inline-flex items-center gap-2"><Phone size={14} />{SITE.phone}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
