"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Calendar, Video, Newspaper, MessageSquare, Play, HelpCircle, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const MEDIA_ITEMS = [
  { id: 1, type: "News", title: "Shri Krishna Pal inaugurates municipal water purification systems in Ahmedabad", date: "2026-06-18", summary: "Providing fresh water supply connections to over 40,000 households in suburb blocks.", source: "National Daily", img: "/niper_ahmedabad.png" },
  { id: 2, type: "Press Release", title: "MHA issues safety directives for high-altitude border highways", date: "2026-06-15", summary: "Standard operational parameters outlined to ensure bridge safety in strategic village roads.", source: "Home Ministry Desk", img: "/north_block.png" },
  { id: 3, type: "Interview", title: "Exclusive: Policy initiatives for computerizing PACS credit grids", date: "2026-06-12", summary: "A comprehensive roadmap outlining digital dairy records and farmer finance safety nets.", source: "Cooperation Review", img: "/bank_ledger.png", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, type: "Media Coverage", title: "Home Minister reviews drone-monitoring setups at western outposts", date: "2026-06-08", summary: "High-level security evaluation conducted at border regions to evaluate drone infrastructure.", source: "Times of India", img: "/hero_leader.png" },
];

export default function PressRedesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredItems = MEDIA_ITEMS.filter((item) => {
    const matchesCat = activeCategory === "All" || item.type === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-100/15 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-orange-100/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* 1. HERO BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-900">
          <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-extrabold text-[9px] uppercase tracking-widest">
              <Newspaper className="w-3.5 h-3.5 text-[#E25822]" />
              News, Press & Media Desk
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Press Room & <span className="text-blue-500 italic font-medium">Media</span> Archive
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Stay updated with the latest press releases, official media briefings, video statements, and newspaper clippings.
            </p>
          </div>
        </div>

        {/* SEARCH & CATEGORY BAR */}
        <section className="bg-white border border-slate-200/60 shadow-lg shadow-slate-100/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto shrink-0 pb-1 scrollbar-none">
            {["All", "News", "Press Release", "Interview", "Media Coverage"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer select-none whitespace-nowrap",
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
            />
          </div>
        </section>

        {/* 2. LATEST NEWS & 3. PRESS RELEASES & 4. INTERVIEWS & 5. COVERAGE */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const hasVideo = !!item.videoUrl;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-video bg-slate-100 overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="400px"
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-slate-950/70 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider z-20">
                        {item.type}
                      </div>

                      {hasVideo && (
                        <button
                          onClick={() => setActiveVideo(item.videoUrl!)}
                          className="absolute inset-0 flex items-center justify-center bg-slate-950/30 hover:bg-slate-950/40 transition-colors group cursor-pointer"
                        >
                          <span className="w-12 h-12 rounded-full bg-[#E25822] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <Play className="w-5 h-5 fill-current translate-x-0.5" />
                          </span>
                        </button>
                      )}
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          {item.date}
                        </span>
                        <span>{item.source}</span>
                      </div>
                      <h3 className="text-base font-bold font-serif text-slate-900 leading-snug">{item.title}</h3>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">{item.summary}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* 6. VIDEOS SECTION GALLERY */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold font-serif text-slate-900 border-b border-slate-100 pb-3 leading-none">Video Briefings</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {MEDIA_ITEMS.filter(m => m.videoUrl).map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item.videoUrl!)}
                className="group relative rounded-xl overflow-hidden aspect-video bg-slate-100 border border-slate-200/60 shadow-sm cursor-pointer"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white fill-current opacity-80 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO LIGHTBOX OVERLAY */}
        <AnimatePresence>
          {activeVideo && (
            <div
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-10"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              >
                <video
                  src={activeVideo}
                  autoPlay
                  controls
                  playsInline
                  className="w-full aspect-video"
                />
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
