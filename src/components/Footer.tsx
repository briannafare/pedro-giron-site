"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { SITE, FOOTER, NAV_LINKS } from "@/lib/data";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="bg-midnight text-white/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="font-display text-[18px] font-extrabold text-white tracking-tight mb-3">
              MI CASA <span className="text-fuego">DREAM</span>
            </div>
            <p className="text-[13px] leading-relaxed max-w-xs mb-6 text-white/30">
              {t(FOOTER.tagline.en, FOOTER.tagline.es)}
            </p>
            <div className="space-y-2.5 text-[13px]">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 text-calma shrink-0" />
                <span>{SITE.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-calma shrink-0" />
                <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-calma shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">
              {t("Navigate", "Navegar")}
            </h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] hover:text-white transition-colors"
                >
                  {lang === "en" ? link.en : link.es}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">
              {t(FOOTER.sections.services.en, FOOTER.sections.services.es)}
            </h4>
            <div className="flex flex-col gap-2.5 text-[13px]">
              <Link href="/buying" className="hover:text-white transition-colors">
                {t("Buying a Home", "Comprar Casa")}
              </Link>
              <Link href="/selling" className="hover:text-white transition-colors">
                {t("Selling a Home", "Vender Casa")}
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                {t("Land & Acreage", "Terrenos y Acres")}
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">
              {t(FOOTER.sections.connect.en, FOOTER.sections.connect.es)}
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-fuego/20 hover:text-fuego transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-fuego/20 hover:text-fuego transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SITE.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-fuego/20 hover:text-fuego transition-all"
              >
                <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.22 8.22 0 0 0 4.76 1.52V6.77a4.83 4.83 0 0 1-1-.08z" />
                </svg>
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex bg-fuego text-white text-[12px] font-semibold rounded-lg px-5 py-2.5 hover:bg-fuego-dark transition-colors"
            >
              {t("Book a Free Call", "Agendar Llamada Gratis")}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/20">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center">
            <span>&copy; {new Date().getFullYear()} Mi Casa Dream</span>
            <span>·</span>
            <span>{SITE.agent} · {SITE.brokerage}</span>
            <span>·</span>
            <span>{t("License", "Licencia")} #{SITE.license}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{t("Equal Housing Opportunity", "Igualdad de Oportunidad de Vivienda")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
