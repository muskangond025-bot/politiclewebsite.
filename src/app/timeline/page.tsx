"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, User, Eye, Share2, Filter, MapPin, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const YEARS = ["All Years", "2026", "2025", "2024", "2023", "2022", "2021", "2020", "1997"];
const MONTHS = ["All Months", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const MOCK_TIMELINE_LOGS = [
  {
    id: 1,
    year: "2026",
    month: "Jun",
    date: "2026-06-17",
    title: "Chaired High-Level Security Review on Western Borders",
    desc: "Met with Chief of Army Staff and border security agency heads in New Delhi. Reviewed drone defense systems and outpost electrification projects.",
    type: "MHA Duties",
  },
  {
    id: 2,
    year: "2026",
    month: "Jun",
    date: "2026-06-12",
    title: "Meeting with U.S. Ambassador to India Eric Garcetti",
    desc: "Discussed bilateral security cooperation, counter-terrorism technology sharing, and regional stability initiatives.",
    type: "Foreign Dignitary",
  },
  {
    id: 3,
    year: "2026",
    month: "May",
    date: "2026-05-24",
    title: "Address at National Cooperative Conference on PACS Digitization",
    desc: "Outlined the roadmap for computerizing 65,000 primary agricultural cooperative banks to provide transparent credit flow for rural farmers.",
    type: "Cooperation Ministry",
  },
  {
    id: 4,
    year: "2025",
    month: "Dec",
    date: "2025-12-10",
    title: "Bilateral Meet with United Kingdom Home Secretary",
    desc: "Signed memorandum of understanding on cooperation in combating cybercrime and sharing tactical threat intelligence.",
    type: "Foreign Dignitary",
  },
  {
    id: 5,
    year: "2024",
    month: "Jun",
    date: "2024-06-25",
    title: "Guided Implementation Review of BNS",
    desc: "Chaired coordination meeting with state police chiefs to audit forensic integration setups for the new criminal justice codes.",
    type: "MHA Duties",
  },
  {
    id: 6,
    year: "2021",
    month: "Jul",
    date: "2021-07-07",
    title: "Assumed Additional Charge of Ministry of Cooperation",
    desc: "Appointed as India's first Minister of Cooperation under Prime Minister Modi. Declared the vision of 'Sahkar Se Samriddhi'.",
    type: "Cabinet Milestone",
  },
  {
    id: 7,
    year: "2020",
    month: "Feb",
    date: "2020-02-18",
    title: "Chaired Northern Zonal Council Meeting in Haryana",
    desc: "Facilitated discussions between Chief Ministers of Punjab, Haryana, and Rajasthan regarding river-water sharing and joint border security.",
    type: "MHA Duties",
  },
  {
    id: 8,
    year: "1997",
    month: "Jun",
    date: "1997-06-15",
    title: "Elected MLA from Sarkhej Constituency (Gujarat)",
    desc: "Won by a historic margin of over 25,000 votes, marking his entry into the Gujarat Legislative Assembly.",
    type: "Electoral Milestone",
  },
];

const stackCardVariants = {
  front: {
    x: 0,
    y: 0,
    z: 0,
    scale: 1,
    opacity: 1,
    zIndex: 10,
    rotate: 0,
    pointerEvents: "auto" as const,
  },
  middle: {
    x: 0,
    y: -16,
    z: -30,
    scale: 0.94,
    opacity: 0.75,
    zIndex: 9,
    rotate: 0,
    pointerEvents: "none" as const,
  },
  back: {
    x: 0,
    y: -32,
    z: -60,
    scale: 0.88,
    opacity: 0.45,
    zIndex: 8,
    rotate: 0,
    pointerEvents: "none" as const,
  },
  hidden: {
    x: 0,
    y: -48,
    z: -90,
    scale: 0.82,
    opacity: 0,
    zIndex: 0,
    rotate: 0,
    pointerEvents: "none" as const,
  },
  exitLeft: {
    x: -360,
    y: 10,
    z: 10,
    scale: 0.95,
    opacity: 0,
    zIndex: 11,
    rotate: -12,
    pointerEvents: "none" as const,
  }
};

// Motion Variants
const bannerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

const bannerChildVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
    },
  },
} as const;

const feedContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

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
    y: -6,
    boxShadow: "0 20px 25px -5px rgba(30, 58, 138, 0.05), 0 8px 10px -6px rgba(30, 58, 138, 0.05)",
    borderColor: "rgba(226, 88, 34, 0.15)",
    transition: {
      type: "spring" as const,
      stiffness: 250,
      damping: 20,
    },
  },
} as const;

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedMonth, setSelectedMonth] = useState("All Months");

  const filteredLogs = MOCK_TIMELINE_LOGS.filter((log) => {
    const matchesYear = selectedYear === "All Years" || log.year === selectedYear;
    const matchesMonth = selectedMonth === "All Months" || log.month === selectedMonth;
    return matchesYear && matchesMonth;
  });

  return (
    <div className="flex flex-col w-full bg-slate-50/50">
      {/* Header section */}
      <section className="relative h-80 md:h-[450px] bg-slate-900 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.08 }}
            whileHover={{ scale: 1.0, transition: { duration: 0.8, ease: "easeOut" } }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src="/somnath_temple.png"
              alt="Timeline history banner background"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
        <motion.div
          variants={bannerContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full px-6 sm:px-12 md:px-16 lg:pr-32 z-20 text-center space-y-3"
        >
          <motion.h1
            variants={bannerChildVariants}
            className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight"
          >
            HISTORICAL TIMELINE
          </motion.h1>
          <motion.div
            variants={bannerChildVariants}
            className="w-12 h-1 bg-[#E25822] mx-auto rounded-full"
          />
        </motion.div>
      </section>

      {/* Main content grid with sidebar */}
      <section className="py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar Axis of History */}
            <div className="lg:col-span-3 bg-white border border-slate-200/60 rounded-3xl p-5 shadow-sm space-y-6 text-left">
              <h3 className="text-xs uppercase tracking-widest text-black font-extrabold flex items-center gap-2 border-b border-slate-100 pb-3">
                <Filter className="w-4 h-4 text-[#E25822]" />
                Axis of History
              </h3>

              {/* Year list */}
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                  Select Year
                </div>
                <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1.5 pb-2 lg:pb-0 scrollbar-none">
                  {YEARS.map((y) => {
                    const isActive = selectedYear === y;
                    return (
                      <button
                        key={y}
                        onClick={() => setSelectedYear(y)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer text-left ${
                          isActive
                            ? "bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/15"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {y}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Month list */}
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                  Select Month
                </div>
                <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1.5 pb-2 lg:pb-0 scrollbar-none">
                  {MONTHS.map((m) => {
                    const isActive = selectedMonth === m;
                    return (
                      <button
                        key={m}
                        onClick={() => setSelectedMonth(m)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer text-left ${
                          isActive
                            ? "bg-[#E25822] text-white shadow-md shadow-[#E25822]/15"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Timeline Cards */}
            <div className="lg:col-span-9">
              <div className="relative">


                <AnimatePresence mode="popLayout">
                  {filteredLogs.length > 0 ? (
                    <motion.div 
                      key="results-grid"
                      variants={feedContainerVariants}
                      className="space-y-6"
                    >
                      {filteredLogs.map((log) => (
                        <motion.div
                          key={log.id}
                          variants={cardVariants}
                          className="flex gap-4 sm:gap-6 bg-white border border-slate-200/50 hover:border-slate-300 hover:shadow-lg rounded-3xl p-5 sm:p-6 transition-all duration-300 group cursor-pointer"
                        >
                          {/* Left Date circle */}
                          <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center shrink-0 shadow-sm relative group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300">
                            <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#E25822]">
                              {log.date.split("-")[1].substring(0, 3)}
                            </span>
                            <span className="text-xl font-bold font-serif text-[#1E3A8A] group-hover:text-[#E25822] transition-colors duration-300 leading-none my-1">
                              {log.date.split("-")[2]}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400">
                              {log.year}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="space-y-2 flex-grow pr-4">
                            <span className="bg-[#1E3A8A]/5 text-[#1E3A8A] px-2.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider self-start inline-block">
                              {log.type}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold font-serif text-black leading-snug group-hover:text-[#1E3A8A] transition-colors duration-300">
                              {log.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                              {log.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-records"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full bg-white border border-slate-200/50 rounded-2xl p-12 text-center text-slate-400 font-bold"
                    >
                      No records found for the selected year and month.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
