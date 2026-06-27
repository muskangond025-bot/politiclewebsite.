"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowUpRight, Share2, Sparkles, BookOpen, User, Tag, ChevronRight } from "lucide-react";
import { MOCK_BLOG_POSTS, BlogPost } from "@/lib/blogData";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

// Floating Parallax Header overlaying banner
const ParallaxCover = ({ post }: { post: BlogPost }) => {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] overflow-hidden select-none">
      {/* Dark overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-900/30 z-10" />

      {/* ken burns scale in effect */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Floating meta information overlay */}
      <div className="absolute inset-x-0 bottom-0 z-20 max-w-7xl mx-auto px-6 pb-12 text-left space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/80 border border-blue-400/40 text-white font-extrabold text-[9px] uppercase tracking-widest backdrop-blur-sm"
        >
          {post.category}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-tight max-w-5xl drop-shadow-md"
        >
          {post.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 text-slate-300 font-extrabold text-[10px] uppercase tracking-wider"
        >
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            {post.date}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            {post.readTime}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-blue-400" />
            By {post.author}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BlogDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const postId = parseInt(resolvedParams.id, 10);
  const post = MOCK_BLOG_POSTS.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  // Find related articles (matching category, excluding current)
  const relatedPosts = MOCK_BLOG_POSTS
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // If we don't have enough, fill with other posts
  const fillerPosts = relatedPosts.length < 2
    ? MOCK_BLOG_POSTS.filter((p) => p.id !== post.id && !relatedPosts.some(r => r.id === p.id)).slice(0, 2 - relatedPosts.length)
    : [];

  const displayedRelated = [...relatedPosts, ...fillerPosts];

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[30%] right-[-5%] w-[35%] h-[35%] rounded-full bg-blue-100/10 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[35%] h-[35%] rounded-full bg-[#E25822]/4 blur-[100px]" />
      </div>

      {/* Immersive Parallax Cover Image */}
      <ParallaxCover post={post} />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6 z-20 relative text-left">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500 font-extrabold text-[9px] uppercase tracking-widest">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-800 font-bold truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </div>

          <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors cursor-pointer select-none">
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* MAIN LAYOUT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20 mt-4">
        
        {/* LEFT COLUMN: ARTICLE BODY */}
        <article className="lg:col-span-8 bg-white/80 border border-slate-200/50 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-12 space-y-8 text-left">
          
          {post.content.map((block, idx) => {
            switch (block.type) {
              case "paragraph":
                // Large initial dropcap for first paragraph
                const isFirstPara = idx === 0;
                if (isFirstPara && block.text) {
                  const firstLetter = block.text.charAt(0);
                  const restOfPara = block.text.slice(1);
                  return (
                    <p key={idx} className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                      <span className="float-left text-4xl sm:text-5xl font-extrabold text-blue-600 font-serif mr-2 leading-none mt-1">
                        {firstLetter}
                      </span>
                      {restOfPara}
                    </p>
                  );
                }
                return (
                  <p key={idx} className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                    {block.text}
                  </p>
                );

              case "heading":
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-bold font-serif text-slate-900 pt-4 leading-snug">
                    {block.text}
                  </h3>
                );

              case "quote":
                return (
                  <blockquote key={idx} className="border-l-4 border-blue-600 pl-6 my-6 italic text-slate-800 text-base sm:text-lg font-serif font-medium leading-relaxed">
                    "{block.text}"
                  </blockquote>
                );

              case "list":
                return (
                  <ul key={idx} className="space-y-3.5 my-6">
                    {block.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[10px] font-black text-blue-600 mt-0.5">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );

              case "callout":
                return (
                  <div key={idx} className="bg-blue-50/70 border border-blue-100/80 rounded-2xl p-6 flex gap-4 items-start text-left my-6 shadow-sm shadow-blue-50/20">
                    <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-1.5">Note</h4>
                      <p className="text-blue-800 text-xs sm:text-sm font-medium leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  </div>
                );

              default:
                return null;
            }
          })}
        </article>

        {/* RIGHT COLUMN: SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Author info card */}
          <div className="bg-white/80 border border-slate-200/50 shadow-lg shadow-slate-100/30 rounded-3xl p-6 text-left space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
              Written By
            </h4>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-sm font-black text-white border border-slate-100 shadow-md shadow-blue-600/10">
                KP
              </div>
              <div>
                <h5 className="text-sm font-black text-slate-800">{post.author}</h5>
                <p className="text-[9px] font-extrabold text-[#E25822] uppercase tracking-wider mt-0.5 leading-none">
                  Official Portal
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">
              Union Home Minister & Minister of Cooperation, dedicated to federal reforms and local cooperative digitization across India.
            </p>
          </div>

          {/* Tags Cloud */}
          <div className="bg-white/80 border border-slate-200/50 shadow-lg shadow-slate-100/30 rounded-3xl p-6 text-left space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
              Article Tags
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 border border-slate-100 hover:border-blue-100 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-300"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick share widget */}
          <div className="bg-white/80 border border-slate-200/50 shadow-lg shadow-slate-100/30 rounded-3xl p-6 text-left space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
              Share Article
            </h4>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Article URL copied to clipboard!");
                  }
                }}
                className="flex-grow flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-colors cursor-pointer select-none"
              >
                <Share2 className="w-3.5 h-3.5" />
                Copy URL
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* RELATED ARTICLES CAROUSEL FOOTER */}
      <section className="max-w-7xl mx-auto px-6 mt-20 text-left space-y-8">
        <h4 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 leading-snug">
          Recommended Reading
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedRelated.map((rel) => (
            <motion.div
              key={rel.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col sm:flex-row bg-white/70 backdrop-blur-md border border-slate-200/50 shadow-lg shadow-slate-100/20 rounded-2xl overflow-hidden"
            >
              {/* Image box */}
              <div className="relative w-full sm:w-[40%] h-44 overflow-hidden">
                <Image
                  src={rel.imageSrc}
                  alt={rel.title}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text content */}
              <div className="w-full sm:w-[60%] p-6 flex flex-col justify-between items-start space-y-4">
                <div className="space-y-2">
                  <span className="text-[8px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100/50">
                    {rel.category}
                  </span>
                  <Link href={`/blog/${rel.id}`}>
                    <h5 className="text-sm font-bold font-serif text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h5>
                  </Link>
                </div>

                <Link href={`/blog/${rel.id}`} className="inline-flex items-center gap-1 text-[9px] font-black text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors cursor-pointer select-none">
                  Read Article
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
