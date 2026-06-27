"use client";

import React, { useState } from "react";
import { Search, ShieldAlert, Award, FileText, CheckCircle2, ChevronRight, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SCHEMES = [
  {
    id: 1,
    name: "Sahkar Se Samriddhi Digital Credit",
    category: "Cooperative Lending",
    benefits: "Interest-free crop loans up to ₹3 Lakhs, direct-to-bank ledger payouts.",
    eligibility: "Marginal farmers owning verified agricultural lands linked to local PACS nodes.",
    documents: "PACS Membership Card, Land Revenue Record (7/12 Extract), Aadhaar Card.",
    desc: "A digitized financing credit line bypassing intermediaries to provide seeds and organic fertilizers support directly to verified cooperative members."
  },
  {
    id: 2,
    name: "Pradhan Mantri Vibrant Villages Scheme",
    category: "Border Welfare",
    benefits: "Free 24x7 solar pump setups, satellite Wi-Fi outposts, and double-lane highway access.",
    eligibility: "Permanent households registered under notified terminal border village wards.",
    documents: "Domicile Certificate, Village Panchayat Registry Copy, Aadhaar Card.",
    desc: "A national security initiative aimed at developing border villages infrastructure, preventing outward youth migration."
  },
  {
    id: 3,
    name: "Sinnar Smart Education Tablet Distribution",
    category: "Education",
    benefits: "Free android education tablet loaded with biochem and cybersecurity tools, free 2GB/day data.",
    eligibility: "Students scoring over 75% in municipal high schools within Sinnar block.",
    documents: "School Marksheet Copy, Parent Income Certificate, Block Residency Proof.",
    desc: "Providing digital educational tools to underprivileged local students, matching forensic science curricula."
  }
];

export default function GovernmentSchemes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedScheme, setSelectedScheme] = useState<typeof SCHEMES[0] | null>(null);

  const filteredSchemes = SCHEMES.filter((s) => {
    const matchesCat = activeCategory === "All" || s.category === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
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
        
        {/* HERO BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-900">
          <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-extrabold text-[9px] uppercase tracking-widest">
              <FileText className="w-3.5 h-3.5 text-[#E25822] animate-pulse" />
              Welfare Schemes & Applications
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Government <span className="text-blue-500 italic font-medium">Schemes</span> Hub
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Search welfare schemes, verify documents, evaluate eligibility parameters, and submit applications online.
            </p>
          </div>
        </div>

        {/* SEARCH & CATEGORY BAR */}
        <section className="bg-white border border-slate-200/60 shadow-lg shadow-slate-100/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto shrink-0 pb-1 scrollbar-none">
            {["All", "Cooperative Lending", "Border Welfare", "Education"].map((cat) => (
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

          <div className="relative w-full sm:w-64">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search scheme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
            />
          </div>
        </section>

        {/* FEATURED SCHEMES & LIST DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: SCHEMES LIST (Cols 8) */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 border-b border-slate-100 pb-3 leading-none">Featured Schemes</h2>
            <div className="space-y-4">
              {filteredSchemes.map((s) => (
                <div key={s.id} className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between md:flex-row md:items-center gap-6 text-left hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <span className="text-[8px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded inline-block">
                      {s.category}
                    </span>
                    <h3 className="text-base font-bold font-serif text-slate-900 leading-snug">{s.name}</h3>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">{s.desc}</p>
                  </div>

                  <button
                    onClick={() => setSelectedScheme(s)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors shrink-0 cursor-pointer select-none"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: DYNAMIC DETAILS SIDEBAR (Cols 4) */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              {selectedScheme ? (
                <motion.div
                  key={selectedScheme.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left"
                >
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-serif leading-none border-b border-slate-100 pb-3">Scheme Guidelines</h3>
                  
                  <div className="space-y-4 text-xs font-medium">
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Eligibility Rules</span>
                      <p className="text-slate-600 leading-relaxed font-semibold">{selectedScheme.eligibility}</p>
                    </div>

                    <div className="space-y-1 border-t border-slate-100 pt-3">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Required Documents</span>
                      <p className="text-slate-600 leading-relaxed font-semibold">{selectedScheme.documents}</p>
                    </div>

                    <div className="space-y-1 border-t border-slate-100 pt-3">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Benefits Summary</span>
                      <p className="text-blue-600 leading-relaxed font-black">{selectedScheme.benefits}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => alert("Applying online (mock action trigger).")}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer select-none"
                  >
                    Apply Now
                  </button>
                </motion.div>
              ) : (
                <div className="bg-slate-50 border border-dashed border-slate-200 rounded-3xl p-8 text-center text-slate-400 font-bold text-xs uppercase tracking-wider">
                  Select a scheme to view eligibility and apply details.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </main>
  );
}
