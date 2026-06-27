"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, ArrowUpRight, Flame, Mail, Sparkles, Filter } from "lucide-react";
import { MOCK_BLOG_POSTS, BlogPost } from "@/lib/blogData";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Cooperatives", "Security", "Governance", "Policy", "Personal"];

// Premium Asymmetrical Image Frame with Shine Overlay
const PremiumCardImage = ({ src, alt, category }: { src: string; alt: string; category: string }) => {
  return (
    <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-t-2xl bg-slate-100 border-b border-slate-100/50 group-hover:shadow-inner">
      {/* Category Tag Indicator */}
      <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white bg-blue-600/90 backdrop-blur-sm rounded-full shadow-sm">
        {category}
      </span>

      {/* Shine overlay animation */}
      <motion.div
        initial={{ left: "-150%" }}
        whileHover={{ left: "150%" }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-10 pointer-events-none"
      />

      {/* Zoom and float transition on image */}
      <motion.div
        whileHover={{ scale: 1.06, rotate: 0.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full relative"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover transition-transform duration-500"
          priority
        />
      </motion.div>
    </div>
  );
};

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search query
  const filteredPosts = MOCK_BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Split out the first post as the Featured Card if filtering is minimal
  const featuredPost = searchQuery === "" && selectedCategory === "All" ? MOCK_BLOG_POSTS[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/20 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#E25822]/5 blur-[120px]" />

        {/* Thin vector grid lines for Awwwards aesthetic */}
        <div className="absolute inset-0 flex justify-between px-6 max-w-7xl mx-auto opacity-[0.06] border-x border-slate-900/10">
          <div className="w-[1px] bg-slate-900/20 h-full hidden md:block" />
          <div className="w-[1px] bg-slate-900/20 h-full hidden md:block" />
          <div className="w-[1px] bg-slate-900/20 h-full hidden md:block" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* HERO HEADER */}
        <div className="space-y-6 text-center max-w-4xl mx-auto py-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-extrabold text-[10px] uppercase tracking-widest shadow-sm shadow-blue-50/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
            Official Leadership Blog
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 font-serif leading-[1.1]"
          >
            Perspective & <span className="text-blue-600 italic font-medium">Reforms</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Explore detailed reflections on national security protocols, digital agriculture transformations, federal administrative updates, and welfare initiatives.
          </motion.p>
        </div>

        {/* CONTROLS (SEARCH & CATEGORIES) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200/60 max-w-7xl mx-auto">
          {/* Categories list */}
          <div className="w-full md:w-auto overflow-x-auto flex items-center gap-2 pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "relative px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer select-none",
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeBlogFilter"
                      className="absolute inset-0 bg-blue-600 rounded-full z-0 shadow-md shadow-blue-600/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search articles, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs font-medium placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
            />
          </div>
        </div>

        {/* FEATURED POST */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative max-w-7xl mx-auto rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-xl shadow-slate-100/50 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Featured Image */}
              <div className="lg:col-span-7 relative min-h-[300px] lg:h-auto overflow-hidden">
                {/* Category label */}
                <span className="absolute top-6 left-6 z-20 px-3.5 py-1 text-[9px] font-black uppercase tracking-widest text-white bg-blue-600/90 backdrop-blur-sm rounded-full shadow">
                  {featuredPost.category}
                </span>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={featuredPost.imageSrc}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Featured content */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 text-left bg-gradient-to-b lg:bg-gradient-to-r from-white/40 to-white/90">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-500 font-extrabold text-[10px] uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {featuredPost.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-[10px] font-black text-white border border-slate-100">
                      KP
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-800 leading-none">{featuredPost.author}</div>
                      <div className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">Author</div>
                    </div>
                  </div>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/10 cursor-pointer"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ASYMMETRICAL POSTS GRID */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 text-left">
            {filteredPosts.length} Articles Found
          </h3>

          <AnimatePresence mode="popLayout">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full text-center py-20 bg-white/40 border border-slate-200/50 rounded-2xl"
              >
                <div className="max-w-xs mx-auto space-y-3">
                  <Filter className="w-8 h-8 mx-auto text-slate-300" />
                  <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider">No matching articles</h4>
                  <p className="text-xs text-slate-500 font-medium">Try broadening your search keywords or switching filters.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridPosts.map((post, index) => {
                  // Asymmetric visual offsets - Alternating margin offsets to create organic grid
                  const isOffset = index % 3 === 1;

                  return (
                    <motion.div
                      key={post.id}
                      layout
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "group relative rounded-2xl bg-white/80 border border-slate-200/60 shadow-lg shadow-slate-100/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between overflow-hidden",
                        isOffset && "lg:translate-y-4"
                      )}
                    >
                      <div>
                        {/* Premium zoom card image */}
                        <PremiumCardImage src={post.imageSrc} alt={post.title} category={post.category} />

                        {/* Card body */}
                        <div className="p-6 space-y-4 text-left">
                          <div className="flex items-center gap-3 text-slate-400 font-extrabold text-[9px] uppercase tracking-wider">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <Link href={`/blog/${post.id}`}>
                            <h4 className="text-lg font-bold font-serif text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                              {post.title}
                            </h4>
                          </Link>

                          <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-3">
                            {post.summary}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between text-left">
                        <div className="flex items-center gap-2">
                          <div className="relative w-6.5 h-6.5 rounded-full bg-gradient-to-tr from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-[8px] font-black text-white border border-slate-100">
                            KP
                          </div>
                          <span className="text-[10px] font-black text-slate-700 leading-none">{post.author}</span>
                        </div>

                        <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-[10px] font-extrabold text-blue-600 uppercase tracking-wider hover:text-blue-700 transition-colors cursor-pointer">
                          Read More
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* NEWSLETTER FOOTER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1E3A8A] via-[#111827] to-[#1E293B]"
        >
          {/* Glowing accents */}
          <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent z-0 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#E25822]/10 blur-[80px] rounded-full z-0 pointer-events-none" />

          <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-extrabold text-[9px] uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5 text-[#E25822] animate-pulse" />
                Stay Updated
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white tracking-tight leading-tight">
                Subscribe to Official Policies & Cooperative Insights
              </h3>
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-xl">
                Get monthly digests of legislative reforms, cooperative digital projects, and security policy briefings sent directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-5 w-full">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="relative flex-grow">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-slate-500" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-xs font-semibold text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/80 transition-all duration-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-600/10 cursor-pointer select-none transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
