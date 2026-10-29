"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "ABOUT", shortLabel: "ABOUT" },
  { id: "skills", label: "ARSENAL", shortLabel: "ARSENAL" },
  { id: "experience", label: "EXPERIENCE", shortLabel: "EXP" },
  { id: "projects", label: "PROJECTS", shortLabel: "WORK" },
  { id: "contact", label: "CONTACT", shortLabel: "CONTACT" },
];

export function Nav() {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Handle visibility on scroll (appears once scrolled past initial hero threshold)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShow(scrollY > window.innerHeight * 0.35);

      // Active section spy
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      aria-label="Primary Navigation"
      className="fixed top-5 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 select-none"
    >
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={
          show
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -14, pointerEvents: "none" }
        }
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center bg-[#FFFFFF]/95 backdrop-blur-md border border-[#111111]/12 px-4 sm:px-6 py-2 sm:py-2.5 shadow-[0_10px_30px_-14px_rgba(17,17,17,0.12)] rounded-full text-[#111111]"
      >
        {/* Monogram Brand Identifier */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="flex items-center gap-1.5 font-display text-[11px] font-bold tracking-[0.24em] text-[#111111] transition-opacity hover:opacity-70 pr-1 focus:outline-none"
          aria-label="Scroll to top"
        >
          <span>YH</span>
          <span className="h-1 w-1 rounded-full bg-[#2563EB]" />
        </a>

        {/* Thin Hairline Divider */}
        <div className="h-3.5 w-[1px] bg-[#111111]/12 mx-2.5 sm:mx-3.5" />

        {/* Editorial Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="group relative py-1 font-mono text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.26em] transition-colors duration-200 focus:outline-none"
              >
                <span
                  className={
                    isActive
                      ? "text-[#111111] font-medium"
                      : "text-[#6B7280] group-hover:text-[#111111]"
                  }
                >
                  <span className="sm:hidden">{item.shortLabel}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </span>

                {/* Active Indicator: Subtle Blue Underline (No Pills) */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-[#2563EB]"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </motion.nav>
    </header>
  );
}

export default Nav;
