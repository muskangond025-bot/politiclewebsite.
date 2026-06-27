"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, Quote, Award, BookOpen } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MotionImage = motion(Image);

interface Milestone {
  key: string;
  val: string;
}

interface Story {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  summary: string;
  quote: string;
  narrative: string[];
  milestones: Milestone[];
  image: string;
  nextId: string;
  nextTitle: string;
}

interface StoryDetailClientProps {
  story: Story;
}

export default function StoryDetailClient({ story }: StoryDetailClientProps) {
  // Mouse parallax motion values for the main image card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const imgTranslateX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const imgTranslateY = useTransform(smoothY, [-1, 1], [-15, 15]);
  const imgScale = useTransform(smoothY, [-1, 1], [1.06, 1.01]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // -1 to 1
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // -1 to 1
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Split-text word reveal helper
  const splitWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden pb-1 mr-[0.25em] select-none">
        <motion.span
          className="inline-block origin-bottom-left"
          initial={{ y: "100%", rotate: 6, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2 + i * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 overflow-hidden relative">
      {/* Premium page intro slide reveals */}
      <motion.div
        className="fixed inset-0 bg-[#1E3A8A] z-[9999] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="fixed inset-0 bg-[#E25822] z-[9998] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
      />

      {/* 1. Header Block with Light Sweep */}
      <div className="relative bg-white border-b border-slate-100 py-12 md:py-16 overflow-hidden">
        {/* Animated ambient backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#E25822]/5 pointer-events-none"
        />
        
        {/* Dynamic Sweep Light */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2.0, ease: "easeInOut", delay: 0.1 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        />

        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/#stories"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== "undefined") {
                  if (document.referrer && document.referrer.includes(window.location.host)) {
                    window.history.back();
                  } else {
                    window.location.href = "/#stories";
                  }
                }
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#E25822] transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-black tracking-tight leading-tight max-w-4xl flex flex-wrap">
              {splitWords(story.title)}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl"
            >
              {story.summary}
            </motion.p>
          </div>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Image, Quote & Key Stats */}
          <div className="lg:col-span-5 space-y-8">
            {/* Image Card with interactive hover parallax, sliding from text (right to left) */}
            <motion.div
              initial={{ opacity: 0, x: 220 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              data-cursor="view"
              className="relative p-2 bg-white border border-slate-200/60 rounded-2xl shadow-lg shadow-slate-100 overflow-hidden aspect-video lg:aspect-square cursor-pointer group"
            >
              <div className="absolute inset-0 border-2 border-dashed border-[#E25822]/20 rounded-2xl pointer-events-none z-10" />
              
              {/* Inner Parallax Content */}
              <motion.div
                style={{ x: imgTranslateX, y: imgTranslateY, scale: imgScale }}
                className="relative w-full h-full overflow-hidden rounded-xl bg-slate-100 -inset-4"
              >
                <MotionImage
                  src={story.image}
                  alt={story.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                  initial={{ scale: 1.25 }}
                  animate={{ scale: 1.05 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ 
                    scale: { duration: 2.5, ease: "easeOut" },
                    default: { duration: 0.4, ease: "easeOut" } 
                  }}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Quote Block - Hidden first, reveals later */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#1E3A8A] text-white p-6 sm:p-8 rounded-2xl shadow-md overflow-hidden group"
            >
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Quote className="w-32 h-32 text-white" />
              </div>
              <Quote className="w-8 h-8 text-[#E25822] mb-4" />
              <p className="text-sm sm:text-base font-serif italic font-medium leading-relaxed relative z-10">
                &ldquo;{story.quote}&rdquo;
              </p>
              <div className="mt-4 text-[10px] uppercase tracking-wider text-slate-300 font-extrabold">
                Shri Krishna Pal
              </div>
            </motion.div>
          </div>

          {/* Right Column: Full Narrative & Timeline Milestones */}
          <div className="lg:col-span-7 space-y-8">
            {/* Narrative Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200/50 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                {story.narrative.map((p, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + idx * 0.1, ease: "easeOut" }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Milestones Card - Hidden first, reveals later */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200/50 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                <Award className="w-5 h-5 text-[#E25822]" />
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-black">
                  Key Pillars &amp; Achievements
                </h2>
              </div>
              <div className="relative pl-6 space-y-6">
                {/* Auto-drawing vertical timeline path */}
                <motion.div 
                  className="absolute left-3 top-2 bottom-2 w-[2px] bg-slate-200 origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 2.3 }}
                />
                
                {/* Saffron active line path sweep overlay */}
                <motion.div 
                  className="absolute left-3 top-2 bottom-2 w-[2px] bg-[#E25822] origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 2.7 }}
                />

                {story.milestones.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 2.4 + idx * 0.15, ease: "easeOut" }}
                    className="flex gap-4 items-start group relative z-10"
                  >
                    {/* Timeline node marker dot */}
                    <div className="absolute -left-[28px] top-2 w-2 h-2 rounded-full border border-white bg-slate-300 group-hover:bg-[#E25822] group-hover:scale-125 transition-all duration-300 z-20 shadow-sm" />
                    
                    <div className="bg-[#1E3A8A]/5 text-[#1E3A8A] font-serif font-bold text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap min-w-[100px] text-center border border-[#1E3A8A]/10 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300 shadow-sm">
                      {item.key}
                    </div>
                    <p className="text-xs text-slate-500 font-semibold leading-normal pt-1">
                      {item.val}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. Dynamic Next Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 pt-8 border-t border-slate-200/60"
        >
          <Link
            href={`/story/${story.nextId}`}
            className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden group"
          >
            {/* Sliding Saffron Backdrop overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#E25822] to-[#ef4444] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
            
            <div className="space-y-1 relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E25822] group-hover:text-amber-200 transition-colors duration-300">
                Up Next
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif text-black group-hover:text-white transition-colors duration-300">
                {story.nextTitle}
              </h3>
            </div>
            <div className="flex items-center gap-2 self-stretch sm:self-center justify-end text-xs font-bold uppercase tracking-wider text-[#1E3A8A] group-hover:text-white transition-colors duration-300 relative z-10">
              <span>Read Next Story</span>
              <ChevronRight className="w-4 h-4 text-[#1E3A8A] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
