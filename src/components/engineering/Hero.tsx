"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const EngineeringHero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative w-full pt-16 md:pt-20">
            <div className="relative w-full">
                {/* Animated Fade-in for Image */}
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isLoaded ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className="w-full h-[60vh]"
                    >
                        <Image
                            alt="In House Engineering"
                            src='https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549968/EngineeringHeroBackground_wlaays.webp'
                            fill
                            loading="eager"
                            onLoad={() => setIsLoaded(true)}
                            className="object-cover object-top rounded-none"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                    {!isLoaded && (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-10 flex items-center justify-center"
                        >
                            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
