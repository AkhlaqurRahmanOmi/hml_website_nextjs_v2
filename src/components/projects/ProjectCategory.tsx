"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardHeader } from "@/components/ui/card";
import { CategoryBlock } from "@/types/projects";

export default function ProjectCategory({
  project,
  autoPlayDelay = 3750,
}: {
  project: CategoryBlock;
  autoPlayDelay?: number;
}) {
  const { category, categoryImage, projects } = project;
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api || !projects || projects.length <= 1) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (document.hidden) return;
      stop();
      const interval = Math.max(600, autoPlayDelay);
      timer = setInterval(() => api?.scrollNext(), interval);
    };
    const stop = () => {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    };

    const root = (() => {
      try {
        // Embla v7
        return api.rootNode?.();
      } catch {
        return null;
      }
    })();

    // root?.addEventListener("mouseenter", stop);
    // root?.addEventListener("mouseleave", start);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    const raf = requestAnimationFrame(start);

    return () => {
      stop();
      cancelAnimationFrame(raf);
      root?.removeEventListener("mouseenter", stop);
      root?.removeEventListener("mouseleave", start);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [api, autoPlayDelay, projects]);

  return (
    <div className="h-full w-full flex flex-col">
      {/* Top ~70% */}
      <section className="relative h-[65vh] lg:h-[70vh] w-full flex-none overflow-x-hidden">
        <div className="absolute inset-0">
          <Image
            src={categoryImage as string | StaticImageData}
            alt={`${category} hero background`}
            fill
            priority
            sizes="(min-width:1280px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>

        <div className="relative z-10 h-full w-full">
          <div className="flex h-full w-full items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full bg-[#094e8286] p-6 backdrop-blur-[2px]"
            >
              <h1 className="mb-0 font-dmsans leading-tight">
                <span className="block w-full text-center text-3xl font-bold uppercase text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)] md:text-5xl">
                  {category}
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom ~30% */}
      <section className="relative h-[30vh] lg:h-[25vh] w-full mt-3 lg:mt-2 xl:mt-3 mb-0 flex-none bg-white overflow-x-hidden">
        <div className="flex h-full w-full flex-col justify-center gap-1 px-0">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full relative isolate overflow-hidden"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2">
              {projects.map((item, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-full pl-2 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="group h-full overflow-hidden rounded-none border-0 -mt-2 sm:border sm:border-muted/60 sm:shadow-sm sm:transition-shadow sm:hover:shadow-md">
                    <CardHeader className="relative p-0">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={item.image as string | StaticImageData}
                          alt={`${category} project ${idx + 1}`}
                          fill
                          sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                          className="object-cover"
                          priority={idx === 0}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>

                      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-1/2">
                        <div className="h-full bg-[#094e8286] backdrop-blur-[2px] p-4 flex flex-col justify-center">
                          <p className="line-clamp-3 text-white/95 text-sm w-[60%] text-center mx-auto">
                            {item.info}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              aria-label="Previous projects"
              className="left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/95 border border-black/10 shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <CarouselNext
              aria-label="Next projects"
              className="right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/95 border border-black/10 shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
