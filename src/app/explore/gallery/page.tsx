"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Image as ImageIcon, Video, Calendar, Share2, Filter, Play, Check, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PILLS = [
  "All",
  "Organisation",
  "Government events",
  "With Political Leaders",
  "Spiritual side",
  "The Lighter side",
];

const MOCK_MEDIA = [
  {
    id: 1,
    type: "Images",
    category: "Government events",
    state: "Delhi",
    date: "2026-06-18",
    title: "NIPER Ahmedabad building inauguration ceremony setup",
    shares: 420,
    imageSrc: "/niper_ahmedabad.png"
  },
  {
    id: 2,
    type: "Videos",
    category: "Organisation",
    state: "Gujarat",
    date: "2026-06-12",
    title: "Keynote speech at state-level booth workers convention",
    shares: 890,
    imageSrc: "/speech_convention.png",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    type: "Images",
    category: "With Political Leaders",
    state: "Delhi",
    date: "2026-06-08",
    title: "Meeting with Hon'ble Lok Sabha Speaker Om Birla in Parliament office",
    shares: 310,
    imageSrc: "/meeting_birla.png"
  },
  {
    id: 4,
    type: "Images",
    category: "Spiritual side",
    state: "Gujarat",
    date: "2026-06-04",
    title: "Inauguration and prayers at historical Somnath Temple festival",
    shares: 550,
    imageSrc: "/somnath_temple.png"
  },
  {
    id: 5,
    type: "Videos",
    category: "Government events",
    state: "Maharashtra",
    date: "2026-05-28",
    title: "Cooperative societies digitised bank ledger launch briefing",
    shares: 610,
    imageSrc: "/bank_ledger.png",
    videoSrc: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 6,
    type: "Images",
    category: "The Lighter side",
    state: "Rajasthan",
    date: "2026-05-15",
    title: "Brief interaction with primary school children during Jodhpur tour",
    shares: 720,
    imageSrc: "/school_children.png"
  },
];

const STATES = ["All States", "Delhi", "Gujarat", "Maharashtra", "Rajasthan"];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 16,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  hover: {
    boxShadow: "0 20px 25px -5px rgba(30, 58, 138, 0.05), 0 8px 10px -6px rgba(30, 58, 138, 0.05)",
    borderColor: "rgba(30, 58, 138, 0.15)",
    transition: {
      type: "spring" as const,
      stiffness: 250,
      damping: 20,
    },
  },
} as const;

// Asymmetrical Image Frame
const WaterFlowImage = ({
  src,
  alt,
  isVideo,
  videoSrc,
  isHovered
}: {
  src: string;
  alt: string;
  isVideo?: boolean;
  videoSrc?: string;
  isHovered?: boolean;
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setVideoLoaded(false);
    }
  }, [isHovered]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-100/60 shadow-inner">
      {!isHovered && (
        <motion.div
          initial={{ left: "-150%" }}
          whileInView={{ left: "150%" }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }}
          viewport={{ once: true }}
          className="absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-10 pointer-events-none"
        />
      )}

      <motion.div
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true, margin: "-40px" }}
        className="w-full h-full relative"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 450px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {isVideo && videoSrc && isHovered && (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            onPlaying={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent z-10 pointer-events-none" />

      {isVideo && !isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
          <motion.div
            whileHover={{ scale: 1.12 }}
            className="w-12 h-12 rounded-full bg-[#E25822] text-white flex items-center justify-center shadow-lg pointer-events-auto"
          >
            <Play className="w-5 h-5 fill-current text-white translate-x-0.5" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

const CustomSelect = ({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (val: string) => void;
  options: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full sm:w-44 select-none">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full bg-slate-50 border border-slate-200 hover:border-[#1E3A8A] text-xs font-bold text-slate-700 px-3.5 py-2.5 rounded-lg focus:outline-none focus:shadow-md focus:shadow-[#1E3A8A]/5 transition-all duration-200 cursor-pointer text-left"
      >
        <span>{value}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 4 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 right-0 bg-white border border-slate-200/80 rounded-lg shadow-xl py-1.5 z-50 max-h-60 overflow-y-auto text-left"
          >
            {options.map((opt) => {
              const isSelected = value === opt;
              return (
                <li
                  key={opt}
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 text-xs font-bold cursor-pointer transition-colors duration-150 ${
                    isSelected ? "bg-[#1E3A8A]/5 text-[#1E3A8A]" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{opt}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Gallery() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPill, setSelectedPill] = useState("All");
  const [selectedState, setSelectedState] = useState("All States");
  const [showCopiedText, setShowCopiedText] = useState<number | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState<string | null>(null);

  const filteredMedia = MOCK_MEDIA.filter((item) => {
    const matchesType = selectedType === "All" || item.type === selectedType;
    const matchesPill = selectedPill === "All" || item.category === selectedPill;
    const matchesState = selectedState === "All States" || item.state === selectedState;
    return matchesType && matchesPill && matchesState;
  });

  const handleShare = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(`${window.location.origin}/explore/gallery?media=${id}`);
      setShowCopiedText(id);
      setTimeout(() => setShowCopiedText(null), 2000);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white relative overflow-hidden">
      
      {/* 1. Page Header Hero Section */}
      <section className="relative h-80 md:h-[450px] bg-slate-950 flex items-center justify-center overflow-hidden group cursor-default">
        {/* Swelling reveal overlays */}
        <div className="absolute inset-0 pointer-events-none z-35 overflow-hidden">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#E25822] z-30"
          />
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="absolute inset-0 bg-[#1E3A8A] z-25"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/speech_convention.png"
            alt="Press and events banner background"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 z-10 pointer-events-none" />

        <div className="relative w-full px-6 sm:px-12 md:px-16 lg:pr-32 z-20 text-center space-y-4 pointer-events-none">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight leading-none">
            Photo & Video Gallery
          </h1>
          <div className="w-20 h-1 bg-[#E25822] mx-auto rounded-full mt-2" />
          <p className="text-xs sm:text-sm font-sans tracking-widest text-slate-300 font-extrabold uppercase mt-2">
            Visual highlights of administrative conferences and public outreach
          </p>
        </div>
      </section>

      {/* 2. Controls and Filters */}
      <section className="bg-white border-b border-slate-100 py-6 sticky top-22 z-40 shadow-sm shadow-slate-100/50 backdrop-blur-md bg-white/95">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              {["All Media", "Photos", "Videos"].map((label) => {
                const typeMap = label === "All Media" ? "All" : label === "Photos" ? "Images" : "Videos";
                const isActive = selectedType === typeMap;
                return (
                  <button
                    key={label}
                    onClick={() => setSelectedType(typeMap)}
                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors duration-300 flex items-center gap-1.5 cursor-pointer border overflow-hidden ${
                      isActive
                        ? "border-[#1E3A8A] bg-transparent"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-sm"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeMediaType"
                        className="absolute inset-0 bg-[#1E3A8A] shadow-md shadow-[#1E3A8A]/15"
                        style={{ borderRadius: "8px" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {label === "Photos" && <ImageIcon className="w-3.5 h-3.5 shrink-0" />}
                      {label === "Videos" && <Video className="w-3.5 h-3.5 shrink-0" />}
                      <span className={`transition-colors duration-300 font-extrabold ${isActive ? "text-white" : "text-slate-700"}`}>
                        {label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <Filter className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />
              <CustomSelect
                value={selectedState}
                onChange={setSelectedState}
                options={STATES}
              />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-100 pt-4">
            {PILLS.map((pill) => {
              const isActive = selectedPill === pill;
              return (
                <button
                  key={pill}
                  onClick={() => setSelectedPill(pill)}
                  className={`relative px-4 py-2 rounded-full text-xs font-extrabold transition-colors duration-300 whitespace-nowrap cursor-pointer border overflow-hidden shrink-0 ${
                    isActive
                      ? "border-[#E25822] bg-transparent"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeGalleryPill"
                      className="absolute inset-0 bg-[#E25822] shadow-md shadow-[#E25822]/15"
                      style={{ borderRadius: "9999px" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    {pill}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Media Grid Layout */}
      <section className="py-12 md:py-16 bg-slate-50/30">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32">
          
          <AnimatePresence mode="popLayout">
            {filteredMedia.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
              >
                {filteredMedia.map((item) => {
                  const isVideo = item.type === "Videos";
                  const isHovered = hoveredCardId === item.id;
                  
                  const handleCardClick = (e: React.MouseEvent) => {
                    if (isVideo && item.videoSrc) {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveVideoUrl(item.videoSrc);
                      setActiveVideoTitle(item.title);
                    }
                  };

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover="hover"
                      onMouseEnter={() => setHoveredCardId(item.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      onClick={handleCardClick}
                      className="relative bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between text-left group transition-all duration-300 hover:border-[#1E3A8A]/30 hover:shadow-xl hover:shadow-[#1E3A8A]/5 h-auto aspect-video cursor-pointer"
                    >
                      <div className="relative w-full h-full">
                        <WaterFlowImage src={item.imageSrc} alt={item.title} isVideo={isVideo} videoSrc={item.videoSrc} isHovered={isHovered} />
                        
                        <div className="absolute top-3 right-3 bg-[#E25822]/90 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider z-20 shadow-sm">
                          {item.state}
                        </div>

                        <div className="absolute bottom-4 inset-x-4 z-20 space-y-1.5 pointer-events-none text-left">
                          <span className="bg-[#1E3A8A] text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full inline-block">
                            {item.category}
                          </span>
                          <h4 className="text-sm font-bold text-white font-serif leading-snug drop-shadow-md">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="col-span-3 bg-white border border-slate-200/50 rounded-3xl p-16 text-center text-slate-400 font-extrabold max-w-xl mx-auto"
              >
                No media matches your selection filters.
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveVideoUrl(null);
              setActiveVideoTitle(null);
            }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => {
                setActiveVideoUrl(null);
                setActiveVideoTitle(null);
              }}
              className="absolute top-6 right-6 text-white hover:text-[#E25822] bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 cursor-pointer z-50 flex items-center justify-center shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="h-1.5 bg-[#E25822] w-full" />
              
              <div className="aspect-video w-full bg-black relative">
                <video
                  src={activeVideoUrl}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-5 md:p-6 bg-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left border-t border-slate-800">
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#E25822]">
                    Playing Video Briefing
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-white leading-snug">
                    {activeVideoTitle}
                  </h3>
                </div>
                
                <button
                  onClick={() => {
                    setActiveVideoUrl(null);
                    setActiveVideoTitle(null);
                  }}
                  className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-extrabold py-2.5 px-5 rounded-xl text-xs uppercase tracking-wider transition-all text-center cursor-pointer select-none"
                >
                  Close Video
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
