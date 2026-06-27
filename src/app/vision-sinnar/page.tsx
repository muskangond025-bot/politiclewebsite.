"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Target, Shield, Heart, GraduationCap, Briefcase, Building, Leaf, HelpCircle, ArrowRight, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const CORE_VALUES = [
  { title: "Transparency", desc: "Citizen-audited budgets and automated project timeline updates." },
  { title: "Inclusiveness", desc: "Bringing digital cooperative lending models to the smallest marginal farmer." },
  { title: "Sustainability", desc: "Solar-powered village grids and groundwater recharge audit schemes." },
];

const GOALS_SHORT = [
  "100% PACS computerization across local cooperative societies within 12 months.",
  "Installing 150 village-level solar pump grids for crop irrigation support.",
  "Deployment of 5 mobile medical diagnostic vans carrying advanced screening apparatus."
];

const GOALS_LONG = [
  "Establishing a unified cyber-forensics university research block in the district.",
  "Constructing all-weather double-lane road layouts to every border hamlet.",
  "Zero carbon emission rating across municipality administrative layouts."
];

const SECTOR_VISIONS = [
  { id: "infra", label: "Infrastructure", icon: Building, desc: "Building double-lane connecting highways, implementing water storage checks, and stabilizing grid networks." },
  { id: "edu", label: "Education", icon: GraduationCap, desc: "Setting up smart school labs in rural blocks and providing forensic education scholarships." },
  { id: "health", label: "Healthcare", icon: Heart, desc: "Upgrading all local dispensaries into trauma care units linked to computerized health logs." },
  { id: "agri", label: "Agriculture", icon: Leaf, desc: "Establishing PACS-ERP lines, setting up cold-storage units, and distributing organic seeds." },
  { id: "jobs", label: "Employment", icon: Briefcase, desc: "Setting up small business incubation cells and linking ITI graduates to highway construction firms." },
  { id: "smart", label: "Smart City", icon: Compass, desc: "Automating public complaints routing, installing village CCTV safety grids, and deploying solar chargers." },
];

export default function VisionSinnar() {
  const [activeSector, setActiveSector] = useState("infra");

  const sectorDetail = SECTOR_VISIONS.find((s) => s.id === activeSector)!;
  const SectorIcon = sectorDetail.icon;

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
              <Lightbulb className="w-3.5 h-3.5 text-[#E25822] animate-pulse" />
              Sankalp Se Siddhi Future Roadmap
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Vision for <span className="text-blue-500 italic font-medium">Sinnar</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Our comprehensive vision roadmap detailing strategic infrastructure, rural cooperatives, modern school networks, and clean energy.
            </p>
          </div>
        </div>

        {/* VISION & MISSION & CORE VALUES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Vision Statement
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
              "To establish Sinnar as a pioneer in digital agricultural cooperatives and eco-friendly rural infrastructure. We envision a community where every village has clean energy backup, every youth has vocational pathways, and every farm has digital credit access."
            </p>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-600" />
              Mission
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
              "Deploying smart agricultural tools, expanding solar-driven water pumps, modernizing public dispensaries, and computerizing rural bank ledgers to eliminate middle-tier friction."
            </p>
          </div>
        </section>

        {/* CORE VALUES CARDS */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold font-serif text-slate-900 border-b border-slate-100 pb-3 leading-none">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 space-y-2 shadow-sm text-left">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider font-serif">{val.title}</h3>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GOALS GRID: SHORT & LONG TERM */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Short-Term Goals */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-base font-black text-slate-800 uppercase tracking-widest font-serif border-b border-slate-100 pb-3">Short-Term Goals</h3>
            <ul className="space-y-3">
              {GOALS_SHORT.map((g, idx) => (
                <li key={idx} className="text-slate-600 text-xs sm:text-sm font-semibold flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Long-Term Goals */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-base font-black text-slate-800 uppercase tracking-widest font-serif border-b border-slate-100 pb-3">Long-Term Goals</h3>
            <ul className="space-y-3">
              {GOALS_LONG.map((g, idx) => (
                <li key={idx} className="text-slate-600 text-xs sm:text-sm font-semibold flex items-start gap-2.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E25822] mt-2 shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTOR-WISE VISION PANELS */}
        <section className="space-y-8">
          <div className="border-b border-slate-200/60 pb-4">
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">Sector-Wise Visions</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">Select a development segment to explore specialized initiatives.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left buttons array (Cols 4) */}
            <div className="lg:col-span-4 flex flex-col gap-1.5 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
              {SECTOR_VISIONS.map((s) => {
                const isActive = activeSector === s.id;
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSector(s.id)}
                    className={cn(
                      "w-full text-left flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer select-none",
                      isActive
                        ? "bg-white border-blue-200 shadow-md shadow-slate-100 font-extrabold text-blue-600"
                        : "bg-white/40 border-slate-150 text-slate-600 hover:bg-white/80"
                    )}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="text-xs uppercase tracking-wider font-extrabold">{s.label} Vision</span>
                  </button>
                );
              })}
            </div>

            {/* Right details card (Cols 8) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sectorDetail.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl shadow-slate-100/30 text-left space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
                      <SectorIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-slate-900">{sectorDetail.label} Development Plan</h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
                    {sectorDetail.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-xl sm:text-3xl font-bold font-serif text-white">Join Our Vision Team</h2>
          <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Share feedback, suggest community ideas, or participate in active public opinion surveys.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/explore/suggest-idea" className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer select-none">
              Suggest an Idea
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
