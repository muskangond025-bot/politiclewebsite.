export type LangCode = "EN" | "HI" | "MR";

export interface TranslationDict {
  [key: string]: {
    EN: string;
    HI: string;
    MR?: string;
  };
}

export const TRANSLATIONS: TranslationDict = {
  // Navigation Links
  "nav.home": { EN: "Home", HI: "होम", MR: "होम" },
  "nav.about": { EN: "About", HI: "परिचय", MR: "परिचय" },
  "nav.vision": { EN: "Vision for Sinnar", HI: "सिन्नर संकल्प", MR: "सिन्नर संकल्प" },
  "nav.achievements": { EN: "Achievements", HI: "उपलब्धियां", MR: "यशस्वी वाटचाल" },
  "nav.projects": { EN: "Projects", HI: "परियोजनाएं", MR: "विकास प्रकल्प" },
  "nav.press": { EN: "News & Media", HI: "समाचार व मीडिया", MR: "बातम्या आणि प्रसारमाध्यमे" },
  "nav.events": { EN: "Events", HI: "कार्यक्रम", MR: "कार्यक्रम" },
  "nav.schemes": { EN: "Schemes", HI: "सरकारी योजनाएं", MR: "शासकीय योजना" },
  "nav.appointment": { EN: "Appointment", HI: "अपॉइंटमेंट", MR: "भेटण्याची वेळ" },
  "nav.complaints": { EN: "Complaints", HI: "शिकायतें", MR: "तक्रार निवारण" },
  "nav.contact": { EN: "Contact", HI: "संपर्क", MR: "संपर्क" },
  "nav.views": { EN: "Views", HI: "विचार", MR: "विचार" },
  "nav.stalwart": { EN: "Stalwart Says", HI: "दिग्गजों की बात", MR: "दिग्गजांचे विचार" },
  "nav.myview": { EN: "My View", HI: "मेरा दृष्टिकोण", MR: "माझे मत" },
  "nav.gallery": { EN: "Gallery", HI: "गैलरी", MR: "गॅलरी" },
  "nav.timeline": { EN: "Timeline", HI: "समयरेखा", MR: "टाइमलाईन" },
  "nav.explore": { EN: "Explore", HI: "अन्वेषण", MR: "अन्वेषण" },
  "nav.blog": { EN: "Blog", HI: "ब्लॉग", MR: "ब्लॉग" },
  "nav.manifesto": { EN: "Manifesto", HI: "घोषणापत्र", MR: "घोषणापत्र" },
  "nav.constituency": { EN: "Constituency", HI: "निर्वाचन क्षेत्र", MR: "मतदारसंघ" },
  "nav.suggestIdea": { EN: "Suggest an Idea", HI: "विचार सुझाएं", MR: "कल्पना सुचवा" },
  "nav.volunteer": { EN: "Volunteer", HI: "स्वयंसेवक", MR: "स्वयंसेवक" },
  "nav.watchLive": { EN: "Watch Live", HI: "लाइव देखें", MR: "लाइव्ह पहा" },
  "nav.officialWebsite": { EN: "Official Website", HI: "आधिकारिक वेबसाइट", MR: "अधिकृत संकेतस्थळ" },

  // Preloader
  "preload.1": { EN: "Rashtra Pratham", HI: "राष्ट्र प्रथम", MR: "राष्ट्र प्रथम" },
  "preload.2": { EN: "Sahkar Se Samriddhi", HI: "सहकार से समृद्धि", MR: "सहकारातून समृद्धी" },
  "preload.3": { EN: "Satyamev Jayate", HI: "सत्यमेव जयते", MR: "सत्यमेव जयते" },
  "preload.4": { EN: "Shri Krishna Pal", HI: "श्री कृष्ण पाल", MR: "श्री कृष्ण पाल" },

  // Search portal
  "search.portal": { EN: "Search portal...", HI: "खोजें...", MR: "शोधा..." },

  // Footer
  "footer.subscribeTitle": { EN: "Subscribe to Updates", HI: "अपडेट के लिए सदस्यता लें", MR: "अपडेटसाठी सबस्क्राईब करा" },
  "footer.subscribeDesc": { EN: "Receive official press releases, policies announcements, and cooperative updates.", HI: "आधिकारिक प्रेस विज्ञप्तियां, नीतियों की घोषणाएं और सहकारी अपडेट प्राप्त करें।", MR: "आधिकारिक प्रसिद्धीपत्रके, धोरण घोषणा आणि सहकारी अपडेट मिळवा." },
  "footer.emailPlaceholder": { EN: "Email address", HI: "ईमेल पता", MR: "ईमेल पत्ता" },
  "footer.subscribeBtn": { EN: "Subscribe", HI: "सदस्यता लें", MR: "सबस्क्राईब करा" },
  "footer.subscribedSuccess": { EN: "Subscribed successfully for official updates.", HI: "आधिकारिक अपडेट के लिए सफलतापूर्वक सदस्यता ली गई।", MR: "अधिकृत अपडेटसाठी यशस्वीरित्या सबस्क्राईब केले." },
  "footer.roleTitle": { EN: "Union Home Minister & Minister of Cooperation", HI: "केंद्रीय गृह मंत्री एवं सहकारिता मंत्री", MR: "केंद्रीय गृहमंत्री आणि सहकार मंत्री" },
  "footer.bioSummary": { EN: "Dedicated to national security, federal legislative reforms, and strengthening grassroots cooperative societies across India.", HI: "राष्ट्रीय सुरक्षा, संघीय विधायी सुधारों और भारत भर में जमीनी स्तर की सहकारी समितियों को मजबूत करने के लिए समर्पित।", MR: "राष्ट्रीय सुरक्षा, फेडरल वैधानिक सुधार आणि भारतभरातील तळागाळातील सहकारी संस्था बळकट करण्यासाठी समर्पित." },
  "footer.quickLinks": { EN: "Quick Links", HI: "त्वरित लिंक", MR: "क्विक लिंक्स" },
  "footer.nationalInitiatives": { EN: "National Initiatives", HI: "राष्ट्रीय पहल", MR: "राष्ट्रीय उपक्रम" },
  "footer.donatePM": { EN: "Donate PM CARES", HI: "पीएम केयर्स में दान करें", MR: "पीएम केअर्समध्ये दान करा" },
  "footer.nationalRelief": { EN: "National Relief Fund", HI: "राष्ट्रीय राहत कोष", MR: "राष्ट्रीय मदत निधी" },
  "footer.bharatKeVeer": { EN: "Bharat Ke Veer", HI: "भारत के वीर", MR: "भारत के वीर" },
  "footer.supportSoldiers": { EN: "Support Soldier Families", HI: "सैनिक परिवारों का समर्थन करें", MR: "सैनिक कुटुंबांना मदत करा" },
  "footer.bjpDonations": { EN: "BJP Donations", HI: "भाजपा दान", MR: "भाजप देणगी" },
  "footer.supportDev": { EN: "Support Development", HI: "विकास का समर्थन करें", MR: "विकासाला पाठिंबा द्या" },
  "footer.rightsReserved": { EN: "All Rights Reserved. Managed officially.", HI: "सर्वाधिकार सुरक्षित। आधिकारिक तौर पर प्रबंधित।", MR: "सर्व हक्क राखीव. अधिकृत व्यवस्थापन." },
  "footer.privacy": { EN: "Privacy Policy", HI: "गोपनीयता नीति", MR: "गोपनीयता धोरण" },
  "footer.terms": { EN: "Terms of Use", HI: "उपयोग की शर्तें", MR: "वापराच्या अटी" },
  "footer.support": { EN: "Contact Support", HI: "संपर्क समर्थन", MR: "मदत संपर्क" },

  // Home Page Hero
  "hero.title": { EN: "Shri Krishna Pal", HI: "श्री कृष्ण पाल", MR: "श्री कृष्ण पाल" },
  "hero.subtitle": { EN: "Serving the nation as the Union Home Minister and Minister of Cooperation. Guided by the vision of a strong, secure, and self-reliant India.", HI: "केंद्रीय गृह मंत्री और सहकारिता मंत्री के रूप में राष्ट्र की सेवा कर रहे हैं। एक मजबूत, सुरक्षित और आत्मनिर्भर भारत के दृष्टिकोण से निर्देशित।", MR: "केंद्रीय गृहमंत्री आणि सहकार मंत्री म्हणून देशाची सेवा करत आहेत. मजबूत, सुरक्षित आणि स्वावलंबी भारताच्या संकल्पनेने प्रेरित." },
  "hero.readBio": { EN: "Read Biography", HI: "जीवनी पढ़ें", MR: "बायोग्राफी वाचा" },
  "hero.exploreAchievements": { EN: "Explore Achievements", HI: "उपलब्धियां देखें", MR: "यशस्वी उपक्रम पहा" },
  "hero.yearsService": { EN: "Years in Public Service", HI: "सार्वजनिक सेवा के वर्ष", MR: "सार्वजनिक सेवेतील वर्षे" },
  "hero.pacsDigitized": { EN: "PACS Digitized", HI: "पैक्स कंप्यूटरीकृत", MR: "PACS संगणकीकृत" },
  "hero.citizensEmpowered": { EN: "Citizens Empowered", HI: "नागरिक सशक्त", MR: "सशक्त नागरिक" },

  // Impact Cards
  "impact.title": { EN: "Impact & Contributions", HI: "प्रभाव और योगदान", MR: "प्रभाव आणि योगदान" },
  "impact.desc": { EN: "Guiding administrative reforms, national security policies, and agricultural credit digitization.", HI: "प्रशासनिक सुधारों, राष्ट्रीय सुरक्षा नीतियों और कृषि ऋण डिजिटलीकरण का मार्गदर्शन।", MR: "प्रशासकीय सुधारणा, राष्ट्रीय सुरक्षा धोरणे आणि कृषी कर्ज संगणकीकरणाचे मार्गदर्शन." },
  "impact.readStory": { EN: "Read Full Story", HI: "पूरी कहानी पढ़ें", MR: "पूर्ण माहिती वाचा" },

  // Timeline Section
  "timeline.title": { EN: "Journey at a Glance", HI: "एक नज़र में सफर", MR: "प्रवासाची एक झलक" },
  "timeline.desc": { EN: "A chronology of leadership, public service, and national administration.", HI: "नेतृत्व, जनसेवा और राष्ट्रीय प्रशासन का एक कालक्रम।", MR: "नेतृत्व, लोकसेवा आणि राष्ट्रीय प्रशासनाचा एक कालक्रम." },
  "timeline.archiveBtn": { EN: "Explore Full Timeline Archive", HI: "पूर्ण ऐतिहासिक समयरेखा देखें", MR: "पूर्ण टाईमलाईन दस्तऐवज पहा" },

  // News Section
  "news.title": { EN: "Media Statements & News", HI: "मीडिया बयान और समाचार", MR: "प्रसिद्धीपत्रके आणि बातम्या" },
  "news.desc": { EN: "Official statements, announcements, and circulars from the Ministry.", HI: "मंत्रालय की ओर से आधिकारिक बयान, घोषणाएं और परिपत्र।", MR: "मंत्रालयाकडून अधिकृत विधाने, घोषणा आणि परिपत्रके." },
  "news.allPress": { EN: "All Press Releases", HI: "सभी प्रेस विज्ञप्तियां", MR: "सर्व प्रसिद्धीपत्रके" },
  "news.readDetails": { EN: "Read Details", HI: "विवरण पढ़ें", MR: "सविस्तर वाचा" },

  // Social Section
  "social.title": { EN: "Connecting via Social Media", HI: "सोशल मीडिया से जुड़ें", MR: "सोशल मीडियावरून जोडा" },
  "social.desc": { EN: "Direct updates, community reflections, and official statements.", HI: "सीधे अपडेट, सामुदायिक विचार और आधिकारिक बयान।", MR: "थेट अपडेट्स, सामाजिक मते आणि अधिकृत विधाने." },
};

export function t(key: string, lang: LangCode): string {
  const record = TRANSLATIONS[key];
  if (!record) return key;

  const code = (lang === "HI" || lang === "MR") ? lang : "EN";
  // Fall back to Hindi for Marathi if not defined specifically
  if (code === "MR" && !record.MR) {
    return record.HI;
  }

  return record[code] || record.EN;
}
