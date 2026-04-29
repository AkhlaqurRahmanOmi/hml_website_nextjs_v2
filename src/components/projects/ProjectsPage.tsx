"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeProject } from "@/data/project";
import { Footer } from "../Global/footer";
import HeroVideoWithFallback from "@/utils/HeroVideoWithFallback";
import { useMemo, useState } from "react";

const projects = HomeProject.map((project) => {
  const base =
    project.description?.trim() ||
    project.projectDetails?.split("\n")[0]?.trim() ||
    "";
  const summary = base.length > 130 ? `${base.slice(0, 130).trim()}...` : base;
  const yearMatch =
    project.duration?.match(/\b(19\d{2}|20\d{2})\b/) ||
    project.description?.match(/\b(19\d{2}|20\d{2})\b/) ||
    project.name?.match(/\b(19\d{2}|20\d{2})\b/);
  const year = yearMatch ? yearMatch[1] : "";
  return { ...project, summary, year };
});

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("All");
  const [cargoFilter, setCargoFilter] = useState("All");

  const availableYears = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.year) set.add(p.year);
    });
    return ["All", ...Array.from(set).sort((a, b) => Number(b) - Number(a))];
  }, []);

  const availableCargo = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.cargo) set.add(p.cargo);
    });
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !q ||
        p.name?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.client?.toLowerCase().includes(q) ||
        p.cargo?.toLowerCase().includes(q) ||
        p.projectDetails?.toLowerCase().includes(q);
      const matchesYear = yearFilter === "All" || p.year === yearFilter;
      const matchesCargo = cargoFilter === "All" || p.cargo === cargoFilter;
      return matchesQuery && matchesYear && matchesCargo;
    });
  }, [query, yearFilter, cargoFilter]);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[54.6875vh] sm:h-[50vh] lg:h-[52.5vh] w-full overflow-hidden">
        <HeroVideoWithFallback
          mp4Url="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768200888/Final_final_final_fw7rve.mp4"
          webmUrl="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768200888/Final_final_final_fw7rve.mp4"
          posterImage="https://res.cloudinary.com/dl28pqkb2/image/upload/v1768202874/project_background_gzenbk.jpg"
          className=""
          overlayClassName="bg-[#0b2f4a]/35"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-start justify-center pt-[5rem] md:mt-[6rem] md:justify-between md:pt-0 xl:mt-[8rem]">
          <div className="flex h-1/2 w-full items-center bg-[#094e8286] p-[1rem] md:p-[1.5rem] xl:mt-[2%]">
            <div className="mx-auto w-[90%] max-w-[100rem] text-center">
              <h1 className="mb-[0.5rem] font-dmsans md:mb-[1rem]">
                <span className="block text-start text-[1.25rem] font-bold uppercase text-white drop-shadow-[0_0.0625rem_0.0625rem_rgba(255,255,255,0.15)] md:text-[1.5rem] lg:text-[1.875rem]">
                  OUR
                </span>
                <span className="block text-start text-[1.5rem] font-bold text-white md:text-[2.25rem] md:font-normal lg:text-[3rem] lg:font-bold">
                  PROJECTS
                </span>
              </h1>

              <div className="space-y-[1.5rem] text-[#094d82]">
                <p className="w-full text-justify text-[0.75rem] leading-[1.625] text-white md:text-[0.875rem]">
                  HML specializes in transporting large-scale, heavy, and
                  high-value cargo for one of the world’s most demanding
                  industries. Our vessels are specially designed to serve
                  projects in industries like shipbuilding, renewable energy,
                  oil and gas, port equipment, heavy machinery, and civil
                  construction. With accuracy, dependability and worldwide
                  reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f9]">
        <div className="mx-auto w-full max-w-[72rem] px-[1rem] py-[2.5rem] sm:px-[1.5rem] lg:px-[2rem] lg:py-[3.5rem]">
          <div className="mb-[1.5rem] flex flex-col gap-[1rem] sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full sm:w-[50%]">
              <label className="mb-[0.5rem] block text-[0.75rem] font-semibold text-[#52677a]">
                Search
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects"
                className="w-full rounded-[0.375rem] border-[0.0625rem] border-slate-200 bg-white px-[1rem] py-[0.5rem] text-[0.875rem] text-[#2b3f52] shadow-[0_0.0625rem_0.125rem_0_rgb(0_0_0_/_0.05)] focus:outline-none focus:ring-[0.125rem] focus:ring-[#094d82]/20"
              />
            </div>

            <div className="flex w-full gap-[1rem] sm:w-auto">
              <div>
                <label className="mb-[0.5rem] block text-[0.75rem] font-semibold text-[#52677a]">
                  Year
                </label>
                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="min-w-[8.75rem] rounded-[0.375rem] border-[0.0625rem] border-slate-200 bg-white px-[0.75rem] py-[0.5rem] text-[0.875rem] text-[#2b3f52] shadow-[0_0.0625rem_0.125rem_0_rgb(0_0_0_/_0.05)] focus:outline-none focus:ring-[0.125rem] focus:ring-[#094d82]/20"
                >
                  {availableYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-[0.5rem] block text-[0.75rem] font-semibold text-[#52677a]">
                  Cargo
                </label>
                <select
                  value={cargoFilter}
                  onChange={(e) => setCargoFilter(e.target.value)}
                  className="min-w-[11.25rem] rounded-[0.375rem] border-[0.0625rem] border-slate-200 bg-white px-[0.75rem] py-[0.5rem] text-[0.875rem] text-[#2b3f52] shadow-[0_0.0625rem_0.125rem_0_rgb(0_0_0_/_0.05)] focus:outline-none focus:ring-[0.125rem] focus:ring-[#094d82]/20"
                >
                  {availableCargo.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[2rem]">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="border-[0.0625rem] border-slate-200 bg-white shadow-[0_0.0625rem_0.125rem_0_rgb(0_0_0_/_0.05)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 64rem) 33vw, (min-width: 40rem) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-[1.25rem] text-center">
                  <h3 className="text-[1rem] font-bold text-[#094d82]">
                    {project.name}
                  </h3>
                  <p className="mt-[0.5rem] text-[0.875rem] text-[#52677a]">
                    {project.summary}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="mt-[1rem] inline-flex items-center bg-[#094d82] px-[1rem] py-[0.5rem] text-[0.75rem] font-semibold uppercase tracking-[0.025em] text-white transition-colors hover:bg-[#0e3d61]"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
