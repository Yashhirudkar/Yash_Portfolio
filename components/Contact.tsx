"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Check,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "yashhirudkar100@gmail.com";
  const resumeUrl =
    "https://drive.google.com/file/d/1rOJhuRrf5z4T_cLndaPWjE9sV7_I2LNy/view?usp=sharing";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-20 select-none border-t border-[#111111]/10"
      aria-label="Contact and Closing"
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION BACKGROUND: Pure Blueprint Grid & Japanese Waves
          (Exact continuity across all 8 editorial sections)
      ───────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Blueprint Grid Pattern (4% opacity) */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <pattern id="contact-blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#111111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-blueprint-grid)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Center Left */}
        <svg
          className="absolute -left-28 top-1/4 h-[460px] w-[460px] opacity-[0.04]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="contact-seigaiha-cl" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#contact-seigaiha-cl)" />
        </svg>

        {/* Japanese Wave Pattern (Seigaiha) Subtle Watermark - Center Right */}
        <svg
          className="absolute -right-28 top-1/3 h-[440px] w-[440px] opacity-[0.035]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <defs>
            <pattern id="contact-seigaiha-cr" width="40" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#contact-seigaiha-cr)" />
        </svg>

        {/* Minimal Blueprint Geometric Accents */}
        <div className="absolute top-1/4 right-0 h-44 w-[1px] bg-[#2563EB]/[0.08]" />
        <div className="absolute top-0 left-1/3 h-[1px] w-56 bg-[#2563EB]/[0.08]" />
        <div className="absolute bottom-1/3 left-0 h-40 w-[2px] bg-[#2563EB]/[0.07]" />

        {/* Editorial Perimeter Labels & Crosshairs */}
        <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>SEC.08 // FINAL TRANSMISSION</span>
        </div>
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>STATUS // ACTIVE &amp; OPEN</span>
          <span>+</span>
        </div>
        <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>+</span>
          <span>EDITION // 2026.01</span>
        </div>
        <div className="absolute bottom-6 right-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.32em] text-[#6B7280]/40">
          <span>21.1458° N, 79.0882° E</span>
          <span>+</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER (Centered Apple Keynote Layout)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 md:px-12 text-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-2.5 border border-[#111111]/12 bg-[#FFFFFF] px-4 sm:px-5 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#111111] mb-8 sm:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
          </span>
          <span className="font-medium">Available for Full-Time Opportunities</span>
        </motion.div>

        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#2563EB] mb-4 sm:mb-5"
        >
          <span className="h-[1px] w-6 bg-[#2563EB]" />
          <span className="font-semibold">SECTION 08</span>
          <span className="text-[#6B7280]/50 tracking-[0.2em]">· // CONTACT</span>
          <span className="h-[1px] w-6 bg-[#2563EB]" />
        </motion.div>

        {/* Large Editorial Keynote Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.5rem)] font-bold tracking-tight text-[#111111] leading-[1.02]">
            Let's Build Something Amazing.
            <span className="block text-[#111111]/70 font-poster italic font-normal tracking-tight pt-2">
              Crafted with Architectural Precision.
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3.5 max-w-2xl mx-auto font-sans text-base sm:text-lg leading-[1.8] text-[#6B7280] font-normal mb-10 sm:mb-12"
        >
          <p>
            I'm always interested in building meaningful digital products, scalable software systems, and collaborating on exciting ideas.
          </p>
          <p className="text-sm sm:text-base text-[#111111]/85">
            If you're looking for a Full Stack Developer who values performance, clean architecture, and thoughtful design, let's connect.
          </p>
        </motion.div>

        {/* ==========================================================
            PRIMARY CTA BUTTONS: Download Resume & Email Me
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14 sm:mb-16"
        >
          {/* Primary CTA: Email Me */}
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2.5 bg-[#2563EB] px-8 sm:px-10 py-4 font-mono text-xs uppercase tracking-[0.24em] font-medium text-white shadow-sm transition hover:bg-[#1D4ED8]"
          >
            <Mail size={14} />
            <span>Email Me</span>
            <ArrowUpRight size={14} />
          </motion.a>

          {/* Secondary CTA: Download Resume */}
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2.5 border border-[#111111]/25 bg-white px-8 sm:px-10 py-4 font-mono text-xs uppercase tracking-[0.24em] font-medium text-[#111111] transition hover:border-[#111111] hover:bg-[#111111]/[0.03]"
          >
            <ArrowDownToLine size={14} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Direct Transmission Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 border border-[#111111]/10 bg-[#FAFAFA] px-5 py-2.5 mb-14 sm:mb-16 cursor-pointer transition-colors hover:border-[#2563EB]/40"
          onClick={handleCopyEmail}
          title="Click to copy email address"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#6B7280]">
            DIRECT INBOX //
          </span>
          <span className="font-mono text-xs font-semibold text-[#111111]">
            {email}
          </span>
          <span className="text-[10px] text-[#2563EB] font-mono uppercase tracking-wider pl-1">
            {copied ? (
              <span className="inline-flex items-center gap-1 text-[#10B981]">
                <Check size={11} /> COPIED
              </span>
            ) : (
              "CLICK TO COPY"
            )}
          </span>
        </motion.div>

        {/* ==========================================================
            SECONDARY PROFESSIONAL LINKS RIBBON
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 border-t border-[#111111]/10 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#6B7280]"
        >
          {/* GitHub */}
          <a
            href="https://github.com/yashhirudkar"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-1.5 transition-colors hover:text-[#111111]"
          >
            <Github size={13} className="text-[#111111]/70 group-hover:text-[#2563EB]" />
            <span>GitHub</span>
            <span className="absolute -bottom-1 left-0 right-0 h-[1px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yashhirudkar"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-1.5 transition-colors hover:text-[#111111]"
          >
            <Linkedin size={13} className="text-[#111111]/70 group-hover:text-[#2563EB]" />
            <span>LinkedIn</span>
            <span className="absolute -bottom-1 left-0 right-0 h-[1px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group relative flex items-center gap-1.5 transition-colors hover:text-[#111111]"
          >
            <Mail size={13} className="text-[#111111]/70 group-hover:text-[#2563EB]" />
            <span>Email</span>
            <span className="absolute -bottom-1 left-0 right-0 h-[1px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Location */}
          <span className="flex items-center gap-1.5 text-[#6B7280]/80">
            <MapPin size={13} className="text-[#2563EB]" />
            <span>Nagpur, IN</span>
          </span>
        </motion.div>

        {/* ==========================================================
            MINIMAL EDITORIAL FOOTER
        ========================================================== */}
        <div className="mt-20 sm:mt-28 lg:mt-32 pt-8 border-t border-[#111111]/10 flex flex-col sm:flex-row items-center justify-between font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-[#6B7280] gap-4 select-none">
          {/* Copyright */}
          <div>
            <span className="text-[#111111] font-semibold">© 2026 Yash Hirudkar</span>
          </div>

          {/* Tech Built Specification */}
          <div className="text-center text-[#6B7280]/80">
            Designed &amp; Developed with Next.js, TypeScript, Tailwind CSS and Framer Motion.
          </div>

          {/* Edition / Coordinates Stamp */}
          <div className="text-right tracking-widest text-[#2563EB] font-medium">
            21.1458° N, 79.0882° E
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;

