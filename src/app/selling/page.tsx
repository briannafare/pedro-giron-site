"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import ScrollReveal from "@/components/ScrollReveal";
import { SELLING_PAGE, TESTIMONIALS } from "@/lib/data";
import { TrendingUp, Megaphone, Shield, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

const FEAT_ICONS: Record<string, any> = { TrendingUp, Megaphone, Shield };

export default function SellingPage() {
  const { t } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sellerReview = TESTIMONIALS[3]; // Dodie S.

  return (
    <>
      <Nav />
      <InnerHero {...SELLING_PAGE.hero} />

      {/* Features */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-fuego mb-3">
                {t("What You Get", "Lo Que Obtienes")}
              </div>
              <h2 className="font-display text-[clamp(26px,3.5vw,38px)] font-extrabold text-midnight tracking-tight">
                {t("Selling made ", "Vender hecho ")}
                <span className="font-accent italic text-fuego">{t("strategic", "estratégico")}</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SELLING_PAGE.features.map((feat, i) => {
              const Icon = FEAT_ICONS[feat.icon];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-midnight/[0.04] h-full">
                    <div className="w-10 h-10 rounded-lg bg-fuego/[0.08] flex items-center justify-center text-fuego mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-[16px] font-extrabold text-midnight mb-2">
                      {t(feat.title.en, feat.title.es)}
                    </h3>
                    <p className="text-stone text-[14px] leading-relaxed">
                      {t(feat.desc.en, feat.desc.es)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-24 border-t border-midnight/[0.04]">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-oro mb-3">
                {t("The Process", "El Proceso")}
              </div>
              <h2 className="font-display text-[clamp(26px,4vw,40px)] font-extrabold text-midnight tracking-tight">
                {t(SELLING_PAGE.process.headline.en, SELLING_PAGE.process.headline.es)}
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {SELLING_PAGE.process.steps.map((step, i) => (
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

      {/* Industry peer testimonial */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-calma mb-3">
                {t("Industry Trust", "Confianza Profesional")}
              </div>
              <h2 className="font-display text-[clamp(24px,3.5vw,34px)] font-extrabold text-midnight tracking-tight">
                {t("Even industry peers ", "Incluso colegas de la industria ")}
                <span className="font-accent italic text-fuego">{t("recommend Pedro", "recomiendan a Pedro")}</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl p-8 border border-midnight/[0.04] text-center">
              <div className="text-oro text-[14px] mb-4">★★★★★</div>
              <p className="font-accent italic text-midnight text-[17px] leading-relaxed max-w-lg mx-auto">
                &ldquo;{sellerReview.text}&rdquo;
              </p>
              <div className="mt-5">
                <div className="font-display text-[14px] font-bold text-midnight">{sellerReview.name}</div>
                <div className="text-stone text-[12px]">{t(sellerReview.context.en, sellerReview.context.es)}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24 border-t border-midnight/[0.04]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(24px,3vw,34px)] font-extrabold text-midnight tracking-tight text-center mb-10">
              {t("Seller Questions", "Preguntas de Vendedores")}
            </h2>
          </ScrollReveal>
          <div className="space-y-2">
            {SELLING_PAGE.faq.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border border-midnight/[0.05] rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-paper/50 transition-colors">
                    <span className="font-display text-[14px] font-bold text-midnight pr-4">{t(faq.q.en, faq.q.es)}</span>
                    <ChevronDown size={16} className={`text-stone shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-stone text-[14px] leading-relaxed border-t border-midnight/[0.03] pt-4">{t(faq.a.en, faq.a.es)}</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-midnight py-16 md:py-20 overflow-hidden">
        <div className="absolute top-[-40px] right-[-30px] w-[180px] h-[180px] bg-oro/[0.06] rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-extrabold text-white tracking-tight text-center md:text-left">
            {t("Find out what your home is ", "Descubre cuánto ")}
            <span className="font-accent italic text-fuego">{t("really worth", "realmente vale tu casa")}</span>
          </h2>
          <Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2">
            {t(SELLING_PAGE.hero.cta.en, SELLING_PAGE.hero.cta.es)}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
