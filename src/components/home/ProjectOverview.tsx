"use client";

import { HomeProject } from "@/data/project";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  getHomeSectionHref,
  HOME_PROJECT_SECTION,
  HOME_RETURN_QUERY_KEY,
  HOME_SECTION_STORAGE_KEY,
} from "@/utils/homeSections";

type Project = {
  id: string | number;
  name: string;
  image?: string;
  description?: string;
  projectDetails?: string;
  client?: string;
  cargo?: string;
  pol?: string;
  pod?: string;
  duration?: string;
  vessel?: string;
  year?: string | number;
  projectYear?: string | number;
  completionYear?: string | number;
  startYear?: string | number;
  endYear?: string | number;
  date?: string | number | Date;
  publishedAt?: string | number | Date;
  createdAt?: string | number | Date;
  updatedAt?: string | number | Date;
};

const TIMELINE = ["2025", "2024", "2023", "2022", "2021", "2019", "2018", "2016", "2012"] as const;

const extractYear = (v: unknown): number | undefined => {
  if (v == null) return undefined;
  const n = typeof v === "number" ? v : Number(v);
  if (Number.isFinite(n) && n >= 1900 && n <= 2100) return Math.trunc(n);
  if (v instanceof Date && !isNaN(v.getTime())) return v.getFullYear();
  if (typeof v === "string") {
    const d = new Date(v);
    if (!isNaN(d.getTime())) return d.getFullYear();
    const m = v.match(/\b(19\d{2}|20\d{2})\b/);
    if (m) return Number(m[1]);
  }
  return undefined;
};

const deriveYear = (p: Project): number | undefined => {
  const candidates: Array<unknown> = [
    p.year,
    p.projectYear,
    p.completionYear,
    p.startYear,
    p.endYear,
    p.date,
    p.publishedAt,
    p.createdAt,
    p.updatedAt,
    p.name,
    p.description,
  ];
  for (const c of candidates) {
    const y = extractYear(c);
    if (y !== undefined) return y;
  }
  return undefined;
};

export const HomeProjectOverview = () => {
  const raw = (HomeProject as Project[]).filter(Boolean);
  const projects = useMemo(
    () =>
      raw.map((p) => {
        const y = deriveYear(p);
        return { ...p, __year: y ?? null } as Project & { __year: number | null };
      }),
    [raw]
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const didInitialScroll = useRef(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeYear, setActiveYear] = useState<number>(2025);

  const availableYearsAsc = useMemo(() => {
    const set = new Set<number>();
    projects.forEach((p) => {
      if (p.__year != null) set.add(p.__year);
    });
    return Array.from(set).sort((a, b) => a - b);
  }, [projects]);

  const yearToFirstIndex = useMemo(() => {
    const map: Record<number, number> = {};
    projects.forEach((p, idx) => {
      if (p.__year == null) return;
      if (map[p.__year] === undefined) map[p.__year] = idx;
    });
    return map;
  }, [projects]);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  const scrollByDir = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.offsetWidth / 1.2;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateScrollButtons, 320);
  };

  const alignCardToStart = useCallback((target: HTMLDivElement) => {
    const container = scrollRef.current!;
    const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
    const left = Math.max(target.offsetLeft - paddingLeft, 0);
    container.scrollTo({ left, behavior: "smooth" });
    setTimeout(updateScrollButtons, 360);
  }, [updateScrollButtons]);

  const findNearestExistingYear = useCallback(
    (clicked: number): number | undefined => {
      if (availableYearsAsc.includes(clicked)) return clicked;
      const earlier = availableYearsAsc.filter((y) => y <= clicked);
      if (earlier.length) return earlier[earlier.length - 1];
      return availableYearsAsc[0];
    },
    [availableYearsAsc]
  );

  const scrollToYear = useCallback((yearStr: string) => {
    const container = scrollRef.current;
    if (!container) return;

    const clicked = Number(yearStr);
    if (!Number.isFinite(clicked)) return;

    setActiveYear(clicked);

    const targetYear = findNearestExistingYear(clicked);
    if (targetYear === undefined) return;

    const idx = yearToFirstIndex[targetYear];
    let target: HTMLDivElement | null = null;

    if (idx !== undefined) {
      target = container.querySelectorAll<HTMLDivElement>("[data-year]")[idx] ?? null;
    }
    if (!target) {
      target = container.querySelector(`[data-year="${String(targetYear)}"]`) as HTMLDivElement | null;
    }
    if (!target) return;

    alignCardToStart(target);
  }, [alignCardToStart, findNearestExistingYear, yearToFirstIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, [updateScrollButtons]);

  useEffect(() => {
    if (didInitialScroll.current) return;
    didInitialScroll.current = true;
    scrollToYear(String(activeYear));
  }, [activeYear, scrollToYear]);

  const returnTo = getHomeSectionHref(HOME_PROJECT_SECTION);

  const handleProjectClick = () => {
    window.sessionStorage.setItem(HOME_SECTION_STORAGE_KEY, HOME_PROJECT_SECTION);
  };

  return (
    <section id="project-overview" className="min-h-screen flex flex-col justify-center relative">
      {/* <div className="px-4 md:px-[3%] flex gap-4 md:flex-row justify-between items-center mt-[10vh]">
        <h1 className="mb-2">
          <span
            className="font-roboto text-2xl md:text-3xl 2xl:text-5xl font-bold text-[#094d82] block text-start uppercase"
            style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.5)" }}
          >
            PROJECTS
          </span>
          <span
            className="font-roboto text-4xl md:text-5xl 2xl:text-7xl font-bold text-[#094d82] block text-start uppercase"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            OVERVIEW
          </span>
        </h1>

        <div className="overflow-x-auto py-10 w-1/2 scrollbar-hide">
          <div className="relative inline-flex items-start gap-2 px-4">
            <div className="absolute top-10 md:top-11 left-[calc(2rem+2rem)] right-[calc(2rem+2rem)] h-0.5 bg-[#094d82] z-0" />
            {TIMELINE.map((year) => {
              const isActive = activeYear === Number(year);
              return (
                <div key={year} className="relative z-10 flex flex-col items-center text-center w-20 shrink-0">
                  <div
                    onClick={() => scrollToYear(year)}
                    className={`h-5 md:h-6 mb-2 flex items-center justify-center font-semibold cursor-pointer select-none transition-all ${isActive ? "text-[#094d82] text-base md:text-lg" : "text-[#094d82] text-sm md:text-base"
                      }`}
                    aria-label={`Jump to projects from ${year}`}
                    title={`Jump to ${year}`}
                  >
                    {year}
                  </div>
                  <div className="h-6 flex items-center justify-center">
                    <div
                      onClick={() => scrollToYear(year)}
                      className={`relative rounded-full border-2 border-[#094d82] shadow-md cursor-pointer transition-all ${isActive ? "bg-[#094d82] w-5 h-5 outline outline-2 outline-[#094d82] outline-offset-2" : "bg-white w-4 h-4"
                        }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
     <div className="px-4 md:px-[3%] flex flex-col md:flex-row justify-between items-start md:items-center  md:mt-[10vh]  md:gap-4">
  <h1 className="mb-2">
    <span
      className="font-roboto text-xl md:text-3xl 2xl:text-5xl font-bold text-[#094d82] block text-start uppercase"
      style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.5)" }}
    >
      PROJECTS
    </span>
    <span
      className="font-roboto text-3xl md:text-5xl 2xl:text-7xl font-bold text-[#094d82] block text-start uppercase"
      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
    >
      OVERVIEW
    </span>
  </h1>

  <div className="overflow-x-auto py-10 w-full md:w-1/2 scrollbar-hide">
    <div className="relative inline-flex items-start gap-2 px-4">
      <div className="absolute top-10 md:top-11 left-[calc(2rem+2rem)] right-[calc(2rem+2rem)] h-0.5 bg-[#094d82] z-0" />
      {TIMELINE.map((year) => {
        const isActive = activeYear === Number(year);
        return (
          <div key={year} className="relative z-10 flex flex-col items-center text-center w-20 shrink-0">
            <div
              onClick={() => scrollToYear(year)}
              className={`h-5 md:h-6 mb-2 flex items-center justify-center font-semibold cursor-pointer select-none transition-all ${
                isActive ? "text-[#094d82] text-base md:text-lg" : "text-[#094d82] text-sm md:text-base"
              }`}
              aria-label={`Jump to projects from ${year}`}
              title={`Jump to ${year}`}
            >
              {year}
            </div>
            <div className="h-6 flex items-center justify-center">
              <div
                onClick={() => scrollToYear(year)}
                className={`relative rounded-full border-2 border-[#094d82] shadow-md cursor-pointer transition-all ${
                  isActive ? "bg-[#094d82] w-5 h-5 outline outline-2 outline-[#094d82] outline-offset-2" : "bg-white w-4 h-4"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

      {canScrollLeft && (
        <button
          className="absolute left-0 top-[60%] md:top-[55%] -translate-y-1/2 z-10 bg-white hover:bg-white/80 p-3 rounded-full shadow transition-opacity"
          onClick={() => scrollByDir("left")}
        >
          <FaChevronLeft className="text-[#094d82] size-7" />
        </button>
      )}

      {canScrollRight && (
        <button
          className="absolute right-0 top-[60%] md:top-[55%] -translate-y-1/2 z-10 bg-white hover:bg-white/80 p-3 rounded-full shadow transition-opacity"
          onClick={() => scrollByDir("right")}
        >
          <FaChevronRight className="text-[#094d82] size-7" />
        </button>
      )}

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto py-2 px-4 2xl:p-6 scroll-smooth hide-scrollbar">
        <AnimatePresence>
          {projects.map((project) => (
            <div
              key={project.id}
              data-year={project.__year != null ? String(project.__year) : ""}
              className="shrink-0 w-[50%] sm:w-[50%] md:w-[30%] lg:w-[20%] min-w-[50%] sm:min-w-[50%] md:min-w-[30%] lg:min-w-[20%]"
            >
              <Link
                href={{
                  pathname: `/projects/${project.id}`,
                  query: {
                    [HOME_RETURN_QUERY_KEY]: returnTo,
                  },
                }}
                onClick={handleProjectClick}
                className="w-full text-left"
                aria-label={`Open project details for ${project.name}`}
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden bg-sky-950/50 rounded-lg"
                  style={{ aspectRatio: "1 / 1.4" }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    loading="lazy"
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </motion.div>
                <p className="uppercase px-1 pt-2 text-sm">
                  <span className="font-bold text-[#094d82]">{project.name}:</span>{" "}
                  <span className="font-normal">{project.description}</span>
                </p>
              </Link>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
