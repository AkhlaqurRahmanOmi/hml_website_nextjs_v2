"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { Card, CardHeader } from "../ui/card";
import Image, { StaticImageData } from "next/image";
import { HomeProject } from "@/data/project";
import ProjectDetailModal from "../projects/ProjectDetailModal";
import {
  type ProjectDetailData,
} from "../projects/ProjectDetailView";

interface FleetProjectsInterface {
  projectName: string;
  image: string | StaticImageData;
  projectId?: string;
}

interface FleetDataInterface {
  id: string;
  name: string;
  weight: string;
  image: string;
  loa: string;
  breadth: string;
  freedeck: string;
  depth: string;
  draft: string;
  deadweight: string;
  speed: string;
  propulsion: string;
  ballastcapacity: string;
  GA: string;
  description: string;
  fleetProjects: FleetProjectsInterface[];
}

type Props = {
  fleetData: FleetDataInterface;
  autoPlayDelay?: number;
};

export default function MultipleSlideCarousel({
  fleetData,
  autoPlayDelay = 3750,
}: Props) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectDetailData | null>(null);

  const projectsById = React.useMemo(
    () =>
      new Map<string, ProjectDetailData>(
        HomeProject.map((project) => [project.id.toString(), project])
      ),
    []
  );

  const getProjectDetails = React.useCallback(
    (item: FleetProjectsInterface): ProjectDetailData => {
      if (item.projectId) {
        const matchedProject = projectsById.get(item.projectId);
        if (matchedProject) return matchedProject;
      }

      return {
        id: `${fleetData.id}-${item.projectName}`,
        name: item.projectName,
        image: item.image,
        description: `${fleetData.name} featured project`,
        vessel: fleetData.name,
        projectDetails: `This featured project belongs to the ${fleetData.name} fleet portfolio. Detailed project-specific metadata for this fleet item has not been added to the shared projects dataset yet.`,
      };
    },
    [fleetData.id, fleetData.name, projectsById]
  );

  React.useEffect(() => {
    if (!api) return;
    if (fleetData.fleetProjects.length <= 1) return;

    let timer: ReturnType<typeof setInterval> | null = null;

    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const start = () => {
      stop();
      if (typeof document !== "undefined" && document.hidden) return;
      const interval = Math.max(600, autoPlayDelay);
      timer = setInterval(() => {
        api?.scrollNext();
      }, interval);
    };

    const root = api.rootNode();
    // root.addEventListener("mouseenter", stop);
    // root.addEventListener("mouseleave", start);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // ensure Embla finished layout before starting
    const raf = requestAnimationFrame(start);

    return () => {
      stop();
      cancelAnimationFrame(raf);
      root.removeEventListener("mouseenter", stop);
      root.removeEventListener("mouseleave", start);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [api, autoPlayDelay, fleetData.fleetProjects.length]);

  return (
    <section className="relative h-[36vh] w-full -mt-6 mb-10 flex-none overflow-hidden bg-white">
      <div className="flex h-full w-full flex-col justify-center gap-4 px-0">
        <Carousel
          key={fleetData.id}
          opts={{
            align: "start",
            loop: true, // 🔁 always loop infinitely
          }}
          className="w-full embla"
          setApi={setApi}
        >
          <CarouselContent className="-ml-3 md:-ml-6 ">
            {fleetData.fleetProjects.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="mx-auto basis-full pl-3 sm:basis-1/2 md:pl-6 lg:basis-1/3"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(getProjectDetails(item))}
                  className="block h-full w-full text-left"
                  aria-label={`Open project details for ${item.projectName}`}
                >
                  <Card className="group h-full overflow-hidden rounded-none border border-[#094e8286] sm:shadow-sm sm:transition-shadow sm:hover:shadow-md">
                    <CardHeader className="relative p-0">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={item.image as string | StaticImageData}
                          alt={`${fleetData.name} project ${idx + 1}`}
                          fill
                          sizes="100vw"
                          className="object-cover"
                          priority={idx === 0}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>

                      <div className="pointer-events-none absolute left-0 right-0 -top-2 z-10 h-1.5/4">
                        <div className="pointer-events-auto flex h-full flex-col justify-center bg-[#094e8286] p-4 backdrop-blur-[2px]">
                          <p className="mx-auto w-[90%] line-clamp-3 text-center text-2xl font-bold text-white/95">
                            {item.projectName}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls overlay */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
            <div className="pointer-events-auto">
              <CarouselPrevious className="h-9 w-9 rounded-full bg-white/90 shadow" />
            </div>
            <div className="pointer-events-auto">
              <CarouselNext className="h-9 w-9 rounded-full bg-white/90 shadow" />
            </div>
          </div>
        </Carousel>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
