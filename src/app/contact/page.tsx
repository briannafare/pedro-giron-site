"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import ScrollReveal from "@/components/ScrollReveal";
import { ConnectionBridge, ValleyScene } from "@/components/Illustrations";
import { CONTACT_PAGE, SITE, STATS } from "@/lib/data";
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight, Clock, Star, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const { lang, t } = useLang();

  return (
    <>
      <Nav />
      <InnerHero
        overline={{ en: "Contact", es: "Contacto" }}
        headline={CONTACT_PAGE.hero.headline}
        headline_accent={CONTACT_PAGE.hero.headline_accent}
        sub={CONTACT_PAGE.hero.sub}
        illustration={<ConnectionBridge className="w-full h-full" />}
        accentColor="calma"
      />

      {/* Quick contact options — visual cards */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold text-midnight tracking-tight">
                {t("Choose how to connect", "Elige cómo conectarte")}
              </h2>
              <p className="text-stone text-[14px] mt-2">{t("Pedro responds to every message. Usually within hours.", "Pedro responde cada mensaje. Normalmente en horas.")}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {/* Call */}
            <ScrollReveal delay={0}>
              <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="block bg-white rounded-2xl p-6 border border-fuego/10 hover:border-fuego/25 transition-all hover:shadow-sm group">
                <div className="w-11 h-11 rounded-xl bg-fuego/[0.08] flex items-center justify-center text-fuego mb-4 group-hover:bg-fuego/[0.12] transition-colors">
                  <Phone size={20} />
                </div>
                <h3 className="font-display text-[17px] font-extrabold text-midnight mb-1">{t("Call Pedro", "Llama a Pedro")}</h3>
                <p className="text-fuego font-semibold text-[15px]">{SITE.phone}</p>
                <p className="text-stone text-[12px] mt-2">{t("Best for urgent questions", "Mejor para preguntas urgentes")}</p>
              </a>
            </ScrollReveal>
            {/* Email */}
            <ScrollReveal delay={0.1}>
              <a href={`mailto:${SITE.email}`} className="block bg-white rounded-2xl p-6 border border-oro/10 hover:border-oro/25 transition-all hover:shadow-sm group">
                <div className="w-11 h-11 rounded-xl bg-oro/[0.08] flex items-center justify-center text-oro mb-4 group-hover:bg-oro/[0.12] transition-colors">
                  <Mail size={20} />
                </div>
                <h3 className="font-display text-[17px] font-extrabold text-midnight mb-1">Email</h3>
                <p className="text-oro font-semibold text-[14px] break-all">{SITE.email}</p>
                <p className="text-stone text-[12px] mt-2">{t("Detailed questions & documents", "Preguntas detalladas y documentos")}</p>
              </a>
            </ScrollReveal>
            {/* Instagram DM */}
            <ScrollReveal delay={0.2}>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl p-6 border border-calma/10 hover:border-calma/25 transition-all hover:shadow-sm group">
                <div className="w-11 h-11 rounded-xl bg-calma/[0.08] flex items-center justify-center text-calma mb-4 group-hover:bg-calma/[0.12] transition-colors">
                  <Instagram size={20} />
                </div>
                <h3 className="font-display text-[17px] font-extrabold text-midnight mb-1">Instagram DM</h3>
                <p className="text-calma font-semibold text-[14px]">@pedrogiron_realtor</p>
                <p className="text-stone text-[12px] mt-2">{t("Quick casual questions", "Preguntas rápidas y casuales")}</p>
              </a>
            </ScrollReveal>
          </div>

          {/* Office location */}
          <ScrollReveal delay={0.15}>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-haze">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-midnight/[0.05] flex items-center justify-center text-midnight shrink-0"><MapPin size={18} /></div>
                  <div>
                    <h3 className="font-display text-[15px] font-extrabold text-midnight">{t("Office", "Oficina")}</h3>
                    <p className="text-stone text-[14px] leading-relaxed">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-midnight/[0.05] flex items-center justify-center text-midnight shrink-0"><Clock size={18} /></div>
                  <div>
                    <h3 className="font-display text-[15px] font-extrabold text-midnight">{t("Hours", "Horario")}</h3>
                    <p className="text-stone text-[14px]">{t("Mon–Sat 8am–7pm", "Lun–Sáb 8am–7pm")}</p>
                    <p className="text-stone text-[12px]">{t("Evenings & Sundays by appointment", "Noches y domingos con cita")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-oro/[0.06] flex items-center justify-center text-oro shrink-0"><Star size={18} /></div>
                  <div>
                    <h3 className="font-display text-[15px] font-extrabold text-midnight">{SITE.google.rating} ★</h3>
                    <p className="text-stone text-[14px]">{SITE.google.count} {t("Google reviews", "reseñas Google")}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Social + Brokerage */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone text-[13px] hover:text-fuego transition-colors"><Facebook size={16} />Facebook</a>
              <span className="text-haze">·</span>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone text-[13px] hover:text-fuego transition-colors"><Instagram size={16} />Instagram</a>
              <span className="text-haze">·</span>
              <span className="text-stone/50 text-[12px]">{SITE.brokerage} · {t("License", "Licencia")} #{SITE.license}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-midnight py-14 md:py-18 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 opacity-15"><ValleyScene className="w-full" variant="dark" /></div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(26px,4vw,40px)] font-extrabold text-white tracking-tight">
              {t("Your ", "Tu ")}<span className="font-accent italic text-fuego">{t("dream home", "casa soñada")}</span>{t(" starts with one conversation.", " empieza con una conversación.")}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="bg-fuego text-white text-[14px] font-semibold rounded-lg px-7 py-3.5 hover:bg-fuego-dark transition-colors inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(214,44,38,0.2)]">
                <Phone size={15} />{t("Call Now", "Llama Ahora")}
              </a>
              <a href={`mailto:${SITE.email}`} className="text-calma/50 border border-calma/15 text-[14px] rounded-lg px-7 py-3.5 hover:border-calma/30 transition-colors inline-flex items-center gap-2">
                <Mail size={15} />{t("Send Email", "Enviar Email")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
