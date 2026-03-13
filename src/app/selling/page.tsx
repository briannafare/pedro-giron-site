"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import ScrollReveal from "@/components/ScrollReveal";
import { SellingValue, ValleyScene, useCounter } from "@/components/Illustrations";
import { SELLING_PAGE, TESTIMONIALS, SITE } from "@/lib/data";
import { TrendingUp, Megaphone, Shield, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

const FEAT_ICONS: Record<string, any> = { TrendingUp, Megaphone, Shield };

export default function SellingPage() {
  const { t } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sellerReview = TESTIMONIALS[3];

  return (
    <>
      <Nav />
      <InnerHero
        {...SELLING_PAGE.hero}
        illustration={<SellingValue className="w-full h-full" />}
        accentColor="oro"
      />

      {/* Market snapshot infographic */}
      <MarketSnapshot />

      {/* Features with visual accent */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-fuego mb-3">{t("What You Get", "Lo Que Obtienes")}</div>
              <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold text-midnight tracking-tight">
                {t("Selling made ", "Vender hecho ")}<span className="font-accent italic text-fuego">{t("strategic", "estratégico")}</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SELLING_PAGE.features.map((feat, i) => {
              const Icon = FEAT_ICONS[feat.icon];
              const styles = [
                { bg: "bg-oro/[0.08]", text: "text-oro", border: "border-oro/10" },
                { bg: "bg-fuego/[0.08]", text: "text-fuego", border: "border-fuego/10" },
                { bg: "bg-calma/[0.08]", text: "text-calma", border: "border-calma/10" },
              ];
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`bg-white rounded-2xl p-6 border ${styles[i].border} h-full hover:shadow-sm transition-shadow`}>
                    <div className={`w-11 h-11 rounded-xl ${styles[i].bg} flex items-center justify-center ${styles[i].text} mb-4`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-[17px] font-extrabold text-midnight mb-2">{t(feat.title.en, feat.title.es)}</h3>
                    <p className="text-stone text-[14px] leading-relaxed">{t(feat.desc.en, feat.desc.es)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process — visual horizontal */}
      <section className="bg-white py-16 md:py-24 border-t border-haze">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-oro mb-3">{t("The Process", "El Proceso")}</div>
              <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold text-midnight tracking-tight">{t(SELLING_PAGE.process.headline.en, SELLING_PAGE.process.headline.es)}</h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-oro/20 via-fuego/15 to-oro/20" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {SELLING_PAGE.process.steps.map((step, i) => {
                const stepColors = ["bg-oro", "bg-fuego", "bg-calma", "bg-oro"];
                const ringColors = ["ring-oro/20", "ring-fuego/20", "ring-calma/20", "ring-oro/20"];
                return (
                  <ScrollReveal key={i} delay={i * 0.12}>
                    <div className="text-center">
                      <div className="flex md:justify-center mb-4">
                        <div className={`w-14 h-14 rounded-full ${stepColors[i]} text-white flex items-center justify-center font-display font-extrabold text-[18px] ring-4 ${ringColors[i]}`}>{i + 1}</div>
                      </div>
                      <h3 className="font-display text-[16px] font-extrabold text-midnight mb-2 text-left md:text-center">{t(step.title.en, step.title.es)}</h3>
                      <p className="text-stone text-[13px] leading-relaxed text-left md:text-center">{t(step.desc.en, step.desc.es)}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industry peer testimonial */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-calma mb-3">{t("Industry Trust", "Confianza Profesional")}</div>
              <h2 className="font-display text-[clamp(28px,4vw,40px)] font-extrabold text-midnight tracking-tight">
                {t("Even industry peers ", "Incluso colegas de la industria ")}<span className="font-accent italic text-fuego">{t("recommend Pedro", "recomiendan a Pedro")}</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl p-8 border border-haze text-center relative overflow-hidden">
              <div className="absolute top-3 right-5 text-midnight/[0.03] font-accent text-[80px] leading-none select-none">&ldquo;</div>
              <div className="text-oro text-[14px] mb-4">★★★★★</div>
              <p className="font-accent italic text-midnight text-[17px] leading-relaxed max-w-lg mx-auto relative z-10">&ldquo;{sellerReview.text}&rdquo;</p>
              <div className="mt-5">
                <div className="font-display text-[14px] font-bold text-midnight">{sellerReview.name}</div>
                <div className="text-calma text-[12px]">{t(sellerReview.context.en, sellerReview.context.es)}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24 border-t border-haze">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <ScrollReveal><h2 className="font-display text-[clamp(28px,3.5vw,38px)] font-extrabold text-midnight tracking-tight text-center mb-10">{t("Seller Questions", "Preguntas de Vendedores")}</h2></ScrollReveal>
          <div className="space-y-2">
            {SELLING_PAGE.faq.map((faq, i) => (
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

      {/* CTA */}
      <section className="relative bg-midnight py-16 md:py-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 opacity-15"><ValleyScene className="w-full" variant="dark" /></div>
        <div className="absolute top-[-40px] right-[-30px] w-[180px] h-[180px] bg-oro/[0.06] rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-extrabold text-white tracking-tight text-center md:text-left">
            {t("Find out what your home is ", "Descubre cuánto ")}<span className="font-accent italic text-fuego">{t("really worth", "realmente vale tu casa")}</span>
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-7 py-3.5 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(214,44,38,0.2)]">{t(SELLING_PAGE.hero.cta.en, SELLING_PAGE.hero.cta.es)}<ArrowRight size={15} /></Link>
            <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="text-calma/40 border border-calma/15 text-[13px] rounded-lg px-5 py-3.5 hover:border-calma/30 transition-colors inline-flex items-center gap-2"><Phone size={14} />{SITE.phone}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* Market Snapshot — animated infographic for sellers */
function MarketSnapshot() {
  const { t } = useLang();
  const price = useCounter(385, 1600);
  const days = useCounter(28, 1200);
  const change = useCounter(42, 1400);

  return (
    <section className="bg-midnight py-14 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-8">
          <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-oro mb-2">{t("Salem Market Right Now", "Mercado de Salem Ahora")}</div>
          <p className="text-white/40 text-[12px]">{t("Why timing and pricing strategy matter", "Por qué la estrategia de tiempo y precio importa")}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <div ref={price.ref} className="text-center">
            <div className="text-oro font-extrabold text-[28px] md:text-[40px] tracking-tight leading-none">${price.count}K</div>
            <div className="text-white/40 text-[10px] md:text-[11px] mt-1">{t("Median Price", "Precio Medio")}</div>
            <div className="flex items-end justify-center gap-0.5 mt-3 h-5">
              {[35,45,42,55,50,65,75].map((h,j)=>(<div key={j} className="w-1 md:w-1.5 bg-oro/15 rounded-sm" style={{height:`${h}%`}} />))}
            </div>
          </div>
          <div ref={days.ref} className="text-center">
            <div className="text-calma font-extrabold text-[28px] md:text-[40px] tracking-tight leading-none">{days.count}</div>
            <div className="text-white/40 text-[10px] md:text-[11px] mt-1">{t("Avg. Days on Market", "Días Promedio")}</div>
            <svg className="w-full h-5 mt-3" viewBox="0 0 100 18" fill="none">
              <path d="M0 16 Q20 12,35 14 T60 8 T85 4 T100 2" stroke="#2D6B78" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            </svg>
          </div>
          <div ref={change.ref} className="text-center">
            <div className="text-fuego font-extrabold text-[28px] md:text-[40px] tracking-tight leading-none">+{(change.count / 10).toFixed(1)}%</div>
            <div className="text-white/40 text-[10px] md:text-[11px] mt-1">{t("YoY Price Growth", "Crecimiento Anual")}</div>
            <div className="flex items-center justify-center mt-3 h-5">
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-fuego/30"><path d="M8 13V3m0 0l-3 3m3-3l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
