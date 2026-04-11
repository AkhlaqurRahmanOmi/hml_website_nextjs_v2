"use client";

import React from "react";
import { motion } from "framer-motion";

interface FullPageLoaderProps {
  show: boolean;
}

const FullPageLoader: React.FC<FullPageLoaderProps> = ({ show }) => {
  const letters = ["H", "M", "L"];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      {/* Optional blurred background */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

      {/* Animated HML Letters */}
      <div className="relative z-10 flex space-x-6">
        {letters.map((letter, i) => (
          <motion.span
            key={letter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              duration: 1.2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="font-roboto text-[15vw] md:text-[13vw] font-extrabold text-[#bfcde2] opacity-80 tracking-widest drop-shadow-lg select-none"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default FullPageLoader;