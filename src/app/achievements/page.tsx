"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle, Calendar, Users, Star, Quote, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";

const COUNTERS = [
  { val: "63,000+", label: "PACS Computerized", desc: "Cooperative societies connected to central ERP lines." },
  { val: "2,100 Km+", label: "Village Highways", desc: "Strategic double-lane grid expansions." },
  { val: "15,000+", label: "Grievances Resolved", desc: "Digital public redressal portal tickets audited." },
];

const MAJOR_ACHIEVEMENTS = [
  { title: "Cooperative Credit Revitalization", category: "Cooperation", desc: "Launched interest-subvented financing structures that bypass middle-tier channels, crediting funds straight to farmers." },
  { title: "Border Village Security Infrastructure", category: "National Security", desc: "Installed drone outposts, cellular towers, and double-lane roads across strategic boundaries." },
  { title: "Citizen Penal Code Modernization", category: "Legislative Reform", desc: "Oversaw the transition of old colonial criminal codes into Bharatiya Nyaya Sanhita systems." },
];

const COMPLETED_PROJECTS = [
  { name: "Sinnar Smart School Network", date: "2025", desc: "Deployed smart chemistry/cyber labs inside 15 block schools." },
  { name: "Regional Milk Cold Storage Chiller", date: "2024", desc: "Installed centralized 5-metric-ton coolers for local milk cooperatives." },
  { name: "Emergency Trauma Dispensary", date: "2025", desc: "Upgraded block municipal health units to secure trauma diagnostics." },
];

const TESTIMONIALS = [
  { user: "Ramesh Thorat (Cooperative Farmer)", text: "Thanks to PACS digital ERP, I got crop loan confirmation directly on my mobile within 4 hours. No broker fees." },
  { user: "Sunita Deshmukh (Village Teacher)", text: "The new smart lab allows students to access forensic science mock modules, sparking scientific curiosity locally." }
];

export default function Achievements() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-100/10 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-orange-100/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* HERO BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-900">
          <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-extrabold text-[9px] uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 text-[#E25822]" />
              Track Record of Achievements
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Milestones of <span className="text-blue-500 italic font-medium">Reforms</span> & Delivery
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              An inventory of developmental project delivery, cooperative digitization, and awards.
            </p>
          </div>
        </div>

        {/* ACHIEVEMENT COUNTER */}
        <section className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          {COUNTERS.map((item, idx) => (
            <div key={idx} className="space-y-1 md:border-r border-slate-100 last:border-0 pr-4">
              <span className="text-3xl sm:text-4xl font-extrabold font-serif text-[#E25822] block leading-none">
                {item.val}
              </span>
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider block">{item.label}</span>
              <p className="text-[10px] text-slate-500 font-semibold leading-relaxed mt-1">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* MAJOR ACHIEVEMENTS */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 border-b border-slate-150 pb-4">Major Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MAJOR_ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 shadow-sm rounded-2xl p-6 sm:p-8 space-y-4 text-left">
                <span className="text-[8px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                  {ach.category}
                </span>
                <h3 className="text-base font-bold font-serif text-slate-900 leading-snug">{ach.title}</h3>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">{ach.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AWARDS & RECOGNITION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-base font-black text-slate-800 uppercase tracking-widest font-serif border-b border-slate-100 pb-3">Official Awards</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Sahkar Seva Gold Medal</h4>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Presented for automating dairy and agriculture credit transactions globally.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Vibrant Border Village Builder</h4>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Honored for connecting strategic villages along security zones.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
            <Quote className="w-8 h-8 text-[#E25822] animate-pulse" />
            <h3 className="text-base font-black text-white uppercase tracking-widest font-serif leading-none">Public Recognition</h3>
            <blockquote className="text-slate-300 text-xs sm:text-sm font-semibold italic leading-relaxed">
              "The speed of PACS credit release has removed Middlemen commissions entirely. Farmers are receiving their seed approvals instantly, bringing economic stability to our fields."
            </blockquote>
          </div>
        </section>

        {/* COMPLETED PROJECTS */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 border-b border-slate-150 pb-4">Completed Projects Tracker</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLETED_PROJECTS.map((proj, idx) => (
              <div key={idx} className="bg-white/80 border border-slate-200/60 shadow-lg shadow-slate-100/20 rounded-2xl p-6 text-left flex flex-col justify-between min-h-[160px]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#E25822]">{proj.date}</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">Completed</span>
                  </div>
                  <h4 className="text-sm font-bold font-serif text-slate-900 leading-snug">{proj.name}</h4>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 border-b border-slate-150 pb-4">Citizen Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm text-left space-y-4">
                <p className="text-slate-600 text-xs sm:text-sm font-semibold italic">"{t.text}"</p>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-[10px] font-extrabold text-slate-800">{t.user}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
