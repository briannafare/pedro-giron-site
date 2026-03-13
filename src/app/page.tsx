"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LangToggle from "@/components/LangToggle";
import Marquee from "@/components/Marquee";
import { ValleyScene, CommunityScene, DanceAbstract, BuyingJourney, SellingValue, HeadshotFrame, useCounter, MARKET_DATA } from "@/components/Illustrations";
import { HERO, STATS, SERVICES, WHY_PEDRO, DREAM_SECTION, TESTIMONIALS, FAQ_HOME, CTA_BAND, SITE } from "@/lib/data";
import { Star, MessageCircle, Globe, ThumbsUp, Home, TrendingUp, Mountain, Shield, Clock, Phone, ChevronDown, ArrowRight, BarChart3 } from "lucide-react";
import { useState } from "react";

const ICON_MAP: Record<string, any> = { Star, MessageCircle, Globe, ThumbsUp, Home, TrendingUp, Mountain, Shield, Clock };

function Grain() {
  return <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />;
}

function HeroSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-midnight overflow-hidden px-5">
      <Grain />
      <div className="absolute top-[10%] right-[15%] w-[350px] h-[350px] bg-fuego/[0.06] rounded-full blur-[130px]" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-oro/[0.07] rounded-full blur-[110px]" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-calma/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 opacity-30"><ValleyScene className="w-full" variant="dark" /></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="mb-4"><LangToggle size="hero" /></div>
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-calma mb-2">
          <div className="w-8 h-[1px] bg-calma/40" />{t(HERO.overline.en, HERO.overline.es)}<div className="w-8 h-[1px] bg-calma/40" />
        </div>
        <h1 className="font-display text-[clamp(48px,10vw,110px)] font-extrabold leading-[0.85] tracking-tighter">
          <span className="text-white">MI CASA</span><br /><span className="text-fuego">DREAM</span>
        </h1>
        <div className="flex items-center justify-center gap-4 my-3">
          <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-oro/30" />
          <div className="relative w-[68px] h-[68px] md:w-[80px] md:h-[80px]">
            <HeadshotFrame className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)]" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-oro/60">
              <Image src="/pedro-headshot.jpg" alt="Pedro Giron" fill className="object-cover object-top scale-[1.15]" priority />
            </div>
          </div>
          <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-oro/30" />
        </div>
        <p className="font-accent italic text-[clamp(17px,2.2vw,26px)] text-white/45 leading-snug max-w-lg mx-auto mb-1.5">{t(HERO.headline_accent.en, HERO.headline_accent.es)}</p>
        <p className="text-white/25 text-[13px] leading-relaxed max-w-sm mx-auto">{t(HERO.sub.en, HERO.sub.es)}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <Link href="/contact" className="bg-fuego text-white text-[13px] font-semibold rounded-lg px-6 py-3 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(214,44,38,0.25)]">{t(HERO.cta.en, HERO.cta.es)}<ArrowRight size={14} /></Link>
          <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="text-calma/50 border border-calma/15 text-[13px] rounded-lg px-6 py-3 hover:border-calma/30 hover:text-calma/70 transition-colors inline-flex items-center gap-2"><Phone size={14} />{HERO.cta2.en}</a>
        </div>
        <div className="mt-3 text-[10px] text-white/12 tracking-wide">{SITE.brokerage} · {t("License", "Licencia")} #{SITE.license}</div>
      </div>
    </section>
  );
}

function StatsTicker() {
  const { t } = useLang();
  return (
    <section className="bg-midnight border-y border-oro/10 py-4 overflow-hidden">
      <Marquee speed={18}>
        {STATS.map((s, i) => (<div key={i} className="flex items-center gap-3 mx-8 md:mx-10"><span className="text-oro font-extrabold text-[18px] md:text-[20px] tracking-tight">{s.value}</span><span className="text-white/25 text-[11px] md:text-[12px] font-medium">{t(s.en, s.es)}</span><span className="text-calma/20 mx-3 md:mx-4">◆</span></div>))}
        <div className="flex items-center gap-3 mx-8 md:mx-10"><span className="text-fuego font-extrabold text-[18px] md:text-[20px]">Mi Casa Dream</span><span className="text-white/25 text-[11px] md:text-[12px]">Pedro Giron · Salem, OR</span><span className="text-calma/20 mx-3 md:mx-4">◆</span></div>
      </Marquee>
    </section>
  );
}

function ServicesSection() {
  const { t } = useLang();
  const svcData = [
    { illust: <BuyingJourney className="w-full h-full" />, border: "border-fuego/10", bg: "bg-fuego/[0.02]", overline: "text-fuego", line: "bg-fuego/40", cta: "text-fuego" },
    { illust: <SellingValue className="w-full h-full" />, border: "border-oro/10", bg: "bg-oro/[0.02]", overline: "text-oro", line: "bg-oro/40", cta: "text-oro" },
    { illust: <ValleyScene className="w-full h-full" variant="light" />, border: "border-calma/10", bg: "bg-calma/[0.02]", overline: "text-calma", line: "bg-calma/40", cta: "text-calma" },
  ];
  return (
    <section className="bg-paper py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-fuego mb-3">{t("Services", "Servicios")}</div>
            <h2 className="font-display text-[clamp(34px,5.5vw,56px)] font-extrabold text-midnight leading-[0.95] tracking-tighter">{t("Turn your ", "Convierte tu ")}<span className="font-accent italic text-fuego">{t("dream", "sueño")}</span><br />{t("into an address", "en una dirección")}</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-20 md:space-y-28">
          {SERVICES.map((svc, i) => {
            const isEven = i % 2 === 0;
            const s = svcData[i];
            return (
              <ScrollReveal key={i}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
                  <div className={isEven ? "md:order-1" : "md:order-2"}>
                    <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden border ${s.border} ${s.bg}`}>
                      <div className="absolute inset-0 p-4 md:p-6">{s.illust}</div>
                      <div className="absolute bottom-3 left-4 font-display text-[56px] md:text-[72px] font-extrabold leading-none text-midnight/[0.04] select-none">0{i + 1}</div>
                    </div>
                  </div>
                  <div className={isEven ? "md:order-2" : "md:order-1"}>
                    <div className={`inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] uppercase ${s.overline} mb-3`}>
                      <div className={`w-5 h-[1px] ${s.line}`} />{t("Service", "Servicio")} 0{i + 1}
                    </div>
                    <h3 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold text-midnight tracking-tight leading-tight mb-4">{t(svc.title.en, svc.title.es)}</h3>
                    <p className="text-stone text-[15px] leading-relaxed max-w-md mb-6">{t(svc.desc.en, svc.desc.es)}</p>
                    <Link href={svc.href} className={`inline-flex items-center gap-2 text-[15px] font-semibold ${s.cta} hover:gap-3 transition-all`}>{t(svc.cta.en, svc.cta.es)}<ArrowRight size={16} /></Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MarketSection() {
  const { t } = useLang();
  const price = useCounter(385, 1800); const days = useCounter(28, 1200); const change = useCounter(42, 1400); const inv = useCounter(18, 1200);
  return (
    <section className="bg-midnight py-20 md:py-28 relative overflow-hidden">
      <Grain /><div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-calma/15 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-calma mb-3"><BarChart3 size={14} />{t("Salem Market","Mercado de Salem")}</div>
              <h2 className="font-display text-[clamp(32px,4.5vw,48px)] font-extrabold text-white leading-[0.95] tracking-tight">{t("Know the market.","Conoce el mercado.")}<br /><span className="font-accent italic text-oro">{t("Own the negotiation.","Domina la negociación.")}</span></h2>
            </div>
            <p className="text-white/20 text-[12px] max-w-xs">{t("Pedro uses real market data to price, negotiate, and win for you.","Pedro usa datos reales del mercado para valuar, negociar y ganar para ti.")}</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ScrollReveal delay={0}><div ref={price.ref} className="bg-white/[0.03] border border-oro/10 rounded-2xl p-5 text-center group hover:border-oro/25 transition-colors"><div className="text-oro font-extrabold text-[28px] md:text-[34px] tracking-tight leading-none">${price.count}K</div><div className="text-white/25 text-[10px] mt-2">{t(MARKET_DATA.median_price.label.en, MARKET_DATA.median_price.label.es)}</div><div className="flex items-end justify-center gap-1 mt-3 h-6">{[40,55,50,65,60,75,85].map((h,j)=>(<div key={j} className="w-1.5 bg-oro/15 rounded-sm group-hover:bg-oro/25 transition-colors" style={{height:`${h}%`,transitionDelay:`${j*40}ms`}} />))}</div></div></ScrollReveal>
          <ScrollReveal delay={0.1}><div ref={days.ref} className="bg-white/[0.03] border border-calma/10 rounded-2xl p-5 text-center group hover:border-calma/25 transition-colors"><div className="text-calma font-extrabold text-[28px] md:text-[34px] tracking-tight leading-none">{days.count}</div><div className="text-white/25 text-[10px] mt-2">{t(MARKET_DATA.days_on_market.label.en, MARKET_DATA.days_on_market.label.es)}</div><svg className="w-full h-6 mt-3" viewBox="0 0 100 24" fill="none"><path d="M0 20 Q15 16,25 18 T50 12 T75 8 T100 5" stroke="#2D6B78" strokeWidth="1.5" strokeLinecap="round" className="opacity-25 group-hover:opacity-40 transition-opacity" /><circle cx="100" cy="5" r="2" fill="#2D6B78" className="opacity-30" /></svg></div></ScrollReveal>
          <ScrollReveal delay={0.2}><div ref={change.ref} className="bg-white/[0.03] border border-fuego/10 rounded-2xl p-5 text-center group hover:border-fuego/25 transition-colors"><div className="text-fuego font-extrabold text-[28px] md:text-[34px] tracking-tight leading-none">+{(change.count/10).toFixed(1)}%</div><div className="text-white/25 text-[10px] mt-2">{t(MARKET_DATA.price_change.label.en, MARKET_DATA.price_change.label.es)}</div><div className="flex items-center justify-center mt-3 h-6"><svg width="20" height="20" viewBox="0 0 20 20" className="text-fuego/25 group-hover:text-fuego/40 transition-colors"><path d="M10 16V4m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div></div></ScrollReveal>
          <ScrollReveal delay={0.3}><div ref={inv.ref} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center group hover:border-white/[0.12] transition-colors"><div className="text-white font-extrabold text-[28px] md:text-[34px] tracking-tight leading-none">{(inv.count/10).toFixed(1)}</div><div className="text-white/25 text-[10px] mt-2">{t(MARKET_DATA.inventory.label.en, MARKET_DATA.inventory.label.es)}</div><div className="flex items-center justify-center mt-3 h-6"><div className="w-14 h-1.5 rounded-full bg-white/[0.06] overflow-hidden"><div className="h-full w-[30%] rounded-full bg-gradient-to-r from-fuego/30 to-oro/30 group-hover:w-[35%] transition-all" /></div></div></div></ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function WhyPedroSection() {
  const { t } = useLang();
  return (
    <section className="bg-paper py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <div className="relative max-w-[420px]">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative border border-haze"><Image src="/pedro-headshot.jpg" alt="Pedro Giron" fill className="object-cover object-top" /><div className="absolute inset-0 bg-gradient-to-t from-midnight/50 via-transparent to-transparent" /></div>
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-[180px] h-[140px] opacity-60"><CommunityScene className="w-full h-full" /></div>
              <div className="absolute bottom-4 left-4 bg-midnight/90 backdrop-blur-sm border border-oro/15 rounded-lg px-4 py-2.5 z-10"><div className="font-display text-[13px] font-extrabold text-white tracking-tight">MI CASA <span className="text-fuego">DREAM</span></div><div className="flex items-center gap-1 mt-1"><span className="text-oro text-[10px]">★★★★★</span><span className="text-white/20 text-[9px]">{SITE.google.count} {t("reviews","reseñas")}</span></div></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-oro/20 rounded-tl-lg" />
            </div>
          </ScrollReveal>
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-oro mb-4"><div className="w-5 h-[1px] bg-oro/40" />{t(WHY_PEDRO.overline.en, WHY_PEDRO.overline.es)}</div>
              <h2 className="font-display text-[clamp(32px,4.5vw,50px)] font-extrabold text-midnight leading-[0.95] tracking-tight mb-2">{t(WHY_PEDRO.headline.en, WHY_PEDRO.headline.es)}<br /><span className="font-accent italic text-fuego">{t(WHY_PEDRO.headline_accent.en, WHY_PEDRO.headline_accent.es)}</span></h2>
              <p className="text-stone text-[15px] leading-relaxed mt-5 max-w-lg">{t(WHY_PEDRO.body.en, WHY_PEDRO.body.es)}</p>
            </ScrollReveal>
            <div className="mt-8 space-y-3">
              {WHY_PEDRO.pillars.map((p, i) => {
                const Icon = ICON_MAP[p.icon];
                const s = [{bg:"bg-calma/[0.08]",text:"text-calma",border:"border-calma/10 hover:border-calma/25"},{bg:"bg-oro/[0.08]",text:"text-oro",border:"border-oro/10 hover:border-oro/25"},{bg:"bg-fuego/[0.08]",text:"text-fuego",border:"border-fuego/10 hover:border-fuego/25"}];
                return (<ScrollReveal key={i} delay={i*0.1}><div className={`flex gap-4 p-4 rounded-xl border ${s[i].border} transition-colors bg-white`}><div className={`w-9 h-9 rounded-lg ${s[i].bg} flex items-center justify-center ${s[i].text} shrink-0`}><Icon size={17} /></div><div><h4 className="font-display text-[15px] font-extrabold text-midnight tracking-tight">{t(p.title.en, p.title.es)}</h4><p className="text-stone text-[13px] leading-relaxed mt-0.5">{t(p.desc.en, p.desc.es)}</p></div></div></ScrollReveal>);
              })}
            </div>
            <ScrollReveal delay={0.3}><Link href="/about" className="mt-6 inline-flex items-center gap-2 text-fuego text-[14px] font-semibold hover:gap-3 transition-all">{t(WHY_PEDRO.cta.en, WHY_PEDRO.cta.es)}<ArrowRight size={15} /></Link></ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function DreamSection() {
  const { t } = useLang();
  return (
    <section className="bg-midnight py-20 md:py-28 relative overflow-hidden">
      <Grain /><div className="absolute inset-0 opacity-40"><DanceAbstract className="w-full h-full" /></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-oro/15 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-10">
            <div><div className="font-display text-[clamp(56px,9vw,110px)] font-extrabold text-white/[0.05] leading-none tracking-tighter select-none">MI CASA</div><div className="mt-3 pl-1"><div className="text-[11px] font-bold tracking-[0.12em] uppercase text-calma mb-2">{t("Home. Family. Roots.","Hogar. Familia. Raíces.")}</div><p className="text-white/30 text-[15px] leading-relaxed max-w-sm">{t("A home isn't just a building. It's where your kids grow up, where holidays happen, where you build something that's actually yours.","Una casa no es solo un edificio. Es donde crecen tus hijos, donde se celebran las fiestas, donde construyes algo que realmente es tuyo.")}</p></div></div>
            <div><div className="font-display text-[clamp(56px,9vw,110px)] font-extrabold text-fuego/[0.08] leading-none tracking-tighter select-none">DREAM</div><div className="mt-3 pl-1"><div className="text-[11px] font-bold tracking-[0.12em] uppercase text-oro mb-2">{t("Aspiration. Future. Possibility.","Aspiración. Futuro. Posibilidad.")}</div><p className="text-white/30 text-[15px] leading-relaxed max-w-sm">{t("Pedro started Mi Casa Dream because he believes every family in the Willamette Valley deserves someone who'll fight to make homeownership real. Not someday. Now.","Pedro creó Mi Casa Dream porque cree que cada familia en el Valle de Willamette merece a alguien que luche para hacer realidad el sueño de tener casa. No algún día. Ahora.")}</p></div></div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}><div className="text-center"><Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(214,44,38,0.2)]">{t(DREAM_SECTION.cta.en, DREAM_SECTION.cta.es)}<ArrowRight size={16} /></Link></div></ScrollReveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { t } = useLang();
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-oro mb-3"><Star size={14} />{t("Reviews","Reseñas")}</div>
              <h2 className="font-display text-[clamp(32px,4.5vw,50px)] font-extrabold text-midnight leading-[0.95] tracking-tight">{t("18 five-stars.","18 cinco estrellas.")}<br /><span className="font-accent italic text-fuego">{t("Zero exceptions.","Sin excepciones.")}</span></h2>
            </div>
            <Link href="/testimonials" className="text-calma text-[13px] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all shrink-0">{t("All Reviews","Todas las Reseñas")}<ArrowRight size={14} /></Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ScrollReveal className="md:col-span-2">
            <div className="bg-white border border-haze rounded-2xl p-7 md:p-8 h-full relative overflow-hidden">
              <div className="absolute top-3 right-4 text-midnight/[0.03] font-accent text-[100px] leading-none select-none">&ldquo;</div>
              <div className="text-oro text-[14px] mb-3">★★★★★</div>
              <blockquote className="font-accent italic text-midnight text-[17px] md:text-[19px] leading-relaxed relative z-10">&ldquo;{TESTIMONIALS[0].text}&rdquo;</blockquote>
              <div className="mt-5 flex items-center gap-3"><div className="w-9 h-9 rounded-full bg-fuego/10 flex items-center justify-center text-fuego font-bold text-[12px]">{TESTIMONIALS[0].name[0]}</div><div><div className="text-midnight font-bold text-[13px]">{TESTIMONIALS[0].name}</div><div className="text-calma text-[11px]">{t(TESTIMONIALS[0].context.en, TESTIMONIALS[0].context.es)}</div></div></div>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {TESTIMONIALS.slice(1).map((r, i) => (
              <ScrollReveal key={i} delay={(i+1)*0.08}>
                <div className="bg-white border border-haze rounded-2xl p-5 hover:border-oro/15 transition-colors">
                  <div className="text-oro text-[11px] mb-2">★★★★★</div>
                  <p className="font-accent italic text-midnight/70 text-[13px] leading-relaxed line-clamp-3">&ldquo;{r.text}&rdquo;</p>
                  <div className="mt-3 pt-2.5 border-t border-haze flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${i===0?"bg-oro/10 text-oro":i===1?"bg-calma/10 text-calma":"bg-fuego/10 text-fuego"}`}>{r.name[0]}</div>
                    <div><div className="text-midnight font-bold text-[11px]">{r.name}</div><div className="text-stone text-[9px]">{t(r.context.en, r.context.es)}</div></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="bg-white py-20 md:py-28 border-t border-haze">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <ScrollReveal><div className="text-center mb-12"><div className="text-[11px] font-bold tracking-[0.12em] uppercase text-calma mb-3">FAQ</div><h2 className="font-display text-[clamp(30px,4vw,44px)] font-extrabold text-midnight tracking-tight">{t("Common Questions","Preguntas Frecuentes")}</h2></div></ScrollReveal>
        <div className="space-y-2">
          {FAQ_HOME.map((faq, i) => (
            <ScrollReveal key={i} delay={i*0.04}>
              <div className="border border-haze rounded-xl overflow-hidden hover:border-calma/20 transition-colors">
                <button onClick={() => setOpenIdx(openIdx===i?null:i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-paper/50 transition-colors"><span className="font-display text-[14px] font-bold text-midnight pr-4">{t(faq.q.en, faq.q.es)}</span><ChevronDown size={16} className={`text-calma shrink-0 transition-transform duration-300 ${openIdx===i?"rotate-180":""}`} /></button>
                {openIdx===i && <div className="px-5 pb-5 text-stone text-[14px] leading-relaxed border-t border-haze pt-4">{t(faq.a.en, faq.a.es)}</div>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative bg-midnight py-20 md:py-28 overflow-hidden">
      <Grain /><div className="absolute bottom-0 left-0 right-0 opacity-20"><ValleyScene className="w-full" variant="dark" /></div>
      <div className="absolute top-[-60px] right-[10%] w-[200px] h-[200px] bg-fuego/[0.06] rounded-full blur-[80px]" />
      <div className="absolute bottom-[-40px] left-[20%] w-[180px] h-[180px] bg-oro/[0.05] rounded-full blur-[70px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(34px,5.5vw,58px)] font-extrabold text-white leading-[0.95] tracking-tight">{t(CTA_BAND.headline.en, CTA_BAND.headline.es)}{" "}<span className="font-accent italic text-fuego">{t(CTA_BAND.headline_accent.en, CTA_BAND.headline_accent.es)}</span></h2>
          <p className="text-white/25 text-[15px] mt-4 max-w-md mx-auto">{t("A free call is the first step. No commitment. No sales pitch. Just answers.","Una llamada gratis es el primer paso. Sin compromiso. Sin discurso de ventas. Solo respuestas.")}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(214,44,38,0.25)]">{t(CTA_BAND.cta.en, CTA_BAND.cta.es)}<ArrowRight size={16} /></Link>
            <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="text-calma/50 border border-calma/15 text-[14px] rounded-lg px-8 py-4 hover:border-calma/30 transition-colors inline-flex items-center gap-2"><Phone size={15} />{SITE.phone}</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (<><Nav /><HeroSection /><StatsTicker /><ServicesSection /><MarketSection /><WhyPedroSection /><DreamSection /><TestimonialsSection /><FAQSection /><CTABand /><Footer /></>);
}
