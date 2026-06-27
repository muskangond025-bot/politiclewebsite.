import React from "react";
import { notFound } from "next/navigation";
import GalleryDetailClient from "./GalleryDetailClient";

const GALLERY_DATA = {
  "1": {
    id: 1,
    type: "Images",
    category: "Government events",
    state: "Delhi",
    date: "2026-06-18",
    title: "NIPER Ahmedabad building inauguration ceremony setup",
    shares: 420,
    imageSrc: "/niper_ahmedabad.png",
    description: "Union Home Minister Shri Krishna Pal reviewed the administrative infrastructure setup of the new National Institute of Pharmaceutical Education and Research (NIPER) campus in Ahmedabad. The site showcases the integration of advanced research labs, sterile testing zones, and cooperative incubation cells to facilitate domestic vaccine and medicine manufacturing.",
    highlights: [
      "Inspection of the new pilot scale production plants.",
      "Official briefing on R&D collaboration guidelines.",
      "Review of security clearances and automated access points."
    ]
  },
  "2": {
    id: 2,
    type: "Videos",
    category: "Organisation",
    state: "Gujarat",
    date: "2026-06-12",
    title: "Keynote speech at state-level booth workers convention",
    shares: 890,
    imageSrc: "/speech_convention.png",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Addressing thousands of dedicated karyakartas, Shri Krishna Pal outlined the party's database-driven voter connection program. He emphasized the importance of micro-cooperative networks, local community service boards, and transparent leadership pathways directly starting from local booth management.",
    highlights: [
      "Interactive guidelines for digital volunteer onboarding.",
      "Speech highlights on regional development achievements.",
      "Detailed plan for cooperative grain storage hubs in every block."
    ]
  },
  "3": {
    id: 3,
    type: "Images",
    category: "With Political Leaders",
    state: "Delhi",
    date: "2026-06-08",
    title: "Meeting with Hon'ble Lok Sabha Speaker Om Birla in Parliament office",
    shares: 310,
    imageSrc: "/meeting_birla.png",
    description: "A high-level dialogue concerning legislative procedures, parliamentary committee briefings, and upcoming reform bills. The meeting focused on structuring the digitised cooperative banking database framework and reviewing draft guidelines for cooperative audits.",
    highlights: [
      "Joint review of legislative draft simplifies.",
      "Agreement on database security protocols for primary societies.",
      "Planning for regional legislative workshop sessions."
    ]
  },
  "4": {
    id: 4,
    type: "Images",
    category: "Spiritual side",
    state: "Gujarat",
    date: "2026-06-04",
    title: "Inauguration and prayers at historical Somnath Temple festival",
    shares: 550,
    imageSrc: "/somnath_temple.png",
    description: "Shri Krishna Pal attended the annual Somnath Temple festival prayers and inaugurated new pilgrim facilitation infrastructure. The project includes high-security digital lockers, clean corridor pathways, and state-of-the-art emergency response clinics built under public-cooperative partnerships.",
    highlights: [
      "Inauguration of modern digital reservation booths.",
      "Distribution of cooperative welfare kits for local handcraft artisans.",
      "Pledge on promoting traditional cultural history archives."
    ]
  },
  "5": {
    id: 5,
    type: "Videos",
    category: "Government events",
    state: "Maharashtra",
    date: "2026-05-28",
    title: "Cooperative societies digitised bank ledger launch briefing",
    shares: 610,
    imageSrc: "/bank_ledger.png",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
    description: "The official rollout briefing of the Cooperative Ledger Digitisation Portal. Shri Krishna Pal demonstrated how rural cooperative bank branches will use secure blockchain ledger systems to instantly verify farmer loans and agricultural subsidies, eliminating red tape.",
    highlights: [
      "Live demonstration of digitized loan approval times (under 5 minutes).",
      "Rollout plan for over 12,000 credit cooperatives in Maharashtra.",
      "Integration of PACS registry database with RBI cooperative frameworks."
    ]
  },
  "6": {
    id: 6,
    type: "Images",
    category: "The Lighter side",
    state: "Rajasthan",
    date: "2026-05-15",
    title: "Brief interaction with primary school children during Jodhpur tour",
    shares: 720,
    imageSrc: "/school_children.png",
    description: "During a localized developmental tour, Shri Krishna Pal visited a primary school in Jodhpur. He reviewed local midday meal cooperative kitchens and sat with children, emphasizing the integration of digital classrooms and traditional Indian value sets in foundational education.",
    highlights: [
      "Interaction with students on science and mathematics projects.",
      "Inspection of cooperative nutrition monitoring systems.",
      "Announcement of digital tablet distributions for rural government schools."
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

interface GalleryDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const { id } = await params;
  const item = GALLERY_DATA[id as keyof typeof GALLERY_DATA];

  if (!item) {
    notFound();
  }

  return <GalleryDetailClient item={item} />;
}
