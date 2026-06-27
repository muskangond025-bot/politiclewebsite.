"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Quote, Newspaper, MessageSquare, Search, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const VIEW_CATEGORIES = ["All", "Articles", "Blog", "Quotes"];

const MOCK_VIEWS = [
  {
    id: 1,
    type: "Articles",
    date: "2026-06-14",
    title: "Revitalizing Rural India through Digitized Cooperatives",
    summary: "How computerization of Primary Agricultural Credit Societies (PACS) is laying the structural foundation for transparent rural credit systems.",
    readTime: "6 min read",
    icon: Newspaper,
  },
  {
    id: 2,
    type: "Blog",
    date: "2026-06-05",
    title: "Youth and the Modern Justice Framework of India",
    summary: "Reflections on introducing user-friendly technology integration inside local policing systems under new criminal code laws.",
    readTime: "4 min read",
    icon: MessageSquare,
  },
  {
    id: 3,
    type: "Quotes",
    date: "2026-05-28",
    title: "On National Integration and Unity",
    summary: "'Cultural unity is the soul of India; strong legislative structures are its armor. We are committed to securing both.'",
    readTime: "Quote of the Week",
    icon: Quote,
  },
  {
    id: 4,
    type: "Articles",
    date: "2026-05-15",
    title: "Empowering Border Villages as First Villages of India",
    summary: "Shifting the policy perspective from treating border outposts as terminal villages to developing them as key entry gateways of national integration.",
    readTime: "8 min read",
    icon: Newspaper,
  },
  {
    id: 5,
    type: "Blog",
    date: "2026-04-30",
    title: "Vedic Value Systems and Modern Administration",
    summary: "Tracing organizational governance patterns inside traditional Indian scriptures and their relevance to public service in the 21st century.",
    readTime: "5 min read",
    icon: MessageSquare,
  },
  {
    id: 6,
    type: "Quotes",
    date: "2026-04-12",
    title: "On Cooperative Empowerment",
    summary: "'Without cooperation, rural development is incomplete. Cooperative bank transparency is a constitutional priority.'",
    readTime: "Quote of the Month",
    icon: Quote,
  },
];

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

const controlPanelVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

const controlItemVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
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
    boxShadow: "0 25px 40px -15px rgba(30, 58, 138, 0.08), 0 10px 15px -10px rgba(30, 58, 138, 0.04)",
    borderColor: "rgba(30, 58, 138, 0.15)",
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
} as const;

interface StackingCardProps {
  item: typeof MOCK_VIEWS[0];
  index: number;
  total: number;
  isQuote: boolean;
}

function StackingCard({ item, index, total, isQuote }: StackingCardProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.5, 0.95], [1, 0.95 - (total - index - 1) * 0.005]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.95], [1, 0.9]);

  const Icon = item.icon;

  return (
    <div
      ref={containerRef}
      className="w-full sticky"
      style={{
        top: `${160 + index * 40}px`,
        zIndex: index + 1,
        paddingBottom: `${(total - index - 1) * 8}px`
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover="hover"
        className="relative bg-white border border-slate-200/60 rounded-3xl p-8 shadow-md flex flex-col justify-between text-left group overflow-hidden transition-colors duration-500"
      >
        <motion.div
          className="absolute left-0 right-0 top-0 h-1 bg-[#E25822] origin-center"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 0 },
            hover: { scaleX: 1 }
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        <div className="space-y-5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#1E3A8A]" />
              {item.date}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-serif text-black group-hover:text-[#1E3A8A] transition-colors duration-300 leading-tight">
            {item.title}
          </h3>

          {isQuote ? (
            <div className="relative bg-slate-50 border border-slate-100/70 rounded-2xl p-6 overflow-hidden group-hover:bg-[#E25822]/[0.015] group-hover:border-[#E25822]/10 transition-colors duration-500 text-left">
              <span className="absolute -right-2 -bottom-8 font-serif font-black text-[9rem] leading-none text-[#E25822]/8 select-none pointer-events-none">
                &rdquo;
              </span>
              <p className="relative z-10 italic text-sm text-slate-700 font-semibold leading-relaxed font-serif text-[14px]">
                {item.summary}
              </p>
            </div>
          ) : (
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {item.summary}
            </p>
          )}
        </div>

        <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between text-[12px] font-bold text-slate-600">
          <span>{item.readTime}</span>
          <Link
            href={`/views/${item.id}`}
            className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/95 text-white font-bold py-2 px-5 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm shadow-[#1E3A8A]/10 flex items-center justify-center gap-1.5 group/btn"
          >
            <span>{isQuote ? "Read Statement" : "Read Full Article"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function MyView() {
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredViews = MOCK_VIEWS.filter((item) => {
    const matchesCategory = selectedSubCategory === "All" || item.type === selectedSubCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full bg-slate-50/50">
      {/* Header Banner */}
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
              src="/views_banner.png"
              alt="Views and opinions banner background"
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
            MY VIEW
          </motion.h1>
          <motion.div
            variants={bannerChildVariants}
            className="w-12 h-1 bg-[#E25822] mx-auto rounded-full"
          />
        </motion.div>
      </section>

      {/* Filter and Control Panel */}
      <motion.section
        variants={controlPanelVariants}
        initial="hidden"
        animate="visible"
        className="bg-white border-b border-slate-100 py-5 sticky top-22 z-30 shadow-sm shadow-slate-100/50"
      >
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Sub Category Tabs with Sliding Indicator */}
          <motion.div
            variants={controlItemVariants}
            className="flex gap-2 overflow-x-auto w-full md:w-auto scrollbar-none"
          >
            {VIEW_CATEGORIES.map((cat) => {
              const isActive = selectedSubCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedSubCategory(cat)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-colors duration-300 cursor-pointer border overflow-hidden ${
                    isActive
                      ? "border-[#1E3A8A] bg-transparent"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeViewCategory"
                      className="absolute inset-0 bg-[#1E3A8A] shadow-md shadow-[#1E3A8A]/15"
                      style={{ borderRadius: "8px" }}
                      transition={{ type: "spring" as const, stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Search bar */}
          <motion.div
            variants={controlItemVariants}
            className="relative w-full md:w-72"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search thoughts & articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#1E3A8A] focus:bg-white focus:shadow-md focus:shadow-[#1E3A8A]/5 transition-all duration-300"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Views Grid */}
      <section className="py-16">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32">
          <div className="relative flex flex-col gap-12 w-full max-w-4xl mx-auto pb-48">
            <AnimatePresence mode="popLayout">
              {filteredViews.length > 0 ? (
                filteredViews.map((item, idx) => {
                  const isQuote = item.type === "Quotes";
                  return (
                    <StackingCard
                      key={item.id}
                      item={item}
                      index={idx}
                      total={filteredViews.length}
                      isQuote={isQuote}
                    />
                  );
                })
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full bg-white border border-slate-200/50 rounded-2xl p-12 text-center text-slate-400 font-bold"
                >
                  No items match your query.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
