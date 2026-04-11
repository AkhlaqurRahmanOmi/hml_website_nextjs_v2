"use client";

import { useState } from "react";
import { EngineeringCapabilityData } from "@/data/engineering";
import { EngineeringCard } from "./EngineeringCard";

export const EngineeringWorkGallary = () => {
    const [hoveredTop, setHoveredTop] = useState<number | null>(null);
    const [hoveredBottom, setHoveredBottom] = useState<number | null>(null);

    return (
        <section className="w-full h-screen overflow-hidden flex flex-col">
            <div className="h-[60px] md:h-0" /> {/* spacer equal to navbar height */}

            {/* Top Row (2 cards) - takes 50% height */}
            <div className="flex flex-1 transition-all duration-500 overflow-hidden mt-20">
                {EngineeringCapabilityData.slice(0, 2).map((item, index) => {
                    const isHovered = hoveredTop === index;
                    const showDetails =
                        hoveredTop === null ? index === 0 : hoveredTop === index;

                    return (
                        <div
                            key={index}
                            className={`transition-all duration-500 ease-in-out ${hoveredTop === null
                                    ? index === 0
                                        ? "flex-[2]"
                                        : "flex-1"
                                    : isHovered
                                        ? "flex-[2]"
                                        : "flex-1"
                                }`}
                            onMouseEnter={() => setHoveredTop(index)}
                            onMouseLeave={() => setHoveredTop(null)}
                        >
                            <EngineeringCard {...item} showDetails={showDetails} />
                        </div>
                    );
                })}
            </div>

            {/* Bottom Row (3 cards) - takes 50% height */}
            <div className="flex flex-1 transition-all duration-500 overflow-hidden">
                {EngineeringCapabilityData.slice(2, 5).map((item, index) => {
                    const isHovered = hoveredBottom === index;
                    const showDetails =
                        hoveredBottom === null ? false : hoveredBottom === index;

                    return (
                        <div
                            key={index}
                            className={`transition-all duration-500 ease-in-out ${hoveredBottom === null
                                    ? "flex-1"
                                    : isHovered
                                        ? "flex-[2]"
                                        : "flex-[0.5]"
                                }`}
                            onMouseEnter={() => setHoveredBottom(index)}
                            onMouseLeave={() => setHoveredBottom(null)}
                        >
                            <EngineeringCard {...item} showDetails={showDetails} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
