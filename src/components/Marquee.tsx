"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function Marquee({ children, speed = 30, className = "" }: Props) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
