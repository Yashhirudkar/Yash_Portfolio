"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

export function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-24 sm:py-32 lg:py-40 select-none border-t border-[#111111]/10"
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION BACKGROUND: Pure CSS/SVG Architectural Decorations
          (Subtle opacity strictly between 3% and 8%)
      ───────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Blueprint Grid Pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <pattern id="bg-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#111111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-blueprint-grid)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark */}
        <svg
          className="absolute -right-24 -top-24 h-[440px] w-[440px] opacity-[0.05]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="bg-seigaiha" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 20 A 20 20 0 0 1 40 20" stroke="#111111" strokeWidth="0.8" fill="none" />
              <path d="M 5 20 A 15 15 0 0 1 35 20" stroke="#111111" strokeWidth="0.8" fill="none" />
              <path d="M 10 20 A 10 10 0 0 1 30 20" stroke="#111111" strokeWidth="0.8" fill="none" />
              <path d="M 15 20 A 5 5 0 0 1 25 20" stroke="#111111" strokeWidth="0.8" fill="none" />
              <path d="M -20 10 A 20 20 0 0 1 20 10" stroke="#111111" strokeWidth="0.8" fill="none" />
              <path d="M -15 10 A 15 15 0 0 1 15 10" stroke="#111111" strokeWidth="0.8" fill="none" />
              <path d="M -10 10 A 10 10 0 0 1 10 10" stroke="#111111" strokeWidth="0.8" fill="none" />
              <path d="M 20 10 A 20 20 0 0 1 60 10" stroke="#111111" strokeWidth="0.8" fill="none" />
              <path d="M 25 10 A 15 15 0 0 1 55 10" stroke="#111111" strokeWidth="0.8" fill="none" />
              <path d="M 30 10 A 10 10 0 0 1 50 10" stroke="#111111" strokeWidth="0.8" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-seigaiha)" />
        </svg>

        {/* Minimal Blue Shape — subtle geometric accent */}
        <div className="absolute top-1/2 left-0 h-40 w-1 bg-[#2563EB]/[0.06] -translate-y-1/2" />
        <div className="absolute top-0 right-1/4 h-[1px] w-48 bg-[#2563EB]/[0.08]" />

        {/* Editorial Crosshairs & Perimeter Labels */}
        <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SEC.02 // ARCHITECTURE</span>
        </div>
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>21.1458° N, 79.0882° E</span>
          <span>+</span>
        </div>
        <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SYSTEM // VERIFIED · CLEAN STATE</span>
        </div>
        <div className="absolute bottom-6 right-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>EDITION 2026</span>
          <span>+</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER (40% Left / 60% Right on Desktop)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* ========================================================
              LEFT COLUMN (40% on Desktop, Stacks on Tablet/Mobile)
              Premium Visual Composition (Pure CSS/SVG)
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[40%] flex justify-center"
          >
            <div className="relative w-full max-w-[460px] aspect-[4/5] bg-[#FFFFFF] border border-[#111111]/12 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_-25px_rgba(17,17,17,0.06)]">
              
              {/* Composition Corner Crosshairs */}
              <span className="absolute top-2 left-2 font-mono text-[10px] text-[#111111]/25 select-none">+</span>
              <span className="absolute top-2 right-2 font-mono text-[10px] text-[#111111]/25 select-none">+</span>
              <span className="absolute bottom-2 left-2 font-mono text-[10px] text-[#111111]/25 select-none">+</span>
              <span className="absolute bottom-2 right-2 font-mono text-[10px] text-[#111111]/25 select-none">+</span>

              {/* Composition Top Metadata */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#111111]/10 pb-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[#6B7280]">
                <span className="flex items-center gap-1.5 text-[#111111]">
                  <span className="h-1.5 w-1.5 bg-[#2563EB]" />
                  <span>FIG. 02 // COMPOSITION</span>
                </span>
                <span>ISO 216 // A4</span>
              </div>

              {/* Center Geometric Visual Artboard */}
              <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
                
                {/* Thin Blueprint Grid in visual box (opacity 5%) */}
                <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
                  <defs>
                    <pattern id="comp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#111111" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#comp-grid)" />
                </svg>

                {/* Japanese Wave Pattern (Seigaiha) in Visual Composition (opacity 6%) */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-[0.06]"
                  viewBox="0 0 200 200"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="comp-seigaiha" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 0 20 A 20 20 0 0 1 40 20" stroke="#111111" strokeWidth="0.75" fill="none" />
                      <path d="M 5 20 A 15 15 0 0 1 35 20" stroke="#111111" strokeWidth="0.75" fill="none" />
                      <path d="M 10 20 A 10 10 0 0 1 30 20" stroke="#111111" strokeWidth="0.75" fill="none" />
                      <path d="M 15 20 A 5 5 0 0 1 25 20" stroke="#111111" strokeWidth="0.75" fill="none" />
                      <path d="M -20 10 A 20 20 0 0 1 20 10" stroke="#111111" strokeWidth="0.75" fill="none" />
                      <path d="M -15 10 A 15 15 0 0 1 15 10" stroke="#111111" strokeWidth="0.75" fill="none" />
                      <path d="M 20 10 A 20 20 0 0 1 60 10" stroke="#111111" strokeWidth="0.75" fill="none" />
                      <path d="M 25 10 A 15 15 0 0 1 55 10" stroke="#111111" strokeWidth="0.75" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#comp-seigaiha)" />
                </svg>

                {/* Minimal Architectural Axis Guides */}
                <div className="absolute inset-x-4 top-1/2 h-[1px] bg-[#111111]/[0.07] -translate-y-1/2" />
                <div className="absolute inset-y-4 left-1/2 w-[1px] bg-[#111111]/[0.07] -translate-x-1/2" />
                <div className="absolute h-36 w-36 border border-[#111111]/[0.08] rotate-45 pointer-events-none" />

                {/* Central Decorative Blue Circle & Concentric Geometric Rings */}
                <div className="relative flex items-center justify-center">
                  {/* Subtle outer dashed orbit */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute h-52 w-52 rounded-full border border-dashed border-[#111111]/[0.08]"
                  />
                  
                  {/* Secondary thin orbit with technical ticks */}
                  <div className="absolute h-40 w-40 rounded-full border border-[#2563EB]/[0.15]" />
                  <div className="absolute h-40 w-40 rounded-full border-t-2 border-r-0 border-b-0 border-l-0 border-[#2563EB] rotate-12" />

                  {/* Primary Decorative Blue Circle */}
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-[#2563EB] shadow-[0_12px_36px_-8px_rgba(37,99,235,0.4)] flex items-center justify-center cursor-default"
                  >
                    {/* Inner minimal geometric elements */}
                    <div className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>

                    {/* Small technical coordinate tag overlay */}
                    <span className="absolute -bottom-3 rounded bg-[#111111] px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-white shadow-sm">
                      21.1458° N
                    </span>
                  </motion.div>
                </div>

                {/* Vertical Japanese Editorial Labels */}
                <div className="absolute left-1 top-6 bottom-6 flex flex-col justify-between font-mono text-[8px] tracking-[0.35em] text-[#6B7280] select-none">
                  <div className="[writing-mode:vertical-rl] space-y-1">
                    <span className="text-[#111111] font-semibold">構造設計</span>
                    <span className="text-[#6B7280]/70">· ARCHITECTURE</span>
                  </div>
                  <div className="h-8 w-[1px] bg-[#111111]/15 mx-auto" />
                  <div className="[writing-mode:vertical-rl] text-[#6B7280]/60">
                    PRECISION CRAFT
                  </div>
                </div>

                <div className="absolute right-1 top-6 bottom-6 flex flex-col justify-between items-end font-mono text-[8px] tracking-[0.35em] text-[#6B7280] select-none">
                  <div className="[writing-mode:vertical-rl]">
                    <span>SCALE // 1:1.618</span>
                  </div>
                  <div className="h-8 w-[1px] bg-[#111111]/15 mx-auto" />
                  <div className="[writing-mode:vertical-rl] text-[#2563EB] font-medium">
                    洗練 · MINIMAL
                  </div>
                </div>

              </div>

              {/* Composition Bottom Metadata & Coordinate Stamp */}
              <div className="relative z-10 border-t border-[#111111]/10 pt-3 flex items-end justify-between font-mono text-[9px] text-[#6B7280]">
                <div className="space-y-0.5">
                  <p className="font-semibold text-[#111111] tracking-wider uppercase">ARCH. SPEC // VOL.02</p>
                  <p className="tracking-widest text-[#6B7280]/70">NAGPUR · 21.1458° N, 79.0882° E</p>
                </div>
                <div className="text-right tracking-widest text-[#2563EB] font-medium">
                  READY · 2026
                </div>
              </div>

            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN (60% on Desktop)
              Heading, Description, Statistics, CTA
          ======================================================== */}
          <div className="w-full lg:w-[60%] space-y-8 sm:space-y-10">
            
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#2563EB]"
            >
              <span className="h-[1px] w-6 bg-[#2563EB]" />
              <span className="font-semibold">ABOUT</span>
              <span className="text-[#6B7280]/50 tracking-[0.2em]">· // 01</span>
            </motion.div>

            {/* Large Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.8rem)] font-bold tracking-tight text-[#111111] leading-[1.08]">
                Crafting Scalable Software
                <span className="block text-[#111111]/75 font-poster italic font-normal tracking-tight pt-1">
                  with Clean Architecture.
                </span>
              </h2>
            </motion.div>

            {/* Paragraph Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 max-w-2xl font-sans"
            >
              <p className="text-base sm:text-lg leading-[1.75] text-[#111111] font-normal">
                I am a Full Stack Developer focused on building scalable backend systems, modern frontend experiences, and enterprise-grade applications using React, Next.js, Node.js, NestJS, PostgreSQL, Docker, and cloud technologies.
              </p>
              <p className="text-sm sm:text-base leading-[1.7] text-[#6B7280]">
                I enjoy solving real business problems through clean architecture, performance optimization, and thoughtful user experience.
              </p>
            </motion.div>

            {/* Thin Editorial Divider */}
            <div className="h-[1px] w-full bg-[#111111]/10" />

            {/* ========================================================
                STATISTICS: Four Minimal Bordered Blocks
                (Pure white, crisp hairlines, no colorful cards)
            ======================================================== */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.25 },
                },
              }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {/* Stat 1: 2+ Years Experience */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -2 }}
                className="group relative border border-[#111111]/12 bg-[#FFFFFF] p-5 sm:p-6 transition-colors duration-200 hover:border-[#2563EB]/50"
              >
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#6B7280]/60 mb-2">
                  <span>EXP // 01</span>
                  <span className="h-1 w-1 rounded-full bg-[#111111]/20 group-hover:bg-[#2563EB] transition-colors" />
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                  2+
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                  Years Experience
                </div>
              </motion.div>

              {/* Stat 2: 20+ Projects */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -2 }}
                className="group relative border border-[#111111]/12 bg-[#FFFFFF] p-5 sm:p-6 transition-colors duration-200 hover:border-[#2563EB]/50"
              >
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#6B7280]/60 mb-2">
                  <span>PRJ // 02</span>
                  <span className="h-1 w-1 rounded-full bg-[#111111]/20 group-hover:bg-[#2563EB] transition-colors" />
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                  20+
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                  Projects
                </div>
              </motion.div>

              {/* Stat 3: Full Stack Developer */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -2 }}
                className="group relative border border-[#111111]/12 bg-[#FFFFFF] p-5 sm:p-6 transition-colors duration-200 hover:border-[#2563EB]/50"
              >
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#6B7280]/60 mb-2">
                  <span>ROLE // 03</span>
                  <span className="h-1 w-1 rounded-full bg-[#111111]/20 group-hover:bg-[#2563EB] transition-colors" />
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111111] leading-tight">
                  Full Stack
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                  Developer
                </div>
              </motion.div>

              {/* Stat 4: Available For Work */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -2 }}
                className="group relative border border-[#111111]/12 bg-[#FFFFFF] p-5 sm:p-6 transition-colors duration-200 hover:border-[#2563EB]/50"
              >
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#6B7280]/60 mb-2">
                  <span>SYS // 04</span>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
                  </span>
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111111] leading-tight">
                  Available
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                  For Work
                </div>
              </motion.div>
            </motion.div>

            {/* ========================================================
                CTA BUTTONS (Matching Hero Monospace & Editorial Style)
            ======================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Button: Download Resume */}
              <motion.a
                href="https://drive.google.com/file/d/1rOJhuRrf5z4T_cLndaPWjE9sV7_I2LNy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#2563EB] px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] font-medium text-white shadow-sm transition hover:bg-[#1D4ED8]"
              >
                <span>Download Resume</span>
                <ArrowDownToLine size={14} />
              </motion.a>

              {/* Secondary Button: Contact Me */}
              <motion.a
                href="#contact"
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 border border-[#111111]/25 bg-white px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#111111] transition hover:border-[#111111] hover:bg-[#111111]/[0.03]"
              >
                <span>Contact Me</span>
                <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;

