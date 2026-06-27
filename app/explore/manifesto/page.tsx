"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, CheckCircle, ChevronDown, Download, Share2, Shield, Heart, GraduationCap, Users, HardHat, TreePine, Briefcase, Leaf, Sparkles, Tractor } from "lucide-react";
import { cn } from "@/lib/utils";

// Sector promises mock data
const SECTOR_COMMITMENTS = [
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50/40 border-blue-100",
    text: "text-blue-700",
    bullets: [
      "Establishment of 50 new digital schools in under-served rural blocks.",
      "Launch of interest-free educational loans for forensic science & cybersecurity diplomas.",
      "Setting up 12 district-level smart labs in partnership with NFSU.",
      "Digital tablets and high-speed satellite Wi-Fi connections for government high schools."
    ],
    highlight: "Enabling regional youth to acquire high-tech administrative and forensic skills locally."
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Heart,
    color: "from-red-500 to-rose-600",
    bg: "bg-rose-50/40 border-rose-100",
    text: "text-rose-700",
    bullets: [
      "Upgrading all local district dispensaries into specialized critical trauma care units.",
      "Deployment of 100 mobile health diagnostic clinics offering free screenings.",
      "Establishing direct-benefit health cover of up to ₹10 Lakhs for senior cooperative farm members.",
      "Digital medical lockers linking local health records to central medical systems."
    ],
    highlight: "Restructuring municipal health units to provide instant specialized trauma assistance."
  },
  {
    id: "agriculture",
    label: "Agriculture",
    icon: Tractor,
    color: "from-amber-500 to-yellow-600",
    bg: "bg-amber-50/40 border-amber-100",
    text: "text-amber-700",
    bullets: [
      "PACS computerization linking every farming unit directly to interest-subvented credit lines.",
      "Setting up 5 specialized cold storage chillers for perishable horticulture outputs.",
      "Establishing centralized seed testing laboratories to provide verified organic certified seeds.",
      "Subsidies on modern solar pumps and drip-irrigation pipeline connections."
    ],
    highlight: "Eliminating middlemen through automated weight checks and direct-to-bank milk payouts."
  },
  {
    id: "employment",
    label: "Employment",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50/40 border-emerald-100",
    text: "text-emerald-700",
    bullets: [
      "Setting up local startup incubation clusters offering interest-subvented equipment credits.",
      "Skills mapping programs linking ITI vocational outputs directly to strategic border road firms.",
      "Targeted training grants for women running local micro-dairy processing centers.",
      "Quarterly district job fairs integrated with regional corporate databases."
    ],
    highlight: "Creating sustainable livelihood opportunities to arrest rural-to-urban youth migration."
  },
  {
    id: "women",
    label: "Women Empowerment",
    icon: Users,
    color: "from-purple-500 to-fuchsia-600",
    bg: "bg-purple-50/40 border-purple-100",
    text: "text-purple-700",
    bullets: [
      "Special credit cards providing up to ₹3 Lakhs interest-free business capital for women self-help groups.",
      "Mandatory 50% representation guidelines inside local municipal cooperative councils.",
      "Setting up village CCTV networks and safety panic pillars monitored by local police.",
      "Free medical checking camps focused on rural maternal health parameters."
    ],
    highlight: "Positioning women at the forefront of agricultural banking and civic boards."
  },
  {
    id: "youth",
    label: "Youth Development",
    icon: Sparkles,
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50/40 border-sky-100",
    text: "text-sky-700",
    bullets: [
      "Establishing 10 fully funded youth adventure training institutes in border villages.",
      "Interest-free technology start-up seed capital schemes for tech graduates.",
      "Special sports coaching academies offering national-level sports preparation clinics.",
      "Youth representation committees linked directly to the constituency grievance portal."
    ],
    highlight: "Unlocking innovation potentials and promoting leadership roles among district youth."
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    icon: HardHat,
    color: "from-slate-700 to-slate-900",
    bg: "bg-slate-50/60 border-slate-200/60",
    text: "text-slate-800",
    bullets: [
      "All-weather double-lane road layouts linking terminal border villages.",
      "24x7 grid power systems backed by solar power storage centers.",
      "Clean tap water lines connected to every household under the water audit scheme.",
      "Expanding district warehouse storage hubs to store excess agricultural produce."
    ],
    highlight: "Connecting remote regions with modern strategic transport and energy networks."
  },
  {
    id: "environment",
    label: "Environment",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50/40 border-green-100",
    text: "text-green-700",
    bullets: [
      "Establishing organic farming corridors along the regional river basin.",
      "Installing solar grids to supply clean energy to local government buildings.",
      "Wastewater recycling setups in municipal suburbs to recharge local aquifers.",
      "Afforestation layouts along strategic highways to prevent soil erosion and landslides."
    ],
    highlight: "Ensuring constituency development remains structurally sustainable and green."
  }
];

const TRACKER_ITEMS = [
  { title: "PACS Cloud Digitization", progress: 95, status: "Near Completion", desc: " ERP software successfully active across 63,000 credit cooperatives." },
  { title: "Border Village Roadways", progress: 80, status: "In Progress", desc: "All-weather double-lane layout connection completed across 2,100 villages." },
  { title: "Forensic Mobile Vans", progress: 70, status: "In Progress", desc: "1,200 specialized laboratory vans rolling out to secure crime scene forensics." },
  { title: "Jan Aushadhi Welfare Units", progress: 100, status: "Completed", desc: "Dedicated generic medicine shops active inside every cooperative depot." },
];

const FAQS = [
  { q: "How is the manifesto progress monitored?", a: "We publish a quarterly audit report detailing the implementation stages of each sector promise, backed by active progress metrics." },
  { q: "What is the primary objective of PACS computerization?", a: "PACS computerization aims to bring transparency and swift credit approval to marginal farmers, bypassing middlemen and linking credit directly to bank accounts." },
  { q: "How does the Vibrant Villages Programme secure border zones?", a: "By installing solar power, all-weather roads, and cellular connectivity, we support local communities, arresting migration and naturally strengthening national security lines." }
];

export default function Manifesto() {
  const [activeTab, setActiveTab] = useState("education");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentSector = SECTOR_COMMITMENTS.find((s) => s.id === activeTab)!;
  const SectorIcon = currentSector.icon;

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-100/10 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-orange-100/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* HERO BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#E25822]/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-extrabold text-[9px] uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5 text-[#E25822] animate-pulse" />
              Sovereignty, Growth & Security
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-tight">
              Sankalp Patra: Election <span className="text-blue-500 italic font-medium">Manifesto</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
              Our official commitments to the citizens of India. Guided by the values of transparent rural administration, self-reliant cooperatives, advanced security tech, and constituency welfare.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => alert("Downloading manifesto PDF (demo link successfully triggered).")}
                className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer select-none"
              >
                <Download className="w-4 h-4" />
                Download PDF Manifesto
              </button>
            </div>
          </div>
        </div>

        {/* SECTOR-WISE COMMITMENTS (UNIQUE DYNAMIC SWITCHER) */}
        <section className="space-y-8">
          <div className="border-b border-slate-200/60 pb-4 text-center sm:text-left">
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">
              Sector-Wise Commitments
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">
              Select a category sector to view detailed initiatives and welfare commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector menu (Cols 4) */}
            <div className="lg:col-span-4 flex flex-col gap-1.5 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin">
              {SECTOR_COMMITMENTS.map((s) => {
                const isActive = activeTab === s.id;
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={cn(
                      "w-full text-left flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer select-none",
                      isActive
                        ? "bg-white border-blue-200 shadow-md shadow-slate-100 font-extrabold text-blue-600"
                        : "bg-white/40 border-slate-150 text-slate-600 hover:bg-white/80 hover:text-slate-800"
                    )}
                  >
                    <Icon className={cn(
                      "w-5 h-5",
                      isActive ? "text-blue-600" : "text-slate-400"
                    )} />
                    <span className="text-xs uppercase tracking-wider font-extrabold">{s.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right details card container (Cols 8) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSector.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "rounded-3xl border p-8 sm:p-10 text-left flex flex-col justify-between min-h-[320px] bg-white shadow-xl shadow-slate-100/30",
                    currentSector.bg
                  )}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-xl bg-gradient-to-tr flex items-center justify-center text-white shadow-sm",
                        currentSector.color
                      )}>
                        <SectorIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold font-serif text-slate-900">{currentSector.label} Commitments</h3>
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-3.5">
                      {currentSector.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium leading-relaxed">
                          <CheckCircle className={cn("w-4.5 h-4.5 flex-shrink-0 mt-0.5", currentSector.text)} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights Callout footer */}
                  <div className="mt-8 pt-6 border-t border-slate-200/50 text-xs italic font-semibold text-slate-500">
                    <span className="font-extrabold uppercase tracking-wider text-slate-400 block not-italic text-[9px] mb-1">
                      Key Objective
                    </span>
                    "{currentSector.highlight}"
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* PROGRESS TRACKER */}
        <section className="space-y-8 max-w-5xl mx-auto">
          <div className="border-b border-slate-200/60 pb-4 text-center">
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">
              Manifesto Delivery Tracker
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">
              Follow real-time audit milestones and completion updates of our core commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {TRACKER_ITEMS.map((item, index) => {
              const isCompleted = item.progress === 100;
              return (
                <div key={index} className="bg-white/80 border border-slate-200/60 shadow-lg shadow-slate-100/40 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-800 font-serif leading-none">{item.title}</h3>
                    <span className={cn(
                      "px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider border",
                      isCompleted
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                        : "bg-blue-50 border-blue-250 text-blue-700"
                    )}>
                      {item.status}
                    </span>
                  </div>

                  <p className="text-slate-500 text-xs font-medium leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      <span>Status</span>
                      <span className="font-black text-slate-700">{item.progress}%</span>
                    </div>
                    {/* Custom progress track */}
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={cn(
                          "h-full rounded-full",
                          isCompleted ? "bg-emerald-500" : "bg-blue-600"
                        )}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ACCORDION FAQ */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="border-b border-slate-200/60 pb-4 text-center">
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 text-left">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white/80 border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm shadow-slate-100">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left flex items-center justify-between p-5 font-bold text-slate-800 hover:text-blue-600 text-sm font-serif transition-colors cursor-pointer select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={cn(
                      "w-4 h-4 text-slate-400 transition-transform duration-300",
                      isOpen && "rotate-180 text-blue-600"
                    )} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed border-t border-slate-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
