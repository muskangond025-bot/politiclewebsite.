"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Share2,
  ShieldCheck,
  MapPin,
  Check,
  Copy,
  Download,
  BookOpen,
  FileText,
  Award,
  Video,
  Image as ImageIcon
} from "lucide-react";
import { motion } from "framer-motion";

interface MediaItem {
  id: number;
  type: string;
  category: string;
  state: string;
  date: string;
  title: string;
  shares: number;
  imageSrc: string;
  videoSrc?: string;
  description: string;
  highlights: string[];
}

interface GalleryDetailClientProps {
  item: MediaItem;
}

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

export default function GalleryDetailClient({ item }: GalleryDetailClientProps) {
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState("text-sm sm:text-base");
  const isVideo = item.type === "Videos";

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
        <div className="w-full pl-6 pr-12 sm:pl-12 sm:pr-20 md:pr-32 relative z-10 text-left">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#E25822] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Gallery
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-center flex-wrap">
                <span className="bg-[#1E3A8A]/5 text-[#1E3A8A] px-2.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                  {isVideo ? <Video className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                  {item.type}
                </span>
                <span className="bg-[#E25822]/5 text-[#E25822] px-2.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider">
                  {item.state}
                </span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider">
                  Category: {item.category}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-black tracking-tight leading-tight max-w-4xl">
                {item.title}
              </h1>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1E3A8A]" />
                  Briefing Dated {item.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Main Content Grid */}
      <div className="w-full pl-6 pr-12 sm:pl-12 sm:pr-20 md:pr-32 mt-10">
        <motion.div
          variants={detailsContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Left Column: Media Player & Content */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Visual media display container */}
            <motion.div
              variants={detailsChildVariants}
              className="relative bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-xl aspect-video w-full flex items-center justify-center"
            >
              {/* Saffron border highlight */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-[#E25822] z-30" />

              {isVideo && item.videoSrc ? (
                <video
                  src={item.videoSrc}
                  poster={item.imageSrc}
                  controls
                  className="w-full h-full object-cover relative z-10"
                  playsInline
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
                </div>
              )}
            </motion.div>

            {/* Content Details box */}
            <motion.div
              variants={detailsChildVariants}
              className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
            >
              {/* Accessibility font-resizer */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold">
                  <BookOpen className="w-4 h-4 text-[#1E3A8A]" />
                  <span>Media Description Mode</span>
                </div>

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

              {/* Full Description */}
              <div className={`${fontSize} leading-relaxed text-slate-800 font-medium space-y-4`}>
                <p>{item.description}</p>
                <p>
                  Additional photography, raw video records, and speech transcripts are cataloged directly under the national public coordination archive database. All cooperative statements, policy guidelines, and project launch briefs are fully audited and cleared for distribution to accredited press desks.
                </p>
              </div>

              {/* Highlights Bulletins */}
              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#1E3A8A]" />
                  Key Highlights & Coverage
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
                  <span>Authorized Registry Release</span>
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
                    href={`data:text/plain;charset=utf-8,${encodeURIComponent(item.title + "\n\n" + item.description)}`}
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

          {/* Right Column: Registry and Stats */}
          <div className="lg:col-span-4 space-y-6">
            {/* Authenticity Index Box */}
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
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#E25822] block mb-2">Media Release Stamp</span>
              <h4 className="text-sm font-bold font-serif text-white mb-3">Official Archives Registry</h4>
              <p className="text-[11px] leading-relaxed text-slate-400 font-medium mb-4">
                This media entry represents verified developmental coordinates. Recorded under registry number MHA-COOP-2026.
              </p>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                <Check className="w-3.5 h-3.5" />
                <span>Verification Registry Active</span>
              </div>
            </motion.div>

            {/* Social engagement box */}
            <motion.div
              variants={detailsChildVariants}
              className="bg-white border border-slate-200/60 rounded-3xl p-6 text-left shadow-sm space-y-4"
            >
              <h4 className="text-xs font-black uppercase tracking-wider text-black border-b border-slate-100 pb-2.5">
                Engagement Index
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-left">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Shares Count</div>
                  <div className="text-lg font-bold font-serif text-[#1E3A8A] mt-1 flex items-center gap-1">
                    <Share2 className="w-4 h-4 text-[#E25822]" />
                    {item.shares}
                  </div>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-left">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Releases</div>
                  <div className="text-lg font-bold font-serif text-[#1E3A8A] mt-1">
                    100% Verified
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
