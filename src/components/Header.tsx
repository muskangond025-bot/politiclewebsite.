"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown, Check, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

import { t, LangCode } from "@/lib/translations";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision for Sinnar", href: "/vision-sinnar" },
  { label: "Achievements", href: "/achievements" },
  { label: "Projects", href: "/projects" },
  { label: "News & Media", href: "/press" },
  { label: "Events", href: "/events" },
  { label: "Schemes", href: "/schemes" },
  { label: "Appointment", href: "/appointment" },
  { label: "Complaints", href: "/complaints" },
  {
    label: "Explore",
    children: [
      { label: "Manifesto", href: "/explore/manifesto" },
      { label: "Constituency", href: "/explore/constituency" },
      { label: "Gallery", href: "/explore/gallery" },
      { label: "Volunteer", href: "/explore/volunteer" },
      { label: "Suggest an Idea", href: "/explore/suggest-idea" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const getNavTranslation = (label: string, lang: string): string => {
  const map: Record<string, string> = {
    "Home": "nav.home",
    "About": "nav.about",
    "Vision for Sinnar": "nav.vision",
    "Achievements": "nav.achievements",
    "Projects": "nav.projects",
    "News & Media": "nav.press",
    "Events": "nav.events",
    "Schemes": "nav.schemes",
    "Appointment": "nav.appointment",
    "Complaints": "nav.complaints",
    "Explore": "nav.explore",
    "Manifesto": "nav.manifesto",
    "Constituency": "nav.constituency",
    "Suggest an Idea": "nav.suggestIdea",
    "Volunteer": "nav.volunteer",
    "Contact": "nav.contact",
  };
  const key = map[label];
  return key ? t(key, lang as LangCode) : label;
};

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setIsSearchFocused(false);
    }
  };

  const handleIconClick = () => {
    if (isSearchOpen && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setIsSearchFocused(false);
    } else {
      setIsSearchOpen(!isSearchOpen);
      if (!isSearchOpen) {
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
    }
  };

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred_language");
      if (saved) {
        setLanguage(saved);
        const cookieValue = saved === "EN" ? "" : `/en/${saved.toLowerCase()}`;
        if (!document.cookie.includes(`googtrans=${cookieValue}`)) {
          document.cookie = `googtrans=${cookieValue}; path=/;`;
          document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname};`;
        }
      }
    }
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 px-4 sm:px-6 lg:px-8",
        scrolled ? "pt-2" : "pt-4"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-6 rounded-2xl border transition-all duration-500 backdrop-blur-md",
          scrolled
            ? "bg-white/85 border-slate-200/60 shadow-lg shadow-slate-100/40 py-1.5"
            : "bg-white/70 border-slate-100 py-3"
        )}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Emblem */}
          <Link href="/" className="flex items-center group" aria-label="Home">
            <div className="relative flex items-center justify-center w-9.5 h-9.5 rounded-xl bg-gradient-to-tr from-[#1E3A8A] to-[#2563EB] shadow-md shadow-[#1E3A8A]/10 group-hover:scale-105 transition-all duration-300">
              {/* Premium Abstract Lotus-Emblem representing growth, cooperation and leadership */}
              <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M12 7V17" stroke="#E25822" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M8 11C8 11 10 12.2 12 12.2C14 12.2 16 11 16 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M6 14.5C6 14.5 9.5 15.8 12 15.8C14.5 15.8 18 14.5 18 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              {/* Premium overlapping accent dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#E25822] rounded-full border border-white shadow-sm" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            onMouseLeave={() => {
              setHoveredIndex(null);
            }}
            className="hidden lg:flex items-center space-x-0.5"
          >
            {NAV_ITEMS.map((item, idx) => {
              if (item.children) {
                const isAnyChildActive = item.children.some((child) => pathname === child.href);
                const isDropdownOpen = hoveredDropdown === idx;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setHoveredDropdown(idx)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    <button
                      className={cn(
                        "relative flex items-center space-x-1 px-2 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 z-10 whitespace-nowrap cursor-pointer",
                        isAnyChildActive
                          ? "text-[#1E3A8A] font-extrabold"
                          : "text-slate-600 hover:text-[#1E3A8A]"
                      )}
                    >
                      <span>{getNavTranslation(item.label, language)}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 text-slate-400 transition-transform duration-300",
                          isDropdownOpen && "rotate-180 text-[#1E3A8A]",
                          isAnyChildActive && "text-[#1E3A8A]"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-slate-100/80 rounded-2xl shadow-xl shadow-slate-200/20 py-1.5 z-50 overflow-hidden"
                        >
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "w-full text-left block px-4 py-2 text-[10px] font-bold transition-colors duration-200 cursor-pointer",
                                  isChildActive
                                    ? "text-[#1E3A8A] bg-[#1E3A8A]/5 font-extrabold"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-[#1E3A8A]"
                                )}
                              >
                                <span>{getNavTranslation(child.label, language)}</span>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={cn(
                    "relative px-2 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 z-10 whitespace-nowrap",
                    isActive
                      ? "text-[#1E3A8A] font-extrabold"
                      : "text-slate-600 hover:text-[#1E3A8A]"
                  )}
                >
                  {hoveredIndex === idx && !isActive && (
                    <motion.span
                      layoutId="hoverNavBackground"
                      className="absolute inset-0 bg-slate-100 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#E25822] rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    />
                  )}
                  <span>{getNavTranslation(item.label, language)}</span>
                </Link>
              );
            })}
          </nav>

          {/* UTILITIES (Search, Translator) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Unique Premium Search Bar */}
            <motion.div
              className={cn(
                "relative flex items-center h-9 rounded-full border transition-all duration-300 overflow-hidden bg-slate-50/50 backdrop-blur-sm",
                isSearchFocused 
                  ? "border-[#1E3A8A] shadow-md shadow-[#1E3A8A]/5 bg-white" 
                  : "border-slate-200 hover:border-slate-300"
              )}
              animate={{ width: isSearchOpen ? 220 : 36 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
            >
              <button
                onClick={handleIconClick}
                className="focus:outline-none shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer text-slate-500 hover:text-[#1E3A8A] transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchSubmit}
                onFocus={() => {
                  setIsSearchFocused(true);
                  setIsSearchOpen(true);
                }}
                onBlur={() => {
                  setIsSearchFocused(false);
                  if (!searchQuery) setIsSearchOpen(false);
                }}
                placeholder="Search portal..."
                className={cn(
                  "bg-transparent text-[11px] font-extrabold text-slate-800 border-none outline-none pl-1 pr-12 w-full transition-opacity duration-200",
                  isSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
              />
              
              {/* Premium Shortcut Badge inside Search Bar */}
              {isSearchOpen && !searchQuery && (
                <span className="absolute right-2 px-1.5 py-0.5 rounded text-[8px] font-black text-slate-400 bg-slate-200/50 uppercase tracking-wider select-none pointer-events-none">
                  Ctrl K
                </span>
              )}
            </motion.div>

            {/* Language Switcher */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={cn(
                  "flex items-center justify-center w-9 h-9 border rounded-full text-xs font-bold transition-all duration-300 cursor-pointer relative",
                  isLangOpen
                    ? "border-[#1E3A8A] bg-[#1E3A8A]/5 text-[#1E3A8A] shadow-sm shadow-[#1E3A8A]/5"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                )}
                aria-label="Language Selector"
              >
                <Globe className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                <ChevronDown
                  className={cn(
                    "w-2.5 h-2.5 text-slate-400 transition-transform duration-300 ml-0.5 shrink-0",
                    isLangOpen && "rotate-180 text-[#1E3A8A]"
                  )}
                />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-32 bg-white border border-slate-100/80 rounded-xl shadow-xl shadow-slate-200/50 py-1.5 z-50 overflow-hidden"
                  >
                    {[
                      { code: "EN", label: "English" },
                      { code: "HI", label: "हिन्दी" },
                      { code: "MR", label: "मराठी" },
                    ].map((item) => {
                      const isSelected = language === item.code;
                      return (
                        <button
                          key={item.code}
                          onClick={() => {
                            const code = item.code;
                            setLanguage(code);
                            setIsLangOpen(false);
                            if (typeof window !== "undefined") {
                              localStorage.setItem("preferred_language", code);
                              const cookieValue = code === "EN" ? "" : `/en/${code.toLowerCase()}`;
                              document.cookie = `googtrans=${cookieValue}; path=/;`;
                              document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname};`;
                              window.dispatchEvent(new Event("languageChange"));
                              window.location.reload();
                            }
                          }}
                          className={cn(
                            "w-full text-left px-3.5 py-2 text-xs font-bold flex items-center justify-between transition-colors duration-200 cursor-pointer",
                            isSelected
                              ? "text-[#1E3A8A] bg-[#1E3A8A]/5 font-extrabold"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          )}
                        >
                          <span>{item.label}</span>
                          {isSelected && <Check className="w-3 h-3 text-[#1E3A8A]" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Language Switcher (Mobile icon) */}
            <button
              onClick={() => {
                const nextLang = language === "EN" ? "HI" : language === "HI" ? "MR" : "EN";
                setLanguage(nextLang);
                if (typeof window !== "undefined") {
                  localStorage.setItem("preferred_language", nextLang);
                  const cookieValue = nextLang === "EN" ? "" : `/en/${nextLang.toLowerCase()}`;
                  document.cookie = `googtrans=${cookieValue}; path=/;`;
                  document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname};`;
                  window.dispatchEvent(new Event("languageChange"));
                  window.location.reload();
                }
              }}
              className="p-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 flex items-center space-x-1"
            >
              <Globe className="w-4 h-4 text-[#1E3A8A]" />
              <span className="text-[10px]">{language}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-50 border border-slate-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-3 px-4 shadow-inner animate-in fade-in slide-in-from-top-4 duration-200 rounded-b-xl">
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="flex flex-col py-1">
                      <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        {getNavTranslation(item.label, language)}
                      </span>
                      <div className="pl-3 border-l-2 border-slate-100 flex flex-col space-y-0.5 mt-1">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200",
                                isChildActive
                                  ? "text-[#E25822] bg-[#E25822]/5"
                                  : "text-slate-700 hover:text-[#1E3A8A] hover:bg-slate-50"
                              )}
                            >
                              <span>{getNavTranslation(child.label, language)}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-3 py-2.5 rounded-lg text-sm font-bold transition-all duration-200",
                      isActive
                        ? "text-[#E25822] bg-[#E25822]/5"
                        : "text-slate-700 hover:text-[#1E3A8A] hover:bg-slate-50"
                    )}
                  >
                    <span>{getNavTranslation(item.label, language)}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
