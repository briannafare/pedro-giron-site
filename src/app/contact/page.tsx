"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { CONTACT_PAGE, SITE, STATS } from "@/lib/data";
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const { lang, t } = useLang();

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-midnight pt-32 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-80px] right-[-50px] w-[300px] h-[300px] bg-fuego/[0.06] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-60px] left-[10%] w-[200px] h-[200px] bg-calma/[0.04] rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <h1 className="mb-2">
              <span className="block font-display text-[clamp(34px,5.5vw,60px)] font-extrabold text-white leading-[0.95] tracking-tighter">
                {t(CONTACT_PAGE.hero.headline.en, CONTACT_PAGE.hero.headline.es)}
              </span>
              <span className="block font-accent text-[clamp(32px,5vw,56px)] italic text-fuego leading-[1.1]">
                {t(CONTACT_PAGE.hero.headline_accent.en, CONTACT_PAGE.hero.headline_accent.es)}
              </span>
            </h1>
            <p className="text-white/40 text-[15px] max-w-md mt-5">
              {t(CONTACT_PAGE.hero.sub.en, CONTACT_PAGE.hero.sub.es)}
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-midnight pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8">
                  <h2 className="font-display text-[18px] font-extrabold text-white mb-6">
                    {t(CONTACT_PAGE.form.headline.en, CONTACT_PAGE.form.headline.es)}
                  </h2>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                          {t(CONTACT_PAGE.form.fields.first_name.en, CONTACT_PAGE.form.fields.first_name.es)}
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          required
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-[14px] placeholder-white/15 focus:border-calma/40 focus:outline-none focus:ring-1 focus:ring-calma/20 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                          {t(CONTACT_PAGE.form.fields.last_name.en, CONTACT_PAGE.form.fields.last_name.es)}
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          required
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-[14px] placeholder-white/15 focus:border-calma/40 focus:outline-none focus:ring-1 focus:ring-calma/20 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                          {t(CONTACT_PAGE.form.fields.email.en, CONTACT_PAGE.form.fields.email.es)}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-[14px] placeholder-white/15 focus:border-calma/40 focus:outline-none focus:ring-1 focus:ring-calma/20 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                          {t(CONTACT_PAGE.form.fields.phone.en, CONTACT_PAGE.form.fields.phone.es)}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-[14px] placeholder-white/15 focus:border-calma/40 focus:outline-none focus:ring-1 focus:ring-calma/20 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                          {t(CONTACT_PAGE.form.fields.language.en, CONTACT_PAGE.form.fields.language.es)}
                        </label>
                        <select
                          name="preferred_language"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-[14px] focus:border-calma/40 focus:outline-none focus:ring-1 focus:ring-calma/20 transition-colors appearance-none"
                        >
                          <option value="English" className="bg-midnight">English</option>
                          <option value="Español" className="bg-midnight">Español</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                          {t(CONTACT_PAGE.form.fields.interest.en, CONTACT_PAGE.form.fields.interest.es)}
                        </label>
                        <select
                          name="interest"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-[14px] focus:border-calma/40 focus:outline-none focus:ring-1 focus:ring-calma/20 transition-colors appearance-none"
                        >
                          {(lang === "en"
                            ? CONTACT_PAGE.form.interest_options.en
                            : CONTACT_PAGE.form.interest_options.es
                          ).map((opt) => (
                            <option key={opt} value={opt} className="bg-midnight">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/30 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                        {t(CONTACT_PAGE.form.fields.message.en, CONTACT_PAGE.form.fields.message.es)}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-[14px] placeholder-white/15 focus:border-calma/40 focus:outline-none focus:ring-1 focus:ring-calma/20 transition-colors resize-none"
                      />
                    </div>

                    <input type="hidden" name="source" value="website-contact" />

                    <button
                      type="submit"
                      className="w-full bg-fuego text-white text-[14px] font-semibold rounded-lg px-6 py-4 hover:bg-fuego-dark transition-colors flex items-center justify-center gap-2"
                    >
                      {t(CONTACT_PAGE.form.submit.en, CONTACT_PAGE.form.submit.es)}
                      <ArrowRight size={16} />
                    </button>

                    <p className="text-white/20 text-[11px] text-center leading-relaxed">
                      {t(CONTACT_PAGE.form.privacy.en, CONTACT_PAGE.form.privacy.es)}
                    </p>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.15}>
                <div className="space-y-6">
                  {/* Brand card */}
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                    <div className="font-display text-[18px] font-extrabold text-white tracking-tight mb-1">
                      MI CASA <span className="text-fuego">DREAM</span>
                    </div>
                    <div className="text-white/25 text-[12px] mb-5">
                      {SITE.agent} · {SITE.brokerage}
                    </div>

                    <div className="space-y-4">
                      <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-fuego/10 flex items-center justify-center text-fuego group-hover:bg-fuego/20 transition-colors">
                          <Phone size={16} />
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-white">{SITE.phone}</div>
                          <div className="text-[10px] text-white/25">{t("Call or text anytime", "Llama o envía texto")}</div>
                        </div>
                      </a>

                      <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-calma/10 flex items-center justify-center text-calma group-hover:bg-calma/20 transition-colors">
                          <Mail size={16} />
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-white">{SITE.email}</div>
                          <div className="text-[10px] text-white/25">{t("Email Pedro directly", "Correo directo a Pedro")}</div>
                        </div>
                      </a>

                      <div className="flex items-start gap-3 text-white/50">
                        <div className="w-9 h-9 rounded-lg bg-oro/10 flex items-center justify-center text-oro shrink-0">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-white">{SITE.address}</div>
                          <div className="text-[10px] text-white/25">{t("Office location", "Ubicación de oficina")}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                    <h3 className="text-[11px] font-semibold text-white/30 uppercase tracking-wider mb-3">
                      {t("Follow Pedro", "Sigue a Pedro")}
                    </h3>
                    <div className="flex gap-3">
                      <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/40 hover:bg-fuego/15 hover:text-fuego transition-all">
                        <Instagram size={18} />
                      </a>
                      <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/40 hover:bg-fuego/15 hover:text-fuego transition-all">
                        <Facebook size={18} />
                      </a>
                      <a href={SITE.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/40 hover:bg-fuego/15 hover:text-fuego transition-all">
                        <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.22 8.22 0 0 0 4.76 1.52V6.77a4.83 4.83 0 0 1-1-.08z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Trust strip */}
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-oro font-display font-extrabold text-[20px]">5.0 ★</div>
                        <div className="text-white/20 text-[10px]">{t("Google Rating", "Calificación")}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-display font-extrabold text-[20px]">18</div>
                        <div className="text-white/20 text-[10px]">{t("5-Star Reviews", "Reseñas 5★")}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-calma font-display font-extrabold text-[20px]">2</div>
                        <div className="text-white/20 text-[10px]">{t("Languages", "Idiomas")}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-fuego font-display font-extrabold text-[20px]">100%</div>
                        <div className="text-white/20 text-[10px]">{t("Recommend", "Recomiendan")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
