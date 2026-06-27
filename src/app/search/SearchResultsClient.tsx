"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight, Calendar, Bookmark, FileText } from "lucide-react";
import { SEARCH_INDEX, SearchItem } from "@/lib/searchData";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Press", "Story", "View", "Stalwart", "Timeline"];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 17,
    },
  },
} as const;

export default function SearchResultsClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [localQuery, setLocalQuery] = useState(initialQuery);
  const [inputVal, setInputVal] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResults = useMemo(() => {
    if (!localQuery.trim()) return [];
    const keywords = localQuery.toLowerCase().split(/\s+/).filter(Boolean);
    
    return SEARCH_INDEX.filter((item) => {
      // Filter by category
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      
      // Match keywords in title, description, category, or metadata
      const textToSearch = `${item.title} ${item.description} ${item.category} ${item.meta || ""}`.toLowerCase();
      return keywords.every((kw) => textToSearch.includes(kw));
    });
  }, [localQuery, selectedCategory]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocalQuery(inputVal);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 text-left">
      {/* 1. Header block */}
      <div className="relative bg-white border-b border-slate-100 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#E25822]/5 opacity-60 pointer-events-none" />
        
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 relative z-10">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E25822]">
            Search Portal
          </span>
          <h1 className="text-3xl font-extrabold font-serif text-black tracking-tight leading-tight mt-1 mb-6">
            Search Results
          </h1>

          {/* Refine Search Input Bar */}
          <form onSubmit={handleSearchSubmit} className="flex max-w-xl items-center gap-3">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Search statements, releases, milestones..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:bg-white focus:shadow-md focus:shadow-[#1E3A8A]/5 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* 2. Category Filters & Results block */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 mt-8">
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-1.5 pb-3 border-b border-slate-200/50 scrollbar-none mb-8">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === "All" 
              ? SEARCH_INDEX.filter(item => {
                  const keywords = localQuery.toLowerCase().split(/\s+/).filter(Boolean);
                  return keywords.every(kw => `${item.title} ${item.description} ${item.category} ${item.meta || ""}`.toLowerCase().includes(kw));
                }).length
              : SEARCH_INDEX.filter(item => {
                  if (item.category !== cat) return false;
                  const keywords = localQuery.toLowerCase().split(/\s+/).filter(Boolean);
                  return keywords.every(kw => `${item.title} ${item.description} ${item.category} ${item.meta || ""}`.toLowerCase().includes(kw));
                }).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-1.5 border ${
                  isSelected
                    ? "border-[#1E3A8A] text-white bg-[#1E3A8A] font-extrabold"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span>{cat === "All" ? "All Results" : cat}</span>
                <span className={`text-[10px] font-black rounded-md px-1.5 py-0.5 ${
                  isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results grid / feed */}
        <div>
          <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">
            Showing {filteredResults.length} {filteredResults.length === 1 ? "match" : "matches"} for &ldquo;{localQuery}&rdquo;
          </div>

          <AnimatePresence mode="popLayout">
            {filteredResults.length > 0 ? (
              <motion.div
                variants={feedContainerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6 max-w-4xl"
              >
                {filteredResults.map((item) => (
                  <motion.div
                    key={`${item.category}-${item.id}`}
                    variants={cardVariants}
                    className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Meta info header */}
                      <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest">
                        <span className="bg-[#1E3A8A]/5 text-[#1E3A8A] px-2.5 py-0.5 rounded border border-[#1E3A8A]/10">
                          {item.category}
                        </span>
                        {item.date && (
                          <span className="text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold font-serif text-black leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Link CTA */}
                    <div className="border-t border-slate-50 mt-5 pt-4 flex justify-end">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#E25822] transition-colors group cursor-pointer"
                      >
                        <span>View Statement</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white border border-slate-200/50 rounded-2xl p-12 text-center text-slate-400 font-bold max-w-4xl"
              >
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <div className="text-sm font-extrabold uppercase tracking-wider mb-1">No results found</div>
                <div className="text-xs font-medium text-slate-400 max-w-sm mx-auto">
                  Try checking spelling, removing filtering tags, or searching for other keywords (e.g. &ldquo;cooperative&rdquo;, &ldquo;border&rdquo;, &ldquo;reforms&rdquo;).
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
