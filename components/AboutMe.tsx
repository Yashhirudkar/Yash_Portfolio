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
              <div className="relative z-10 flex items-center justify-between border-b border-[#111111]/10 pb-2.5 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6B7280]">
                <span className="flex items-center gap-1.5 text-[#111111] font-semibold">
                  <span className="h-1.5 w-1.5 bg-[#2563EB]" />
                  <span>FIG.02 // GEO LOCATION</span>
                </span>
                <span className="text-[#6B7280]/80">COORDINATE SYSTEM</span>
              </div>

              {/* Center Architectural City Map Artboard */}
              <div className="relative flex-1 my-3 flex items-center justify-center overflow-hidden bg-[#FAFAFA] border border-[#111111]/[0.08] rounded-xs">
                
                {/* SVG Blueprint Topographic Map */}
                <svg
                  viewBox="0 0 380 440"
                  className="w-full h-full select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Blueprint Micro Grid Pattern */}
                    <pattern id="nagpur-blueprint-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#0F172A" strokeWidth="0.35" strokeOpacity="0.04" />
                    </pattern>

                    {/* Waterbody Hatching Pattern */}
                    <pattern id="water-hatch" width="5" height="5" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="5" stroke="#2563EB" strokeWidth="0.6" strokeOpacity="0.16" />
                    </pattern>

                    {/* Blue Radial Glow for Location Marker */}
                    <radialGradient id="marker-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
                      <stop offset="60%" stopColor="#2563EB" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* 1. Paper Background & Fine Blueprint Grid */}
                  <rect width="100%" height="100%" fill="#FFFFFF" />
                  <rect width="100%" height="100%" fill="url(#nagpur-blueprint-grid)" />

                  {/* 2. Topographic Elevation Contour Isolines (Deccan Plateau / Nagpur Terrain) */}
                  <g stroke="#0F172A" strokeWidth="0.45" strokeOpacity="0.06" fill="none">
                    {/* 310M Contour */}
                    <path d="M 10 95 C 65 125, 115 75, 175 105 C 235 135, 275 88, 335 115 C 360 128, 370 110, 380 120" />
                    {/* 320M Contour */}
                    <path d="M 10 148 C 75 162, 125 128, 185 152 C 245 178, 290 142, 345 168 C 365 178, 375 162, 380 172" strokeDasharray="3 3" />
                    {/* 330M Contour */}
                    <path d="M 10 292 C 65 272, 118 312, 175 288 C 232 264, 288 304, 342 278 C 365 268, 375 282, 380 278" />
                    {/* 345M Contour */}
                    <path d="M 10 358 C 75 382, 128 348, 188 372 C 248 398, 302 364, 358 388 C 368 392, 375 388, 380 390" strokeDasharray="3 3" />
                  </g>

                  {/* Elevation Callout Stamps */}
                  <text x="24" y="98" className="font-mono text-[5.5px] fill-[#0F172A]/25 tracking-widest">+310M</text>
                  <text x="340" y="385" className="font-mono text-[5.5px] fill-[#0F172A]/25 tracking-widest">+345M</text>

                  {/* 3. Waterbodies (Ambazari Lake & Futala Lake - Abstract Blueprint Hatching) */}
                  {/* Ambazari Lake (SW) */}
                  <path
                    d="M 62 252 C 72 240, 92 244, 106 254 C 116 262, 112 280, 100 286 C 85 293, 72 289, 64 276 C 56 266, 54 260, 62 252 Z"
                    fill="url(#water-hatch)"
                    stroke="#2563EB"
                    strokeWidth="0.55"
                    strokeOpacity="0.25"
                  />
                  {/* Futala Lake (WNW) */}
                  <path
                    d="M 82 164 C 94 156, 112 160, 120 170 C 124 178, 116 188, 104 190 C 90 192, 80 184, 78 174 C 77 168, 78 166, 82 164 Z"
                    fill="url(#water-hatch)"
                    stroke="#2563EB"
                    strokeWidth="0.55"
                    strokeOpacity="0.25"
                  />
                  {/* Nag River Organic Axis (Flowing SW to East through Central Nagpur) */}
                  <path
                    d="M 106 272 C 128 264, 150 248, 170 238 C 185 230, 195 233, 215 229 C 240 223, 270 229, 305 225 C 335 221, 360 223, 380 221"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="0.75"
                    strokeOpacity="0.22"
                  />

                  {/* 4. Concentric Radar & Range Rings (Radiating from Nagpur Center: 190, 220) */}
                  <g fill="none">
                    {/* Ring 01: 3 KM */}
                    <circle cx="190" cy="220" r="32" stroke="#0F172A" strokeWidth="0.55" strokeOpacity="0.08" strokeDasharray="1.5 2.5" />
                    {/* Ring 02: 6 KM */}
                    <circle cx="190" cy="220" r="68" stroke="#0F172A" strokeWidth="0.55" strokeOpacity="0.08" />
                    {/* Ring 03: 10 KM */}
                    <circle cx="190" cy="220" r="112" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.07" strokeDasharray="3 3" />
                    {/* Ring 04: 15 KM */}
                    <circle cx="190" cy="220" r="158" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.06" />
                    {/* Outer Compass Boundary */}
                    <circle cx="190" cy="220" r="195" stroke="#0F172A" strokeWidth="0.4" strokeOpacity="0.05" strokeDasharray="4 4" />
                  </g>

                  {/* Center Crosshair Hairlines */}
                  <line x1="190" y1="18" x2="190" y2="422" stroke="#0F172A" strokeWidth="0.35" strokeOpacity="0.08" strokeDasharray="4 4" />
                  <line x1="15" y1="220" x2="365" y2="220" stroke="#0F172A" strokeWidth="0.35" strokeOpacity="0.08" strokeDasharray="4 4" />

                  {/* Radar Range Annotations */}
                  <text x="193" y="155" className="font-mono text-[5px] fill-[#0F172A]/35 tracking-wider">R: 6 KM</text>
                  <text x="193" y="111" className="font-mono text-[5px] fill-[#0F172A]/35 tracking-wider">R: 10 KM</text>
                  <text x="193" y="65" className="font-mono text-[5px] fill-[#0F172A]/35 tracking-wider">R: 15 KM</text>

                  {/* 5. Nagpur Road Geometry: Secondary District Grids (Civil Lines, Sadar, Mahal, Ramdaspeth) */}
                  <g stroke="#0F172A" strokeWidth="0.4" strokeOpacity="0.1" fill="none">
                    {/* Civil Lines Orthogonal Grid (NW Quadrant) */}
                    <line x1="135" y1="155" x2="175" y2="195" />
                    <line x1="145" y1="145" x2="182" y2="182" />
                    <line x1="125" y1="170" x2="165" y2="210" />
                    <line x1="145" y1="185" x2="178" y2="152" />
                    <line x1="158" y1="198" x2="190" y2="166" />
                    
                    {/* Sadar & Jaripatka Grid (North Quadrant) */}
                    <line x1="170" y1="130" x2="215" y2="130" />
                    <line x1="168" y1="110" x2="225" y2="110" />
                    <line x1="165" y1="90" x2="230" y2="90" />
                    <line x1="175" y1="80" x2="175" y2="140" />
                    <line x1="210" y1="80" x2="210" y2="140" />

                    {/* Ramdaspeth & Dharampeth Grid (West/SW Quadrant) */}
                    <line x1="130" y1="215" x2="130" y2="255" />
                    <line x1="145" y1="218" x2="145" y2="262" />
                    <line x1="160" y1="220" x2="160" y2="270" />
                    <line x1="120" y1="230" x2="175" y2="230" />
                    <line x1="115" y1="245" x2="175" y2="245" />

                    {/* Mahal & Gandhibagh Traditional Dense Grid (East Quadrant) */}
                    <line x1="210" y1="205" x2="260" y2="205" />
                    <line x1="215" y1="220" x2="265" y2="220" />
                    <line x1="210" y1="235" x2="258" y2="235" />
                    <line x1="225" y1="195" x2="225" y2="245" />
                    <line x1="242" y1="198" x2="242" y2="242" />
                    <line x1="258" y1="202" x2="258" y2="238" />

                    {/* Somalwada & Manewada Arterial Links (South Quadrant) */}
                    <line x1="155" y1="300" x2="230" y2="300" />
                    <line x1="145" y1="330" x2="235" y2="330" />
                    <line x1="140" y1="360" x2="240" y2="360" />
                    <line x1="160" y1="290" x2="160" y2="370" />
                    <line x1="220" y1="290" x2="220" y2="370" />
                  </g>

                  {/* 6. Railway Trunk Corridor (Diamond Crossing Junction) */}
                  <g stroke="#0F172A" strokeWidth="0.75" strokeOpacity="0.18" strokeDasharray="3.5 2" fill="none">
                    {/* North-South Trunk (Delhi-Chennai) */}
                    <path d="M 202 20 L 202 180 L 198 220 L 195 275 L 196 425" />
                    {/* East-West Trunk (Mumbai-Howrah) */}
                    <path d="M 10 202 L 150 205 L 198 220 L 270 206 L 370 202" />
                  </g>

                  {/* 7. Primary Road Network: Outer Ring Road & Inner Ring Road */}
                  {/* Outer Ring Road (Nagpur Perimeter Bypass) */}
                  <path
                    d="M 190 70 C 285 70, 345 130, 345 220 C 345 315, 280 370, 190 370 C 95 370, 35 310, 35 220 C 35 125, 90 70, 190 70 Z"
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="1.1"
                    strokeOpacity="0.22"
                  />
                  {/* Inner Ring Road (Central City Ring) */}
                  <path
                    d="M 190 145 C 245 145, 275 175, 275 220 C 275 265, 240 295, 190 295 C 140 295, 105 265, 105 220 C 105 175, 135 145, 190 145 Z"
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="1.3"
                    strokeOpacity="0.28"
                  />

                  {/* 8. Major Radial Arterial Highways Radiating from Zero Mile (190, 220) */}
                  <g fill="none">
                    {/* Kamptee Road (North - NH44) */}
                    <path d="M 190 220 L 192 150 L 202 105 L 215 55 L 225 15" stroke="#0F172A" strokeWidth="1.2" strokeOpacity="0.32" />
                    {/* Koradi / Chhindwara Road (NNW) */}
                    <path d="M 190 220 L 175 160 L 150 100 L 135 20" stroke="#0F172A" strokeWidth="1.0" strokeOpacity="0.24" />
                    {/* Katol Road (NW) */}
                    <path d="M 190 220 L 155 185 L 110 145 L 65 108 L 20 80" stroke="#0F172A" strokeWidth="1.0" strokeOpacity="0.24" />
                    {/* Amravati Road (West - NH53) */}
                    <path d="M 190 220 L 140 218 L 90 214 L 45 210 L 10 208" stroke="#0F172A" strokeWidth="1.3" strokeOpacity="0.34" />
                    {/* Hingna Road (SW) */}
                    <path d="M 190 220 L 155 250 L 115 290 L 75 335 L 30 380" stroke="#0F172A" strokeWidth="1.0" strokeOpacity="0.24" />
                    {/* Wardha Road (South - NH44 Airport & MIHAN Corridor) */}
                    <path d="M 190 220 L 190 275 L 186 325 L 188 380 L 190 430" stroke="#0F172A" strokeWidth="1.4" strokeOpacity="0.38" />
                    {/* Umred Road (SE) */}
                    <path d="M 190 220 L 225 255 L 265 300 L 305 350 L 350 405" stroke="#0F172A" strokeWidth="1.0" strokeOpacity="0.24" />
                    {/* Bhandara Road / Central Ave (East - NH53) */}
                    <path d="M 190 220 L 245 218 L 300 214 L 345 210 L 375 208" stroke="#0F172A" strokeWidth="1.3" strokeOpacity="0.34" />
                    {/* Itwari / Pardi Road (ENE) */}
                    <path d="M 190 220 L 230 190 L 280 160 L 325 135 L 365 115" stroke="#0F172A" strokeWidth="1.0" strokeOpacity="0.22" />
                  </g>

                  {/* 9. Key Geometric Junction Circles / Roundabouts */}
                  <g fill="#FFFFFF" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.3">
                    <circle cx="190" cy="195" r="2.8" /> {/* Samvidhan Square */}
                    <circle cx="145" cy="218" r="2.8" /> {/* Shankar Nagar Square */}
                    <circle cx="186" cy="325" r="3.2" /> {/* Chhatrapati Square */}
                    <circle cx="188" cy="280" r="2.8" /> {/* Rahate Colony Square */}
                    <circle cx="215" cy="55" r="3.0" />  {/* Automotive Square */}
                    <circle cx="55" cy="211" r="2.8" />  {/* Wadi Square */}
                  </g>

                  {/* 10. Center Location Marker: Glowing Blue Pin & Radar Pulse */}
                  {/* Expanding Radar Pulse Waves */}
                  <motion.circle
                    cx="190"
                    cy="220"
                    r="6"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                    animate={{ r: [6, 34], opacity: [0.75, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.circle
                    cx="190"
                    cy="220"
                    r="6"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="0.9"
                    animate={{ r: [6, 52], opacity: [0.5, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
                  />

                  {/* Static Marker Glow Halo */}
                  <circle cx="190" cy="220" r="16" fill="url(#marker-glow)" />
                  <circle cx="190" cy="220" r="7.5" fill="none" stroke="#2563EB" strokeWidth="0.75" strokeOpacity="0.4" />

                  {/* Precision Center Reticle Crosshairs */}
                  <line x1="182" y1="220" x2="198" y2="220" stroke="#2563EB" strokeWidth="0.7" strokeOpacity="0.8" />
                  <line x1="190" y1="212" x2="190" y2="228" stroke="#2563EB" strokeWidth="0.7" strokeOpacity="0.8" />

                  {/* Vibrant Blue Pin Center */}
                  <circle cx="190" cy="220" r="3.6" fill="#2563EB" />
                  <circle cx="190" cy="220" r="1.3" fill="#FFFFFF" />

                  {/* 11. Architectural Callout Stem & Nagpur Technical Label */}
                  {/* Hairline Callout Stem */}
                  <path
                    d="M 190 220 L 222 178 L 268 178"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="0.8"
                    strokeOpacity="0.85"
                  />
                  <circle cx="268" cy="178" r="1.5" fill="#2563EB" />

                  {/* Technical Badge for Nagpur City Center */}
                  <g transform="translate(232, 142)">
                    {/* Badge Container */}
                    <rect
                      x="0"
                      y="0"
                      width="108"
                      height="32"
                      rx="2"
                      fill="#FFFFFF"
                      fillOpacity="0.95"
                      stroke="#2563EB"
                      strokeWidth="0.75"
                      strokeOpacity="0.5"
                    />
                    {/* Live Dot Beacon */}
                    <circle cx="8" cy="10" r="2" fill="#2563EB" />
                    {/* Label: NAGPUR */}
                    <text x="14" y="12" className="font-sans font-black text-[9px] fill-[#0F172A] tracking-[0.16em]">
                      NAGPUR
                    </text>
                    {/* Coordinates */}
                    <text x="8" y="20" className="font-mono text-[5.8px] fill-[#64748B] tracking-wider">
                      21.1458° N, 79.0882° E
                    </text>
                    {/* Zero Mile Callout */}
                    <text x="8" y="27" className="font-mono text-[5.2px] font-bold fill-[#2563EB] tracking-[0.14em]">
                      ZERO MILE // CTR. OF INDIA
                    </text>
                  </g>

                  {/* 12. Minimal Architectural North Compass (Top Right) */}
                  <g transform="translate(330, 42)">
                    <circle cx="14" cy="14" r="12" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.12" fill="#FFFFFF" fillOpacity="0.8" />
                    {/* North Needle */}
                    <polygon points="14,4 11,14 14,12" fill="#2563EB" />
                    <polygon points="14,4 17,14 14,12" fill="#0F172A" fillOpacity="0.3" />
                    <polygon points="14,24 11,14 14,16" fill="#0F172A" fillOpacity="0.1" />
                    <polygon points="14,24 17,14 14,16" fill="#0F172A" fillOpacity="0.2" />
                    <text x="14" y="0" textAnchor="middle" className="font-mono text-[6.5px] font-bold fill-[#2563EB]">
                      北
                    </text>
                    <text x="14" y="32" textAnchor="middle" className="font-mono text-[5px] fill-[#64748B]">
                      N 000°
                    </text>
                  </g>

                  {/* 13. Architectural Scale Bar (Bottom Left) */}
                  <g transform="translate(24, 400)">
                    <line x1="0" y1="0" x2="60" y2="0" stroke="#0F172A" strokeWidth="0.75" strokeOpacity="0.4" />
                    <line x1="0" y1="-2.5" x2="0" y2="2.5" stroke="#0F172A" strokeWidth="0.75" strokeOpacity="0.4" />
                    <line x1="30" y1="-2" x2="30" y2="2" stroke="#0F172A" strokeWidth="0.75" strokeOpacity="0.4" />
                    <line x1="60" y1="-2.5" x2="60" y2="2.5" stroke="#0F172A" strokeWidth="0.75" strokeOpacity="0.4" />
                    <text x="0" y="-4.5" className="font-mono text-[4.8px] fill-[#0F172A]/50">0</text>
                    <text x="27" y="-4.5" className="font-mono text-[4.8px] fill-[#0F172A]/50">2.5</text>
                    <text x="54" y="-4.5" className="font-mono text-[4.8px] fill-[#0F172A]/50">5.0 KM</text>
                    <text x="0" y="8" className="font-mono text-[5.2px] fill-[#64748B] tracking-wider">
                      SCALE 1:1.618 // WGS 84
                    </text>
                  </g>

                  {/* 14. Top Left Spec Box */}
                  <g transform="translate(24, 30)">
                    <text x="0" y="0" className="font-mono text-[6px] font-semibold fill-[#0F172A] tracking-wider">
                      ELEVATION // 310M MSL
                    </text>
                    <text x="0" y="8" className="font-mono text-[5.2px] fill-[#64748B] tracking-wide">
                      URBAN BLUEPRINT SPEC
                    </text>
                  </g>
                </svg>

                {/* Vertical Japanese Editorial Labels (Left Margin) */}
                <div className="absolute left-1.5 top-6 bottom-6 flex flex-col justify-between font-mono text-[8px] tracking-[0.32em] text-[#6B7280] select-none pointer-events-none">
                  <div className="[writing-mode:vertical-rl] space-y-1">
                    <span className="text-[#111111] font-semibold">地理座標 · 零地点</span>
                    <span className="text-[#6B7280]/70">· ZERO MILE</span>
                  </div>
                  <div className="h-7 w-[1px] bg-[#111111]/15 mx-auto" />
                  <div className="[writing-mode:vertical-rl] text-[#2563EB] font-medium">
                    LAT 21.1458° N
                  </div>
                </div>

                {/* Vertical Japanese Editorial Labels (Right Margin) */}
                <div className="absolute right-1.5 top-6 bottom-6 flex flex-col justify-between items-end font-mono text-[8px] tracking-[0.32em] text-[#6B7280] select-none pointer-events-none">
                  <div className="[writing-mode:vertical-rl]">
                    <span className="text-[#111111] font-semibold">精密図面 · 縮尺</span>
                  </div>
                  <div className="h-7 w-[1px] bg-[#111111]/15 mx-auto" />
                  <div className="[writing-mode:vertical-rl] text-[#2563EB] font-medium">
                    LONG 79.0882° E
                  </div>
                </div>

              </div>

              {/* Composition Bottom Metadata & Coordinate Stamp */}
              <div className="relative z-10 border-t border-[#111111]/10 pt-2.5 flex items-end justify-between font-mono text-[9px] text-[#6B7280]">
                <div className="space-y-0.5">
                  <p className="font-semibold text-[#111111] tracking-wider uppercase">ARCH.SPEC // VOL.02</p>
                  <p className="tracking-widest text-[#6B7280]/80">NAGPUR, INDIA · 21.1458° N, 79.0882° E</p>
                </div>
                <div className="text-right space-y-0.5">
                  <div className="tracking-widest text-[#2563EB] font-semibold">READY • 2026</div>
                  <div className="text-[7.5px] tracking-[0.18em] text-[#6B7280]/60">SCALE 1:1.618</div>
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

