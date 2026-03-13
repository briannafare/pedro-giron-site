"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import ScrollReveal from "@/components/ScrollReveal";
import { CommunityScene, ValleyScene, DanceAbstract, useCounter } from "@/components/Illustrations";
import { ABOUT_PAGE, WHY_PEDRO, SITE } from "@/lib/data";
import { Globe, Clock, Shield, ArrowRight, Phone } from "lucide-react";

const PILLAR_ICONS: Record<string, any> = { Globe, Clock, Shield };

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <Nav />
      <InnerHero
        {...ABOUT_PAGE.hero}
        illustration={<CommunityScene className="w-full h-full" />}
        accentColor="calma"
      />

      {/* Pedro's Track Record — visual infographic bar */}
      <TrackRecord />

      {/* Story + Photo with community overlay */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-fuego mb-3">
                  {t(ABOUT_PAGE.story.headline.en, ABOUT_PAGE.story.headline.es)}
                </div>
                <div className="max-w-none">
                  {t(ABOUT_PAGE.story.body.en, ABOUT_PAGE.story.body.es).split("\n\n").map((para, i) => (
                    <p key={i} className="text-stone text-[15px] leading-relaxed mb-5">{para}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal delay={0.15}>
                <div className="relative">
                  <div className="w-[260px] h-[320px] md:w-[300px] md:h-[380px] rounded-2xl overflow-hidden relative z-10 border border-haze">
                    <Image src="/pedro-headshot.jpg" alt="Pedro Giron — Mi Casa Dream" fill className="object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
                  </div>
                  {/* Community illustration overlay */}
                  <div className="absolute -bottom-8 -right-6 w-[160px] h-[120px] opacity-50 z-20">
                    <CommunityScene className="w-full h-full" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-fuego/10 z-0" />
                  <div className="absolute -top-3 -left-3 w-16 h-16 bg-oro/8 rounded-xl z-0" />
                  <div className="absolute bottom-3 left-3 bg-midnight/90 backdrop-blur-sm rounded-lg px-4 py-2.5 z-20 border border-oro/15">
                    <div className="font-display text-[13px] font-extrabold text-white">MI CASA <span className="text-fuego">DREAM</span></div>
                    <div className="text-white/30 text-[10px] mt-0.5">{SITE.agent} · {t("Broker", "Corredor")}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Dance/personality section — Pedro beyond real estate */}
      <section className="bg-midnight py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"><DanceAbstract className="w-full h-full" /></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-oro mb-3">{t("Beyond Real Estate", "Más Allá de Bienes Raíces")}</div>
            <h2 className="font-display text-[clamp(26px,3.5vw,38px)] font-extrabold text-white tracking-tight mb-4">
              {t("Professional negotiator by day.", "Negociador profesional de día.")}
              <br /><span className="font-accent italic text-fuego">{t("Cumbia dancer by night.", "Bailarín de cumbia de noche.")}</span>
            </h2>
            <p className="text-white/30 text-[14px] leading-relaxed max-w-lg mx-auto">
              {t("Pedro brings the same energy to your deal as he does to the dance floor — calm confidence, perfect timing, and moves nobody sees coming.", "Pedro trae la misma energía a tu negocio que a la pista de baile — confianza tranquila, tiempo perfecto, y movimientos que nadie espera.")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Promises */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-calma mb-3">{t("The Mi Casa Dream Promise", "La Promesa Mi Casa Dream")}</div>
              <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold text-midnight tracking-tight">
                {t("Three things Pedro ", "Tres cosas que Pedro ")}<span className="font-accent italic text-fuego">{t("guarantees", "garantiza")}</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WHY_PEDRO.pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[pillar.icon];
              const styles = [
                { bg: "bg-calma/[0.08]", text: "text-calma", border: "border-calma/10" },
                { bg: "bg-oro/[0.08]", text: "text-oro", border: "border-oro/10" },
                { bg: "bg-fuego/[0.08]", text: "text-fuego", border: "border-fuego/10" },
              ];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`bg-paper rounded-2xl p-7 border ${styles[i].border} h-full text-center hover:shadow-sm transition-shadow`}>
                    <div className={`w-12 h-12 rounded-xl ${styles[i].bg} flex items-center justify-center ${styles[i].text} mx-auto mb-5`}><Icon size={22} /></div>
                    <h3 className="font-display text-[17px] font-extrabold text-midnight mb-2">{t(pillar.title.en, pillar.title.es)}</h3>
                    <p className="text-stone text-[14px] leading-relaxed">{t(pillar.desc.en, pillar.desc.es)}</p>
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
        <div className="absolute top-[-40px] right-[-30px] w-[180px] h-[180px] bg-fuego/[0.08] rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-extrabold text-white tracking-tight text-center md:text-left">
            {t("Ready to work with ", "¿Listo para trabajar con ")}<span className="font-accent italic text-fuego">Pedro?</span>
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

/* Track Record — animated credentials infographic */
function TrackRecord() {
  const { t } = useLang();
  const reviews = useCounter(18, 1200);
  const rating = useCounter(50, 1000); // 5.0 × 10

  return (
    <section className="bg-midnight py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div ref={reviews.ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: `#${SITE.license}`, label: { en: "Oregon License", es: "Licencia Oregon" }, color: "text-calma" },
            { value: "Premiere Property Group", label: { en: "Brokerage", es: "Corretaje" }, color: "text-white" },
            { value: `${(rating.count / 10).toFixed(1)} ★`, label: { en: `${reviews.count} Google Reviews`, es: `${reviews.count} Reseñas Google` }, color: "text-oro" },
            { value: "EN + ES", label: { en: "Bilingual Service", es: "Servicio Bilingüe" }, color: "text-fuego" },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="text-center">
                <div className={`${item.color} font-display font-extrabold text-[15px] md:text-[18px] tracking-tight`}>{item.value}</div>
                <div className="text-white/25 text-[10px] md:text-[11px] mt-1">{t(item.label.en, item.label.es)}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
