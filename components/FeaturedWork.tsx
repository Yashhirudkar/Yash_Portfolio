"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, FileText, CheckCircle2 } from "lucide-react";

interface ProjectItem {
  id: string;
  num: string;
  name: string;
  kanji: string;
  category: string;
  description: string;
  role: string;
  year: string;
  status: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
  mockupType: "crm" | "webinar" | "portfolio";
}

const PROJECTS: ProjectItem[] = [
  {
    id: "agricom-crm",
    num: "01",
    name: "Agricom CRM",
    kanji: "貿易管理基盤",
    category: "ENTERPRISE SAAS // AGRIBUSINESS ERP",
    description:
      "Enterprise CRM & ERP platform engineered for agricultural commodities export and trading operations. Architected 30+ business modules spanning multi-tier hierarchical RBAC, dynamic workflow approvals, real-time logistics tracking, and transactional PostgreSQL query optimization.",
    role: "Full Stack Developer",
    year: "2026",
    status: "Production Live",
    stack: ["REACT", "NEXT.JS", "NODE.JS", "NESTJS", "POSTGRESQL", "DOCKER"],
    metrics: [
      { label: "MODULES", value: "30+" },
      { label: "UPTIME", value: "99.9%" },
      { label: "LATENCY", value: "<15ms" },
    ],
    liveUrl: "https://github.com/yashhirudkar",
    githubUrl: "https://github.com/yashhirudkar",
    caseStudyUrl: "#",
    mockupType: "crm",
  },
  {
    id: "trading-workshop",
    num: "02",
    name: "Trading Workshop Platform",
    kanji: "配信決済基盤",
    category: "EDTECH PLATFORM // FINTECH CHECKOUT",
    description:
      "High-converting live webinar and fintech checkout platform built for trading education. Built with automated attendee funnels, idempotent multi-gateway payment processing, HMAC webhook verification, dynamic coupon validation, and low-latency analytics.",
    role: "Full Stack Engineer",
    year: "2025",
    status: "Production Live",
    stack: ["NEXT.JS", "TYPESCRIPT", "NODE.JS", "POSTGRESQL", "TAILWIND CSS"],
    metrics: [
      { label: "ATTENDEES", value: "2.4K+" },
      { label: "CONVERSION", value: "14.8%" },
      { label: "PAYMENTS", value: "IDEMPOTENT" },
    ],
    liveUrl: "https://github.com/yashhirudkar",
    githubUrl: "https://github.com/yashhirudkar",
    caseStudyUrl: "#",
    mockupType: "webinar",
  },
  {
    id: "portfolio-website",
    num: "03",
    name: "Portfolio Website",
    kanji: "対話意匠作品",
    category: "EDITORIAL DESIGN // INTERACTIVE SYSTEM",
    description:
      "A luxury Japanese-inspired interactive portfolio designed with strict editorial minimalism, Apple-inspired whitespace, and blueprint aesthetics. Built using Next.js 15, React 19, Tailwind CSS v4, and Framer Motion with fluid typography and micro-interactions.",
    role: "UI/UX & Frontend Architect",
    year: "2026",
    status: "Completed",
    stack: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION"],
    metrics: [
      { label: "PERF SCORE", value: "100" },
      { label: "FIRST LOAD", value: "<69kB" },
      { label: "FRAME RATE", value: "60 FPS" },
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/yashhirudkar",
    caseStudyUrl: "#",
    mockupType: "portfolio",
  },
];

export function FeaturedWork() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-24 sm:py-32 lg:py-40 select-none border-t border-[#111111]/10"
      aria-label="Featured Work"
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION BACKGROUND: Pure Blueprint Grid & Japanese Wave Patterns
          (Exact continuity with Hero, About, and Tech Arsenal)
      ───────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Blueprint Grid Pattern (4% opacity) */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <pattern id="work-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#111111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#work-blueprint-grid)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Top Right */}
        <svg
          className="absolute -right-24 top-24 h-[440px] w-[440px] opacity-[0.04]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="work-seigaiha-tr" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#work-seigaiha-tr)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Bottom Left */}
        <svg
          className="absolute -left-24 bottom-32 h-[420px] w-[420px] opacity-[0.035]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="work-seigaiha-bl" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#work-seigaiha-bl)" />
        </svg>

        {/* Minimal Blueprint Geometric Accents */}
        <div className="absolute top-1/3 left-0 h-40 w-[2px] bg-[#2563EB]/[0.08]" />
        <div className="absolute top-0 right-1/3 h-[1px] w-52 bg-[#2563EB]/[0.08]" />
        <div className="absolute bottom-1/4 right-0 h-40 w-[1px] bg-[#2563EB]/[0.08]" />

        {/* Editorial Crosshairs & Perimeter Labels */}
        <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SEC.04 // FEATURED WORK</span>
        </div>
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>ARCH.SPEC // CASE STUDIES</span>
          <span>+</span>
        </div>
        <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>FLAGSHIP // SYSTEM SHOWCASE</span>
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
                <span className="font-semibold">SECTION 04</span>
                <span className="text-[#6B7280]/50 tracking-[0.2em]">· // FEATURED WORK</span>
              </motion.div>

              {/* Large Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-bold tracking-tight text-[#111111] leading-[1.04]">
                  Featured Work
                  <span className="block text-[#111111]/70 font-poster italic font-normal tracking-tight pt-1.5">
                    Crafted with Architectural Precision.
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
                Selected projects demonstrating scalable architecture, clean engineering, and real-world problem solving.
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
                <span className="font-semibold">ARCH.SPEC // VOL.04</span>
              </div>
              <div className="flex items-center gap-3 text-[#6B7280]/80">
                <span>SELECTION</span>
                <span className="text-[#2563EB] font-medium">03 CASE STUDIES</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B7280]/60">
                <span>SYSTEMS</span>
                <span>PRODUCTION CERTIFIED</span>
              </div>
              <div className="text-[10px] text-[#111111]/70 tracking-widest pt-1">
                厳選作品 · CASE STUDIES
              </div>
            </motion.div>

          </div>
        </div>

        {/* ==========================================================
            PROJECT SHOWCASE: ALTERNATING LUXURY PRODUCT LAYOUTS
            (Project 1: Mockup Left | Project 2: Mockup Right | Project 3: Mockup Left)
        ========================================================== */}
        <div className="space-y-28 sm:space-y-36 lg:space-y-44">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-20"
              >
                {/* ====================================================
                    MOCKUP ARTBOARD CONTAINER (Apple-inspired Studio Specimen)
                    Occupies 58% on Desktop, Stacks on Mobile
                ==================================================== */}
                <div
                  className={`w-full lg:w-[58%] ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative border border-[#111111]/12 bg-[#FFFFFF] p-3 sm:p-5 shadow-[0_25px_60px_-25px_rgba(17,17,17,0.06)] transition-all duration-500 group-hover:border-[#2563EB]/60 group-hover:shadow-[0_30px_70px_-20px_rgba(37,99,235,0.12)]">
                    
                    {/* Corner Crosshairs */}
                    <span className="absolute top-1.5 left-2 font-mono text-[9px] text-[#111111]/25 select-none transition-colors group-hover:text-[#2563EB]/70">+</span>
                    <span className="absolute top-1.5 right-2 font-mono text-[9px] text-[#111111]/25 select-none transition-colors group-hover:text-[#2563EB]/70">+</span>
                    <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-[#111111]/25 select-none transition-colors group-hover:text-[#2563EB]/70">+</span>
                    <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-[#111111]/25 select-none transition-colors group-hover:text-[#2563EB]/70">+</span>

                    {/* Minimalist Apple-Style Window Header */}
                    <div className="relative z-10 flex items-center justify-between border-b border-[#111111]/10 pb-2.5 mb-3 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6B7280]">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full border border-[#111111]/30 bg-white" />
                          <span className="h-2 w-2 rounded-full border border-[#111111]/30 bg-white" />
                          <span className="h-2 w-2 rounded-full border border-[#111111]/30 bg-white" />
                        </div>
                        <span className="hidden sm:inline-block h-3 w-[1px] bg-[#111111]/15 mx-1" />
                        <span className="hidden sm:inline-block text-[#111111] font-semibold">
                          SPEC.04-{project.num}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-[8.5px] text-[#6B7280]/80">
                        <span className="text-[#2563EB]">●</span>
                        <span>{project.status}</span>
                      </div>
                    </div>

                    {/* Visual Mockup Viewport */}
                    <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-[#FAFAFA] border border-[#111111]/8 flex flex-col justify-between p-4 sm:p-6">
                      
                      {/* Zoom Target on Hover (1.03x) */}
                      <div className="absolute inset-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]">
                        
                        {/* Background Blueprint Grid within Artboard */}
                        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
                          <defs>
                            <pattern id={`mockup-grid-${project.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
                              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#111111" strokeWidth="0.5" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#mockup-grid-${project.id})`} />
                        </svg>

                        {/* ==============================================
                            MOCKUP VARIANT 1: AGRICOM CRM DASHBOARD SPEC
                        ============================================== */}
                        {project.mockupType === "crm" && (
                          <div className="relative h-full w-full flex flex-col justify-between p-3 sm:p-5 font-mono">
                            {/* Browser Address Bar Spec */}
                            <div className="flex items-center justify-between border border-[#111111]/10 bg-white/95 px-3 py-1.5 text-[9px] uppercase tracking-wider text-[#6B7280] shadow-sm">
                              <span className="text-[#111111] flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                                <span>agricom.platform.internal/v2/operations</span>
                              </span>
                              <span className="text-[8px] text-[#2563EB]">TLS 1.3 // SECURE</span>
                            </div>

                            {/* Core Dashboard Matrix Specimen */}
                            <div className="my-auto grid grid-cols-3 gap-2.5 sm:gap-3 py-2">
                              <div className="border border-[#111111]/10 bg-white p-2.5 sm:p-3 shadow-sm space-y-1">
                                <div className="text-[8px] text-[#6B7280] tracking-widest">ACTIVE MODULES</div>
                                <div className="font-display text-lg sm:text-xl font-bold text-[#111111]">30+ ENGINES</div>
                                <div className="text-[7.5px] text-[#2563EB]">100% RBAC VERIFIED</div>
                              </div>
                              <div className="border border-[#111111]/10 bg-white p-2.5 sm:p-3 shadow-sm space-y-1">
                                <div className="text-[8px] text-[#6B7280] tracking-widest">TRANSACTIONS</div>
                                <div className="font-display text-lg sm:text-xl font-bold text-[#111111]">100k+ ROWS</div>
                                <div className="text-[7.5px] text-[#111111]/70">CURSOR PAGINATED</div>
                              </div>
                              <div className="border border-[#111111]/10 bg-white p-2.5 sm:p-3 shadow-sm space-y-1">
                                <div className="text-[8px] text-[#6B7280] tracking-widest">COMMODITIES</div>
                                <div className="font-display text-lg sm:text-xl font-bold text-[#111111]">$14.2M AUDIT</div>
                                <div className="text-[7.5px] text-[#2563EB]">ACID COMPLIANT</div>
                              </div>
                            </div>

                            {/* Lower Pipeline & Activity Vector Diagram */}
                            <div className="border border-[#111111]/10 bg-white/90 p-2.5 sm:p-3 flex items-center justify-between text-[8px] uppercase tracking-wider text-[#6B7280]">
                              <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                                <span className="text-[#111111] font-semibold">SOCKET.IO TIMELINE</span>
                                <span className="hidden sm:inline text-[#6B7280]/60">// REAL-TIME STREAMING</span>
                              </div>
                              <span className="font-mono text-[#2563EB]">21.1458° N, 79.0882° E</span>
                            </div>
                          </div>
                        )}

                        {/* ==============================================
                            MOCKUP VARIANT 2: TRADING WEBINAR PLATFORM SPEC
                        ============================================== */}
                        {project.mockupType === "webinar" && (
                          <div className="relative h-full w-full flex flex-col justify-between p-3 sm:p-5 font-mono">
                            {/* Browser Address Bar Spec */}
                            <div className="flex items-center justify-between border border-[#111111]/10 bg-white/95 px-3 py-1.5 text-[9px] uppercase tracking-wider text-[#6B7280] shadow-sm">
                              <span className="text-[#111111] flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                                <span>tradinghub.live/session/webrtc-stream</span>
                              </span>
                              <span className="text-[8px] text-[#2563EB]">LOW-LATENCY // 4K 60FPS</span>
                            </div>

                            {/* Central Stage View & Telemetry Bar */}
                            <div className="my-auto flex flex-col sm:flex-row gap-2.5 sm:gap-3 py-2">
                              <div className="flex-1 border border-[#111111]/10 bg-white p-3 shadow-sm flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[8px] text-[#6B7280]">
                                  <span>LIVE AUDIENCE FEED</span>
                                  <span className="text-[#2563EB] font-bold">2,450 STREAMING</span>
                                </div>
                                <div className="py-3 flex items-center justify-center gap-1">
                                  {[40, 65, 30, 85, 45, 95, 60, 40, 75, 55, 90, 45, 70, 80, 50].map((h, i) => (
                                    <span
                                      key={i}
                                      style={{ height: `${h}%` }}
                                      className="w-1 bg-[#111111]/20 transition-all duration-300 group-hover:bg-[#2563EB]"
                                    />
                                  ))}
                                </div>
                                <div className="text-[8px] text-[#111111]/60 text-right">WEBRTC AUDIO SYNCED</div>
                              </div>

                              <div className="w-full sm:w-44 border border-[#111111]/10 bg-white p-3 shadow-sm space-y-2">
                                <div className="text-[8px] text-[#6B7280] tracking-widest">IDEMPOTENT GATEWAY</div>
                                <div className="font-display text-sm font-bold text-[#111111]">ORDER #8921</div>
                                <div className="text-[8px] text-[#2563EB] font-semibold">HMAC VERIFIED</div>
                                <div className="text-[7.5px] text-[#6B7280] leading-tight">ZERO DUPLICATE CHARGES</div>
                              </div>
                            </div>

                            {/* Status Footer */}
                            <div className="border border-[#111111]/10 bg-white/90 p-2 sm:p-2.5 flex items-center justify-between text-[8px] uppercase tracking-wider text-[#6B7280]">
                              <span>CONVERSION ENGINE // 14.8% CTR</span>
                              <span className="text-[#111111] font-medium">STRIPE + WEBHOOK INTEGRATED</span>
                            </div>
                          </div>
                        )}

                        {/* ==============================================
                            MOCKUP VARIANT 3: EDITORIAL PORTFOLIO SPEC
                        ============================================== */}
                        {project.mockupType === "portfolio" && (
                          <div className="relative h-full w-full flex flex-col justify-between p-3 sm:p-5 font-mono">
                            {/* Browser Address Bar Spec */}
                            <div className="flex items-center justify-between border border-[#111111]/10 bg-white/95 px-3 py-1.5 text-[9px] uppercase tracking-wider text-[#6B7280] shadow-sm">
                              <span className="text-[#111111] flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                                <span>yashhirudkar.dev/spec/editorial</span>
                              </span>
                              <span className="text-[8px] text-[#2563EB]">GOLDEN RATIO // 1:1.618</span>
                            </div>

                            {/* Typographic Wireframe Grid Specimen */}
                            <div className="my-auto grid grid-cols-2 gap-2.5 sm:gap-3 py-2">
                              <div className="border border-[#111111]/10 bg-white p-3 shadow-sm space-y-1">
                                <div className="text-[8px] text-[#6B7280]">JAPANESE MINIMALISM</div>
                                <div className="font-poster text-xl sm:text-2xl font-bold italic tracking-tight text-[#111111]">
                                  YASH HIRUDKAR
                                </div>
                                <div className="text-[8px] text-[#2563EB]">TAILWIND V4 + FRAMER MOTION</div>
                              </div>

                              <div className="border border-[#111111]/10 bg-white p-3 shadow-sm flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[8px] text-[#6B7280]">
                                  <span>LIGHTHOUSE</span>
                                  <span className="text-[#2563EB] font-bold">100 / 100</span>
                                </div>
                                <div className="space-y-1 text-[8px]">
                                  <div className="flex justify-between text-[#111111]">
                                    <span>LCP PERFORMANCE</span>
                                    <span>0.8s</span>
                                  </div>
                                  <div className="flex justify-between text-[#111111]">
                                    <span>CUMULATIVE SHIFT</span>
                                    <span>0.00</span>
                                  </div>
                                </div>
                                <div className="text-[7.5px] text-[#6B7280]">FLUID TYPOGRAPHIC RHYTHM</div>
                              </div>
                            </div>

                            {/* Spec Footer */}
                            <div className="border border-[#111111]/10 bg-white/90 p-2 sm:p-2.5 flex items-center justify-between text-[8px] uppercase tracking-wider text-[#6B7280]">
                              <span>RESPONSIVE ENGINE // FLUID SCALE</span>
                              <span className="text-[#2563EB]">EDITION // 2026.01</span>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Artboard Watermark Kanji */}
                      <span className="absolute bottom-2 right-3 font-mono text-[9px] uppercase tracking-[0.3em] text-[#111111]/25 select-none pointer-events-none">
                        {project.kanji}
                      </span>
                    </div>

                    {/* Studio Mockup Base Ticks */}
                    <div className="mt-2.5 pt-2 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.24em] text-[#6B7280]/70">
                      <span>PROJECT ARCHITECTURE // VIEWPORT SPEC</span>
                      <span className="text-[#111111] font-semibold">{project.year}</span>
                    </div>

                  </div>
                </div>

                {/* ====================================================
                    CONTENT COLUMN (Editorial Typography & Case Study Info)
                    Occupies 42% on Desktop
                ==================================================== */}
                <div
                  className={`w-full lg:w-[42%] space-y-6 sm:space-y-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  
                  {/* Category & Project Index Header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[#2563EB]">
                      <span>{project.num}</span>
                      <span className="h-[1px] w-6 bg-[#2563EB]" />
                      <span>{project.category}</span>
                    </div>

                    {/* Large Typography Project Title with Hover Movement */}
                    <h3 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-[#111111] leading-[1.08] transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                      {project.name}
                    </h3>

                    {/* Micro Blue Line Accent that Expands on Hover */}
                    <div className="h-[2px] w-8 bg-[#2563EB] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-28" />
                  </div>

                  {/* Concise Description */}
                  <p className="font-sans text-sm sm:text-base leading-[1.75] text-[#6B7280] font-normal max-w-xl">
                    {project.description}
                  </p>

                  {/* Role, Year & Status Metadata Row */}
                  <div className="grid grid-cols-3 gap-3 border-y border-[#111111]/10 py-3.5 font-mono text-[9px] uppercase tracking-wider">
                    <div>
                      <span className="block text-[#6B7280]/70 text-[8px]">ROLE</span>
                      <span className="text-[#111111] font-semibold">{project.role}</span>
                    </div>
                    <div>
                      <span className="block text-[#6B7280]/70 text-[8px]">TIMELINE</span>
                      <span className="text-[#111111] font-semibold">{project.year}</span>
                    </div>
                    <div>
                      <span className="block text-[#6B7280]/70 text-[8px]">STATUS</span>
                      <span className="text-[#2563EB] font-semibold flex items-center gap-1">
                        <CheckCircle2 size={10} />
                        <span>{project.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Editorial Tech Stack Tags (No Colorful Pills) */}
                  <div className="space-y-2">
                    <span className="block font-mono text-[8.5px] uppercase tracking-[0.28em] text-[#6B7280]/70">
                      TECHNOLOGY SPECIFICATION
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-[#111111]/12 bg-[#111111]/[0.02] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#111111] transition-colors duration-200 group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/[0.03]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons: Live Demo, GitHub, Case Study */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {/* Primary Button: Live Demo */}
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -1, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 bg-[#2563EB] px-5 sm:px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] font-medium text-white shadow-sm transition hover:bg-[#1D4ED8]"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} />
                    </motion.a>

                    {/* Secondary Button: GitHub */}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -1, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 border border-[#111111]/20 bg-white px-5 sm:px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#111111] transition hover:border-[#111111] hover:bg-[#111111]/[0.03]"
                    >
                      <Github size={13} />
                      <span>GitHub</span>
                    </motion.a>

                    {/* Tertiary Button: Case Study */}
                    <motion.a
                      href={project.caseStudyUrl}
                      whileHover={{ y: -1, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 border border-[#111111]/12 bg-[#111111]/[0.02] px-4 sm:px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#6B7280] transition hover:border-[#111111]/40 hover:text-[#111111]"
                    >
                      <FileText size={13} />
                      <span>Case Study</span>
                    </motion.a>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ==========================================================
            BOTTOM ARCHITECTURAL NOTE: WORK ETHOS & METHODOLOGY
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
              <span className="text-[#111111] font-semibold">METHODOLOGY</span>
              <span>· TEST-DRIVEN &amp; DEPLOYMENT TESTED</span>
            </div>
            <div className="text-[#2563EB] tracking-widest">
              開発基準 // 100% PRODUCTION READY
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default FeaturedWork;

