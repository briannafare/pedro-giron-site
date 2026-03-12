"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { TESTIMONIALS, SITE } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function TestimonialsPage() {
  const { t } = useLang();

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-midnight pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute top-[-80px] right-[-50px] w-[300px] h-[300px] bg-fuego/[0.06] rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <div className="text-oro text-[20px] mb-4">★★★★★</div>
          <h1 className="mb-2">
            <span className="block font-display text-[clamp(34px,5.5vw,60px)] font-extrabold text-white leading-[0.95] tracking-tighter">
              {t("18 FIVE-STAR REVIEWS.", "18 RESEÑAS DE 5 ESTRELLAS.")}
            </span>
            <span className="block font-accent text-[clamp(32px,5vw,56px)] italic text-fuego leading-[1.15] mt-1">
              {t("Zero exceptions.", "Sin excepciones.")}
            </span>
          </h1>
          <p className="text-white/35 text-[15px] max-w-md mx-auto mt-5">
            {t(
              "Every client. Every transaction. Five stars. Read what real people say about working with Pedro.",
              "Cada cliente. Cada transacción. Cinco estrellas. Lee lo que personas reales dicen sobre trabajar con Pedro."
            )}
          </p>
        </div>
      </section>

      {/* Review grid */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="space-y-5">
            {TESTIMONIALS.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 md:p-8 border border-midnight/[0.04]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-oro text-[14px]">★★★★★</div>
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="text-stone/40">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span className="text-stone/40 text-[11px]">Google</span>
                    </div>
                  </div>
                  <blockquote className="font-accent italic text-midnight text-[16px] md:text-[17px] leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <div className="mt-5 pt-4 border-t border-midnight/[0.04] flex items-center justify-between">
                    <div>
                      <div className="font-display text-[14px] font-bold text-midnight">
                        {review.name}
                      </div>
                      <div className="text-stone text-[12px]">
                        {t(review.context.en, review.context.es)}
                      </div>
                    </div>
                    <div className="text-stone/30 text-[11px]">{review.date}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* More reviews note */}
          <ScrollReveal className="mt-10 text-center">
            <div className="bg-midnight/[0.03] rounded-xl p-6">
              <p className="text-stone text-[14px]">
                {t(
                  `Pedro has ${SITE.google.count} five-star reviews on Google. These are just a few. Want to see more?`,
                  `Pedro tiene ${SITE.google.count} reseñas de 5 estrellas en Google. Estas son solo algunas. ¿Quieres ver más?`
                )}
              </p>
              <div className="mt-3 text-[13px] text-calma font-semibold">
                {t("View Pedro's Google Business Profile →", "Ver Perfil de Google de Pedro →")}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-midnight py-16 md:py-20 overflow-hidden">
        <div className="absolute top-[-40px] right-[-30px] w-[180px] h-[180px] bg-fuego/[0.08] rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-[clamp(22px,3vw,32px)] font-extrabold text-white tracking-tight text-center md:text-left">
            {t("Ready to be Pedro's next ", "¿Listo para ser la próxima ")}
            <span className="font-accent italic text-fuego">
              {t("success story?", "historia de éxito de Pedro?")}
            </span>
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
