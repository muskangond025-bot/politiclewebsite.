"use client";

import React, { useState, useEffect, useRef } from "react";
import { t, LangCode } from "@/lib/translations";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Share2,
  Calendar,
  MessageSquare,
  ChevronLeft,
  Target,
  Compass,
  Eye,
  Shield,
  Globe,
  Cpu,
  Users,
  Quote,
  MapPin,
  ChevronDown,
  Plus,
  Minus,
  Info,
  CalendarDays,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import { Tilt } from "@/components/ui/tilt";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const TAGLINES = [
  "A Nationalist to the Core",
  "Lover of Indian Art & Culture",
  "Facilitator of Reform & Governance",
  "Dedicated to Grassroots Development",
];

const TAGLINE_IMAGES = [
  "/speech_convention.png",
  "/somnath_temple.png",
  "/meeting_birla.png",
  "/school_children.png",
];

const IMPACT_CARDS = [
  {
    id: "booth",
    title: "A Journey from Booth Karyakarta",
    subtitle: "Meritocratic Climb",
    image: "/speech_convention.png",
    summary: "Starting as a grass-root worker in Gujarat, rising steadily through dedication, organization, and party loyalty.",
    details: "Shri Krishna Pal began his political journey in 1980 as a booth karyakarta (worker) in Ahmedabad. Over the next four decades, his path exemplified meritocracy. He served as the leader of the youth wing, BJP State Secretary, Gujarat Cabinet Minister (managing Home, Police, and border security), and eventually national BJP President (2014-2020), leading the party to consecutive historic victories.",
  },
  {
    id: "people",
    title: "People's Person & Constituency Leader",
    subtitle: "Public Connection",
    image: "/school_children.png",
    summary: "Dedicated to the welfare of the common citizen, conducting extensive public tours and grievance handling.",
    details: "Maintaining a close relationship with the electorate is central to his leadership philosophy. From Gandhinagar to the remote districts, he regularly conducts public outreach programmes, 'Adhyakshiye Pravas' (presidential visits), and interactive public forums. His office maintains digital systems to track citizen requests, ensuring that administration remains transparent and accountable.",
  },
  {
    id: "change",
    title: "Facilitator of Change & Reforms",
    subtitle: "National Security & Cooperation",
    image: "/meeting_birla.png",
    summary: "Pioneering historic legislative changes and structural reforms for national security and the cooperative sector.",
    details: "As the Union Home Minister, he led the historic abrogation of Article 370 and 35A, fully integrating Jammu & Kashmir into the union. He pioneered the complete overhaul of India's colonial-era criminal laws, replacing them with modern, victim-centric codes (Bharatiya Nyaya Sanhita, etc.). In addition, as India's first Minister of Cooperation, he launched the 'Sahkar Se Samriddhi' initiative, revitalizing primary agricultural credit societies (PACS) across the country.",
  },
];

const TIMELINE_EVENTS = [
  { year: "1964", title: "Birth & Values", desc: "Born in Mumbai, raised with traditional values and early study of Indian scriptures." },
  { year: "1980", title: "RSS & Grassroots", desc: "Joined RSS as a swayamsevak; started work as a student leader and booth worker." },
  { year: "1997", title: "Elected MLA", desc: "Elected to the Gujarat Legislative Assembly, representing Sarkhej with record margins." },
  { year: "2014", title: "National President", desc: "Appointed as BJP National President; expanded the party's footprint to every corner of India." },
  { year: "2019", title: "Union Home Minister", desc: "Assumed office as Union Home Minister; guided major security and legislative initiatives." },
  { year: "2021", title: "Ministry of Cooperation", desc: "Assumed the newly created portfolio to strengthen the cooperative movement in India." },
  { year: "2024", title: "Historic Reforms", desc: "Implemented modern criminal justice codes and landmark development projects nationwide." },
];

const NEWS_UPDATES = [
  {
    date: "June 18, 2026",
    category: "Government",
    title: "HM Shri Krishna Pal inaugurates new building of NIPER in Ahmedabad",
    summary: "Addressing the gathering, the Home Minister emphasized that the new research facility will position India as a global leader in pharmaceutical innovation.",
    shares: 969,
  },
  {
    date: "June 15, 2026",
    category: "Cooperation",
    title: "Sahkar Se Samriddhi: Transforming rural banking sector",
    summary: "Over 65,000 PACS digitized to bring transparency and financial stability to grassroots farmers across all states.",
    shares: 824,
  },
  {
    date: "June 10, 2026",
    category: "National Security",
    title: "Home Minister reviews border security infrastructure in high-altitude zones",
    summary: "Emphasized the completion of strategic road networks and digital communication links for rural border outposts.",
    shares: 1102,
  },
];

const VISION_MISSION = {
  vision: {
    title_en: "Secure, Self-Reliant & Unified Nation",
    title_hi: "सुरक्षित, आत्मनिर्भर और एकीकृत राष्ट्र",
    desc_en: "To build a strong and resilient India that stands proud globally, fully integrates all its territories, and guarantees peace, sovereignty, and progress for every citizen.",
    desc_hi: "एक मजबूत और लचीले भारत का निर्माण करना जो विश्व स्तर पर गर्व से खड़ा हो, अपने सभी क्षेत्रों को पूरी तरह से एकीकृत करे, और प्रत्येक नागरिक के लिए शांति, संप्रभुता और प्रगति की गारंटी दे।"
  },
  mission: {
    title_en: "Grassroots Development & Policy Reforms",
    title_hi: "जमीनी स्तर का विकास और नीतिगत सुधार",
    desc_en: "Empowering rural credit networks through digital PACS reforms, modernizing internal security infrastructure, upgrading criminal justice codes, and directly connecting administrative desks with the common constituent.",
    desc_hi: "डिजिटल पैक्स सुधारों के माध्यम से ग्रामीण ऋण नेटवर्क को सशक्त बनाना, आंतरिक सुरक्षा बुनियादी ढांचे का आन्तरिक आधुनिकीकरण करना, आपराधिक न्याय संहिताओं को अपग्रेड करना और प्रशासनिक डेस्क को सीधे आम लोगों से जोड़ना।"
  }
};

const FOCUS_AREAS = [
  {
    title_en: "National Security",
    title_hi: "राष्ट्रीय सुरक्षा",
    desc_en: "Strengthening border infrastructure, implementing modern policing technologies, and safeguarding federal integrity.",
    desc_hi: "सीमा सुरक्षा बुनियादी ढांचे को मजबूत करना, आधुनिक पुलिसिंग तकनीकों को लागू करना और संघीय अखंडता की रक्षा करना।",
    icon: "Shield"
  },
  {
    title_en: "Cooperative Growth",
    title_hi: "सहकारी विकास",
    desc_en: "Digitizing 65,000+ primary societies (PACS) to empower small farmers and establish financial transparency.",
    desc_hi: "65,000+ प्राथमिक समितियों (PACS) का डिजिटलीकरण कर छोटे किसानों को सशक्त बनाना और वित्तीय पारदर्शिता स्थापित करना।",
    icon: "Globe"
  },
  {
    title_en: "Legislative Reforms",
    title_hi: "विधायी सुधार",
    desc_en: "Replacing outdated colonial laws with victim-centric, technology-friendly modern judicial codes.",
    desc_hi: "पुराने औपनिवेशिक कानूनों को पीड़ित-केंद्रित, प्रौद्योगिकी-अनुकूल आधुनिक न्यायिक संहिताओं से बदलना।",
    icon: "Cpu"
  },
  {
    title_en: "Constituency Welfare",
    title_hi: "निर्वाचन क्षेत्र कल्याण",
    desc_en: "Conducting outreach, grievance redressal, and ensuring water sanitation and transport for every home.",
    desc_hi: "आउटरीच, जन सुनवाई और प्रत्येक घर के लिए पानी, स्वच्छता और परिवहन सुनिश्चित करना।",
    icon: "Users"
  }
];

const LATEST_INITIATIVES = [
  {
    title_en: "PACS Computerization Project",
    title_hi: "पैक्स कंप्यूटरीकरण परियोजना",
    desc_en: "Bringing cooperative banking transactions online to streamline crop credit flow and audit accessibility.",
    desc_hi: "फसल ऋण प्रवाह और ऑडिट पहुंच को सुव्यवस्थित करने के लिए सहकारी बैंकिंग लेनदेन को ऑनलाइन लाना।",
    tag_en: "Cooperation",
    tag_hi: "सहकारिता"
  },
  {
    title_en: "Vibrant Villages Scheme",
    title_hi: "वाइब्रेंट विलेज योजना",
    desc_en: "Allocating dedicated development packages to remote border villages to improve road networks and stop out-migration.",
    desc_hi: "सड़क नेटवर्क में सुधार करने और पलायन को रोकने के लिए दूरस्थ सीमावर्ती गांवों को समर्पित विकास पैकेज आवंटित करना।",
    tag_en: "Infrastructure",
    tag_hi: "बुनियादी ढांचा"
  },
  {
    title_en: "Modern Criminal Codes Rollout",
    title_hi: "आधुनिक आपराधिक कानून",
    desc_en: "Implementing BNS and modern forensics protocols to guarantee swift judicial trials for citizens.",
    desc_hi: "नागरिकों के लिए त्वरित न्यायिक सुनवाई सुनिश्चित करने के लिए बीएनएस और आधुनिक फोरेंसिक प्रोटोकॉल लागू करना।",
    tag_en: "Justice",
    tag_hi: "न्याय"
  }
];

const ACHIEVEMENTS = [
  { count: "65,000+", label_en: "PACS Digitized", label_hi: "पैक्स कम्प्यूटरीकृत" },
  { count: "40+ Years", label_en: "Public Service", label_hi: "सार्वजनिक सेवा" },
  { count: "1.3B+", label_en: "Citizens Impacted", label_hi: "नागरिक प्रभावित" },
  { count: "300+", label_en: "Border Projects", label_hi: "सीमा सुरक्षा परियोजनाएं" }
];

const TESTIMONIALS = [
  {
    quote_en: "The PACS digitization has made credit approvals incredibly fast for our cooperative dairy. Transparency is now at an all-time high.",
    quote_hi: "पैक्स डिजिटलीकरण ने हमारी सहकारी डेयरी के लिए ऋण स्वीकृतियों को अविश्वसनीय रूप से तेज कर दिया है। पारदर्शिता अब तक के उच्चतम स्तर पर है।",
    author_en: "Ramesh Patel",
    author_hi: "रमेश पटेल",
    role_en: "Cooperative Farmer, Gujarat",
    role_hi: "सहकारी किसान, गुजरात"
  },
  {
    quote_en: "Modern border road connections have brought water lines and transport access directly to our village. We feel integrated with the nation.",
    quote_hi: "आधुनिक सीमा सड़क कनेक्शन हमारे गाँव में सीधे पानी की लाइनें और परिवहन पहुँच लाए हैं। हम राष्ट्र के साथ एकीकृत महसूस करते हैं।",
    author_en: "Stanzin Dorjee",
    author_hi: "स्टैंजिन दोरजी",
    role_en: "Village Council Chief, Ladakh",
    role_hi: "ग्राम परिषद प्रमुख, लद्दाख"
  },
  {
    quote_en: "The rollout of technology-friendly justice codes ensures police processes are faster, with forensic records fully digitized.",
    quote_hi: "प्रौद्योगिकी-अनुकूल न्याय संहिताओं का रोलआउट यह सुनिश्चित करता है कि पुलिस प्रक्रियाएं तेज हों, फोरेंसिक रिकॉर्ड पूरी तरह से डिजिटल हों।",
    author_en: "Ananya Deshmukh",
    author_hi: "अनन्या देशमुख",
    role_en: "Legal Researcher, Mumbai",
    role_hi: "कानूनी शोधकर्ता, मुंबई"
  }
];

const EVENTS = [
  {
    date: "12 July 2026",
    title_en: "National Cooperative Summit",
    title_hi: "राष्ट्रीय सहकारी शिखर सम्मेलन",
    location_en: "Vigyan Bhawan, New Delhi",
    location_hi: "विज्ञान भवन, नई दिल्ली",
    time: "10:00 AM IST"
  },
  {
    date: "25 July 2026",
    title_en: "Border Infrastructure Review Tour",
    title_hi: "सीमा अवसंरचना समीक्षा दौरा",
    location_en: "Jaisalmer Outpost, Rajasthan",
    location_hi: "जैसलमेर सीमा चौकी, राजस्थान",
    time: "09:30 AM IST"
  },
  {
    date: "05 August 2026",
    title_en: "Constituent Grievance hearing session",
    title_hi: "निर्वाचन क्षेत्र जन सुनवाई सत्र",
    location_en: "BJP Gandhinagar Office, Gujarat",
    location_hi: "भाजपा गांधीनगर कार्यालय, गुजरात",
    time: "11:00 AM IST"
  }
];

const FAQS = [
  {
    q_en: "How can I submit a grievance to the constituency desk?",
    q_hi: "मैं निर्वाचन क्षेत्र डेस्क पर शिकायत कैसे जमा कर सकता हूँ?",
    a_en: "You can submit grievances online by visiting our 'Contact' page, filling out the secure form under 'Register a New Grievance', and obtaining a unique tracking ID.",
    a_hi: "आप हमारी 'संपर्क' (Contact) पृष्ठ पर जाकर, 'एक नई शिकायत दर्ज करें' के अंतर्गत सुरक्षित फॉर्म भरकर और एक विशिष्ट ट्रैकिंग आईडी प्राप्त करके ऑनलाइन शिकायत दर्ज कर सकते हैं।"
  },
  {
    q_en: "What is 'Sahkar Se Samriddhi' initiative?",
    q_hi: "'सहकार से समृद्धि' पहल क्या है?",
    a_en: "'Sahkar Se Samriddhi' is a national movement to computerize 65,000+ primary agricultural credit societies (PACS) to bring banking credit directly to farmers without middlemen.",
    a_hi: "'सहकार से समृद्धि' 65,000+ प्राथमिक कृषि ऋण समितियों (PACS) को कंप्यूटरीकृत करने के लिए एक राष्ट्रीय आंदोलन है ताकि बिना बिचौलियों के किसानों तक सीधे बैंकिंग ऋण पहुँचाया जा सके।"
  },
  {
    q_en: "How does the new criminal justice code benefit citizens?",
    q_hi: "नया आपराधिक न्याय कानून नागरिकों को कैसे लाभ पहुँचाता है?",
    a_en: "The new codes prioritize citizen safety and victim rights, establishing zero-FIR, mandatory digital recording of searches, and strict timeframes for court rulings.",
    a_hi: "नए कानून नागरिक सुरक्षा और पीड़ित अधिकारों को प्राथमिकता देते हैं, शून्य-एफआईआर (Zero-FIR), तलाशी की अनिवार्य डिजिटल रिकॉर्डिंग और अदालती फैसलों के लिए सख्त समय सीमा स्थापित करते हैं।"
  }
];

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -150,
    rotateY: 0,
  },
  visible: (i: number) => ({
    opacity: [0, 1, 1],
    x: [-150, 0, 0],
    rotateY: [0, 0, 360],
    transition: {
      duration: 1.2,
      times: [0, 0.6, 1],
      delay: i * 0.25,
      ease: "easeOut" as const,
    },
  }),
};

const newsCardVariants = {
  hidden: {
    opacity: 0,
    y: -150,
    scale: 0.6,
    rotateX: -720,
    transformOrigin: "center center",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 45,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

const socialCardVariants = {
  hidden: {
    opacity: 0,
    y: -150,
    scale: 0.6,
    rotateX: -720,
    transformOrigin: "center center",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 45,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

const stackCardVariants = {
  front: {
    x: 0,
    y: 0,
    z: 0,
    scale: 1,
    opacity: 1,
    zIndex: 10,
    rotate: 0,
    pointerEvents: "auto" as const,
  },
  middle: {
    x: 0,
    y: -16,
    z: -30,
    scale: 0.94,
    opacity: 0.75,
    zIndex: 9,
    rotate: 0,
    pointerEvents: "none" as const,
  },
  back: {
    x: 0,
    y: -32,
    z: -60,
    scale: 0.88,
    opacity: 0.45,
    zIndex: 8,
    rotate: 0,
    pointerEvents: "none" as const,
  },
  hidden: {
    x: 0,
    y: -48,
    z: -90,
    scale: 0.82,
    opacity: 0,
    zIndex: 0,
    rotate: 0,
    pointerEvents: "none" as const,
  },
  exitLeft: {
    x: -360,
    y: 10,
    z: 10,
    scale: 0.95,
    opacity: 0,
    zIndex: 11,
    rotate: -12,
    pointerEvents: "none" as const,
  }
};

export default function Home() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [language, setLanguage] = useState<LangCode>("EN");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const parentTimelineRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
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

  const isUserInteractingRef = useRef(false);

  const handleTimelineScroll = () => {
    if (timelineScrollRef.current) {
      const container = timelineScrollRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;

      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);

      // Find closest card to container center
      const containerCenter = container.getBoundingClientRect().left + clientWidth / 2;
      const children = container.children;
      let closestIndex = 0;
      let minDistance = Infinity;

      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(childCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      if (closestIndex >= 0 && closestIndex < TIMELINE_EVENTS.length) {
        setTimelineIndex(closestIndex);
      }
    }
  };

  const scrollToTimelineIndex = (index: number) => {
    const parent = parentTimelineRef.current;
    if (!parent) return;

    isScrollingRef.current = true;
    setTimelineIndex(index);

    if (timelineScrollRef.current) {
      const container = timelineScrollRef.current;
      const children = container.children;
      if (children[index]) {
        children[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }

    const parentTop = window.scrollY + parent.getBoundingClientRect().top;
    const parentHeight = parent.getBoundingClientRect().height;
    const viewHeight = window.innerHeight;
    const scrollableDistance = parentHeight - viewHeight;

    if (scrollableDistance > 0) {
      const targetProgress = index / (TIMELINE_EVENTS.length - 1);
      const targetScrollY = parentTop + targetProgress * scrollableDistance;

      window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 850);
  };

  const handleTimelinePrev = () => {
    const prevIndex = (timelineIndex - 1 + TIMELINE_EVENTS.length) % TIMELINE_EVENTS.length;
    scrollToTimelineIndex(prevIndex);
  };

  const handleTimelineNext = () => {
    const nextIndex = (timelineIndex + 1) % TIMELINE_EVENTS.length;
    scrollToTimelineIndex(nextIndex);
  };

  const timelineIndexRef = useRef(timelineIndex);
  useEffect(() => {
    timelineIndexRef.current = timelineIndex;
  }, [timelineIndex]);

  useEffect(() => {
    const parent = parentTimelineRef.current;
    const container = timelineScrollRef.current;
    if (!parent || !container) return;

    const handleScroll = () => {
      if (isScrollingRef.current || isUserInteractingRef.current) return;

      const rect = parent.getBoundingClientRect();
      const parentHeight = rect.height;
      const viewHeight = window.innerHeight;
      
      const scrollableDistance = parentHeight - viewHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (maxScrollLeft > 0) {
        container.scrollLeft = progress * maxScrollLeft;
      }
    };

    // Listen to window scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Set up pointer/touch interactions to temporarily disable scroll-sync
    const handleInteractionStart = () => {
      isUserInteractingRef.current = true;
    };

    const handleInteractionEnd = () => {
      // Small timeout to allow momentum scrolling to finish
      setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 800);
    };

    container.addEventListener("touchstart", handleInteractionStart, { passive: true });
    window.addEventListener("touchend", handleInteractionEnd, { passive: true });
    container.addEventListener("mousedown", handleInteractionStart, { passive: true });
    window.addEventListener("mouseup", handleInteractionEnd, { passive: true });

    // Run initial positioning
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      container.removeEventListener("touchstart", handleInteractionStart);
      window.removeEventListener("touchend", handleInteractionEnd);
      container.removeEventListener("mousedown", handleInteractionStart);
      window.removeEventListener("mouseup", handleInteractionEnd);
    };
  }, []);

  // Feed 1 State
  const [feed1Retweeted, setFeed1Retweeted] = useState(false);
  const [feed1RetweetCount, setFeed1RetweetCount] = useState(342);
  const [feed1RepliesExpanded, setFeed1RepliesExpanded] = useState(false);
  const [feed1Replies, setFeed1Replies] = useState([
    "Proud of your dedication to local governance, Sir!",
    "Clean drinking water is indeed a game changer. Keep it up!",
    "Amazing to see grassroots development focus."
  ]);
  const [feed1ReplyInput, setFeed1ReplyInput] = useState("");

  // Feed 2 State
  const [feed2Retweeted, setFeed2Retweeted] = useState(false);
  const [feed2RetweetCount, setFeed2RetweetCount] = useState(820);
  const [feed2RepliesExpanded, setFeed2RepliesExpanded] = useState(false);
  const [feed2Replies, setFeed2Replies] = useState([
    "PACS digitization will eliminate credit middle-men. Huge win for farmers!",
    "Cooperative movement is the backbone of rural India.",
    "Thank you for Sahkar Se Samriddhi initiatives."
  ]);
  const [feed2ReplyInput, setFeed2ReplyInput] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50/50">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 h-[80vh] min-h-[600px] flex items-center justify-center">

        {/* Full-Screen Animated Slideshow Background (Ken Burns effect) */}
        <div className="absolute inset-0 overflow-hidden z-0 select-none pointer-events-none">
          <AnimatePresence>
            <motion.div
              key={taglineIndex}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={TAGLINE_IMAGES[taglineIndex]}
                alt={`Shri Krishna Pal background - ${TAGLINES[taglineIndex]}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Bottom Mask to blend into the next section */}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full flex items-center justify-center text-center">
          <div className="w-full flex flex-col items-center justify-center text-center">
            {/* Centered text column */}
            <div className="flex flex-col justify-center items-center text-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl space-y-6 sm:space-y-8 flex flex-col items-center justify-center text-center"
              >
                {/* Main Heading with high-impact font */}
                <div className="space-y-2 text-center" style={{ perspective: 800 }}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-sans text-blue-950 tracking-tight leading-[1.05] relative select-none drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]" style={{ transformStyle: "preserve-3d" }}>
                    {/* First Name line */}
                    <span className="block overflow-hidden py-1">
                      <motion.span
                        initial={{ opacity: 0, y: 50, rotateX: 25 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.1 }}
                        className="inline-block"
                      >
                        Shri Krishna
                      </motion.span>
                    </span>
                    {/* Last Name line */}
                    <span className="block overflow-hidden py-1 text-[#E25822]">
                      <motion.span
                        initial={{ opacity: 0, y: 50, rotateX: 25 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.25 }}
                        className="inline-block relative"
                      >
                        Pal
                        {/* Premium Accent Underline in Saffron/Orange */}
                        <motion.span
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                          className="absolute bottom-1.5 left-0 w-full h-[6px] bg-blue-950/15 -z-10 rounded-full origin-left"
                        />
                      </motion.span>
                    </span>
                  </h1>
                </div>

                {/* Glass Rotating Taglines Container */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.45, type: "spring", stiffness: 85, damping: 14 }}
                  className="backdrop-blur bg-white/80 border border-slate-200/50 shadow-md px-5 py-2.5 max-w-md rounded-xl border-l-4 border-l-[#E25822] mx-auto"
                >
                  <div className="h-6 overflow-hidden flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={taglineIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="text-xs sm:text-sm font-bold text-blue-950 tracking-wide font-sans flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E25822] inline-block animate-pulse shrink-0" />
                        {TAGLINES[taglineIndex]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Description Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 80, damping: 15 }}
                  className="text-center mx-auto max-w-2xl z-10"
                >
                  <span className="bg-white/85 backdrop-blur-sm border border-slate-200/50 shadow-md px-5 py-2.5 rounded-2xl inline-block text-xs sm:text-sm md:text-base leading-relaxed text-blue-950 font-extrabold text-center">
                    {t("hero.subtitle", language)}
                  </span>
                </motion.p>

                {/* Carousel / Slider Indicator Dots */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 80, damping: 15 }}
                  className="flex items-center justify-center gap-2 pt-1 mx-auto"
                >
                  {TAGLINES.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-500 ${taglineIndex === idx ? "w-8 bg-[#E25822]" : "w-2 bg-slate-300"
                        }`}
                    />
                  ))}
                </motion.div>

                {/* Premium Button Group */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, type: "spring", stiffness: 80, damping: 15 }}
                  className="flex flex-wrap items-center justify-center gap-4 pt-2 mx-auto"
                >
                  <Magnetic>
                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center bg-blue-950 hover:bg-blue-900 hover:shadow-xl hover:shadow-blue-950/10 hover:-translate-y-0.5 text-white font-extrabold px-8 h-13 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-lg gap-2.5 group cursor-pointer relative overflow-hidden"
                    >
                      <span>{t("hero.readBio", language)}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link
                      href="/explore"
                      className="inline-flex items-center justify-center bg-white/95 hover:bg-white hover:text-blue-950 hover:shadow-lg hover:-translate-y-0.5 text-blue-950 border border-slate-200/80 font-extrabold px-8 h-13 rounded-xl text-xs uppercase tracking-widest transition-all duration-500 cursor-pointer relative overflow-hidden group/btn2 shadow-md"
                    >
                      {t("hero.exploreAchievements", language)}
                    </Link>
                  </Magnetic>
                </motion.div>
              </motion.div>
            </div>

            {/* Right column empty (allows full-screen background image to occupy space) */}
          </div>
        </div>

        {/* Floating location badge */}
        <div className="absolute bottom-8 right-8 flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200 shadow-lg text-left z-20 hidden md:flex">
          <div>
            <div className="text-[10px] font-bold text-blue-600/80 uppercase tracking-widest">Office Location</div>
            <div className="text-xs font-black text-slate-900 font-serif">North Block, New Delhi</div>
          </div>
          <span className="flex h-2.5 w-2.5 relative ml-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
        </div>
      </section>

      {/* 2. Thematic "Impact" Modules */}
      <section id="stories" className="pt-6 pb-16 md:pt-10 md:pb-20 bg-gradient-to-b from-white via-slate-50/30 to-white border-b border-slate-100">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 text-center">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-black tracking-tight leading-tight">
              <ScrollReveal>{t("impact.title", language)}</ScrollReveal>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
              {t("impact.desc", language)}
            </p>
          </div>

          <div className="flex flex-col gap-8 w-full max-w-none" style={{ perspective: 1200 }}>
            {IMPACT_CARDS.map((card, i) => {
              // Determine initial animation state based on card position
              const getInitialAnimation = () => {
                if (i === 0) return { opacity: 0, x: 90, y: 0 }; // Card 1 comes from Right
                if (i === 1) return { opacity: 0, x: -90, y: 0 }; // Card 2 comes from Left
                return { opacity: 0, x: 0, y: 90 }; // Card 3 comes from Downward to Upward
              };

              return (
                <Tilt key={card.id} className="w-full">
                  <motion.div
                    custom={i}
                    initial={getInitialAnimation()}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0
                    }}
                    viewport={{ once: false, margin: "0px 0px -120px 0px", amount: 0.1 }}
                    transition={{
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.01,
                      boxShadow: "0 30px 60px -15px rgba(30, 58, 138, 0.12)"
                    }}
                    data-cursor="view"
                    className={`flex flex-col md:items-stretch bg-white border border-slate-200/50 rounded-[2rem] overflow-hidden group shadow-md shadow-slate-100/30 hover:shadow-[0_24px_50px_rgba(30, 58, 138, 0.06)] hover:-translate-y-1.5 transition-all duration-500 relative cursor-pointer w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    style={{ opacity: 0, transformStyle: "preserve-3d" }}
                  >
                    {/* Premium Hover Sweep Shine & Glow */}
                    <div className="hover-shine-sweep" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/[0.01] via-transparent to-[#E25822]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem] -z-10" />

                    {/* Mapped Image Column (Split layout w-full md:w-[42%]) */}
                    <div className="relative w-full md:w-[42%] min-h-[260px] md:min-h-0 aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-40" />
                    </div>

                    {/* Text Details Column (Split layout w-full md:w-[58%]) */}
                    <div className="p-8 md:p-10 flex flex-col justify-between flex-1 text-left relative z-10 space-y-6">

                      {/* Top Row: Index and Tag Subtitle */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#E25822] bg-[#E25822]/5 border border-[#E25822]/10 px-3.5 py-1 rounded-full transition-all duration-300">
                          {card.subtitle}
                        </span>
                        <span className="text-3xl md:text-4xl font-serif font-black text-slate-200 group-hover:text-[#E25822]/50 transition-colors duration-300 select-none">
                          {`0${i + 1}`}
                        </span>
                      </div>

                      {/* Middle Details: Title & Description */}
                      <div className="space-y-3 flex-1 flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl font-black font-serif text-slate-900 leading-snug group-hover:text-[#1E3A8A] transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                          {card.summary}
                        </p>
                      </div>

                      {/* Bottom Row: Read Full Story Link */}
                      <div className="pt-6 border-t border-slate-100">
                        <Link
                          href={`/story/${card.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#1E3A8A] group-hover:text-[#E25822] transition-colors duration-300 group/link cursor-pointer"
                        >
                          <span>{t("impact.readStory", language)}</span>
                          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover/link:translate-x-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.5 Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Subtle background accent blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#1E3A8A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#E25822]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {language === "HI" ? "हमारा मार्गदर्शक सिद्धांत" : "Our Guiding Principles"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-slate-900 tracking-tight leading-tight">
              <ScrollReveal>
                {language === "HI" ? "दृष्टिकोण और मिशन" : "Vision & Mission"}
              </ScrollReveal>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
              {language === "HI"
                ? "एक मजबूत, सुरक्षित और आत्मनिर्भर भारत की दिशा में काम करना।"
                : "Serving the nation with unwavering dedication to national integrity and social welfare."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto text-left">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A]">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  {language === "HI" ? VISION_MISSION.vision.title_hi : VISION_MISSION.vision.title_en}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  {language === "HI" ? VISION_MISSION.vision.desc_hi : VISION_MISSION.vision.desc_en}
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 text-[10px] uppercase font-black tracking-widest text-[#1E3A8A]">
                {language === "HI" ? "सुरक्षा एवं एकता" : "Sovereignty & Unity"}
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E25822]/10 flex items-center justify-center text-[#E25822]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  {language === "HI" ? VISION_MISSION.mission.title_hi : VISION_MISSION.mission.title_en}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  {language === "HI" ? VISION_MISSION.mission.desc_hi : VISION_MISSION.mission.desc_en}
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 text-[10px] uppercase font-black tracking-widest text-[#E25822]">
                {language === "HI" ? "सुधार एवं लोक कल्याण" : "Reforms & Public Support"}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll-Spy Pinned Parent Wrapper */}
      <div ref={parentTimelineRef} className="relative h-[115vh]">
        {/* Sticky Child Section */}
        <section ref={timelineSectionRef} className="sticky top-0 h-screen flex flex-col justify-center bg-slate-50/40 border-b border-slate-100 overflow-hidden">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
            <div className="space-y-3 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-black tracking-tight">
                <ScrollReveal>{t("timeline.title", language)}</ScrollReveal>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                {t("timeline.desc", language)}
              </p>
            </div>
            {/* Prev/Next buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleTimelinePrev}
                className="p-2 border border-slate-200 rounded-xl hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow"
              >
                <ChevronLeft className="w-5 h-5 text-slate-800" />
              </button>
              <button
                onClick={handleTimelineNext}
                className="p-2 border border-slate-200 rounded-xl hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow"
              >
                <ChevronRight className="w-5 h-5 text-slate-800" />
              </button>
            </div>
          </div>

          {/* Interactive Horizontal Year Track */}
          <div className="relative py-6 mb-8 w-full select-none">
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-200/80 -translate-y-1/2 z-0 rounded-full" />
            <div
              className="absolute top-1/2 left-0 h-[2px] bg-[#E25822] -translate-y-1/2 z-0 rounded-full transition-all duration-500"
              style={{ width: `${(timelineIndex / (TIMELINE_EVENTS.length - 1)) * 100}%` }}
            />

            {/* Dots */}
            <div className="relative flex justify-between items-center z-10">
              {TIMELINE_EVENTS.map((item, idx) => {
                const isActive = idx === timelineIndex;
                const isPassed = idx < timelineIndex;
                return (
                  <button
                    key={item.year}
                    onClick={() => scrollToTimelineIndex(idx)}
                    className="flex flex-col items-center gap-2 cursor-pointer focus:outline-none group"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${isActive
                        ? "bg-white border-[#E25822] scale-125 shadow-md shadow-[#E25822]/20"
                        : isPassed
                          ? "bg-[#E25822] border-[#E25822]"
                          : "bg-white border-slate-300 group-hover:border-slate-400"
                        }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E25822]" />
                      )}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-wider font-sans transition-all duration-300 ${isActive
                        ? "text-[#E25822] scale-105"
                        : "text-slate-500 group-hover:text-slate-700"
                        }`}
                    >
                      {item.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Horizontally Scrollable Timeline Cards */}
          <div
            ref={timelineScrollRef}
            onScroll={handleTimelineScroll}
            className="w-full flex overflow-x-auto gap-6 py-6 scrollbar-none select-none relative px-4 sm:px-12"
          >
            {TIMELINE_EVENTS.map((item, idx) => {
              const isActive = idx === timelineIndex;
              return (
                <div
                  key={item.year}
                  className="shrink-0 w-[85vw] sm:w-[480px] md:w-[580px]"
                >
                  <Tilt className="w-full h-full">
                    <div
                      onClick={() => scrollToTimelineIndex(idx)}
                      className={`backdrop-blur-md border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 shadow-xl relative overflow-hidden text-left transition-all duration-150 h-full cursor-pointer ${isActive
                          ? "bg-white border-[#E25822]/35 shadow-slate-200/50 scale-[1.02] z-10"
                          : "bg-white/90 border-slate-200/60 hover:border-[#1E3A8A]/35 shadow-md shadow-slate-100/5 opacity-80 hover:opacity-100 scale-[0.98]"
                        }`}
                    >
                      {/* Left Block: Big Year */}
                      <div className="flex items-center gap-4 md:w-[35%] shrink-0">
                        <span className={`text-5xl sm:text-6xl md:text-7xl font-black font-serif tracking-tighter leading-none select-none transition-colors duration-150 ${isActive ? "text-[#E25822]" : "text-[#1E3A8A]/50"
                          }`}>
                          {item.year}
                        </span>
                      </div>

                      {/* Right Block: Content */}
                      <div className="space-y-2 md:w-[65%] flex-grow">
                        <h4 className={`text-lg sm:text-xl font-bold font-serif leading-tight transition-colors duration-150 ${isActive ? "text-slate-900" : "text-slate-800"
                          }`}>
                          {item.title}
                        </h4>
                        <p className={`text-xs sm:text-sm font-medium leading-relaxed font-sans transition-colors duration-150 ${isActive ? "text-slate-700" : "text-slate-600"
                          }`}>
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </Tilt>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/timeline"
              className="border-2 border-[#E25822] text-[#E25822] hover:bg-[#E25822] hover:text-white font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{t("timeline.archiveBtn", language)}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>

      {/* 4.1 Key Focus Areas */}
      <section className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-100 relative">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="bg-[#E25822]/5 border border-[#E25822]/10 text-[#E25822] px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {language === "HI" ? "मुख्य कार्यक्षेत्र" : "Core Priorities"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-slate-900 tracking-tight leading-tight">
              <ScrollReveal>
                {language === "HI" ? "मुख्य ध्यान केंद्रित क्षेत्र" : "Key Focus Areas"}
              </ScrollReveal>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
              {language === "HI"
                ? "शासन, राष्ट्रीय अखंडता और ग्रामीण समृद्धि को चलाने वाले रणनीतिक स्तंभ।"
                : "Strategic pillars driving governance, national integrity, and rural prosperity."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-left">
            {FOCUS_AREAS.map((item, idx) => {
              const IconComponent = (() => {
                switch (item.icon) {
                  case "Shield": return Shield;
                  case "Globe": return Globe;
                  case "Cpu": return Cpu;
                  case "Users":
                  default: return Users;
                }
              })();

              return (
                <Tilt key={idx} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/5 text-[#1E3A8A] flex items-center justify-center group-hover:bg-[#E25822] group-hover:text-white transition-all duration-300 shrink-0">
                        <IconComponent className="w-5 h-5 shrink-0" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 font-serif group-hover:text-[#1E3A8A] transition-colors">
                        {language === "HI" ? item.title_hi : item.title_en}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        {language === "HI" ? item.desc_hi : item.desc_en}
                      </p>
                    </div>
                    <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1 text-[10px] uppercase font-black tracking-widest text-[#E25822] group-hover:text-[#1E3A8A] transition-colors">
                      <span>{language === "HI" ? "अधिक जानें" : "Learn More"}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Tilt>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.2 Latest Initiatives */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {language === "HI" ? "हालिया प्रयास" : "Active Programs"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-slate-900 tracking-tight leading-tight">
              <ScrollReveal>
                {language === "HI" ? "नवीनतम पहल" : "Latest Initiatives"}
              </ScrollReveal>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
              {language === "HI"
                ? "देश को मजबूत करने और डिजिटल सशक्तिकरण लाने के लिए हाल ही में शुरू की गई विकास योजनाएं।"
                : "Key developmental programs recently launched to strengthen safety and cooperative equity."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {LATEST_INITIATIVES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-50 border border-slate-200/50 hover:bg-white rounded-3xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4 relative z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-[#1E3A8A]/5 text-[#1E3A8A] border border-[#1E3A8A]/10">
                    {language === "HI" ? item.tag_hi : item.tag_en}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-slate-900 leading-snug group-hover:text-[#E25822] transition-colors">
                    {language === "HI" ? item.title_hi : item.title_en}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                    {language === "HI" ? item.desc_hi : item.desc_en}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center justify-between text-[10px] font-bold text-slate-400">
                  <span>{language === "HI" ? "स्थिति: सक्रिय" : "Status: Active"}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.3 Achievements Counter */}
      <section className="py-12 bg-gradient-to-r from-[#1E3A8A] to-blue-950 text-white relative overflow-hidden">
        {/* Subtle grid layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-[#E25822]">
                  {item.count}
                </div>
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white/70">
                  {language === "HI" ? item.label_hi : item.label_en}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dynamic News & Press */}
      <section className="pt-8 pb-8 md:pt-12 md:pb-12 bg-white border-b border-slate-100">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 text-left">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-black tracking-tight leading-tight">
                <ScrollReveal>{t("news.title", language)}</ScrollReveal>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                {t("news.desc", language)}
              </p>
            </div>
            <Magnetic>
              <Link
                href="/press"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 text-[#1E3A8A] border-2 border-slate-200 hover:border-[#1E3A8A] font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-sm shrink-0"
              >
                {t("news.allPress", language)}
              </Link>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: 1200 }}>
            {NEWS_UPDATES.map((item, idx) => {
              // Dynamic color themes for editorial categories
              const categoryStyles = (() => {
                switch (item.category?.toUpperCase()) {
                  case "COOPERATION":
                    return {
                      badgeBg: "bg-[#E25822]/5 text-[#E25822] border border-[#E25822]/10",
                      iconBg: "text-[#E25822]",
                      hoverText: "group-hover:text-[#E25822]",
                      glow: "hover:shadow-[#E25822]/8 hover:border-[#E25822]/30"
                    };
                  case "NATIONAL SECURITY":
                    return {
                      badgeBg: "bg-[#B45309]/5 text-[#B45309] border border-[#B45309]/10",
                      iconBg: "text-[#B45309]",
                      hoverText: "group-hover:text-[#B45309]",
                      glow: "hover:shadow-[#B45309]/8 hover:border-[#B45309]/30"
                    };
                  case "GOVERNMENT":
                  default:
                    return {
                      badgeBg: "bg-[#1E3A8A]/5 text-[#1E3A8A] border border-[#1E3A8A]/10",
                      iconBg: "text-[#1E3A8A]",
                      hoverText: "group-hover:text-[#1E3A8A]",
                      glow: "hover:shadow-[#1E3A8A]/8 hover:border-[#1E3A8A]/30"
                    };
                }
              })();

              return (
                <Tilt key={idx} className="h-full">
                  <motion.div
                    custom={idx}
                    variants={newsCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    whileHover={{ y: -6 }}
                    data-cursor="view"
                    className={`backdrop-blur-md bg-white/70 border border-slate-200/50 hover:bg-white rounded-2xl flex flex-col justify-between overflow-hidden shadow-md shadow-slate-100/5 hover:shadow-2xl transition-all duration-500 h-full relative group cursor-pointer ${categoryStyles.glow}`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="p-6 space-y-4 text-left relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider ${categoryStyles.badgeBg}`}>
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 group-hover:text-slate-500 transition-colors">
                            <Calendar className={`w-3.5 h-3.5 ${categoryStyles.iconBg}`} />
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <h4 className={`text-base sm:text-lg font-bold font-serif leading-tight text-slate-900 ${categoryStyles.hoverText} transition-colors duration-300 line-clamp-2`}>
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-sans line-clamp-3">
                        {item.summary}
                      </p>
                    </div>

                    <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-600 relative z-10">
                      <span className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-500 transition-colors">
                        <Share2 className="w-3.5 h-3.5 text-[#E25822]/80 group-hover:text-[#E25822] transition-colors" />
                        <span>{item.shares} shares</span>
                      </span>
                      <Link
                        href={`/press/${idx + 1}`}
                        className={`inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-[#1E3A8A] ${categoryStyles.hoverText} transition-colors group/link cursor-pointer`}
                      >
                        <span>{t("news.readDetails", language)}</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                      </Link>
                    </div>
                  </motion.div>
                </Tilt>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.4 Testimonials */}
      <section className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-100 relative">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="bg-[#E25822]/5 border border-[#E25822]/10 text-[#E25822] px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {language === "HI" ? "नागरिक प्रतिक्रिया" : "Citizen Voices"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-slate-900 tracking-tight leading-tight">
              <ScrollReveal>
                {language === "HI" ? "प्रशंसापत्र" : "Testimonials"}
              </ScrollReveal>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
              {language === "HI"
                ? "निर्वाचन क्षेत्र और राष्ट्र भर के लोगों और नेताओं के वास्तविक अनुभव।"
                : "Real experiences and reflections from constituents, dairy cooperative farmers, and researchers."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-sm relative text-left space-y-6"
              >
                <Quote className="w-10 h-10 text-[#E25822]/20 absolute top-6 right-8 shrink-0" />
                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-semibold italic">
                  "{language === "HI" ? TESTIMONIALS[testimonialIndex].quote_hi : TESTIMONIALS[testimonialIndex].quote_en}"
                </p>
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {language === "HI" ? TESTIMONIALS[testimonialIndex].author_hi : TESTIMONIALS[testimonialIndex].author_en}
                    </h4>
                    <p className="text-xs text-[#1E3A8A] font-bold mt-0.5">
                      {language === "HI" ? TESTIMONIALS[testimonialIndex].role_hi : TESTIMONIALS[testimonialIndex].role_en}
                    </p>
                  </div>
                  
                  {/* Navigator controls */}
                  <div className="flex gap-1.5">
                    {TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setTestimonialIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          testimonialIndex === idx ? "w-6 bg-[#1E3A8A]" : "w-2.5 bg-slate-200 hover:bg-slate-350"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4.5 Upcoming Events */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {language === "HI" ? "समय सारिणी" : "Constituency Diary"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-slate-900 tracking-tight leading-tight">
              <ScrollReveal>
                {language === "HI" ? "आगामी कार्यक्रम" : "Upcoming Events"}
              </ScrollReveal>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
              {language === "HI"
                ? "हमारे जनसम्पर्क दौरों, शिखर सम्मेलनों और समीक्षा बैठकों का आगामी कार्यक्रम।"
                : "Schedule of upcoming public tours, cooperative summits, and review sessions."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {EVENTS.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-200/50 hover:bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 hover:-translate-y-1"
              >
                <div className="p-3 bg-[#E25822]/5 text-[#E25822] rounded-2xl shrink-0">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="text-[10px] font-extrabold uppercase text-[#E25822] tracking-wider">
                    {event.date}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-serif">
                    {language === "HI" ? event.title_hi : event.title_en}
                  </h3>
                  <div className="space-y-1 text-slate-500 text-[11px] font-semibold">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span>{language === "HI" ? event.location_hi : event.location_en}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Social Media Integration */}
      <section id="social" className="pt-8 pb-12 md:pt-12 md:pb-16 bg-slate-50/30">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-black">
              <ScrollReveal>{t("social.title", language)}</ScrollReveal>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              {t("social.desc", language)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-none" style={{ perspective: 1200 }}>
            {/* Feed 1 */}
            <motion.div
              custom={0}
              variants={socialCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ transformStyle: "preserve-3d" }}
              className="h-full"
            >
              <Link href="/social/1" className="block h-full cursor-pointer relative">
                <Tilt className="h-full">
                  <div
                    data-cursor="view"
                    className="backdrop-blur-md bg-white/70 border border-slate-200/50 hover:bg-white rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between shadow-md shadow-slate-100/5 hover:shadow-2xl relative group text-left h-full hover:border-slate-300 hover:shadow-slate-200/40"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/80 flex items-center justify-center font-black text-xs text-white shadow-inner select-none">
                            KP
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 flex items-center gap-1 group-hover:text-[#1E3A8A] transition-colors duration-300">
                              <span>Krishna Pal</span>
                              <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[8px] text-white flex items-center justify-center font-black shadow-sm">✓</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-semibold font-sans">@KrishnaPal</div>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-slate-700 hover:text-black transition-colors duration-300 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                      <p className="text-[13px] leading-relaxed text-slate-700 font-medium font-sans">
                        Inaugurated the development works under the local municipal corporation today. It is our key priority to ensure clean drinking water, modern sewage pipelines, and robust connectivity for every household. <strong>#AtmanirbharBharat</strong>
                      </p>
                      <div className="text-[10px] text-slate-400 font-bold font-sans">
                        2:30 PM · June 19, 2026
                      </div>
                    </div>

                    <div className="border-t border-slate-150/40 mt-6 pt-4 flex items-center gap-6 text-[11px] font-bold text-slate-500">
                      <span className="flex items-center gap-1.5 hover:text-sky-500 transition-colors duration-300">
                        <MessageSquare className="w-4 h-4 text-slate-400 hover:text-sky-500" />
                        <span>{feed1Replies.length} Replies</span>
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors duration-300">
                        <Share2 className="w-4 h-4 text-slate-400 hover:text-emerald-500" />
                        <span>{feed1RetweetCount} Retweets</span>
                      </span>
                    </div>
                  </div>
                </Tilt>
              </Link>
            </motion.div>

            {/* Feed 2 */}
            <motion.div
              custom={1}
              variants={socialCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ transformStyle: "preserve-3d" }}
              className="h-full"
            >
              <Link href="/social/2" className="block h-full cursor-pointer relative">
                <Tilt className="h-full">
                  <div
                    data-cursor="view"
                    className="backdrop-blur-md bg-white/70 border border-slate-200/50 hover:bg-white rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between shadow-md shadow-slate-100/5 hover:shadow-2xl relative group text-left h-full hover:border-slate-300 hover:shadow-slate-200/40"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/80 flex items-center justify-center font-black text-xs text-white shadow-inner select-none">
                            KP
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 flex items-center gap-1 group-hover:text-[#1E3A8A] transition-colors duration-300">
                              <span>Krishna Pal</span>
                              <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[8px] text-white flex items-center justify-center font-black shadow-sm">✓</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-semibold font-sans">@KrishnaPal</div>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-slate-700 hover:text-black transition-colors duration-300 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                      <p className="text-[13px] leading-relaxed text-slate-700 font-medium font-sans">
                        Gratitude to Prime Minister Narendra Modi ji for allocating capital support for PACS digitization. This cooperative structural shift will strengthen rural economies and empower small-scale farmers. <strong>#CooperativeMovement</strong>
                      </p>
                      <div className="text-[10px] text-slate-400 font-bold font-sans">
                        10:15 AM · June 19, 2026
                      </div>
                    </div>

                    <div className="border-t border-slate-150/40 mt-6 pt-4 flex items-center gap-6 text-[11px] font-bold text-slate-500">
                      <span className="flex items-center gap-1.5 hover:text-sky-500 transition-colors duration-300">
                        <MessageSquare className="w-4 h-4 text-slate-400 hover:text-sky-500" />
                        <span>{feed2Replies.length} Replies</span>
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors duration-300">
                        <Share2 className="w-4 h-4 text-slate-400 hover:text-emerald-500" />
                        <span>{feed2RetweetCount} Retweets</span>
                      </span>
                    </div>
                  </div>
                </Tilt>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4.6 FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="bg-[#E25822]/5 border border-[#E25822]/10 text-[#E25822] px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {language === "HI" ? "सामान्य प्रश्न" : "Frequently Asked Questions"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-slate-900 tracking-tight leading-tight">
              <ScrollReveal>
                {language === "HI" ? "अक्सर पूछे जाने वाले प्रश्न" : "FAQ"}
              </ScrollReveal>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-xl mx-auto">
              {language === "HI"
                ? "निर्वाचन क्षेत्र की पहल, शिकायत दर्ज करने और सहकारी प्रणालियों के बारे में सामान्य प्रश्न।"
                : "Common queries regarding constituency desk, grievance submissions, and policy implementations."}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left">
            {FAQS.map((faq, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-slate-300"
                >
                  <button
                    onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-slate-900 focus:outline-none cursor-pointer text-left"
                  >
                    <span>{language === "HI" ? faq.q_hi : faq.q_en}</span>
                    <div className={`p-1.5 rounded-lg transition-all duration-300 shrink-0 ${
                      isOpen ? "bg-[#1E3A8A] text-white" : "bg-slate-50 text-slate-500"
                    }`}>
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold border-t border-slate-100/60">
                          {language === "HI" ? faq.a_hi : faq.a_en}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
