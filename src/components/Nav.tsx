"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { NAV_LINKS, SITE } from "@/lib/data";
import LangToggle from "@/components/LangToggle";
import { Menu, X, Phone } from "lucide-react";

export default function Nav() {
  const { lang, t } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-xl border-b border-calma/[0.08]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-display text-[15px] font-extrabold text-white tracking-tight">
            MI CASA <span className="text-fuego">DREAM</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? "text-oro"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {lang === "en" ? link.en : link.es}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-white/35">
            <span className="text-oro">★ {SITE.google.rating}</span>
            <span className="text-calma/30">·</span>
            <span>{SITE.google.count}</span>
          </div>

          <LangToggle size="nav" />

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-fuego text-white text-[12px] font-semibold rounded-lg px-5 py-2.5 hover:bg-fuego-dark transition-colors"
          >
            {t("Book a Free Call", "Agenda Llamada")}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white/50 hover:text-white p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-midnight/95 backdrop-blur-xl border-t border-calma/[0.08] px-5 pb-8 pt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block text-[15px] font-medium py-3 border-b border-white/5 ${
                pathname === link.href ? "text-oro" : "text-white/50"
              }`}
            >
              {lang === "en" ? link.en : link.es}
            </Link>
          ))}
          <div className="flex justify-center mt-6 mb-4">
            <LangToggle size="hero" />
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block bg-fuego text-white text-center text-[14px] font-semibold rounded-lg px-5 py-3.5 mt-3"
          >
            {t("Book a Free Call", "Agenda Tu Llamada")}
          </Link>
          <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="flex items-center justify-center gap-2 text-calma/60 text-[14px] border border-calma/10 rounded-lg px-5 py-3 mt-3">
            <Phone size={14} />
            {SITE.phone}
          </a>
        </div>
      )}
    </nav>
  );
}
