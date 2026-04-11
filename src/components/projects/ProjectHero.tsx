// components/home/ProjectHeroSection.tsx
"use client";

import { AnimatePresence } from "framer-motion";
import HeroVideoWithFallback from "../../utils/HeroVideoWithFallback";
// import Image from "next/image";
import { HeroProjectsStats } from "@/data/project";

const toAnchor = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const ProjectHeroSection = () => {
  const handleStatClick = (label: string) => {
    const anchor = toAnchor(label);
    const api = typeof window !== "undefined" ? (window as any).fullpage_api : null;

    if (api?.moveTo) {
      api.moveTo(anchor);
      return;
    }

    const target = document.querySelector(`[data-anchor="${anchor}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen">
      <div className="relative h-full w-full overflow-hidden">
        {/* Full-bleed background video */}
        <AnimatePresence>
          <HeroVideoWithFallback
            mp4Url="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768200888/Final_final_final_fw7rve.mp4"
            webmUrl="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768200888/Final_final_final_fw7rve.mp4"
            posterImage="https://res.cloudinary.com/dl28pqkb2/image/upload/v1768202874/project_background_gzenbk.jpg"
            className="-z-10"
            overlayClassName=""
          />
        </AnimatePresence>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-between mt-24 xl:mt-32">
          <div className="w-full bg-[#094e8286] p-6 xl:mt-[10%]">
            <div className="max-w-[100rem] px-0 md:px-[5%] text-center">
              <h1 className="mb-4 font-dmsans">
                <span className="block text-start text-3xl font-bold uppercase text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)] lg:text-5xl">
                  OUR
                </span>
                <span className="block text-start text-5xl font-bold text-transparent text-white md:text-6xl lg:text-7xl md:font-normal lg:font-bold">
                  PROJECTS
                </span>
              </h1>

              <div className="space-y-6 text-[#094d82]">
                <p className="w-full text-justify text-base text-white">
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

          <div className="px-3 md:px-[5%] mt-10 xl:mt-[5%] flex flex-col gap-3 lg:flex-row items-center justify-center lg:justify-between w-full self-center lg:self-auto">
            {
              HeroProjectsStats.map((stat, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleStatClick(stat.label)}
                  className={[
                    "flex items-center justify-center text-center p-6 w-72 mx-auto lg:mx-0",
                    "rounded-t-xl",
                    "bg-[#094e82]/70",
                    "supports-[backdrop-filter]:bg-[#094e82]/70",
                    "border-0 cursor-pointer",
                  ].join(" ")}
                >
                  <span className="text-white font-opensans font-semibold text-wrap text-center">{stat.label}</span>
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};
