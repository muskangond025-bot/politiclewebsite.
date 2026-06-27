import React from "react";
import { notFound } from "next/navigation";
import ViewDetailClient from "./ViewDetailClient";

const VIEWS_DATA = {
  "1": {
    id: 1,
    type: "Articles",
    date: "2026-06-14",
    title: "Revitalizing Rural India through Digitized Cooperatives",
    summary: "How computerization of Primary Agricultural Credit Societies (PACS) is laying the structural foundation for transparent rural credit systems.",
    content: "Rural development relies heavily on securing agricultural finance. The Ministry of Cooperation, under the direct stewardship of Shri Krishna Pal, has launched the national computerization project for Primary Agricultural Credit Societies (PACS). By digitizing operations, establishing standard financial accounting schemas, and creating direct database links to cooperative banks, the project eliminates bureaucratic middle-man delays. Small farmers can now apply for and receive credit approvals directly in their bank accounts, reducing administrative overhead and securing full transaction transparency across rural banking systems.",
    readTime: "6 min read",
    highlights: [
      "Launch of unified digital banking portals for rural credit societies.",
      "Integration of direct bank links for localized agricultural credit.",
      "Deployment of centralized auditing software to secure transparent operations."
    ]
  },
  "2": {
    id: 2,
    type: "Blog",
    date: "2026-06-05",
    title: "Youth and the Modern Justice Framework of India",
    summary: "Reflections on introducing user-friendly technology integration inside local policing systems under new criminal code laws.",
    content: "The transition from colonial criminal codes to the citizen-centric Bharatiya Nyaya Sanhita represents a historic shift in Indian law. Our focus has shifted from retributive punishment to justice delivery and victim rehabilitation. A vital pillar of this reform is the digitisation of policing workflows. By deploying automated evidence logging, integrating digital filing, and ensuring transparent tracking of complaints, the government is building a judicial framework that serves our youth. The integration of modern mobile forensics and e-summons systems will eliminate archaic paperwork, paving the way for rapid, transparent trial resolutions.",
    readTime: "4 min read",
    highlights: [
      "Overview of the new citizen-centric Bharatiya Nyaya Sanhita codes.",
      "Integration of digital forensics and mobile logging in police stations.",
      "Abolition of obsolete administrative forms to speed up trial timelines."
    ]
  },
  "3": {
    id: 3,
    type: "Quotes",
    date: "2026-05-28",
    title: "On National Integration and Unity",
    summary: "Cultural unity is the soul of India; strong legislative structures are its armor. We are committed to securing both.",
    content: "National integration represents the foundational spirit of our diverse nation. Shri Krishna Pal, while addressing the assembly, emphasized that cultural unity is the core soul of India, which must be protected by robust and modernized legislative frameworks. The Ministry is active in introducing unified administrative regulations and border development projects to ensure that every corner of the country feels connected. Cultural identity and security are not mutually exclusive, but rather work in tandem to create a resilient, integrated democratic union.",
    readTime: "Quote of the Week",
    highlights: [
      "Key legislative frameworks introduced to secure border and regional integration.",
      "Support for cultural heritage preservation as a core component of unity.",
      "Integration of security systems across states to safeguard democratic processes."
    ]
  },
  "4": {
    id: 4,
    type: "Articles",
    date: "2026-05-15",
    title: "Empowering Border Villages as First Villages of India",
    summary: "Shifting the policy perspective from treating border outposts as terminal villages to developing them as key entry gateways of national integration.",
    content: "For decades, border villages were treated as remote, terminal outposts. Under the new border village welfare guidelines, we have flipped this perspective: they are now declared the 'First Villages' of India. Through the Vibrant Villages Program (VVP), the Ministry of Home Affairs has fast-tracked rural development, providing robust utility grids, clean drinking water lines, and solar power plants to border communities. Electrifying outposts and building high-strength road corridors ensures that residents have access to quality education, healthcare, and economic avenues, reinforcing national security through localized empowerment.",
    readTime: "8 min read",
    highlights: [
      "MHA funding clearance for Vibrant Villages Program (VVP) upgrades.",
      "Integration of water lines and solar micro-grids in border communities.",
      "Strategic road infrastructure development along connection corridors."
    ]
  },
  "5": {
    id: 5,
    type: "Blog",
    date: "2026-04-30",
    title: "Vedic Value Systems and Modern Administration",
    summary: "Tracing organizational governance patterns inside traditional Indian scriptures and their relevance to public service in the 21st century.",
    content: "Modern administrative principles often rely solely on Western models, overlooking the wealth of organizational governance documented inside traditional Indian scriptures. Vedic value systems emphasize collective welfare (Lokasangraha) and duty-bound leadership (Dharma). Tracing these governance patterns reveals that transparent public service relies on the leader's integrity and a decentralized organizational format. Under Shri Krishna Pal's direction, the Ministry of Cooperation is integrating these values into administrative workshops, encouraging public servants to align standard protocols with ethical responsibility and community growth.",
    readTime: "5 min read",
    highlights: [
      "Vedic governance concept of Lokasangraha (public welfare) application.",
      "Integration of ethical frameworks in modern administrative workshops.",
      "Decentralized cooperation models based on traditional cooperatives."
    ]
  },
  "6": {
    id: 6,
    type: "Quotes",
    date: "2026-04-12",
    title: "On Cooperative Empowerment",
    summary: "Without cooperation, rural development is incomplete. Cooperative bank transparency is a constitutional priority.",
    content: "Cooperation is the key to grassroots financial self-reliance. Under the 'Sahkar Se Samriddhi' initiative, the Ministry of Cooperation is dedicated to revitalizing primary agricultural credit societies (PACS). Ensuring transparency in cooperative banks is not just a policy goal but a constitutional priority. By integrating technology, establishing strict audit standards, and linking local banks to national registries, we empower small-scale farmers and rural entrepreneurs. The success of the cooperative movement is the success of rural India.",
    readTime: "Quote of the Month",
    highlights: [
      "Implementation of Sahkar Se Samriddhi guidelines across rural banks.",
      "Constitutional priority updates to secure credit access for local PACS.",
      "Digitization and automated audits to ensure maximum financial transparency."
    ]
  }
};

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" }
  ];
}

interface ViewDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ViewDetailPage({ params }: ViewDetailPageProps) {
  const { id } = await params;
  const item = VIEWS_DATA[id as keyof typeof VIEWS_DATA];

  if (!item) {
    notFound();
  }

  // Convert types to dynamic icon names on the client-side
  const serializableItem = {
    ...item,
    iconName: item.type === "Articles" ? "Newspaper" : item.type === "Blog" ? "MessageSquare" : "Quote"
  };

  return <ViewDetailClient item={serializableItem} />;
}
