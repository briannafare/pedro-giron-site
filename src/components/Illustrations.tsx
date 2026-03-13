"use client";

import { useState, useEffect, useRef } from "react";

// ═══════════ WILLAMETTE VALLEY LANDSCAPE ═══════════
// Rolling hills, river, trees — the PLACE Pedro serves
export function ValleyScene({ className = "", variant = "light" }: { className?: string; variant?: "light" | "dark" }) {
  const hills = variant === "dark" ? "rgba(45,107,120,0.15)" : "rgba(45,107,120,0.08)";
  const hills2 = variant === "dark" ? "rgba(212,165,32,0.1)" : "rgba(212,165,32,0.06)";
  const river = variant === "dark" ? "rgba(45,107,120,0.2)" : "rgba(45,107,120,0.1)";
  const tree = variant === "dark" ? "rgba(45,107,120,0.25)" : "rgba(45,107,120,0.12)";
  const sun = variant === "dark" ? "rgba(212,165,32,0.15)" : "rgba(212,165,32,0.1)";

  return (
    <svg viewBox="0 0 800 400" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* Sun/moon */}
      <circle cx="650" cy="80" r="50" fill={sun} />
      <circle cx="650" cy="80" r="35" fill={variant === "dark" ? "rgba(212,165,32,0.08)" : "rgba(212,165,32,0.04)"} />
      {/* Far mountains */}
      <path d="M0 280 Q100 180, 200 220 T400 190 T600 210 T800 200 L800 400 L0 400Z" fill={hills2} />
      {/* Mid hills */}
      <path d="M0 320 Q150 240, 300 280 T550 260 T800 290 L800 400 L0 400Z" fill={hills} />
      {/* River */}
      <path d="M-20 340 Q100 320, 200 345 T400 330 T600 350 T820 335" stroke={river} strokeWidth="8" strokeLinecap="round" />
      <path d="M-20 355 Q120 340, 250 360 T500 348 T720 365 T820 355" stroke={river} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      {/* Near hills */}
      <path d="M0 370 Q200 330, 400 360 T800 350 L800 400 L0 400Z" fill={hills} opacity="0.7" />
      {/* Trees — simple triangles, organic placement */}
      {[120, 180, 250, 420, 480, 620, 680, 710].map((x, i) => {
        const h = 25 + (i % 3) * 10;
        const y = 290 + Math.sin(i * 1.3) * 20;
        return (
          <g key={i}>
            <path d={`M${x} ${y} L${x - 8} ${y + h} L${x + 8} ${y + h}Z`} fill={tree} />
            <line x1={x} y1={y + h} x2={x} y2={y + h + 6} stroke={tree} strokeWidth="2" />
          </g>
        );
      })}
    </svg>
  );
}

// ═══════════ COMMUNITY / FAMILY GATHERING ═══════════
// Abstract figures together — togetherness, support, Pedro's community
export function CommunityScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* Ground plane */}
      <ellipse cx="200" cy="260" rx="180" ry="20" fill="rgba(212,165,32,0.06)" />
      {/* Abstract figures — circles for heads, simple body shapes */}
      {/* Figure 1 — adult */}
      <circle cx="120" cy="160" r="16" fill="rgba(214,44,38,0.12)" stroke="rgba(214,44,38,0.2)" strokeWidth="1" />
      <path d="M120 176 Q120 220, 110 250" stroke="rgba(214,44,38,0.15)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M120 176 Q120 220, 130 250" stroke="rgba(214,44,38,0.15)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M120 195 Q100 210, 95 200" stroke="rgba(214,44,38,0.12)" strokeWidth="2" strokeLinecap="round" />
      {/* Figure 2 — adult, arm reaching toward fig 1 */}
      <circle cx="180" cy="155" r="18" fill="rgba(212,165,32,0.12)" stroke="rgba(212,165,32,0.2)" strokeWidth="1" />
      <path d="M180 173 Q180 215, 170 250" stroke="rgba(212,165,32,0.15)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M180 173 Q180 215, 190 250" stroke="rgba(212,165,32,0.15)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M180 190 Q155 185, 138 178" stroke="rgba(212,165,32,0.12)" strokeWidth="2" strokeLinecap="round" />
      {/* Figure 3 — child between them */}
      <circle cx="150" cy="185" r="11" fill="rgba(45,107,120,0.15)" stroke="rgba(45,107,120,0.2)" strokeWidth="1" />
      <path d="M150 196 Q150 225, 145 250" stroke="rgba(45,107,120,0.12)" strokeWidth="2" strokeLinecap="round" />
      <path d="M150 196 Q150 225, 155 250" stroke="rgba(45,107,120,0.12)" strokeWidth="2" strokeLinecap="round" />
      {/* Figure 4 — another adult, slightly behind */}
      <circle cx="250" cy="162" r="15" fill="rgba(45,107,120,0.1)" stroke="rgba(45,107,120,0.15)" strokeWidth="1" />
      <path d="M250 177 Q250 218, 242 250" stroke="rgba(45,107,120,0.1)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M250 177 Q250 218, 258 250" stroke="rgba(45,107,120,0.1)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Figure 5 — another, waving */}
      <circle cx="300" cy="158" r="14" fill="rgba(214,44,38,0.08)" stroke="rgba(214,44,38,0.12)" strokeWidth="1" />
      <path d="M300 172 Q300 215, 293 250" stroke="rgba(214,44,38,0.08)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M300 172 Q300 215, 307 250" stroke="rgba(214,44,38,0.08)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M300 185 Q320 170, 328 155" stroke="rgba(214,44,38,0.08)" strokeWidth="2" strokeLinecap="round" />
      {/* Connecting line — community bond */}
      <path d="M105 200 Q200 175, 320 200" stroke="rgba(212,165,32,0.08)" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );
}

// ═══════════ CELEBRATION / DANCE ABSTRACT ═══════════
// Flowing curves suggesting rhythm and movement — cumbia energy
export function DanceAbstract({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* Rhythmic flowing curves */}
      <path d="M50 350 Q100 200, 200 250 T350 100" stroke="rgba(214,44,38,0.15)" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 380 Q130 230, 230 280 T380 130" stroke="rgba(214,44,38,0.08)" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 320 Q100 250, 180 300 T320 180" stroke="rgba(212,165,32,0.12)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M60 370 Q160 280, 250 320 T400 200" stroke="rgba(212,165,32,0.06)" strokeWidth="2" strokeLinecap="round" />
      {/* Calma cool wave */}
      <path d="M0 280 Q80 220, 160 260 T340 200 T500 150" stroke="rgba(45,107,120,0.1)" strokeWidth="2" strokeLinecap="round" />
      {/* Rhythm dots — like music notes or dance steps */}
      {[
        [100, 280, 6, "rgba(214,44,38,0.12)"],
        [180, 260, 4, "rgba(212,165,32,0.15)"],
        [250, 230, 8, "rgba(45,107,120,0.1)"],
        [310, 180, 5, "rgba(214,44,38,0.08)"],
        [150, 310, 3, "rgba(212,165,32,0.1)"],
        [340, 140, 6, "rgba(45,107,120,0.08)"],
        [220, 290, 4, "rgba(214,44,38,0.1)"],
      ].map(([cx, cy, r, fill], i) => (
        <circle key={i} cx={cx as number} cy={cy as number} r={r as number} fill={fill as string} />
      ))}
    </svg>
  );
}

// ═══════════ DOORWAY / THRESHOLD MOMENT ═══════════
// Abstract doorway — the moment of entering your new home
export function DoorwayScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 400" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* Door frame */}
      <rect x="70" y="60" width="160" height="280" rx="6" fill="rgba(214,44,38,0.04)" stroke="rgba(214,44,38,0.1)" strokeWidth="1.5" />
      {/* Inner door opening — warm light */}
      <rect x="90" y="80" width="120" height="240" rx="4" fill="rgba(212,165,32,0.06)" />
      {/* Light rays from doorway */}
      <path d="M90 80 L40 30" stroke="rgba(212,165,32,0.06)" strokeWidth="1" />
      <path d="M210 80 L260 30" stroke="rgba(212,165,32,0.06)" strokeWidth="1" />
      <path d="M150 80 L150 20" stroke="rgba(212,165,32,0.08)" strokeWidth="1" />
      {/* Threshold line */}
      <line x1="70" y1="340" x2="230" y2="340" stroke="rgba(45,107,120,0.15)" strokeWidth="2" />
      {/* Small figure in doorway */}
      <circle cx="150" cy="200" r="10" fill="rgba(214,44,38,0.08)" />
      <path d="M150 210 Q150 250, 145 280" stroke="rgba(214,44,38,0.08)" strokeWidth="2" strokeLinecap="round" />
      <path d="M150 210 Q150 250, 155 280" stroke="rgba(214,44,38,0.08)" strokeWidth="2" strokeLinecap="round" />
      {/* Door handle */}
      <circle cx="195" cy="210" r="4" fill="rgba(212,165,32,0.15)" stroke="rgba(212,165,32,0.2)" strokeWidth="1" />
    </svg>
  );
}

// ═══════════ GROWTH / RISING CHART ═══════════
// Abstract ascending terrain — value, growth, upward trajectory
export function GrowthScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* Rising terrain */}
      <path d="M0 280 Q50 250, 100 260 T180 220 T250 160 T300 100" fill="rgba(212,165,32,0.06)" stroke="rgba(212,165,32,0.12)" strokeWidth="1.5" />
      <path d="M0 280 L300 280 L300 100" fill="rgba(212,165,32,0.03)" />
      {/* Grid lines */}
      {[200, 220, 240, 260].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="300" y2={y} stroke="rgba(45,107,120,0.04)" strokeWidth="0.5" />
      ))}
      {/* Data points */}
      {[[40, 265], [100, 255], [150, 235], [200, 210], [250, 170], [290, 110]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={3 + i * 0.5} fill="rgba(214,44,38,0.12)" stroke="rgba(214,44,38,0.2)" strokeWidth="0.5" />
      ))}
      {/* Peak marker */}
      <circle cx="290" cy="110" r="6" fill="rgba(214,44,38,0.15)" stroke="rgba(214,44,38,0.25)" strokeWidth="1" />
      <path d="M290 104 L290 80" stroke="rgba(214,44,38,0.15)" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

// ═══════════ HEADSHOT FRAME ═══════════
export function HeadshotFrame({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="97" fill="none" stroke="#2D6B78" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.3" />
      <circle cx="100" cy="100" r="90" fill="none" stroke="#D4A520" strokeWidth="1.5" opacity="0.5" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="#D62C26" strokeWidth="0.5" strokeDasharray="1.5 6" opacity="0.25" />
      <circle cx="100" cy="3" r="2.5" fill="#D4A520" opacity="0.5" />
      <circle cx="100" cy="197" r="2.5" fill="#D4A520" opacity="0.5" />
      <circle cx="3" cy="100" r="2" fill="#2D6B78" opacity="0.35" />
      <circle cx="197" cy="100" r="2" fill="#2D6B78" opacity="0.35" />
    </svg>
  );
}

// ═══════════ DOTS GRID ═══════════
export function DotsGrid({ className = "", cols = 5, rows = 5 }: { className?: string; cols?: number; rows?: number }) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={6 + c * 12} cy={6 + r * 12} r="1.2" fill="currentColor" fillOpacity={0.12 + (r + c) * 0.02} />);
    }
  }
  return (
    <svg width={cols * 12} height={rows * 12} className={className} xmlns="http://www.w3.org/2000/svg">
      {dots}
    </svg>
  );
}

// ═══════════ ANIMATED COUNTER ═══════════
export function useCounter(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

// ═══════════ MARKET DATA ═══════════
export const MARKET_DATA = {
  median_price: { value: 385000, label: { en: "Median Home Price", es: "Precio Medio" } },
  days_on_market: { value: 28, label: { en: "Avg. Days on Market", es: "Días Promedio en Mercado" } },
  price_change: { value: 4.2, label: { en: "YoY Price Change", es: "Cambio Anual de Precio" } },
  inventory: { value: 1.8, label: { en: "Months of Inventory", es: "Meses de Inventario" } },
};
