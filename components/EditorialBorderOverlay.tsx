import React from "react";

export function EditorialBorderOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-35 overflow-hidden"
    >
      <div
        className="absolute border border-[#0A0A0C]/12 transition-colors duration-300"
        style={{ inset: "clamp(6px, 1vw, 16px)" }}
      >
        <div className="absolute -top-3 -left-3 flex items-center gap-1.5 bg-white px-1 text-[10px] font-mono tracking-widest text-[#0A0A0C]/70 select-none">
          <span>00.1</span>
        </div>
        <div className="absolute -top-[1px] -left-[1px] w-3 h-[1px] bg-[#0A0A0C]/30" />
        <div className="absolute -top-[1px] -left-[1px] w-[1px] h-3 bg-[#0A0A0C]/30" />

        <div className="absolute -top-3 -right-3 flex items-center gap-1.5 bg-white px-1 text-[10px] font-mono tracking-widest text-[#0A0A0C]/70 select-none">
          <span>00.2</span>
        </div>
        <div className="absolute -top-[1px] -right-[1px] w-3 h-[1px] bg-[#0A0A0C]/30" />
        <div className="absolute -top-[1px] -right-[1px] w-[1px] h-3 bg-[#0A0A0C]/30" />

        <div className="absolute -bottom-3 -left-3 flex items-center gap-1.5 bg-white px-1 text-[10px] font-mono tracking-widest text-[#0A0A0C]/70 select-none">
          <span>00.3</span>
        </div>
        <div className="absolute -bottom-[1px] -left-[1px] w-3 h-[1px] bg-[#0A0A0C]/30" />
        <div className="absolute -bottom-[1px] -left-[1px] w-[1px] h-3 bg-[#0A0A0C]/30" />

        <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 bg-white px-1 text-[10px] font-mono tracking-widest text-[#0A0A0C]/70 select-none">
          <span>00.4</span>
        </div>
        <div className="absolute -bottom-[1px] -right-[1px] w-3 h-[1px] bg-[#0A0A0C]/30" />
        <div className="absolute -bottom-[1px] -right-[1px] w-[1px] h-3 bg-[#0A0A0C]/30" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-3 h-[1px] bg-[#0A0A0C]/20 hidden sm:block" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] w-3 h-[1px] bg-[#0A0A0C]/20 hidden sm:block" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] w-[1px] h-3 bg-[#0A0A0C]/20 hidden sm:block" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] w-[1px] h-3 bg-[#0A0A0C]/20 hidden sm:block" />

        <div className="absolute right-2 top-[58%] -translate-y-1/2 rotate-90 origin-right hidden lg:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-[#0A0A0C]/45 select-none z-40">
          <span>ENTERPRISE PLATFORMS</span>
          <span className="w-8 h-[1px] bg-[#0A0A0C]/25" />
          <span>REALTIME &amp; PAYMENTS</span>
        </div>

        <div className="absolute left-2 top-[70%] -translate-y-1/2 -rotate-90 origin-left hidden lg:flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-[#0A0A0C]/45 select-none z-40">
          <span>FULL STACK ARCHITECTURE</span>
          <span className="w-8 h-[1px] bg-[#0A0A0C]/25" />
          <span>SCALABLE SYSTEMS</span>
        </div>
      </div>
    </div>
  );
}
