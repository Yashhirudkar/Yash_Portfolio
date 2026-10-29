"use client";

/**
 * Editorial Blue Orb — Clean, smooth, premium poster aesthetic.
 * Free of glossy specular glare, orbit lines, and outer blur.
 */
export function HeroOrb() {
  return (
    <div className="hero-orb relative aspect-square w-[min(78vw,34rem)] sm:w-[min(70vw,38rem)]">
      {/* Clean blue orb with smooth, elegant depth */}
      <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_30px_70px_-20px_rgba(0,40,160,0.32)]">
        {/* Rich, smooth blue gradient — no harsh white glare */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_42%_38%,#3B82F6_0%,#1D4ED8_45%,#1E3A8A_80%,#0F172A_100%)]" />

        {/* Soft, natural depth shading */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_-24px_50px_rgba(0,15,60,0.35)]" />
      </div>
    </div>
  );
}
