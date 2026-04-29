"use client";

import { Footer } from "../Global/footer";
import { data } from ".";
import { MdAnchor } from "react-icons/md";

export const CompnayHistory = () => {

    const historyItems = Object.values(data).flat();


    return (
        <section className="relative flex min-h-screen flex-col bg-gradient-to-b from-white via-[#85bef3] to-[#4e697e]">
            <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 pb-10 pt-24 sm:px-6 md:pt-28 lg:px-10 lg:pt-32">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10" data-aos="fade-down" data-aos-delay="200">
                    <div className="text-black/70 lg:sticky lg:top-28 lg:self-start lg:max-w-xl">
                        <h2 className="text-xl md:text-4xl font-medium uppercase">
                            COMPANY
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-semibold uppercase ">
                            HISTORY
                        </h1>
                        <p className="mt-4 font-medium text-black/85">
                            HML remains committed to pursuing new challenges in its journey to become a global leader in logistics
                        </p>
                    </div>
                    <div className="w-full lg:w-3/5 pl-5 pt-2">

                        <ol className="relative pb-10">
                            <span className="pointer-events-none absolute left-0 top-0 bottom-[14px] w-px bg-[#094d82]" />
                            {historyItems.map((item) => (
                                <li key={item.year} className="mb-6 ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 
                                    ring-white dark:bg-[#094d82]"></span>
                                    <h3 className="mb-1 text-lg font-semibold text-black/90 ">{item.year}</h3>

                                    {item.events.map((evt, idx) => (
                                        <p key={idx} className="text-sm sm:text-base font-medium  text-black/90">
                                            <span className="text-[#0b4b73]  drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)] font-extrabold mr-4">{evt.month}</span>{evt.text}
                                        </p>
                                    ))}
                                </li>
                            ))}
                            <li className="ms-6 flex gap-4">
                                <span className="absolute bottom-0 left-0 -translate-x-1/2 flex items-center justify-center size-7 text-[#094d82] rounded-full ring-8 ring-transparent">
                                    <MdAnchor className="size-7" />
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="mt-auto relative z-10">
                <Footer />
            </div>
        </section>
    );
};
