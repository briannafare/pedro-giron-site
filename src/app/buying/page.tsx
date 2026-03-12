"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import ScrollReveal from "@/components/ScrollReveal";
import { BUYING_PAGE, TESTIMONIALS, CTA_BAND, SITE } from "@/lib/data";
import { FileWarning, DollarSign, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

const PAIN_ICONS: Record<string, any> = { FileWarning, DollarSign, Clock };

export default function BuyingPage() {
  const { t } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const buyerReviews = TESTIMONIALS.filter((_, i) => i < 3);

  return (
    <>
      <Nav />
      <InnerHero {...BUYING_PAGE.hero} />

      {/* Pain points */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-extrabold text-midnight tracking-tight text-center mb-12">
              {t(BUYING_PAGE.pain.headline.en, BUYING_PAGE.pain.headline.es)}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BUYING_PAGE.pain.items.map((item, i) => {
              const Icon = PAIN_ICONS[item.icon];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-midnight/[0.04] h-full">
                    <div className="w-10 h-10 rounded-lg bg-fuego/[0.08] flex items-center justify-center text-fuego mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-[16px] font-extrabold text-midnight mb-2">
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

      {/* Process — "Your Dream, Step by Step" */}
      <section className="bg-white py-16 md:py-24 border-t border-midnight/[0.04]">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-oro mb-3">
                {t("The Process", "El Proceso")}
              </div>
              <h2 className="font-display text-[clamp(26px,4vw,40px)] font-extrabold text-midnight tracking-tight">
                {t(BUYING_PAGE.process.headline.en, BUYING_PAGE.process.headline.es)}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {BUYING_PAGE.process.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-fuego text-white flex items-center justify-center font-display font-extrabold text-[14px] shrink-0">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-[2px] flex-1 bg-fuego/10 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-display text-[16px] font-extrabold text-midnight mb-1">
                      {t(step.title.en, step.title.es)}
                    </h3>
                    <p className="text-stone text-[14px] leading-relaxed max-w-md">
                      {t(step.desc.en, step.desc.es)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer testimonials */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-extrabold text-midnight tracking-tight text-center mb-10">
              {t("From buyers like you", "De compradores como tú")}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {buyerReviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-midnight/[0.04] h-full flex flex-col">
                  <div className="text-oro text-[12px] mb-3">★★★★★</div>
                  <p className="font-accent italic text-midnight text-[14px] leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 pt-3 border-t border-midnight/[0.04]">
                    <div className="font-display text-[12px] font-bold text-midnight">{review.name}</div>
                    <div className="text-stone text-[11px]">{t(review.context.en, review.context.es)}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24 border-t border-midnight/[0.04]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(24px,3vw,34px)] font-extrabold text-midnight tracking-tight text-center mb-10">
              {t("Buyer Questions", "Preguntas de Compradores")}
            </h2>
          </ScrollReveal>
          <div className="space-y-2">
            {BUYING_PAGE.faq.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border border-midnight/[0.05] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-paper/50 transition-colors"
                  >
                    <span className="font-display text-[14px] font-bold text-midnight pr-4">
                      {t(faq.q.en, faq.q.es)}
                    </span>
                    <ChevronDown size={16} className={`text-stone shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-stone text-[14px] leading-relaxed border-t border-midnight/[0.03] pt-4">
                      {t(faq.a.en, faq.a.es)}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-midnight py-16 md:py-20 overflow-hidden">
        <div className="absolute top-[-40px] right-[-30px] w-[180px] h-[180px] bg-fuego/[0.08] rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-extrabold text-white tracking-tight text-center md:text-left">
            {t("Start your ", "Comienza tu ")}
            <span className="font-accent italic text-fuego">{t("dream search", "búsqueda soñada")}</span>
          </h2>
          <Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2">
            {t(BUYING_PAGE.hero.cta.en, BUYING_PAGE.hero.cta.es)}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
