"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GoGoal } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const MissionVision = () => {
  return (
    <section className="relative h-screen bg-[#f4f7fc] bg-[url('/MVBG.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center px-4 py-6 md:py-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.1}
          variants={fadeUp}
          className="rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm md:p-6"
        >
          <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[0.7fr_1.3fr]">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[180px] overflow-hidden rounded-xl shadow-md sm:mx-0 sm:max-w-[200px]">
              <Image
                src="/about/CEO_Hi-Megaline.png"
                alt="Kwang Bae Park, CEO of HI-MEGALINE"
                fill
                priority
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="text-center sm:text-left">
              <p className="text-md font-semibold uppercase tracking-[0.3em] text-[#4870a0]">
                CEO Message
              </p>
              <h2 className="mt-2 font-dmsans text-xl font-bold text-[#0a1f44] md:text-2xl">
                Your Dedicated Partner, Safely Connecting Customer Value.
              </h2>
              <div className="mt-3 space-y-3 text-xs text-[#0a1f44] md:text-sm">
                <p>Greetings,</p>
                <p>I am Kwang Bae Park, CEO of HI-MEGALINE.</p>
                <p>
                  {
                    `Amidst the rapidly changing global logistics landscape, Hi-Megaline has
                  always placed "Customer Trust" as our highest priority. Beyond simply
                  transporting cargo, our mission is to provide optimal solutions that ensure
                  our customers' business continuity remains seamless and uninterrupted.`
                  }
                </p>
                <p>
                  Building on a foundation of rigorous safety management and seasoned expertise,
                  Hi-Megaline will continue to serve as a reliable bridge connecting Korea to
                  the rest of the world. We promise to be your premier logistics partner,
                  delivering excellence and inspiration through constant innovation.
                </p>
                <p>Thank you.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2">
          <motion.div
            className="flex flex-col items-center space-y-4 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm md:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            custom={0.2}
            variants={fadeUp}
          >
            <motion.div variants={fadeUp} custom={0.3}>
              <GoGoal size={54} className="text-[#4870a0]" />
            </motion.div>
            <motion.h3
              variants={fadeUp}
              custom={0.4}
              className="text-lg md:text-2xl font-extrabold text-[#25466e]"
            >
              OUR <span className="text-[#4870a0]">MISSION</span>
            </motion.h3>
            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="w-24 sm:w-44 md:w-56 h-[3px] bg-[#bfcde2] opacity-70"
            />
            <motion.div variants={fadeUp} custom={0.6}>
              <GoGoal size={26} className="text-[#4870a0]" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              custom={0.7}
              className="text-xs sm:text-sm md:text-base text-[#0a1f44] font-dmsans px-2 sm:px-3 leading-tight"
            >
              To deliver safe, reliable, and project-driven heavy marine transportation and
              engineering solutions that meet the unique needs of our global clients.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-4 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm md:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            custom={0.3}
            variants={fadeUp}
          >
            <motion.div variants={fadeUp} custom={0.4}>
              <FaRegLightbulb size={54} className="text-[#4870a0]" />
            </motion.div>
            <motion.h3
              variants={fadeUp}
              custom={0.5}
              className="text-lg md:text-2xl font-extrabold text-[#25466e]"
            >
              OUR <span className="text-[#4870a0]">VISION</span>
            </motion.h3>
            <motion.div
              variants={fadeUp}
              custom={0.6}
              className="w-24 sm:w-44 md:w-56 h-[3px] bg-[#bfcde2] opacity-70"
            />
            <motion.div variants={fadeUp} custom={0.7}>
              <FaRegLightbulb size={26} className="text-[#4870a0]" />
            </motion.div>
            <motion.p
              variants={fadeUp}
              custom={0.8}
              className="text-xs sm:text-sm md:text-base text-[#0a1f44] font-dmsans px-2 sm:px-3 leading-tight"
            >
              {`To be the world's most trusted and innovative partner in heavy marine logistics,
              setting standards in performance, service, and engineering excellence.`}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
