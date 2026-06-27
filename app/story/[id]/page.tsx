import React from "react";
import { notFound } from "next/navigation";
import StoryDetailClient from "./StoryDetailClient";

const STORY_DATA = {
  booth: {
    id: "booth",
    title: "A Journey from Booth Karyakarta",
    subtitle: "Meritocratic Climb",
    theme: "Grassroots & Leadership",
    summary: "Starting as a grass-root worker in Gujarat, rising steadily through dedication, organization, and party loyalty.",
    quote: "Organization is built not on speeches, but on the tireless sweat of the karyakartas at the booth.",
    narrative: [
      "Shri Krishna Pal began his political journey in 1980 as a booth karyakarta (worker) in Ahmedabad. Over the next four decades, his path exemplified meritocracy. He served as the leader of the youth wing, BJP State Secretary, Gujarat Cabinet Minister (managing Home, Police, and border security), and eventually national BJP President (2014-2020), leading the party to consecutive historic victories.",
      "His early days were spent in relentless grassroots organizing, walking from house to house to convey the party's message. He built a reputation for discipline, deep organizational strategy, and an unparalleled understanding of voter behavior at the booth level. His persistence laid the foundation for the party's subsequent successes in crucial municipal and state elections.",
      "During his tenure as National President, he transformed the party into a highly modern, data-driven organization, expanding its membership to over 100 million and establishing party offices in almost every district of India. His climb from the very bottom of the party structure remains a shining testament to the power of dedication and meritocratic advancement in public service."
    ],
    milestones: [
      { key: "1980", val: "Started as a student leader and local booth worker in Ahmedabad." },
      { key: "1997", val: "Elected to the Gujarat Legislative Assembly with record margins." },
      { key: "2014 - 2020", val: "Served as National Party President, scaling organization nationwide." }
    ],
    image: "/hero_leader.png",
    nextId: "people",
    nextTitle: "People's Person & Constituency Leader"
  },
  people: {
    id: "people",
    title: "People's Person & Constituency Leader",
    subtitle: "Public Connection",
    theme: "Outreach & Service",
    summary: "Dedicated to the welfare of the common citizen, conducting extensive public tours and grievance handling.",
    quote: "Democracy is strong only when the gap between the citizen and the decision-maker is completely eliminated.",
    narrative: [
      "Maintaining a close relationship with the electorate is central to his leadership philosophy. From Gandhinagar to the remote districts, he regularly conducts public outreach programmes, 'Adhyakshiye Pravas' (presidential visits), and interactive public forums. His office maintains digital systems to track citizen requests, ensuring that administration remains transparent and accountable.",
      "He is known for his prompt action on citizen grievances. Whether it is addressing local infrastructure issues, helping coordinate medical emergencies, or resolving administrative bottlenecks, he believes that a leader must always be accessible to the people who elected them.",
      "Even with national responsibilities as Home Minister, he makes it a priority to spend time in his constituency, personally meeting local residents and reviewing the progress of community projects. This direct connection ensures policies are grounded in ground realities."
    ],
    milestones: [
      { key: "Constituency Tours", val: "Regular ground inspections of local infrastructure and community centres." },
      { key: "Digital Portal", val: "Pioneered a custom web system to log and address public grievances." },
      { key: "Direct Interaction", val: "Hosts weekly public hearings to bypass administrative red tape." }
    ],
    image: "/press_banner.png",
    nextId: "change",
    nextTitle: "Facilitator of Change & Reforms"
  },
  change: {
    id: "change",
    title: "Facilitator of Change & Reforms",
    subtitle: "National Security & Cooperation",
    theme: "Structural Reforms",
    summary: "Pioneering historic legislative changes and structural reforms for national security and the cooperative sector.",
    quote: "Reforms must not just be on paper; they must empower the last person in the longest queue.",
    narrative: [
      "As the Union Home Minister, he led the historic abrogation of Article 370 and 35A, fully integrating Jammu & Kashmir into the union. He pioneered the complete overhaul of India's colonial-era criminal laws, replacing them with modern, victim-centric codes (Bharatiya Nyaya Sanhita, etc.). In addition, as India's first Minister of Cooperation, he launched the 'Sahkar Se Samriddhi' initiative, revitalizing primary agricultural credit societies (PACS) across the country.",
      "His policy focus is built on long-term structural changes rather than temporary solutions. By modernizing the country's legal frameworks, security infrastructure, and cooperative networks, he is laying the foundation for a secure and prosperous 21st-century India.",
      "The digital transformation of the cooperative sector has enabled transparent credit flow directly to the bank accounts of millions of farmers, weeding out corruption and middlemen. His decisive reforms are reshaping the administrative and economic landscape of the nation."
    ],
    milestones: [
      { key: "J&K Integration", val: "Historic abrogation of Article 370 and 35A for complete integration." },
      { key: "Criminal Law Reform", val: "Replaced 150-year-old colonial laws with modern, victim-centric codes." },
      { key: "Cooperative Shift", val: "Digitized over 65,000 Primary Agricultural Credit Societies." }
    ],
    image: "/north_block.png",
    nextId: "booth",
    nextTitle: "A Journey from Booth Karyakarta"
  }
};

export async function generateStaticParams() {
  return [
    { id: "booth" },
    { id: "people" },
    { id: "change" }
  ];
}

interface StoryPageProps {
  params: Promise<{ id: string }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { id } = await params;
  const story = STORY_DATA[id as keyof typeof STORY_DATA];

  if (!story) {
    notFound();
  }

  return <StoryDetailClient story={story} />;
}
