"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeProject } from "@/data/project";
import { Footer } from "../Global/footer";
import HeroVideoWithFallback from "@/utils/HeroVideoWithFallback";
import { useMemo, useState } from "react";

const projects = HomeProject.slice(0, 8).map((project) => {
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
      <section className="relative h-[260px] sm:h-[320px] lg:h-[420px] w-full overflow-hidden">
        <HeroVideoWithFallback
          mp4Url="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768200888/Final_final_final_fw7rve.mp4"
          webmUrl="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768200888/Final_final_final_fw7rve.mp4"
          posterImage="https://res.cloudinary.com/dl28pqkb2/image/upload/v1768202874/project_background_gzenbk.jpg"
          className=""
          overlayClassName="bg-[#0b2f4a]/35"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-between mt-24 xl:mt-32">
          <div className="w-full bg-[#094e8286] p-6 xl:mt-[2%]">
            <div className="max-w-[100rem] px-0 md:px-[5%] text-center">
              <h1 className="mb-4 font-dmsans">
                <span className="block text-start text-2xl font-bold uppercase text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)] lg:text-3xl">
                  OUR
                </span>
                <span className="block text-start text-3xl font-bold text-transparent text-white md:text-4xl lg:text-5xl md:font-normal lg:font-bold">
                  PROJECTS
                </span>
              </h1>

              <div className="space-y-6 text-[#094d82]">
                <p className="w-full text-justify text-sm text-white">
                  HML specializes in transporting large-scale, heavy, and
                  high-value cargo for one of the world’s most demanding
                  industries. Our vessels are specially designed to serve
                  projects in industries like shipbuilding, renewable energy,
                  oil and gas, port equipment, heavy machinery, and civil
                  construction. With accuracy, dependability and worldwide
                  reach, we provide customized transportation solutions for
                  everything from offshore structures and industrial modules to
                  large components and infrastructure equipment.
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>

      <section className="bg-[#f4f6f9]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full sm:w-1/2">
              <label className="block text-xs font-semibold text-[#52677a] mb-2">
                Search
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects"
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-[#2b3f52] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#094d82]/20"
              />
            </div>

            <div className="flex w-full sm:w-auto gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#52677a] mb-2">
                  Year
                </label>
                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="min-w-[140px] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-[#2b3f52] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#094d82]/20"
                >
                  {availableYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#52677a] mb-2">
                  Cargo
                </label>
                <select
                  value={cargoFilter}
                  onChange={(e) => setCargoFilter(e.target.value)}
                  className="min-w-[180px] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-[#2b3f52] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#094d82]/20"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white border border-slate-200 shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-base font-bold text-[#094d82]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#52677a]">
                    {project.summary}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white bg-[#094d82] hover:bg-[#0e3d61] transition-colors"
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
