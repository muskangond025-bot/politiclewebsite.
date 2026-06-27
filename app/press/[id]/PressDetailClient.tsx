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
  Download
} from "lucide-react";

interface PressArticle {
  id: number;
  category: string;
  state: string;
  date: string;
  title: string;
  summary: string;
  content: string;
  views: number;
  shares: number;
  imageSrc?: string;
}

interface PressDetailClientProps {
  article: PressArticle;
}

export default function PressDetailClient({ article }: PressDetailClientProps) {
  // Share state
  const [sharesCount, setSharesCount] = useState(article.shares);
  const [copied, setCopied] = useState(false);

  // Font size state
  const [fontSize, setFontSize] = useState("text-sm sm:text-base"); // text-xs, text-sm, text-base

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setSharesCount((prev) => prev + 1);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* 1. Header Block */}
      <div className="relative bg-white border-b border-slate-100 pt-6 pb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#E25822]/5 opacity-60 pointer-events-none" />
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 relative z-10 text-left">
          <Link
            href="/press"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#E25822] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Press Center
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-black tracking-tight leading-tight max-w-4xl">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1E3A8A]" />
                  Published {article.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Full Article content */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              {/* Optional Featured Image */}
              {article.imageSrc && (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100/60">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

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

              {/* Summary Block */}
              <div className="border-l-4 border-[#E25822] bg-[#E25822]/5 p-4 rounded-r-xl">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#E25822] mb-1">Executive Summary</h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-semibold">
                  {article.summary}
                </p>
              </div>

              {/* Full Content paragraphs */}
              <div className={`${fontSize} leading-relaxed text-slate-800 font-medium space-y-4`}>
                <p>{article.content}</p>
                <p>
                  Official documentation has been circulated to corresponding municipal directors, cooperative heads, and state secretariats to ensure complete execution. Progress and monitoring telemetry will be tracked digitally under the ministry's centralized portals.
                </p>
              </div>

              {/* Stats & Share bar */}
              <div className="border-t border-slate-100 pt-6 flex items-center justify-between gap-4 text-xs font-bold text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-slate-400" />
                    <span>{article.views + 120} Views</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Share2 className="w-4 h-4 text-[#E25822]" />
                    <span>{sharesCount} Shares</span>
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
                    href={`data:text/plain;charset=utf-8,${encodeURIComponent(article.title + "\n\n" + article.content)}`}
                    download={`${article.title.toLowerCase().replace(/\s+/g, "_")}.txt`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#E25822] hover:bg-slate-50 transition-all text-xs font-bold text-slate-600 hover:text-[#E25822] cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download TXT</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Media desk contacts & Verification certificates */}
          <div className="lg:col-span-4 space-y-6">
            {/* Media Contacts */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 text-left shadow-sm space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-black border-b border-slate-100 pb-2.5">
                Media & Press Contacts
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
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Press Address</div>
                    <div className="text-xs font-bold text-slate-700 leading-normal">
                      North Block, Cabinet Secretariat, New Delhi, 110001
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related links */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 text-left shadow-sm space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-black border-b border-slate-100 pb-2.5">
                Related Portals
              </h4>
              <ul className="space-y-2 text-xs font-bold text-[#1E3A8A]">
                <li>
                  <a href="https://mha.gov.in" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-between">
                    <span>Ministry of Home Affairs</span>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </a>
                </li>
                <li>
                  <a href="https://cooperation.gov.in" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-between">
                    <span>Ministry of Cooperation</span>
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
