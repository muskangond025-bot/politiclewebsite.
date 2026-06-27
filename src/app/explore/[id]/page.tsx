import React from "react";
import { notFound } from "next/navigation";
import ExploreDetailClient from "@/app/explore/[id]/ExploreDetailClient";

const EXPLORE_DATA = {
  mha: {
    id: "mha",
    title_en: "9-Years Achievements of Ministry of Home Affairs",
    title_hi: "गृह मंत्रालय की 9 वर्षों की उपलब्धियां",
    tagline_en: "National Security & Border Development",
    tagline_hi: "राष्ट्रीय सुरक्षा और सीमा विकास",
    pdfUrl: "/mha_achievements.pdf",
    bannerImage: "/north_block.png",
    quote_en: "A nation is only as strong as its border security and the safety of its citizens.",
    quote_hi: "कोई भी राष्ट्र केवल उतना ही मजबूत होता है जितनी उसकी सीमा सुरक्षा और उसके नागरिकों की सुरक्षा होती है।",
    intro_en: "The Ministry of Home Affairs has pursued comprehensive reforms over the last nine years, focusing on border area development, modernizing the police force, and creating resilient internal security frameworks.",
    intro_hi: "गृह मंत्रालय ने पिछले नौ वर्षों में व्यापक सुधार किए हैं, जिसमें सीमा क्षेत्र के विकास, पुलिस बल के आधुनिकीकरण और लचीले आंतरिक सुरक्षा ढांचे के निर्माण पर ध्यान केंद्रित किया गया है।",
    highlights_en: [
      "Vibrant Villages Program: Comprehensive development, road connectivity, and solar micro-grids for villages along the national borders.",
      "Internal Security System: Launching cybercrime prevention coordinate cells and modern digital communication links for rural border posts.",
      "Modern Forensic Labs: Establishing forensic science integration setups across multiple states to speed up investigation timelines."
    ],
    highlights_hi: [
      "वाइब्रेंट विलेजेज प्रोग्राम: राष्ट्रीय सीमाओं के पास स्थित गांवों के लिए व्यापक विकास, सड़क संपर्क और सौर माइक्रो-ग्रिड।",
      "आंतरिक सुरक्षा प्रणाली: साइबर अपराध रोकथाम समन्वय सेल और ग्रामीण सीमा चौकियों के लिए आधुनिक डिजिटल संचार लिंक का शुभारंभ।",
      "आधुनिक फोरेंसिक प्रयोगशालाएं: जांच समय-सीमा को तेज करने के लिए कई राज्यों में फोरेंसिक विज्ञान एकीकरण सेटअप की स्थापना।"
    ],
    details_en: "During the last nine years, the Ministry of Home Affairs has transformed the national security landscape of India. By prioritizing infrastructural improvements in border regions through the 'Vibrant Villages Program', local communities are being treated as the first line of national security. Strategic road corridors and digital grids now connect formerly isolated outposts. Simultaneously, police modernization funds have equipped state police units with modern forensic equipment, automated databases, and advanced tools. These initiatives ensure rapid response, transparent administration, and strong border integrity.",
    details_hi: "पिछले नौ वर्षों के दौरान, गृह मंत्रालय ने भारत के राष्ट्रीय सुरक्षा परिदृश्य को बदल दिया है। 'वाइब्रेंट विलेजेज प्रोग्राम' के माध्यम से सीमावर्ती क्षेत्रों में बुनियादी ढांचे में सुधार को प्राथमिकता देकर, स्थानीय समुदायों को राष्ट्रीय सुरक्षा की पहली पंक्ति के रूप में माना जा रहा है। रणनीतिक सड़क गलियारे और डिजिटल ग्रिड अब पहले से अलग-थलग पड़े सीमा चौकियों को जोड़ते हैं। इसके साथ ही, पुलिस आधुनिकीकरण कोष ने राज्य पुलिस इकाइयों को आधुनिक फोरेंसिक उपकरण, स्वचालित डेटाबेस और उन्नत उपकरणों से लैस किया है। ये पहल त्वरित प्रतिक्रिया, पारदर्शी प्रशासन और मजबूत सीमा अखंडता सुनिश्चित करती हैं।"
  },
  cooperation: {
    id: "cooperation",
    title_en: "Ministry of Cooperation Achievements",
    title_hi: "सहकारिता मंत्रालय की उपलब्धियां",
    tagline_en: "Sahkar Se Samriddhi",
    tagline_hi: "सहकार से समृद्धि",
    pdfUrl: "/cooperation_achievements.pdf",
    bannerImage: "/bank_ledger.png",
    quote_en: "Cooperation is the key to unlocking rural wealth and empowering small farmers.",
    quote_hi: "सहकारिता ही ग्रामीण समृद्धि का मार्ग प्रशस्त करने और छोटे किसानों को सशक्त बनाने की कुंजी है।",
    intro_en: "Under the newly created Ministry of Cooperation, the national cooperative movement has been digitized and restructured, bringing financial inclusion directly to the grassroots.",
    intro_hi: "नवनिर्मित सहकारिता मंत्रालय के तहत, राष्ट्रीय सहकारिता आंदोलन को डिजिटल और पुनर्गठित किया गया है, जिससे वित्तीय समावेशन सीधे जमीनी स्तर पर पहुंचा है।",
    highlights_en: [
      "PACS Computerization: Digitizing 65,000 Primary Agricultural Credit Societies for transparent credit flows.",
      "National Cooperatives: Establishing national-level cooperative societies for organic products, seeds, and exports.",
      "Database Launch: Creating the first comprehensive National Cooperative Database to map all cooperative entities."
    ],
    highlights_hi: [
      "पैक्स (PACS) का कंप्यूटरीकरण: पारदर्शी ऋण प्रवाह के लिए 65,000 प्राथमिक कृषि ऋण समितियों का डिजिटलीकरण।",
      "राष्ट्रीय सहकारी समितियां: जैविक उत्पादों, बीजों और निर्यात के लिए राष्ट्रीय स्तर की सहकारी समितियों की स्थापना।",
      "डेटाबेस का शुभारंभ: सभी सहकारी संस्थाओं को मैप करने के लिए पहले व्यापक राष्ट्रीय सहकारी डेटाबेस का निर्माण।"
    ],
    details_en: "The Ministry of Cooperation was created to realize the vision of 'Sahkar Se Samriddhi' (Prosperity through Cooperation). By digitizing the Primary Agricultural Credit Societies (PACS), the government has streamlined rural banking operations, establishing direct bank transfer links that bypass middlemen. The creation of specialized cooperative societies for organic production, high-quality seeds, and export support ensures small farmers gain access to international markets. A centralized national cooperative database maps over 800,000 societies, providing real-time data for policymakers to support rural growth.",
    details_hi: "सहकारिता मंत्रालय का गठन 'सहकार से समृद्धि' के दृष्टिकोण को साकार करने के लिए किया गया था। प्राथमिक कृषि ऋण समितियों (PACS) का डिजिटलीकरण करके, सरकार ने ग्रामीण बैंकिंग संचालन को सुव्यवस्थित किया है, जिससे बिचौलियों को दरकिनार कर सीधे बैंक हस्तांतरण लिंक स्थापित किए गए हैं। जैविक उत्पादन, उच्च गुणवत्ता वाले बीजों और निर्यात सहायता के लिए विशेष सहकारी समितियों के निर्माण से छोटे किसानों को अंतर्राष्ट्रीय बाजारों तक पहुंच प्राप्त होना सुनिश्चित होता है। एक केंद्रीकृत राष्ट्रीय सहकारी डेटाबेस 8,00,000 से अधिक समितियों को मैप करता है, जो नीति निर्माताओं को ग्रामीण विकास का समर्थन करने के लिए वास्तविक समय का डेटा प्रदान करता है।"
  },
  "bjp-president": {
    id: "bjp-president",
    title_en: "Milestone as BJP President & Adhyakshiye Pravas",
    title_hi: "भाजपा अध्यक्ष के रूप में मील के पत्थर और अध्यक्षीय प्रवास",
    tagline_en: "Organizational Expansion Era",
    tagline_hi: "संगठनात्मक विस्तार का युग",
    pdfUrl: "/bjp_president_achievements.pdf",
    bannerImage: "/speech_convention.png",
    quote_en: "True leadership is built on relentless grassroots tours and personal connection with the karyakartas.",
    quote_hi: "सच्चा नेतृत्व अथक जमीनी दौरों और कार्यकर्ताओं के साथ व्यक्तिगत जुड़ाव पर बनता है।",
    intro_en: "During his tenure as National President (2014-2020), the party scaled to record membership, establishing digital-first administrative processes and completing nationwide tours to connect with local workers.",
    intro_hi: "राष्ट्रीय अध्यक्ष (2014-2020) के रूप में अपने कार्यकाल के दौरान, पार्टी ने रिकॉर्ड सदस्यता हासिल की, डिजिटल-प्रथम प्रशासनिक प्रक्रियाओं की स्थापना की और स्थानीय कार्यकर्ताओं से जुड़ने के लिए देशव्यापी दौरे पूरे किए।",
    highlights_en: [
      "Adhyakshiye Pravas: Relentless state-level organizational tours to review work across all Indian districts.",
      "Digital Membership Drive: Expanding membership to over 100 million through systematic digital registration campaigns.",
      "Office Infrastructure: Constructing permanent modern party offices in nearly every district of India."
    ],
    highlights_hi: [
      "अध्यक्षीय प्रवास: सभी भारतीय जिलों में कार्य की समीक्षा के लिए अथक राज्य स्तरीय संगठनात्मक दौरे।",
      "डिजिटल सदस्यता अभियान: व्यवस्थित डिजिटल पंजीकरण अभियानों के माध्यम से सदस्यता को 10 करोड़ से अधिक तक बढ़ाना।",
      "कार्यालय बुनियादी ढांचा: भारत के लगभग हर जिले में स्थायी आधुनिक पार्टी कार्यालयों का निर्माण।"
    ],
    details_en: "The presidential era of 2014-2020 marked a historic milestone for organizational scaling. Shri Krishna Pal pioneered the 'Adhyakshiye Pravas' program, spending hundreds of days touring districts to personally review Booth Committee setups and guide karyakartas. By launching massive digital membership drives, the party became the largest political organization globally. In tandem, the party launched infrastructure projects to construct modern, internet-equipped district offices across all states, ensuring unified communication and administrative stability for grassroots workers.",
    details_hi: "2014-2020 का अध्यक्षीय युग संगठनात्मक विस्तार के लिए एक ऐतिहासिक मील का पत्थर रहा। श्री कृष्ण पाल ने 'अध्यक्षीय प्रवास' कार्यक्रम की शुरुआत की, जिसके तहत बूथ समिति के सेटअप की व्यक्तिगत समीक्षा करने और कार्यकर्ताओं का मार्गदर्शन करने के लिए जिलों का दौरा करने में सैकड़ों दिन बिताए। बड़े पैमाने पर डिजिटल सदस्यता अभियान चलाकर पार्टी वैश्विक स्तर पर सबसे बड़ा्रथम राजनीतिक संगठन बन गई। इसके साथ ही, पार्टी ने जमीनी स्तर के कार्यकर्ताओं के लिए एकीकृत संचार और प्रशासनिक स्थिरता सुनिश्चित करने के लिए सभी राज्यों में आधुनिक, इंटरनेट से लैस जिला कार्यालयों के निर्माण के लिए बुनियादी ढांचा परियोजनाएं शुरू कीं।"
  },
  "six-years-hm": {
    id: "six-years-hm",
    title_en: "Landmark Achievements in Six Years as Union Home Minister",
    title_hi: "केंद्रीय गृह मंत्री के रूप में छह वर्षों की ऐतिहासिक उपलब्धियां",
    tagline_en: "Sovereignty & Legislative Reform",
    tagline_hi: "संप्रभुता और विधायी सुधार",
    pdfUrl: "/six_years_hm_achievements.pdf",
    bannerImage: "/north_block.png",
    quote_en: "Laws must evolve to serve the citizen and ensure swift, modern justice.",
    quote_hi: "कानूनों को नागरिकों की सेवा करने और त्वरित, आधुनिक न्याय सुनिश्चित करने के लिए विकसित होना चाहिए।",
    intro_en: "The last six years have witnessed historic legislative milestones under the Home Ministry leadership, redefining national sovereignty and overhauling India's criminal justice system.",
    intro_hi: "गृह मंत्रालय के नेतृत्व में पिछले छह वर्षों में ऐतिहासिक विधायी मील के पत्थर देखे गए हैं, जिसने राष्ट्रीय संप्रभुता को फिर से परिभाषित किया है और भारत की आपराधिक न्याय प्रणाली में आमूलचूल परिवर्तन किया है।",
    highlights_en: [
      "Article 370 Abrogation: Full integration of Jammu & Kashmir, extending constitutional rights and development to all citizens.",
      "Criminal Justice Overhaul: Implementing Bharatiya Nyaya Sanhita (BNS) to replace colonial-era legal codes.",
      "CAA Implementation: Enacting the Citizenship Amendment Act to provide refuge paths to persecuted minorities."
    ],
    highlights_hi: [
      "धारा 370 का उन्मूलन: जम्मू-कश्मीर का पूर्ण एकीकरण, सभी नागरिकों को संवैधानिक अधिकार और विकास प्रदान करना।",
      "आपराधिक न्याय प्रणाली में बदलाव: औपनिवेशिक काल के कानूनी कोडों को बदलने के लिए भारतीय न्याय संहिता (BNS) को लागू करना।",
      "सीएए (CAA) का कार्यान्वयन: प्रताड़ित अल्पसंख्यकों को शरण प्रदान करने के लिए नागरिकता संशोधन अधिनियम को लागू करना।"
    ],
    details_en: "The Union Home Minister's tenure has been defined by historic sovereignty decisions and legal reforms. The landmark abrogation of Article 370 and 35A brought complete integration to Jammu & Kashmir, opening paths for industrial investment, localized governance, and central rights. In 2024, the administration completed the overhaul of 150-year-old British colonial penal systems, replacing them with victim-centric, technology-integrated codes (BNS, BS, BNSS). Additionally, the implementation of the CAA provided citizenship rights to persecuted minority families, fulfilling long-standing humanitarian promises.",
    details_hi: "केंद्रीय गृह मंत्री का कार्यकाल ऐतिहासिक संप्रभुता निर्णयों और कानूनी सुधारों द्वारा परिभाषित रहा है। धारा 370 और 35ए के ऐतिहासिक उन्मूलन से जम्मू-कश्मीर में पूर्ण एकीकरण आया, जिससे औद्योगिक निवेश, स्थानीय शासन और केंद्रीय अधिकारों के मार्ग खुले। 2024 में, प्रशासन ने 150 साल पुरानी ब्रिटिश औपनिवेशिक दंड प्रणालियों के बदलाव को पूरा किया, उन्हें पीड़ित-केंद्रित, प्रौद्योगिकी-एकीकृत कोड (BNS, BS, BNSS) से बदल दिया। इसके अतिरिक्त, सीएए (CAA) के कार्यान्वयन ने प्रताड़ित अल्पसंख्यक परिवारों को नागरिकता अधिकार प्रदान किए, जिससे लंबे समय से चले आ रहे मानवीय वादे पूरे हुए।"
  }
};

export async function generateStaticParams() {
  return [
    { id: "mha" },
    { id: "cooperation" },
    { id: "bjp-president" },
    { id: "six-years-hm" }
  ];
}

interface ExploreDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ExploreDetailPage({ params }: ExploreDetailPageProps) {
  const { id } = await params;
  const item = EXPLORE_DATA[id as keyof typeof EXPLORE_DATA];

  if (!item) {
    notFound();
  }

  return <ExploreDetailClient item={item} />;
}
