"use client";

import { CategoryBlock } from "@/types/projects";
import { Footer } from "../Global/footer";
import ProjectCategory from "./ProjectCategory";

const toAnchor = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const Projects = ({ ProjectData }: { ProjectData: CategoryBlock[] }) => {
  return (
    <>
      {ProjectData?.map((project) => (
        <div className="section" data-anchor={toAnchor(project.category)} key={project.id}>
          <ProjectCategory project={project} />
        </div>
      ))}

      {/* Footer as auto-height section */}
      <div className="section fp-auto-height" data-anchor="footer">
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};
