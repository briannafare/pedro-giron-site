"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import ScrollReveal from "@/components/ScrollReveal";
import { ABOUT_PAGE, WHY_PEDRO, SITE } from "@/lib/data";
import { Globe, Clock, Shield, ArrowRight } from "lucide-react";

const PILLAR_ICONS: Record<string, any> = { Globe, Clock, Shield };

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <Nav />
      <InnerHero {...ABOUT_PAGE.hero} />

      {/* Story + Photo */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-fuego mb-3">
                  {t(ABOUT_PAGE.story.headline.en, ABOUT_PAGE.story.headline.es)}
                </div>
                <div className="prose prose-stone max-w-none">
                  {t(ABOUT_PAGE.story.body.en, ABOUT_PAGE.story.body.es)
                    .split("\n\n")
                    .map((para, i) => (
                      <p key={i} className="text-stone text-[15px] leading-relaxed mb-5">
                        {para}
                      </p>
                    ))}
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal delay={0.15}>
                <div className="relative">
                  <div className="w-[260px] h-[320px] md:w-[300px] md:h-[380px] rounded-2xl overflow-hidden relative z-10 border border-midnight/[0.06]">
                    <Image
                      src="/pedro-headshot.jpg"
                      alt="Pedro Giron — Mi Casa Dream"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-fuego/15 z-0" />
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-oro/10 rounded-xl z-0" />
                  <div className="absolute -bottom-5 left-6 bg-midnight rounded-xl px-5 py-3 z-20 border border-white/[0.06]">
                    <div className="font-display text-[13px] font-extrabold text-white">
                      MI CASA <span className="text-fuego">DREAM</span>
                    </div>
                    <div className="text-white/30 text-[10px] mt-0.5">
                      {SITE.agent} · {t("Broker", "Corredor")}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-midnight py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: { en: "Oregon License", es: "Licencia Oregon" }, value: `#${SITE.license}` },
              { label: { en: "Brokerage", es: "Corretaje" }, value: "Premiere Property Group" },
              { label: { en: "Google Rating", es: "Calificación" }, value: `${SITE.google.rating} ★ (${SITE.google.count})` },
              { label: { en: "Languages", es: "Idiomas" }, value: "English & Español" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="text-center">
                  <div className="text-white font-display font-extrabold text-[16px] md:text-[18px] tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-white/25 text-[11px] mt-1">
                    {t(item.label.en, item.label.es)}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Three Promises */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-calma mb-3">
                {t("The Mi Casa Dream Promise", "La Promesa Mi Casa Dream")}
              </div>
              <h2 className="font-display text-[clamp(26px,3.5vw,38px)] font-extrabold text-midnight tracking-tight">
                {t("Three things Pedro ", "Tres cosas que Pedro ")}
                <span className="font-accent italic text-fuego">
                  {t("guarantees", "garantiza")}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WHY_PEDRO.pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[pillar.icon];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-paper rounded-2xl p-7 border border-midnight/[0.03] h-full text-center">
                    <div className="w-12 h-12 rounded-xl bg-calma/[0.08] flex items-center justify-center text-calma mx-auto mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-[17px] font-extrabold text-midnight mb-2">
                      {t(pillar.title.en, pillar.title.es)}
                    </h3>
                    <p className="text-stone text-[14px] leading-relaxed">
                      {t(pillar.desc.en, pillar.desc.es)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-midnight py-16 md:py-20 overflow-hidden">
        <div className="absolute top-[-40px] right-[-30px] w-[180px] h-[180px] bg-fuego/[0.08] rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-extrabold text-white tracking-tight text-center md:text-left">
            {t("Ready to work with ", "¿Listo para trabajar con ")}
            <span className="font-accent italic text-fuego">Pedro?</span>
          </h2>
          <Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2">
            {t("Book a Free Call", "Agendar Llamada Gratis")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
