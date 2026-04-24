'use client';

import Image from "next/image";
import { useState } from "react";
import { ButtonOutline } from "../UIComponents/Button/ButtonOutlined";
import { items } from "@/data/crossMarketResearch";


export const HomeCrossMarketReachSection = () => {
    const [hoverIndex, setHoverIndex] = useState<number>(0);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="flex w-full min-h-screen">
            {/* Vertical Title */}
            <div className="flex items-center justify-center w-[80px] bg-[#094d82] pt-[10vh]">
                <div className=" font-roboto text-4xl font-normal text-white transform -rotate-90 whitespace-nowrap uppercase tracking-wider" style={{
                    textShadow:
                        "2px 0px 0px rgba(0, 0, 0, 1), 0px 1px 4px rgba(0, 0, 0, 0.85)",
                }}>
                    Our Cargo Expertise
                </div>
            </div>

            {/* Expandable Sections */}
            <div className="flex-1 flex overflow-hidden">
                {items.map((item, index) => {
                    const isHovered = hoverIndex === index;
                    const isExpanded = expandedIndex === index;

                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(0)}
                            className={`relative h-full transition-all duration-1000 ease-in-out cursor-pointer group border-r-2 border-slate-500 ${isHovered ? "flex-[12]" : "flex-[1px]"}`}
                            style={{ boxShadow: "5px 0 15px -5px rgba(0, 0, 0, 0.5)" }}
                        >
                            {/* Background Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                loading="lazy"
                                className={`object-cover transition-all duration-500 z-10 brightness-75`}
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-center bg-black/20" >
                                <h2
                                    className={`font-roboto text-2xl lg:text-5xl font-bold text-white block text-start uppercase mb-2 2xl:mb-6 px-6 md:h-16 ${isHovered ? "" : "whitespace-nowrap"}`}
                                    style={{
                                        textShadow:
                                            "2px 2px 2px rgba(0, 0, 0, 1), 4px 4px 8px rgba(0, 0, 0, 0.85)",
                                        position: isHovered ? "static" : "absolute",
                                        left: isHovered ? "auto" : "50%",
                                        top: isHovered ? "auto" : "50%",
                                        transform: isHovered
                                            ? "none"
                                            : "translate(-50%, -50%) rotate(-90deg)",
                                        transformOrigin: "center",
                                    }}
                                >
                                    {item.title}
                                </h2>

                                {/* {isHovered && ( */}
                                <div
                                    className={`transition-opacity duration-500 ease-in-out bg-[#094e8286] w-full p-6 ${isHovered
                                        ? "opacity-100 pointer-events-auto translate-y-0"
                                        : "opacity-0 pointer-events-none -translate-y-2"
                                        }`}
                                >
                                    <p className="font-light text-sm md:text-lg text-justify text-white md:max-h-[300px] max-w-7xl " style={{
                                        textShadow:
                                            "2px 0px 0px rgba(0, 0, 0, 1), 0px 1px 4px rgba(0, 0, 0, 0.85)",
                                    }}>
                                        {isExpanded ? item.viewMore : item.subtitle}
                                    </p>
                                    <div className="mt-4">

                                        <ButtonOutline
                                            level={isExpanded ? "Show Less" : "Discover More"}
                                            onClick={() => toggleExpand(index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
