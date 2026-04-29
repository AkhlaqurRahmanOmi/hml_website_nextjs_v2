"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden bg-white">
      <Image
        src="/images/webp/About_background.webp"
        alt="Ocean and mountains landscape with ship"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0" />
      <div className="relative mx-auto mt-[3%] flex h-[60vh] w-[100%] flex-col items-start justify-center gap-6 text-start">
        <div className={`transition-opacity duration-500 ease-in-out bg-[#094e8286] p-6 text-white w-full px-[10%] mt-[12vh]`}>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-dmsans text-2xl font-bold uppercase md:text-4xl xl:text-6xl"
          >
            ABOUT US
          </motion.h1>

          <div className="mt-4 space-y-4 w-full font-light text-xs xl:text-xs leading-relaxed md:text-sm">
              {[
                "HML, headquartered in Seoul, South Korea, is a leading provider of heavy marine transportation services. We own and operate two specialized heavy transport vessels and work in close partnership with two additional vessels to enhance our global project capacity.",
                "Since our founding in 2009, HML has become one of the most trusted names in the marine transport industry. Our project-based operations and commitment to client satisfaction have made us a reliable partner across complex and large-scale logistics.",
                "We have also developed in-house engineering capabilities by hiring cross-disciplinary experts and investing in high-end engineering software, allowing us to provide precise, customized solutions for even the most technical challenges."
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
                  className="text-sm leading-relaxed md:text-base"
                >
                  {text}
                </motion.p>
              ))}
          </div>
        </div>


      </div>
    </section>
  );
};
