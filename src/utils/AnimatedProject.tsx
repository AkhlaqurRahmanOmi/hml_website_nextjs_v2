"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedProject({ projectData }: { projectData: any }) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center p-6 lg:py-12 gap-6 lg:gap-12">
            <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <Image
                    src={projectData.image[1]}
                    alt={projectData.name}
                    width={600}
                    height={350}
                    className="rounded-md shadow-sm object-cover max-h-96"
                />
            </motion.div>

            <motion.div
                className="w-full lg:w-1/2 text-center lg:text-left font-roboto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <h2 className="font-worksans text-2xl md:text-3xl lg:text-4xl font-semibold text-[#094d82] mb-2 uppercase">
                    {projectData.name}
                </h2>
                <p className="text-lg text-black mb-4">{projectData?.description}</p>
                <p className="text-base text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                    {projectData.projectDetails}
                </p>
            </motion.div>
        </div>
    );
}
