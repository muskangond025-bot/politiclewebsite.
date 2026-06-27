"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Hammer, CheckCircle, Calendar, ArrowRight, DollarSign, PieChart, Activity, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const STATS = [
  { val: "₹1,240 Cr", label: "Budget Allocated", sub: "Annual audit verified" },
  { val: "84%", label: "Funds Disbursed", sub: "Direct-to-cooperative" },
  { val: "112", label: "Completed Projects", sub: "Across all sectors" },
];

const PROJECTS_DATA = [
  { id: 1, name: "PACS Central ERP Integration", status: "Ongoing", budget: "₹340 Cr", progress: 95, category: "Agriculture", desc: "Computerization of primary credit societies linking databases." },
  { id: 2, name: "Vibrant Border Road Grid", status: "Ongoing", budget: "₹520 Cr", progress: 80, category: "Infrastructure", desc: "High-grade road connectivity to the terminal western boundary lines." },
  { id: 3, name: "District Cyber Forensic lab", status: "Completed", budget: "₹120 Cr", progress: 100, category: "Security", desc: "Setting up automated malware audit blocks at forensic universities." },
  { id: 4, name: "Solar Irrigation Pumps", status: "Upcoming", budget: "₹180 Cr", progress: 0, category: "Agriculture", desc: "Distributing 15,000 subsidized pumps to cooperative societies." },
  { id: 5, name: "Suburban Dispensaries Upgrade", status: "Completed", budget: "₹80 Cr", progress: 100, category: "Healthcare", desc: "Trauma stabilization medical machines install inside municipal hubs." },
];

export default function DevelopmentProjects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Ongoing") return p.status === "Ongoing";
    if (filter === "Completed") return p.status === "Completed";
    if (filter === "Upcoming") return p.status === "Upcoming";
    return true;
  });

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-100/15 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-orange-100/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* HERO BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-900">
          <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-extrabold text-[9px] uppercase tracking-widest">
              <Hammer className="w-3.5 h-3.5 text-[#E25822] animate-pulse" />
              Constituency Infrastructure Projects
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Development <span className="text-blue-500 italic font-medium">Projects</span> Portal
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Track ongoing, completed, and upcoming municipal works, budget allocation schedules, and before/after details.
            </p>
          </div>
        </div>

        {/* STATISTICS CARD */}
        <section className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          {STATS.map((item, idx) => (
            <div key={idx} className="space-y-1 md:border-r border-slate-100 last:border-0 pr-4">
              <span className="text-3xl sm:text-4xl font-extrabold font-serif text-blue-600 block leading-none">
                {item.val}
              </span>
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider block">{item.label}</span>
              <span className="text-[10px] text-slate-400 font-semibold block leading-none">{item.sub}</span>
            </div>
          ))}
        </section>

        {/* PROJECT FILTER BAR & LIST CARDS */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-none">Projects Tracker</h2>
              <span className="text-[10px] text-slate-400 font-extrabold mt-1.5 uppercase tracking-wider block">Auditable milestones</span>
            </div>

            {/* Filter buttons */}
            <div className="flex gap-2 overflow-x-auto shrink-0 pb-1 scrollbar-none">
              {["All", "Ongoing", "Completed", "Upcoming"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer select-none whitespace-nowrap",
                    filter === opt
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-250 hover:bg-slate-50"
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT DETAIL CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => {
                const isCompleted = p.status === "Completed";
                const isOngoing = p.status === "Ongoing";

                return (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm min-h-[240px] text-left"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                          {p.category}
                        </span>
                        <span className={cn(
                          "px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider border",
                          isCompleted
                            ? "bg-emerald-50 border-emerald-250 text-emerald-700"
                            : isOngoing
                            ? "bg-blue-50 border-blue-200 text-blue-700"
                            : "bg-slate-50 border-slate-200 text-slate-500"
                        )}>
                          {p.status}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold font-serif text-slate-900 leading-snug">{p.name}</h3>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">{p.desc}</p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 mt-6 space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        <span>Budget Allocated</span>
                        <span className="text-slate-700 font-black">{p.budget}</span>
                      </div>

                      {/* Progress bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[9px] font-bold text-slate-400">
                          <span>Status</span>
                          <span>{p.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-500",
                              isCompleted ? "bg-emerald-500" : "bg-blue-600"
                            )}
                            style={{ width: `${p.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* BEFORE/AFTER GALLERY (COMPLETED WIDGET) */}
        <section className="space-y-8 bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-12 text-left">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-none">Before / After Showcase</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">Slide-reveal visual audits of completed municipal updates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Before state */}
            <div className="space-y-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none block">Historical State (2019)</span>
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/somnath_temple.png"
                  alt="Traditional Before Setup"
                  fill
                  sizes="400px"
                  className="object-cover opacity-70 filter grayscale"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
              </div>
            </div>

            {/* After state */}
            <div className="space-y-3">
              <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-widest leading-none inline-block">Modern Refurbished (2025)</span>
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-blue-200 bg-slate-100 shadow-md">
                <Image
                  src="/somnath_temple.png"
                  alt="Modern Clean Corridor"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
