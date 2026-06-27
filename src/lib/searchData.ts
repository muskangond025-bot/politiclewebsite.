export interface SearchItem {
  id: string | number;
  category: "Press" | "Story" | "View" | "Stalwart" | "Timeline";
  title: string;
  description: string;
  href: string;
  date?: string;
  meta?: string;
}

export const SEARCH_INDEX: SearchItem[] = [
  // Press Releases
  {
    id: 1,
    category: "Press",
    title: "MHA issues strict guidelines for high-altitude border infrastructure safety",
    description: "Union Home Ministry SOPs for structural durability of bridge networks and strategic pathways in border regions. High-strength materials, landslide warning sensors.",
    href: "/press/1",
    date: "2026-06-18",
    meta: "Delhi MHA Duties Home Affairs Security"
  },
  {
    id: 2,
    category: "Press",
    title: "Krishna Pal inaugurates municipal water purification systems in Ahmedabad",
    description: "Inaugurated municipal water purification systems providing pure drinking water supply lines to over 40,000 households in Ahmedabad eastern suburbs.",
    href: "/press/2",
    date: "2026-06-15",
    meta: "Gujarat Civic utilities sanitation"
  },
  {
    id: 3,
    category: "Press",
    title: "Home Minister on the vision for cooperative agricultural banking reforms",
    description: "Exclusive interview on primary agricultural credit societies (PACS) computerization, credit facilities for small farmers, and digital co-operative bank integration.",
    href: "/press/3",
    date: "2026-06-12",
    meta: "Cooperation Ministry Agriculture rural credit Sahkar"
  },
  {
    id: 4,
    category: "Press",
    title: "Opinion: Transforming the Indian Criminal Justice System",
    description: "An in-depth perspective on replacing colonial criminal codes with citizen-centric Bharatiya Nyaya Sanhita legislation.",
    href: "/press/4",
    date: "2026-06-08",
    meta: "BNS Law reform home ministry"
  },
  {
    id: 5,
    category: "Press",
    title: "Joint development fund established for Central India cooperative societies",
    description: "Cooperation Ministry launches a 500-crore developmental layout to boost dairy processing clusters and local milk unions in Madhya Pradesh.",
    href: "/press/5",
    date: "2026-06-05",
    meta: "Cooperation MP Farmers dairy"
  },
  {
    id: 6,
    category: "Press",
    title: "Home Minister reviews border outpost safety and digitization in Western borders",
    description: "High-level security evaluation at Jaisalmer border post to inspect thermal imaging cameras, automated sensor walls, and drone surveillance fleets.",
    href: "/press/6",
    date: "2026-06-01",
    meta: "Rajasthan Border outpost MHA drone"
  },

  // Stories
  {
    id: "booth",
    category: "Story",
    title: "A Journey from Booth Karyakarta",
    description: "Rising steadily from local student leader and booth-level volunteer in 1980 to BJP National President and Union Home Minister.",
    href: "/story/booth",
    meta: "Gujarat Ahmedabad MLA President Home Minister Biography"
  },
  {
    id: "people",
    category: "Story",
    title: "People's Person & Constituency Leader",
    description: "Dedicated to citizen welfare, conducting Adhyakshiye Pravas, public grievance redressal programs, and digital request tracking.",
    href: "/story/people",
    meta: "Constituency tours Gandhinagar public hearings connection"
  },
  {
    id: "change",
    category: "Story",
    title: "Facilitator of Change & Reforms",
    description: "Abrogation of Article 370, computerization of PACS, and replacement of colonial codes with Bharatiya Nyaya Sanhita.",
    href: "/story/change",
    meta: "Jammu Kashmir legal code reforms digital cooperative Sahkar"
  },

  // Views & Opinions
  {
    id: 1,
    category: "View",
    title: "Revitalizing Rural India through Digitized Cooperatives",
    description: "Insight on how computerization of PACS (Primary Agricultural Credit Societies) is building transparent agricultural credit structures.",
    href: "/views/1",
    date: "2026-06-14",
    meta: "Cooperative digital credit rural banking Sahkar"
  },
  {
    id: 2,
    category: "View",
    title: "Youth and the Modern Justice Framework of India",
    description: "Reflections on introducing user-friendly technology integrations inside local policing systems under the new criminal codes.",
    href: "/views/2",
    date: "2026-06-05",
    meta: "Police laws youth citizen forensic BNS"
  },
  {
    id: 3,
    category: "View",
    title: "On National Integration and Unity",
    description: "Statement on cultural unity as the soul of India and strong legislative structures as its armor. Securing integration.",
    href: "/views/3",
    date: "2026-05-28",
    meta: "Kashmir sovereignty borders"
  },
  {
    id: 4,
    category: "View",
    title: "Empowering Border Villages as First Villages of India",
    description: "Shifting policy from treating border villages as terminal outposts to developing them as entry gateways of development.",
    href: "/views/4",
    date: "2026-05-15",
    meta: "BADP MHA border villages development first village"
  },
  {
    id: 5,
    category: "View",
    title: "Vedic Value Systems and Modern Administration",
    description: "Tracing organizational governance patterns inside traditional Indian scriptures and their relevance to public service.",
    href: "/views/5",
    date: "2026-04-30",
    meta: "Vedic administration governance ethics leadership"
  },
  {
    id: 6,
    category: "View",
    title: "On Cooperative Empowerment",
    description: "Statement: 'Without cooperation, rural development is incomplete. Cooperative bank transparency is a constitutional priority.'",
    href: "/views/6",
    date: "2026-04-12",
    meta: "Cooperation banking transparency PACS"
  },

  // Stalwart Says Endorsements
  {
    id: 1,
    category: "Stalwart",
    title: "Shri Om Birla: Legislative Drafting Workshop Support",
    description: "Lok Sabha Speaker commends the Home Minister's vision for administrative reform and modern legislative codes.",
    href: "/stalwart-says/1",
    date: "2026-05-10",
    meta: "Om Birla New Delhi Lok Sabha Drafting workshop laws"
  },
  {
    id: 2,
    category: "Stalwart",
    title: "Shri Bhajan Lal Sharma: Rajasthan Border Growth",
    description: "Rajasthan Chief Minister commends Western border district road construction, grid electrification, and water distribution under MHA guidance.",
    href: "/stalwart-says/2",
    date: "2026-04-18",
    meta: "Bhajan Lal Jaipur Rajasthan Western Border BADP roads"
  },
  {
    id: 3,
    category: "Stalwart",
    title: "Shri Yogi Adityanath: Cooperative Summit in UP",
    description: "Uttar Pradesh Chief Minister commends credit flow computerization of PACS transforming agricultural banking across UP dairy hubs.",
    href: "/stalwart-says/3",
    date: "2026-03-24",
    meta: "Yogi Adityanath Lucknow Uttar Pradesh credit PACS bank"
  },
  {
    id: 4,
    category: "Stalwart",
    title: "Shri Himanta Biswa Sarma: North-East Peace Accords",
    description: "Assam Chief Minister praises regional border pact security coordination, resolving territorial borders and bringing peace.",
    href: "/stalwart-says/4",
    date: "2026-02-15",
    meta: "Himanta Biswa Guwahati Assam peace pact security boundaries"
  },
  {
    id: 5,
    category: "Stalwart",
    title: "Shri Pramod Sawant: Co-operative Dairy General Assembly",
    description: "Goa Chief Minister endorses dairy transport setups, milk auditing standards, and cold storage allocations supported by Cooperation Ministry.",
    href: "/stalwart-says/5",
    date: "2026-01-08",
    meta: "Pramod Sawant Goa Dairy cold storage audits"
  },

  // Timeline Logs
  {
    id: "timeline-1",
    category: "Timeline",
    title: "Chaired High-Level Security Review on Western Borders",
    description: "Met with Chief of Army Staff and border security agency heads in New Delhi to audit drone defense systems and outpost electrification.",
    href: "/timeline",
    date: "2026-06-17",
    meta: "Timeline log 2026 June New Delhi Border security"
  },
  {
    id: "timeline-2",
    category: "Timeline",
    title: "Meeting with U.S. Ambassador to India Eric Garcetti",
    description: "Discussed bilateral security cooperation, counter-terrorism technology sharing, and regional stability initiatives.",
    href: "/timeline",
    date: "2026-06-12",
    meta: "Timeline log 2026 June Eric Garcetti USA diplomacy"
  },
  {
    id: "timeline-3",
    category: "Timeline",
    title: "Address at National Cooperative Conference on PACS Digitization",
    description: "Outlined roadmap for computerizing 65,000 primary agricultural cooperative banks to provide transparent credit flow for farmers.",
    href: "/timeline",
    date: "2026-05-24",
    meta: "Timeline log 2026 May PACS credit digitize Sahkar"
  },
  {
    id: "timeline-4",
    category: "Timeline",
    title: "Bilateral Meet with United Kingdom Home Secretary",
    description: "Signed MoU on cooperation in combating cybercrime and sharing tactical threat intelligence.",
    href: "/timeline",
    date: "2025-12-10",
    meta: "Timeline log 2025 December UK Bilateral cyber security"
  },
  {
    id: "timeline-5",
    category: "Timeline",
    title: "Guided Implementation Review of BNS",
    description: "Chaired coordination meeting with state police chiefs to audit forensic integration setups for the new criminal justice codes.",
    href: "/timeline",
    date: "2024-06-25",
    meta: "Timeline log 2024 June BNS Criminal codes forensic"
  },
  {
    id: "timeline-6",
    category: "Timeline",
    title: "Assumed Additional Charge of Ministry of Cooperation",
    description: "Appointed as India's first Minister of Cooperation under PM Narendra Modi. Initiated 'Sahkar Se Samriddhi'.",
    href: "/timeline",
    date: "2021-07-07",
    meta: "Timeline log 2021 July Cabinet Minister cooperative"
  },
  {
    id: "timeline-7",
    category: "Timeline",
    title: "Chaired Northern Zonal Council Meeting in Haryana",
    description: "Facilitated discussions between Chief Ministers of Punjab, Haryana, and Rajasthan regarding river-water sharing and joint border security.",
    href: "/timeline",
    date: "2020-02-18",
    meta: "Timeline log 2020 February border security NZC"
  },
  {
    id: "timeline-8",
    category: "Timeline",
    title: "Elected MLA from Sarkhej Constituency (Gujarat)",
    description: "Won by a historic margin of over 25,000 votes, marking his entry into the Gujarat Legislative Assembly.",
    href: "/timeline",
    date: "1997-06-15",
    meta: "Timeline log 1997 June MLA Gujarat electoral victory"
  }
];
