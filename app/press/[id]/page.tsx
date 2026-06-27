import React from "react";
import { notFound } from "next/navigation";
import PressDetailClient from "./PressDetailClient";

const ARTICLES_DATA = {
  "1": {
    id: 1,
    category: "Press Release",
    state: "Delhi",
    date: "2026-06-18",
    title: "MHA issues strict guidelines for high-altitude border infrastructure safety",
    summary: "Union Home Ministry has outlined standard operating procedures for structural durability of bridge networks and strategic pathways in border regions.",
    content: "Under the direct guidance of Home Minister Krishna Pal, the MHA has coordinated with border roads organizations to speed up infrastructure projects while adhering to new environmental and structural safety norms. The directives require implementing high-strength materials resistant to sub-zero temperatures, land-slide warning sensors along retaining walls, and modern drainage designs to prevent flash flood erosion. The guidelines aim to reinforce strategic connection corridors throughout high-altitude border districts, securing communication channels for local rural residents and defense systems.",
    views: 4500,
    shares: 980,
    imageSrc: "/north_block.png"
  },
  "2": {
    id: 2,
    category: "News",
    state: "Gujarat",
    date: "2026-06-15",
    title: "Krishna Pal inaugurates municipal water purification systems in Ahmedabad",
    summary: "The project will provide pure drinking water supply lines to over 40,000 households in eastern Ahmedabad suburban regions.",
    content: "Shri Krishna Pal today inaugurated a state-of-the-art water purification facility in Ahmedabad. Built with advanced reverse osmosis and UV sanitation technologies, the facility will supply over 5 million liters of drinking water daily. Speaking at the inauguration, the Home Minister stated that drinking water access is a basic constitutional utility, and the government is committed to modernizing civic administration to deliver clean services to lower-income residential communities.",
    views: 3820,
    shares: 720,
    imageSrc: "/niper_ahmedabad.png"
  },
  "3": {
    id: 3,
    category: "Interview",
    state: "Delhi",
    date: "2026-06-12",
    title: "Exclusive: Home Minister on the vision for cooperative agricultural banking reforms",
    summary: "A detailed discussion on PACS computerization, credit facilities for small farmers, and integration of digital cooperative societies.",
    content: "In a detailed session with national broadcasters, Shri Krishna Pal explained how rural empowerment relies on linking cooperative systems with digital technology to minimize middle-man interventions. Under the 'Sahkar Se Samriddhi' initiative, the Ministry of Cooperation has catalyzed the digitization of primary agricultural credit societies (PACS). This allows farmers to receive credit approvals directly in their bank accounts with minimal red tape, securing financial transparency and eliminating corruption.",
    views: 8900,
    shares: 1450,
    imageSrc: "/bank_ledger.png"
  },
  "4": {
    id: 4,
    category: "Editorials",
    state: "Delhi",
    date: "2026-06-08",
    title: "Opinion: Transforming the Indian Criminal Justice System",
    summary: "An in-depth perspective on replacing colonial codes with citizen-centric Bharatiya Nyaya Sanhita legislation.",
    content: "Our criminal justice laws stood unchanged for over a century, retaining relic colonial structures designed to punish rather than serve. The introduction of the Bharatiya Nyaya Sanhita shifts the legislative focus from retribution to victim rehabilitation and rapid justice delivery. By introducing electronic evidence logging, time-bound trial resolutions, and community service mandates, the reforms create a judicial ecosystem fit for modern democratic citizens.",
    views: 6400,
    shares: 1100,
    imageSrc: "/speech_convention.png"
  },
  "5": {
    id: 5,
    category: "Press Release",
    state: "Madhya Pradesh",
    date: "2026-06-05",
    title: "Joint development fund established for Central India cooperative societies",
    summary: "Cooperation Ministry launches developmental layout to boost dairy processing clusters in Madhya Pradesh.",
    content: "The Ministry of Cooperation and the Government of MP signed a memorandum establishing a 500-crore structural fund for small-scale cooperative milk processors. The fund will subsidize cold-storage installations, quality-testing equipment, and digital inventory setups. Shri Krishna Pal noted that local milk unions are the financial backbone of rural households, and cooperative support will multiply farmers' net profits.",
    views: 2900,
    shares: 480,
    imageSrc: "/meeting_birla.png"
  },
  "6": {
    id: 6,
    category: "News",
    state: "Rajasthan",
    date: "2026-06-01",
    title: "Home Minister reviews border outpost safety and digitization in Western borders",
    summary: "High-level security evaluation conducted at border regions to evaluate drone-monitoring setups.",
    content: "Addressing the personnel at Jaisalmer border post, Shri Krishna Pal emphasized that modern border safety requires combining human vigilance with deep digital monitoring tech. The Home Minister reviewed the deployment of thermal imaging cameras, automated sensor walls, and drone surveillance fleets. He assured that the ministry will fund advanced communication gear for all outposts to guarantee maximum safety.",
    views: 5200,
    shares: 890,
    imageSrc: "/hero_leader.png"
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

interface PressDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PressDetailPage({ params }: PressDetailPageProps) {
  const { id } = await params;
  const article = ARTICLES_DATA[id as keyof typeof ARTICLES_DATA];

  if (!article) {
    notFound();
  }

  return <PressDetailClient article={article} />;
}
