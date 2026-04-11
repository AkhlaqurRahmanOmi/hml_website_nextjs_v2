"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaLinkedinIn, FaYoutube, FaDownload, FaPlay } from "react-icons/fa6";
import BrochureThumbnail from "@/assets/Contact/BrochureProfileImage.webp";
import BackgroundImage from "@/assets/Contact/HeroImage.webp";
import YouTubeThumbnail from "@/assets/Contact/YoutubeVideoThumbnail.webp";

export const ContactHero = () => {
    const [activeMedia, setActiveMedia] = useState<"video" | "image">("video");
    const [showIframe, setShowIframe] = useState<boolean>(true);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

    const handleVideoClick = () => {
        if (activeMedia !== "video") {
            setActiveMedia("video");
            setShowIframe(false);
            setTimeout(() => setShowIframe(true), 700);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <Image
                src={BackgroundImage}
                alt="Ship Blueprint"
                fill
                className="object-cover z-0"
                // priority
                loading="lazy"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between w-full px-4 md:px-10 lg:px-16 py-24 gap-4 md:gap-6">
                {/* Left Content */}
                <motion.div
                    className="w-full lg:w-1/2 font-opensans"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="mb-1 md:mb-4 flex flex-col">
                        <span className="text-2xl md:text-4xl lg:text-6xl font-semibold text-[#094d82] leading-tight">
                            DISCOVER MORE <br />
                            <span className="text-5xl md:text-7xl font-extrabold">ABOUT US</span>
                        </span>
                    </h1>
                    <p className="text-[#094d82] text-sm md:text-base max-w-xl text-justify mt-4 leading-relaxed">
                        HML has also developed its own in-house engineering by bringing together engineering expertise from various industries and investing in leading engineering software, which gives us the ability to provide engineering solutions to our clients and project-specific requirements.
                    </p>

                    <motion.div
                        className="flex md:flex-col mt-6 md:space-y-4 gap-2 md:gap-0"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        {[
                            {
                                href: "https://www.linkedin.com/company/hml-korea/",
                                icon: (
                                    <FaLinkedinIn className="size-10 fill-white bg-[#0077B5] p-2 rounded-md" />
                                ),
                                label: "LINKEDIN",
                                sub: "FOLLOW US ON",
                            },
                            {
                                href: "https://www.youtube.com/@HML-Korea",
                                icon: (
                                    <FaYoutube className="size-10 fill-white bg-red-600 p-2 rounded-md" />
                                ),
                                label: "YOUTUBE",
                                sub: "SUBSCRIBE US ON",
                            },
                        ].map((link, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <Link
                                    className="flex bg-[#094d82] text-white gap-4 w-full max-w-[240px] p-2 rounded-lg items-center"
                                    href={link.href}
                                    target="_blank"
                                >
                                    {link.icon}
                                    <div className="flex flex-col">
                                        <span className="text-sm">{link.sub}</span>
                                        <span className="font-bold">{link.label}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 flex flex-col md:flex-row md:items-end justify-center gap-4">
                    {/* Video Section */}
                    <motion.div
                        layout
                        className={`relative rounded-md overflow-hidden shadow-lg cursor-pointer transition-all duration-700
                            ${activeMedia === "video"
                                ? "w-full max-w-[560px] aspect-video"
                                : "w-[140px] h-[90px] md:w-[120px] md:h-[80px]"
                            }`}
                        onClick={handleVideoClick}
                    >
                        <AnimatePresence mode="wait">
                            {activeMedia === "video" && showIframe ? (
                                <motion.iframe
                                    key="video"
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/5_nIWxfYQFs?si=2l_4US9t6Sf69VfU"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            ) : (
                                <motion.div
                                    key="thumbnail"
                                    className="w-full h-full relative"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src={YouTubeThumbnail}
                                        alt="YouTube Thumbnail"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                        <FaPlay className="text-white text-3xl" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Brochure Section */}
                    <motion.div
                        layout
                        className={`relative rounded-md shadow-lg overflow-hidden transition-all duration-700 cursor-pointer
                            ${activeMedia === "image"
                                ? "w-full max-w-[560px] aspect-video"
                                : "w-[120px] h-[160px]"
                            }`}
                        onClick={() => setActiveMedia("image")}
                    >
                        <Image
                            src={BrochureThumbnail}
                            alt="Brochure Thumbnail"
                            fill
                            className="object-cover"
                        />

                        <AnimatePresence>
                            {activeMedia === "image" && (
                                <motion.div
                                    key="brochure"
                                    className="absolute inset-0 flex items-center justify-center bg-black/40"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <a
                                        href="/HML Brochure.pdf"
                                        target="_blank"
                                        download
                                        className="bg-white text-[#094d82] px-4 py-2 rounded-md flex items-center gap-2 font-bold shadow-lg"
                                    >
                                        <FaDownload />
                                        Download Brochure
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
