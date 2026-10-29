"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, MotionStyle } from "framer-motion";

export function HeroCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const sx = useSpring(mx, { stiffness: 180, damping: 22 });
  const sy = useSpring(my, { stiffness: 180, damping: 22 });
  // Dot is faster (direct)
  const dx = useSpring(mx, { stiffness: 800, damping: 50 });
  const dy = useSpring(my, { stiffness: 800, damping: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    const down = () => setClicking(true);
    const up   = () => setClicking(false);

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [data-hover]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
    };
  }, [mx, my]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] hidden md:block"
        animate={{
          width: hovering ? 56 : clicking ? 20 : 36,
          height: hovering ? 56 : clicking ? 20 : 36,
          opacity: hovering ? 0.9 : 0.6,
          background: hovering ? "rgba(91,140,255,0.08)" : "rgba(91,140,255,0)",
        }}
        transition={{ duration: 0.18 }}
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          top: 0,
          left: 0,
          position: "fixed",
          borderRadius: "50%",
          border: "1px solid rgba(91,140,255,0.7)",
          mixBlendMode: "normal",
        } as MotionStyle}
      />
      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          x: dx,
          y: dy,
          translateX: "-50%",
          translateY: "-50%",
          top: 0,
          left: 0,
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#5B8CFF",
          position: "fixed",
          boxShadow: "0 0 8px 2px #5B8CFF88",
        } as MotionStyle}
        animate={{ scale: clicking ? 0.4 : 1 }}
      />
    </>
  );
}
