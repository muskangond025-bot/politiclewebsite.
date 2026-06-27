"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  MessageSquare,
  Share2,
  Heart,
  ShieldCheck,
  Send,
  ExternalLink,
  ChevronRight
} from "lucide-react";

// Custom inline SVG icons for social networks to avoid version issues with lucide-react
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface Comment {
  author: string;
  handle: string;
  text: string;
  verified: boolean;
  avatar: string;
  time: string;
}

interface SocialPost {
  id: string;
  content: string;
  date: string;
  author: string;
  handle: string;
  retweets: number;
  likes: number;
  hashtag: string;
  replies: Comment[];
}

interface SocialDetailClientProps {
  post: SocialPost;
}

export default function SocialDetailClient({ post }: SocialDetailClientProps) {
  // Retweet state
  const [retweeted, setRetweeted] = useState(false);
  const [retweetCount, setRetweetCount] = useState(post.retweets);

  // Like state
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  // Replies list state
  const [replies, setReplies] = useState<Comment[]>(post.replies);

  // Form input states
  const [replyText, setReplyText] = useState("");
  const [replyName, setReplyName] = useState("");

  const handleRetweet = () => {
    if (retweeted) {
      setRetweetCount((prev) => prev - 1);
    } else {
      setRetweetCount((prev) => prev + 1);
    }
    setRetweeted(!retweeted);
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const nameToUse = replyName.trim() || "Verified Citizen";
    const newComment: Comment = {
      author: nameToUse,
      handle: `@${nameToUse.toLowerCase().replace(/\s+/g, "")}`,
      text: replyText.trim(),
      verified: true, // Mark submission as verified citizen
      avatar: nameToUse.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2),
      time: "Just now"
    };

    setReplies((prev) => [...prev, newComment]);
    setReplyText("");
    setReplyName("");
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* 1. Header Block with Back Button & Breadcrumbs */}
      <div className="relative bg-white border-b border-slate-100 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#E25822]/5 opacity-60 pointer-events-none" />
        <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 relative z-10">
          <Link
            href="/#social"
            scroll={false}
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== "undefined") {
                if (document.referrer && document.referrer.includes(window.location.host)) {
                  window.history.back();
                  } else {
                    window.location.href = "/#social";
                  }
                }
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#E25822] transition-all mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1 text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-black tracking-tight">
                Verified Statement Thread
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:pr-32 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Leader Profile & Official Guidelines */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Leader Card */}
            <div className="bg-white border-t-4 border-[#1E3A8A] border-x border-b border-slate-100 rounded-2xl p-6 shadow-sm text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full bg-slate-100 overflow-hidden border-2 border-slate-200">
                  <Image
                    src="/hero_leader.png"
                    alt="Shri Krishna Pal"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-black flex items-center gap-1">
                    <span>Shri Krishna Pal</span>
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[8px] text-white flex items-center justify-center font-bold">✓</span>
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">@KrishnaPal</p>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate-500 font-medium mb-5">
                Union Home Minister &amp; Minister of Cooperation, Government of India. Representing the people with a vision of progress and security.
              </p>

              <div className="border-t border-slate-100 pt-4 space-y-3">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Official Broadcast Channels</span>
                
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/30 transition-all text-xs font-bold text-slate-700 hover:text-sky-600 group"
                >
                  <span className="flex items-center gap-2">
                    <TwitterIcon className="w-4 h-4 text-sky-500" />
                    <span>Twitter Feed</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-sky-500 transition-colors" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:border-rose-200 hover:bg-rose-50/30 transition-all text-xs font-bold text-slate-700 hover:text-rose-600 group"
                >
                  <span className="flex items-center gap-2">
                    <YoutubeIcon className="w-4 h-4 text-rose-500" />
                    <span>YouTube Channel</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-rose-500 transition-colors" />
                </a>
              </div>
            </div>

            {/* Verification Info Block */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md text-left relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 group-hover:scale-105 transition-transform duration-500">
                <ShieldCheck className="w-32 h-32 text-white" />
              </div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#E25822] mb-3">Authenticity Registry</h4>
              <p className="text-[11px] leading-relaxed text-slate-300 font-medium">
                This portal is connected to the official press office. Statements displayed represent authorized broadcasts. Citizen comments below undergo security validation.
              </p>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-left">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-black mb-3 border-b border-slate-100 pb-2">Engagement Guidelines</h4>
              <ul className="space-y-2 text-[11px] text-slate-500 font-semibold list-disc list-inside">
                <li>Be constructive, respectful and focus on policy.</li>
                <li>Hate speech or personal abuse will be blocked.</li>
                <li>Your submission is recorded with basic telemetry.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Detailed Thread & Comments */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* The Main Social Card */}
            <div className="bg-white border-t-4 border-[#1E3A8A] border-x border-b border-slate-100 rounded-2xl p-8 shadow-sm text-left">
              
              {/* Header inside post card */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center font-extrabold text-sm text-white border-2 border-slate-100">
                    KP
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-black flex items-center gap-1">
                      <span>Shri Krishna Pal</span>
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[8px] text-white flex items-center justify-center font-bold">✓</span>
                    </div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">@KrishnaPal</div>
                  </div>
                </div>
                
                {/* Platform Icon */}
                <svg className="w-5 h-5 text-slate-800 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>

              {/* Main Content Body */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-slate-800 font-medium">
                  {post.content.split(/(#\w+)/g).map((part, index) => {
                    if (part.startsWith("#")) {
                      return (
                        <span key={index} className="text-[#1E3A8A] font-extrabold hover:underline cursor-pointer">
                          {part}
                        </span>
                      );
                    }
                    return part;
                  })}
                </p>

                <div className="text-xs text-slate-400 font-bold border-t border-b border-slate-100 py-3.5 flex flex-wrap gap-x-6 gap-y-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="text-[#1E3A8A]">Official Press Release Broadcaster</span>
                </div>
              </div>

              {/* Interactive Counter Row */}
              <div className="flex items-center gap-6 mt-4 text-xs font-extrabold text-slate-600 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-900 font-black">{replies.length}</span>
                  <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Replies</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-900 font-black">{retweetCount}</span>
                  <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Retweets</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-900 font-black">{likeCount}</span>
                  <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Likes</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-8 py-3.5 text-xs font-bold text-slate-500 border-b border-slate-100/60">
                <button
                  onClick={handleRetweet}
                  className={`flex items-center gap-2 cursor-pointer transition-colors ${
                    retweeted ? "text-emerald-600" : "hover:text-emerald-600"
                  }`}
                >
                  <Share2 className={`w-5 h-5 ${retweeted ? "fill-emerald-50" : ""}`} />
                  <span>{retweeted ? "Retweeted" : "Retweet"}</span>
                </button>

                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 cursor-pointer transition-colors ${
                    liked ? "text-rose-600" : "hover:text-rose-600"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? "fill-rose-600 text-rose-600" : ""}`} />
                  <span>{liked ? "Liked" : "Like"}</span>
                </button>
              </div>

              {/* Comment Submission Section */}
              <div className="mt-8 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-black block">Write a reply statement</span>
                
                <form onSubmit={handleSubmitReply} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={replyName}
                      onChange={(e) => setReplyName(e.target.value)}
                      placeholder="Your Name (e.g. Anil Sharma)"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] font-semibold"
                    />
                    <div className="hidden sm:flex items-center justify-end px-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      ✓ Post is marked Verified Citizen
                    </div>
                  </div>

                  <div className="flex gap-3 items-end">
                    <textarea
                      required
                      rows={2}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Share your response to this statement..."
                      className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] font-semibold resize-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 hover:shadow-lg text-white font-extrabold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Replies Thread Feed */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm text-left space-y-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                <MessageSquare className="w-5 h-5 text-[#1E3A8A]" />
                <h3 className="text-xs font-black uppercase tracking-wider text-black">
                  Citizen Comments &amp; Feedback ({replies.length})
                </h3>
              </div>

              <div className="space-y-4">
                {replies.map((reply, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl border border-slate-50 bg-slate-50/30 hover:bg-slate-50/70 transition-all">
                    
                    {/* Circle avatar initials */}
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-black text-xs text-slate-600 shrink-0 border border-slate-300/40">
                      {reply.avatar}
                    </div>

                    <div className="space-y-1.5 flex-grow text-left">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-extrabold text-slate-800">{reply.author}</span>
                          {reply.verified && (
                            <span className="w-3 h-3 rounded-full bg-blue-500 text-[6px] text-white flex items-center justify-center font-bold">✓</span>
                          )}
                          <span className="text-[10px] text-slate-400 font-bold ml-1">{reply.handle}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold">{reply.time}</span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {reply.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
