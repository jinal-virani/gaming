import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keshava game | Premium Wooden Puzzles & 3D Puzzles for Adults in India",
  description:
    "Discover Keshava game premium wooden puzzles, 3D puzzles for adults, connect the dot games, and puzzle board challenges India to boost focus, memory, and fun.",
  keywords: [
    "premium wooden puzzles",
    "3D puzzles for adults",
    "brain training puzzle games",
    "connect the dot games",
    "puzzle board challenges India",
    "adult puzzle games",
    "improve focus and memory games",
    "wooden puzzles online",
    "best puzzle games for problem solving",
    "Keshava puzzles Surat",
  ],
  openGraph: {
    title: "Keshava game | Premium Wooden Puzzles & Brain Games for Sharp Minds",
    description:
      "Premium wooden puzzles, 3D puzzles for adults, puzzle board challenges India and connect the dot games by Keshava puzzles Surat.",
    url: "https://www.keshavagame.com/",
    siteName: "Keshava game",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keshava game | Premium Wooden Puzzles & Brain Games",
    description:
      "Explore premium wooden puzzles, 3D puzzles for adults and brain training puzzle games designed in Surat, Gujarat.",
    images: [
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  alternates: {
    canonical: "https://www.keshavagame.com/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-slate-100 antialiased selection:bg-cyan-400/30 selection:text-white">
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="beforeInteractive">{`
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  base: '#07090f',
                  wood: '#8a5a33',
                  neon: '#25d5e5',
                  violet: '#8b5cf6'
                },
                boxShadow: {
                  glow: '0 0 25px rgba(37,213,229,0.25)',
                  wood: '0 10px 30px rgba(138,90,51,0.25)'
                },
                backgroundImage: {
                  grid: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.2) 1px, transparent 0)',
                  grain: 'linear-gradient(120deg, rgba(138,90,51,0.16), rgba(37,213,229,0.05), rgba(0,0,0,0.65))'
                }
              }
            }
          }
        `}</Script>
        {children}
      </body>
    </html>
  );
}
