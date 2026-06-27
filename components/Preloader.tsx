"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRELOADER_IMAGES = [
  "/north_block.png",        // Rashtra Pratham
  "/bank_ledger.png",        // Sahkar Se Samriddhi
  "/indian_emblem_flag_widescreen.png", // Satyamev Jayate
  "/hero_leader.png"         // Shri Krishna Pal
];

const WORDS = [
  "Rashtra Pratham", 
  "Sahkar Se Samriddhi", 
  "Satyamev Jayate", 
  "Shri Krishna Pal"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [visible, setVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    // Handle window resize to update dimensions
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (index === WORDS.length - 1) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // Fallbacks for dimension if not mounted yet
  const width = dimension.width || (typeof window !== "undefined" ? window.innerWidth : 1920);
  const height = dimension.height || (typeof window !== "undefined" ? window.innerHeight : 1080);

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width/2} ${height + 300} 0 ${height} Z`;
  const targetPath = `M0 0 L${width} 0 L${width} 0 Q${width/2} 0 0 0 Z`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 text-white overflow-hidden"
        >
          {/* Main loader background slide-up SVG */}
          {isMounted && (
            <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-slate-950">
              <motion.path
                variants={curve}
                initial="initial"
                exit="exit"
              />
            </svg>
          )}

          {/* Dynamic Background Image with Smooth Crossfade */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.75, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={PRELOADER_IMAGES[index]}
                alt={WORDS[index]}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Dark semi-transparent overlay for text readability */}
            <div className={`absolute inset-0 bg-slate-950 transition-opacity duration-500 ${index === 2 ? "opacity-25" : "opacity-55"}`} />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Center Saffron active accent bar */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-[3px] bg-[#E25822] mb-8 rounded-full shadow-lg shadow-[#E25822]/40"
            />
            

            
            {/* Taller overflow container to prevent text clipping */}
            <div className="h-24 overflow-hidden flex items-center justify-center px-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1], delay: 0.1 }}
                  className="text-3xl sm:text-5xl font-black font-serif tracking-wider text-white flex items-center gap-3.5 drop-shadow-[0_2px_15px_rgba(255,255,255,0.15)]"
                >
                  {/* Pulsing indicator dot */}
                  <span className="w-3.5 h-3.5 rounded-full bg-[#E25822] inline-block animate-ping shrink-0 shadow-lg shadow-[#E25822]/30" />
                  {WORDS[index]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>



        </motion.div>
      )}
    </AnimatePresence>
  );
}
