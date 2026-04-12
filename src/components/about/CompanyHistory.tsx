"use client";

// import AOS from "aos";
// import "aos/dist/aos.css";

import { Footer } from "../Global/footer";
import { data } from ".";
import { MdAnchor } from "react-icons/md";

export const CompnayHistory = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 800,
    //         once: false,
    //         mirror: true,
    //     });
    // }, []);

    const historyItems = Object.values(data).flat();

    // return (
    // <section className="min-h-screen h-full px-4 md:px-[10%] bg-[url('/Timeline.jpg')] bg-no-repeat bg-cover bg-center">
    //     <div data-aos="fade-down">
    //         <h2 className="text-2xl md:text-4xl font-bold text-[#094d82] uppercase">COMPANY</h2>
    //         <h1 className="text-4xl md:text-6xl font-bold text-[#094d82] uppercase">HISTORY</h1>
    //     </div>

    //     <div
    //         className="flex flex-wrap gap-10 my-6"
    //         data-aos="fade-down"
    //         data-aos-delay="200"
    //     >
    //         {(["2021-2024", "2015-2019", "2010-2014", "2006-2013"] as const).map(
    //             (range, i) => (
    //                 <Link
    //                     key={range}
    //                     href="#"
    //                     onClick={(e) => {
    //                         e.preventDefault();
    //                         handleRangeClick(range);
    //                     }}
    //                     className="text-lg font-bold text-[#094d82]"
    //                     data-aos="fade-down"
    //                     data-aos-delay={`${i * 200}`}
    //                 >
    //                     {range.replace("-", " ~ ")}
    //                 </Link>
    //             )
    //         )}
    //     </div>


    //     <div className="flex flex-col md:flex-row gap-4" data-aos="fade-down" data-aos-delay="200">
    //         <p className="max-w-xs">HML remains committed to pursuing new challenges in its journey to become a global leader in logistics</p>
    //         <ol className="relative border-s border-[#094d82] dark:border-gray-700">
    //             <li className="mb-10 ms-6" >
    //                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:bg-[#094d82]"></span>
    //                 <h3 className="flex items-center mb-1 text-lg font-extrabold text-[#094d82]">{activeRange}</h3>
    //             </li>
    //             {data[activeRange]?.map((item) => (
    //                 <li key={item.year} className="mb-10 ms-6">
    //                     <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:bg-[#094d82]"></span>
    //                     <h3 className="mb-1 text-lg font-normal text-[#094d82] ">{item.year}</h3>
    //                     {item.events.map((evt, idx) => (
    //                         <p key={idx} className="text-base font-normal text-gray-500 dark:text-gray-400">
    //                             <span className="text-black font-bold mr-4">{evt.month}</span>{evt.text}
    //                         </p>
    //                     ))}
    //                 </li>
    //             ))}

    //             {(() => {
    //                 const nextRange = activeRange === "2021-2024"
    //                     ? "2015-2019"
    //                     : activeRange === "2015-2019"
    //                         ? "2010-2014"
    //                         : activeRange === "2010-2014"
    //                             ? "2006-2013"
    //                             : null;


    //                 return (
    //                     <li className="ms-6 flex gap-4">
    //                         <span className={`absolute flex items-center justify-center size-7 text-[#094d82] rounded-full -start-[14.7px] ring-8 ring-transparent  ${isBouncing ? "animate-drop" : ""}`} >
    //                             <MdAnchor className="size-7 mt-12" />
    //                         </span>

    //                         <p className="text-lg font-extrabold text-[#094d82]">
    //                             {nextRange ? nextRange : "2021-2024"}
    //                         </p>
    //                     </li>
    //                 );
    //             })()}
    //         </ol>
    //     </div>
    // </section>

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-white via-[#85bef3] to-[#4e697e]">
            {/* <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-white via-[#85bef3] to-[#4e697e]"> */}
            {/* <section className="relative min-h-screen flex flex-col justify-center bg-no-repeat bg-cover bg-center 
    before:content-[''] before:absolute before:inset-0 before:bg-black/5 before:backdrop-blur-sm before:z-0 
    bg-[url('/test.jpg')]"> */}
            {/* <section className="relative min-h-[92vh] flex flex-col justify-center bg-no-repeat bg-cover bg-center 
    before:content-[''] before:absolute before:inset-0 before:bg-black/5 before:backdrop-blur-sm before:z-0 
    bg-[url('/test.jpg')]"> */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 md:pt-28 lg:pt-32 pb-10">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10" data-aos="fade-down" data-aos-delay="200">
                    <div className="text-black/70 lg:sticky lg:top-28 lg:self-start lg:max-w-xl">
                        <h2 className="text-2xl md:text-4xl font-medium uppercase">
                            COMPANY
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-semibold uppercase ">
                            HISTORY
                        </h1>
                        {/* <h2 className="text-2xl md:text-4xl font-medium uppercase bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent">
                            COMPANY
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-semibold uppercase bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                            HISTORY
                        </h1> */}
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
                                        <p key={idx} className="text-sm sm:text-base font-semibold text-black/90">
                                            <span className="text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)] font-extrabold mr-4">{evt.month}</span>{evt.text}
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

            {/* <div className="mt-auto relative z-10"> */}
            <div className="mt-auto relative z-10">
                <Footer />
            </div>
        </section>
    );
};
