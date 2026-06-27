"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Send, FileText, CheckCircle2, UploadCloud, Trash2, Search, HelpCircle, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPLAINT_CATEGORIES = [
  { id: "infra", label: "Infrastructure Issues", desc: "Damaged village highways, solar grid faults, or clean water pipeline leaks." },
  { id: "coop", label: "Cooperative Audits", desc: "Problems with PACS digital loans, crop ledger delays, or cold storage chillers." },
  { id: "gov", label: "Civic Administration", desc: "Schoolsmart labs operations, dispensary trauma units supplies, or document delays." },
];

const GUIDELINES = [
  "Include exact location details of the infrastructure or cooperative bank node.",
  "Attach verified photo evidence (under 5MB) representing the issue details.",
  "Provide a working mobile number to receive real-time SMS verification tokens."
];

const FAQS = [
  { q: "What is the typical resolution time for local grievances?", a: "Most local infrastructure issues are inspected and routed to public works within 72 hours. Resolved updates are updated instantly." },
  { q: "Can I track my submission status online?", a: "Yes. Every submission returns a 10-digit alphanumeric tracking ID. Input it below to trace resolution stages." }
];

export default function RaiseComplaints() {
  const [activeCategory, setActiveCategory] = useState("infra");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", text: "" });
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTrackId, setSuccessTrackId] = useState<string | null>(null);

  // Track state
  const [trackQuery, setTrackQuery] = useState("");
  const [trackedStatus, setTrackedStatus] = useState<any | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachedFiles((prev) => [...prev, e.target.files![0].name]);
    }
  };

  const handleRemoveFile = (idx: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmitComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = "GRV" + Math.floor(100000 + Math.random() * 900000);
      setSuccessTrackId(generatedId);
      setFormData({ name: "", email: "", phone: "", text: "" });
      setAttachedFiles([]);
    }, 1500);
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackQuery.trim()) {
      setTrackedStatus({
        id: trackQuery,
        status: "Verification Phase",
        date: "2026-06-27",
        desc: "Inspector assigned to audit local block pipeline leak. Action pending within 24 hours."
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-100/15 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-orange-100/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* HERO BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-900">
          <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-extrabold text-[9px] uppercase tracking-widest">
              <ShieldAlert className="w-3.5 h-3.5 text-[#E25822] animate-pulse" />
              Public Grievance Portal
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Raise a <span className="text-blue-500 italic font-medium">Complaint</span> Online
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              File local complaints, upload evidence documents, and trace resolution parameters in real-time.
            </p>
          </div>
        </div>

        {/* DOUBLE COLUMN: FORM & TRACKING WIDGET */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: FORM (Cols 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-10 space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold font-serif text-slate-900 leading-none">Submit Complaint</h2>
              <span className="text-[10px] text-slate-400 font-extrabold mt-1.5 uppercase tracking-wider block">Grievance registry</span>
            </div>

            <form onSubmit={handleSubmitComplaint} className="space-y-6">
              
              {/* Category Select Cards */}
              <div className="space-y-3">
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400">Select Category</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {COMPLAINT_CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                          "text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between min-h-[90px] cursor-pointer",
                          isActive
                            ? "bg-blue-50/50 border-blue-200 shadow-sm font-bold text-blue-700"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        )}
                      >
                        <span className="text-[10px] uppercase tracking-wider font-extrabold block">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Contact details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-1">
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 font-sans">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 font-sans">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Email address"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 font-sans">Mobile</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Mobile number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                  />
                </div>
              </div>

              {/* Text area */}
              <div>
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 font-sans">Complaint Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.text}
                  onChange={(e) => setFormData((prev) => ({ ...prev, text: e.target.value }))}
                  placeholder="Describe your issue with village location details..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all resize-none"
                />
              </div>

              {/* Document upload area */}
              <div className="space-y-3">
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 font-sans">Evidence Documents (Optional)</label>
                <div className="relative border-2 border-dashed border-slate-200/80 hover:border-blue-400 rounded-2xl p-6 transition-all duration-300 bg-slate-50/50 hover:bg-blue-50/5 text-center flex flex-col items-center justify-center gap-2 group">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-blue-500 group-hover:scale-105 transition-all" />
                  <span className="text-xs font-black text-slate-700 leading-none">Click to attach files</span>
                </div>

                {attachedFiles.length > 0 && (
                  <div className="space-y-2">
                    {attachedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-slate-50 border border-slate-150 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800">
                        <span className="truncate max-w-[200px]">{file}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="text-slate-400 hover:text-rose-500 transition-colors cursor-pointer animate-in fade-in duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/10 cursor-pointer select-none transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </button>
            </form>
          </div>

          {/* RIGHT: TRACK COMPLAINT & GUIDELINES & EMERGENCY (Cols 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Track Complaint Widget */}
            <div className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Search className="w-5 h-5 text-blue-600" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-serif leading-none">Track Complaint</h3>
              </div>

              <form onSubmit={handleTrackSubmit} className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Enter 10-digit ID..."
                  value={trackQuery}
                  onChange={(e) => setTrackQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer select-none"
                >
                  Track
                </button>
              </form>

              {trackedStatus && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-xs font-medium">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Status</span>
                    <span className="text-blue-600 font-extrabold uppercase tracking-wider">{trackedStatus.status}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-150 pt-2">
                    <span className="text-slate-400">Last Audit</span>
                    <span className="text-slate-800 font-bold">{trackedStatus.date}</span>
                  </div>
                  <p className="text-slate-500 font-semibold leading-relaxed border-t border-slate-150 pt-2">
                    {trackedStatus.desc}
                  </p>
                </div>
              )}
            </div>

            {/* Guidelines */}
            <div className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-4 text-left">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-serif leading-none border-b border-slate-100 pb-3">Filing Guidelines</h3>
              <ul className="space-y-3">
                {GUIDELINES.map((g, idx) => (
                  <li key={idx} className="text-slate-500 text-xs font-semibold flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* COMPLAINT SUCCESS OVERLAY DIALOG */}
        <AnimatePresence>
          {successTrackId && (
            <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-8 shadow-2xl text-center space-y-6 relative"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-slate-900 leading-none">Complaint Filed!</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                    Your grievance has been logged successfully inside the central audit register.
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl font-mono text-sm font-black text-blue-600 select-all">
                    {successTrackId}
                  </div>
                </div>

                <button
                  onClick={() => setSuccessTrackId(null)}
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
