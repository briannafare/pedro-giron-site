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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-[15px] font-extrabold text-white tracking-tight">
            MI CASA <span className="text-fuego">DREAM</span>
          </span>
        </Link>

        {/* Desktop nav links */}
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

        {/* Right side — Toggle is visually prominent */}
        <div className="flex items-center gap-4">
          {/* Stars — subtle, desktop only */}
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-white/25">
            <span className="text-oro">★ {SITE.google.rating}</span>
            <span>·</span>
            <span>{SITE.google.count}</span>
          </div>

          {/* Language toggle — prominent */}
          <LangToggle size="md" variant="dark" />

          {/* CTA — desktop */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-fuego text-white text-[12px] font-semibold rounded-lg px-5 py-2.5 hover:bg-fuego-dark transition-colors"
          >
            {t("Book a Free Call", "Agenda Llamada")}
          </Link>

          {/* Mobile menu */}
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
                  pathname === link.href ? "text-white" : "text-white/40"
                }`}
              >
                {lang === "en" ? link.en : link.es}
              </Link>
            ))}
          </div>

          {/* Mobile: Toggle gets its own row, centered, bigger */}
          <div className="flex justify-center mt-6 mb-4">
            <LangToggle size="lg" variant="dark" />
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-fuego text-white text-center text-[14px] font-semibold rounded-lg px-5 py-3.5 hover:bg-fuego-dark transition-colors"
            >
              {t("Book a Free Call", "Agenda Tu Llamada")}
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center justify-center gap-2 text-white/40 text-[14px] border border-white/10 rounded-lg px-5 py-3"
            >
              <Phone size={14} />
              {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
