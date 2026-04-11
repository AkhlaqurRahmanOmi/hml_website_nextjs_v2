"use client";

import { AnimatePresence, motion } from "framer-motion";
import HeroVideoWithFallback from "../../utils/HeroVideoWithFallback";
import { HeroHomeStats } from "@/data/Homepage";
import Image from "next/image";

const container: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const firstLetterClass =
  "text-[#094d82] font-extrabold inline-block px-1 rounded-sm";


export const HomeHero = () => {
  return (
    <section className="relative h-screen">
      <div className="relative h-full w-full overflow-hidden">
        {/* Full-bleed background video (no side bars) */}
        <AnimatePresence>
          <HeroVideoWithFallback
            mp4Url="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768561030/Landing_Video_Ver_6._3_tnmbaw.mp4"
            webmUrl="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768561030/Landing_Video_Ver_6._3_tnmbaw.mp4"
            posterImage="https://res.cloudinary.com/dl28pqkb2/image/upload/v1760583437/Sequence_0103_p2ryme.jpg"
            className="-z-10"
            overlayClassName=""
          />
        </AnimatePresence>

        {/* Foreground content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.h1 className="w-full max-w-full" variants={container}>
            <div className="px-3  md:px-[5%] mx-auto w-fit text-left">

              <motion.span
                className="text-4xl font-bold text-white block text-left mb-2"
                style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
                variants={fadeUp}
              >
                The Icon of
              </motion.span>

              <motion.span
                className="font-worksans text-4xl md:text-4xl lg:text-7xl font-bold text-white md:font-normal lg:font-bold text-transparent block text-left -mt-2 lg:-mt-5 lg:-ml-0.5"
                style={{
                  // WebkitTextStroke: "1px white",
                  textShadow: "3px 3px 8px rgba(0, 0, 0, 0.7)",
                }}
                variants={fadeUp}
              >
                <span className="text-[40px] lg:text-[82px]">
                  <span className={firstLetterClass}>H</span>EAVY{" "}
                  <span className={firstLetterClass}>M</span>ARINE{" "}
                  <span className={firstLetterClass}>L</span>OGISTICS
                </span>
              </motion.span>
            </div>
          </motion.h1>
        </motion.div>

        {/* HeroHomeStats */}
        <div className="absolute bottom-0 left-0 right-0 px-3 md:px-[5%] pb-0 flex flex-col gap-3 lg:flex-row items-center justify-center lg:justify-between w-full">
          {
            HeroHomeStats.map((stat, index) => (
              <div key={index}
                className={[
                  "flex items-start justify-center p-4 h-16 w-72 mx-auto lg:mx-0",
                  "rounded-t-xl",
                  "bg-[#094e82]/70",
                  "supports-[backdrop-filter]:bg-[#094e82]/70",
                ].join(" ")}
              >
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={32}
                  height={32}
                  className="mr-3 invert brightness-0"
                />
                <span className="text-white -mt-1 font-opensans font-semibold text-wrap whitespace-pre-line">{stat.label}</span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};























{/* <section className="relative h-screen">
      <div className="relative h-full w-full overflow-hidden"> */}
{/* Full-bleed background video (no side bars) */ }
{/* <AnimatePresence>
          <HeroVideoWithFallback
            mp4Url="https://res.cloudinary.com/dl28pqkb2/video/upload/f_auto,q_auto,vc_h264/10.25_HML_landing_video_otitgl.mp4"
            webmUrl="https://res.cloudinary.com/dl28pqkb2/video/upload/f_auto,q_auto,vc_vp9/10.25_HML_landing_video_otitgl.webm"
            posterImage="https://res.cloudinary.com/dl28pqkb2/image/upload/v1760583437/Sequence_0103_p2ryme.jpg"
            className="-z-10"
            overlayClassName=""
          />
        </AnimatePresence> */}

{/* Foreground content */ }
{/* <motion.div
          className="absolute inset-0 flex flex-col items-start justify-between z-20"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="text-center w-full mt-[30%] xl:mt-[20%] absolute inset-0 flex flex-col items-start justify-between z-20">
            <motion.h1 className="w-full max-w-full" variants={container}>
              <div className="px-3  md:px-[5%]"> */}
{/* <motion.span
                  className="!font-nightWindSent italic text-lg font-bold text-white block text-start"
                  style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
                  variants={fadeUp}
                >
                  The Icon of
                </motion.span> */}

{/* <motion.span
                  className="text-2xl font-bold text-white block text-start mb-2"
                  style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
                  variants={fadeUp}
                >
                  The Icon of
                </motion.span> */}

{/* <motion.span
                  className="font-worksans text-4xl md:text-4xl lg:text-7xl font-bold text-white md:font-normal lg:font-bold text-transparent block text-start -mt-2 lg:-mt-3 lg:-ml-0.5"
                  style={{
                    WebkitTextStroke: "1px white",
                    textShadow: "3px 3px 8px rgba(0, 0, 0, 0.7)",
                  }}
                  variants={fadeUp}
                >
                  <span className="text-[40px] lg:text-[82px]">H</span>EAVY
                </motion.span>

                <motion.span
                  className="font-worksans text-4xl md:text-4xl lg:text-7xl font-bold text-white md:font-normal lg:font-bold text-transparent block text-start -mt-2 lg:-mt-5 lg:-ml-0.5"
                  style={{
                    WebkitTextStroke: "1px white",
                    textShadow: "3px 3px 8px rgba(0, 0, 0, 0.7)",
                  }}
                  variants={fadeUp}
                >
                  <span className="text-[40px] lg:text-[82px]">M</span>ARINE
                </motion.span> */}

{/* <motion.span
                  className="font-worksans text-4xl md:text-4xl lg:text-7xl font-bold text-white md:font-normal lg:font-bold text-transparent block text-start -mt-2 lg:-mt-5 lg:-ml-0.5"
                  style={{
                    // WebkitTextStroke: "1px white",
                    textShadow: "3px 3px 8px rgba(0, 0, 0, 0.7)",
                  }}
                  variants={fadeUp}
                >
                  <span className="text-[40px] lg:text-[82px]">
                    <span className={firstLetterClass}>H</span>EAVY{" "}
                    <span className={firstLetterClass}>M</span>ARINE{" "}
                    <span className={firstLetterClass}>L</span>OGISTICS
                  </span>
                </motion.span>
              </div>
            </motion.h1> */}

{/* GLASSY INFO STRIP (lighter + glassier) */ }
{/* <motion.div
              variants={fadeUp}
              className={[
                "w-full mt-4 py-6",
                "rounded-none",
                "bg-[#094e82]/70",
                "supports-[backdrop-filter]:bg-[#094e82]/70",
                "bg-gradient-to-br from-white/5 via-transparent to-white/0",
                "shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
                "transition-opacity duration-500 ease-in-out opacity-100",
              ].join(" ")}
            >
              <div className="px-3 md:px-[5%]">
                <p className="text-sm md:text-lg leading-relaxed text-justify text-white font-opensans font-thin">
                  <span className="font-semibold">HML</span> based in{" "}
                  <span className="font-semibold">Seoul</span>, is a global leader in{" "}
                  <span className="font-semibold">heavy marine transport</span>, operating 2{" "}
                  <span className="font-semibold">deck carrier vessels</span> and 2{" "}
                  <span className="font-semibold">partner vessels</span>. Since{" "}
                  <span className="font-semibold">2006</span>, we’ve delivered{" "}
                  <span className="font-semibold">project-based services</span> with in-house{" "}
                  <span className="font-semibold">engineering solutions</span> tailored to client needs.
                </p>

                <Link href="/about">
                  <div className="flex justify-start w-full max-w-full mt-4">
                    <ButtonOutline level="More info" />
                  </div>
                </Link>
              </div>
            </motion.div> */}

{/* HeroHomeStats */ }
{/* <div className="px-3 md:px-[5%] mt-10 xl:mt-[5%] flex flex-col gap-3 lg:flex-row items-center justify-center lg:justify-between w-full self-center lg:self-auto">
              {
                HeroHomeStats.map((stat, index) => (
                  <div key={index}
                    className={[
                      "flex items-start justify-center p-4 h-16 w-72 mx-auto lg:mx-0",
                      "rounded-t-xl",
                      "bg-[#094e82]/70",
                      "supports-[backdrop-filter]:bg-[#094e82]/70",
                    ].join(" ")}
                  >
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      width={32}
                      height={32}
                      className="mr-3 invert brightness-0"
                    />
                    <span className="text-white -mt-1 font-opensans font-semibold text-wrap whitespace-pre-line">{stat.label}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </motion.div>
      </div>
    </section> */}
