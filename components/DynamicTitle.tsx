"use client";

import { useEffect, useRef } from "react";

/**
 * Section to Browser Tab Title Mapping
 * Matches luxury editorial styling:
 *   Home: Yash Hirudkar — Full Stack Developer
 *   About: About • Yash Hirudkar
 *   Tech Arsenal: Tech Stack • Yash Hirudkar
 *   Experience: Experience • Yash Hirudkar
 *   Projects: Projects • Yash Hirudkar
 *   Agricom CRM: Agricom CRM — Case Study • Yash Hirudkar
 *   Trading Workshop: Trading Platform — Case Study • Yash Hirudkar
 *   Exhibitors Data: Exhibitors Data — Case Study • Yash Hirudkar
 *   Contact: Contact • Yash Hirudkar
 */
interface SectionTitleTarget {
  id: string;
  title: string;
  isSubSection?: boolean;
}

const SECTION_TARGETS: SectionTitleTarget[] = [
  { id: "hero", title: "Yash Hirudkar — Full Stack Developer" },
  { id: "about", title: "About • Yash Hirudkar" },
  { id: "skills", title: "Tech Stack • Yash Hirudkar" },
  { id: "projects", title: "Projects • Yash Hirudkar" },
  { id: "agricom-crm", title: "Agricom CRM — Case Study • Yash Hirudkar", isSubSection: true },
  { id: "enterprise-list-builder", title: "Exhibitors Data — Case Study • Yash Hirudkar", isSubSection: true },
  { id: "experience", title: "Experience • Yash Hirudkar" },
  { id: "education", title: "Education • Yash Hirudkar" },
  { id: "achievements", title: "Achievements • Yash Hirudkar" },
  { id: "opensource", title: "Open Source • Yash Hirudkar" },
  { id: "trading-platform", title: "Trading Platform — Case Study • Yash Hirudkar", isSubSection: true },
  { id: "contact", title: "Contact • Yash Hirudkar" },
];

const DEFAULT_TITLE = "Yash Hirudkar — Full Stack Developer";

const IDLE_TITLES = [
  "Software Developer — Yash Hirudkar",
  "Building Something Amazing...",
  "Yash Hirudkar Portfolio",
];

export function DynamicTitle() {
  const activeTitleRef = useRef(DEFAULT_TITLE);
  const isHiddenRef = useRef(false);

  useEffect(() => {
    // 1. Title updater based on scroll position
    const updateTitleFromScroll = () => {
      if (isHiddenRef.current) return;

      const scrollY = window.scrollY;

      // When at the top of the page, show default Home title
      if (scrollY < 120) {
        if (document.title !== DEFAULT_TITLE) {
          document.title = DEFAULT_TITLE;
        }
        activeTitleRef.current = DEFAULT_TITLE;
        return;
      }

      const viewportThreshold = window.innerHeight * 0.38;
      let matchedTitle = DEFAULT_TITLE;
      let matchedSubTitle: string | null = null;

      // Check all target elements
      for (const target of SECTION_TARGETS) {
        const el = document.getElementById(target.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // Element is in the active reading zone
        if (rect.top <= viewportThreshold && rect.bottom >= 100) {
          if (target.isSubSection) {
            matchedSubTitle = target.title;
          } else {
            matchedTitle = target.title;
          }
        }
      }

      // Sub-sections (e.g. Agricom CRM, Exhibitors Data, Trading Platform) take priority
      const targetTitle = matchedSubTitle || matchedTitle;

      if (targetTitle && document.title !== targetTitle) {
        document.title = targetTitle;
      }
      activeTitleRef.current = targetTitle;
    };

    // Debounced scroll listener (100ms) to avoid excessive title changes
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const handleScroll = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(updateTitleFromScroll, 100);
    };

    // Initial check
    updateTitleFromScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. Extra Polish: Tab Blur / Inactive State Cycle
    let idleIndex = 0;
    let idleInterval: ReturnType<typeof setInterval> | null = null;

    const startIdleCycle = () => {
      isHiddenRef.current = true;
      idleIndex = 0;
      document.title = IDLE_TITLES[0];

      if (idleInterval) clearInterval(idleInterval);
      idleInterval = setInterval(() => {
        if (!isHiddenRef.current) return;
        idleIndex = (idleIndex + 1) % IDLE_TITLES.length;
        document.title = IDLE_TITLES[idleIndex];
      }, 12000); // cycles every 12 seconds
    };

    const stopIdleCycle = () => {
      isHiddenRef.current = false;
      if (idleInterval) {
        clearInterval(idleInterval);
        idleInterval = null;
      }
      // Instantly restore active section title
      document.title = activeTitleRef.current;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        startIdleCycle();
      } else {
        stopIdleCycle();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      if (idleInterval) clearInterval(idleInterval);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}

