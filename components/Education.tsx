"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

interface EducationItem {
  id: string;
  degree: string;
  level: string;
  institution: string;
  duration: string;
  location: string;
  specNo: string;
  kanji: string;
  standing?: string;
  description: string;
  skills: string[];
}

const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech)",
    level: "UNDERGRADUATE DEGREE // COMPUTER SCIENCE & ENGINEERING",
    institution: "Prof. Ram Meghe College of Engineering & Management",
    duration: "2022 — 2025",
    location: "Amravati, Maharashtra, India",
    specNo: "EDU.01",
    kanji: "工学士",
    standing: "CGPA 7.7 / 10",
    description:
      "Specialized undergraduate engineering degree focused on Core Computer Science, Operating Systems, Database Management Systems, System Architecture, and Enterprise Software Engineering.",
    skills: [
      "DATA STRUCTURES & ALGORITHMS",
      "OPERATING SYSTEMS",
      "DBMS & SQL",
      "OOP PATTERNS",
      "SYSTEM ARCHITECTURE",
    ],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC) - Science",
    level: "HIGHER SECONDARY // SCIENCE",
    institution: "Hutatma Rashtriya Vidyalaya",
    duration: "2020 — 2021",
    location: "Ashti, Maharashtra, India",
    specNo: "EDU.02",
    kanji: "高等課程",
    standing: "95.17%",
    description:
      "Rigorous pre-university curriculum focusing on advanced mathematics, calculus, quantitative reasoning, and physical systems modeling with academic excellence (95.17%).",
    skills: [
      "MATHEMATICAL ANALYSIS",
      "CALCULUS & ALGEBRA",
      "COMPUTATIONAL LOGIC",
      "PHYSICS",
      "QUANTITATIVE REASONING",
    ],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    level: "SECONDARY EDUCATION",
    institution: "Hutatma Rashtriya Vidyalaya",
    duration: "2018 — 2019",
    location: "Ashti, Maharashtra, India",
    specNo: "EDU.03",
    kanji: "基礎課程",
    standing: "88.00%",
    description:
      "Completed secondary education with distinction (88.00%), demonstrating consistent academic excellence across core sciences and foundational mathematics.",
    skills: [
      "FOUNDATIONAL MATHEMATICS",
      "ANALYTICAL LOGIC",
      "BASIC SCIENCES",
      "PROBLEM SOLVING",
    ],
  },
];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked progress for the timeline blueprint line
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
      id="education"
      ref={containerRef}
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-24 sm:py-32 lg:py-40 select-none border-t border-[#111111]/10"
      aria-label="Education and Academic Journey"
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION BACKGROUND: Pure Blueprint Grid & Japanese Waves
          (Exact continuity across all portfolio sections)
      ───────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Blueprint Grid Pattern (4% opacity) */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <pattern id="edu-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#111111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#edu-blueprint-grid)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Top Right */}
        <svg
          className="absolute -right-24 top-24 h-[440px] w-[440px] opacity-[0.04]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="edu-seigaiha-tr" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#edu-seigaiha-tr)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Bottom Left */}
        <svg
          className="absolute -left-24 bottom-24 h-[420px] w-[420px] opacity-[0.035]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="edu-seigaiha-bl" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#edu-seigaiha-bl)" />
        </svg>

        {/* Minimal Blueprint Geometric Accents */}
        <div className="absolute top-1/4 right-0 h-44 w-[1px] bg-[#2563EB]/[0.08]" />
        <div className="absolute top-0 left-1/3 h-[1px] w-56 bg-[#2563EB]/[0.08]" />
        <div className="absolute bottom-1/3 left-0 h-40 w-[2px] bg-[#2563EB]/[0.07]" />

        {/* Editorial Crosshairs & Perimeter Labels */}
        <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SEC // ACADEMIC BLUEPRINT</span>
        </div>
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>PEDAGOGY // 2018 — 2026</span>
          <span>+</span>
        </div>
        <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>FOUNDATIONS // COMPUTER SCIENCE THEORY</span>
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
                <span className="font-semibold">ACADEMIC FOUNDATIONS</span>
                <span className="text-[#6B7280]/50 tracking-[0.2em]">· // EDUCATION</span>
              </motion.div>

              {/* Large Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-bold tracking-tight text-[#111111] leading-[1.04]">
                  Education
                  <span className="block text-[#111111]/70 font-poster italic font-normal tracking-tight pt-1.5">
                    Foundations &amp; Academic Blueprint.
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
                Documenting foundational computer science theory, mathematical rigor, and engineering credentials.
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
                <span className="font-semibold">ARCH.SPEC // EDUCATION</span>
              </div>
              <div className="flex items-center gap-3 text-[#6B7280]/80">
                <span>CREDENTIALS</span>
                <span className="text-[#2563EB] font-medium">03 MILESTONES</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B7280]/60">
                <span>PARADIGM</span>
                <span>CS &amp; SYSTEM THEORY</span>
              </div>
              <div className="text-[10px] text-[#111111]/70 tracking-widest pt-1">
                学識譜 · ACADEMIC ARCHIVE
              </div>
            </motion.div>

          </div>
        </div>

        {/* ==========================================================
            MIDDLE: EDITORIAL ARCHITECTURAL TIMELINE
        ========================================================== */}
        <div className="relative">

          {/* Continuous Left-Aligned Blueprint Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-8 w-[1px] bg-[#111111]/10 pointer-events-none" />

          {/* Scroll-Linked Fill Indicator */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-8 w-[2px] bg-[#2563EB] pointer-events-none z-10"
          />

          {/* Educational Milestone Blocks */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24 pl-12 sm:pl-16 md:pl-20">
            {EDUCATION_ITEMS.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.75, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border border-[#111111]/12 bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_-25px_rgba(17,17,17,0.05)] transition-all duration-300 hover:border-[#2563EB] hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-20px_rgba(37,99,235,0.1)] flex flex-col justify-between overflow-hidden"
              >
                {/* Timeline Anchor Node (Crosshair + Micro Dot) */}
                <div className="absolute -left-[3.25rem] sm:-left-[3.75rem] md:-left-[4.75rem] top-8 z-20 flex h-7 w-7 items-center justify-center border border-[#111111]/15 bg-[#FFFFFF] shadow-sm transition-colors duration-300 group-hover:border-[#2563EB]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#111111]/40 transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:scale-125" />
                  <span className="absolute -top-1 -right-1 font-mono text-[8px] text-[#111111]/25 group-hover:text-[#2563EB]/60 select-none">+</span>
                </div>

                {/* Corner Crosshairs */}
                <span className="absolute top-1.5 left-2 font-mono text-[9px] text-[#111111]/20 select-none transition-colors group-hover:text-[#2563EB]/60">+</span>
                <span className="absolute top-1.5 right-2 font-mono text-[9px] text-[#111111]/20 select-none transition-colors group-hover:text-[#2563EB]/60">+</span>
                <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-[#111111]/20 select-none transition-colors group-hover:text-[#2563EB]/60">+</span>
                <span className="absolute bottom-1.5 right-2 font-mono text-[9px] text-[#111111]/20 select-none transition-colors group-hover:text-[#2563EB]/60">+</span>

                {/* Card Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between border-b border-[#111111]/10 pb-3 mb-6 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6B7280] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#111111] font-semibold">{item.specNo}</span>
                    <span className="text-[#111111]/20">//</span>
                    <span className="text-[#2563EB] font-medium">{item.level}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {item.standing && (
                      <span className="inline-flex items-center gap-1 border border-[#2563EB]/25 px-2 py-0.5 text-[8.5px] font-semibold text-[#2563EB] bg-[#2563EB]/[0.03]">
                        <CheckCircle2 size={10} />
                        <span>{item.standing}</span>
                      </span>
                    )}
                    <span className="text-[#6B7280]/60 hidden sm:inline">{item.kanji}</span>
                  </div>
                </div>

                {/* Main Content Grid: Left Degree & Institution | Right Description & Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                  {/* Left Column (5 Cols on Desktop): Degree, Institution & Timeline */}
                  <div className="lg:col-span-5 space-y-3">
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111111] leading-tight transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                      {item.degree}
                    </h3>

                    {/* Expanding Blue Accent Line */}
                    <div className="h-[2px] w-8 bg-[#2563EB] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-24" />

                    <div className="space-y-1.5 pt-1">
                      <p className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold flex items-center gap-2">
                        <GraduationCap size={14} className="text-[#2563EB] shrink-0" />
                        <span>{item.institution}</span>
                      </p>

                      <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-[#6B7280] pt-1">
                        <span className="flex items-center gap-1.5 text-[#111111]">
                          <Calendar size={11} className="text-[#2563EB]" />
                          <span>{item.duration}</span>
                        </span>
                        <span className="text-[#111111]/20">·</span>
                        <span className="flex items-center gap-1.5 text-[#6B7280]/80">
                          <MapPin size={11} />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (7 Cols on Desktop): Description & Relevant Skills */}
                  <div className="lg:col-span-7 space-y-4">
                    <p className="font-sans text-sm sm:text-[15px] leading-[1.75] text-[#111111]/85 font-normal">
                      {item.description}
                    </p>

                    <div className="pt-2 space-y-2">
                      <span className="block font-mono text-[8.5px] uppercase tracking-[0.28em] text-[#6B7280]/70">
                        RELEVANT CURRICULUM &amp; SKILLS
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="border border-[#111111]/12 bg-[#111111]/[0.02] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#111111] transition-colors duration-200 group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/[0.03]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Technical Status Stamp */}
                <div className="mt-6 pt-3 border-t border-[#111111]/8 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.24em] text-[#6B7280]/70 bg-[#111111]/[0.01] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 lg:-mx-10 lg:-mb-10 px-6 py-2.5 sm:px-8 lg:px-10">
                  <span className="tracking-widest">
                    ARCHIVE RECORD // {item.duration}
                  </span>
                  <span className="text-[#111111]/40 transition-colors duration-300 group-hover:text-[#2563EB]">
                    {item.kanji} · {item.specNo}
                  </span>
                </div>

                {/* Subtle Japanese Minimal Blueprint Line Accent on Hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2563EB] transition-all duration-300 ease-out group-hover:w-full" />
              </motion.article>
            ))}
          </div>

        </div>

        {/* ==========================================================
            BOTTOM: PEDAGOGY & ENGINEERING ETHOS SUMMARY
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
              <span className="text-[#111111] font-semibold">PEDAGOGICAL RIGOR</span>
              <span>· MATHEMATICAL &amp; COMPUTATIONAL FOUNDATIONS</span>
            </div>
            <div className="text-[#2563EB] tracking-widest">
              学術認証 // 100% VERIFIED CREDENTIALS
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;

