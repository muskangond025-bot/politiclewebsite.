"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Quote, Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ENDORSEMENTS = [
  {
    id: 1,
    leader: "Shri Om Birla",
    title: "Hon'ble Lok Sabha Speaker",
    event: "Inauguration of National Legislative Drafting Workshop",
    date: "2026-05-10",
    location: "New Delhi",
    quote: "The Home Minister's vision for administrative reform is crucial for strengthening the legislative framework of our democratic institutions.",
    description: "The National Legislative Drafting Workshop focused on training drafting officers in modern legislative techniques, reducing archaic terminology, and adopting advanced digital drafting systems.",
    highlights: [
      "Keynote speech by Speaker Om Birla on modern administrative codes.",
      "Special consultation sessions on drafting software systems.",
      "Joint guidelines release on reducing red tape in official regulations."
    ]
  },
  {
    id: 2,
    leader: "Shri Bhajan Lal Sharma",
    title: "Chief Minister of Rajasthan",
    event: "Rajasthan Border Development Meet & Security Review",
    date: "2026-04-18",
    location: "Jaipur",
    quote: "Under the leadership of Union Minister Shri Krishna Pal, the border districts are witnessing record growth in roads, drinking water, and grid electrification.",
    description: "High-level coordination meeting focusing on executing border area development programs (BADP) and enhancing infrastructure along the Western border.",
    highlights: [
      "Electrification roadmap completion for all desert check-posts.",
      "MHA funding clearance for 400km of border road expansions.",
      "Evaluation of solar energy projects for border communities."
    ]
  },
  {
    id: 3,
    leader: "Shri Yogi Adityanath",
    title: "Chief Minister of Uttar Pradesh",
    event: "Launch of Regional Cooperative Credit Summit",
    date: "2026-03-24",
    location: "Lucknow",
    quote: "The Ministry of Cooperation's initiative to computerize PACS is transforming primary agriculture and rural banking across Uttar Pradesh.",
    description: "Launch of a digital banking integration summit linking primary agricultural credit societies with nationwide cooperative networks.",
    highlights: [
      "Digitization launch for over 7,500 primary agricultural credit societies.",
      "Direct bank transfer links integrated with credit approval desks.",
      "Release of standard audit software for regional cooperative banks."
    ]
  },
  {
    id: 4,
    leader: "Shri Himanta Biswa Sarma",
    title: "Chief Minister of Assam",
    event: "North-East Security Coordination & Peace Accord Ceremony",
    date: "2026-02-15",
    location: "Guwahati",
    quote: "The Home Minister's decisive approach has resolved long-standing boundary issues, ushering in an era of development and peace in the North-East.",
    description: "Tripartite peace agreement ceremony and security coordination meeting resolving regional boundary demarcations.",
    highlights: [
      "Signing of the boundary resolution pact between regional states.",
      "Allocation of 800-crore special infrastructure development funds.",
      "Establishment of joint security coordination outposts."
    ]
  },
  {
    id: 5,
    leader: "Shri Pramod Sawant",
    title: "Chief Minister of Goa",
    event: "National Co-operative Dairy Federation General Assembly",
    date: "2026-01-08",
    location: "Goa",
    quote: "Cooperative societies are finding new stability through reforms spearheaded by the Union Cooperation Ministry. Goa is a key beneficiary.",
    description: "National federation conference standardizing dairy auditing, milk transport setups, and cold storage subsidies.",
    highlights: [
      "Modern cold storage transport subsidy allocations.",
      "Rollout of unified auditing software across all dairy unions.",
      "Special grants for setting up automated milk collection booths."
    ]
  },
  {
    id: 6,
    leader: "Shri Mohan Yadav",
    title: "Chief Minister of Madhya Pradesh",
    event: "Inauguration of Cooperative Mega Dairy Plant",
    date: "2025-12-14",
    location: "Bhopal",
    quote: "Home Minister Krishna Pal's guidance has transformed agricultural credit access for over 15 lakh farmers in Central India.",
    description: "Inauguration of Central India's largest cooperative dairy processing plant with automated packaging capabilities.",
    highlights: [
      "Mega Dairy Plant launch with 5 Lakh liters daily processing capacity.",
      "Direct bank link integrations for 2,500 cooperative societies.",
      "Collateral-free micro-credit loans program for cattle farmers."
    ]
  },
];

// Extract initials for monogram avatars
function getInitials(name: string) {
  const parts = name.replace("Shri ", "").split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0] ? parts[0][0].toUpperCase() : "";
}

interface StalwartCardProps {
  card: typeof ENDORSEMENTS[0];
  fontSize: string;
}

function StalwartCard({ card, fontSize }: StalwartCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamically resolve sizes based on accessibility font-size toggle
  const quoteSizeClass = 
    fontSize === "text-xs" ? "text-base sm:text-[17px]" :
    fontSize === "text-sm" ? "text-lg sm:text-[19px]" :
    "text-xl sm:text-[22px]";
  
  const descSizeClass = 
    fontSize === "text-xs" ? "text-[11px]" :
    fontSize === "text-sm" ? "text-xs" :
    "text-sm";

  const highlightSizeClass = 
    fontSize === "text-xs" ? "text-[11px]" :
    fontSize === "text-sm" ? "text-xs" :
    "text-sm";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 90, damping: 16 }}
      whileHover={{
        y: -6,
        borderColor: "rgba(30, 58, 138, 0.3)",
        boxShadow: "0 20px 40px rgba(30, 58, 138, 0.06)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="view"
      className="relative bg-gradient-to-br from-white to-slate-50/60 border border-slate-200/50 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.02)] flex flex-col justify-between text-left group overflow-hidden min-h-[250px]"
    >
      {/* Premium gradient sliding highlight indicator at the top border */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#E25822] via-[#F97316] to-[#E25822] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Giant subtle decorative background quote mark */}
      <span className="absolute right-6 top-0 text-[8rem] font-serif font-semibold text-slate-100 select-none pointer-events-none opacity-25 leading-none transition-all duration-500 group-hover:scale-105 group-hover:text-slate-200/40">
        &rdquo;
      </span>

      {/* Top section: quote, event and detailed descriptions */}
      <div className="space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Quote icon container with gradient background */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E25822]/10 to-[#F97316]/5 border border-[#E25822]/15 flex items-center justify-center text-[#E25822] shrink-0 shadow-sm">
            <Quote className="w-3.5 h-3.5 fill-current" />
          </div>

          {/* Serif Quote Text */}
          <motion.p
            animate={{ color: isHovered ? "#1E3A8A" : "#0F172A" }}
            transition={{ duration: 0.3 }}
            className={`font-serif italic font-bold leading-relaxed relative z-10 text-left ${quoteSizeClass}`}
          >
            &ldquo;{card.quote}&rdquo;
          </motion.p>

          {/* Event capsule/pill tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/50 backdrop-blur-sm self-start transition-all duration-300 group-hover:bg-[#1E3A8A]/5 group-hover:text-[#1E3A8A] group-hover:border-[#1E3A8A]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] animate-pulse" />
            {card.event}
          </div>
        </div>

        {/* Animated expanding descriptive details on hover */}
        <motion.div
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
            marginTop: isHovered ? 16 : 0
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden border-t border-slate-100 pt-4 space-y-4"
        >
          <p className={`text-slate-500 font-medium leading-relaxed ${descSizeClass}`}>
            {card.description}
          </p>

          <div className="space-y-2">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#E25822] block">
              Key Highlights
            </span>
            <ul className="space-y-2">
              {card.highlights.map((highlight, idx) => (
                <li key={idx} className={`flex gap-2.5 items-start text-slate-600 font-semibold leading-relaxed ${highlightSizeClass}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E25822] shrink-0 mt-1.5 transition-transform duration-300 group-hover:scale-125" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-slate-100 my-5" />

      {/* Bottom section: leader profile details and CTAs */}
      <div className="space-y-4">
        {/* Leader avatar details */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full border border-slate-200 p-0.5 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:border-[#1E3A8A]/30">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#1E3A8A] via-[#1E3A8A]/90 to-[#3B82F6] text-white flex items-center justify-center font-serif font-black text-xs shadow-md tracking-wider">
              {getInitials(card.leader)}
            </div>
          </div>
          <div className="text-left">
            <h4 className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-tight tracking-tight transition-colors duration-300 group-hover:text-[#1E3A8A]">
              {card.leader}
            </h4>
            <div className="text-[9px] text-[#E25822] font-black uppercase tracking-widest mt-0.5">
              {card.title}
            </div>
          </div>
        </div>

        {/* Location and CTA actions */}
        <div className="flex items-center justify-between gap-3 text-[10px] font-bold text-slate-500 pt-3.5 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {card.date}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#E25822]/80" />
              {card.location}
            </span>
          </div>

          <Link
            href={`/stalwart-says/${card.id}`}
            className="text-[#1E3A8A] hover:text-[#E25822] font-extrabold text-[10px] uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 cursor-pointer group/btn"
          >
            Read Brief
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function StalwartSays() {
  const [searchQuery, setSearchQuery] = useState("");
  const [fontSize, setFontSize] = useState("text-xs");

  const splitWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden pb-1 select-none">
        <motion.span
          className="inline-block origin-bottom-left"
          initial={{ y: "100%", rotate: 6, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6 + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  const filteredEndorsements = ENDORSEMENTS.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.leader.toLowerCase().includes(query) ||
      item.quote.toLowerCase().includes(query) ||
      item.event.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex flex-col w-full bg-white relative overflow-hidden">
      
      {/* 1. Page Header Hero Section */}
      <section className="relative h-80 md:h-[450px] bg-slate-950 flex items-center justify-center overflow-hidden group cursor-default">
        {/* Entrance Right-to-Left Sweep Overlay Curtain (Awwwards style) */}
        <div className="absolute inset-0 pointer-events-none z-35 overflow-hidden">
          {/* Orange saffron sweep */}
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#E25822] z-30"
          />
          {/* Blue navy sweep */}
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="absolute inset-0 bg-[#1E3A8A] z-25"
          />
          {/* Charcoal dark sweep */}
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="absolute inset-0 bg-slate-900 z-20"
          />
        </div>

        {/* Hero Banner background image with opening reveal starting from the right */}
        <motion.div
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/meeting_birla.png"
            alt="Stalwarts and leadership banner background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30 scale-105"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 z-10 pointer-events-none" />

        {/* Hero content details */}
        <div className="relative w-full px-6 sm:px-12 md:px-16 lg:pr-32 z-20 text-center space-y-4 pointer-events-none">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-1">
            {splitWords("STALWART SAYS")}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="w-20 h-1 bg-[#E25822] mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-xs sm:text-sm font-sans tracking-widest text-slate-300 font-extrabold uppercase"
          >
            Endorsements & leadership validation of national reforms
          </motion.p>
        </div>
      </section>

      {/* 2. Control Panel & Filtering Bar */}
      <section className="bg-white border-b border-slate-100 py-6 sticky top-22 z-40 shadow-sm shadow-slate-100/50 backdrop-blur-md bg-white/95">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search leaders or quotes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:bg-white focus:shadow-md focus:shadow-[#1E3A8A]/5 transition-all duration-300"
              />
            </div>

            {/* Accessibility Font Sizing Toggle */}
            <div className="flex items-center gap-1.5 p-1 border border-slate-200 rounded-lg bg-slate-50 shrink-0 self-end md:self-auto">
              <button
                onClick={() => setFontSize("text-xs")}
                className={`px-3 py-1 rounded text-[10px] font-black transition-all duration-200 cursor-pointer ${
                  fontSize === "text-xs" ? "bg-[#1E3A8A] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize("text-sm")}
                className={`px-3 py-1 rounded text-xs font-black transition-all duration-200 cursor-pointer ${
                  fontSize === "text-sm" ? "bg-[#1E3A8A] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize("text-base")}
                className={`px-3 py-1 rounded text-sm font-black transition-all duration-200 cursor-pointer ${
                  fontSize === "text-base" ? "bg-[#1E3A8A] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                A++
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quotes Asymmetrical Grid (No overlapping layout) */}
      <section className="py-12 md:py-16 bg-slate-50/30">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32">
          
          <AnimatePresence mode="popLayout">
            {filteredEndorsements.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
              >
                {filteredEndorsements.map((card) => (
                  <StalwartCard
                    key={card.id}
                    card={card}
                    fontSize={fontSize}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200/50 rounded-3xl p-16 text-center text-slate-400 font-extrabold"
              >
                No stalwart briefs match your filter terms.
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
