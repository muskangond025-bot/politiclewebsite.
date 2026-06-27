"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ShieldAlert, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const OFFICES = [
  {
    city: "Gandhinagar Constituency Office",
    address: "Block 4, Sector 10-B, Near Legislative Assembly, Gandhinagar, Gujarat - 382010",
    phone: "+91-79-23249000",
    email: "gandhinagar@krishnapal.in",
    hours: "Mon-Sat: 09:30 AM - 05:30 PM",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117367.62534571777!2d72.58079633816656!3d23.221235122176466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bf9291f0945%3A0xc39f86cf50953a99!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1719480000000!5m2!1sen!2sin"
  },
  {
    city: "New Delhi Administrative Office",
    address: "North Block, Central Secretariat, New Delhi - 110001",
    phone: "+91-11-23092000",
    email: "delhi@krishnapal.in",
    hours: "Mon-Fri: 10:00 AM - 05:00 PM",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1643444640166!2d77.20572707694901!3d28.609867975678385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd39c0000001%3A0xe5a3e1fc7e8a9f60!2sNorth%20Block!5e0!3m2!1sen!2sin!4v1719480000000!5m2!1sen!2sin"
  }
];

const EMERGENCY_CONTACTS = [
  { service: "Constituency Grievance Desk", phone: "+91-79-23249001" },
  { service: "PACS Support Helpdesk", phone: "1800-425-4000" },
  { service: "Border Village Emergency Line", phone: "1912" }
];

export default function ContactOffice() {
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const activeOffice = OFFICES[selectedOffice];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
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
              <Globe className="w-3.5 h-3.5 text-[#E25822] animate-pulse" />
              Office Directory & Support
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-none">
              Contact Our <span className="text-blue-500 italic font-medium">Offices</span> Directly
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
              Get in touch with constituency coordinators, browse Google map locations, check office hours, and file suggestions.
            </p>
          </div>
        </div>

        {/* OFFICE SELECTOR BUTTONS & MAPS INTEGRATION */}
        <section className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-bold font-serif text-slate-900 leading-none">Select Office Location</h2>
              <span className="text-[10px] text-slate-400 font-extrabold mt-1.5 uppercase tracking-wider block">Find nearest directory</span>
            </div>
            
            <div className="flex gap-2">
              {OFFICES.map((o, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedOffice(idx)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer select-none",
                    selectedOffice === idx
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 border border-slate-150 hover:bg-slate-100"
                  )}
                >
                  {idx === 0 ? "Gandhinagar" : "New Delhi"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Office detail card (Cols 5) */}
            <div className="lg:col-span-5 space-y-6 text-xs font-medium text-slate-700">
              <h3 className="text-base font-bold font-serif text-slate-900 leading-none">{activeOffice.city}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none block mb-1">Address</span>
                    <p className="text-slate-600 leading-relaxed font-semibold">{activeOffice.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none block mb-1">Phone Helpline</span>
                    <p className="text-slate-600 font-semibold">{activeOffice.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none block mb-1">Email Inquiry</span>
                    <p className="text-slate-600 font-semibold">{activeOffice.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none block mb-1">Office Hours</span>
                    <p className="text-slate-600 font-semibold">{activeOffice.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Embedded Styled Google Maps Iframe (Cols 7) */}
            <div className="lg:col-span-7 aspect-video relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <iframe
                src={activeOffice.mapIframe}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* DOUBLE COLUMN: CONTACT FORM & EMERGENCY DIRECTORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: CONTACT FORM (Cols 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold font-serif text-slate-900 leading-none">Office Contact Form</h3>
              <span className="text-[10px] text-slate-400 font-extrabold mt-1.5 uppercase tracking-wider block">Reach out directly</span>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Message / Inquiry</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Type message text here..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-lg cursor-pointer select-none"
              >
                {isSubmitting ? "Sending message..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT: EMERGENCY CONTACTS (Cols 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/60 shadow-xl shadow-slate-100/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest font-serif leading-none">Emergency Helplines</h3>
              </div>

              <div className="space-y-4">
                {EMERGENCY_CONTACTS.map((ec, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                    <span className="text-slate-500 text-xs font-bold font-serif">{ec.service}</span>
                    <span className="text-[#E25822] text-xs font-black select-all">{ec.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* THANK YOU MODAL */}
        <AnimatePresence>
          {showSuccess && (
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
                  <h3 className="text-xl font-bold font-serif text-slate-900 leading-none">Message Sent!</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                    Thank you. Your message has been received by office coordinators. We will reply to your email directly.
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
