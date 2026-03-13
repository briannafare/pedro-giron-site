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
  HERO, STATS, SERVICES, WHY_PEDRO, DREAM_SECTION,
  TESTIMONIALS, FAQ_HOME, CTA_BAND, SITE,
} from "@/lib/data";
import {
  Star, MessageCircle, Globe, ThumbsUp, Home, TrendingUp,
  Mountain, Shield, Clock, Phone, ChevronDown, ArrowRight,
} from "lucide-react";
import { useState, useRef } from "react";

const ICON_MAP: Record<string, any> = {
  Star, MessageCircle, Globe, ThumbsUp, Home, TrendingUp,
  Mountain, Shield, Clock,
};

/* ═══════════ HERO — CENTERED TYPOGRAPHIC ═══════════ */
function HeroSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-midnight min-h-screen flex flex-col items-center justify-center overflow-hidden px-5">
      {/* Ambient glows — all three accent colors */}
      <div className="absolute top-[10%] right-[15%] w-[350px] h-[350px] bg-fuego/[0.07] rounded-full blur-[130px]" />
      <div className="absolute bottom-[15%] left-[10%] w-[300px] h-[300px] bg-oro/[0.08] rounded-full blur-[110px]" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-calma/[0.04] rounded-full blur-[120px]" />

      {/* SVG decorative diagonal lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="#D4A520" strokeWidth="1" />
        <line x1="20%" y1="100%" x2="100%" y2="20%" stroke="#2D6B78" strokeWidth="0.5" />
        <line x1="0" y1="60%" x2="60%" y2="0" stroke="#D62C26" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-24 pb-10">
        {/* Language toggle — THE FEATURE */}
        <div className="mb-6">
          <LangToggle size="hero" />
        </div>

        {/* Overline with calma accent */}
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-calma mb-4">
          <div className="w-8 h-[1px] bg-calma/40" />
          {t(HERO.overline.en, HERO.overline.es)}
          <div className="w-8 h-[1px] bg-calma/40" />
        </div>

        {/* Brand name + headshot row */}
        <div className="flex items-center justify-center gap-5 md:gap-8 mb-4">
          <h1 className="font-display text-[clamp(48px,11vw,130px)] font-extrabold leading-[0.85] tracking-tighter text-left">
            <span className="text-white">MI CASA</span>
            <br />
            <span className="text-fuego">DREAM</span>
          </h1>

          {/* Pedro headshot — clean circle, beside the type */}
          <div className="relative shrink-0">
            <div className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-[3px] border-oro/40 shadow-[0_0_40px_rgba(212,165,32,0.15)]">
              <Image
                src="/pedro-headshot.jpg"
                alt="Pedro Giron"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Small calma ring accent */}
            <div className="absolute -inset-2 rounded-full border border-calma/10" />
          </div>
        </div>

        {/* Subheadline — client focused */}
        <p className="font-accent italic text-[clamp(18px,2.5vw,28px)] text-white/50 leading-snug max-w-xl mx-auto mb-3">
          {t(HERO.headline_accent.en, HERO.headline_accent.es)}
        </p>

        <p className="text-white/30 text-[13px] md:text-[14px] leading-relaxed max-w-md mx-auto">
          {t(HERO.sub.en, HERO.sub.es)}
        </p>

        {/* CTAs — tighter, above the fold */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <Link
            href="/contact"
            className="bg-fuego text-white text-[13px] font-semibold rounded-lg px-7 py-3.5 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2"
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

        <div className="mt-6 text-[10px] text-white/15 tracking-wide">
          {SITE.brokerage} · {t("License", "Licencia")} #{SITE.license}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-calma/30">
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-calma/30" />
      </div>
    </section>
  );
}

/* ═══════════ MARQUEE STATS TICKER ═══════════ */
function StatsTicker() {
  const { t } = useLang();
  return (
    <section className="bg-midnight border-y border-oro/10 py-5 overflow-hidden">
      <Marquee speed={25}>
        {STATS.map((stat, i) => (
          <div key={i} className="flex items-center gap-3 mx-10">
            <span className="text-oro font-extrabold text-[20px] tracking-tight">{stat.value}</span>
            <span className="text-white/25 text-[12px] font-medium">{t(stat.en, stat.es)}</span>
            <span className="text-calma/20 mx-4">◆</span>
          </div>
        ))}
        {/* Extra items for seamless loop */}
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

/* ═══════════ SERVICES — EDITORIAL ZIGZAG ═══════════ */
function ServicesZigzag() {
  const { t } = useLang();
  return (
    <section className="bg-paper py-20 md:py-32">
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

        {/* Zigzag editorial layout */}
        <div className="space-y-24 md:space-y-32">
          {SERVICES.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon];
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={i} delay={0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${isEven ? "" : "md:direction-rtl"}`}>
                  {/* Number + visual side */}
                  <div className={`md:col-span-5 ${isEven ? "md:order-1" : "md:order-2"}`}>
                    <div className="relative">
                      {/* Giant number */}
                      <span className="font-display text-[120px] md:text-[160px] font-extrabold leading-none text-midnight/[0.04] select-none">
                        0{i + 1}
                      </span>
                      {/* Decorative shape */}
                      <div className={`absolute top-8 ${isEven ? "right-0" : "left-0"} w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-3xl ${
                        i === 0 ? "bg-fuego/[0.06]" : i === 1 ? "bg-oro/[0.06]" : "bg-calma/[0.06]"
                      }`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon size={48} className={`${
                            i === 0 ? "text-fuego/30" : i === 1 ? "text-oro/30" : "text-calma/30"
                          }`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`md:col-span-7 ${isEven ? "md:order-2" : "md:order-1"}`}>
                    <div className={`inline-block text-[10px] font-bold tracking-[0.12em] uppercase mb-4 ${
                      i === 0 ? "text-fuego" : i === 1 ? "text-oro" : "text-calma"
                    }`}>
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
                      className={`inline-flex items-center gap-2 text-[14px] font-semibold hover:gap-3 transition-all ${
                        i === 0 ? "text-fuego" : i === 1 ? "text-oro" : "text-calma"
                      }`}
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

/* ═══════════ WHY PEDRO — OVERLAPPING EDITORIAL ═══════════ */
function WhyPedroSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-midnight py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-calma/20 to-transparent" />
      <div className="absolute bottom-[20%] right-[-100px] w-[300px] h-[300px] bg-calma/[0.05] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — large photo + overlapping brand card */}
          <ScrollReveal>
            <div className="relative">
              <div className="w-full aspect-[3/4] max-w-[400px] rounded-2xl overflow-hidden relative">
                <Image
                  src="/pedro-headshot.jpg"
                  alt="Pedro Giron"
                  fill
                  className="object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              </div>
              {/* Overlapping brand card */}
              <div className="absolute -bottom-6 -right-4 md:right-[-40px] bg-midnight border border-oro/20 rounded-xl px-6 py-4 shadow-2xl">
                <div className="font-display text-[16px] font-extrabold text-white tracking-tight">
                  MI CASA <span className="text-fuego">DREAM</span>
                </div>
                <div className="text-oro/50 text-[11px] mt-1">{SITE.agent} · {t("Broker", "Corredor")}</div>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-oro text-[12px]">★★★★★</span>
                  <span className="text-white/20 text-[10px]">{SITE.google.count} {t("reviews", "reseñas")}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — copy + pillars */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-oro mb-4">
                {t(WHY_PEDRO.overline.en, WHY_PEDRO.overline.es)}
              </div>
              <h2 className="font-display text-[clamp(30px,4.5vw,48px)] font-extrabold text-white leading-[0.95] tracking-tight mb-2">
                {t(WHY_PEDRO.headline.en, WHY_PEDRO.headline.es)}
                <br />
                <span className="font-accent italic text-fuego">
                  {t(WHY_PEDRO.headline_accent.en, WHY_PEDRO.headline_accent.es)}
                </span>
              </h2>
              <p className="text-white/35 text-[15px] leading-relaxed mt-5 max-w-lg">
                {t(WHY_PEDRO.body.en, WHY_PEDRO.body.es)}
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-4">
              {WHY_PEDRO.pillars.map((p, i) => {
                const Icon = ICON_MAP[p.icon];
                const colors = ["calma", "oro", "fuego"];
                return (
                  <ScrollReveal key={i} delay={i * 0.12}>
                    <div className={`flex gap-4 p-5 rounded-xl border transition-colors duration-300 ${
                      i === 0 ? "border-calma/15 hover:border-calma/30 bg-calma/[0.03]"
                      : i === 1 ? "border-oro/15 hover:border-oro/30 bg-oro/[0.03]"
                      : "border-fuego/15 hover:border-fuego/30 bg-fuego/[0.03]"
                    }`}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        i === 0 ? "bg-calma/10 text-calma"
                        : i === 1 ? "bg-oro/10 text-oro"
                        : "bg-fuego/10 text-fuego"
                      }`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-display text-[15px] font-extrabold text-white tracking-tight">
                          {t(p.title.en, p.title.es)}
                        </h4>
                        <p className="text-white/30 text-[13px] leading-relaxed mt-1">
                          {t(p.desc.en, p.desc.es)}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.3}>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-oro text-[14px] font-semibold hover:gap-3 transition-all"
              >
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

/* ═══════════ DREAM SECTION — TYPOGRAPHIC DECOMPOSITION ═══════════ */
function DreamSection() {
  const { t } = useLang();
  return (
    <section className="bg-paper py-20 md:py-32 relative overflow-hidden">
      {/* Subtle diagonal SVG lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#D62C26" strokeWidth="1" />
        <line x1="80%" y1="0" x2="0" y2="80%" stroke="#D4A520" strokeWidth="0.5" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          {/* Decomposed brand name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
            <div>
              <div className="font-display text-[clamp(60px,10vw,120px)] font-extrabold text-midnight/[0.08] leading-none tracking-tighter select-none">
                MI CASA
              </div>
              <div className="mt-4 pl-1">
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-calma mb-2">
                  {t("Home. Family. Roots.", "Hogar. Familia. Raíces.")}
                </div>
                <p className="text-stone text-[15px] leading-relaxed max-w-sm">
                  {t(
                    "A home isn't just a building. It's where your kids grow up, where holidays happen, where you build something that's actually yours.",
                    "Una casa no es solo un edificio. Es donde crecen tus hijos, donde se celebran las fiestas, donde construyes algo que realmente es tuyo."
                  )}
                </p>
              </div>
            </div>
            <div>
              <div className="font-display text-[clamp(60px,10vw,120px)] font-extrabold text-fuego/[0.12] leading-none tracking-tighter select-none">
                DREAM
              </div>
              <div className="mt-4 pl-1">
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-oro mb-2">
                  {t("Aspiration. Future. Possibility.", "Aspiración. Futuro. Posibilidad.")}
                </div>
                <p className="text-stone text-[15px] leading-relaxed max-w-sm">
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
            <Link
              href="/contact"
              className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2"
            >
              {t(DREAM_SECTION.cta.en, DREAM_SECTION.cta.es)}
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════ TESTIMONIALS — STAGGERED WALL ═══════════ */
function TestimonialsSection() {
  const { t } = useLang();
  return (
    <section className="bg-midnight py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-oro/15 to-transparent" />
      <div className="absolute top-[30%] right-[-80px] w-[250px] h-[250px] bg-fuego/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-oro mb-3">
                {t("Reviews", "Reseñas")}
              </div>
              <h2 className="font-display text-[clamp(30px,4.5vw,48px)] font-extrabold text-white leading-[0.95] tracking-tight">
                {t("18 five-stars.", "18 cinco estrellas.")}
                <br />
                <span className="font-accent italic text-fuego">
                  {t("Zero exceptions.", "Sin excepciones.")}
                </span>
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="text-calma text-[13px] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all shrink-0"
            >
              {t("All Reviews", "Todas las Reseñas")}
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Staggered masonry — first two tall, second two short */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Featured large review */}
          <ScrollReveal className="md:col-span-2">
            <div className="bg-white/[0.03] border border-oro/10 rounded-2xl p-8 h-full">
              <div className="text-oro text-[15px] mb-4">★★★★★</div>
              <blockquote className="font-accent italic text-white/80 text-[18px] md:text-[20px] leading-relaxed">
                &ldquo;{TESTIMONIALS[0].text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-fuego/20 flex items-center justify-center text-fuego font-bold text-[13px]">
                  {TESTIMONIALS[0].name[0]}
                </div>
                <div>
                  <div className="text-white font-bold text-[14px]">{TESTIMONIALS[0].name}</div>
                  <div className="text-calma/60 text-[12px]">{t(TESTIMONIALS[0].context.en, TESTIMONIALS[0].context.es)}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Stacked small reviews */}
          <div className="space-y-5">
            {TESTIMONIALS.slice(1).map((review, i) => (
              <ScrollReveal key={i} delay={(i + 1) * 0.1}>
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-6">
                  <div className="text-oro text-[12px] mb-3">★★★★★</div>
                  <p className="font-accent italic text-white/60 text-[14px] leading-relaxed line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      i === 0 ? "bg-oro/20 text-oro" : i === 1 ? "bg-calma/20 text-calma" : "bg-fuego/20 text-fuego"
                    }`}>
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-white/70 font-bold text-[12px]">{review.name}</div>
                      <div className="text-white/25 text-[10px]">{t(review.context.en, review.context.es)}</div>
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
    <section className="bg-paper py-20 md:py-28">
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
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/50 transition-colors"
                >
                  <span className="font-display text-[14px] font-bold text-midnight pr-4">{t(faq.q.en, faq.q.es)}</span>
                  <ChevronDown size={16} className={`text-calma shrink-0 transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`} />
                </button>
                {openIdx === i && (
                  <div className="px-5 pb-5 text-stone text-[14px] leading-relaxed border-t border-haze pt-4">
                    {t(faq.a.en, faq.a.es)}
                  </div>
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
      <div className="absolute top-[-60px] right-[10%] w-[200px] h-[200px] bg-fuego/[0.06] rounded-full blur-[80px]" />
      <div className="absolute bottom-[-40px] left-[20%] w-[180px] h-[180px] bg-oro/[0.05] rounded-full blur-[70px]" />
      <div className="absolute top-[40%] left-[60%] w-[150px] h-[150px] bg-calma/[0.04] rounded-full blur-[60px]" />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-extrabold text-white leading-[0.95] tracking-tight">
            {t(CTA_BAND.headline.en, CTA_BAND.headline.es)}{" "}
            <span className="font-accent italic text-fuego">
              {t(CTA_BAND.headline_accent.en, CTA_BAND.headline_accent.es)}
            </span>
          </h2>
          <p className="text-white/30 text-[15px] mt-4 max-w-md mx-auto">
            {t(
              "A free call is the first step. No commitment. No sales pitch. Just answers.",
              "Una llamada gratis es el primer paso. Sin compromiso. Sin discurso de ventas. Solo respuestas."
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <Link
              href="/contact"
              className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2"
            >
              {t(CTA_BAND.cta.en, CTA_BAND.cta.es)}
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
              className="text-calma/50 border border-calma/15 text-[14px] rounded-lg px-8 py-4 hover:border-calma/30 transition-colors inline-flex items-center gap-2"
            >
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
      <WhyPedroSection />
      <DreamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABand />
      <Footer />
    </>
  );
}
