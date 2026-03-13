"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LangToggle from "@/components/LangToggle";
import Marquee from "@/components/Marquee";
import {
  HouseIllustration, KeyIllustration, HandshakeIllustration,
  HeadshotFrame, DotsGrid, useCounter, MARKET_DATA,
} from "@/components/Illustrations";
import {
  HERO, STATS, SERVICES, WHY_PEDRO, DREAM_SECTION,
  TESTIMONIALS, FAQ_HOME, CTA_BAND, SITE,
} from "@/lib/data";
import {
  Star, MessageCircle, Globe, ThumbsUp, Home, TrendingUp,
  Mountain, Shield, Clock, Phone, ChevronDown, ArrowRight,
  MapPin, BarChart3,
} from "lucide-react";
import { useState } from "react";

const ICON_MAP: Record<string, any> = {
  Star, MessageCircle, Globe, ThumbsUp, Home, TrendingUp,
  Mountain, Shield, Clock,
};

const SVC_ILLUSTRATIONS = [HouseIllustration, TrendingUp, KeyIllustration];

/* ═══════════ NOISE TEXTURE OVERLAY ═══════════ */
function GrainOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-[1]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

/* ═══════════ HERO ═══════════ */
function HeroSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-midnight overflow-hidden px-5">
      <GrainOverlay />
      {/* Ambient glows */}
      <div className="absolute top-[10%] right-[15%] w-[350px] h-[350px] bg-fuego/[0.07] rounded-full blur-[130px]" />
      <div className="absolute bottom-[15%] left-[10%] w-[300px] h-[300px] bg-oro/[0.08] rounded-full blur-[110px]" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-calma/[0.04] rounded-full blur-[120px]" />

      {/* SVG diagonal accent lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="#D4A520" strokeWidth="1" />
        <line x1="20%" y1="100%" x2="100%" y2="20%" stroke="#2D6B78" strokeWidth="0.5" />
        <line x1="0" y1="60%" x2="60%" y2="0" stroke="#D62C26" strokeWidth="0.5" />
      </svg>

      {/* Floating decorative elements */}
      <div className="absolute top-[20%] left-[8%] text-oro/20 animate-float hidden md:block">
        <HouseIllustration size={36} />
      </div>
      <div className="absolute bottom-[25%] right-[6%] text-calma/15 animate-float hidden md:block" style={{ animationDelay: "2s" }}>
        <KeyIllustration size={32} />
      </div>
      <div className="absolute top-[60%] left-[5%] text-fuego/10 hidden md:block">
        <DotsGrid cols={4} rows={4} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-28 md:pt-32 pb-12 md:pb-16">
        {/* Language toggle */}
        <div className="mb-5">
          <LangToggle size="hero" />
        </div>

        {/* Overline */}
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-calma mb-3">
          <div className="w-8 h-[1px] bg-calma/40" />
          {t(HERO.overline.en, HERO.overline.es)}
          <div className="w-8 h-[1px] bg-calma/40" />
        </div>

        {/* Brand name */}
        <h1 className="font-display text-[clamp(52px,12vw,140px)] font-extrabold leading-[0.85] tracking-tighter">
          <span className="text-white">MI CASA</span>
          <br />
          <span className="text-fuego">DREAM</span>
        </h1>

        {/* Headshot in designed frame */}
        <div className="flex items-center justify-center gap-4 my-4">
          <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-oro/30" />
          <div className="relative w-[72px] h-[72px] md:w-[88px] md:h-[88px]">
            {/* Decorative rings */}
            <HeadshotFrame className="absolute -inset-3 md:-inset-4 w-[calc(100%+24px)] h-[calc(100%+24px)] md:w-[calc(100%+32px)] md:h-[calc(100%+32px)]" />
            {/* Actual photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-oro/60">
              <Image
                src="/pedro-headshot.jpg"
                alt="Pedro Giron"
                fill
                className="object-cover object-top scale-[1.15]"
                priority
              />
            </div>
          </div>
          <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-oro/30" />
        </div>

        {/* Subheadline */}
        <p className="font-accent italic text-[clamp(18px,2.5vw,28px)] text-white/50 leading-snug max-w-xl mx-auto mb-2">
          {t(HERO.headline_accent.en, HERO.headline_accent.es)}
        </p>

        <p className="text-white/30 text-[13px] md:text-[14px] leading-relaxed max-w-md mx-auto">
          {t(HERO.sub.en, HERO.sub.es)}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
          <Link
            href="/contact"
            className="bg-fuego text-white text-[13px] font-semibold rounded-lg px-7 py-3.5 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(214,44,38,0.25)]"
          >
            {t(HERO.cta.en, HERO.cta.es)}
            <ArrowRight size={15} />
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
            className="text-calma/50 border border-calma/15 text-[13px] rounded-lg px-7 py-3.5 hover:border-calma/30 hover:text-calma/70 transition-colors inline-flex items-center gap-2"
          >
            <Phone size={14} />
            {HERO.cta2.en}
          </a>
        </div>

        <div className="mt-4 text-[10px] text-white/15 tracking-wide">
          {SITE.brokerage} · {t("License", "Licencia")} #{SITE.license}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ MARQUEE STATS TICKER ═══════════ */
function StatsTicker() {
  const { t } = useLang();
  return (
    <section className="bg-midnight border-y border-oro/10 py-4 overflow-hidden">
      <Marquee speed={25}>
        {STATS.map((stat, i) => (
          <div key={i} className="flex items-center gap-3 mx-10">
            <span className="text-oro font-extrabold text-[20px] tracking-tight">{stat.value}</span>
            <span className="text-white/25 text-[12px] font-medium">{t(stat.en, stat.es)}</span>
            <span className="text-calma/20 mx-4">◆</span>
          </div>
        ))}
        <div className="flex items-center gap-3 mx-10">
          <span className="text-oro font-extrabold text-[20px]">Salem, OR</span>
          <span className="text-white/25 text-[12px]">{t("Willamette Valley", "Valle de Willamette")}</span>
          <span className="text-calma/20 mx-4">◆</span>
        </div>
        <div className="flex items-center gap-3 mx-10">
          <span className="text-fuego font-extrabold text-[20px]">Mi Casa Dream</span>
          <span className="text-white/25 text-[12px]">Pedro Giron</span>
          <span className="text-calma/20 mx-4">◆</span>
        </div>
      </Marquee>
    </section>
  );
}

/* ═══════════ SERVICES — EDITORIAL ZIGZAG WITH ILLUSTRATIONS ═══════════ */
function ServicesZigzag() {
  const { t } = useLang();
  const svcColors = ["fuego", "oro", "calma"] as const;
  const svcIllustrations = [
    <HouseIllustration key="h" size={64} />,
    <HandshakeIllustration key="ha" size={64} />,
    <KeyIllustration key="k" size={64} />,
  ];

  return (
    <section className="bg-paper py-20 md:py-32 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-16 right-8 text-haze hidden md:block">
        <DotsGrid cols={6} rows={6} />
      </div>
      <div className="absolute bottom-20 left-8 text-haze hidden md:block">
        <DotsGrid cols={4} rows={8} />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-fuego mb-3">
              {t("Services", "Servicios")}
            </div>
            <h2 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold text-midnight leading-[0.95] tracking-tighter">
              {t("Turn your ", "Convierte tu ")}
              <span className="font-accent italic text-fuego">{t("dream", "sueño")}</span>
              <br />
              {t("into an address", "en una dirección")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          {SERVICES.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon];
            const isEven = i % 2 === 0;
            const color = svcColors[i];
            return (
              <ScrollReveal key={i} delay={0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center`}>
                  {/* Illustration side */}
                  <div className={`md:col-span-5 ${isEven ? "md:order-1" : "md:order-2"}`}>
                    <div className="relative">
                      <span className="font-display text-[120px] md:text-[160px] font-extrabold leading-none text-midnight/[0.04] select-none">
                        0{i + 1}
                      </span>
                      <div className={`absolute top-8 ${isEven ? "right-0" : "left-0"} w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-3xl bg-${color}/[0.06] flex items-center justify-center`}>
                        <div className={`text-${color}/40`}>
                          {svcIllustrations[i]}
                        </div>
                      </div>
                      {/* Decorative corner accent */}
                      <div className={`absolute ${isEven ? "right-[-12px] top-4" : "left-[-12px] top-4"} w-6 h-6 border border-${color}/20 rounded-md rotate-45`} />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`md:col-span-7 ${isEven ? "md:order-2" : "md:order-1"}`}>
                    <div className={`inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] uppercase text-${color} mb-4`}>
                      <div className={`w-5 h-[1px] bg-${color}/40`} />
                      {t("Service", "Servicio")} 0{i + 1}
                    </div>
                    <h3 className="font-display text-[clamp(28px,4vw,40px)] font-extrabold text-midnight tracking-tight leading-tight mb-4">
                      {t(svc.title.en, svc.title.es)}
                    </h3>
                    <p className="text-stone text-[16px] leading-relaxed max-w-md mb-6">
                      {t(svc.desc.en, svc.desc.es)}
                    </p>
                    <Link
                      href={svc.href}
                      className={`inline-flex items-center gap-2 text-[14px] font-semibold text-${color} hover:gap-3 transition-all`}
                    >
                      {t(svc.cta.en, svc.cta.es)}
                      <ArrowRight size={15} />
                    </Link>
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

/* ═══════════ MARKET DATA VIZ ═══════════ */
function MarketSection() {
  const { t } = useLang();
  const price = useCounter(385, 1800);
  const days = useCounter(28, 1200);
  const change = useCounter(42, 1400); // 4.2 × 10
  const inventory = useCounter(18, 1200); // 1.8 × 10

  return (
    <section className="bg-midnight py-20 md:py-28 relative overflow-hidden">
      <GrainOverlay />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-calma/15 to-transparent" />
      <div className="absolute bottom-[20%] right-[-80px] w-[250px] h-[250px] bg-oro/[0.04] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-calma mb-3">
                <BarChart3 size={14} />
                {t("Salem Market", "Mercado de Salem")}
              </div>
              <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-white leading-[0.95] tracking-tight">
                {t("Know the market.", "Conoce el mercado.")}
                <br />
                <span className="font-accent italic text-oro">
                  {t("Own the negotiation.", "Domina la negociación.")}
                </span>
              </h2>
            </div>
            <p className="text-white/25 text-[12px] max-w-xs">
              {t("Current Salem, OR housing market overview. Pedro uses this data to price, negotiate, and win.", "Panorama actual del mercado de Salem, OR. Pedro usa estos datos para valuar, negociar y ganar.")}
            </p>
          </div>
        </ScrollReveal>

        {/* Data cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Median Price */}
          <ScrollReveal delay={0}>
            <div ref={price.ref} className="bg-white/[0.03] border border-oro/10 rounded-2xl p-5 md:p-6 text-center group hover:border-oro/25 transition-colors">
              <div className="text-oro font-extrabold text-[28px] md:text-[36px] tracking-tight leading-none">
                ${price.count}K
              </div>
              <div className="text-white/25 text-[11px] mt-2">{t(MARKET_DATA.median_price.label.en, MARKET_DATA.median_price.label.es)}</div>
              {/* Mini bar chart illustration */}
              <div className="flex items-end justify-center gap-1 mt-4 h-8">
                {[40, 55, 50, 65, 60, 75, 85].map((h, j) => (
                  <div key={j} className="w-2 bg-oro/20 rounded-sm group-hover:bg-oro/30 transition-colors" style={{ height: `${h}%`, transitionDelay: `${j * 50}ms` }} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Days on Market */}
          <ScrollReveal delay={0.1}>
            <div ref={days.ref} className="bg-white/[0.03] border border-calma/10 rounded-2xl p-5 md:p-6 text-center group hover:border-calma/25 transition-colors">
              <div className="text-calma font-extrabold text-[28px] md:text-[36px] tracking-tight leading-none">
                {days.count}
              </div>
              <div className="text-white/25 text-[11px] mt-2">{t(MARKET_DATA.days_on_market.label.en, MARKET_DATA.days_on_market.label.es)}</div>
              {/* Mini line chart */}
              <svg className="w-full h-8 mt-4" viewBox="0 0 100 30" fill="none">
                <path d="M0 25 Q15 20, 25 22 T50 15 T75 10 T100 8" stroke="#2D6B78" strokeWidth="1.5" strokeLinecap="round" className="opacity-30 group-hover:opacity-50 transition-opacity" />
                <circle cx="100" cy="8" r="2.5" fill="#2D6B78" className="opacity-40" />
              </svg>
            </div>
          </ScrollReveal>

          {/* Price Change */}
          <ScrollReveal delay={0.2}>
            <div ref={change.ref} className="bg-white/[0.03] border border-fuego/10 rounded-2xl p-5 md:p-6 text-center group hover:border-fuego/25 transition-colors">
              <div className="text-fuego font-extrabold text-[28px] md:text-[36px] tracking-tight leading-none">
                +{(change.count / 10).toFixed(1)}%
              </div>
              <div className="text-white/25 text-[11px] mt-2">{t(MARKET_DATA.price_change.label.en, MARKET_DATA.price_change.label.es)}</div>
              {/* Arrow up illustration */}
              <div className="flex items-center justify-center mt-4 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-fuego/30 group-hover:text-fuego/50 transition-colors">
                  <path d="M12 20V4m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* Inventory */}
          <ScrollReveal delay={0.3}>
            <div ref={inventory.ref} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 md:p-6 text-center group hover:border-white/[0.12] transition-colors">
              <div className="text-white font-extrabold text-[28px] md:text-[36px] tracking-tight leading-none">
                {(inventory.count / 10).toFixed(1)}
              </div>
              <div className="text-white/25 text-[11px] mt-2">{t(MARKET_DATA.inventory.label.en, MARKET_DATA.inventory.label.es)}</div>
              {/* Mini gauge */}
              <div className="flex items-center justify-center mt-4 h-8">
                <div className="w-16 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full w-[30%] rounded-full bg-gradient-to-r from-fuego/40 to-oro/40 group-hover:w-[35%] transition-all" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="text-white/15 text-[10px] text-center mt-6">
          {t("Data reflects Salem, OR metro area estimates. For current figures, ask Pedro.", "Los datos reflejan estimaciones del área metro de Salem, OR. Para cifras actuales, pregúntale a Pedro.")}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ WHY PEDRO ═══════════ */
function WhyPedroSection() {
  const { t } = useLang();
  return (
    <section className="bg-paper py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-12 right-6 text-haze/50 hidden md:block">
        <DotsGrid cols={5} rows={5} />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — large photo with designed frame */}
          <ScrollReveal>
            <div className="relative max-w-[400px]">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative border border-midnight/[0.06]">
                <Image src="/pedro-headshot.jpg" alt="Pedro Giron" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
              </div>
              {/* Overlapping brand card */}
              <div className="absolute -bottom-5 -right-3 md:right-[-30px] bg-midnight border border-oro/20 rounded-xl px-5 py-3 shadow-2xl z-10">
                <div className="font-display text-[15px] font-extrabold text-white tracking-tight">
                  MI CASA <span className="text-fuego">DREAM</span>
                </div>
                <div className="text-oro/40 text-[10px] mt-0.5">{SITE.agent} · {t("Broker", "Corredor")}</div>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="text-oro text-[11px]">★★★★★</span>
                  <span className="text-white/20 text-[9px]">{SITE.google.count} {t("reviews", "reseñas")}</span>
                </div>
              </div>
              {/* Decorative corner elements */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-oro/20 rounded-tl-lg" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-calma/15 rounded-bl-lg" />
            </div>
          </ScrollReveal>

          {/* Right — copy + pillars */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-oro mb-4">
                <div className="w-5 h-[1px] bg-oro/40" />
                {t(WHY_PEDRO.overline.en, WHY_PEDRO.overline.es)}
              </div>
              <h2 className="font-display text-[clamp(30px,4.5vw,48px)] font-extrabold text-midnight leading-[0.95] tracking-tight mb-2">
                {t(WHY_PEDRO.headline.en, WHY_PEDRO.headline.es)}
                <br />
                <span className="font-accent italic text-fuego">
                  {t(WHY_PEDRO.headline_accent.en, WHY_PEDRO.headline_accent.es)}
                </span>
              </h2>
              <p className="text-stone text-[15px] leading-relaxed mt-5 max-w-lg">
                {t(WHY_PEDRO.body.en, WHY_PEDRO.body.es)}
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-4">
              {WHY_PEDRO.pillars.map((p, i) => {
                const Icon = ICON_MAP[p.icon];
                const colors = [
                  { bg: "bg-calma/[0.08]", text: "text-calma", border: "border-calma/15 hover:border-calma/30" },
                  { bg: "bg-oro/[0.08]", text: "text-oro", border: "border-oro/15 hover:border-oro/30" },
                  { bg: "bg-fuego/[0.08]", text: "text-fuego", border: "border-fuego/15 hover:border-fuego/30" },
                ];
                return (
                  <ScrollReveal key={i} delay={i * 0.12}>
                    <div className={`flex gap-4 p-5 rounded-xl border ${colors[i].border} transition-colors bg-white`}>
                      <div className={`w-10 h-10 rounded-lg ${colors[i].bg} flex items-center justify-center ${colors[i].text} shrink-0`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-display text-[15px] font-extrabold text-midnight tracking-tight">
                          {t(p.title.en, p.title.es)}
                        </h4>
                        <p className="text-stone text-[13px] leading-relaxed mt-1">
                          {t(p.desc.en, p.desc.es)}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.3}>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-fuego text-[14px] font-semibold hover:gap-3 transition-all">
                {t(WHY_PEDRO.cta.en, WHY_PEDRO.cta.es)}
                <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════ DREAM SECTION — TYPOGRAPHIC ═══════════ */
function DreamSection() {
  const { t } = useLang();
  return (
    <section className="bg-midnight py-20 md:py-32 relative overflow-hidden">
      <GrainOverlay />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-oro/15 to-transparent" />

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#D62C26" strokeWidth="1" />
        <line x1="80%" y1="0" x2="0" y2="80%" stroke="#D4A520" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
            <div className="relative">
              <div className="font-display text-[clamp(60px,10vw,120px)] font-extrabold text-white/[0.05] leading-none tracking-tighter select-none">
                MI CASA
              </div>
              <div className="mt-3 pl-1">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-calma mb-2">
                  <HouseIllustration size={16} className="text-calma/60" />
                  {t("Home. Family. Roots.", "Hogar. Familia. Raíces.")}
                </div>
                <p className="text-white/35 text-[15px] leading-relaxed max-w-sm">
                  {t(
                    "A home isn't just a building. It's where your kids grow up, where holidays happen, where you build something that's actually yours.",
                    "Una casa no es solo un edificio. Es donde crecen tus hijos, donde se celebran las fiestas, donde construyes algo que realmente es tuyo."
                  )}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="font-display text-[clamp(60px,10vw,120px)] font-extrabold text-fuego/[0.08] leading-none tracking-tighter select-none">
                DREAM
              </div>
              <div className="mt-3 pl-1">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-oro mb-2">
                  <KeyIllustration size={16} className="text-oro/60" />
                  {t("Aspiration. Future. Possibility.", "Aspiración. Futuro. Posibilidad.")}
                </div>
                <p className="text-white/35 text-[15px] leading-relaxed max-w-sm">
                  {t(
                    "Pedro started Mi Casa Dream because he believes every family in the Willamette Valley deserves someone who'll fight to make homeownership real. Not someday. Now.",
                    "Pedro creó Mi Casa Dream porque cree que cada familia en el Valle de Willamette merece a alguien que luche para hacer realidad el sueño de tener casa. No algún día. Ahora."
                  )}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(214,44,38,0.2)]">
              {t(DREAM_SECTION.cta.en, DREAM_SECTION.cta.es)}
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════ TESTIMONIALS ═══════════ */
function TestimonialsSection() {
  const { t } = useLang();
  return (
    <section className="bg-paper py-20 md:py-28 relative">
      <div className="absolute bottom-12 left-8 text-haze hidden md:block">
        <DotsGrid cols={4} rows={6} />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-oro mb-3">
                <Star size={14} />
                {t("Reviews", "Reseñas")}
              </div>
              <h2 className="font-display text-[clamp(30px,4.5vw,48px)] font-extrabold text-midnight leading-[0.95] tracking-tight">
                {t("18 five-stars.", "18 cinco estrellas.")}
                <br />
                <span className="font-accent italic text-fuego">{t("Zero exceptions.", "Sin excepciones.")}</span>
              </h2>
            </div>
            <Link href="/testimonials" className="text-calma text-[13px] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all shrink-0">
              {t("All Reviews", "Todas las Reseñas")}
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ScrollReveal className="md:col-span-2">
            <div className="bg-white border border-haze rounded-2xl p-7 md:p-8 h-full relative overflow-hidden">
              <div className="absolute top-4 right-4 text-midnight/[0.03] font-accent text-[120px] leading-none select-none">&ldquo;</div>
              <div className="text-oro text-[14px] mb-4">★★★★★</div>
              <blockquote className="font-accent italic text-midnight text-[17px] md:text-[19px] leading-relaxed relative z-10">
                &ldquo;{TESTIMONIALS[0].text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-fuego/10 flex items-center justify-center text-fuego font-bold text-[13px]">
                  {TESTIMONIALS[0].name[0]}
                </div>
                <div>
                  <div className="text-midnight font-bold text-[14px]">{TESTIMONIALS[0].name}</div>
                  <div className="text-calma text-[12px]">{t(TESTIMONIALS[0].context.en, TESTIMONIALS[0].context.es)}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {TESTIMONIALS.slice(1).map((review, i) => (
              <ScrollReveal key={i} delay={(i + 1) * 0.1}>
                <div className="bg-white border border-haze rounded-2xl p-5 hover:border-oro/20 transition-colors">
                  <div className="text-oro text-[12px] mb-2">★★★★★</div>
                  <p className="font-accent italic text-midnight/70 text-[13px] leading-relaxed line-clamp-3">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-3 pt-3 border-t border-haze flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      i === 0 ? "bg-oro/10 text-oro" : i === 1 ? "bg-calma/10 text-calma" : "bg-fuego/10 text-fuego"
                    }`}>
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-midnight font-bold text-[12px]">{review.name}</div>
                      <div className="text-stone text-[10px]">{t(review.context.en, review.context.es)}</div>
                    </div>
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

/* ═══════════ FAQ ═══════════ */
function FAQSection() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="bg-white py-20 md:py-28 border-t border-haze">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-calma mb-3">FAQ</div>
            <h2 className="font-display text-[clamp(28px,3.5vw,40px)] font-extrabold text-midnight tracking-tight">
              {t("Common Questions", "Preguntas Frecuentes")}
            </h2>
          </div>
        </ScrollReveal>
        <div className="space-y-2">
          {FAQ_HOME.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="border border-haze rounded-xl overflow-hidden hover:border-calma/20 transition-colors">
                <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-paper/50 transition-colors">
                  <span className="font-display text-[14px] font-bold text-midnight pr-4">{t(faq.q.en, faq.q.es)}</span>
                  <ChevronDown size={16} className={`text-calma shrink-0 transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`} />
                </button>
                {openIdx === i && (
                  <div className="px-5 pb-5 text-stone text-[14px] leading-relaxed border-t border-haze pt-4">{t(faq.a.en, faq.a.es)}</div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════ CTA ═══════════ */
function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative bg-midnight py-20 md:py-28 overflow-hidden">
      <GrainOverlay />
      <div className="absolute top-[-60px] right-[10%] w-[200px] h-[200px] bg-fuego/[0.06] rounded-full blur-[80px]" />
      <div className="absolute bottom-[-40px] left-[20%] w-[180px] h-[180px] bg-oro/[0.05] rounded-full blur-[70px]" />
      <div className="absolute top-[40%] left-[60%] w-[150px] h-[150px] bg-calma/[0.04] rounded-full blur-[60px]" />

      {/* Floating illustrations */}
      <div className="absolute top-[15%] left-[8%] text-oro/10 animate-float hidden md:block">
        <HouseIllustration size={40} />
      </div>
      <div className="absolute bottom-[20%] right-[10%] text-calma/10 animate-float hidden md:block" style={{ animationDelay: "3s" }}>
        <KeyIllustration size={36} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-tight">
            {t(CTA_BAND.headline.en, CTA_BAND.headline.es)}{" "}
            <span className="font-accent italic text-fuego">{t(CTA_BAND.headline_accent.en, CTA_BAND.headline_accent.es)}</span>
          </h2>
          <p className="text-white/30 text-[15px] mt-4 max-w-md mx-auto">
            {t(
              "A free call is the first step. No commitment. No sales pitch. Just answers.",
              "Una llamada gratis es el primer paso. Sin compromiso. Sin discurso de ventas. Solo respuestas."
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link href="/contact" className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(214,44,38,0.25)]">
              {t(CTA_BAND.cta.en, CTA_BAND.cta.es)}
              <ArrowRight size={16} />
            </Link>
            <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="text-calma/50 border border-calma/15 text-[14px] rounded-lg px-8 py-4 hover:border-calma/30 transition-colors inline-flex items-center gap-2">
              <Phone size={15} />
              {SITE.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════ PAGE ═══════════ */
export default function HomePage() {
  return (
    <>
      <Nav />
      <HeroSection />
      <StatsTicker />
      <ServicesZigzag />
      <MarketSection />
      <WhyPedroSection />
      <DreamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABand />
      <Footer />
    </>
  );
}
