"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaDownload, FaPlay } from "react-icons/fa6";
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

  const videoLinks = [
    "https://youtu.be/XvJzr7KGHGE?si=hPt-P-KnlSR5tGtf",
    "https://youtu.be/5_nIWxfYQFs?si=tEMxUCC-bsFBHmjG",
    "https://youtu.be/VJfGfXICVGU?si=rYdYgfZRQKs-Vn4H",
    "https://youtu.be/fzpXsJbiZnE?si=hn0PSlmEnkHbA6q2",
    "https://youtu.be/npUCdVeALwM?si=5I647Mz0uRNK-riM",
    "https://youtu.be/E2L_AYqTRyw?si=Fngs64ot7NKEBkAm",
    "https://youtu.be/bPI7AO1OO6I?si=NtphxcNpPTczMy3z",
  ];

  const getYouTubeId = (url: string) => {
    const match = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : "";
  };

  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

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

      <div className="relative z-10 flex flex-col items-start justify-between w-full px-4 md:px-10 lg:px-16 py-24 gap-6">
        <motion.div
          className="w-full font-opensans"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-2 mt-2 xl:mt-10">
            <span className="text-2xl md:text-4xl lg:text-6xl font-semibold text-[#094d82] leading-tight text-nowrap">
              DISCOVER MORE <span className=" font-extrabold">ABOUT US</span>
            </span>
          </h1>
        </motion.div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 items-start border-b border-[#094d82]/30 pb-6">
          {/* Video Section */}
          <motion.div
            layout
            className="relative w-full aspect-video overflow-hidden shadow-lg cursor-pointer transition-all duration-700"
            onClick={handleVideoClick}
          >
                <AnimatePresence mode="wait">
                  {activeMedia === "video" && showIframe && activeVideoId ? (
                    <motion.iframe
                      key="video"
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${activeVideoId}`}
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
            className="relative w-full aspect-video shadow-lg overflow-hidden transition-all duration-700 cursor-pointer"
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
                        className="bg-white text-[#094d82] px-4 py-2 flex items-center gap-2 font-bold shadow-lg"
                      >
                        <FaDownload />
                        Download Brochure
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-2 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {videoLinks.map((url) => {
              const id = getYouTubeId(url);
              const thumb = id
                ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
                : "";
              const isActive = id === activeVideoId;
              return (
                <button
                  key={url}
                  type="button"
                  onClick={() => {
                    setActiveVideoId(id);
                  }}
                  className={`group relative aspect-video overflow-hidden shadow-lg transition-colors ${isActive ? "ring-2 ring-[#0b4b73]" : ""}`}
                >
                  {activeVideoId === id ? (
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : thumb ? (
                    <>
                      <Image
                        src={thumb}
                        alt="YouTube video thumbnail"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors group-hover:bg-black/45">
                        <FaPlay className="text-white text-3xl" />
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200 text-xs font-semibold text-[#6b7d90]">
                      Video
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
