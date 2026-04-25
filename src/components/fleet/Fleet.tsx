"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FleetData } from "@/data/fleet";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
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

const visibleFleetTabs = [
  { value: "megacaravan", label: "MEGA CARAVAN", weight: "16,200mt" },
  { value: "megacaravan2", label: "MEGA CARAVAN 2", weight: "17,700mt" },
  { value: "cydf", label: "CYDF", weight: "25,163mt" },
  { value: "nb", label: "NB", weight: "22,745mt" },
] satisfies Array<{ value: FleetKey; label: string; weight: string }>;

const FleetDescription = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <p>
      At HML, we deliver flexible and cost-effective transport solutions by
      leveraging the expansive deck space of our vessels, maximizing cargo
      capacity in a single shipment. Designed with high deck load strength and
      an open-stern configuration, our vessels enable loading and discharging
      from both the stern and sides. A key advantage of the HML fleet is the
      shallow vessel draft, allowing access to ports with limited water depth,
      eliminating the need for spacer barges or additional floating equipment.
    </p>
    <p>
      All vessels operated by HML adhere to international ship and crew
      management standards, including ISM, OSAS, and CMID. They are
      asbestos-free and meet the highest quarantine and environmental
      regulations, ensuring safe, efficient, and sustainable operations.
    </p>
  </div>
);

export const FleetPage = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-grow px-4 pt-32 pb-10 md:px-[5%] lg:pt-40 2xl:px-[10%]">
        <Tabs defaultValue="megacaravan" className="w-full">
          <div className="mb-6 md:mb-4">
            <div className="w-full lg:w-1/2 2xl:w-full 2xl:max-w-[56rem]">
              <h1 className="mb-6 font-dmsans text-5xl font-bold text-[#094d82] md:text-6xl md:font-normal lg:text-7xl lg:font-bold">
                FLEET INFORMATION
              </h1>
              <TabsList className="grid grid-cols-2 gap-2 pb-2 md:grid-cols-4 md:tracking-wide md:pb-3">
                {visibleFleetTabs.map((fleet) => (
                  <TabsTrigger
                    key={fleet.value}
                    value={fleet.value}
                    className="flex flex-col items-center text-nowrap text-center font-semibold leading-tight whitespace-normal lg:text-md"
                  >
                    {fleet.label}
                    <span className="text-[12px]">{fleet.weight}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <FleetDescription className="mt-6 space-y-4 text-justify font-medium lg:hidden" />
          </div>

          {visibleFleetTabs.map(({ value: tab }) => {
            const fleetData = FleetData.find((fleet) => fleet.id === tab);
            if (!fleetData) return null;

            const specifications = [
              ["LOA", fleetData.loa],
              ["Breadth", fleetData.breadth],
              ["Free deck", fleetData.freedeck],
              ["Depth", fleetData.depth],
              ["Draft", fleetData.draft],
              ["Deadweight", fleetData.deadweight],
              ["Speed", fleetData.speed],
              ["Propulsion", fleetData.propulsion],
              ["Ballast capacity", fleetData.ballastcapacity],
            ] as const;

            return (
              <TabsContent value={tab} className="mt-0 2xl:mt-2" key={tab}>
                <motion.div
                  variants={slideFadeIn}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-3 xl:gap-y-2">
                    <div className="col-span-1 flex flex-col gap-5 md:gap-6 lg:col-span-3 lg:gap-3 xl:gap-2">
                      <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between lg:flex-col lg:items-start lg:justify-start">
                        <h2 className="max-w-full text-[clamp(2rem,6vw,3rem)] font-bold uppercase leading-none tracking-tight text-[#094d82] whitespace-normal lg:whitespace-nowrap">
                          {fleetData.name}
                        </h2>
                        {fleetData.GA && (
                          <a
                            href={fleetData.GA}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-md bg-[#094d82] p-2 text-xs font-medium uppercase text-white transition hover:bg-[#0a3f6d] md:px-4 md:py-2 md:text-sm"
                          >
                            <FaDownload className="h-4 w-3" />
                            Download GA
                          </a>
                        )}
                      </div>

                      <aside className="w-full space-y-2 lg:w-[78%] xl:w-2/3">
                        {specifications.map(([label, value], index) => (
                          <div key={label}>
                            <div className="flex justify-between gap-6">
                              <p className="w-2/3">{label}</p>
                              <span className="w-1/3">{value}</span>
                            </div>
                            {(index + 1) % 2 === 0 && (
                              <hr className="my-1.5 border-dashed" />
                            )}
                          </div>
                        ))}
                      </aside>
                    </div>

                    <FleetDescription className="hidden space-y-4 text-justify font-medium lg:col-span-2 lg:block lg:self-start lg:pt-1" />
                  </div>

                  {fleetData.image && (
                    <div className="relative">
                      <Image
                        src={fleetData.image}
                        alt={fleetData.name || "Fleet image"}
                        width={1800}
                        height={1000}
                        className="relative z-10 h-auto w-full object-cover [filter:drop-shadow(0_24px_36px_rgba(0,0,0,0.35))]"
                        loading="eager"
                      />
                    </div>
                  )}
                </motion.div>

                <MultipleSlideCarousel key={fleetData.id} fleetData={fleetData} />
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
