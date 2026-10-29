"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface AchievementItem {
  id: string;
  num: string;
  title: string;
  category: string;
  year: string;
  specTag: string;
  kanji: string;
  description: string;
  specs: string[];
  colSpan: string;
  size: "large" | "medium" | "small";
}

const ACHIEVEMENTS: AchievementItem[] = [
  // ─── ROW 1: Flagship Milestones (7 + 5 = 12 cols) ─────────────────
  {
    id: "crm-development",
    num: "01",
    title: "Enterprise CRM Development",
    category: "ENGINEERING MILESTONE",
    year: "2026",
    specTag: "ARCHITECTURE // 30+ MODULES",
    kanji: "基幹設計",
    description:
      "Architected an agribusiness enterprise CRM & ERP platform spanning 30+ interconnected modules with dynamic hierarchical RBAC, real-time Socket.IO collaboration, and transactional PostgreSQL pipelines.",
    specs: ["30+ Interconnected Modules", "Hierarchical RBAC Engine", "<15ms Query Latency"],
    colSpan: "col-span-12 lg:col-span-7",
    size: "large",
  },
  {
    id: "azure-ai900",
    num: "02",
    title: "Microsoft Azure AI-900",
    category: "CERTIFICATION",
    year: "2024",
    specTag: "CREDENTIAL // MICROSOFT CERTIFIED",
    kanji: "人工知能",
    description:
      "Certified in Azure AI Fundamentals, validating foundational mastery of machine learning workflows, cognitive services, computer vision algorithms, NLP pipelines, and ethical AI architecture.",
    specs: ["Cloud AI Fundamentals", "Cognitive API Services", "Responsible AI Principles"],
    colSpan: "col-span-12 lg:col-span-5",
    size: "medium",
  },

  // ─── ROW 2: Engineering Pillars (4 + 4 + 4 = 12 cols) ─────────────
  {
    id: "production-projects",
    num: "03",
    title: "20+ Production Projects",
    category: "SHIPPING VELOCITY",
    year: "2024 — 2026",
    specTag: "PORTFOLIO // COMMERCIAL GRADE",
    kanji: "製品実績",
    description:
      "Engineered and delivered over 20 commercial web platforms spanning B2B SaaS portals, payment gateways, and high-concurrency database platforms with zero data loss.",
    specs: ["Commercial B2B SaaS", "Payment Checkouts", "Zero Data Loss"],
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    size: "medium",
  },
  {
    id: "experience-track",
    num: "04",
    title: "2+ Years Experience",
    category: "PROFESSIONAL CRAFT",
    year: "2024 — 2026",
    specTag: "RECORD // PRODUCTION TESTED",
    kanji: "開発年月",
    description:
      "Specialized in the hard backend middle—transaction isolation, connection pooling, and idempotent webhooks—paired with high-performance, accessible React user interfaces.",
    specs: ["Full Lifecycle Delivery", "ACID Compliance", "System Reliability"],
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    size: "medium",
  },
  {
    id: "aws-learning",
    num: "05",
    title: "AWS Cloud Specialization",
    category: "INFRASTRUCTURE",
    year: "2025",
    specTag: "CLOUD // AWS SERVICES",
    kanji: "雲底基盤",
    description:
      "Hands-on expertise across Amazon Web Services primitives including EC2 compute provisioning, S3 bucket security lifecycles, IAM policies, and VPC isolated networking.",
    specs: ["EC2 & S3 Buckets", "IAM Security Policies", "VPC Architecture"],
    colSpan: "col-span-12 sm:col-span-12 lg:col-span-4",
    size: "medium",
  },

  // ─── ROW 3: Methodology & Horizon (3 + 3 + 6 = 12 cols) ───────────
  {
    id: "open-source",
    num: "06",
    title: "Open Source Learning",
    category: "COMMUNITY & CODE",
    year: "2025 — 2026",
    specTag: "ECOSYSTEM // OSS HYGIENE",
    kanji: "公開学習",
    description:
      "Actively engaging with modern open-source toolings, studying TypeScript compile-time generics, Next.js internal canary builds, and following Git rebase hygiene.",
    specs: ["Type Gymnastics", "Next.js Internals", "Clean Codebase"],
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
    size: "small",
  },
  {
    id: "continuous-learning",
    num: "07",
    title: "Continuous Learning",
    category: "SYSTEM DESIGN",
    year: "2026",
    specTag: "METHODOLOGY // 12-FACTOR APP",
    kanji: "研鑽継続",
    description:
      "Daily study of distributed systems principles, database index internals, cache invalidation protocols, and clean architecture design patterns.",
    specs: ["Clean Architecture", "Cache Protocols", "Database Internals"],
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
    size: "small",
  },
  {
    id: "future-goals",
    num: "08",
    title: "Future Goals: Distributed Systems",
    category: "HORIZON VISION",
    year: "2026 — 2027",
    specTag: "EXPANSION // PLANET-SCALE",
    kanji: "未来展望",
    description:
      "Expanding deeper into distributed event-streaming platforms (Apache Kafka), Rust-powered microservices, and edge computing runtimes to architect fault-tolerant, planet-scale software.",
    specs: ["Apache Kafka Streams", "Rust Systems", "Edge Compute Runtimes"],
    colSpan: "col-span-12 lg:col-span-6",
    size: "medium",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-24 sm:py-32 lg:py-40 select-none border-t border-[#111111]/10"
      aria-label="Achievements and Certifications"
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION BACKGROUND: Pure Blueprint Grid & Japanese Waves
          (Exact continuity with Hero, About, Tech Arsenal, Featured Work, and Experience)
      ───────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Blueprint Grid Pattern (4% opacity) */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <pattern id="achieve-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#111111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#achieve-blueprint-grid)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Top Right */}
        <svg
          className="absolute -right-24 top-24 h-[440px] w-[440px] opacity-[0.04]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="achieve-seigaiha-tr" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#achieve-seigaiha-tr)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Bottom Left */}
        <svg
          className="absolute -left-24 bottom-24 h-[400px] w-[400px] opacity-[0.035]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="achieve-seigaiha-bl" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#achieve-seigaiha-bl)" />
        </svg>

        {/* Minimal Blueprint Geometric Accents */}
        <div className="absolute top-1/3 right-0 h-40 w-[1px] bg-[#2563EB]/[0.08]" />
        <div className="absolute top-0 left-1/4 h-[1px] w-52 bg-[#2563EB]/[0.08]" />
        <div className="absolute bottom-1/4 left-0 h-40 w-[2px] bg-[#2563EB]/[0.07]" />

        {/* Editorial Crosshairs & Perimeter Labels */}
        <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SEC.06 // ACHIEVEMENTS</span>
        </div>
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>RECOGNITIONS // 08 MILESTONES</span>
          <span>+</span>
        </div>
        <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>IMPACT // VERIFIED IN PRODUCTION</span>
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
                <span className="font-semibold">SECTION 06</span>
                <span className="text-[#6B7280]/50 tracking-[0.2em]">· // RECOGNITIONS</span>
              </motion.div>

              {/* Large Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-bold tracking-tight text-[#111111] leading-[1.04]">
                  Achievements
                  <span className="block text-[#111111]/70 font-poster italic font-normal tracking-tight pt-1.5">
                    Recognitions &amp; Engineering Milestones.
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
                Recognitions, certifications and engineering milestones.
              </motion.p>
            </div>

            {/* Right Editorial Document Metadata Stamp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex flex-col items-start lg:items-end justify-between font-mono text-[9px] uppercase tracking-[0.26em] text-[#6B7280] space-y-2 border-l lg:border-l-0 lg:border-r border-[#111111]/10 pl-5 lg:pl-0 lg:pr-5 select-none"
            >
              <div className="flex items-center gap-2 text-[#111111]">
                <span className="h-1.5 w-1.5 bg-[#2563EB]" />
                <span className="font-semibold">ARCH.SPEC // VOL.06</span>
              </div>
              <div className="flex items-center gap-3 text-[#6B7280]/80">
                <span>VERIFICATION</span>
                <span className="text-[#2563EB] font-medium">08 MILESTONES</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B7280]/60">
                <span>STANDARDS</span>
                <span>ISO &amp; OWASP CERTIFIED</span>
              </div>
              <div className="text-[10px] text-[#111111]/70 tracking-widest pt-1">
                功績録 · MILESTONE SPEC
              </div>
            </motion.div>

          </div>
        </div>

        {/* ==========================================================
            MIDDLE: EDITORIAL MASONRY GRID (8 MILESTONES)
            No repetitive equal cards. Mix of large, medium and small blocks.
        ========================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.15 },
            },
          }}
          className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6"
        >
          {ACHIEVEMENTS.map((item) => {
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
                      ACH.{item.num}
                    </span>
                    <span className="text-[#111111]/25">//</span>
                    <span className="text-[#2563EB] font-medium tracking-widest">
                      {item.category}
                    </span>
                  </div>

                  {/* Micro Interaction: Blue indicator animates & illuminates */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[8px] text-[#6B7280]/70 tracking-widest font-medium">
                      {item.year}
                    </span>
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-0 transition-opacity duration-300 group-hover:opacity-80 group-hover:animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#111111]/20 transition-colors duration-300 group-hover:bg-[#2563EB]" />
                    </span>
                  </div>
                </div>

                {/* ── Body Content of Achievement Block ── */}
                <div
                  className={`relative z-10 px-5 sm:px-6 ${
                    isLarge
                      ? "py-6 sm:py-8"
                      : isMedium
                      ? "py-5 sm:py-6"
                      : "py-4 sm:py-5"
                  } flex-1 flex flex-col justify-between space-y-4`}
                >
                  
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

                    <h3
                      className={`font-display font-bold text-[#111111] tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1 ${
                        isLarge
                          ? "text-2xl sm:text-3xl"
                          : isMedium
                          ? "text-xl sm:text-2xl"
                          : "text-lg sm:text-xl"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Expanding Blue Accent Line */}
                    <div className="h-[2px] w-8 bg-[#2563EB] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-24" />
                  </div>

                  {/* Short Description */}
                  <p
                    className={`font-sans text-[#6B7280] leading-[1.65] font-normal ${
                      isLarge
                        ? "text-sm sm:text-[15px]"
                        : "text-[13px] sm:text-sm"
                    }`}
                  >
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
                    RECORD // {item.year}
                  </span>
                  <span className="text-[#111111]/40 transition-colors duration-300 group-hover:text-[#2563EB]">
                    {item.kanji} · SPEC.06-{item.num}
                  </span>
                </div>

                {/* Subtle Japanese Minimal Blueprint Line Accent on Hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2563EB] transition-all duration-300 ease-out group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>

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
              <span className="text-[#111111] font-semibold">ENGINEERING STANDARD</span>
              <span>· VERIFIED MILESTONES &amp; CONTINUOUS COMMITMENT</span>
            </div>
            <div className="text-[#2563EB] tracking-widest">
              実績基準 // PRODUCTION EXCELLENCE
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Achievements;

