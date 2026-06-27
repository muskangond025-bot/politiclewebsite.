export interface BlogPost {
  id: number;
  category: "Cooperatives" | "Security" | "Governance" | "Policy" | "Personal";
  title: string;
  summary: string;
  date: string;
  readTime: string;
  imageSrc: string;
  author: string;
  tags: string[];
  content: {
    type: "paragraph" | "heading" | "quote" | "list" | "callout";
    text?: string;
    items?: string[];
  }[];
}

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    category: "Cooperatives",
    title: "Sahkar Se Samriddhi: Digitizing India's Cooperative Backbone",
    summary: "How primary agricultural credit societies (PACS) are being revolutionized with digital cloud networks to empower millions of farmers directly.",
    date: "2026-06-25",
    readTime: "5 min read",
    imageSrc: "/bank_ledger.png",
    author: "Shri Krishna Pal",
    tags: ["Cooperatives", "Digital India", "PACS", "Agriculture"],
    content: [
      {
        type: "paragraph",
        text: "The cooperative movement in India has always been a vital contributor to the rural economy. However, for decades, these institutions suffered from opacity, slow transactions, and lack of integration with the modern financial system. The vision of 'Sahkar Se Samriddhi' aims to modernize this crucial infrastructure from the ground up."
      },
      {
        type: "heading",
        text: "Computerization of Primary Agricultural Credit Societies (PACS)"
      },
      {
        type: "paragraph",
        text: "At the core of this reform is the national computerization project of all PACS across the country. By moving these grassroots credit societies onto a unified, secure cloud portal, we are establishing transparency, reducing audit delays, and building a direct pipeline of credit to small and marginal farmers. Every transaction is now logged in real-time, eliminating leakages and bureaucratic bottlenecks."
      },
      {
        type: "quote",
        text: "Digitization is not just about adopting computers; it is about building democratic trust. When a farmer knows their credit applications are logged transparently on a digital portal, trust in cooperative banking is restored."
      },
      {
        type: "heading",
        text: "Multi-Service Entities: Beyond Credit"
      },
      {
        type: "paragraph",
        text: "Under the new legislative guidelines, digitized PACS are no longer limited to agricultural lending. They are now enabled to serve as multi-service entities, providing LPG distributorships, running local warehouse storage centers, operating fair price shops, and establishing Jan Aushadhi Kendras. This diversity creates resilient secondary income lines for rural communities."
      },
      {
        type: "list",
        items: [
          "Unified ERP software deployed across 63,000+ local cooperative units.",
          "Digital credit evaluation system minimizing approval times to minutes.",
          "Integration with national bank systems, facilitating direct benefit transfers (DBT).",
          "Diversification pathways creating over 20 new business avenues per local unit."
        ]
      },
      {
        type: "callout",
        text: "Important: This transition represents the single largest rural fintech push in modern Indian history. By establishing a robust, transparent digital cooperative core, we lay the foundations of a self-reliant agricultural society."
      }
    ]
  },
  {
    id: 2,
    category: "Security",
    title: "Modernizing Law Enforcement: The Tech-First Forensic Shift",
    summary: "Exploring the mandate of forensic mobile vans and digital evidence tracking systems under the new citizen-centric criminal codes.",
    date: "2026-06-20",
    readTime: "7 min read",
    imageSrc: "/north_block.png",
    author: "Shri Krishna Pal",
    tags: ["MHA", "Law Enforcement", "Forensics", "Legal Reform"],
    content: [
      {
        type: "paragraph",
        text: "Justice delayed is justice denied. In the modern age, securing reliable conviction rates is closely tied to the scientific validity of the evidence collected. As India replaces colonial criminal codes with the citizen-centric Bharatiya Nyaya Sanhita, the integration of advanced forensics becomes a statutory mandate rather than an administrative option."
      },
      {
        type: "heading",
        text: "Mandatory Forensic Auditing for Serious Crimes"
      },
      {
        type: "paragraph",
        text: "Under the new penal provisions, forensic examination of crime scenes has been made compulsory for all offences carrying a punishment of seven years or more. To achieve this, the Ministry of Home Affairs is funding the rollout of state-of-the-art mobile forensic laboratories across all districts. These vans are equipped with rapid DNA testing kits, digital evidence recovery tools, and chemical analysis bays."
      },
      {
        type: "quote",
        text: "By making forensic evidence mandatory, we shift the police force from confession-based investigations to evidence-based investigations. This protects human rights and ensures conviction rates rise steadily."
      },
      {
        type: "heading",
        text: "Digital Evidence Custody Chain"
      },
      {
        type: "paragraph",
        text: "With the rise of cybercrimes and digital communications, maintaining a secure custody chain for digital evidence is critical. The ministry has built a standardized digital locker network. First responders can now securely upload hashed audio, video, and image captures directly from scene locations, rendering evidence tamper-proof before it is presented in a court of law."
      },
      {
        type: "list",
        items: [
          "Deployment of over 1,200 specialized mobile forensic vans across states.",
          "Establishment of regional centers of excellence for National Forensic Science University (NFSU).",
          "Implementation of e-Forensics software connecting all regional labs to central courts.",
          "Mandatory training pipelines on cyber forensics and electronic logs for police officers."
        ]
      },
      {
        type: "callout",
        text: "Strategic Shift: Investing in advanced diagnostics and digital evidence infrastructure will reduce court backlogs, increase the speed of trials, and secure safety profiles across residential and industrial corridors."
      }
    ]
  },
  {
    id: 3,
    category: "Governance",
    title: "Constituency Grievances: Redesigning Public Redressal Portals",
    summary: "Inside the local administrative tracking system designed to log, route, and solve public requests from citizens in real-time.",
    date: "2026-06-14",
    readTime: "4 min read",
    imageSrc: "/niper_ahmedabad.png",
    author: "Shri Krishna Pal",
    tags: ["Governance", "Citizen Service", "Digital Portal", "Public Welfare"],
    content: [
      {
        type: "paragraph",
        text: "A representative's primary duty is to remain accessible to their constituency. However, tracking thousands of daily requests, letters, and administrative grievances manually leads to delays and lost files. By designing an online, automated public grievance dashboard, we are redefining citizen-state interaction at the constituency level."
      },
      {
        type: "heading",
        text: "Direct Request Routing and Tracking"
      },
      {
        type: "paragraph",
        text: "Our new custom portal allows citizens to submit requests for road repairs, electricity connection issues, school admissions, or local utility extensions directly. Once submitted, each file is assigned a unique tracking token and is routed to the corresponding block or municipal administrator. The system triggers automated SMS updates to the citizen at every stage of the review process."
      },
      {
        type: "quote",
        text: "Administrative transparency is the pillar of good governance. Citizens should not have to run from office to office just to check the status of a simple civic request."
      },
      {
        type: "list",
        items: [
          "Real-time tracking of civic files with built-in SLA alert timers for officers.",
          "Unified digital dashboard showing resolution rates across different wards.",
          "SMS integration updating citizens directly in local regional languages.",
          "Monthly public audit logs published to show response rates and resolution percentages."
        ]
      },
      {
        type: "callout",
        text: "Goal: This platform acts as a model for public service portal designs, demonstrating how simple web technologies can be used to make district offices responsive and accountable to their local electors."
      }
    ]
  },
  {
    id: 4,
    category: "Policy",
    title: "Border Gateway Policy: Turning Outposts into Growth Centers",
    summary: "A deep dive into the Vibrant Villages Programme shifting border management from security buffer zones to thriving development gateways.",
    date: "2026-06-08",
    readTime: "6 min read",
    imageSrc: "/somnath_temple.png",
    author: "Shri Krishna Pal",
    tags: ["Policy", "Border Security", "Vibrant Villages", "Rural Growth"],
    content: [
      {
        type: "paragraph",
        text: "For decades, border villages were considered India's terminal outposts—remote zones with minimal infrastructure, leading to rapid migration toward urban centers. The Vibrant Villages Programme (VVP) reverses this policy, redesigning border management to treat these areas as India's 'First Villages' and major gateways of tourism and trade."
      },
      {
        type: "heading",
        text: "Infrastructure, Roads, and Digital Connectivity"
      },
      {
        type: "paragraph",
        text: "The MHA has launched a comprehensive infrastructure push in these northern and western border villages. We are building all-weather road linkages, establishing 24x7 grid power supplies, installing high-speed cellular towers, and setting up cooperative handicraft centers. This ensures that youth in border districts find sustainable livelihood options locally instead of having to migrate."
      },
      {
        type: "quote",
        text: "Border security is not just about fencing; it is about local community strength. When border villages are prosperous and populated, national security is naturally bolstered."
      },
      {
        type: "list",
        items: [
          "Allocating developmental layouts for over 2,900 northern border villages.",
          "Promotion of sustainable adventure tourism, home-stay hubs, and cultural paths.",
          "Direct grid solar electrification setups in high-altitude freezing terrains.",
          "Linking local border cooperatives to central market setups via digital portals."
        ]
      },
      {
        type: "callout",
        text: "Strategic Vision: Turning border regions into economic gateways creates a strong, second line of defense and creates opportunities in regions that were previously cut off."
      }
    ]
  },
  {
    id: 5,
    category: "Cooperatives",
    title: "Cooperative Dairy Farming: The Power of Local Milk Unions",
    summary: "Reviewing UP dairy hubs and PACS credit linkages creating record dairy output and secondary revenues for women farmers.",
    date: "2026-05-29",
    readTime: "5 min read",
    imageSrc: "/meeting_birla.png",
    author: "Shri Krishna Pal",
    tags: ["Cooperatives", "Dairy", "Women Empowerment", "Rural Economy"],
    content: [
      {
        type: "paragraph",
        text: "While agriculture forms the primary occupation in rural India, dairy farming provides the essential secondary income that supports families during dry spells or seasonal crop losses. By linking local cooperative milk unions directly with digitized PACS, we are building a integrated model for the dairy sector."
      },
      {
        type: "heading",
        text: "Streamlining Cold Chains and Auditing Systems"
      },
      {
        type: "paragraph",
        text: "A major hurdle for dairy farmers is the lack of storage facilities, leading to spoilage and lower payouts. The Cooperation Ministry is setting up cold storage chambers and automatic milk testing machines at the village level. Payouts are directly calculated based on fat quality tests and sent straight to the farmer's bank account, eliminating middlemen."
      },
      {
        type: "quote",
        text: "When women lead cooperative milk unions, the benefits flow directly to families, education, and health. Empowering local dairy cooperatives is empowering rural India."
      },
      {
        type: "list",
        items: [
          "Integrated village dairy collection centers with computerized fat analysis scales.",
          "Interest-subvented cattle credit lines issued via local digital PACS accounts.",
          "Logistical cold chains keeping storage parameters stable across hot summer months.",
          "Direct integration of local milk brands into regional cooperative networks."
        ]
      },
      {
        type: "callout",
        text: "Impact: By digitizing the audit trails and installing local village chiller centers, dairy farming transitions from an informal trade into a structured, highly profitable micro-industry."
      }
    ]
  },
  {
    id: 6,
    category: "Personal",
    title: "Vedic Governance Systems: A Model for Public Service Leadership",
    summary: "Reflecting on administrative leadership, organizational ethics, and local welfare designs found within traditional texts.",
    date: "2026-05-18",
    readTime: "8 min read",
    imageSrc: "/speech_convention.png",
    author: "Shri Krishna Pal",
    tags: ["Personal", "Ethics", "Governance", "Vedic Wisdom"],
    content: [
      {
        type: "paragraph",
        text: "Modern public administration relies heavily on western corporate organizational models. While these systems are highly structured, they often lack the deep ethical roots necessary to sustain long-term social trust. Traditional Indian administrative scriptures offer timeless frameworks that blend governance with public duty."
      },
      {
        type: "heading",
        text: "The Principle of 'Yogakshema'"
      },
      {
        type: "paragraph",
        text: "In traditional texts, a ruler or administrator's primary responsibility is Yogakshema—securing the welfare, safety, and spiritual development of the people. This means governance is not merely about managing budgets or projects; it is a sacred duty. Welfare is not a political handout; it is the ultimate measure of administrative success."
      },
      {
        type: "quote",
        text: "True leadership lies in aligning our actions with the welfare of the last person in line. When administrative power is treated as public duty, efficiency and integrity follow naturally."
      },
      {
        type: "list",
        items: [
          "Governance frameworks inspired by Arthashastra on economic auditing.",
          "The integration of ethical self-restraint as a prerequisite for leadership roles.",
          "Decentralized administrative councils empowering local self-governance.",
          "Focusing development on ecological harmony and long-term sustainability."
        ]
      },
      {
        type: "callout",
        text: "Reflections: Balancing technological efficiency with ethical and cultural values is key to building a strong, inclusive administration that serves all sections of society."
      }
    ]
  }
];
