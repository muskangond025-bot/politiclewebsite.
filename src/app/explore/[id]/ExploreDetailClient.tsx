"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Share2,
  Eye,
  ShieldCheck,
  Mail,
  MapPin,
  Check,
  Copy,
  Download,
  Award,
  ShieldAlert,
  Compass,
  Landmark
} from "lucide-react";

interface ExploreItem {
  id: string;
  title_en: string;
  title_hi: string;
  tagline_en: string;
  tagline_hi: string;
  pdfUrl: string;
  bannerImage: string;
  quote_en: string;
  quote_hi: string;
  intro_en: string;
  intro_hi: string;
  highlights_en: string[];
  highlights_hi: string[];
  details_en: string;
  details_hi: string;
}

interface ExploreDetailClientProps {
  item: ExploreItem;
}

export default function ExploreDetailClient({ item }: ExploreDetailClientProps) {
  const [isHindi, setIsHindi] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState("text-sm sm:text-base"); // text-xs, text-sm, text-base

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const IconMap = {
    mha: ShieldAlert,
    cooperation: Compass,
    "bjp-president": Award,
    "six-years-hm": Landmark
  };

  const IconComponent = IconMap[item.id as keyof typeof IconMap] || Award;

  const title = isHindi ? item.title_hi : item.title_en;
  const tagline = isHindi ? item.tagline_hi : item.tagline_en;
  const quote = isHindi ? item.quote_hi : item.quote_en;
  const intro = isHindi ? item.intro_hi : item.intro_en;
  const highlights = isHindi ? item.highlights_hi : item.highlights_en;
  const details = isHindi ? item.details_hi : item.details_en;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* 1. Header Banner */}
      <section className="relative h-80 md:h-[450px] bg-slate-900 flex flex-col justify-between overflow-hidden">
        <Image
          src={item.bannerImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />

        {/* Top Controls Bar */}
        <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:pr-32 pt-4 flex items-center justify-between">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#E25822] bg-slate-950/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 transition-all group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{isHindi ? "पीछे जाएं" : "Back to Achievements"}</span>
          </Link>

          <div className="flex items-center gap-1 bg-slate-950/40 backdrop-blur-md p-1 border border-white/10 rounded-full">
            <button
              onClick={() => setIsHindi(false)}
              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                !isHindi ? "bg-[#E25822] text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setIsHindi(true)}
              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                isHindi ? "bg-[#E25822] text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>

        <div className="relative z-20 w-full px-6 sm:px-12 md:px-16 lg:pr-32 pb-6 text-center space-y-3 mt-auto">
          <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto">
            {title}
          </h1>
          <div className="w-12 h-1 bg-[#E25822] mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Full content */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              {/* Accessibility controls */}
              <div className="flex items-center justify-end border-b border-slate-100 pb-4">
                <div className="flex items-center gap-1 p-1 border border-slate-200 rounded-lg bg-slate-50">
                  <button
                    onClick={() => setFontSize("text-xs")}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer ${
                      fontSize === "text-xs" ? "bg-[#1E3A8A] text-white" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize("text-sm sm:text-base")}
                    className={`px-2 py-0.5 rounded text-xs font-bold cursor-pointer ${
                      fontSize === "text-sm sm:text-base" ? "bg-[#1E3A8A] text-white" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSize("text-base sm:text-lg")}
                    className={`px-2 py-0.5 rounded text-sm font-bold cursor-pointer ${
                      fontSize === "text-base sm:text-lg" ? "bg-[#1E3A8A] text-white" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    A++
                  </button>
                </div>
              </div>

              {/* Summary Block / Intro */}
              <div className="border-l-4 border-[#E25822] bg-[#E25822]/5 p-4 rounded-r-xl">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#E25822] mb-1">
                  {isHindi ? "प्रस्तावना" : "Introduction"}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-semibold">
                  {intro}
                </p>
              </div>

              {/* Quote block */}
              <div className="bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 p-6 rounded-2xl relative overflow-hidden italic text-slate-800 font-semibold">
                <span className="text-3xl text-[#E25822] font-serif absolute left-2 top-0 opacity-20">&ldquo;</span>
                <p className="pl-4 text-xs sm:text-sm relative z-10 leading-relaxed">
                  {quote}
                </p>
                <div className="mt-3 text-[10px] uppercase tracking-wider text-[#E25822] font-black text-right">
                  — Shri Krishna Pal
                </div>
              </div>

              {/* Full Content */}
              <div className={`${fontSize} leading-relaxed text-slate-800 font-medium space-y-4`}>
                <p>{details}</p>
                <p>
                  {isHindi
                    ? "आधिकारिक रिपोर्टों और ऐतिहासिक दस्तावेजों को केंद्रीय नीतिगत अभिलेखों में संकलित किया गया है। आने वाले वर्षों में राष्ट्रीय सुरक्षा और सहकारिता सुधारों के तहत प्रगति की समीक्षा की जाती रहेगी।"
                    : "Official reports and historical records have been compiled within the central policy registries. Progress reviews under national security and cooperative reforms will continue to be audited in the coming years."}
                </p>
              </div>

              {/* Highlights List */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-black">
                  {isHindi ? "प्रमुख घटक और परिणाम" : "Key Components & Outcomes"}
                </h3>
                <ul className="space-y-2.5">
                  {highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats & Share bar */}
              <div className="border-t border-slate-100 pt-6 flex items-center justify-between gap-4 text-xs font-bold text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-slate-400" />
                    <span>3.2k {isHindi ? "दृश्य" : "Views"}</span>
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#1E3A8A] hover:bg-slate-50 transition-all text-xs font-bold text-slate-600 hover:text-[#1E3A8A] cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{isHindi ? "कॉपी किया गया" : "Copied"}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isHindi ? "लिंक कॉपी करें" : "Copy Link"}</span>
                      </>
                    )}
                  </button>
                  <a
                    href={item.pdfUrl}
                    download
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E25822] bg-[#E25822] hover:bg-[#E25822]/90 text-white transition-all text-xs font-bold cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isHindi ? "डाउनलोड" : "Download PDF"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portal links & contacts */}
          <div className="lg:col-span-4 space-y-6">
            {/* Authenticity Certificate Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-left text-slate-300 relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 group-hover:scale-105 transition-transform duration-500">
                <ShieldCheck className="w-36 h-36 text-white" />
              </div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#E25822] block mb-2">
                {isHindi ? "आधिकारिक पोर्टल" : "Portal Authenticity Registry"}
              </span>
              <h4 className="text-sm font-bold font-serif text-white mb-3">
                {isHindi ? "प्रमाणित रिपोर्ट कॉपी" : "Certified Achievement Report"}
              </h4>
              <p className="text-[11px] leading-relaxed text-slate-400 font-medium mb-4">
                {isHindi
                  ? "यह रिपोर्ट विकास कार्यों के आधिकारिक प्रलेखन के आधार पर प्रकाशित की गई है। सुरक्षा आईडी: KP-EXPLORE-2026।"
                  : "This document is generated under official public domain records of achievements. Security Registry ID: KP-EXPLORE-2026."}
              </p>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                <Check className="w-3.5 h-3.5" />
                <span>{isHindi ? "प्रमाणित दस्तावेज" : "Verified Clean Copy"}</span>
              </div>
            </div>

            {/* Media Contacts */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 text-left shadow-sm space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-black border-b border-slate-100 pb-2.5">
                {isHindi ? "कार्यालय संपर्क" : "Official Contacts"}
              </h4>
              <div className="space-y-3.5">
                <div className="flex gap-3 items-start">
                  <Mail className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Email desk</div>
                    <a href="mailto:hm@mha.gov.in" className="text-xs font-bold text-slate-700 hover:text-[#1E3A8A]">
                      hm@mha.gov.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-[#E25822] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Address</div>
                    <div className="text-xs font-bold text-slate-700 leading-normal">
                      New Delhi, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related links */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 text-left shadow-sm space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-black border-b border-slate-100 pb-2.5">
                {isHindi ? "महत्वपूर्ण लिंक" : "Related Portals"}
              </h4>
              <ul className="space-y-2 text-xs font-bold text-[#1E3A8A]">
                <li>
                  <a href="https://mha.gov.in" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-between">
                    <span>{isHindi ? "गृह मंत्रालय" : "Ministry of Home Affairs"}</span>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </a>
                </li>
                <li>
                  <a href="https://cooperation.gov.in" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-between">
                    <span>{isHindi ? "सहकारिता मंत्रालय" : "Ministry of Cooperation"}</span>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
