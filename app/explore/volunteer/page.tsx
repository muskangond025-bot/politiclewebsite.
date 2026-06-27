"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle, Mail, Phone, User, Calendar, Shield, Sparkles, Send, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const BENEFITS = [
  { title: "Direct Administrative Link", desc: "Gain pathways to present community suggestions and local policies reviews to steering teams.", icon: Shield, color: "text-blue-600 bg-blue-50" },
  { title: "Digital Campaign Experience", desc: "Acquire high-tech campaign training, social media audits, and local analytics credentials.", icon: Sparkles, color: "text-emerald-600 bg-emerald-50" },
  { title: "Civic Leadership Growth", desc: "Lead local village grievance roundtables and coordinate public request reviews directly.", icon: Award, color: "text-rose-600 bg-rose-50" },
];

const OPPORTUNITIES = [
  { id: 1, title: "Social Media Amplification", desc: "Promoting official developmental statements, policy SOPs, and cooperative updates on digital channels." },
  { id: 2, title: "Community Request Logging", desc: "Assisting local block electors in formatting and lodging municipal requests on the grievance dashboard." },
  { id: 3, title: "Event & Seminar Logistics", desc: "Coordinating local cooperative dairies assemblies, training workshops, and public hearings." },
];

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function Volunteer() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "Social Media Amplification" });
  const [selectedDays, setSelectedDays] = useState<string[]>(["Saturday", "Sunday"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [openOpp, setOpenOpp] = useState<number | null>(1);

  const toggleDaySelection = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmitProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", interest: "Social Media Amplification" });
      setSelectedDays(["Saturday", "Sunday"]);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pt-28 pb-20 relative overflow-hidden text-left">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-100/15 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-rose-100/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10 space-y-16">
        
        {/* HERO BANNER */}
        <div className="space-y-6 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 font-extrabold text-[10px] uppercase tracking-widest shadow-sm">
            <Award className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            Amplify Community Reforms
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-slate-900 tracking-tight leading-[1.15]">
            Register as a Digital <span className="text-rose-600 italic font-medium">Volunteer</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
            Lend your skills to accelerate national growth. Support community outreach, audit village requests, organize regional dairy assemblies, and log local ideas.
          </p>
        </div>

        {/* BENEFITS PANEL */}
        <section className="space-y-8">
          <div className="border-b border-slate-200/60 pb-4">
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">Why Volunteer with Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/60 shadow-lg shadow-slate-100/30 rounded-2xl p-6 space-y-4 text-left">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner", b.color)}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-serif leading-none">{b.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* DOUBLE COLUMN: FORM & OPPORTUNITIES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: REGISTRATION FORM & WEEKLY GRID (Cols 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-10 space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold font-serif text-slate-900 leading-none">Volunteer Profile Registration</h2>
              <span className="text-[10px] text-slate-400 font-extrabold mt-1.5 uppercase tracking-wider block">Join the core digital network</span>
            </div>

            <form onSubmit={handleSubmitProfile} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 transition-all"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter phone number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 transition-all"
                  />
                </div>
              </div>

              {/* Area of Interest Selector */}
              <div>
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Primary Interest Sector</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData((prev) => ({ ...prev, interest: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 transition-all cursor-pointer"
                >
                  <option>Social Media Amplification</option>
                  <option>Community Request Logging</option>
                  <option>Event & Seminar Logistics</option>
                </select>
              </div>

              {/* INTERACTIVE WEEKLY AVAILABILITY GRID */}
              <div className="space-y-3">
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400">Weekly Availability (Select Days)</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {WEEKDAYS.map((day) => {
                    const isSelected = selectedDays.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDaySelection(day)}
                        className={cn(
                          "px-3.5 py-2 border rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5",
                          isSelected
                            ? "bg-rose-50 border-rose-200 text-rose-700 font-extrabold shadow-sm"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        )}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-rose-600 shrink-0" />}
                        <span>{day}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-500/10 cursor-pointer select-none transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Registering...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Register Profile
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT: OPPORTUNITIES ACCORDION (Cols 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-serif leading-none border-b border-slate-100 pb-3">Opportunities Desk</h3>
              <div className="space-y-4">
                {OPPORTUNITIES.map((opp) => {
                  const isOpen = openOpp === opp.id;
                  return (
                    <div key={opp.id} className="border border-slate-150 rounded-2xl overflow-hidden shadow-sm">
                      <button
                        type="button"
                        onClick={() => setOpenOpp(isOpen ? null : opp.id)}
                        className="w-full text-left flex items-center justify-between p-4 font-bold text-slate-800 hover:text-rose-600 text-xs font-serif transition-colors cursor-pointer select-none"
                      >
                        <span>{opp.title}</span>
                        <ChevronDown className={cn(
                          "w-3.5 h-3.5 text-slate-400 transition-transform duration-300",
                          isOpen && "rotate-180 text-rose-600"
                        )} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-4 pb-4 pt-0 text-slate-600 text-xs font-medium leading-relaxed border-t border-slate-50">
                              {opp.desc}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* THANK YOU MODAL SUCCESS */}
        <AnimatePresence>
          {showSuccess && (
            <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-8 shadow-2xl text-center space-y-6 relative"
              >
                <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-slate-900 leading-none">Profile Received</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                    Thank you for volunteering. Our digital campaign desk will contact you via email to schedule your first orientation call.
                  </p>
                </div>

                <button
                  onClick={() => setShowSuccess(false)}
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
