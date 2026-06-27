"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, GraduationCap, Building2, Search, ArrowRight, X, Heart, Shield, Landmark, Map, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

// Demographics stats
const DEMOGRAPHICS = [
  { label: "Total Population", val: "1.8 Million", sub: "Census Estimate", icon: Users, color: "text-blue-600 bg-blue-50" },
  { label: "Literacy Rate", val: "84.5%", sub: "+4.2% since 2019", icon: GraduationCap, color: "text-emerald-600 bg-emerald-50" },
  { label: "Geographical Area", val: "4,250 Sq Km", sub: "Western Corridor", icon: MapPin, color: "text-amber-600 bg-amber-50" },
  { label: "Registered Villages", val: "148 Wards", sub: "100% Electrified", icon: Building2, color: "text-rose-600 bg-rose-50" },
];

// Sub-regions mock data for the Interactive SVG Map Hotspots
const SUB_REGIONS = [
  { id: "north", label: "North Sector (Administrative Center)", desc: "Home to municipal departments, central security control hubs, and NFSU training labs. Key center for police reform rollouts.", population: "450,000", development: "92%" },
  { id: "east", label: "East Sector (Industrial & Dairy Hub)", desc: "Hosts the largest cooperative dairy processing units and municipal water networks. Home to over 40 milk cooperatives.", population: "620,000", development: "88%" },
  { id: "south", label: "South Sector (Heritage & Agriculture)", desc: "Contains primary crop belts, organic cooperative farms, and historical Somnath temples. High concentration of solar pump grids.", population: "380,000", development: "85%" },
  { id: "west", label: "West Sector (Strategic Border Outpost)", desc: "Includes strategic border villages, Vibrant Villages highway grids, and drone outposts. Border developmental gateway.", population: "350,000", development: "80%" }
];

// Mock Village List
const MOCK_VILLAGES = [
  { name: "Alampur", population: "3,820", pacyDigitized: "Yes", utilityStatus: "100% Complete" },
  { name: "Bakrol", population: "5,400", pacyDigitized: "Yes", utilityStatus: "150 Solar Pumps" },
  { name: "Chhatral", population: "7,900", pacyDigitized: "Yes", utilityStatus: "Hospital Active" },
  { name: "Dhamatvan", population: "2,900", pacyDigitized: "No", utilityStatus: "Roads Layout" },
  { name: "Enasan", population: "4,100", pacyDigitized: "Yes", utilityStatus: "Digital School" },
  { name: "Geratpur", population: "1,850", pacyDigitized: "Yes", utilityStatus: "Cold Storage Active" },
  { name: "Harniav", population: "3,200", pacyDigitized: "Yes", utilityStatus: "100% Complete" },
  { name: "Jetalpur", population: "6,500", pacyDigitized: "Yes", utilityStatus: "PACS ERP Active" },
  { name: "Kanbha", population: "8,200", pacyDigitized: "Yes", utilityStatus: "Municipal Water Line" },
  { name: "Lali", population: "4,900", pacyDigitized: "Yes", utilityStatus: "Solar Grid Active" },
];

const LANDMARKS = [
  { title: "Somnath Heritage Complex", desc: "Spiritual epicenter attracting millions, undergoing cooperative tourism corridor upgrades.", img: "/somnath_temple.png" },
  { title: "NIPER Research Campus", desc: "State-of-the-art pharmaceutical research labs fostering youth science jobs.", img: "/niper_ahmedabad.png" },
  { title: "District Cooperative HQ", desc: "Central ledger control bank executing credit digitization and PACS audits.", img: "/bank_ledger.png" },
];

export default function Constituency() {
  const [activeRegion, setActiveRegion] = useState("north");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVillage, setSelectedVillage] = useState<typeof MOCK_VILLAGES[0] | null>(null);

  const regionInfo = SUB_REGIONS.find((r) => r.id === activeRegion)!;

  const filteredVillages = MOCK_VILLAGES.filter((v) =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-100/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-orange-100/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* HERO BANNER */}
        <div className="space-y-6 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-extrabold text-[10px] uppercase tracking-widest shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
            Gandhinagar Constituency Profile
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-slate-900 tracking-tight leading-[1.15]">
            Serving Our <span className="text-blue-600 italic font-medium">Constituents</span> Localized
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
            A comprehensive profile of Gandhinagar. Explore regional statistics, interactive development hotspots, and a comprehensive village database tracking infrastructure upgrades.
          </p>
        </div>

        {/* DEMOGRAPHICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMOGRAPHICS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/60 shadow-lg shadow-slate-100/30 rounded-2xl p-6 flex items-start gap-4 text-left">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner", stat.color)}>
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="text-slate-400 text-[9px] font-black uppercase tracking-widest leading-none block mb-1.5">
                    {stat.label}
                  </h3>
                  <div className="text-lg font-bold font-serif text-slate-900 leading-none mb-1">
                    {stat.val}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold leading-none">{stat.sub}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE REGION MAP (AWARDS-STYLE Hotspot SVG Grid) */}
        <section className="space-y-8 bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-12">
          <div className="border-b border-slate-150 pb-4">
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">
              Interactive Development Map
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">
              Hover over or click the map regions below to view demographics and key development stats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Interactive Vector Map Hotspots (Cols 6) */}
            <div className="lg:col-span-6 flex justify-center">
              <svg className="w-full max-w-[380px] h-auto drop-shadow-lg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* North Region */}
                <path
                  d="M200 40 L340 120 L270 200 L130 200 Z"
                  className={cn(
                    "cursor-pointer stroke-white stroke-2 transition-all duration-300",
                    activeRegion === "north" ? "fill-blue-600/90 filter drop-shadow" : "fill-blue-500/20 hover:fill-blue-500/40"
                  )}
                  onClick={() => setActiveRegion("north")}
                />
                <text x="210" y="120" className="fill-slate-800 text-[10px] font-black pointer-events-none uppercase tracking-wider font-serif">North</text>

                {/* East Region */}
                <path
                  d="M340 120 L380 280 L270 280 L270 200 Z"
                  className={cn(
                    "cursor-pointer stroke-white stroke-2 transition-all duration-300",
                    activeRegion === "east" ? "fill-blue-600/90 filter drop-shadow" : "fill-blue-500/20 hover:fill-blue-500/40"
                  )}
                  onClick={() => setActiveRegion("east")}
                />
                <text x="310" y="210" className="fill-slate-800 text-[10px] font-black pointer-events-none uppercase tracking-wider font-serif">East</text>

                {/* South Region */}
                <path
                  d="M270 280 L200 360 L60 280 L130 200 L270 200 Z"
                  className={cn(
                    "cursor-pointer stroke-white stroke-2 transition-all duration-300",
                    activeRegion === "south" ? "fill-blue-600/90 filter drop-shadow" : "fill-blue-500/20 hover:fill-blue-500/40"
                  )}
                  onClick={() => setActiveRegion("south")}
                />
                <text x="180" y="260" className="fill-slate-800 text-[10px] font-black pointer-events-none uppercase tracking-wider font-serif">South</text>

                {/* West Region */}
                <path
                  d="M130 200 L60 280 L20 120 L200 40 Z"
                  className={cn(
                    "cursor-pointer stroke-white stroke-2 transition-all duration-300",
                    activeRegion === "west" ? "fill-blue-600/90 filter drop-shadow" : "fill-blue-500/20 hover:fill-blue-500/40"
                  )}
                  onClick={() => setActiveRegion("west")}
                />
                <text x="80" y="140" className="fill-slate-800 text-[10px] font-black pointer-events-none uppercase tracking-wider font-serif">West</text>
              </svg>
            </div>

            {/* Right Column: Dynamic Region Data Card (Cols 6) */}
            <div className="lg:col-span-6 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRegion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-8 space-y-6 text-left"
                >
                  <h3 className="text-lg font-bold font-serif text-slate-900">{regionInfo.label}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {regionInfo.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/60">
                    <div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none block mb-1">
                        Est. Population
                      </span>
                      <span className="text-lg font-black text-slate-800 leading-none">{regionInfo.population}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none block mb-1">
                        Development Index
                      </span>
                      <span className="text-lg font-black text-blue-600 leading-none">{regionInfo.development}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* VILLAGES CATALOG SEARCH & DETAIL DRAWER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Villages Search Grid (Cols 8) */}
          <section className="lg:col-span-8 bg-white border border-slate-200/60 shadow-lg shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900 leading-none">Villages Catalog</h3>
                <span className="text-[10px] text-slate-400 font-extrabold mt-1.5 uppercase tracking-wider block">Gandhinagar Block</span>
              </div>

              {/* Search bar */}
              <div className="relative w-full sm:w-64">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-4 h-4 text-slate-400" />
                </span>
                <input
                  type="text"
                  placeholder="Search village name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {filteredVillages.map((village, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedVillage(village)}
                  className="text-left bg-slate-50 hover:bg-blue-50 border border-slate-200/60 hover:border-blue-200 rounded-xl p-4 transition-all duration-200 group cursor-pointer"
                >
                  <h4 className="text-xs font-black text-slate-800 group-hover:text-blue-600 leading-none mb-1.5 font-serif">{village.name}</h4>
                  <span className="text-[10px] text-slate-400 font-extrabold block uppercase tracking-wider leading-none">View Details →</span>
                </button>
              ))}
            </div>
          </section>

          {/* Right Column: Landmarks Carousel (Cols 4) */}
          <section className="lg:col-span-4 bg-white border border-slate-200/60 shadow-lg shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
            <h3 className="text-lg font-bold font-serif text-slate-900 border-b border-slate-100 pb-3 leading-none">Key Landmarks</h3>
            <div className="space-y-6">
              {LANDMARKS.map((item, idx) => (
                <div key={idx} className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 flex flex-col">
                  {/* Image container */}
                  <div className="relative w-full h-32 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Caption */}
                  <div className="p-4 bg-white flex flex-col space-y-1">
                    <h4 className="text-xs font-black text-slate-900 leading-tight font-serif">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* VILLAGES DETAILS MODAL / OVERLAY */}
        <AnimatePresence>
          {selectedVillage && (
            <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-6 shadow-2xl relative text-left space-y-6"
              >
                <button
                  onClick={() => setSelectedVillage(null)}
                  className="absolute top-4 right-4 p-1.5 border border-slate-150 hover:bg-slate-50 rounded-full text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1 pt-2">
                  <span className="text-[8px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 uppercase tracking-widest leading-none">
                    Village statistics
                  </span>
                  <h3 className="text-xl font-bold font-serif text-slate-900 leading-none pt-1">{selectedVillage.name}</h3>
                </div>

                <div className="space-y-3.5 text-xs font-medium text-slate-700">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-400">Total Population</span>
                    <span className="font-bold text-slate-900">{selectedVillage.population}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-400">PACS Cloud ERP Digitized</span>
                    <span className="font-bold text-slate-900">{selectedVillage.pacyDigitized}</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-slate-400">Infrastructure Upgrades</span>
                    <span className="font-bold text-blue-600">{selectedVillage.utilityStatus}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVillage(null)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer select-none"
                >
                  Close Details
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
