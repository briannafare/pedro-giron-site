"use client";

// House/home icon — custom SVG, not lucide
export function HouseIllustration({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L4 20h6v20h10V28h8v12h10V20h6L24 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M18 28h12v12H18z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="currentColor" fillOpacity="0.08" />
      <circle cx="24" cy="18" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

// Key icon — for closing/buying
export function KeyIllustration({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="32" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
      <circle cx="16" cy="32" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M24 24L42 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 12l6-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 16l6-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Handshake — for negotiation
export function HandshakeIllustration({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 22h8l6 4 8-6 8 6 6-4h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M18 26l-4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 26l4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 20l4-4 4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="currentColor" fillOpacity="0.08" />
    </svg>
  );
}

// Abstract decorative shape — floating diamond
export function FloatingDiamond({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="2" width="14" height="14" rx="2" transform="rotate(45 12 2)" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" />
    </svg>
  );
}

// Abstract decorative — dots grid pattern
export function DotsGrid({ className = "", cols = 5, rows = 5 }: { className?: string; cols?: number; rows?: number }) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={8 + c * 12} cy={8 + r * 12} r="1.5" fill="currentColor" fillOpacity={0.15 + (r + c) * 0.03} />);
    }
  }
  return (
    <svg width={cols * 12 + 4} height={rows * 12 + 4} className={className} xmlns="http://www.w3.org/2000/svg">
      {dots}
    </svg>
  );
}

// Circular badge frame for headshot
export function HeadshotFrame({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring — calma */}
      <circle cx="100" cy="100" r="98" fill="none" stroke="#2D6B78" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4" />
      {/* Middle ring — oro */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="#D4A520" strokeWidth="1.5" opacity="0.5" />
      {/* Inner ring — fuego accent dots */}
      <circle cx="100" cy="100" r="83" fill="none" stroke="#D62C26" strokeWidth="0.5" strokeDasharray="2 8" opacity="0.3" />
      {/* Corner accent marks */}
      <circle cx="100" cy="6" r="3" fill="#D4A520" opacity="0.6" />
      <circle cx="100" cy="194" r="3" fill="#D4A520" opacity="0.6" />
      <circle cx="6" cy="100" r="2" fill="#2D6B78" opacity="0.4" />
      <circle cx="194" cy="100" r="2" fill="#2D6B78" opacity="0.4" />
    </svg>
  );
}

// Animated counter hook
import { useState, useEffect, useRef } from "react";

export function useCounter(target: number, duration: number = 1500, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

// Salem market data for visualization
export const MARKET_DATA = {
  median_price: { value: 385000, label: { en: "Median Home Price", es: "Precio Medio" }, format: "currency" },
  days_on_market: { value: 28, label: { en: "Avg. Days on Market", es: "Días Promedio en Mercado" } },
  price_change: { value: 4.2, label: { en: "YoY Price Change", es: "Cambio Anual de Precio" }, format: "percent" },
  inventory: { value: 1.8, label: { en: "Months of Inventory", es: "Meses de Inventario" }, format: "months" },
};
