"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import ScrollReveal from "@/components/ScrollReveal";
import { BuyingJourney, ValleyScene } from "@/components/Illustrations";
import { BUYING_PAGE, TESTIMONIALS, SITE } from "@/lib/data";
import { FileWarning, DollarSign, Clock, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

const PAIN_ICONS: Record<string, any> = { FileWarning, DollarSign, Clock };

export default function BuyingPage() {
  const { t } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const buyerReviews = TESTIMONIALS.filter((_, i) => i < 3);

  return (
    <>
      <Nav />
      <InnerHero
        {...BUYING_PAGE.hero}
        illustration={<BuyingJourney className="w-full h-full" />}
        accentColor="fuego"
      />

      {/* Pain points with inline visualizations */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold text-midnight tracking-tight text-center mb-14">
              {t(BUYING_PAGE.pain.headline.en, BUYING_PAGE.pain.headline.es)}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BUYING_PAGE.pain.items.map((item, i) => {
              const Icon = PAIN_ICONS[item.icon];
              const colors = [
                { bg: "bg-fuego/[0.06]", text: "text-fuego", border: "border-fuego/10" },
                { bg: "bg-oro/[0.06]", text: "text-oro", border: "border-oro/10" },
                { bg: "bg-calma/[0.06]", text: "text-calma", border: "border-calma/10" },
              ];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`bg-white rounded-2xl p-6 border ${colors[i].border} h-full hover:shadow-sm transition-shadow`}>
                    <div className={`w-11 h-11 rounded-xl ${colors[i].bg} flex items-center justify-center ${colors[i].text} mb-4`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-[17px] font-extrabold text-midnight mb-2">
                      {t(item.title.en, item.title.es)}
                    </h3>
                    <p className="text-stone text-[14px] leading-relaxed">
                      {t(item.desc.en, item.desc.es)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Journey Timeline */}
      <section className="bg-white py-16 md:py-24 border-t border-haze relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-oro mb-3">{t("The Process", "El Proceso")}</div>
              <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold text-midnight tracking-tight">
                {t(BUYING_PAGE.process.headline.en, BUYING_PAGE.process.headline.es)}
              </h2>
            </div>
          </ScrollReveal>

          {/* Visual timeline — horizontal on desktop, vertical on mobile */}
          <div className="relative">
            {/* Connecting line — desktop horizontal */}
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-fuego/20 via-oro/20 to-fuego/20" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {BUYING_PAGE.process.steps.map((step, i) => {
                const stepColors = ["bg-fuego", "bg-oro", "bg-calma", "bg-fuego"];
                const ringColors = ["ring-fuego/20", "ring-oro/20", "ring-calma/20", "ring-fuego/20"];
                return (
                  <ScrollReveal key={i} delay={i * 0.12}>
                    <div className="text-center md:text-center">
                      {/* Step circle with ring */}
                      <div className="flex md:justify-center mb-4">
                        <div className="flex items-center gap-4 md:flex-col md:gap-0">
                          <div className={`relative w-14 h-14 rounded-full ${stepColors[i]} text-white flex items-center justify-center font-display font-extrabold text-[18px] ring-4 ${ringColors[i]} shrink-0`}>
                            {i + 1}
                          </div>
                          {/* Mobile connecting line */}
                          {i < 3 && <div className="w-8 h-[2px] bg-haze md:hidden" />}
                        </div>
                      </div>
                      <h3 className="font-display text-[16px] font-extrabold text-midnight mb-2 text-left md:text-center">
                        {t(step.title.en, step.title.es)}
                      </h3>
                      <p className="text-stone text-[13px] leading-relaxed text-left md:text-center">
                        {t(step.desc.en, step.desc.es)}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Buyer testimonials */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-extrabold text-midnight tracking-tight text-center mb-10">
              {t("From buyers like you", "De compradores como tú")}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {buyerReviews.map((review, i) => {
              const avatarColors = ["bg-fuego/10 text-fuego", "bg-oro/10 text-oro", "bg-calma/10 text-calma"];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-haze h-full flex flex-col hover:border-oro/15 transition-colors">
                    <div className="text-oro text-[12px] mb-3">★★★★★</div>
                    <p className="font-accent italic text-midnight text-[14px] leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                    <div className="mt-4 pt-3 border-t border-haze flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${avatarColors[i]} flex items-center justify-center font-bold text-[11px]`}>{review.name[0]}</div>
                      <div>
                        <div className="font-display text-[12px] font-bold text-midnight">{review.name}</div>
                        <div className="text-stone text-[10px]">{t(review.context.en, review.context.es)}</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24 border-t border-haze">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(28px,3.5vw,38px)] font-extrabold text-midnight tracking-tight text-center mb-10">
              {t("Buyer Questions", "Preguntas de Compradores")}
            </h2>
          </ScrollReveal>
          <div className="space-y-2">
            {BUYING_PAGE.faq.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border border-haze rounded-xl overflow-hidden hover:border-calma/20 transition-colors">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-paper/50 transition-colors">
                    <span className="font-display text-[14px] font-bold text-midnight pr-4">{t(faq.q.en, faq.q.es)}</span>
                    <ChevronDown size={16} className={`text-calma shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-5 pb-5 text-stone text-[14px] leading-relaxed border-t border-haze pt-4">{t(faq.a.en, faq.a.es)}</div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with valley */}
      <section className="relative bg-midnight py-16 md:py-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 opacity-15"><ValleyScene className="w-full" variant="dark" /></div>
        <div className="absolute top-[-40px] right-[-30px] w-[180px] h-[180px] bg-fuego/[0.08] rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-extrabold text-white tracking-tight text-center md:text-left">
            {t("Start your ", "Comienza tu ")}<span className="font-accent italic text-fuego">{t("dream search", "búsqueda soñada")}</span>
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-7 py-3.5 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(214,44,38,0.2)]">
              {t(BUYING_PAGE.hero.cta.en, BUYING_PAGE.hero.cta.es)}<ArrowRight size={15} />
            </Link>
            <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="text-calma/40 border border-calma/15 text-[13px] rounded-lg px-5 py-3.5 hover:border-calma/30 transition-colors inline-flex items-center gap-2"><Phone size={14} />{SITE.phone}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
