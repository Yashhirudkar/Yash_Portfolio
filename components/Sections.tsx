"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Moon, Sun, ExternalLink, Send, Terminal, Cpu, Database, Shield, Layers, Server, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal, Tilt, Counter } from "./fx";
import { profile, stats, skills, stack, experience, projects, achievements, education } from "@/lib/content";
export { Hero } from "./Hero";

const SectionTitle = ({ k, t, num }: { k: string; t: string; num: string }) => (
  <div className="mb-16 border-b border-white/15 pb-6">
    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-3">
      <span className="flex items-center gap-2">
        <span className="h-[1px] w-6 bg-accent/60" />
        <span>{k}</span>
      </span>
      <span className="text-muted font-semibold tracking-widest">{num}</span>
    </div>
    <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-fg uppercase">
      {t}
    </h2>
  </div>
);

const Sec = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section id={id} className="relative mx-auto max-w-6xl px-6 py-32 border-b border-white/10 last:border-b-0">
    {children}
  </section>
);

export function Nav() {
  const [light, setLight] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle("light", light); }, [light]);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav aria-label="Primary" aria-hidden={!show} inert={!show} className={`glass fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-4"}`}>
      {["about", "skills", "experience", "projects", "contact"].map((s) => (
        <a key={s} href={`#${s}`} className="hidden rounded-full px-3 py-1.5 text-muted transition hover:bg-white/10 hover:text-fg sm:block">{s}</a>))}
      <span className="px-2 font-display font-bold sm:hidden text-primary">YH</span>
      <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />
      <button onClick={() => setLight(!light)} aria-label="Toggle theme" className="rounded-full p-1.5 text-muted transition hover:bg-white/10 hover:text-fg">
        {light ? <Moon size={14} /> : <Sun size={14} />}</button>
    </nav>
  );
}

export function About() {
  return (
    <Sec id="about">
      <SectionTitle k="01 // Philosophy & Background" t="Engineer first. Craftsman always." num="VOL.01 // ABOUT" />
      <div className="grid gap-12 md:grid-cols-12 items-start">
        <Reveal className="space-y-6 text-base sm:text-lg leading-relaxed text-muted md:col-span-7 font-sans">
          {profile.about.map((p, idx) => (
            <p key={p} className={idx === 0 ? "text-fg font-medium" : ""}>{p}</p>
          ))}
          <div className="pt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
              <Sparkles size={12} /> B2B SaaS Architect
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs text-accent">
              <Shield size={12} /> RBAC & Security
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-mono text-xs text-muted">
              <Cpu size={12} /> High Concurrency
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="glass rounded-3xl p-8 md:col-span-5 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-accent tracking-widest uppercase">
            <span>Metadata</span>
            <span>SYSTEM.INFO</span>
          </div>
          <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-muted">Location</span>
              <span className="text-fg flex items-center gap-1.5"><MapPin size={12} className="text-primary" /> {profile.location}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-muted">Education</span>
              <span className="text-fg">B.Tech CSE (2025)</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-muted">Core Stack</span>
              <span className="text-primary">Node · Next · PostgreSQL</span>
            </div>
            <div className="flex justify-between pb-1">
              <span className="text-muted">Status</span>
              <span className="text-success flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> Active & Deploying
              </span>
            </div>
          </div>
          <div className="pt-2">
            <p className="font-mono text-[11px] text-muted italic">
              "Building robust backends and frictionless user interfaces with uncompromised precision."
            </p>
          </div>
        </Reveal>
      </div>
    </Sec>
  );
}

export function Skills() {
  return (
    <Sec id="skills">
      <SectionTitle k="02 // Technical Competence" t="Depth where it matters." num="VOL.02 // SKILLS" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.n} delay={i * .05}>
            <Tilt className="glass h-full rounded-3xl p-7 flex flex-col justify-between group transition hover:border-primary/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent">DOMAIN // 0{i+1}</span>
                  <span className="font-mono text-xs text-primary font-semibold px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">{s.p}%</span>
                </div>
                <h3 className="font-display text-xl font-bold text-fg group-hover:text-primary transition-colors">{s.n}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.t}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden mr-4">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.p}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
                <span className="font-mono text-[10px] text-muted uppercase">Verified</span>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="glass rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Full Ecosystem Stack</span>
            <span className="font-mono text-xs text-muted">PRODUCTION TESTED</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((t, i) => (
              <motion.span key={t} whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-fg tracking-wide transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary cursor-default">
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </Reveal>
    </Sec>
  );
}

export function Experience() {
  return (
    <Sec id="experience">
      <SectionTitle k="03 // Career Path" t="Where I've shipped." num="VOL.03 // EXPERIENCE" />
      <div className="relative space-y-12 before:absolute before:inset-0 before:left-4 before:h-full before:w-[1px] before:bg-white/15">
        {experience.map((e, idx) => (
          <Reveal key={e.org} delay={idx * 0.1}>
            <div className="relative pl-10 sm:pl-12">
              <span className="absolute top-2 left-[11px] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-bg shadow-[0_0_15px_#5B8CFF]" />
              <div className="glass rounded-3xl p-8 relative overflow-hidden transition hover:border-primary/40">
                <div className="absolute top-0 right-0 px-6 py-3 font-mono text-[10px] tracking-widest text-accent uppercase bg-primary/10 border-b border-l border-white/10 rounded-bl-2xl">
                  {e.when}
                </div>
                <div className="space-y-1 mb-6">
                  <span className="font-mono text-xs text-primary uppercase tracking-widest">POSITION // {idx === 0 ? "CURRENT" : "PAST"}</span>
                  <h3 className="font-display text-2xl font-bold text-fg">{e.role} <span className="text-primary font-normal">@ {e.org}</span></h3>
                </div>
                <ul className="space-y-3">
                  {e.pts.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted text-sm sm:text-base leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_#06B6D4]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}

export function Projects() {
  return (
    <Sec id="projects">
      <SectionTitle k="04 // Case Studies" t="Selected work & products." num="VOL.04 // PROJECTS" />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.n} delay={(i % 2) * 0.15}>
            <Tilt className="glass group h-full flex flex-col justify-between overflow-hidden rounded-3xl transition hover:border-primary/50">
              <div>
                <div className={`relative h-48 w-full bg-gradient-to-br ${p.g} p-6 flex flex-col justify-between opacity-95 overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/90 bg-black/30 px-3 py-1 rounded-full border border-white/20">
                      PROJECT // 0{i+1}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{p.n}</h3>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{p.d}</p>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Key Architecture Highlights</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {p.f.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs font-mono text-muted">
                          <CheckCircle2 size={13} className="text-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {p.t.map((t) => (
                        <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-mono text-xs text-muted group-hover:border-primary/30 transition">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 flex items-center justify-between border-t border-white/10 mt-auto">
                <a href="#" className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-fg hover:text-primary transition group-hover:translate-x-1 duration-300">
                  <span>Explore Case Study</span> <ExternalLink size={14} />
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-fg transition">
                  <Github size={14} /> Source
                </a>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}

export function Achievements() {
  return (
    <Sec id="achievements">
      <SectionTitle k="05 // Quantifiable Impact" t="Numbers that matter." num="VOL.05 // METRICS" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {achievements.map((a, i) => (
          <Reveal key={a.l} delay={i * 0.08}>
            <div className="glass rounded-3xl p-8 text-center flex flex-col justify-between h-full group hover:border-primary/40 transition">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">METRIC // 0{i+1}</span>
              <div className="font-display text-4xl sm:text-5xl font-extrabold grad-text my-2">
                <Counter to={a.v} suffix={a.s} />
              </div>
              <p className="mt-4 text-xs sm:text-sm text-muted font-medium leading-relaxed">{a.l}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}

export function Education() {
  return (
    <Sec id="education">
      <SectionTitle k="06 // Academic Background" t="Foundations & Credentials." num="VOL.06 // EDUCATION" />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.n} delay={i * 0.1}>
            <div className="glass rounded-3xl p-8 h-full flex flex-col justify-between hover:border-primary/40 transition">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-accent">
                  <span>CREDENTIAL // 0{i+1}</span>
                  <span className="text-muted">{e.w}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-fg">{e.n}</h3>
                <p className="text-muted text-sm">{e.o}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-muted">Standing / Grade</span>
                <span className="text-primary font-semibold">{e.e}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Hello from ${f.get("name")}`)}&body=${encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`)}`;
    setSent(true);
  };
  const inputCls = "w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 font-sans text-sm text-fg outline-none transition focus:border-primary focus:bg-white/10";

  return (
    <Sec id="contact">
      <SectionTitle k="07 // Direct Transmission" t="Let's build something great." num="VOL.07 // CONTACT" />
      <div className="grid gap-12 md:grid-cols-12 items-start">
        <Reveal className="md:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">INITIATE CONTACT</span>
            <h3 className="font-display text-3xl font-bold text-fg">Ready to discuss your next project or engineering role?</h3>
            <p className="text-muted text-base leading-relaxed">
              Drop a message for engineering collaborations, full-stack architecture roles, or high-performance platform discussions.
            </p>
          </div>

          <div className="glass rounded-3xl p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-muted">Direct Email</span>
              <a href={`mailto:${profile.email}`} className="text-primary hover:underline">{profile.email}</a>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-muted">Phone / WhatsApp</span>
              <span className="text-fg">{profile.phone}</span>
            </div>
            <div className="flex items-center justify-between pb-1">
              <span className="text-muted">Location</span>
              <span className="text-fg">{profile.location}</span>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-4 text-muted hover:text-fg hover:border-primary/50 transition flex items-center gap-2 font-mono text-xs">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-4 text-muted hover:text-fg hover:border-primary/50 transition flex items-center gap-2 font-mono text-xs">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="glass rounded-2xl p-4 text-muted hover:text-fg hover:border-primary/50 transition flex items-center gap-2 font-mono text-xs">
              <Mail size={16} /> Email
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7">
          <form onSubmit={submit} className="glass rounded-3xl p-8 sm:p-10 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs uppercase tracking-widest text-accent">
              <span>Secure Transmission Form</span>
              <span>TCP // 200 OK</span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-muted">Your Name</label>
                <input required name="name" type="text" placeholder="e.g. Satoshi Nakamoto" className={inputCls} />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-muted">Email Address</label>
                <input required name="email" type="email" placeholder="e.g. satoshi@bitcoin.org" className={inputCls} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted">Message / Project Scope</label>
              <textarea required name="message" rows={5} placeholder="Describe the system, timeline, or engineering goals..." className={`${inputCls} resize-none`} />
            </div>

            <button type="submit" className="w-full rounded-2xl bg-primary py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-primary/90 flex items-center justify-center gap-2">
              <span>{sent ? "Transmission Sent" : "Transmit Message"}</span>
              <Send size={14} />
            </button>
          </form>
        </Reveal>
      </div>
    </Sec>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-muted">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-display font-bold text-sm text-fg tracking-wider">YASH HIRUDKAR // PORTFOLIO 2026</p>
          <p>Full Stack Engineer &amp; Enterprise Systems Architect</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-fg transition">Back to Top ↑</a>
          <span>·</span>
          <p>© 2026 Yash Hirudkar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
