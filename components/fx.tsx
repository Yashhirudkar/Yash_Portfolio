"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import Lenis from "lenis";

export function Smooth() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis(); let id = 0;
    const raf = (t: number) => { l.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); l.destroy(); };
  }, []);
  return null;
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>
  );
}

export function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 });
  return (
    <motion.div className={className} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => { if (inView) { const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setN(v) }); return () => c.stop(); } }, [inView, to]);
  return <span ref={ref}>{Number.isInteger(to) ? Math.round(n) : n.toFixed(1)}{suffix}</span>;
}

export function Background() {
  const cv = useRef<HTMLCanvasElement>(null);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 40, damping: 20 }), py = useSpring(my, { stiffness: 40, damping: 20 });
  useEffect(() => {
    const m = (e: MouseEvent) => { mx.set((e.clientX / innerWidth - 0.5) * 60); my.set((e.clientY / innerHeight - 0.5) * 60); };
    addEventListener("mousemove", m);
    const c = cv.current!, g = c.getContext("2d")!; let id = 0;
    const fit = () => { c.width = innerWidth; c.height = innerHeight; }; fit(); addEventListener("resize", fit);
    const ps = Array.from({ length: 45 }, () => ({ x: Math.random() * c.width, y: Math.random() * c.height, v: 0.1 + Math.random() * 0.25, r: Math.random() * 1.4 + 0.4 }));
    const loop = () => {
      g.clearRect(0, 0, c.width, c.height); g.fillStyle = "rgba(148,163,184,.35)";
      for (const p of ps) { p.y -= p.v; if (p.y < 0) { p.y = c.height; p.x = Math.random() * c.width; } g.beginPath(); g.arc(p.x, p.y, p.r, 0, 7); g.fill(); }
      id = requestAnimationFrame(loop);
    }; loop();
    return () => { removeEventListener("mousemove", m); removeEventListener("resize", fit); cancelAnimationFrame(id); };
  }, [mx, my]);
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="mesh absolute inset-0" />
      <motion.div style={{ x: px, y: py }} className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[110px]" />
      <motion.div style={{ x: py, y: px }} className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-secondary/20 blur-[120px]" />
      <motion.div animate={{ y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-accent/15 blur-[110px]" />
      <canvas ref={cv} className="absolute inset-0" />
    </div>
  );
}

export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30 }), sy = useSpring(y, { stiffness: 300, damping: 30 });
  useEffect(() => { const m = (e: MouseEvent) => { x.set(e.clientX - 150); y.set(e.clientY - 150); }; addEventListener("mousemove", m); return () => removeEventListener("mousemove", m); }, [x, y]);
  return <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed top-0 left-0 z-0 hidden h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl md:block" />;
}
