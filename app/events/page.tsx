"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, Clock, Award, CheckCircle, ArrowRight, X, Sparkles, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const EVENTS = [
  { id: 1, title: "District Dairy Cooperative Assembly", date: "2026-07-10", time: "10:00 AM", location: "Sinnar Central Hall", desc: "A training session on computerized ledger entries and crop credit policies.", status: "Upcoming" },
  { id: 2, title: "Vibrant Border Village Audit Summit", date: "2026-07-18", time: "02:00 PM", location: "District Library Block", desc: "Evaluating grid connectivity, solar panel installations, and road layouts.", status: "Upcoming" },
  { id: 3, title: "NIPER Research Laboratory Opening", date: "2026-06-18", time: "11:00 AM", location: "Ahmedabad North Campus", desc: "Inaugurating smart biochemistry labs for young science graduates.", status: "Past" },
  { id: 4, title: "Cooperative Milk Chiller Launch", date: "2026-06-05", time: "09:30 AM", location: "Gandhinagar Dairy Hub", desc: "Launching centralized 5-metric-ton chiller systems.", status: "Past" },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isRegistering, setIsRegistering] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      setShowThankYou(true);
      setFormData({ name: "", email: "", phone: "" });
    }, 1200);
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
              <CalendarDays className="w-3.5 h-3.5 text-[#E25822]" />
              Campaign Schedule & assemblies
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Upcoming Public <span className="text-blue-500 italic font-medium">Programs</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Coordinate and register for developmental summits, rural cooperative dairy workshops, and administrative hearings.
            </p>
          </div>
        </div>

        {/* DOUBLE COLUMN: CALENDAR GRID & EVENTS list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: UPCOMING & PAST EVENTS (Cols 8) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Upcoming Events */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 border-b border-slate-100 pb-3 leading-none">Upcoming Events</h2>
              <div className="space-y-4">
                {EVENTS.filter(e => e.status === "Upcoming").map((e) => (
                  <div key={e.id} className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between md:flex-row md:items-center gap-6 text-left">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-3.5 h-3.5 text-blue-600" />
                          {e.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          {e.time}
                        </span>
                      </div>
                      <h3 className="text-base font-bold font-serif text-slate-900 leading-snug">{e.title}</h3>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">{e.desc}</p>
                    </div>

                    <button
                      onClick={() => setSelectedEvent(e)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors shrink-0 cursor-pointer select-none"
                    >
                      Register Now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Events */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-slate-900 border-b border-slate-100 pb-3 leading-none">Past Events</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {EVENTS.filter(e => e.status === "Past").map((e) => (
                  <div key={e.id} className="bg-white/70 border border-slate-200/60 rounded-xl p-5 shadow-sm text-left space-y-3">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{e.date}</span>
                    <h4 className="text-sm font-bold font-serif text-slate-800 leading-snug">{e.title}</h4>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Calendar View Placeholder Widget (Cols 4) */}
          <div className="lg:col-span-4 bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-serif leading-none border-b border-slate-100 pb-3">Calendar View</h3>
            <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
              <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
            </div>
            
            {/* Simple calendar cell matrix */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 31 }).map((_, idx) => {
                const day = idx + 1;
                const hasEvent = day === 10 || day === 18;
                return (
                  <div
                    key={idx}
                    className={cn(
                      "aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all",
                      hasEvent
                        ? "bg-blue-600 text-white font-extrabold cursor-pointer hover:scale-105 shadow-md shadow-blue-500/10"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    )}
                    onClick={() => {
                      if (day === 10) setSelectedEvent(EVENTS[0]);
                      if (day === 18) setSelectedEvent(EVENTS[1]);
                    }}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
            
            {/* Key */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-[10px] font-semibold text-slate-500">
              <span className="w-2.5 h-2.5 rounded bg-blue-600 inline-block" />
              <span>Days with scheduled assemblies</span>
            </div>
          </div>
        </div>

        {/* REGISTRATION MODAL FORM */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-8 shadow-2xl relative text-left space-y-6"
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 p-1.5 border border-slate-150 hover:bg-slate-50 rounded-full text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[8px] font-black text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100 uppercase tracking-widest leading-none">
                    Register seat
                  </span>
                  <h3 className="text-base font-bold font-serif text-slate-900 leading-snug">{selectedEvent.title}</h3>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter full name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter email"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isRegistering}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors cursor-pointer select-none disabled:opacity-50"
                  >
                    {isRegistering ? "Registering..." : "Confirm Reservation"}
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* THANK YOU MODAL SUCCESS */}
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
                  <h3 className="text-xl font-bold font-serif text-slate-900 leading-none">Registered!</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                    Your reservation has been confirmed. A QR pass has been sent to your email to present at the desk.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setShowThankYou(false);
                    setSelectedEvent(null);
                  }}
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
