"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Lightbulb, Vote, CheckCircle, UploadCloud, FileText, ArrowRight, Trash2, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const FEEDBACK_CATEGORIES = [
  { id: "coop", label: "Cooperative Systems", icon: Lightbulb, desc: "Ideas related to agricultural credit, local PACS, and milk storage chillers." },
  { id: "sec", label: "Border & Security", icon: Vote, desc: "Feedback on Vibrant Villages connectivity, highway infrastructure, and outposts." },
  { id: "gov", label: "Civic Governance", icon: Sparkles, desc: "Suggestions on digitizing district offices, schools, and health care centers." },
];

const MOCK_IDEAS = [
  { id: 1, user: "Raman K.", category: "Cooperative Systems", title: "Micro-cold storages linked to local PACS nodes", votes: 45, date: "2026-06-25" },
  { id: 2, user: "Divya S.", category: "Civic Governance", title: "Automated public grievance routing in district schools", votes: 32, date: "2026-06-22" },
  { id: 3, user: "Jitendra P.", category: "Border & Security", title: "Solar grid backups for terminal border outpost outposts", votes: 61, date: "2026-06-18" },
];

export default function SuggestIdea() {
  const [activeCategory, setActiveCategory] = useState("coop");
  const [formData, setFormData] = useState({ name: "", email: "", title: "", text: "" });
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // Poll states (Yes/No/Undecided)
  const [pollVotes1, setPollVotes1] = useState({ yes: 240, no: 80, undecided: 40 });
  const [hasVoted1, setHasVoted1] = useState(false);

  const [pollVotes2, setPollVotes2] = useState({ roads: 180, cell: 150, solar: 220 });
  const [hasVoted2, setHasVoted2] = useState(false);

  const handleVote1 = (choice: "yes" | "no" | "undecided") => {
    if (hasVoted1) return;
    setPollVotes1((prev) => ({ ...prev, [choice]: prev[choice] + 1 }));
    setHasVoted1(true);
  };

  const handleVote2 = (choice: "roads" | "cell" | "solar") => {
    if (hasVoted2) return;
    setPollVotes2((prev) => ({ ...prev, [choice]: prev[choice] + 1 }));
    setHasVoted2(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      setAttachedFiles((prev) => [...prev, fileName]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      setFormData({ name: "", email: "", title: "", text: "" });
      setAttachedFiles([]);
    }, 1500);
  };

  const totalVotes1 = pollVotes1.yes + pollVotes1.no + pollVotes1.undecided;
  const pctYes = Math.round((pollVotes1.yes / totalVotes1) * 100);
  const pctNo = Math.round((pollVotes1.no / totalVotes1) * 100);
  const pctUndecided = 100 - pctYes - pctNo;

  const totalVotes2 = pollVotes2.roads + pollVotes2.cell + pollVotes2.solar;
  const pctRoads = Math.round((pollVotes2.roads / totalVotes2) * 100);
  const pctCell = Math.round((pollVotes2.cell / totalVotes2) * 100);
  const pctSolar = 100 - pctRoads - pctCell;

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-100/15 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-emerald-100/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* HERO BANNER */}
        <div className="space-y-6 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-extrabold text-[10px] uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            Citizen Participation & Feedback
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-slate-900 tracking-tight leading-[1.15]">
            Suggest an Idea for the <span className="text-emerald-600 italic font-medium">Nation</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
            We value citizen-led reforms. Submit developmental suggestions, upload local feedback attachments, and vote in weekly policy surveys to help us prioritize initiatives.
          </p>
        </div>

        {/* DOUBLE COLUMN: FORM & POLLS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: FEEDBACK FORM (Cols 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-10 space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold font-serif text-slate-900 leading-none">Submit Your Suggestion</h2>
              <span className="text-[10px] text-slate-400 font-extrabold mt-1.5 uppercase tracking-wider block">Official feedback registry</span>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-6">
              
              {/* Category Select Radio Cards */}
              <div className="space-y-3">
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400">Select Category</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {FEEDBACK_CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                          "text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between min-h-[110px] cursor-pointer",
                          isActive
                            ? "bg-emerald-50/50 border-emerald-200 shadow-sm font-bold text-emerald-700"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        )}
                      >
                        <Icon className={cn("w-5 h-5", isActive ? "text-emerald-600" : "text-slate-400")} />
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-extrabold block">{cat.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email address"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Title input */}
              <div>
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Suggestion Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="Summary of your idea (e.g. PACS solar integration)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                />
              </div>

              {/* Text Description */}
              <div>
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Description details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.text}
                  onChange={(e) => setFormData((prev) => ({ ...prev, text: e.target.value }))}
                  placeholder="Describe your idea in detail..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all resize-none"
                />
              </div>

              {/* File Attachment Upload area */}
              <div className="space-y-3">
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400">Attachments (Optional)</label>
                <div className="relative border-2 border-dashed border-slate-200/80 hover:border-emerald-400 rounded-2xl p-6 transition-all duration-300 bg-slate-50/50 hover:bg-emerald-50/5 text-center flex flex-col items-center justify-center gap-2 group">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-emerald-500 group-hover:scale-105 transition-all" />
                  <span className="text-xs font-black text-slate-700 leading-none">Click to upload report / image files</span>
                  <span className="text-[10px] text-slate-400 font-semibold leading-none">PDF, JPG, PNG up to 5MB</span>
                </div>

                {/* Attachment files list */}
                {attachedFiles.length > 0 && (
                  <div className="space-y-2">
                    {attachedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-slate-50 border border-slate-150 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="truncate max-w-[200px]">{file}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-500/10 cursor-pointer select-none transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Suggestion
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT PANEL: SURVEYS & POLLS (Cols 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Poll 1 Card */}
            <div className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Vote className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-serif leading-none">Policy Opinion Poll</h3>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm font-bold leading-relaxed">
                Should cooperative agricultural lending banks (PACS) transition 100% to mobile digital credit platforms?
              </p>

              <div className="space-y-3">
                {[
                  { key: "yes", label: "Yes, immediately", pct: pctYes, votes: pollVotes1.yes },
                  { key: "no", label: "No, maintain physical archives", pct: pctNo, votes: pollVotes1.no },
                  { key: "undecided", label: "Undecided / Under evaluation", pct: pctUndecided, votes: pollVotes1.undecided },
                ].map((option) => {
                  return (
                    <button
                      key={option.key}
                      disabled={hasVoted1}
                      onClick={() => handleVote1(option.key as any)}
                      className={cn(
                        "w-full text-left p-3.5 border rounded-xl relative overflow-hidden transition-all duration-300 cursor-pointer select-none group",
                        hasVoted1 ? "border-slate-200" : "border-slate-200 hover:border-emerald-500 bg-slate-50/50 hover:bg-white"
                      )}
                    >
                      {/* Percent slider fill on vote */}
                      {hasVoted1 && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${option.pct}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="absolute inset-y-0 left-0 bg-emerald-500/10 z-0 pointer-events-none"
                        />
                      )}

                      <div className="relative z-10 flex items-center justify-between text-xs font-bold leading-none">
                        <span className={cn(hasVoted1 ? "text-slate-800" : "text-slate-700 group-hover:text-emerald-700")}>{option.label}</span>
                        {hasVoted1 && <span className="text-emerald-600 font-extrabold">{option.pct}%</span>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {hasVoted1 && (
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest text-center border-t border-slate-100 pt-3">
                  Thanks for voting! (Total votes: {totalVotes1})
                </div>
              )}
            </div>

            {/* Poll 2 Card */}
            <div className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Vote className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-serif leading-none">Infrastructure Survey</h3>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm font-bold leading-relaxed">
                Which developmental infrastructure should be prioritized inside terminal border villages?
              </p>

              <div className="space-y-3">
                {[
                  { key: "roads", label: "All-weather double-lane roads", pct: pctRoads, votes: pollVotes2.roads },
                  { key: "cell", label: "High-speed cellular internet outposts", pct: pctCell, votes: pollVotes2.cell },
                  { key: "solar", label: "Solar grid battery backups", pct: pctSolar, votes: pollVotes2.solar },
                ].map((option) => {
                  return (
                    <button
                      key={option.key}
                      disabled={hasVoted2}
                      onClick={() => handleVote2(option.key as any)}
                      className={cn(
                        "w-full text-left p-3.5 border rounded-xl relative overflow-hidden transition-all duration-300 cursor-pointer select-none group",
                        hasVoted2 ? "border-slate-200" : "border-slate-200 hover:border-emerald-500 bg-slate-50/50 hover:bg-white"
                      )}
                    >
                      {hasVoted2 && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${option.pct}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="absolute inset-y-0 left-0 bg-emerald-500/10 z-0 pointer-events-none"
                        />
                      )}

                      <div className="relative z-10 flex items-center justify-between text-xs font-bold leading-none">
                        <span className={cn(hasVoted2 ? "text-slate-800" : "text-slate-700 group-hover:text-emerald-700")}>{option.label}</span>
                        {hasVoted2 && <span className="text-emerald-600 font-extrabold">{option.pct}%</span>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {hasVoted2 && (
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest text-center border-t border-slate-100 pt-3">
                  Thanks for voting! (Total votes: {totalVotes2})
                </div>
              )}
            </div>
          </div>
        </div>

        {/* COMMUNITY IDEAS WALL */}
        <section className="space-y-8">
          <div className="border-b border-slate-200/60 pb-4">
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">Community Ideas Wall</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">Browse and gain inspiration from developmental ideas suggested by other citizens.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_IDEAS.map((idea) => (
              <div key={idea.id} className="bg-white/80 border border-slate-200/60 shadow-lg shadow-slate-100/20 rounded-2xl p-6 text-left flex flex-col justify-between min-h-[180px]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                      {idea.category}
                    </span>
                    <span className="text-[9px] font-extrabold text-slate-400">{idea.date}</span>
                  </div>
                  <h4 className="text-sm font-bold font-serif text-slate-900 leading-snug">"{idea.title}"</h4>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-extrabold text-slate-500">By {idea.user}</span>
                  <div className="flex items-center gap-1 text-[10px] font-black text-emerald-600">
                    <Heart className="w-3.5 h-3.5 fill-current text-emerald-500" />
                    <span>{idea.votes} votes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* THANK YOU MODAL SUCCESS TRIGGER */}
        <AnimatePresence>
          {showThankYou && (
            <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-8 shadow-2xl text-center space-y-6 relative"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-slate-900 leading-none">Thank You!</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                    Your developmental suggestion has been logged officially. Each file is reviewed by the local constituency steering council.
                  </p>
                </div>

                <button
                  onClick={() => setShowThankYou(false)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer select-none"
                >
                  Close Message
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
