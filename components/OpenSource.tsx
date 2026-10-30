"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  GitBranch,
  Star,
  GitFork,
  ArrowUpRight,
  Code2,
  Terminal,
  CheckCircle2,
} from "lucide-react";

interface PinnedRepo {
  id: string;
  name: string;
  description: string;
  language: string;
  langColor: string;
  stars: number;
  forks: number;
  tag: string;
  url: string;
}

const PINNED_REPOSITORIES: PinnedRepo[] = [
  {
    id: "agricom-crm",
    name: "agricom-crm-engine",
    description:
      "Enterprise agribusiness CRM & ERP backend system with hierarchical RBAC, real-time Socket.IO collaboration, and PostgreSQL cursor pagination.",
    language: "TypeScript",
    langColor: "#2563EB",
    stars: 12,
    forks: 4,
    tag: "Enterprise SaaS",
    url: "https://github.com/yashhirudkar",
  },
  {
    id: "trading-platform",
    name: "trading-workshop-platform",
    description:
      "High-converting webinar platform with idempotent Stripe payment checkouts, HMAC webhook verification, and real-time attendance telemetry.",
    language: "Next.js",
    langColor: "#111111",
    stars: 8,
    forks: 2,
    tag: "Fintech & WebRTC",
    url: "https://github.com/yashhirudkar",
  },
  {
    id: "rbac-starter",
    name: "enterprise-rbac-starter",
    description:
      "Production-ready NestJS starter boilerplate implementing dynamic organizational roles, fine-grained permissions guards, and JWT authentication.",
    language: "TypeScript",
    langColor: "#2563EB",
    stars: 15,
    forks: 6,
    tag: "Architecture",
    url: "https://github.com/yashhirudkar",
  },
  {
    id: "portfolio-editorial",
    name: "yash-portfolio-v2",
    description:
      "Japanese-inspired luxury editorial developer portfolio built with Next.js 15, React 19, Tailwind CSS v4, and Framer Motion spring physics.",
    language: "TypeScript",
    langColor: "#2563EB",
    stars: 24,
    forks: 7,
    tag: "Editorial UI",
    url: "https://github.com/yashhirudkar",
  },
];

const TOP_LANGUAGES = [
  { name: "TypeScript", pct: 54, color: "bg-[#2563EB]" },
  { name: "JavaScript", pct: 22, color: "bg-[#111111]" },
  { name: "PostgreSQL / SQL", pct: 14, color: "bg-[#2563EB]/70" },
  { name: "Tailwind / CSS", pct: 8, color: "bg-[#111111]/40" },
  { name: "Shell & Docker", pct: 2, color: "bg-[#2563EB]/30" },
];

/**
 * Generate contribution calendar data matrix (24 weeks x 7 days)
 * TODO: Replace with live GitHub GraphQL API fetch (https://api.github.com/graphql)
 * Example query: user(login: "yashhirudkar") { contributionsCollection { contributionCalendar ... } }
 */
function generateContributionWeeks() {
  const weeks = [];
  const patterns = [
    [0, 1, 2, 1, 3, 2, 0],
    [1, 2, 0, 3, 2, 1, 0],
    [2, 3, 2, 1, 0, 2, 1],
    [0, 1, 3, 2, 3, 1, 0],
    [1, 0, 2, 3, 1, 2, 0],
    [2, 1, 3, 2, 0, 3, 1],
    [3, 2, 1, 0, 2, 3, 0],
    [1, 2, 0, 3, 1, 2, 1],
  ];

  for (let w = 0; w < 24; w++) {
    const p = patterns[w % patterns.length];
    const days = p.map((lvl) => ({
      level: lvl,
      count: lvl === 0 ? 0 : lvl === 1 ? 2 : lvl === 2 ? 5 : 8,
    }));
    weeks.push({ weekIndex: w, days });
  }
  return weeks;
}

export function OpenSource() {
  const contributionWeeks = generateContributionWeeks();
  const [activeCell, setActiveCell] = useState<{
    count: number;
    week: number;
    day: number;
  } | null>(null);

  return (
    <section
      id="opensource"
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-24 sm:py-32 lg:py-40 select-none border-t border-[#111111]/10"
      aria-label="Open Source and Engineering"
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION BACKGROUND: Pure Blueprint Grid & Japanese Waves
          (Exact continuity with Hero, About, Tech Arsenal, Featured Work, and Experience)
      ───────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Blueprint Grid Pattern (4% opacity) */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <pattern id="oss-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#111111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#oss-blueprint-grid)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Top Left */}
        <svg
          className="absolute -left-24 top-24 h-[440px] w-[440px] opacity-[0.04]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="oss-seigaiha-tl" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#oss-seigaiha-tl)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Bottom Right */}
        <svg
          className="absolute -right-24 bottom-24 h-[420px] w-[420px] opacity-[0.035]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="oss-seigaiha-br" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#oss-seigaiha-br)" />
        </svg>

        {/* Minimal Blueprint Geometric Accents */}
        <div className="absolute top-1/4 right-0 h-44 w-[1px] bg-[#2563EB]/[0.08]" />
        <div className="absolute top-0 left-1/3 h-[1px] w-56 bg-[#2563EB]/[0.08]" />
        <div className="absolute bottom-1/3 left-0 h-40 w-[2px] bg-[#2563EB]/[0.07]" />

        {/* Editorial Crosshairs & Perimeter Labels */}
        <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SEC.07 // OPEN SOURCE &amp; DEV</span>
        </div>
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>GITHUB // @yashhirudkar</span>
          <span>+</span>
        </div>
        <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>DISCIPLINE // SYSTEM ARCHITECTURE</span>
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
        <div className="mb-14 sm:mb-20 lg:mb-24">
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
                <span className="font-semibold">SECTION 07</span>
                <span className="text-[#6B7280]/50 tracking-[0.2em]">· // ECOSYSTEM</span>
              </motion.div>

              {/* Large Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-bold tracking-tight text-[#111111] leading-[1.04]">
                  Open Source &amp; Development
                  <span className="block text-[#111111]/70 font-poster italic font-normal tracking-tight pt-1.5">
                    Engineering That Scales.
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
                Engineering is not just writing code. It is building systems that scale.
              </motion.p>
            </div>

            {/* Right Editorial Stamp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex flex-col items-start lg:items-end justify-between font-mono text-[9px] uppercase tracking-[0.26em] text-[#6B7280] space-y-2 border-l lg:border-l-0 lg:border-r border-[#111111]/10 pl-5 lg:pl-0 lg:pr-5 select-none"
            >
              <div className="flex items-center gap-2 text-[#111111]">
                <span className="h-1.5 w-1.5 bg-[#2563EB]" />
                <span className="font-semibold">ARCH.SPEC // VOL.07</span>
              </div>
              <div className="flex items-center gap-3 text-[#6B7280]/80">
                <span>VCS PROTOCOL</span>
                <span className="text-[#2563EB] font-medium">GIT DISTRIBUTED</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B7280]/60">
                <span>PROFILE</span>
                <span>GITHUB / YASHHIRUDKAR</span>
              </div>
              <div className="text-[10px] text-[#111111]/70 tracking-widest pt-1">
                開発公開 · OPEN SOURCE
              </div>
            </motion.div>

          </div>
        </div>

        {/* ==========================================================
            MIDDLE: TWO-COLUMN EDITORIAL DEVELOPER DASHBOARD
            Left: Profile, Contribution Graph, Velocity
            Right: Pinned Projects, Top Languages, Philosophy
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================
              LEFT COLUMN (52% on Desktop):
              GitHub Summary & Matrix Contribution Calendar
          ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8">
            
            {/* ── Block 1: GitHub Profile Header Spec ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-[#111111]/12 bg-[#FFFFFF] p-6 sm:p-8 shadow-[0_20px_50px_-25px_rgba(17,17,17,0.05)] transition-all duration-300 hover:border-[#2563EB]"
            >
              {/* Corner Crosshairs */}
              <span className="absolute top-1.5 left-2 font-mono text-[9px] text-[#111111]/20 select-none group-hover:text-[#2563EB]/60">+</span>
              <span className="absolute top-1.5 right-2 font-mono text-[9px] text-[#111111]/20 select-none group-hover:text-[#2563EB]/60">+</span>
              <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-[#111111]/20 select-none group-hover:text-[#2563EB]/60">+</span>
              <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-[#111111]/20 select-none group-hover:text-[#2563EB]/60">+</span>

              <div className="flex items-start justify-between border-b border-[#111111]/10 pb-4 mb-5 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6B7280]">
                <div className="flex items-center gap-2 text-[#111111]">
                  <Github size={14} className="text-[#2563EB]" />
                  <span className="font-semibold">GITHUB IDENTITY</span>
                  <span className="text-[#6B7280]/40">·</span>
                  <span>@yashhirudkar</span>
                </div>
                <span className="text-[#2563EB] font-medium tracking-widest">
                  PUBLIC DEV
                </span>
              </div>

              {/* Identity & Bio */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[#111111]">
                      Yash Hirudkar
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-[#6B7280] pt-0.5">
                      Full Stack Developer <span className="text-[#2563EB]">·</span> Systems Architect
                    </p>
                  </div>
                  
                  {/* CTA link to GitHub */}
                  <motion.a
                    href="https://github.com/yashhirudkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-1.5 border border-[#111111]/15 bg-white px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] font-medium text-[#111111] transition hover:border-[#2563EB] hover:text-[#2563EB]"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight size={12} />
                  </motion.a>
                </div>

                <p className="font-sans text-sm leading-[1.7] text-[#6B7280]">
                  Crafting high-throughput backend APIs, transactional PostgreSQL data layers, and precision React web platforms with modular clean architecture.
                </p>
              </div>

              {/* Telemetry Numbers Strip */}
              <div className="grid grid-cols-3 gap-3 border-t border-[#111111]/10 pt-4 mt-6 font-mono text-[9px] uppercase tracking-wider">
                <div>
                  <span className="block text-[#6B7280]/70 text-[8px]">ACTIVE TENURE</span>
                  <span className="text-base font-display font-bold text-[#111111]">2+ YEARS</span>
                </div>
                <div>
                  <span className="block text-[#6B7280]/70 text-[8px]">SHIPPED PLATFORMS</span>
                  <span className="text-base font-display font-bold text-[#111111]">20+ PRJ</span>
                </div>
                <div>
                  <span className="block text-[#6B7280]/70 text-[8px]">CODE QUALITY</span>
                  <span className="text-base font-display font-bold text-[#2563EB]">CLEAN ARCH</span>
                </div>
              </div>
            </motion.div>

            {/* ── Block 2: Japanese Editorial Contribution Graph ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-[#111111]/12 bg-[#FFFFFF] p-6 sm:p-8 shadow-[0_20px_50px_-25px_rgba(17,17,17,0.05)] transition-all duration-300 hover:border-[#2563EB]"
            >
              {/* Corner Crosshairs */}
              <span className="absolute top-1.5 left-2 font-mono text-[9px] text-[#111111]/20 select-none group-hover:text-[#2563EB]/60">+</span>
              <span className="absolute top-1.5 right-2 font-mono text-[9px] text-[#111111]/20 select-none group-hover:text-[#2563EB]/60">+</span>
              <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-[#111111]/20 select-none group-hover:text-[#2563EB]/60">+</span>
              <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-[#111111]/20 select-none group-hover:text-[#2563EB]/60">+</span>

              <div className="flex items-center justify-between border-b border-[#111111]/10 pb-3 mb-5 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#2563EB]" />
                  <span className="font-semibold text-[#111111]">CONTRIBUTION MATRIX</span>
                  <span className="text-[#6B7280]/40">·</span>
                  <span>ROLLING 24 WEEKS</span>
                </div>
                <span className="text-[#6B7280]/70 font-mono text-[8px]">
                  {activeCell
                    ? `${activeCell.count} COMMITS RECORDED`
                    : "ACTIVE LIFECYCLE"}
                </span>
              </div>

              {/* The Matrix Heatmap Grid */}
              <div className="overflow-x-auto pb-2 scrollbar-none">
                <div className="min-w-[420px] space-y-2">
                  <div className="flex gap-1.5 justify-between">
                    {contributionWeeks.map((week) => (
                      <div key={week.weekIndex} className="flex flex-col gap-1.5">
                        {week.days.map((day, dIdx) => {
                          const bgClass =
                            day.level === 0
                              ? "bg-[#111111]/[0.05]"
                              : day.level === 1
                              ? "bg-[#2563EB]/25"
                              : day.level === 2
                              ? "bg-[#2563EB]/60"
                              : "bg-[#2563EB]";

                          return (
                            <div
                              key={dIdx}
                              onMouseEnter={() =>
                                setActiveCell({
                                  count: day.count,
                                  week: week.weekIndex,
                                  day: dIdx,
                                })
                              }
                              onMouseLeave={() => setActiveCell(null)}
                              className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${bgClass} transition-all duration-200 hover:scale-125 hover:ring-2 hover:ring-[#2563EB] cursor-pointer`}
                              title={`${day.count} commits`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Day Axis Labels & Legend */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#111111]/8 font-mono text-[8px] uppercase tracking-wider text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <span>MON</span>
                      <span>·</span>
                      <span>WED</span>
                      <span>·</span>
                      <span>FRI</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span>LESS</span>
                      <span className="h-2 w-2 bg-[#111111]/[0.05]" />
                      <span className="h-2 w-2 bg-[#2563EB]/25" />
                      <span className="h-2 w-2 bg-[#2563EB]/60" />
                      <span className="h-2 w-2 bg-[#2563EB]" />
                      <span>MORE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TODO: Integration Note Comment in UI Spec */}
              <div className="mt-4 pt-3 border-t border-[#111111]/8 flex items-center justify-between font-mono text-[8px] text-[#6B7280]/70 tracking-widest uppercase">
                <span>VCS METRIC // CONTINUOUS INTEGRATION</span>
                <span className="text-[#2563EB]">DEV CADENCE // DAILY</span>
              </div>
            </motion.div>

            {/* ── Block 3: Code Discipline & Velocity Spec ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[#111111]/12 bg-[#FAFAFA] p-5 sm:p-6 space-y-3 font-mono text-[9px] uppercase tracking-wider text-[#6B7280]"
            >
              <div className="flex items-center justify-between text-[#111111] font-semibold border-b border-[#111111]/8 pb-2">
                <span className="flex items-center gap-2">
                  <Terminal size={12} className="text-[#2563EB]" />
                  <span>COMMIT DISCIPLINE &amp; HYGIENE</span>
                </span>
                <span className="text-[#2563EB]">100% ATOMIC</span>
              </div>
              <div className="space-y-1.5 font-sans normal-case text-xs text-[#6B7280] leading-relaxed">
                <p>
                  <strong className="font-mono uppercase text-[#111111] text-[10px]">Trunk-Based Delivery:</strong> Small, verified pull requests with conventional commit nomenclature (`feat`, `fix`, `refactor`).
                </p>
                <p>
                  <strong className="font-mono uppercase text-[#111111] text-[10px]">Defensive Type Safety:</strong> Automated compile-time verification with zero loose `any` compromises.
                </p>
              </div>
            </motion.div>

          </div>

          {/* ========================================================
              RIGHT COLUMN (48% on Desktop):
              Pinned Repositories, Language Bar & Engineering Philosophy
          ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8">
            
            {/* ── Block 4: Pinned Repositories ── */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#111111]/10 pb-2.5 font-mono text-[9px] uppercase tracking-[0.26em] text-[#6B7280]">
                <div className="flex items-center gap-2 text-[#111111]">
                  <GitBranch size={13} className="text-[#2563EB]" />
                  <span className="font-semibold">PINNED REPOSITORIES</span>
                </div>
                <span className="text-[#2563EB]">04 HIGHLIGHTS</span>
              </div>

              <div className="space-y-3 sm:space-y-3.5">
                {PINNED_REPOSITORIES.map((repo, rIdx) => (
                  <motion.a
                    key={repo.id}
                    id={repo.id}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.6,
                      delay: rIdx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group block border border-[#111111]/12 bg-[#FFFFFF] p-4 sm:p-5 transition-all duration-300 hover:border-[#2563EB] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-15px_rgba(37,99,235,0.1)]"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Code2 size={13} className="text-[#2563EB]" />
                        <span className="font-mono text-xs sm:text-[13px] font-semibold text-[#111111] transition-transform duration-200 group-hover:translate-x-1">
                          {repo.name}
                        </span>
                      </div>
                      <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#2563EB] border border-[#2563EB]/25 px-2 py-0.5 bg-[#2563EB]/[0.03]">
                        {repo.tag}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-[#6B7280] leading-[1.65] my-2">
                      {repo.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-[#111111]/6 font-mono text-[8.5px] uppercase tracking-wider text-[#6B7280]">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-[#111111]">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: repo.langColor }}
                          />
                          <span>{repo.language}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={10} />
                          <span>{repo.stars}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={10} />
                          <span>{repo.forks}</span>
                        </span>
                      </div>
                      <ArrowUpRight
                        size={12}
                        className="text-[#111111]/30 transition-transform group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── Block 5: Top Languages Bar & Breakdown ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[#111111]/12 bg-[#FFFFFF] p-5 sm:p-6 space-y-4"
            >
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.26em] text-[#6B7280] border-b border-[#111111]/8 pb-2">
                <span className="text-[#111111] font-semibold">LANGUAGE ECOSYSTEM</span>
                <span>PRODUCTION DISTRIBUTION</span>
              </div>

              {/* Segmented Percentage Bar */}
              <div className="h-2 w-full rounded-full overflow-hidden flex bg-[#111111]/10">
                {TOP_LANGUAGES.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${lang.pct}%` }}
                    className={`${lang.color} transition-all duration-500`}
                    title={`${lang.name}: ${lang.pct}%`}
                  />
                ))}
              </div>

              {/* Language Tags Key */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[9px] uppercase tracking-wider text-[#6B7280]">
                {TOP_LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${lang.color}`} />
                    <span className="text-[#111111] font-medium">{lang.name}</span>
                    <span className="text-[#6B7280]/70">{lang.pct}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Block 6: Engineering Philosophy Manifesto ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative border border-[#111111]/12 bg-[#FFFFFF] p-6 sm:p-8 space-y-5"
            >
              {/* Corner Crosshairs */}
              <span className="absolute top-1.5 left-2 font-mono text-[9px] text-[#111111]/20 select-none">+</span>
              <span className="absolute top-1.5 right-2 font-mono text-[9px] text-[#111111]/20 select-none">+</span>
              <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-[#111111]/20 select-none">+</span>
              <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-[#111111]/20 select-none">+</span>

              <div className="flex items-center justify-between border-b border-[#111111]/10 pb-3 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6B7280]">
                <span className="text-[#111111] font-semibold">ENGINEERING PHILOSOPHY</span>
                <span className="text-[#2563EB]">開発信条 · CORE TENETS</span>
              </div>

              <blockquote className="font-sans text-sm sm:text-base italic leading-[1.75] text-[#111111]/90 border-l-2 border-[#2563EB] pl-4">
                "Software craftsmanship is the discipline of making the complex appear effortless. We don't optimize for lines written—we optimize for runtime predictability, memory efficiency, and system longevity."
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#111111]/8 font-mono text-[8.5px] uppercase tracking-wider text-[#6B7280]">
                <div>
                  <span className="block text-[#2563EB] font-bold">01 // PREDICTABILITY</span>
                  <span>Type-strict compile checks</span>
                </div>
                <div>
                  <span className="block text-[#2563EB] font-bold">02 // IDEMPOTENCY</span>
                  <span>Safe transaction retries</span>
                </div>
                <div>
                  <span className="block text-[#2563EB] font-bold">03 // SIMPLICITY</span>
                  <span>Zero unnecessary bloat</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ==========================================================
            BOTTOM: ARCHITECTURAL DIRECTIVE & IMPACT SUMMARY
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 sm:mt-28 lg:mt-36 border-t border-[#111111]/10 pt-8 sm:pt-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-[#6B7280] gap-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#2563EB]" />
              <span className="text-[#111111] font-semibold">ECOSYSTEM FIDELITY</span>
              <span>· CONTINUOUS CONTRIBUTION &amp; OPEN COLLABORATION</span>
            </div>
            <div className="text-[#2563EB] tracking-widest">
              技術貢献 // PRODUCTION VERIFIED
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default OpenSource;
