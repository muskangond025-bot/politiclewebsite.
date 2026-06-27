"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, MapPin, Image as ImageIcon, Award, Sparkles, ArrowRight, ArrowUpRight, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const GATEWAY_ITEMS = [
  {
    id: "manifesto",
    title: "Election Manifesto",
    tagline: "Our Vision & Sector Commitments",
    desc: "A comprehensive roadmap outlining our promises for education, healthcare, infrastructure, and rural digitization.",
    href: "/explore/manifesto",
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-orange-500/10",
    icon: BookOpen,
  },
  {
    id: "constituency",
    title: "Constituency Profile",
    tagline: "Explore Demographics & Villages",
    desc: "A detailed breakdown of important landmarks, statistics, villages catalog, and local healthcare/education setups.",
    href: "/explore/constituency",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/10",
    icon: MapPin,
  },
  {
    id: "gallery",
    title: "Visual Gallery",
    tagline: "Event Photo Albums & Keynote Videos",
    desc: "Experience developmental briefings, spiritual ceremonies, and public interactions through lightboxed media captures.",
    href: "/explore/gallery",
    color: "from-sky-500 to-blue-600",
    shadow: "shadow-sky-500/10",
    icon: ImageIcon,
  },
  {
    id: "volunteer",
    title: "Volunteer Network",
    tagline: "Support & Amplify Reform Activities",
    desc: "Become a digital campaign driver. Choose your interest sectors, select your weekly availability, and register online.",
    href: "/explore/volunteer",
    color: "from-rose-500 to-red-600",
    shadow: "shadow-rose-500/10",
    icon: Award,
  },
  {
    id: "suggest-idea",
    title: "Suggest an Idea",
    tagline: "Citizen Feedback, Polls & Surveys",
    desc: "Vote in policy opinion polls, submit ideas, upload feedback attachments, and build local constituency initiatives together.",
    href: "/explore/suggest-idea",
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/10",
    icon: Sparkles,
  },
];

export default function ExploreIndex() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-100/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-orange-100/10 blur-[120px]" />
        
        {/* Grids */}
        <div className="absolute inset-0 flex justify-between px-6 max-w-7xl mx-auto opacity-[0.05] border-x border-slate-900/10">
          <div className="w-[1px] bg-slate-900/20 h-full hidden md:block" />
          <div className="w-[1px] bg-slate-900/20 h-full hidden md:block" />
          <div className="w-[1px] bg-slate-900/20 h-full hidden md:block" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        {/* Title Section */}
        <div className="space-y-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-extrabold text-[10px] uppercase tracking-widest shadow-sm"
          >
            <Compass className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
            Interactive Campaign Hub
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 font-serif leading-[1.1]"
          >
            Explore <span className="text-blue-600 italic font-medium">Reforms</span> & Initiatives
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-medium leading-relaxed"
          >
            Get involved in the nation-building vision. Select a portal below to browse our manifesto commits, local constituency analytics, media libraries, and digital volunteer operations.
          </motion.p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GATEWAY_ITEMS.map((item, index) => {
            const Icon = item.icon;
            // Alternating grid layouts for premium asymmetrical flow
            const isFullOnLarge = index === 3 || index === 4;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={cn(
                  "group relative bg-white/75 backdrop-blur-md border border-slate-200/60 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg",
                  item.shadow,
                  isFullOnLarge ? "lg:col-span-1" : ""
                )}
              >
                {/* Visual side highlights */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-500/5 to-transparent rounded-bl-3xl pointer-events-none" />

                <div className="space-y-6">
                  {/* Icon Badge */}
                  <div className={cn(
                    "w-12 h-12 rounded-2xl bg-gradient-to-tr flex items-center justify-center text-white shadow-md",
                    item.color
                  )}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  {/* Header info */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none block">
                      {item.tagline}
                    </span>
                    <h2 className="text-xl font-bold font-serif text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Entry CTA */}
                <div className="pt-8 border-t border-slate-100/60 flex items-center justify-end">
                  <Link href={item.href} className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors cursor-pointer select-none">
                    Enter Section
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
