"use client";
import { useState, useEffect, useRef } from "react";

/* ═══════════ VALLEY LANDSCAPE ═══════════
   The Willamette Valley — Pedro's home, his clients' home.
   Rolling hills, river, trees, warm sky. */
export function ValleyScene({ className = "", variant = "dark" }: { className?: string; variant?: "light" | "dark" }) {
  const o = variant === "dark" ? { hill: 0.15, hill2: 0.1, river: 0.2, tree: 0.25, sun: 0.15 } : { hill: 0.08, hill2: 0.06, river: 0.1, tree: 0.12, sun: 0.1 };
  return (
    <svg viewBox="0 0 800 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="650" cy="80" r="50" fill={`rgba(212,165,32,${o.sun})`} />
      <circle cx="650" cy="80" r="35" fill={`rgba(212,165,32,${o.sun * 0.5})`} />
      <path d="M0 280 Q100 180,200 220 T400 190 T600 210 T800 200 L800 400 L0 400Z" fill={`rgba(212,165,32,${o.hill2})`} />
      <path d="M0 320 Q150 240,300 280 T550 260 T800 290 L800 400 L0 400Z" fill={`rgba(45,107,120,${o.hill})`} />
      <path d="M-20 340 Q100 320,200 345 T400 330 T600 350 T820 335" stroke={`rgba(45,107,120,${o.river})`} strokeWidth="8" strokeLinecap="round" />
      <path d="M0 370 Q200 330,400 360 T800 350 L800 400 L0 400Z" fill={`rgba(45,107,120,${o.hill * 0.7})`} />
      {[120,180,250,420,480,620,680,710].map((x, i) => {
        const h = 25 + (i % 3) * 10, y = 290 + Math.sin(i * 1.3) * 20;
        return <path key={i} d={`M${x} ${y} L${x - 8} ${y + h} L${x + 8} ${y + h}Z`} fill={`rgba(45,107,120,${o.tree})`} />;
      })}
    </svg>
  );
}

/* ═══════════ BUYING JOURNEY ═══════════
   A winding path from bottom-left to a house at top-right.
   Milestones along the path. The story of buying. */
export function BuyingJourney({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Winding path */}
      <path d="M50 460 Q120 400,200 420 T350 340 T420 260 T480 180 T530 100" stroke="rgba(212,165,32,0.2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 6" />
      {/* Path glow */}
      <path d="M50 460 Q120 400,200 420 T350 340 T420 260 T480 180 T530 100" stroke="rgba(212,165,32,0.06)" strokeWidth="16" strokeLinecap="round" />
      {/* Milestone 1 — conversation */}
      <circle cx="80" cy="445" r="14" fill="rgba(214,44,38,0.08)" stroke="rgba(214,44,38,0.15)" strokeWidth="1" />
      <text x="80" y="450" textAnchor="middle" fill="rgba(214,44,38,0.25)" fontSize="11" fontWeight="bold">1</text>
      {/* Milestone 2 — pre-approval */}
      <circle cx="230" cy="400" r="14" fill="rgba(212,165,32,0.08)" stroke="rgba(212,165,32,0.15)" strokeWidth="1" />
      <text x="230" y="405" textAnchor="middle" fill="rgba(212,165,32,0.25)" fontSize="11" fontWeight="bold">2</text>
      {/* Milestone 3 — search */}
      <circle cx="380" cy="310" r="14" fill="rgba(45,107,120,0.08)" stroke="rgba(45,107,120,0.15)" strokeWidth="1" />
      <text x="380" y="315" textAnchor="middle" fill="rgba(45,107,120,0.25)" fontSize="11" fontWeight="bold">3</text>
      {/* Milestone 4 — keys / house */}
      <circle cx="520" cy="110" r="18" fill="rgba(214,44,38,0.1)" stroke="rgba(214,44,38,0.2)" strokeWidth="1.5" />
      {/* House at destination */}
      <path d="M520 80 L500 96 L500 124 L540 124 L540 96 Z" fill="rgba(212,165,32,0.08)" stroke="rgba(212,165,32,0.15)" strokeWidth="1" />
      <rect x="513" y="108" width="14" height="16" rx="1" fill="rgba(212,165,32,0.12)" />
      {/* Radiating lines from house — celebration */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return <line key={i} x1={520 + Math.cos(rad) * 30} y1={100 + Math.sin(rad) * 30} x2={520 + Math.cos(rad) * 42} y2={100 + Math.sin(rad) * 42} stroke="rgba(212,165,32,0.08)" strokeWidth="1" />;
      })}
    </svg>
  );
}

/* ═══════════ SELLING VALUE RISE ═══════════
   House silhouette with rising value curve, upward arrow.
   The story of getting maximum value. */
export function SellingValue({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid lines */}
      {[380,320,260,200,140].map((y, i) => (
        <line key={i} x1="60" y1={y} x2="540" y2={y} stroke="rgba(45,107,120,0.04)" strokeWidth="0.5" />
      ))}
      {/* Rising curve */}
      <path d="M80 400 Q150 380,200 360 T300 300 T400 220 T500 120" fill="rgba(212,165,32,0.04)" stroke="rgba(212,165,32,0.15)" strokeWidth="2" />
      <path d="M80 400 Q150 380,200 360 T300 300 T400 220 T500 120 L500 400 L80 400 Z" fill="rgba(212,165,32,0.03)" />
      {/* Data points on curve */}
      {[[100,390],[200,355],[300,295],[400,215],[500,120]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={3 + i * 0.8} fill="rgba(212,165,32,0.15)" stroke="rgba(212,165,32,0.25)" strokeWidth="0.5" />
      ))}
      {/* Peak indicator */}
      <circle cx="500" cy="120" r="8" fill="rgba(214,44,38,0.1)" stroke="rgba(214,44,38,0.2)" strokeWidth="1" />
      {/* Arrow up at peak */}
      <path d="M500 100 L500 70 M500 70 L490 82 M500 70 L510 82" stroke="rgba(214,44,38,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      {/* House silhouette at base */}
      <path d="M120 420 L100 435 L100 465 L140 465 L140 435 Z" fill="rgba(45,107,120,0.06)" stroke="rgba(45,107,120,0.1)" strokeWidth="1" />
      {/* Dollar signs floating */}
      <text x="350" y="180" fill="rgba(212,165,32,0.1)" fontSize="18" fontWeight="bold">$</text>
      <text x="440" y="150" fill="rgba(212,165,32,0.08)" fontSize="14" fontWeight="bold">$</text>
      <text x="480" y="95" fill="rgba(214,44,38,0.12)" fontSize="20" fontWeight="bold">$</text>
    </svg>
  );
}

/* ═══════════ COMMUNITY / PEDRO'S WORLD ═══════════
   Abstract figures, handshake, family group — togetherness */
export function CommunityScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="250" cy="340" rx="200" ry="25" fill="rgba(212,165,32,0.04)" />
      {/* Central figure — Pedro, slightly larger */}
      <circle cx="250" cy="180" r="20" fill="rgba(214,44,38,0.1)" stroke="rgba(214,44,38,0.15)" strokeWidth="1" />
      <path d="M250 200 Q250 250,240 310" stroke="rgba(214,44,38,0.12)" strokeWidth="3" strokeLinecap="round" />
      <path d="M250 200 Q250 250,260 310" stroke="rgba(214,44,38,0.12)" strokeWidth="3" strokeLinecap="round" />
      {/* Left family group */}
      <circle cx="140" cy="200" r="15" fill="rgba(45,107,120,0.08)" stroke="rgba(45,107,120,0.12)" strokeWidth="1" />
      <path d="M140 215 Q140 260,133 310" stroke="rgba(45,107,120,0.08)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M140 215 Q140 260,147 310" stroke="rgba(45,107,120,0.08)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="170" cy="220" r="10" fill="rgba(45,107,120,0.06)" stroke="rgba(45,107,120,0.1)" strokeWidth="1" />
      {/* Right family group */}
      <circle cx="360" cy="195" r="16" fill="rgba(212,165,32,0.08)" stroke="rgba(212,165,32,0.12)" strokeWidth="1" />
      <path d="M360 211 Q360 255,352 310" stroke="rgba(212,165,32,0.08)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M360 211 Q360 255,368 310" stroke="rgba(212,165,32,0.08)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="390" cy="215" r="11" fill="rgba(212,165,32,0.06)" stroke="rgba(212,165,32,0.1)" strokeWidth="1" />
      {/* Connecting arcs — Pedro to families */}
      <path d="M230 190 Q185 170,155 195" stroke="rgba(212,165,32,0.08)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M270 190 Q315 175,345 195" stroke="rgba(212,165,32,0.08)" strokeWidth="1" strokeDasharray="3 3" />
      {/* Handshake gesture between Pedro and right group */}
      <path d="M265 220 Q290 210,340 218" stroke="rgba(214,44,38,0.08)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ═══════════ STARS CONSTELLATION ═══════════
   For testimonials — stars arranged as constellation with connecting lines */
export function StarsConstellation({ className = "" }: { className?: string }) {
  const stars: [number,number,number][] = [[120,80,5],[200,50,7],[300,90,6],[400,40,8],[480,100,5],[150,180,4],[280,160,6],[420,170,5],[520,60,4],[350,220,5],[180,260,4],[450,250,6],[100,150,3],[500,180,4]];
  const lines: [number,number,number,number][] = [[120,80,200,50],[200,50,300,90],[300,90,400,40],[400,40,480,100],[150,180,280,160],[280,160,420,170],[350,220,450,250],[300,90,280,160],[400,40,420,170]];
  return (
    <svg viewBox="0 0 600 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {lines.map(([x1,y1,x2,y2], i) => (
        <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(212,165,32,0.06)" strokeWidth="0.5" />
      ))}
      {stars.map(([cx,cy,r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill={i % 3 === 0 ? "rgba(214,44,38,0.12)" : i % 3 === 1 ? "rgba(212,165,32,0.12)" : "rgba(45,107,120,0.1)"} />
          <circle cx={cx} cy={cy} r={r * 0.4} fill={i % 3 === 0 ? "rgba(214,44,38,0.2)" : i % 3 === 1 ? "rgba(212,165,32,0.2)" : "rgba(45,107,120,0.15)"} />
        </g>
      ))}
    </svg>
  );
}

/* ═══════════ CONNECTION BRIDGE ═══════════
   For contact — two sides connected by a bridge/arc */
export function ConnectionBridge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bridge arc */}
      <path d="M80 300 Q300 80,520 300" stroke="rgba(212,165,32,0.12)" strokeWidth="2" />
      <path d="M80 300 Q300 80,520 300" stroke="rgba(212,165,32,0.04)" strokeWidth="20" />
      {/* Left pillar */}
      <rect x="65" y="280" width="30" height="80" rx="4" fill="rgba(45,107,120,0.06)" stroke="rgba(45,107,120,0.1)" strokeWidth="1" />
      {/* Right pillar */}
      <rect x="505" y="280" width="30" height="80" rx="4" fill="rgba(214,44,38,0.06)" stroke="rgba(214,44,38,0.1)" strokeWidth="1" />
      {/* Person left */}
      <circle cx="80" cy="260" r="12" fill="rgba(45,107,120,0.1)" />
      {/* Person right */}
      <circle cx="520" cy="260" r="12" fill="rgba(214,44,38,0.1)" />
      {/* Signal waves from center */}
      {[1,2,3].map(i => (
        <circle key={i} cx="300" cy="180" r={20 + i * 25} stroke="rgba(212,165,32,0.05)" strokeWidth="1" fill="none" />
      ))}
      <circle cx="300" cy="180" r="8" fill="rgba(212,165,32,0.15)" />
    </svg>
  );
}

/* ═══════════ DANCE ABSTRACT ═══════════
   Flowing rhythmic curves — cumbia energy, Pedro's personality */
export function DanceAbstract({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 350 Q100 200,200 250 T350 100" stroke="rgba(214,44,38,0.15)" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 380 Q130 230,230 280 T380 130" stroke="rgba(214,44,38,0.08)" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 320 Q100 250,180 300 T320 180" stroke="rgba(212,165,32,0.12)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M0 280 Q80 220,160 260 T340 200 T500 150" stroke="rgba(45,107,120,0.1)" strokeWidth="2" strokeLinecap="round" />
      {[[100,280,6,"rgba(214,44,38,0.12)"],[180,260,4,"rgba(212,165,32,0.15)"],[250,230,8,"rgba(45,107,120,0.1)"],[310,180,5,"rgba(214,44,38,0.08)"],[150,310,3,"rgba(212,165,32,0.1)"],[340,140,6,"rgba(45,107,120,0.08)"]].map(([cx,cy,r,fill], i) => (
        <circle key={i} cx={cx as number} cy={cy as number} r={r as number} fill={fill as string} />
      ))}
    </svg>
  );
}

/* ═══════════ HEADSHOT FRAME ═══════════ */
export function HeadshotFrame({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="97" fill="none" stroke="#2D6B78" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.3" />
      <circle cx="100" cy="100" r="90" fill="none" stroke="#D4A520" strokeWidth="1.5" opacity="0.5" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="#D62C26" strokeWidth="0.5" strokeDasharray="1.5 6" opacity="0.25" />
      <circle cx="100" cy="3" r="2.5" fill="#D4A520" opacity="0.5" />
      <circle cx="100" cy="197" r="2.5" fill="#D4A520" opacity="0.5" />
    </svg>
  );
}

/* ═══════════ ANIMATED COUNTER ═══════════ */
export function useCounter(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => { const p = Math.min((now - start) / duration, 1); setCount(Math.round((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return { count, ref };
}

/* ═══════════ MARKET DATA ═══════════ */
export const MARKET_DATA = {
  median_price: { value: 385000, label: { en: "Median Home Price", es: "Precio Medio" } },
  days_on_market: { value: 28, label: { en: "Avg. Days on Market", es: "Días Promedio en Mercado" } },
  price_change: { value: 4.2, label: { en: "YoY Price Change", es: "Cambio Anual de Precio" } },
  inventory: { value: 1.8, label: { en: "Months of Inventory", es: "Meses de Inventario" } },
};
