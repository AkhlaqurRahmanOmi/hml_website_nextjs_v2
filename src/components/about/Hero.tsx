"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-white overflow-hidden">
      <Image
        src="/images/webp/About_background.webp"
        alt="Ocean and mountains landscape with ship"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative mx-auto flex min-h-[60vh] w-[90%] flex-col items-center justify-center gap-6 px-4 py-16 md:px-10 text-center">
        <div className="w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-dmsans text-4xl font-bold uppercase text-[#094d82] md:text-5xl lg:text-6xl"
          >
            ABOUT US
          </motion.h1>

          <div className="mt-4 space-y-4 text-[#0a2d4c] w-full">
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
