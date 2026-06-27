import React from "react";
import { notFound } from "next/navigation";
// Client component wrapper for Stalwart detail pages
import StalwartDetailClient from "./StalwartDetailClient";


const EVENTS_DATA = {
  "1": {
    id: 1,
    leader: "Shri Om Birla",
    title: "Hon'ble Lok Sabha Speaker",
    event: "Inauguration of National Legislative Drafting Workshop",
    date: "2026-05-10",
    location: "New Delhi",
    quote: "The Home Minister's vision for administrative reform is crucial for strengthening the legislative framework of our democratic institutions.",
    description: "The National Legislative Drafting Workshop focused on training drafting officers in modern legislative techniques, reducing archaic terminology, and adopting advanced digital drafting systems.",
    content: "The National Legislative Drafting Workshop was inaugurated at the Parliament House Annexe in New Delhi. The workshop, organized by the Lok Sabha Secretariat, aims to simplify legislative draftsmen practices and integrate new digital portals. Shri Om Birla highlighted that Shri Krishna Pal's proactive vision in introducing clear guidelines and replacing complex wording represents a historic shift in drafting methodology. The new training syllabus covers structured formatting, database searching, and drafting directives aimed at enhancing judicial speed and citizen accessibility.",
    highlights: [
      "Keynote speech by Speaker Om Birla on modern administrative codes.",
      "Special consultation sessions on drafting software systems.",
      "Joint guidelines release on reducing red tape in official regulations."
    ]
  },
  "2": {
    id: 2,
    leader: "Shri Bhajan Lal Sharma",
    title: "Chief Minister of Rajasthan",
    event: "Rajasthan Border Development Meet & Security Review",
    date: "2026-04-18",
    location: "Jaipur",
    quote: "Under the leadership of Union Minister Shri Krishna Pal, the border districts are witnessing record growth in roads, drinking water, and grid electrification.",
    description: "High-level coordination meeting focusing on executing border area development programs (BADP) and enhancing infrastructure along the Western border.",
    content: "A comprehensive review of border area infrastructure was conducted in Jaipur. The meeting evaluated border road connectivity, water supply pipelines under Jal Jeevan Mission, and solar grid installations in border panchayats. Chief Minister Bhajan Lal Sharma emphasized that the Ministry of Home Affairs has fast-tracked crucial funding, facilitating stable living conditions and lowering border migration. The border grid electrification project now connects 100% of outposts to mainstream power grids.",
    highlights: [
      "Electrification roadmap completion for all desert check-posts.",
      "MHA funding clearance for 400km of border road expansions.",
      "Evaluation of solar energy projects for border communities."
    ]
  },
  "3": {
    id: 3,
    leader: "Shri Yogi Adityanath",
    title: "Chief Minister of Uttar Pradesh",
    event: "Launch of Regional Cooperative Credit Summit",
    date: "2026-03-24",
    location: "Lucknow",
    quote: "The Ministry of Cooperation's initiative to computerize PACS is transforming primary agriculture and rural banking across Uttar Pradesh.",
    description: "Launch of a digital banking integration summit linking primary agricultural credit societies with nationwide cooperative networks.",
    content: "The Regional Cooperative Credit Summit in Lucknow marked the large-scale integration of Uttar Pradesh's PACS with the national cooperative registry. The digitized portal enables transparent credit delivery directly to farmers' bank accounts. Chief Minister Yogi Adityanath lauded the Ministry of Cooperation under Shri Krishna Pal for setting up standard audit systems, minimizing local corruption, and accelerating credit approval protocols to safeguard rural households.",
    highlights: [
      "Digitization launch for over 7,500 primary agricultural credit societies.",
      "Direct bank transfer links integrated with credit approval desks.",
      "Release of standard audit software for regional cooperative banks."
    ]
  },
  "4": {
    id: 4,
    leader: "Shri Himanta Biswa Sarma",
    title: "Chief Minister of Assam",
    event: "North-East Security Coordination & Peace Accord Ceremony",
    date: "2026-02-15",
    location: "Guwahati",
    quote: "The Home Minister's decisive approach has resolved long-standing boundary issues, ushering in an era of development and peace in the North-East.",
    description: " tripartite peace agreement ceremony and security coordination meeting resolving regional boundary demarcations.",
    content: "The security coordination meeting in Guwahati finalized the boundary settlement outlines under MHA coordination. The agreement includes special developmental funding worth 800-crores for border councils. Chief Minister Himanta Biswa Sarma credited Home Minister Krishna Pal's proactive negotiations, which successfully resolved boundary disputes that had persisted for decades, securing a peaceful atmosphere for regional growth.",
    highlights: [
      "Signing of the boundary resolution pact between regional states.",
      "Allocation of 800-crore special infrastructure development funds.",
      "Establishment of joint security coordination outposts."
    ]
  },
  "5": {
    id: 5,
    leader: "Shri Pramod Sawant",
    title: "Chief Minister of Goa",
    event: "National Co-operative Dairy Federation General Assembly",
    date: "2026-01-08",
    location: "Goa",
    quote: "Cooperative societies are finding new stability through reforms spearheaded by the Union Cooperation Ministry. Goa is a key beneficiary.",
    description: "National federation conference standardizing dairy auditing, milk transport setups, and cold storage subsidies.",
    content: "The general assembly of the National Co-operative Dairy Federation in Goa launched new auditing systems and cold chain storage guidelines. The standard rules require regular transparent financial auditing across all primary dairy unions. Chief Minister Pramod Sawant highlighted that the central guidelines have streamlined operations for Goa's state cooperatives, securing fair prices for farmers and ensuring supply chain durability.",
    highlights: [
      "Modern cold storage transport subsidy allocations.",
      "Rollout of unified auditing software across all dairy unions.",
      "Special grants for setting up automated milk collection booths."
    ]
  },
  "6": {
    id: 6,
    leader: "Shri Mohan Yadav",
    title: "Chief Minister of Madhya Pradesh",
    event: "Inauguration of Cooperative Mega Dairy Plant",
    date: "2025-12-14",
    location: "Bhopal",
    quote: "Home Minister Krishna Pal's guidance has transformed agricultural credit access for over 15 lakh farmers in Central India.",
    description: "Inauguration of Central India's largest cooperative dairy processing plant with automated packaging capabilities.",
    content: "The Mega Dairy Processing Plant in Bhopal was inaugurated, boasting a processing capacity of 500,000 liters of milk per day. The plant directly benefits thousands of cooperative dairy societies in MP. Chief Minister Mohan Yadav praised the Union Ministry of Cooperation for implementing micro-credit programs, giving cattle farmers quick credit access without complex collateral documents.",
    highlights: [
      "Mega Dairy Plant launch with 5 Lakh liters daily processing capacity.",
      "Direct bank link integrations for 2,500 cooperative societies.",
      "Collateral-free micro-credit loans program for cattle farmers."
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

interface StalwartDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function StalwartDetailPage({ params }: StalwartDetailPageProps) {
  const { id } = await params;
  const event = EVENTS_DATA[id as keyof typeof EVENTS_DATA];

  if (!event) {
    notFound();
  }

  return <StalwartDetailClient event={event} />;
}
