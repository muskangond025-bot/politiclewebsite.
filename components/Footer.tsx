"use client";

import React, { useState } from "react";
import Link from "next/link";
import { t, LangCode } from "@/lib/translations";

const BIO_TEXTS = {
  EN: "Providing dedicated, transparent, and visionary leadership that supports our constituency's growth, prosperity, and future success.",
  HI: "समर्पित, पारदर्शी और दूरदर्शी नेतृत्व प्रदान करना जो हमारे निर्वाचन क्षेत्र के विकास, समृद्धि और भविष्य की सफलता का समर्थन करता है।",
  MR: "समर्पित, पारदर्शक आणि दूरदर्शी नेतृत्व प्रदान करणे जे आमच्या मतदारसंघाच्या वाढीला, समृद्धीला आणि भविष्यातील यशाला पाठिंबा देते।"
};

const OFFICIAL_PORTAL = {
  EN: "Official Portal",
  HI: "आधिकारिक पोर्टल",
  MR: "अधिकृत पोर्टल"
};

const REGISTRY_VERIFIED = {
  EN: "Registry Verified",
  HI: "रजिस्ट्री सत्यापित",
  MR: "रजिस्ट्री सत्यापित"
};

const QUICK_LINKS_TITLE = {
  EN: "Quick links",
  HI: "त्वरित लिंक",
  MR: "क्विक लिंक्स"
};

const GET_IN_TOUCH_TITLE = {
  EN: "Get in touch",
  HI: "संपर्क करें",
  MR: "संपर्क साधा"
};

const ADDRESS_LINES = {
  EN: ["Room No. 104, North Block,", "New Delhi, Delhi 110001"],
  HI: ["कमरा नंबर 104, नॉर्थ ब्लॉक,", "नई दिल्ली, दिल्ली 110001"],
  MR: ["रूम नं. १०४, नॉर्थ ब्लॉक,", "नवी दिल्ली, दिल्ली ११०००१"]
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [language, setLanguage] = useState<LangCode>("EN");
  const [processedImage, setProcessedImage] = useState<string>("/hero_leader_orange.png");

  React.useEffect(() => {
    const updateLang = () => {
      const saved = localStorage.getItem("preferred_language");
      if (saved) {
        setLanguage(saved as LangCode);
      }
    };
    updateLang();
    window.addEventListener("languageChange", updateLang);
    return () => window.removeEventListener("languageChange", updateLang);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    
    const img = new window.Image();
    img.src = "/hero_leader_orange.png";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      // Sample background color from top-left pixel
      const bgR = data[0];
      const bgG = data[1];
      const bgB = data[2];
      
      // Closeness threshold for orange background color
      const threshold = 45;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Euclidean distance of color from background color
        const dist = Math.sqrt(
          Math.pow(r - bgR, 2) +
          Math.pow(g - bgG, 2) +
          Math.pow(b - bgB, 2)
        );
        
        if (dist < threshold) {
          if (dist < threshold - 15) {
            data[i + 3] = 0; // Fully transparent
          } else {
            const ratio = (dist - (threshold - 15)) / 15;
            data[i + 3] = Math.round(ratio * 255); // Feathered alpha transition
          }
        }
      }
      
      ctx.putImageData(imgData, 0, 0);
      setProcessedImage(canvas.toDataURL());
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const getBioText = () => BIO_TEXTS[language] || BIO_TEXTS.EN;
  const getOfficialPortalLabel = () => OFFICIAL_PORTAL[language] || OFFICIAL_PORTAL.EN;
  const getRegistryVerifiedLabel = () => REGISTRY_VERIFIED[language] || REGISTRY_VERIFIED.EN;
  const getQuickLinksTitle = () => QUICK_LINKS_TITLE[language] || QUICK_LINKS_TITLE.EN;
  const getGetInTouchTitle = () => GET_IN_TOUCH_TITLE[language] || GET_IN_TOUCH_TITLE.EN;
  const getAddressLines = () => ADDRESS_LINES[language] || ADDRESS_LINES.EN;

  return (
    <footer className="w-full bg-white text-slate-600 mt-auto pt-16 pb-8 border-t border-slate-100 relative z-10 overflow-hidden font-sans">
      {/* Top 3-Column Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12">
        {/* Column 1: Newsletter, Description & Verification Badges */}
        <div className="lg:col-span-5 flex flex-col space-y-5 text-left">
          {/* Pill-shaped subscription field */}
          <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-3 rounded-full text-xs font-bold text-center">
                {t("footer.subscribedSuccess", language)}
              </div>
            ) : (
              <div className="flex items-center border border-[#E25822] rounded-full p-1 bg-white focus-within:ring-2 focus-within:ring-[#E25822]/20 transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.emailPlaceholder", language)}
                  required
                  className="flex-grow bg-transparent px-4 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-[#E25822] hover:bg-[#E25822]/90 text-white font-bold px-6 py-2 rounded-full text-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  subscribe
                </button>
              </div>
            )}
          </form>

          {/* Biography summary snippet */}
          <p className="text-xs leading-relaxed text-slate-700 font-semibold max-w-sm">
            {getBioText()}
          </p>
 
          {/* Quality indicators */}
          <div className="flex items-center gap-6 text-[11px] font-bold text-slate-800 pt-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[#E25822]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <span>{getOfficialPortalLabel()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#E25822]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span>{getRegistryVerifiedLabel()}</span>
            </div>
          </div>
        </div>
 
        {/* Column 2: Quick Links */}
        <div className="lg:col-span-3 flex flex-col space-y-4 text-left">
          <h4 className="text-base font-bold text-black tracking-tight">
            {getQuickLinksTitle()}
          </h4>
          <ul className="space-y-2.5 text-xs font-bold text-slate-700">
            <li>
              <Link href="/" className="hover:text-[#E25822] transition-colors duration-200">
                {t("nav.home", language)}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#E25822] transition-colors duration-200">
                {t("nav.about", language)}
              </Link>
            </li>
            <li>
              <Link href="/views" className="hover:text-[#E25822] transition-colors duration-200">
                {t("nav.myview", language)}
              </Link>
            </li>
            <li>
              <Link href="/stalwart-says" className="hover:text-[#E25822] transition-colors duration-200">
                {t("nav.stalwart", language)}
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-[#E25822] transition-colors duration-200">
                {t("nav.press", language)}
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#E25822] transition-colors duration-200">
                {t("nav.gallery", language)}
              </Link>
            </li>
            <li>
              <Link href="/explore" className="hover:text-[#E25822] transition-colors duration-200">
                {t("nav.explore", language)}
              </Link>
            </li>
          </ul>
        </div>
 
        {/* Column 3: Get In Touch */}
        <div className="lg:col-span-4 flex flex-col space-y-4 text-left">
          <h4 className="text-base font-bold text-black tracking-tight">
            {getGetInTouchTitle()}
          </h4>
          <div className="space-y-3.5 text-xs font-bold text-slate-700">
            <p className="leading-relaxed">
              {getAddressLines()[0]}<br />
              {getAddressLines()[1]}
            </p>
            <p>
              <a href="tel:+911123092011" className="hover:text-[#E25822] transition-colors duration-200">
                +91 (11) 2309-2011
              </a>
            </p>
            <p>
              <a href="mailto:hm@mha.gov.in" className="hover:text-[#E25822] transition-colors duration-200">
                hm@mha.gov.in
              </a>
            </p>
          </div>
        </div>
      </div>
 
      {/* Bottom Overlapping Banner Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 w-full relative pt-12 overflow-visible">
        {/* Rounded Orange Banner Container */}
        <div className="bg-[#E25822] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden h-[280px] sm:h-[320px] md:h-[400px] w-full flex items-center shadow-xl shadow-[#E25822]/10 z-0">
          
          {/* Decorative Mint-Green Bubble (masked inside card) */}
          <div className="absolute -bottom-16 -left-16 w-48 h-48 sm:w-64 sm:h-64 bg-[#A8E6CF]/45 rounded-full blur-[1px] pointer-events-none z-5" />
 
          {/* Origami Paper Airplane & Path (masked inside card) */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-24 z-20 pointer-events-none">
            <svg className="w-32 h-20 md:w-48 md:h-28 text-white/40" viewBox="0 0 200 120" fill="none">
              <path
                d="M 15,95 Q 60,35 110,65 T 160,35"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.6"
              />
              <g transform="translate(150, 20) rotate(10) scale(0.9)">
                {/* Left Wing / Main fold */}
                <path d="M 0,8 L 30,0 L 12,18 Z" fill="#FFF59D" />
                {/* Right Wing */}
                <path d="M 30,0 L 22,22 L 12,18 Z" fill="#FFF176" />
                {/* Underfold */}
                <path d="M 12,18 L 22,22 L 18,26 Z" fill="#FBC02D" />
              </g>
            </svg>
          </div>
 
          {/* Huge White Text Background (placed on the left, z-10) */}
          <div className="absolute left-6 sm:left-12 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-10 max-w-[50%] sm:max-w-[55%] flex flex-col text-left">
            <h2 className="text-[2.2rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-black text-white leading-[0.9] select-none tracking-tighter uppercase font-sans pointer-events-none opacity-90">
              krishna<br />pal
            </h2>
          </div>
 
          {/* Candidate Portrait (placed ON TOP of the text, z-15, dynamically key-extracted with left-edge fade) */}
          <div className="absolute bottom-0 right-4 sm:right-8 md:right-12 lg:right-16 h-full w-auto flex items-end justify-center pointer-events-none z-15">
            <img
              src={processedImage}
              alt="Shri Krishna Pal"
              className="h-full w-auto object-contain object-bottom"
              style={{
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 12%)",
                maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 12%)",
              }}
            />
          </div>
        </div>
      </div>
 
      {/* Legal & Copyright bottom strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 w-full mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-800 font-bold gap-4">
        <div>
          © {new Date().getFullYear()} Krishna Pal. {t("footer.rightsReserved", language)}
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-[#E25822] transition-colors duration-200">
            {t("footer.privacy", language)}
          </Link>
          <Link href="/terms" className="hover:text-[#E25822] transition-colors duration-200">
            {t("footer.terms", language)}
          </Link>
          <Link href="/contact" className="hover:text-[#E25822] transition-colors duration-200">
            {t("footer.support", language)}
          </Link>
        </div>
      </div>
    </footer>
  );
}
