"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, User, Mail, Phone, UploadCloud, CheckCircle, ChevronDown, ShieldAlert, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const PURPOSES = [
  "Local Grievance Hearing",
  "Cooperative Society Policy Review",
  "Strategic Border Village Visit Proposal",
  "Other Constituency Welfare Issues",
];

const TIME_SLOTS = [
  "10:00 AM - 11:30 AM",
  "02:00 PM - 03:30 PM",
  "04:00 PM - 05:30 PM",
];

export default function RequestAppointment() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", purpose: PURPOSES[0], date: "", slot: TIME_SLOTS[0] });
  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachedFile(e.target.files[0].name);
    }
  };

  const handleSubmitAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
    }, 1500);
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
              <CalendarDays className="w-3.5 h-3.5 text-[#E25822] animate-pulse" />
              Constituency Appointments Desk
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Request an <span className="text-blue-500 italic font-medium">Appointment</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Schedule formal meetings, choose a preferred date and time slot, and submit brief purpose agendas online.
            </p>
          </div>
        </div>

        {/* APPOINTMENT FORM CARD */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-10 space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold font-serif text-slate-900 leading-none">Request Booking Form</h2>
            <span className="text-[10px] text-slate-400 font-extrabold mt-1.5 uppercase tracking-wider block">Official office registry</span>
          </div>

          <form onSubmit={handleSubmitAppointment} className="space-y-6">
            
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
                placeholder="Enter full name"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                />
              </div>
            </div>

            {/* Purpose Selector */}
            <div>
              <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Meeting Agenda / Purpose</label>
              <select
                value={formData.purpose}
                onChange={(e) => setFormData((prev) => ({ ...prev, purpose: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all cursor-pointer"
              >
                {PURPOSES.map((p, idx) => (
                  <option key={idx}>{p}</option>
                ))}
              </select>
            </div>

            {/* Preferred Date & Time slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Preferred Time Slot</label>
                <div className="flex flex-col gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = formData.slot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, slot }))}
                        className={cn(
                          "w-full text-left p-2.5 border rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none",
                          isSelected
                            ? "bg-blue-50 border-blue-200 text-blue-700 font-extrabold"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        )}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Agenda Brief Upload */}
            <div className="space-y-3">
              <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400">Brief Agenda Document (Optional)</label>
              <div className="relative border-2 border-dashed border-slate-200/80 hover:border-blue-400 rounded-2xl p-6 transition-all duration-300 bg-slate-50/50 hover:bg-blue-50/5 text-center flex flex-col items-center justify-center gap-2 group">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-blue-500 group-hover:scale-105 transition-all" />
                <span className="text-xs font-black text-slate-700 leading-none">Click to attach file</span>
              </div>
              
              {attachedFile && (
                <div className="bg-slate-50 border border-slate-150 rounded-xl px-4 py-2 text-xs font-semibold text-slate-800 flex justify-between items-center">
                  <span>{attachedFile}</span>
                  <button type="button" onClick={() => setAttachedFile(null)} className="text-slate-400 hover:text-rose-500">Remove</button>
                </div>
              )}
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2.5 pt-2">
              <input type="checkbox" required className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-600/10 cursor-pointer" />
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                I agree that this is a request submission only. The actual slot date confirmation is dispatched separately via SMS / email notifications once approved by the office officer.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/10 cursor-pointer select-none transition-colors"
            >
              {isSubmitting ? "Submitting Request..." : "Request Appointment"}
            </button>

          </form>
        </div>

        {/* CONFIRMATION OVERLAY SUCCESS MODAL */}
        <AnimatePresence>
          {showConfirmation && (
            <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-8 shadow-2xl text-center space-y-6 relative"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif text-slate-900 leading-none">Request Received</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                    Your appointment request has been submitted. The Gandhinagar office will review your agenda and send confirmation updates.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setShowConfirmation(false);
                    setFormData({ name: "", email: "", phone: "", purpose: PURPOSES[0], date: "", slot: TIME_SLOTS[0] });
                    setAttachedFile(null);
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
