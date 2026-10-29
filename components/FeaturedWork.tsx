"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  FileText,
  CheckCircle2,
  Lock,
  Building2,
  Search,
  Bell,
  ChevronDown,
  Filter,
  Plus,
  LayoutDashboard,
  Users,
  Boxes,
  Layers,
  BarChart3,
  Settings,
  FileCheck,
  Truck,
} from "lucide-react";

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
  mockupType: "crm" | "webinar" | "portfolio" | "bizprospex" | "listbuilder";
}

const FICTIONAL_CRM_CONTRACTS = [
  { id: "AGR-2048", buyer: "Kyoto Grain Trading Corp", commodity: "Sample Wheat", qty: "2,400 MT", status: "Approved" },
  { id: "AGR-2049", buyer: "Caspian Harvest Alliance", commodity: "Organic Corn", qty: "1,850 MT", status: "Active" },
  { id: "AGR-2050", buyer: "Solaria Agro Mills", commodity: "Commodity Alpha", qty: "3,200 MT", status: "Active" },
  { id: "AGR-2051", buyer: "Bavaria Agri-Ventures", commodity: "Commodity Beta", qty: "950 MT", status: "Completed" },
  { id: "AGR-2052", buyer: "Helvetia Commodity Group", commodity: "Golden Linseed", qty: "1,400 MT", status: "Pending" },
  { id: "AGR-2053", buyer: "Aura Global Agro Corp", commodity: "Sample Wheat", qty: "4,100 MT", status: "Approved" },
];

const PROJECTS: ProjectItem[] = [
  {
    id: "agricom-crm",
    num: "01",
    name: "Agricom CRM & ERP Platform",
    kanji: "貿易管理基盤",
    category: "ENTERPRISE SAAS // AGRIBUSINESS ERP",
    description:
      "Designed and developed production modules for Agricom CRM & ERP, including Sales Contracts, Purchase Contracts, Shipment Management, Freight Management, Inventory, RBAC, workflow automation, and PostgreSQL-powered enterprise operations. Built scalable dashboards, reusable React components, REST APIs, and optimized large transactional datasets for international agricultural trade.",
    role: "Full Stack Developer",
    year: "2025 — Present",
    status: "Production Live",
    stack: [
      "REACT",
      "NEXT.JS",
      "NODE.JS",
      "NESTJS",
      "POSTGRESQL",
      "DOCKER",
      "TAILWIND CSS",
      "SOCKET.IO",
    ],
    metrics: [
      { label: "MODULES", value: "30+" },
      { label: "UPTIME", value: "99.9%" },
      { label: "LATENCY", value: "<15ms" },
    ],
    liveUrl: "",
    githubUrl: "",
    caseStudyUrl: "#",
    mockupType: "crm",
  },
  {
    id: "enterprise-list-builder",
    num: "02",
    name: "Enterprise List Builder Platform",
    kanji: "名簿構築基盤",
    category: "ENTERPRISE SAAS // B2B INTELLIGENCE",
    description:
      "Designed and developed a production-grade List Builder platform for ExhibitorsData, enabling users to search, filter, segment, and export millions of verified B2B contacts. Implemented advanced filtering, enterprise data tables, pagination, CRM workflows, high-performance search, and responsive UI for large-scale datasets.",
    role: "Full Stack Developer",
    year: "2025 — Present",
    status: "Production Live",
    stack: [
      "NEXT.JS",
      "REACT",
      "NODE.JS",
      "NESTJS",
      "POSTGRESQL",
      "TAILWIND CSS",
      "DOCKER",
      "AWS",
    ],
    metrics: [
      { label: "VERIFIED CONTACTS", value: "10M+" },
      { label: "PAGINATION CAPACITY", value: "19K+ PGS" },
      { label: "SEARCH LATENCY", value: "<45ms" },
    ],
    liveUrl: "https://exhibitorsdata.com/user/app/list-builder",
    githubUrl: "",
    caseStudyUrl: "#",
    mockupType: "listbuilder",
  },
  {
    id: "bizprospex-website",
    num: "03",
    name: "BizProspex Website",
    kanji: "情報基盤",
    category: "B2B DATA INTELLIGENCE // ENTERPRISE WEBSITE",
    description:
      "Enterprise corporate website and B2B data intelligence platform. Engineered responsive modern web interfaces, automated CRM data scrubbing microservices, and verified contact intelligence pipelines serving 500+ global enterprises.",
    role: "Software Developer",
    year: "2025",
    status: "Production Live",
    stack: ["REACT", "NODE.JS", "POSTGRESQL", "REST APIS", "DOCKER"],
    metrics: [
      { label: "ACCURACY", value: "98%" },
      { label: "VERIFIED DATA", value: "10M+" },
      { label: "CLIENTS", value: "500+" },
    ],
    liveUrl: "https://bizprospex.com/",
    githubUrl: "https://github.com/yashhirudkar",
    caseStudyUrl: "https://bizprospex.com/",
    mockupType: "bizprospex",
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
                  className={`w-full lg:w-[58%] ${isEven ? "lg:order-2" : "lg:order-1"
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
                            MOCKUP VARIANT 1: AI-GENERATED ENTERPRISE CRM DASHBOARD
                        ============================================== */}
                        {project.mockupType === "crm" && (
                          <div className="relative h-full w-full flex flex-col bg-[#F8FAFC] overflow-hidden text-left font-sans select-none border border-[#CBD5E1]/60">
                            {/* Realistic macOS Desktop Browser Header */}
                            <div className="relative z-20 h-7 sm:h-8 bg-[#EBF0F5] border-b border-[#CBD5E1] px-2.5 sm:px-3 flex items-center justify-between gap-2 shrink-0">
                              {/* macOS Traffic Lights */}
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/80 shadow-xs" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/80 shadow-xs" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/80 shadow-xs" />
                              </div>

                              {/* Browser History & Navigation Icons */}
                              <div className="hidden sm:flex items-center gap-1 text-[#64748B] shrink-0">
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                                <svg className="w-2.5 h-2.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                                <svg className="w-2.5 h-2.5 ml-0.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                              </div>

                              {/* Realistic Address Bar */}
                              <div className="flex-1 max-w-[400px] sm:max-w-[480px] h-5 sm:h-6 bg-white rounded border border-[#CBD5E1] px-2 flex items-center justify-between text-[9px] sm:text-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                                <div className="flex items-center gap-1.5 truncate">
                                  <Lock className="w-2.5 h-2.5 text-[#10B981] shrink-0" />
                                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#2563EB] text-white flex items-center justify-center text-[6.5px] font-black shrink-0 leading-none">
                                    AG
                                  </div>
                                  <div className="flex items-baseline font-mono text-[8px] sm:text-[9.5px] truncate">
                                    <span className="text-[#94A3B8]">https://</span>
                                    <span className="text-[#0F172A] font-semibold">app.agricom.internal</span>
                                    <span className="text-[#64748B]">/sales/contracts</span>
                                  </div>
                                </div>
                                <span className="hidden xs:inline-block font-mono text-[7px] text-[#10B981] uppercase tracking-wider shrink-0 font-medium">
                                  TLS 1.3 // SECURE
                                </span>
                              </div>

                              {/* Browser Controls */}
                              <div className="hidden sm:flex items-center gap-1.5 text-[#64748B] shrink-0">
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                <svg className="w-2.5 h-2.5 fill-none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                              </div>
                            </div>

                            {/* Clean White Interface with Blueprint Grid Background */}
                            <div className="relative flex-1 bg-white overflow-hidden flex flex-col text-left font-sans select-none">
                              {/* Blueprint micro grid pattern */}
                              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#2563EB_0.6px,transparent_0.6px)] [background-size:16px_16px] opacity-[0.035]" />

                              {/* Top App Navigation */}
                              <div className="relative z-10 w-full h-6.5 sm:h-7.5 border-b border-[#E2E8F0] bg-white/95 px-2.5 sm:px-3 flex items-center justify-between shrink-0">
                                {/* Workspace Selector */}
                                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[8px] font-semibold text-[#0F172A]">
                                  <Building2 className="w-2.5 h-2.5 text-[#2563EB]" />
                                  <span className="truncate max-w-[120px] sm:max-w-none">Kyoto Global AgriTrade</span>
                                  <ChevronDown className="w-2 h-2 text-[#64748B]" />
                                </div>

                                {/* Global Search */}
                                <div className="hidden sm:flex items-center gap-1.5 w-44 lg:w-56 h-4.5 px-2 bg-[#F1F5F9]/80 rounded border border-[#E2E8F0] text-[7.5px] text-[#64748B]">
                                  <Search className="w-2 h-2 text-[#94A3B8]" />
                                  <span className="truncate">Search contracts, commodities...</span>
                                  <span className="ml-auto font-mono text-[6.5px] text-[#94A3B8]">⌘K</span>
                                </div>

                                {/* Notifications & Profile */}
                                <div className="flex items-center gap-2">
                                  <div className="relative p-0.5 text-[#64748B] hover:text-[#0F172A] cursor-pointer">
                                    <Bell className="w-2.5 h-2.5" />
                                    <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                                  </div>
                                  <div className="flex items-center gap-1.5 pl-1.5 border-l border-[#E2E8F0]">
                                    <div className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[7px] font-bold">
                                      AG
                                    </div>
                                    <div className="hidden md:block leading-none">
                                      <div className="text-[7.5px] font-bold text-[#0F172A]">Alex Rivera</div>
                                      <div className="text-[6px] text-[#64748B]">Operations Lead</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Main Content Area: Sidebar + Table Viewport */}
                              <div className="relative z-10 flex-1 flex overflow-hidden">
                                
                                {/* Left Navigation Sidebar */}
                                <div className="hidden sm:flex flex-col w-20 lg:w-24 border-r border-[#E2E8F0] bg-[#F8FAFC]/90 py-1.5 shrink-0">
                                  <div className="space-y-0.5 px-1">
                                    {[
                                      { name: "Dashboard", icon: LayoutDashboard },
                                      { name: "Customers", icon: Users },
                                      { name: "Sales Contracts", icon: FileText, active: true },
                                      { name: "Purchase Orders", icon: FileCheck },
                                      { name: "Shipments", icon: Truck },
                                      { name: "Inventory", icon: Boxes },
                                      { name: "Finance", icon: Layers },
                                      { name: "Reports", icon: BarChart3 },
                                      { name: "Settings", icon: Settings },
                                    ].map((item) => {
                                      const Icon = item.icon;
                                      return (
                                        <div
                                          key={item.name}
                                          className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded text-[7px] lg:text-[7.5px] font-medium transition-colors cursor-pointer ${
                                            item.active
                                              ? "bg-[#EFF6FF] text-[#2563EB] font-bold border border-[#BFDBFE]/60 shadow-xs"
                                              : "text-[#64748B] hover:text-[#0F172A] hover:bg-white"
                                          }`}
                                        >
                                          <Icon className="w-2 h-2 shrink-0" />
                                          <span className="truncate">{item.name}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>

                                {/* Table Workspace Container */}
                                <div className="flex-1 flex flex-col justify-between p-1.5 sm:p-2 overflow-hidden bg-white/70">
                                  
                                  {/* Top 4 KPI Cards */}
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-1.5 mb-1.5">
                                    <div className="bg-white rounded border border-[#E2E8F0] p-1 shadow-xs">
                                      <div className="flex items-center justify-between text-[6px] sm:text-[7px] font-mono uppercase tracking-wider text-[#64748B]">
                                        <span>Active Contracts</span>
                                        <span className="text-[#059669] font-bold">+12%</span>
                                      </div>
                                      <div className="font-sans font-black text-[10px] sm:text-[12px] text-[#0F172A] leading-tight mt-0.5">
                                        148
                                      </div>
                                    </div>

                                    <div className="bg-white rounded border border-[#E2E8F0] p-1 shadow-xs">
                                      <div className="flex items-center justify-between text-[6px] sm:text-[7px] font-mono uppercase tracking-wider text-[#64748B]">
                                        <span>Revenue (Q4)</span>
                                        <span className="text-[#2563EB] font-bold">92%</span>
                                      </div>
                                      <div className="font-sans font-black text-[10px] sm:text-[12px] text-[#0F172A] leading-tight mt-0.5">
                                        $18.4M
                                      </div>
                                    </div>

                                    <div className="bg-white rounded border border-[#E2E8F0] p-1 shadow-xs">
                                      <div className="flex items-center justify-between text-[6px] sm:text-[7px] font-mono uppercase tracking-wider text-[#64748B]">
                                        <span>Shipments</span>
                                        <span className="text-[#059669] font-bold">On Time</span>
                                      </div>
                                      <div className="font-sans font-black text-[10px] sm:text-[12px] text-[#0F172A] leading-tight mt-0.5">
                                        34 Active
                                      </div>
                                    </div>

                                    <div className="bg-white rounded border border-[#E2E8F0] p-1 shadow-xs">
                                      <div className="flex items-center justify-between text-[6px] sm:text-[7px] font-mono uppercase tracking-wider text-[#64748B]">
                                        <span>Inventory MT</span>
                                        <span className="text-[#D97706] font-bold">96%</span>
                                      </div>
                                      <div className="font-sans font-black text-[10px] sm:text-[12px] text-[#0F172A] leading-tight mt-0.5">
                                        24,500 MT
                                      </div>
                                    </div>
                                  </div>

                                  {/* Sub-Header & Controls */}
                                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#F1F5F9]">
                                    <div className="flex items-center gap-1.5">
                                      <h5 className="font-sans font-extrabold text-[9px] sm:text-[10px] text-[#0F172A] tracking-tight">
                                        Sales Contracts
                                      </h5>
                                      <span className="hidden xs:inline-block px-1 py-0.2 rounded bg-[#F1F5F9] text-[#64748B] text-[6.5px] font-mono">
                                        148 Records
                                      </span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-[#E2E8F0] bg-white text-[7px] text-[#475569]">
                                        <Filter className="w-1.5 h-1.5 text-[#64748B]" />
                                        <span>Filter</span>
                                      </div>
                                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#2563EB] text-white text-[7px] font-bold shadow-xs">
                                        <Plus className="w-1.5 h-1.5" />
                                        <span>New Contract</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Enterprise Data Table - 100% Non-Scrollable & Fully Responsive */}
                                  <div className="flex-1 overflow-hidden rounded border border-[#E2E8F0] bg-white flex flex-col justify-between [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                    <div className="w-full overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                      <table className="w-full table-fixed text-left border-collapse select-none">
                                        <thead>
                                          <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[6.5px] sm:text-[7.5px] font-mono uppercase tracking-wider text-[#64748B]">
                                            <th className="py-1 px-2 w-[18%] truncate">Contract ID</th>
                                            <th className="py-1 px-2 w-[32%] truncate">Buyer</th>
                                            <th className="py-1 px-2 w-[20%] truncate">Commodity</th>
                                            <th className="py-1 px-2 w-[15%] truncate">Quantity</th>
                                            <th className="py-1 px-2 w-[15%] text-right truncate">Status</th>
                                          </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#F1F5F9] text-[7px] sm:text-[7.5px]">
                                          {FICTIONAL_CRM_CONTRACTS.map((contract) => (
                                            <tr key={contract.id} className="hover:bg-[#F8FAFC]/90 transition-colors">
                                              <td className="py-1 px-2 font-mono font-bold text-[#0F172A] truncate">
                                                {contract.id}
                                              </td>
                                              <td className="py-1 px-2 font-medium text-[#1E293B] truncate">
                                                {contract.buyer}
                                              </td>
                                              <td className="py-1 px-2 text-[#475569] font-medium truncate">
                                                {contract.commodity}
                                              </td>
                                              <td className="py-1 px-2 font-mono text-[#0F172A] font-semibold truncate">
                                                {contract.qty}
                                              </td>
                                              <td className="py-1 px-2 text-right">
                                                <span
                                                  className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[6px] sm:text-[6.5px] font-bold border ${
                                                    contract.status === "Active"
                                                      ? "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]"
                                                      : contract.status === "Approved"
                                                      ? "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]"
                                                      : contract.status === "Pending"
                                                      ? "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]"
                                                      : "bg-[#F1F5F9] text-[#475569] border-[#CBD5E1]"
                                                  }`}
                                                >
                                                  <span
                                                    className={`h-1 w-1 rounded-full ${
                                                      contract.status === "Active"
                                                        ? "bg-[#059669] animate-pulse"
                                                        : contract.status === "Approved"
                                                        ? "bg-[#2563EB]"
                                                        : contract.status === "Pending"
                                                        ? "bg-[#D97706]"
                                                        : "bg-[#64748B]"
                                                    }`}
                                                  />
                                                  <span>{contract.status}</span>
                                                </span>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>

                                    {/* Bottom Pagination Strip */}
                                    <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-2 py-0.5 sm:py-1 flex items-center justify-between text-[6px] sm:text-[7px] font-mono text-[#64748B] select-none">
                                      <span>Showing 1–6 of 148 contracts</span>
                                      <div className="flex items-center gap-1 font-semibold">
                                        <span className="cursor-pointer hover:text-[#0F172A]">Prev</span>
                                        <span className="px-1.5 py-0.2 rounded bg-[#2563EB] text-white">1</span>
                                        <span className="px-1.5 py-0.2 rounded hover:bg-white cursor-pointer">2</span>
                                        <span className="px-1.5 py-0.2 rounded hover:bg-white cursor-pointer">3</span>
                                        <span>...</span>
                                        <span className="px-1.5 py-0.2 rounded hover:bg-white cursor-pointer">15</span>
                                        <span className="cursor-pointer hover:text-[#0F172A]">Next</span>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ==============================================
                            MOCKUP VARIANT 2: EXHIBITORSDATA LIST BUILDER REAL APPLICATION
                        ============================================== */}
                        {project.mockupType === "listbuilder" && (
                          <div className="relative h-full w-full flex flex-col bg-[#F8FAFC] overflow-hidden text-left font-sans select-none border border-[#CBD5E1]/60">
                            {/* Realistic macOS Desktop Browser Header */}
                            <div className="relative z-20 h-7 sm:h-8.5 bg-[#EBF0F5] border-b border-[#CBD5E1] px-2.5 sm:px-3 flex items-center justify-between gap-2 shrink-0">
                              {/* macOS Traffic Lights */}
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/80 shadow-xs" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/80 shadow-xs" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/80 shadow-xs" />
                              </div>

                              {/* Browser History & Navigation Icons */}
                              <div className="hidden sm:flex items-center gap-1 text-[#64748B] shrink-0">
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                                <svg className="w-2.5 h-2.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                                <svg className="w-2.5 h-2.5 ml-0.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                              </div>

                              {/* Realistic Address Bar */}
                              <div className="flex-1 max-w-[400px] sm:max-w-[480px] h-5 sm:h-6 bg-white rounded border border-[#CBD5E1] px-2 flex items-center justify-between text-[9px] sm:text-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                                <div className="flex items-center gap-1.5 truncate">
                                  <Lock className="w-2.5 h-2.5 text-[#10B981] shrink-0" />
                                  {/* ExhibitorsData Favicon */}
                                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#1E3A8A] text-white flex items-center justify-center text-[6.5px] font-black shrink-0 leading-none">
                                    ED
                                  </div>
                                  <div className="flex items-baseline font-mono text-[8px] sm:text-[9.5px] truncate">
                                    <span className="text-[#94A3B8]">https://</span>
                                    <span className="text-[#0F172A] font-semibold">exhibitorsdata.com</span>
                                    <span className="text-[#64748B]">/user/app/list-builder</span>
                                  </div>
                                </div>
                                <span className="hidden xs:inline-block font-mono text-[7px] text-[#10B981] uppercase tracking-wider shrink-0 font-medium">
                                  256-BIT SSL
                                </span>
                              </div>

                              {/* Browser Controls */}
                              <div className="hidden sm:flex items-center gap-1.5 text-[#64748B] shrink-0">
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                              </div>
                            </div>

                            {/* Production Application Screenshot Viewport */}
                            <div className="relative flex-1 bg-[#F8FAFC] overflow-hidden flex items-start justify-center">
                              <img
                                src="/images/exhibitors-data-app.png"
                                alt="ExhibitorsData Enterprise List Builder Production Application"
                                className="w-full h-full object-cover object-top select-none pointer-events-none"
                                loading="eager"
                              />
                            </div>
                          </div>
                        )}

                        {/* ==============================================
                            MOCKUP VARIANT 3: BIZPROSPEX REAL DESKTOP BROWSER
                        ============================================== */}
                        {project.mockupType === "bizprospex" && (
                          <div className="relative h-full w-full flex flex-col bg-white overflow-hidden text-left font-sans select-none border border-[#CBD5E1]/60">
                            {/* Realistic macOS Desktop Browser Header */}
                            <div className="relative z-20 h-7 sm:h-8.5 bg-[#EBF0F5] border-b border-[#CBD5E1] px-2.5 sm:px-3 flex items-center justify-between gap-2 shrink-0">
                              {/* macOS Traffic Lights */}
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/70 shadow-xs" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/70 shadow-xs" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/70 shadow-xs" />
                              </div>

                              {/* Browser History & Navigation Icons */}
                              <div className="hidden sm:flex items-center gap-1 text-[#64748B] shrink-0">
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                                <svg className="w-2.5 h-2.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                                <svg className="w-2.5 h-2.5 ml-0.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                              </div>

                              {/* Realistic Address Bar */}
                              <div className="flex-1 max-w-[400px] sm:max-w-[480px] h-5 sm:h-6 bg-white rounded border border-[#CBD5E1] px-2 flex items-center justify-between text-[9px] sm:text-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                                <div className="flex items-center gap-1.5 truncate">
                                  <Lock className="w-2.5 h-2.5 text-[#10B981] shrink-0" />
                                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#FF6B00] text-white flex items-center justify-center text-[7px] font-black shrink-0 leading-none">
                                    B
                                  </span>
                                  <div className="flex items-baseline font-mono text-[8.5px] sm:text-[9.5px] truncate">
                                    <span className="text-[#94A3B8]">https://</span>
                                    <span className="text-[#0F172A] font-semibold">bizprospex.com</span>
                                    <span className="text-[#64748B]">/</span>
                                  </div>
                                </div>
                                <span className="hidden xs:inline-block font-mono text-[7px] text-[#10B981] uppercase tracking-wider shrink-0 font-medium">
                                  256-BIT SSL
                                </span>
                              </div>

                              {/* Browser Controls */}
                              <div className="hidden sm:flex items-center gap-1.5 text-[#64748B] shrink-0">
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                              </div>
                            </div>

                            {/* BizProspex Live Website Viewport */}
                            <div className="relative flex-1 bg-white flex flex-col justify-between overflow-hidden">
                              {/* Background subtle micro-dots */}
                              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#FF6B00_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-[0.04]" />
                              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#FF6B00]/5 blur-xl pointer-events-none" />

                              {/* BizProspex Navbar */}
                              <div className="relative z-10 w-full h-7 sm:h-8 border-b border-[#F1F5F9] bg-white/95 px-3 sm:px-4 flex items-center justify-between shrink-0">
                                {/* BizProspex Logo */}
                                <div className="flex items-center gap-1.5 shrink-0">
                                  <div className="w-4 h-4 rounded bg-[#FF6B00] flex items-center justify-center text-white text-[9px] font-black shadow-xs">
                                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                  </div>
                                  <div className="flex items-baseline font-sans leading-none">
                                    <span className="font-extrabold text-[11px] sm:text-[13px] text-[#0F172A] tracking-tight">Biz</span>
                                    <span className="font-extrabold text-[11px] sm:text-[13px] text-[#FF6B00] tracking-tight">Prospex</span>
                                  </div>
                                </div>

                                {/* Navigation Links */}
                                <div className="hidden md:flex items-center gap-3 text-[9px] font-medium text-[#475569]">
                                  <span className="hover:text-[#0F172A] cursor-pointer">Services</span>
                                  <span className="hover:text-[#0F172A] cursor-pointer">Data Intelligence</span>
                                  <span className="hover:text-[#0F172A] cursor-pointer">CRM Cleaning</span>
                                  <span className="hover:text-[#0F172A] cursor-pointer">Healthcare Data</span>
                                  <span className="hover:text-[#0F172A] cursor-pointer">Solutions</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="hidden sm:inline-block text-[8.5px] font-medium text-[#64748B]">Sign In</span>
                                  <span className="px-2 py-0.5 sm:py-1 rounded bg-[#FF6B00] text-white text-[8px] sm:text-[9px] font-bold tracking-tight shadow-xs">
                                    Get Free Sample
                                  </span>
                                </div>
                              </div>

                              {/* BizProspex Hero Area */}
                              <div className="relative z-10 flex-1 px-3 sm:px-4.5 py-2 sm:py-2.5 flex flex-col justify-between">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center my-auto">
                                  
                                  {/* Left 7 cols: Headline, Badge, Subtitle & CTA */}
                                  <div className="md:col-span-7 space-y-1 sm:space-y-1.5">
                                    {/* Trust Pill Badge */}
                                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-[7px] sm:text-[8px] font-bold tracking-wide">
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                                      <span>98% ACCURACY GUARANTEE · HUMAN-VERIFIED</span>
                                    </div>

                                    {/* Hero Headline */}
                                    <h4 className="font-sans font-extrabold text-[12px] sm:text-[15px] lg:text-[17px] leading-[1.2] text-[#0F172A] tracking-tight">
                                      Discover Verified B2B Data &amp; Intelligence to{" "}
                                      <span className="bg-gradient-to-r from-[#FF6B00] to-[#EA580C] bg-clip-text text-transparent">
                                        Accelerate Sales Growth
                                      </span>
                                    </h4>

                                    {/* Subtitle */}
                                    <p className="text-[7.5px] sm:text-[8.5px] text-[#475569] leading-relaxed line-clamp-2 max-w-[320px]">
                                      Power your pipeline with 10M+ verified executive contacts, custom ICP dataset enrichment, and real-time CRM hygiene.
                                    </p>

                                    {/* Hero CTAs */}
                                    <div className="flex items-center gap-1.5 pt-0.5">
                                      <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded bg-[#FF6B00] text-white font-bold text-[7.5px] sm:text-[8.5px] shadow-xs">
                                        <span>Get Custom Data Sample</span>
                                        <ArrowUpRight className="w-2.5 h-2.5" />
                                      </span>
                                      <span className="hidden xs:inline-flex items-center px-1.5 py-0.5 sm:py-1 rounded border border-[#CBD5E1] bg-white text-[#334155] font-semibold text-[7.5px] sm:text-[8.5px]">
                                        Explore Data Feeds
                                      </span>
                                    </div>
                                  </div>

                                  {/* Right 5 cols: Enterprise B2B Data Intelligence Platform Graphic */}
                                  <div className="md:col-span-5 hidden sm:block">
                                    <div className="rounded-md border border-[#E2E8F0] bg-white/95 p-2 shadow-xs space-y-1.5">
                                      <div className="flex items-center justify-between pb-1 border-b border-[#F1F5F9]">
                                        <div className="flex items-center gap-1.5">
                                          <div className="w-4 h-4 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-[7.5px] font-bold">
                                            SJ
                                          </div>
                                          <div>
                                            <div className="text-[8px] font-bold text-[#0F172A] leading-tight">Sarah Jenkins</div>
                                            <div className="text-[6.5px] text-[#64748B]">VP Revenue Operations</div>
                                          </div>
                                        </div>
                                        <span className="px-1 py-0.5 rounded bg-[#10B981]/15 text-[#059669] text-[6.5px] font-bold flex items-center gap-0.5">
                                          <CheckCircle2 className="w-2 h-2" /> VERIFIED
                                        </span>
                                      </div>

                                      <div className="space-y-0.5 font-mono text-[7px]">
                                        <div className="flex justify-between items-center text-[#334155] bg-[#F8FAFC] px-1 py-0.5 rounded">
                                          <span className="text-[#64748B]">Direct Dial:</span>
                                          <span className="font-semibold text-[#0F172A]">+1 (415) 892-••••</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[#334155] bg-[#F8FAFC] px-1 py-0.5 rounded">
                                          <span className="text-[#64748B]">Work Email:</span>
                                          <span className="font-semibold text-[#10B981]">100% Deliverable</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[#334155] bg-[#F8FAFC] px-1 py-0.5 rounded">
                                          <span className="text-[#64748B]">CRM Sync:</span>
                                          <span className="font-semibold text-[#FF6B00]">Salesforce / HubSpot</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>

                                {/* Bottom Statistics Strip */}
                                <div className="pt-1.5 border-t border-[#F1F5F9] grid grid-cols-3 gap-2 text-center select-none">
                                  <div className="border-r border-[#F1F5F9]">
                                    <div className="font-sans font-black text-[10px] sm:text-[12px] text-[#0F172A]">98%</div>
                                    <div className="text-[6.5px] sm:text-[7.5px] font-mono uppercase tracking-wider text-[#64748B]">Accuracy Guarantee</div>
                                  </div>
                                  <div className="border-r border-[#F1F5F9]">
                                    <div className="font-sans font-black text-[10px] sm:text-[12px] text-[#0F172A]">10M+</div>
                                    <div className="text-[6.5px] sm:text-[7.5px] font-mono uppercase tracking-wider text-[#64748B]">Verified Records</div>
                                  </div>
                                  <div>
                                    <div className="font-sans font-black text-[10px] sm:text-[12px] text-[#0F172A]">500+</div>
                                    <div className="text-[6.5px] sm:text-[7.5px] font-mono uppercase tracking-wider text-[#64748B]">Enterprise Clients</div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        )}

                      </div>

                    </div>

                    {/* Studio Mockup Base Ticks */}
                    <div className="mt-2.5 pt-2 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.24em] text-[#6B7280]/70">
                      <span>PROJECT ARCHITECTURE // VIEWPORT SPEC</span>
                      <span className="font-mono text-[8.5px] uppercase tracking-[0.3em] text-[#111111]/30">
                        {project.kanji}
                      </span>
                      <span className="text-[#111111] font-semibold">{project.year}</span>
                    </div>

                  </div>
                </div>

                {/* ====================================================
                    CONTENT COLUMN (Editorial Typography & Case Study Info)
                    Occupies 42% on Desktop
                ==================================================== */}
                <div
                  className={`w-full lg:w-[42%] space-y-6 sm:space-y-7 ${isEven ? "lg:order-1" : "lg:order-2"
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
                    {/* Primary Button: Live Demo / Live Website / Disabled (Private Software) */}
                    {project.liveUrl && project.liveUrl.trim() !== "" ? (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -1, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 bg-[#2563EB] px-5 sm:px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] font-medium text-white shadow-sm transition hover:bg-[#1D4ED8]"
                      >
                        <span>{project.mockupType === "bizprospex" ? "Live Website" : "Live Demo"}</span>
                        <ArrowUpRight size={13} />
                      </motion.a>
                    ) : (
                      <div
                        className="inline-flex items-center justify-center gap-2 border border-[#111111]/15 bg-[#111111]/[0.02] px-5 sm:px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#6B7280]/60 select-none cursor-not-allowed"
                        title="Private Enterprise Software — Internal Access Only"
                      >
                        <Lock size={12} className="text-[#6B7280]/60" />
                        <span>Private Software</span>
                      </div>
                    )}

                    {/* Secondary Button: GitHub (Hidden for private projects) */}
                    {Boolean(project.githubUrl && project.githubUrl.trim() !== "") && (
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
                    )}

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

