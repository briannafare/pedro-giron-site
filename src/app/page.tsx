"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LangToggle from "@/components/LangToggle";
import {
  HERO, STATS, SERVICES, WHY_PEDRO, DREAM_SECTION,
  TESTIMONIALS, FAQ_HOME, CTA_BAND, SITE,
} from "@/lib/data";
import {
  Star, MessageCircle, Globe, ThumbsUp, Home, TrendingUp,
  Mountain, Shield, Clock, Phone, ChevronDown, ArrowRight,
} from "lucide-react";
import { useState } from "react";

const ICON_MAP: Record<string, any> = {
  Star, MessageCircle, Globe, ThumbsUp, Home, TrendingUp,
  Mountain, Shield, Clock,
};

/* ───────── HERO ───────── */
function HeroSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-midnight min-h-[90vh] flex items-center overflow-hidden">
      {/* Ambient glows — using all accent colors */}
      <div className="absolute top-[-120px] right-[-80px] w-[400px] h-[400px] bg-fuego/[0.08] rounded-full blur-[120px]" />
      <div className="absolute bottom-[-80px] left-[10%] w-[300px] h-[300px] bg-oro/[0.08] rounded-full blur-[100px]" />
      <div className="absolute top-[40%] left-[-60px] w-[250px] h-[250px] bg-calma/[0.06] rounded-full blur-[90px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 md:pt-36 md:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            {/* Language toggle — featured, hero-sized, above the headline */}
            <div className="mb-6">
              <LangToggle size="hero" />
            </div>

            <div className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-oro border border-oro/30 rounded-full px-4 py-1.5 mb-5">
              {t(HERO.overline.en, HERO.overline.es)}
            </div>
            <h1 className="mb-2">
              <span className="block font-display text-[clamp(40px,7vw,80px)] font-extrabold text-white leading-[0.95] tracking-tighter">
                {t(HERO.headline_top.en, HERO.headline_top.es)}
              </span>
              <span className="block font-accent text-[clamp(38px,6.5vw,76px)] italic text-fuego leading-[1.1]">
                {t(HERO.headline_accent.en, HERO.headline_accent.es)}
              </span>
            </h1>
            <p className="text-white/40 text-[15px] md:text-[16px] leading-relaxed max-w-md mt-5">
              {t(HERO.sub.en, HERO.sub.es)}
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/contact"
                className="bg-fuego text-white text-[13px] font-semibold rounded-lg px-7 py-3.5 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2"
              >
                {t(HERO.cta.en, HERO.cta.es)}
                <ArrowRight size={15} />
              </Link>
              <a
                href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                className="text-white/30 border border-white/10 text-[13px] rounded-lg px-7 py-3.5 hover:border-white/25 transition-colors inline-flex items-center gap-2"
              >
                <Phone size={14} />
                {HERO.cta2.en}
              </a>
            </div>
            <div className="mt-8 text-[11px] text-white/20">
              {SITE.brokerage} · {t("License", "Licencia")} #{SITE.license}
            </div>
          </div>

          {/* Headshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[240px] h-[280px] md:w-[280px] md:h-[340px] rounded-2xl overflow-hidden border border-white/[0.06] relative z-10">
                <Image
                  src="/pedro-headshot.jpg"
                  alt="Pedro Giron — Mi Casa Dream Realtor"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Accent borders using oro */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-oro/20 z-0" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-oro/10 rounded-xl z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── TRUST STRIP ───────── */
function TrustStrip() {
  const { t } = useLang();
  return (
    <section className="bg-midnight border-t border-oro/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => {
            const Icon = ICON_MAP[stat.icon];
            return (
              <ScrollReveal key={i} delay={i * 0.1} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-oro/[0.08] flex items-center justify-center text-oro">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-oro font-extrabold text-[22px] tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-white/30 text-[11px] mt-0.5">
                    {t(stat.en, stat.es)}
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

/* ───────── SERVICES ───────── */
function ServicesSection() {
  const { t } = useLang();
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-fuego mb-3">
              {t("Services", "Servicios")}
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-midnight leading-tight tracking-tight">
              {t("Turn your ", "Convierte tu ")}
              <span className="font-accent italic text-fuego">
                {t("dream", "sueño")}
              </span>
              {t(" into an address", " en una dirección")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon];
            return (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-7 border border-midnight/[0.04] hover:border-calma/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-fuego/[0.08] flex items-center justify-center text-fuego mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-[18px] font-extrabold text-midnight mb-2 tracking-tight">
                    {t(svc.title.en, svc.title.es)}
                  </h3>
                  <p className="text-stone text-[14px] leading-relaxed flex-1">
                    {t(svc.desc.en, svc.desc.es)}
                  </p>
                  <Link
                    href={svc.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-fuego text-[13px] font-semibold hover:gap-2.5 transition-all"
                  >
                    {t(svc.cta.en, svc.cta.es)}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── WHY PEDRO ───────── */
function WhyPedroSection() {
  const { t } = useLang();
  return (
    <section className="bg-white py-20 md:py-28 border-t border-haze">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-oro mb-3">
              {t(WHY_PEDRO.overline.en, WHY_PEDRO.overline.es)}
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-midnight leading-tight tracking-tight mb-2">
              {t(WHY_PEDRO.headline.en, WHY_PEDRO.headline.es)}
              <br />
              <span className="font-accent italic text-fuego">
                {t(WHY_PEDRO.headline_accent.en, WHY_PEDRO.headline_accent.es)}
              </span>
            </h2>
            <p className="text-stone text-[15px] leading-relaxed mt-4 max-w-lg">
              {t(WHY_PEDRO.body.en, WHY_PEDRO.body.es)}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-fuego text-[14px] font-semibold hover:gap-3 transition-all"
            >
              {t(WHY_PEDRO.cta.en, WHY_PEDRO.cta.es)}
              <ArrowRight size={15} />
            </Link>
          </ScrollReveal>

          <div className="space-y-4">
            {WHY_PEDRO.pillars.map((p, i) => {
              const Icon = ICON_MAP[p.icon];
              return (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="flex gap-4 p-5 rounded-xl bg-paper/80 border border-haze hover:border-calma/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-calma/[0.1] flex items-center justify-center text-calma shrink-0">
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
        </div>
      </div>
    </section>
  );
}

/* ───────── MI CASA DREAM SECTION ───────── */
function DreamSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-midnight py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-fuego/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-[-40px] left-[20%] w-[300px] h-[300px] bg-oro/[0.06] rounded-full blur-[100px]" />
      <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] bg-calma/[0.04] rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="font-display text-[22px] md:text-[28px] font-extrabold text-white tracking-tight mb-2">
              MI CASA <span className="text-fuego">DREAM</span>
            </div>
            <div className="w-16 h-[2px] bg-gradient-to-r from-oro/60 via-fuego/40 to-calma/30 mx-auto my-5" />
            <h2 className="font-accent italic text-[clamp(26px,4vw,42px)] text-white/90 leading-tight">
              {t(DREAM_SECTION.headline.en, DREAM_SECTION.headline.es)}
            </h2>
            <p className="text-white/35 text-[15px] leading-relaxed mt-6 max-w-xl mx-auto">
              {t(DREAM_SECTION.body.en, DREAM_SECTION.body.es)}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-fuego text-white text-[13px] font-semibold rounded-lg px-7 py-3.5 hover:bg-fuego-dark transition-colors"
            >
              {t(DREAM_SECTION.cta.en, DREAM_SECTION.cta.es)}
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────── TESTIMONIALS ───────── */
function TestimonialsSection() {
  const { t } = useLang();
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-oro mb-3">
              {t("Reviews", "Reseñas")}
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold text-midnight leading-tight tracking-tight">
              {t("18 five-star reviews.", "18 reseñas de 5 estrellas.")}
              <br />
              <span className="font-accent italic text-fuego">
                {t("Zero exceptions.", "Sin excepciones.")}
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 border border-haze hover:border-oro/20 transition-colors h-full flex flex-col">
                <div className="text-oro text-[13px] mb-3">★★★★★</div>
                <p className="font-accent italic text-midnight text-[15px] leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-haze flex justify-between items-center">
                  <div>
                    <div className="font-display text-[13px] font-bold text-midnight">
                      {review.name}
                    </div>
                    <div className="text-calma text-[11px] font-medium">
                      {t(review.context.en, review.context.es)}
                    </div>
                  </div>
                  <div className="text-[10px] text-stone/40">{review.date}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-fuego text-[14px] font-semibold hover:gap-3 transition-all"
          >
            {t("See All Reviews", "Ver Todas las Reseñas")}
            <ArrowRight size={15} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
function FAQSection() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-28 border-t border-haze">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-calma mb-3">
              FAQ
            </div>
            <h2 className="font-display text-[clamp(26px,3.5vw,38px)] font-extrabold text-midnight tracking-tight">
              {t("Common Questions", "Preguntas Frecuentes")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-2">
          {FAQ_HOME.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="border border-haze rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-paper/50 transition-colors"
                >
                  <span className="font-display text-[14px] font-bold text-midnight pr-4">
                    {t(faq.q.en, faq.q.es)}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-calma shrink-0 transition-transform duration-300 ${
                      openIdx === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIdx === i && (
                  <div className="px-5 pb-5 text-stone text-[14px] leading-relaxed border-t border-haze">
                    <div className="pt-4">{t(faq.a.en, faq.a.es)}</div>
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

/* ───────── CTA BAND ───────── */
function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative bg-midnight py-16 md:py-20 overflow-hidden">
      <div className="absolute top-[-40px] right-[-30px] w-[180px] h-[180px] bg-fuego/[0.08] rounded-full blur-[80px]" />
      <div className="absolute bottom-[-30px] left-[20%] w-[160px] h-[160px] bg-oro/[0.06] rounded-full blur-[60px]" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-extrabold text-white tracking-tight text-center md:text-left">
          {t(CTA_BAND.headline.en, CTA_BAND.headline.es)}{" "}
          <span className="font-accent italic text-fuego">
            {t(CTA_BAND.headline_accent.en, CTA_BAND.headline_accent.es)}
          </span>
        </h2>
        <Link
          href="/contact"
          className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-8 py-4 hover:bg-fuego-dark transition-colors whitespace-nowrap inline-flex items-center gap-2"
        >
          {t(CTA_BAND.cta.en, CTA_BAND.cta.es)}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

/* ───────── PAGE ───────── */
export default function HomePage() {
  return (
    <>
      <Nav />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <WhyPedroSection />
      <DreamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABand />
      <Footer />
    </>
  );
}
