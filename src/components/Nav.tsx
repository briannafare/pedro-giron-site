"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { NAV_LINKS, SITE } from "@/lib/data";
import { Menu, X, Phone } from "lucide-react";

export default function Nav() {
  const { lang, toggle, t } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-[15px] font-extrabold text-white tracking-tight">
            MI CASA <span className="text-fuego">DREAM</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {lang === "en" ? link.en : link.es}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Google stars — desktop only */}
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-white/30 mr-1">
            <span className="text-oro">★ {SITE.google.rating}</span>
            <span>·</span>
            <span>{SITE.google.count} reviews</span>
          </div>

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center border border-fuego/25 rounded-full overflow-hidden"
          >
            <span
              className={`text-[10px] font-semibold tracking-wide px-3 py-1.5 transition-all ${
                lang === "en"
                  ? "bg-fuego/15 text-fuego"
                  : "text-white/30"
              }`}
            >
              EN
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wide px-3 py-1.5 transition-all ${
                lang === "es"
                  ? "bg-fuego/15 text-fuego"
                  : "text-white/30"
              }`}
            >
              ES
            </span>
          </button>

          {/* CTA — desktop */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-fuego text-white text-[12px] font-semibold rounded-lg px-5 py-2.5 hover:bg-fuego-dark transition-colors"
          >
            {t("Book a Free Call", "Agendar Llamada")}
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white/60 hover:text-white p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-midnight border-t border-white/5 px-5 pb-8 pt-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-[15px] font-medium py-3 border-b border-white/5 transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/40"
                }`}
              >
                {lang === "en" ? link.en : link.es}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-fuego text-white text-center text-[14px] font-semibold rounded-lg px-5 py-3.5 hover:bg-fuego-dark transition-colors"
            >
              {t("Book a Free Call", "Agendar Llamada Gratis")}
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center justify-center gap-2 text-white/40 text-[14px] border border-white/10 rounded-lg px-5 py-3"
            >
              <Phone size={14} />
              {SITE.phone}
            </a>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-[12px] text-white/25 justify-center">
            <span className="text-oro">★ {SITE.google.rating}</span>
            <span>·</span>
            <span>{SITE.google.count} {t("reviews", "reseñas")}</span>
          </div>
        </div>
      )}
    </nav>
  );
}
