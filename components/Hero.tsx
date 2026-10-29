"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EditorialBorderOverlay } from "./EditorialBorderOverlay";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[100svh] min-h-[100svh] w-full select-none items-center justify-center overflow-hidden bg-white"
    >
      <EditorialBorderOverlay />

      {/* Background Artwork */}
      <div className="absolute inset-0">
        <Image
          src="/Gemini_Generated_Image_mnd67zmnd67zmnd6.png"
          alt="Hero Illustration"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Subtle Orbit Lines */}
      <div
        style={{ left: "56.14%", top: "50.13%" }}
        className="pointer-events-none absolute aspect-square w-[min(96vw,89vh)] -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          className="h-full w-full"
          aria-hidden
        >
          <g className="hero-orbit-slow">
            <circle
              cx="50"
              cy="50"
              r="48.8"
              stroke="#0A0A0C"
              strokeOpacity="0.12"
              strokeWidth="0.15"
              strokeDasharray="1.2 3.2"
            />
            <circle
              cx="50"
              cy="50"
              r="48.8"
              stroke="#0047FF"
              strokeOpacity="0.18"
              strokeWidth="0.18"
              strokeDasharray="0.6 7"
            />
            <circle cx="98.8" cy="50" r="0.45" fill="#0047FF" fillOpacity="0.6" />
            <circle cx="1.2" cy="50" r="0.45" fill="#0A0A0C" fillOpacity="0.28" />
          </g>

          <g className="hero-orbit-mid">
            <g transform="rotate(-18 50 50)">
              <ellipse
                cx="50"
                cy="50"
                rx="52"
                ry="46"
                stroke="#0047FF"
                strokeOpacity="0.12"
                strokeWidth="0.14"
                strokeDasharray="1.2 3.6"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* Main Title Block */}
      <div className="absolute left-[8%] sm:left-[10%] md:left-[12%] top-[28%], sm:top-[30%] md:top-[32%] z-30 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[#0A0A0C]/50">
            <span className="h-[1px] w-5 bg-[#0A0A0C]/30" />
            <span>PORTFOLIO // VOL.01</span>
          </div>

          <h1 className="font-poster uppercase tracking-tight text-[#0A0A0C] select-none">
            <span className="block text-[clamp(2.2rem,5.2vw,5.5rem)] font-bold leading-[0.88] italic tracking-tight">
              YASH
            </span>
            <span className="block text-[clamp(2.8rem,7vw,7.2rem)] font-extrabold leading-[0.85] italic tracking-tighter text-[#0A0A0C]">
              HIRUDKAR
            </span>
          </h1>

          <div className="pt-3 space-y-4">
            <p className="font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[#0A0A0C]/70 uppercase">
              Full Stack Developer <span className="text-[#0047FF]">·</span> Software Engineer
            </p>

            <p className="max-w-[26rem] sm:max-w-[30rem] font-sans text-xs sm:text-[13px] leading-[1.65] text-[#0A0A0C]/85 font-normal">
              Crafting high-performance enterprise architectures, scalable PostgreSQL systems, and refined React web applications with absolute precision.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Minimal Corner Metadata */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-3 sm:p-5 md:p-6 pt-5 sm:pt-6 md:pt-8 pr-25 sm:pr-35 md:pr-45">
        <div className="flex items-start justify-end font-mono text-[9px] uppercase tracking-[0.28em]">
          <div className="space-y-1 text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0047FF] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0047FF]" />
              </span>
              <p className="font-semibold text-[#0047FF]">AVAILABLE FOR WORK</p>
            </div>
            <p className="text-[#0A0A0C]/75">SYS // STABLE · CRAFTSMAN</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end p-3 sm:p-5 md:p-6 pb-5 sm:pb-6 md:pb-8">
        <div className="flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.28em]">
          <div className="space-y-1">
            <p className="font-semibold text-[#0A0A0C]">EDITION // 2026.01</p>
            <p className="text-[#0A0A0C]/75">NAGPUR, IN · 21.1458° N</p>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}