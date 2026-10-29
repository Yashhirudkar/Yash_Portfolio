"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud" | "Tools";
  specTag: string;
  index: string;
  description: string;
  specs: string[];
  kanji: string;
  size: "large" | "medium" | "small";
  colSpan: string;
}

const TECH_ITEMS: TechItem[] = [
  // ─── ROW 1: Flagship Frontend Engineering (7 + 5 = 12 cols) ─────
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    specTag: "FULL-STACK FRAMEWORK",
    index: "01",
    description:
      "Production React framework for server components, streaming SSR, dynamic routing, and high-performance edge web applications.",
    specs: ["App Router", "React Server Components", "Edge Runtime"],
    kanji: "次世代基盤",
    size: "large",
    colSpan: "col-span-12 lg:col-span-7",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    specTag: "UI ENGINE & REACTIVE DOM",
    index: "02",
    description:
      "Building modern interactive user interfaces with declarative component trees, hooks, and optimized reconciliation pipelines.",
    specs: ["Concurrent Features", "Custom Hooks", "Virtual DOM Engine"],
    kanji: "対話画面",
    size: "medium",
    colSpan: "col-span-12 lg:col-span-5",
  },

  // ─── ROW 2: Flagship Backend & Persistence (5 + 7 = 12 cols) ───
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    specTag: "ASYNCHRONOUS RUNTIME",
    index: "03",
    description:
      "Event-driven, non-blocking I/O runtime powering resilient microservices, high-throughput APIs, and real-time event systems.",
    specs: ["Event Loop Core", "Stream Processing", "Libuv Concurrency"],
    kanji: "駆動基盤",
    size: "medium",
    colSpan: "col-span-12 lg:col-span-5",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    specTag: "ACID RELATIONAL ENGINE",
    index: "04",
    description:
      "Enterprise relational data modeling, complex query optimization, cursor pagination, and ACID-compliant transaction safety.",
    specs: ["ACID Guarantees", "B-Tree & GIN Indexing", "Connection Pooling"],
    kanji: "永続蓄積",
    size: "large",
    colSpan: "col-span-12 lg:col-span-7",
  },

  // ─── ROW 3: Architectural Backbone (4 + 4 + 4 = 12 cols) ─────────
  {
    id: "typescript",
    name: "TypeScript",
    category: "Tools",
    specTag: "STATIC TYPE SYSTEM",
    index: "05",
    description:
      "Strict compile-time static safety ensuring enterprise maintainability, predictable refactoring, and clean API contracts.",
    specs: ["Strict Typing", "Generic Constraints", "Interface Contracts"],
    kanji: "型定義",
    size: "medium",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "Backend",
    specTag: "ENTERPRISE ARCHITECTURE",
    index: "06",
    description:
      "Enterprise-grade server framework built on TypeScript with dependency injection, layered architecture, and strict modularity.",
    specs: ["Dependency Injection", "Guards & Interceptors", "Modular Core"],
    kanji: "構造設計",
    size: "medium",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    id: "docker",
    name: "Docker",
    category: "Cloud",
    specTag: "CONTAINER ORCHESTRATION",
    index: "07",
    description:
      "Containerizing applications for isolated, reproducible runtimes across local staging environments and production deployments.",
    specs: ["Multi-Stage Builds", "Environment Parity", "Image Optimization"],
    kanji: "仮想環境",
    size: "medium",
    colSpan: "col-span-12 sm:col-span-12 lg:col-span-4",
  },

  // ─── ROW 4: Infrastructure & Styling System (5 + 4 + 3 = 12 cols) ─
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    specTag: "CLOUD INFRASTRUCTURE",
    index: "08",
    description:
      "Deploying scalable cloud infrastructure utilizing compute instances, S3 object storage, serverless flows, and secured networks.",
    specs: ["EC2 & S3 Buckets", "IAM Policies", "VPC Security Groups"],
    kanji: "雲底基盤",
    size: "medium",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    specTag: "DESIGN SYSTEM UTILITY",
    index: "09",
    description:
      "Token-driven utility styling engine for crafting bespoke typography, luxury whitespace, and fluid responsive layouts.",
    specs: ["JIT Compiler", "Fluid Geometry", "Zero Runtime Debt"],
    kanji: "意匠設計",
    size: "medium",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Tools",
    specTag: "CORE RUNTIME LANGUAGE",
    index: "10",
    description:
      "Deep understanding of ECMAScript specifications, asynchronous promises, closures, and browser engine internals.",
    specs: ["ES2024 Standards", "V8 Engine Internals", "Async Orchestration"],
    kanji: "原初言語",
    size: "small",
    colSpan: "col-span-12 sm:col-span-12 lg:col-span-3",
  },

  // ─── ROW 5: Compact Specification Blocks (3 + 3 + 3 + 3 = 12 cols) 
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "Backend",
    specTag: "PROTOCOL SPECIFICATION",
    index: "11",
    description:
      "Designing idempotent HTTP endpoints, HMAC-verified webhooks, rate limiting, and structured JSON payload contracts.",
    specs: ["Stateless Contracts", "HMAC Verification", "RFC Compliance"],
    kanji: "通信規約",
    size: "small",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    id: "express",
    name: "Express",
    category: "Backend",
    specTag: "HTTP ROUTING ENGINE",
    index: "12",
    description:
      "Lightweight, unopinionated routing engine for rapid microservices, middleware chains, and low-latency API gateways.",
    specs: ["Middleware Pipeline", "Minimal Overhead", "Custom Routing"],
    kanji: "高速伝送",
    size: "small",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    id: "redux-toolkit",
    name: "Redux Toolkit",
    category: "Frontend",
    specTag: "GLOBAL STATE MACHINE",
    index: "13",
    description:
      "Predictable state management with immutable updates, normalized entity caching, and declarative RTK Query integration.",
    specs: ["RTK Query Caching", "Normalized State", "Immutable Slices"],
    kanji: "状態管理",
    size: "small",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    specTag: "VERSION CONTROL SYSTEM",
    index: "14",
    description:
      "Distributed version control, atomic branch workflows, rebase hygiene, and collaborative codebase versioning integrity.",
    specs: ["Trunk-Based Flow", "Atomic Commits", "Semantic Tagging"],
    kanji: "版管理",
    size: "small",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
];

export function TechArsenal() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-24 sm:py-32 lg:py-40 select-none border-t border-[#111111]/10"
      aria-label="Tech Arsenal"
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION BACKGROUND: Pure CSS/SVG Blueprint Grid & Waves
          (Exact continuity with Hero and AboutMe sections)
      ───────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Blueprint Grid Pattern (4% opacity) */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <pattern id="arsenal-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#111111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arsenal-blueprint-grid)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Left Flank */}
        <svg
          className="absolute -left-28 top-32 h-[460px] w-[460px] opacity-[0.04]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="arsenal-seigaiha-left" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#arsenal-seigaiha-left)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Right Bottom */}
        <svg
          className="absolute -right-24 bottom-24 h-[400px] w-[400px] opacity-[0.035]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="arsenal-seigaiha-right" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#arsenal-seigaiha-right)" />
        </svg>

        {/* Minimal Blueprint Geometric Accents */}
        <div className="absolute top-1/4 right-0 h-44 w-[1px] bg-[#2563EB]/[0.08]" />
        <div className="absolute top-0 left-1/3 h-[1px] w-56 bg-[#2563EB]/[0.08]" />
        <div className="absolute bottom-1/3 left-0 h-40 w-[2px] bg-[#2563EB]/[0.07]" />

        {/* Editorial Crosshairs & Perimeter Labels */}
        <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SEC.03 // TECH ARSENAL</span>
        </div>
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>SYSTEM MATRIX // 14 ENGINES</span>
          <span>+</span>
        </div>
        <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SPECIFICATION // PRODUCTION CERTIFIED</span>
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
            TOP: EDITORIAL HEADING
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
                <span className="font-semibold">SECTION 03</span>
                <span className="text-[#6B7280]/50 tracking-[0.2em]">· // TECH ARSENAL</span>
              </motion.div>

              {/* Large Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-bold tracking-tight text-[#111111] leading-[1.04]">
                  Tech Arsenal
                  <span className="block text-[#111111]/70 font-poster italic font-normal tracking-tight pt-1.5">
                    Engineered for Scalability &amp; Precision.
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
                The technologies I use to design scalable systems, modern web experiences, and enterprise software.
              </motion.p>
            </div>

            {/* Right Editorial Document Metadata Stamp (Desktop & Tablet) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex flex-col items-start lg:items-end justify-between font-mono text-[9px] uppercase tracking-[0.26em] text-[#6B7280] space-y-2 border-l lg:border-l-0 lg:border-r border-[#111111]/10 pl-5 lg:pl-0 lg:pr-5 select-none"
            >
              <div className="flex items-center gap-2 text-[#111111]">
                <span className="h-1.5 w-1.5 bg-[#2563EB]" />
                <span className="font-semibold">ARCH.SPEC // VOL.03</span>
              </div>
              <div className="flex items-center gap-3 text-[#6B7280]/80">
                <span>STACK FIDELITY</span>
                <span className="text-[#2563EB] font-medium">100% PRODUCTION</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B7280]/60">
                <span>PARADIGM</span>
                <span>CLEAN ARCHITECTURE</span>
              </div>
              <div className="text-[10px] text-[#111111]/70 tracking-widest pt-1">
                技術体系 · DESIGN SPEC
              </div>
            </motion.div>

          </div>
        </div>

        {/* ==========================================================
            MIDDLE: LARGE ASYMMETRIC GRID (EDITORIAL MASONRY)
            Instead of cards, each module is a design specification block.
        ========================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.15 },
            },
          }}
          className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6"
        >
          {TECH_ITEMS.map((item) => {
            const isLarge = item.size === "large";
            const isMedium = item.size === "medium";

            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 22, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className={`group relative ${item.colSpan} border border-[#111111]/12 bg-[#FFFFFF] transition-all duration-300 ease-out hover:border-[#2563EB] hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-20px_rgba(37,99,235,0.12)] flex flex-col justify-between overflow-hidden`}
              >
                {/* ── Corner Blueprint Accents & Crosshairs ── */}
                <span className="absolute top-1.5 left-2 font-mono text-[9px] text-[#111111]/20 transition-colors duration-300 group-hover:text-[#2563EB]/60 select-none">
                  +
                </span>
                <span className="absolute top-1.5 right-2 font-mono text-[9px] text-[#111111]/20 transition-colors duration-300 group-hover:text-[#2563EB]/60 select-none">
                  +
                </span>
                <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-[#111111]/20 transition-colors duration-300 group-hover:text-[#2563EB]/60 select-none">
                  +
                </span>
                <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-[#111111]/20 transition-colors duration-300 group-hover:text-[#2563EB]/60 select-none">
                  +
                </span>

                {/* ── Top Metadata Bar of Specification Block ── */}
                <div className="relative z-10 flex items-center justify-between border-b border-[#111111]/8 px-5 sm:px-6 py-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[#6B7280]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#111111] font-semibold tracking-wider">
                      MOD.{item.index}
                    </span>
                    <span className="text-[#111111]/25">//</span>
                    <span className="text-[#2563EB] font-medium tracking-widest">
                      {item.category}
                    </span>
                  </div>

                  {/* Micro Interaction: Blue indicator animates & illuminates */}
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline font-mono text-[8px] tracking-[0.3em] text-[#6B7280]/60">
                      {item.kanji}
                    </span>
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-hover:animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#111111]/20 transition-colors duration-300 group-hover:bg-[#2563EB]" />
                    </span>
                  </div>
                </div>

                {/* ── Body Content of Specification Block ── */}
                <div className={`relative z-10 px-5 sm:px-6 ${isLarge ? "py-6 sm:py-8" : isMedium ? "py-5 sm:py-6" : "py-4 sm:py-5"} flex-1 flex flex-col justify-between space-y-4`}>
                  
                  {/* Title & Subtitle Section */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/70">
                        {item.specTag}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-[#111111]/20 transition-all duration-300 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    <h3 className={`font-display font-bold text-[#111111] tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1 ${isLarge ? "text-2xl sm:text-3xl" : isMedium ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
                      {item.name}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className={`font-sans text-[#6B7280] leading-[1.65] font-normal ${isLarge ? "text-sm sm:text-[15px]" : "text-[13px] sm:text-sm"}`}>
                    {item.description}
                  </p>

                  {/* ── Technical Specifications Ticks / Callout Tags ── */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 border border-[#111111]/10 bg-[#111111]/[0.02] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#111111]/85 transition-colors duration-200 group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/[0.03]"
                        >
                          <span className="h-1 w-1 bg-[#111111]/30 transition-colors group-hover:bg-[#2563EB]" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* ── Bottom Technical Hairline & Status Stamp ── */}
                <div className="relative z-10 border-t border-[#111111]/8 px-5 sm:px-6 py-2.5 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.24em] text-[#6B7280]/70 bg-[#111111]/[0.01]">
                  <span className="tracking-widest">
                    SYS // {item.category}
                  </span>
                  <span className="text-[#111111]/40 transition-colors duration-300 group-hover:text-[#2563EB]">
                    SPEC.03-{item.index}
                  </span>
                </div>

                {/* Subtle Japanese Minimal Blueprint Line Accent on Hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2563EB] transition-all duration-300 ease-out group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ==========================================================
            BOTTOM: SMALL ARCHITECTURE NOTE
            Editorial blueprint summary connecting stack cohesion
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 lg:mt-32"
        >
          <div className="relative border border-[#111111]/12 bg-[#FFFFFF] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-25px_rgba(17,17,17,0.04)]">
            
            {/* Corner Crosshairs */}
            <span className="absolute top-2 left-2 font-mono text-[10px] text-[#111111]/25 select-none">+</span>
            <span className="absolute top-2 right-2 font-mono text-[10px] text-[#111111]/25 select-none">+</span>
            <span className="absolute bottom-2 left-2 font-mono text-[10px] text-[#111111]/25 select-none">+</span>
            <span className="absolute bottom-2 right-2 font-mono text-[10px] text-[#111111]/25 select-none">+</span>

            {/* Note Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#111111]/10 pb-4 mb-6 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#6B7280]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#2563EB]" />
                <span className="font-semibold text-[#111111]">ARCHITECTURE DIRECTIVE // 03</span>
                <span className="text-[#6B7280]/40">·</span>
                <span>SYSTEM INTEGRATION NOTE</span>
              </div>
              <div className="mt-1 sm:mt-0 text-[#2563EB] font-medium tracking-widest">
                統合設計 · COHESIVE STACK
              </div>
            </div>

            {/* Editorial Statement */}
            <div className="space-y-4 max-w-4xl font-sans text-sm sm:text-base leading-[1.8] text-[#111111]/85 font-normal">
              <p>
                Every technology in this arsenal operates as part of an integrated, scalable software ecosystem. Modern frontend applications built with React, Next.js, TypeScript, and Tailwind CSS decouple presentation from business logic, delivering high-performance, fluid experiences with minimal bundle size.
              </p>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-[1.75]">
                Behind the interface, Node.js and NestJS provide a strongly typed, modular server foundation. PostgreSQL ensures strict ACID transactional safety and indexing for high-throughput queries, while Docker containerization and AWS infrastructure guarantee reproducible deployments, horizontal scalability, and enterprise-grade reliability.
              </p>
            </div>

            {/* Architectural Three-Pillar Specification Strips */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#111111]/10">
              
              {/* Pillar 01 */}
              <div className="space-y-1.5 font-mono text-[10px] uppercase tracking-wider">
                <div className="flex items-center gap-2 text-[#2563EB]">
                  <span>01</span>
                  <span className="h-[1px] w-4 bg-[#2563EB]" />
                  <span className="font-semibold text-[#111111]">CLIENT TIER</span>
                </div>
                <p className="font-sans text-xs text-[#6B7280] normal-case leading-relaxed">
                  SSR &amp; Server Components, fluid UI geometry, typed state management, and optimized asset delivery.
                </p>
              </div>

              {/* Pillar 02 */}
              <div className="space-y-1.5 font-mono text-[10px] uppercase tracking-wider">
                <div className="flex items-center gap-2 text-[#2563EB]">
                  <span>02</span>
                  <span className="h-[1px] w-4 bg-[#2563EB]" />
                  <span className="font-semibold text-[#111111]">SERVICE TIER</span>
                </div>
                <p className="font-sans text-xs text-[#6B7280] normal-case leading-relaxed">
                  Modular NestJS &amp; Node runtimes, idempotent REST contracts, HMAC security, and event-driven architecture.
                </p>
              </div>

              {/* Pillar 03 */}
              <div className="space-y-1.5 font-mono text-[10px] uppercase tracking-wider">
                <div className="flex items-center gap-2 text-[#2563EB]">
                  <span>03</span>
                  <span className="h-[1px] w-4 bg-[#2563EB]" />
                  <span className="font-semibold text-[#111111]">DATA &amp; CLOUD TIER</span>
                </div>
                <p className="font-sans text-xs text-[#6B7280] normal-case leading-relaxed">
                  PostgreSQL relational schemas, deterministic Docker containers, and resilient cloud infrastructure.
                </p>
              </div>

            </div>

            {/* Note Bottom Status Line */}
            <div className="mt-8 pt-4 border-t border-[#111111]/8 flex flex-col sm:flex-row sm:items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.25em] text-[#6B7280]/60 gap-2">
              <div>
                <span>STANDARDS // ISO/IEC 25010 · 12-FACTOR APP · OWASP</span>
              </div>
              <div className="text-right">
                <span>NAGPUR · 21.1458° N, 79.0882° E // 2026</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default TechArsenal;

