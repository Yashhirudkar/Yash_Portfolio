"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, MapPin, Calendar, Briefcase } from "lucide-react";

interface ExperienceItem {
  id: string;
  year: string;
  duration: string;
  company: string;
  role: string;
  location: string;
  status: string;
  specNo: string;
  kanji: string;
  description: string;
  milestones: string[];
  stack: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "agricom",
    year: "2026",
    duration: "JUN 2026 — PRESENT",
    company: "Agricom Impex",
    role: "Full Stack Developer",
    location: "Nagpur, India · Hybrid",
    status: "ACTIVE // PRODUCTION",
    specNo: "EXP.01",
    kanji: "構造設計",
    description:
      "Build enterprise CRM modules, backend APIs, frontend dashboards, authentication systems, and business automation.",
    milestones: [
      "Architected 30+ interconnected modules across partner lifecycles, logistics, and order fulfillment.",
      "Engineered a dynamic hierarchical RBAC engine powering organization-wide access control and approval flows.",
      "Delivered real-time collaboration, notification pipelines, and activity timelines with Socket.IO.",
      "Optimized PostgreSQL queries with composite B-Tree indexing, transaction isolation, and cursor pagination.",
    ],
    stack: ["REACT", "NEXT.JS", "NESTJS", "NODE.JS", "POSTGRESQL", "DOCKER"],
  },
  {
    id: "bizprospex",
    year: "2024",
    duration: "JUN 2024 — MAY 2026",
    company: "BizProspex",
    role: "Software Developer",
    location: "Nagpur, India",
    status: "CERTIFIED // COMPLETED",
    specNo: "EXP.02",
    kanji: "基盤構築",
    description:
      "Worked on web development, CRM customization, automation, WordPress integrations, and digital solutions.",
    milestones: [
      "Shipped scalable MERN/PERN applications serving 1,000+ active enterprise users at 99.9% uptime.",
      "Cut database query execution times by 60% across 100k+ record datasets through index tuning.",
      "Automated multi-server provisioning with Docker and Ansible, slashing deployment errors by 40%.",
      "Hardened RESTful APIs with JWT, HMAC verification, rate-limiting, and OWASP security practices.",
    ],
    stack: ["REACT", "NODE.JS", "EXPRESS", "MYSQL", "WORDPRESS"],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked progress for timeline blueprint line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-24 sm:py-32 lg:py-40 select-none border-t border-[#111111]/10"
      aria-label="Professional Journey"
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION BACKGROUND: Pure Blueprint Grid & Japanese Wave Patterns
          (Exact continuity with Hero, About, Tech Arsenal, and Featured Work)
      ───────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Blueprint Grid Pattern (4% opacity) */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <pattern id="exp-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#111111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#exp-blueprint-grid)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Top Left */}
        <svg
          className="absolute -left-24 top-20 h-[440px] w-[440px] opacity-[0.04]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="exp-seigaiha-tl" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#exp-seigaiha-tl)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Bottom Right */}
        <svg
          className="absolute -right-24 bottom-24 h-[420px] w-[420px] opacity-[0.035]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="exp-seigaiha-br" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#exp-seigaiha-br)" />
        </svg>

        {/* Minimal Blueprint Geometric Accents */}
        <div className="absolute top-1/4 right-0 h-44 w-[1px] bg-[#2563EB]/[0.08]" />
        <div className="absolute top-0 left-1/3 h-[1px] w-56 bg-[#2563EB]/[0.08]" />
        <div className="absolute bottom-1/3 left-0 h-40 w-[2px] bg-[#2563EB]/[0.07]" />

        {/* Editorial Crosshairs & Perimeter Labels */}
        <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SEC.05 // PROFESSIONAL JOURNEY</span>
        </div>
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>TIMELINE // 2024 — 2026</span>
          <span>+</span>
        </div>
        <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>CAREER SPEC // VERIFIED PRODUCTION</span>
        </div>
        <div className="absolute bottom-6 right-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>21.1458° N, 79.0882° E</span>
          <span>+</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* ==========================================================
            TOP: EDITORIAL SECTION HEADER
        ========================================================== */}
        <div className="mb-20 sm:mb-28 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#111111]/10 pb-8 sm:pb-12">
            
            {/* Left Header Column */}
            <div className="space-y-4 max-w-3xl">
              {/* Small Label */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#2563EB]"
              >
                <span className="h-[1px] w-6 bg-[#2563EB]" />
                <span className="font-semibold">SECTION 05</span>
                <span className="text-[#6B7280]/50 tracking-[0.2em]">· // EXPERIENCE</span>
              </motion.div>

              {/* Large Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-bold tracking-tight text-[#111111] leading-[1.04]">
                  Professional Journey
                  <span className="block text-[#111111]/70 font-poster italic font-normal tracking-tight pt-1.5">
                    Engineering at Scale &amp; Precision.
                  </span>
                </h2>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base sm:text-lg leading-[1.7] text-[#6B7280] max-w-2xl font-normal pt-1"
              >
                A timeline of engineering experience, product development, and continuous learning.
              </motion.p>
            </div>

            {/* Right Editorial Metadata Stamp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex flex-col items-start lg:items-end justify-between font-mono text-[9px] uppercase tracking-[0.26em] text-[#6B7280] space-y-2 border-l lg:border-l-0 lg:border-r border-[#111111]/10 pl-5 lg:pl-0 lg:pr-5 select-none"
            >
              <div className="flex items-center gap-2 text-[#111111]">
                <span className="h-1.5 w-1.5 bg-[#2563EB]" />
                <span className="font-semibold">ARCH.SPEC // VOL.05</span>
              </div>
              <div className="flex items-center gap-3 text-[#6B7280]/80">
                <span>EXPERIENCE</span>
                <span className="text-[#2563EB] font-medium">2+ YEARS PRODUCTION</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B7280]/60">
                <span>PARADIGM</span>
                <span>SYSTEM &amp; BACKEND ENG</span>
              </div>
              <div className="text-[10px] text-[#111111]/70 tracking-widest pt-1">
                経歴譜 · CAREER TIMELINE
              </div>
            </motion.div>

          </div>
        </div>

        {/* ==========================================================
            MIDDLE: EDITORIAL TIMELINE WITH CONTINUOUS BLUEPRINT LINE
        ========================================================== */}
        <div className="relative">
          
          {/* ── Central Vertical Blueprint Line (Desktop / Tablet) ── */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-[1px] bg-[#111111]/10 pointer-events-none" />
          
          {/* Scroll-Linked Fill Indicator */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-[#2563EB] pointer-events-none z-10"
          />

          {/* Timeline Experience Items */}
          <div className="space-y-20 sm:space-y-28 lg:space-y-36">
            {EXPERIENCES.map((item, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col md:flex-row items-stretch"
                >
                  {/* ── Center Node Anchor Tick ── */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 top-8 z-20 flex h-7 w-7 items-center justify-center border border-[#111111]/15 bg-[#FFFFFF] shadow-sm transition-colors duration-300 group-hover:border-[#2563EB]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#111111]/40 transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:scale-125" />
                    <span className="absolute -top-1 -right-1 font-mono text-[8px] text-[#111111]/25 group-hover:text-[#2563EB]/60 select-none">+</span>
                  </div>

                  {/* ====================================================
                      COLUMN A: Alternating Layout
                      Item 01: Spec Card Left | Year Right
                      Item 02: Year Left | Spec Card Right
                  ==================================================== */}
                  
                  {/* LEFT COLUMN (Desktop 50%) */}
                  <div className={`w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 ${isEven ? "md:pr-14 lg:pr-20 md:text-right" : "md:pr-14 lg:pr-20"}`}>
                    {!isEven ? (
                      /* Block 01 Content Card (Left) */
                      <ExperienceCard item={item} isEven={false} />
                    ) : (
                      /* Block 02 Year & Metadata Showcase (Left on Desktop) */
                      <YearShowcase item={item} isReversed={true} />
                    )}
                  </div>

                  {/* RIGHT COLUMN (Desktop 50%) */}
                  <div className={`w-full md:w-1/2 pl-12 sm:pl-16 md:pl-14 lg:pl-20 mt-6 md:mt-0`}>
                    {!isEven ? (
                      /* Block 01 Year & Metadata Showcase (Right on Desktop) */
                      <YearShowcase item={item} isReversed={false} />
                    ) : (
                      /* Block 02 Content Card (Right) */
                      <ExperienceCard item={item} isEven={true} />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ==========================================================
            BOTTOM: ARCHITECTURAL NOTE & SUMMARY DIRECTIVE
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 sm:mt-32 lg:mt-40 border-t border-[#111111]/10 pt-8 sm:pt-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-[#6B7280] gap-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#2563EB]" />
              <span className="text-[#111111] font-semibold">CAREER TRAJECTORY</span>
              <span>· SHIP RAPIDLY, ARCHITECT DEFENSIVELY</span>
            </div>
            <div className="text-[#2563EB] tracking-widest">
              実績検証 // 100% PRODUCTION VERIFIED
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ─── Experience Specification Block (Magazine Style) ─── */
function ExperienceCard({ item, isEven }: { item: ExperienceItem; isEven: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="relative border border-[#111111]/12 bg-[#FFFFFF] p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_-25px_rgba(17,17,17,0.05)] transition-all duration-300 group-hover:border-[#2563EB] group-hover:shadow-[0_25px_60px_-20px_rgba(37,99,235,0.1)] flex flex-col justify-between"
    >
      {/* Corner Crosshairs */}
      <span className="absolute top-1.5 left-2 font-mono text-[9px] text-[#111111]/25 select-none transition-colors group-hover:text-[#2563EB]/70">+</span>
      <span className="absolute top-1.5 right-2 font-mono text-[9px] text-[#111111]/25 select-none transition-colors group-hover:text-[#2563EB]/70">+</span>
      <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-[#111111]/25 select-none transition-colors group-hover:text-[#2563EB]/70">+</span>
      <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-[#111111]/25 select-none transition-colors group-hover:text-[#2563EB]/70">+</span>

      {/* Card Top Metadata Bar */}
      <div className="flex items-center justify-between border-b border-[#111111]/10 pb-3 mb-5 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6B7280]">
        <div className="flex items-center gap-2">
          <span className="text-[#111111] font-semibold">{item.specNo}</span>
          <span className="text-[#111111]/20">//</span>
          <span className="text-[#2563EB] font-medium">{item.status}</span>
        </div>
        <span className="text-[#6B7280]/60 hidden sm:inline">{item.kanji}</span>
      </div>

      {/* Company Name & Role Heading */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[#6B7280]">
          <Briefcase size={12} className="text-[#2563EB]" />
          <span>{item.company}</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] leading-tight transition-transform duration-300 ease-out group-hover:translate-x-1">
          {item.role}
        </h3>

        {/* Expanding Blue Line Accent */}
        <div className="h-[2px] w-8 bg-[#2563EB] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-28" />
      </div>

      {/* Duration & Location Metadata */}
      <div className="flex flex-wrap items-center gap-4 py-2 text-[10px] font-mono text-[#6B7280] uppercase tracking-wider border-b border-[#111111]/8 mb-5">
        <span className="flex items-center gap-1.5 text-[#111111]">
          <Calendar size={12} className="text-[#2563EB]" />
          <span>{item.duration}</span>
        </span>
        <span className="flex items-center gap-1.5 text-[#6B7280]/80">
          <MapPin size={12} />
          <span>{item.location}</span>
        </span>
      </div>

      {/* Description */}
      <p className="font-sans text-sm sm:text-[15px] leading-[1.75] text-[#111111]/90 font-normal mb-6">
        {item.description}
      </p>

      {/* Key Engineering Milestones (Blueprint Ticks) */}
      <div className="space-y-2.5 mb-6">
        <span className="block font-mono text-[8.5px] uppercase tracking-[0.28em] text-[#6B7280]/70">
          ENGINEERING CONTRIBUTIONS
        </span>
        <ul className="space-y-2 font-sans text-xs sm:text-[13px] text-[#6B7280] leading-relaxed">
          {item.milestones.map((m, mIdx) => (
            <li key={mIdx} className="flex items-start gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] mt-1.5 shrink-0" />
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technology Stack Tags */}
      <div className="pt-4 border-t border-[#111111]/10">
        <span className="block font-mono text-[8.5px] uppercase tracking-[0.28em] text-[#6B7280]/70 mb-2">
          PRODUCTION STACK
        </span>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="border border-[#111111]/12 bg-[#111111]/[0.02] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#111111] transition-colors duration-200 group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/[0.03]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Japanese Minimal Blueprint Line Accent on Hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2563EB] transition-all duration-300 ease-out group-hover:w-full" />
    </motion.div>
  );
}

/* ─── Large Year & Architectural Specimen Showcase ─── */
function YearShowcase({ item, isReversed }: { item: ExperienceItem; isReversed: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`h-full flex flex-col justify-between py-4 ${
        isReversed ? "md:items-end md:text-right" : "md:items-start md:text-left"
      }`}
    >
      {/* Top Year Metric & Japanese Watermark */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#2563EB]">
          <span>{item.specNo}</span>
          <span className="h-[1px] w-5 bg-[#2563EB]" />
          <span>{item.duration}</span>
        </div>

        {/* Large Typography Year that scales on hover */}
        <div className="font-poster text-[clamp(4.5rem,8vw,7.5rem)] font-extrabold tracking-tighter text-[#111111] leading-[0.88] select-none transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]">
          {item.year}
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B7280] font-medium pt-1">
          {item.company}
        </div>
      </div>

      {/* Middle Architectural Specimen Callout */}
      <div className="my-6 p-5 border border-[#111111]/10 bg-[#FAFAFA] max-w-sm space-y-2">
        <div className="flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.26em] text-[#6B7280]">
          <span>ARCH.VERIFIED</span>
          <span className="text-[#2563EB]">100% SCALE</span>
        </div>
        <div className="font-sans text-xs text-[#111111]/80 leading-relaxed">
          {item.role} responsible for high-concurrency systems, enterprise logic, and cloud infrastructure delivery.
        </div>
        <div className="font-mono text-[8px] text-[#6B7280]/60 pt-1 tracking-widest">
          NAGPUR · 21.1458° N // {item.year}
        </div>
      </div>

      {/* Bottom Kanji Stamp */}
      <div className="font-mono text-xs uppercase tracking-[0.35em] text-[#111111]/30 select-none">
        {item.kanji} · 開発経歴
      </div>
    </motion.div>
  );
}

export default Experience;

