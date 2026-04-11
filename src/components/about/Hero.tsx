"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-10 px-4 py-20 md:flex-row md:gap-12 md:px-10">
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-dmsans text-5xl font-bold uppercase text-[#094d82] md:text-6xl lg:text-7xl"
          >
            ABOUT US
          </motion.h1>

          <div className="flex gap-12 flex-col lg:flex-row justify-between">
            <div className="mt-6 space-y-4 text-[#0a2d4c] w-full lg:w-1/2">
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
                  className="text-base leading-relaxed text-justify md:text-[17px]"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/3] mt-8 w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/webp/About_background.webp"
                  alt="Ocean and mountains landscape with ship"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};
