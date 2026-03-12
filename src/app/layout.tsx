import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "600", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mi Casa Dream | Pedro Giron — Bilingual Realtor Salem Oregon",
  description:
    "Pedro Giron is a bilingual English/Spanish real estate broker in Salem, Oregon. 5-star rated. Schedule a free consultation today.",
  keywords: [
    "bilingual realtor Salem Oregon",
    "Spanish speaking realtor Salem OR",
    "agente de bienes raíces Salem Oregon",
    "Mi Casa Dream",
    "Pedro Giron realtor",
  ],
  openGraph: {
    title: "Mi Casa Dream | Pedro Giron — Bilingual Realtor Salem Oregon",
    description:
      "Pedro Giron helps families buy and sell homes across the Willamette Valley — in English or Spanish.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <LangProvider>
          {children}
        </LangProvider>
        {/* GHL_CHAT_WIDGET */}
      </body>
    </html>
  );
}
