'use client';

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MegaCaravan from "@/assets/FLEET/VESSELS-01.png";
import MegaCaravan2 from "@/assets/FLEET/VESSELS-02.png";
import MegaTrust from "@/assets/FLEET/VESSELS-04.png";
import MegaPassion from "@/assets/FLEET/VESSELS-03.png";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { FleetData } from "@/data/fleet";

type FleetKey = "megacaravan" | "megacaravan2" | "megatrust" | "megapassion";

export const FleetPage = () => {
    const [activeTab, setActiveTab] = useState<FleetKey>("megacaravan");

    const imageMap: Record<FleetKey, any> = {
        megacaravan: MegaCaravan,
        megacaravan2: MegaCaravan2,
        megatrust: MegaTrust,
        megapassion: MegaPassion,
    };
    const imageAltMap: Record<FleetKey, string> = {
        megacaravan: "Mega Caravan",
        megacaravan2: "Mega Caravan 2",
        megatrust: "Mega Trust",
        megapassion: "Mega Passion",
    };

    const pdfMap: Record<FleetKey, string> = {
        megacaravan: "/MC_GA.pdf",
        megacaravan2: "/MC2_GA.pdf",
        megatrust: "/MT_GA.pdf",
        megapassion: "/MEPA_GA.pdf",
    };
    const fleetData = FleetData.find((fleet) => fleet.id === activeTab);

    return (
        <Tabs
            value={activeTab}
            onValueChange={(val) => setActiveTab(val as FleetKey)}
            className="w-full"
        >
            <section className="min-h-screen flex items-center px-4 md:px-[10%]">
                <div>
                    <div className="grid grid-cols-5 gap-10">
                        <div className="col-span-5 lg:col-span-2 text-[#094d82]">
                            <p className="text-justify">
                                At HML, we deliver flexible and cost-effective transport solutions by leveraging the expansive deck space of our vessels, maximizing cargo capacity in a single shipment. Designed with high deck load strength and an open-stern configuration, our vessels enable efficient loading and discharging from both the stern and sides. A KEY advantage of the HML fleet is the shallow vessel draft, allowing access to ports with limited water depth — eliminating the need for spacer barges or additional floating equipment.
                            </p>
                            <p className="text-justify">
                                All vessels operated by HML adhere to international ship and crew management standards, including ISM, OSAS, and CMID. They are asbestos-free and meet the highest quarantine and environmental regulations, ensuring safe, efficient, and sustainable operations.
                            </p>
                        </div>

                        <div className="col-span-5 lg:col-span-3">
                            <h1 className="text-4xl lg:text-6xl mb-6 font-bold text-[#094d82]">FLEET INFORMATION</h1>
                            <TabsList className="justify-between tracking-wide">
                                <TabsTrigger value="megacaravan" className="flex flex-col items-end text-lg">
                                    MEGA CARAVAN
                                    <span className="text-[10px] -mt-3">16,200mt</span>
                                </TabsTrigger>
                                <TabsTrigger value="megacaravan2" className="flex flex-col items-end text-lg">
                                    MEGA CARAVAN 2
                                    <span className="text-[10px] -mt-3">17,700mt</span>
                                </TabsTrigger>
                                <TabsTrigger value="megatrust" className="flex flex-col items-end text-lg">
                                    MEGA TRUST
                                    <span className="text-[10px] -mt-3">17,700mt</span>
                                </TabsTrigger>
                                <TabsTrigger value="megapassion" className="flex flex-col items-end text-lg">
                                    MEGA PASSION
                                    <span className="text-[10px] -mt-3">17,700mt</span>
                                </TabsTrigger>
                            </TabsList>
                            <div className="mx-auto items-center justify-start flex mt-6">
                                <a
                                    download
                                    className="bg-[#094d82]  text-white px-4 py-2 uppercase text-sm font-medium flex items-center"
                                    href={pdfMap[activeTab]}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FaDownload className="w-3 h-4 mr-1" />
                                    Download GA
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-8 px-10 md:px-[10%] mt-[5%]">
                        <aside className="w-3/5">
                            <div className="flex justify-between"><p className="w-2/3">LOA</p><span className="w-1/3">{fleetData?.loa}</span></div>
                            <div className="flex justify-between"><p className="w-2/3">Breadth</p><span className="w-1/3">{fleetData?.breadth}</span></div>

                            <hr className="border-dashed my-1.5" />

                            <div className="flex justify-between"><p className="w-2/3">Free deck</p><span className="w-1/3">{fleetData?.freedeck}</span></div>
                            <div className="flex justify-between"><p className="w-2/3">Depth</p><span className="w-1/3">{fleetData?.depth}</span></div>

                            <hr className="border-dashed my-1.5" />

                            <div className="flex justify-between"><p className="w-2/3">Draft</p><span className="w-1/3">{fleetData?.draft}</span></div>
                            <div className="flex justify-between"><p className="w-2/3">Deadweight</p><span className="w-1/3">{fleetData?.deadweight}</span></div>

                            <hr className="border-dashed my-1.5" />

                            <div className="flex justify-between"><p className="w-2/3">Speed</p><span className="w-1/3">{fleetData?.speed}</span></div>
                            <div className="flex justify-between"><p className="w-2/3">Propulsion</p><span className="w-1/3">{fleetData?.propulsion}</span></div>

                            <hr className="border-dashed my-1.5" />

                            <div className="flex justify-between"><p className="w-2/3">Ballast capacity</p><span className="w-1/3">{fleetData?.ballastcapacity}</span></div>
                        </aside>
                        <div className="flex flex-col">
                            <h1 className="text-4xl text-start text-nowrap lg:text-6xl font-bold text-[#094d82] w-2/5 uppercase">{fleetData?.name}</h1>
                            <div className="flex justify-end mt-6">
                                <button className="bg-[#0b4c84] text-white font-medium shadow-[0_8px_16px_-8px_rgba(0,0,0,0.6)] hover:bg-[#0a3f6d] transition">
                                    <a
                                        download
                                        className="bg-[#094d82]  text-white px-4 py-2 uppercase text-sm font-medium flex rounded-md items-center"
                                        href={fleetData?.GA}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Download GA
                                    </a>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="relative">
                        <Link
                            href={`/fleet/${activeTab}`}
                            className="flex justify-start mt-10 items-center gap-3 cursor-pointer relative z-10"
                        >
                            <MdArrowRightAlt className="bg-white border border-[#094d82] text-[#094d82] rounded-full size-6" />
                            View Details
                        </Link>
                        <Link href={`/fleet/${activeTab}`}>
                            <div className="relative min-h-[400px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute top-0 left-0 w-full"
                                    >
                                        <Image
                                            alt={imageAltMap[activeTab]}
                                            src={imageMap[activeTab]}
                                            width={1500}
                                            height={800}
                                            className="w-full h-auto"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </Link>
                        
                    </div>

                </div>
            </section>
        </Tabs>
    );
};
