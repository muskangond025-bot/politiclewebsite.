"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, BookOpen, Award, Compass, Flag, Landmark, Heart, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const CORE_VALUES = [
  { title: "Grassroots Empathy", desc: "Forged through early RSS student days traveling to remote villages and listening to families." },
  { title: "Institutional Order", desc: "Focusing on building structured, permanent cooperative credit frameworks instead of personality hype." },
  { title: "Sovereignty First", desc: "Prioritizing national security and border integrity, ensuring border village stabilization programs." },
];

const TIMELINE_MILESTONES = [
  { year: "1964", role: "Upbringing", desc: "Born into a traditional Indian family in Mumbai; early study of regional history." },
  { year: "1980", role: "RSS Activist", desc: "Joined RSS and organized ground-level student groups under ABVP." },
  { year: "1997", role: "Elected MLA", desc: "Won Sarkhej assembly seat by a historic record-setting voter turnout margin." },
  { year: "2003", role: "Home Minister (State)", desc: "Youngest Home Minister in Gujarat; reformed police training structures." },
  { year: "2014", role: "BJP National President", desc: "Led nationwide campaigns expanding party membership base to over 100 Million." },
  { year: "2019", role: "Union Home Minister", desc: "Orchestrated key legislative changes including abrogation of Article 370." },
  { year: "2021", role: "Union Minister of Cooperation", desc: "Digitized 63,000 credit societies, launching Sahkar Se Samriddhi reforms." }
];

const PHOTO_COLLAGE = [
  { title: "NIPER Inauguration Setup", img: "/niper_ahmedabad.png" },
  { title: "Public Assemblies", img: "/speech_convention.png" },
  { title: "Speaker Om Birla Meeting", img: "/meeting_birla.png" },
  { title: "School Children Interaction", img: "/school_children.png" },
];

export default function AboutRedesign() {
  const [selectedPill, setSelectedPill] = useState("Journey");

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-100/10 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-orange-100/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* 1. HERO BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-900">
          <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-extrabold text-[9px] uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-[#E25822]" />
              Dedicated Public Servant
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Biography & <span className="text-blue-500 italic font-medium">Life</span> Journey
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              An inside look at the upbringing, education, early RSS activism, and legislative milestones of Shri Krishna Pal.
            </p>
          </div>
        </div>

        {/* 2. BIOGRAPHY & 3. EARLY LIFE & 4. EDUCATION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-none">Early Life & Raising</h2>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
                Born in 1964 in Mumbai into a traditional family, Shri Krishna Pal was raised on values of honesty and grassroots discipline. His mother instilled a respect for Gandhian self-reliance, which steered his early interest in regional cooperatives and traditional Indian music.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-none">Educational Foundation</h2>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
                He completed his degree in Biochemistry in Gujarat, training his mind in analytical rigor and systematic policy audits. This background in sciences later influenced his digital-first approach to computerizing PACS credit banks and deploying modern forensic technologies in state police units.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <Image
                src="/somnath_temple.png"
                alt="Traditional Roots"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 5. POLITICAL JOURNEY (INTERACTIVE TAB) */}
        <section className="space-y-8 bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-none">Political Journey</h2>
              <span className="text-[10px] text-slate-400 font-extrabold mt-1.5 uppercase tracking-wider block">Key developmental phases</span>
            </div>
            
            <div className="flex gap-2">
              {["Grassroots", "Cabinet MoS", "Union Home Cabinet"].map((pill) => (
                <button
                  key={pill}
                  onClick={() => setSelectedPill(pill)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer select-none",
                    selectedPill === pill
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 border border-slate-150 hover:bg-slate-100"
                  )}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          <div className="text-left text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed min-h-[100px]">
            {selectedPill === "Grassroots" && (
              <p>
                From 1980 to 1995, Shri Krishna Pal operated as a booth karyakarta, coordinating college union logistics and student assemblies. This phase shaped his core understanding of local elector demands and agricultural credit dependencies.
              </p>
            )}
            {selectedPill === "Cabinet MoS" && (
              <p>
                Serving as Gujarat's MoS for Home in 2003, he spearheaded strategic police reforms, modernized crime records, and introduced high-speed border safety measures across the Western corridor.
              </p>
            )}
            {selectedPill === "Union Home Cabinet" && (
              <p>
                Assuming the Home Ministry in 2019, he led historic decisions including abrogation of Article 370 and drafted citizen-centric Bharatiya Nyaya Sanhita criminal laws to replace colonial systems.
              </p>
            )}
          </div>
        </section>

        {/* 6. LEADERSHIP PHILOSOPHY & 7. PERSONAL VALUES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-slate-900 rounded-3xl p-8 text-left space-y-6 border border-slate-800">
            <Quote className="w-8 h-8 text-[#E25822]" />
            <h3 className="text-lg font-bold font-serif text-white">Leadership Philosophy</h3>
            <blockquote className="text-slate-300 text-xs sm:text-sm font-semibold italic leading-relaxed">
              "Leadership is not about personality milestones; it is about establishing robust, permanent systems that empower grassroots workers to digitize and manage their local communities independently."
            </blockquote>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 text-left space-y-6 shadow-lg shadow-slate-100/30">
            <h3 className="text-lg font-bold font-serif text-slate-900">Personal Values</h3>
            <div className="space-y-4">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">{val.title}</h4>
                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. AWARDS & RECOGNITION */}
        <section className="space-y-8 text-left">
          <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 border-b border-slate-100 pb-4">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 flex gap-4 shadow-sm">
              <Award className="w-10 h-10 text-amber-500 shrink-0" />
              <div>
                <h4 className="text-sm font-bold font-serif text-slate-900">Cooperative Leadership Excellence</h4>
                <p className="text-slate-500 text-xs font-semibold mt-1">Conferred in recognition of computerizing 65,000 PACS credit institutions nationwide.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 flex gap-4 shadow-sm">
              <Award className="w-10 h-10 text-amber-500 shrink-0" />
              <div>
                <h4 className="text-sm font-bold font-serif text-slate-900">National Integration Milestone Award</h4>
                <p className="text-slate-500 text-xs font-semibold mt-1">Awarded for legislative efforts in integrating Article 370 zones and reforming colonial-era justice codes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. TIMELINE MILESTONES */}
        <section className="space-y-8 text-left max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 border-b border-slate-100 pb-4 text-center">Milestones Stepper</h2>
          <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {TIMELINE_MILESTONES.map((m, idx) => (
              <div key={idx} className="relative pl-10 space-y-1">
                <span className="absolute left-1.5 top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm shrink-0" />
                <span className="text-xs font-black text-[#E25822]">{m.year}</span>
                <h4 className="text-sm font-bold font-serif text-slate-900">{m.role}</h4>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. PHOTO GALLERY */}
        <section className="space-y-8 text-left">
          <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 border-b border-slate-100 pb-4">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PHOTO_COLLAGE.map((p, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden aspect-video border border-slate-200 shadow-sm bg-slate-150">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 11. CTA */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-xl sm:text-3xl font-bold font-serif text-white">Join the Reform Movement</h2>
          <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Become a digital campaign driver, suggest local community ideas, or register your profile on the official volunteer network.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/explore/volunteer" className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer select-none">
              Register Volunteer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
