"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface EngineeringCardProps {
    title: string;
    image: any;
    items: string[];
    showDetails: boolean;
}

export const EngineeringCard = ({
    title,
    image,
    items,
    showDetails,
}: EngineeringCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        const element = ref.current;
        if (!element) return;

        observer.observe(element);
        return () => {
            observer.unobserve(element);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`relative w-full h-full transform transition duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="relative w-full h-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover brightness-75"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-600/30 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center z-20 px-4 sm:px-6 md:px-[5%]">
                <div className="w-full text-white text-left space-y-2 mt-4 2xl:mt-0">
                    <h1 className="text-xl md:text-2xl xl:text-4xl font-bold uppercase ">
                        {title}
                    </h1>

                    {showDetails && (
                        <div className="">
                            {/* <div className="text-white/90 flex flex-col justify-start items-start space-y-2 transition-all duration-500 ease-in-out"> */}
                            <p className="text-xs md:text-base -mt-2">
                                Provided our clients with the suitable vessel
                            </p>
                            <p className="text-xs md:text-base">To meet clients demand</p>
                            <ul className="flex flex-col text-start space-y-0">
                                {items.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="w-[10px] h-[9px] bg-white" />
                                        <span className="text-xs md:text-sm font-roboto max-w-3xl">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-start max-w-4xl text-xs 2xl:text-base uppercase mt-1 ">
                                Cargo specification influences vessel selection, engineers carry
                                out feasibility study such as stowage, voyage stability and
                                motion analysis to demonstrate whether the cargo can be safely
                                stowed on proposed vessel.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
