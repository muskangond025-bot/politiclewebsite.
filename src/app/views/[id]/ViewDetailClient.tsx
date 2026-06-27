"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Share2,
  User,
  ShieldCheck,
  Mail,
  MapPin,
  Check,
  Copy,
  Download,
  BookOpen,
  FileText,
  Award,
  Newspaper,
  MessageSquare,
  Quote
} from "lucide-react";
import { motion } from "framer-motion";

interface ViewItem {
  id: number;
  type: string;
  date: string;
  title: string;
  summary: string;
  content: string;
  readTime: string;
  iconName: string;
  highlights: string[];
}

interface ViewDetailClientProps {
  item: ViewItem;
}

// Stagger variants for content sections
const detailsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
} as const;

const detailsChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18
    }
  }
} as const;

export default function ViewDetailClient({ item }: ViewDetailClientProps) {
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState("text-sm sm:text-base");

  const IconComponent = {
    Newspaper: Newspaper,
    MessageSquare: MessageSquare,
    Quote: Quote
  }[item.iconName as "Newspaper" | "MessageSquare" | "Quote"] || Newspaper;

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* 1. Header Block with Entry Slide */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white border-b border-slate-100 py-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#E25822]/5 opacity-60 pointer-events-none" />
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 relative z-10 text-left">
          <Link
            href="/views"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#E25822] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to My View
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-center flex-wrap">
                <span className="bg-[#E25822]/5 text-[#E25822] px-2.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider">
                  {item.readTime}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-black tracking-tight leading-tight max-w-4xl">
                {item.title}
              </h1>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1E3A8A]" />
                  Published {item.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Main Content Grid */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 mt-10">
        <motion.div
          variants={detailsContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Left Column: Briefing details & Highlights */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <motion.div
              variants={detailsChildVariants}
              className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
            >
              {/* Accessibility font-resizer */}
              <div className="flex items-center justify-end border-b border-slate-100 pb-4">
                <div className="flex items-center gap-1 p-1 border border-slate-200 rounded-lg bg-slate-50">
                  <button
                    onClick={() => setFontSize("text-xs")}
                    className={`px-2.5 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-all duration-200 ${
                      fontSize === "text-xs" ? "bg-[#1E3A8A] text-white shadow-sm" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize("text-sm sm:text-base")}
                    className={`px-2.5 py-0.5 rounded text-xs font-bold cursor-pointer transition-all duration-200 ${
                      fontSize === "text-sm sm:text-base" ? "bg-[#1E3A8A] text-white shadow-sm" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSize("text-base sm:text-lg")}
                    className={`px-2.5 py-0.5 rounded text-sm font-bold cursor-pointer transition-all duration-200 ${
                      fontSize === "text-base sm:text-lg" ? "bg-[#1E3A8A] text-white shadow-sm" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    A++
                  </button>
                </div>
              </div>

              {/* Event Description Card */}
              <div className="border-l-4 border-[#E25822] bg-[#E25822]/5 p-4 rounded-r-xl">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#E25822] mb-1">Executive Summary</h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-semibold">
                  {item.summary}
                </p>
              </div>

              {/* Full Content */}
              <div className={`${fontSize} leading-relaxed text-slate-800 font-medium space-y-4`}>
                <p>{item.content}</p>
                <p>
                  Official analyses regarding these matters have been circulated to corresponding municipal directors, cooperative unions, and joint secretariats. Progress indicators, resource indicators, and updates will be logged under standard public information portals.
                </p>
              </div>

              {/* Highlights Bulletins */}
              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#1E3A8A]" />
                  Key Highlights & Outcomes
                </h4>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E25822] shrink-0 mt-2" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action tools */}
              <div className="border-t border-slate-100 pt-6 flex items-center justify-between gap-4 text-xs font-bold text-slate-500 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#E25822]" />
                  <span>Authorized Press Release</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#1E3A8A] hover:bg-slate-50 transition-all text-xs font-bold text-slate-600 hover:text-[#1E3A8A] cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`data:text/plain;charset=utf-8,${encodeURIComponent(item.title + "\n\n" + item.content)}`}
                    download={`${item.title.toLowerCase().replace(/\s+/g, "_")}.txt`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#E25822] hover:bg-slate-50 transition-all text-xs font-bold text-slate-600 hover:text-[#E25822] cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download TXT</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Author Card, contacts & portals */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Leader Profile Box */}
            <motion.div
              variants={detailsChildVariants}
              className="bg-white border border-slate-200/60 rounded-3xl p-6 text-left shadow-sm space-y-4 overflow-hidden relative"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/5 text-[#1E3A8A] flex items-center justify-center font-bold text-xs">
                  <User className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black leading-tight">
                    Shri Krishna Pal
                  </h4>
                  <div className="text-[9px] text-[#E25822] font-extrabold uppercase tracking-wide">
                    Union Home Minister
                  </div>
                </div>
              </div>
              <div className="bg-slate-50/70 border-l-2 border-[#1E3A8A] p-3.5 rounded-r-xl text-xs text-slate-600 font-semibold italic leading-relaxed">
                &ldquo;Our focus remains steadfast on rural empowerment, national security reforms, and transparent civic utility workflows.&rdquo;
              </div>
            </motion.div>

            {/* Authenticity verification stamp */}
            <motion.div
              variants={detailsChildVariants}
              whileHover={{
                boxShadow: "0 15px 30px -10px rgba(30, 58, 138, 0.12)",
                borderColor: "rgba(30, 58, 138, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-left text-slate-300 relative overflow-hidden group transition-colors duration-300"
            >
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
                <ShieldCheck className="w-36 h-36 text-white" />
              </div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#E25822] block mb-2">Portal Verification Index</span>
              <h4 className="text-sm font-bold font-serif text-white mb-3">Official Record</h4>
              <p className="text-[11px] leading-relaxed text-slate-400 font-medium mb-4">
                This document is verified and officially published under the public registry guidelines. Checksum status confirmed.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                <Check className="w-3.5 h-3.5" />
                <span>Registry Stamp Confirmed</span>
              </div>
            </motion.div>

            {/* Media desk contacts */}
            <motion.div
              variants={detailsChildVariants}
              className="bg-white border border-slate-200/60 rounded-3xl p-6 text-left shadow-sm space-y-4"
            >
              <h4 className="text-xs font-black uppercase tracking-wider text-black border-b border-slate-100 pb-2.5">
                Media & Press Contacts
              </h4>
              <div className="space-y-3.5">
                <div className="flex gap-3 items-start">
                  <Mail className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Email Desk</div>
                    <a href="mailto:hm@mha.gov.in" className="text-xs font-bold text-slate-700 hover:text-[#1E3A8A] transition-colors duration-300">
                      hm@mha.gov.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-[#E25822] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Address Registry</div>
                    <div className="text-xs font-bold text-slate-700 leading-normal">
                      North Block, Cabinet Secretariat, New Delhi, 110001
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
