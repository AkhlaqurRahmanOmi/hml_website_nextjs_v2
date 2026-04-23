"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FaDownload } from "react-icons/fa6";
import Image from "next/image";
import { FleetData } from "@/data/fleet";
import { motion, easeOut } from "framer-motion";
import { Footer } from "../Global/footer";
import MultipleSlideCarousel from "./MultipleSlideCarouselProps";

type FleetKey =
  | "megacaravan"
  | "megacaravan2"
  | "megatrust"
  | "megapassion"
  | "cydf"
  | "nb";

const slideFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: easeOut } },
};

export const FleetPage = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="px-4 md:px-[5%] 2xl:px-[10%] pt-32 lg:pt-40 pb-10 flex-grow">
        <Tabs defaultValue="megacaravan" className="w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-10 items-start mb-24 md:mb-10">
            {/* Tabs + GA Download */}
            <div className="col-span-1 lg:col-span-3">
              <h1 className="font-dmsans text-5xl md:text-6xl lg:text-7xl font-bold md:font-normal lg:font-bold text-[#094d82] mb-6">
                FLEET INFORMATION
              </h1>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 md:tracking-wide gap-2">
                <TabsTrigger
                  value="megacaravan"
                  className="flex flex-col items-center lg:text-md font-semibold"
                >
                  MEGA CARAVAN <span className="text-[12px]">16,200mt</span>
                </TabsTrigger>
                <TabsTrigger
                  value="megacaravan2"
                  className="flex flex-col items-center lg:text-md font-semibold"
                >
                  MEGA CARAVAN 2 <span className="text-[12px]">17,700mt</span>
                </TabsTrigger>
                {/*
                <TabsTrigger
                  value="megatrust"
                  className="flex flex-col items-center lg:text-md font-semibold"
                >
                  MEGA TRUST <span className="text-[12px]">19,200mt</span>
                </TabsTrigger>
                <TabsTrigger
                  value="megapassion"
                  className="flex flex-col items-center lg:text-md font-semibold"
                >
                  MEGA PASSION <span className="text-[12px]">52,300mt</span>
                </TabsTrigger>
                */}
                <TabsTrigger
                  value="cydf"
                  className="flex flex-col items-center lg:text-md font-semibold"
                >
                  CYDF <span className="text-[12px]">25,163mt</span>
                </TabsTrigger>
                <TabsTrigger
                  value="nb"
                  className="flex flex-col items-center lg:text-md font-semibold"
                >
                  NB <span className="text-[12px]">22,745mt</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Description */}
            <div className="col-span-1 md:grid-cols-1 lg:col-span-2 font-medium space-y-4 mt-[60%] lg:mt-[50%] xl:mt-[50%] 2xl:mt-[40%] 3xl:mt-[40%] text-justify">
              <p>
                At HML, we deliver flexible and cost-effective transport
                solutions by leveraging the expansive deck space of our vessels,
                maximizing cargo capacity in a single shipment. Designed with
                high deck load strength and an open-stern configuration, our
                vessels enable loading and discharging from both the stern and
                sides. A key advantage of the HML fleet is the shallow vessel
                draft, allowing access to ports with limited water
                depth—eliminating the need for spacer barges or additional
                floating equipment.
              </p>
              <p>
                All vessels operated by HML adhere to international ship and
                crew management standards, including ISM, OSAS, and CMID. They
                are asbestos-free and meet the highest quarantine and
                environmental regulations, ensuring safe, efficient, and
                sustainable operations.
              </p>
            </div>
          </div>

          {/* Tab Content */}
          {(
            [
              "megacaravan",
              "megacaravan2",
              // "megatrust",
              // "megapassion",
              "cydf",
              "nb",
            ] as FleetKey[]
          ).map((tab) => {
            const fleetData = FleetData.find((f) => f.id === tab);
            if (!fleetData) return null;

            return (
              <TabsContent
                value={tab}
                className="mt-6 2xl:mt-10 space-t-10"
                key={tab}
              >
                <motion.div
                  variants={slideFadeIn}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className="flex flex-col-reverse lg:flex-col justify-center gap-8 2xl:mt-6">
                    {/* Name + Download */}
                    <div className="flex flex-col items-start -mt-0 xl:-mt-[380px] 2xl:-mt-[350px]">
                      <h2 className="text-4xl lg:text-5xl text-nowrap font-bold text-[#094d82] uppercase mb-2 md:mb-6">
                        {fleetData.name}
                      </h2>
                      {fleetData.GA && (
                        <a
                          href={fleetData.GA}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#094d82] text-white p-2 md:px-4 md:py-2 uppercase text-xs md:text-sm font-medium rounded-md flex items-center gap-2 hover:bg-[#0a3f6d] transition"
                        >
                          <FaDownload className="w-3 h-4" />
                          Download GA
                        </a>
                      )}
                    </div>

                    {/* Specifications */}
                    <aside className="w-full lg:w-2/4 space-y-2">
                      {[
                        ["LOA", fleetData.loa],
                        ["Breadth", fleetData.breadth],
                        ["Free deck", fleetData.freedeck],
                        ["Depth", fleetData.depth],
                        ["Draft", fleetData.draft],
                        ["Deadweight", fleetData.deadweight],
                        ["Speed", fleetData.speed],
                        ["Propulsion", fleetData.propulsion],
                        ["Ballast capacity", fleetData.ballastcapacity],
                      ].map(([label, value], index) => (
                        <div key={label}>
                          <div className="flex justify-between">
                            <p className="w-2/3">{label}</p>
                            <span className="w-1/3">{value}</span>
                          </div>
                          {(index + 1) % 2 === 0 && (
                            <hr className="border-dashed my-1.5" />
                          )}
                        </div>
                      ))}
                    </aside>
                  </div>

                  {/* Vessel Image */}
                  {fleetData.image && (
                    <div className="relative">
                      <Image
                        src={fleetData.image}
                        alt={fleetData.name || "Fleet image"}
                        width={1800}
                        height={1000}
                        className="relative z-10 w-full h-auto object-cover 
                 [filter:drop-shadow(0_24px_36px_rgba(0,0,0,0.35))]"
                        loading="eager"
                      />
                    </div>
                  )}
                </motion.div>

                {/* 🔄 Carousel now changes with active tab */}
                <MultipleSlideCarousel
                  key={fleetData.id}
                  fleetData={fleetData}
                />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
};
