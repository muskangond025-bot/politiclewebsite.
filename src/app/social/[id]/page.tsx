
import React from "react";
import { notFound } from "next/navigation";
import SocialDetailClient from "./SocialDetailClient";

const POSTS_DATA = {
  "1": {
    id: "1",
    content: "Inaugurated the development works under the local municipal corporation today. It is our key priority to ensure clean drinking water, modern sewage pipelines, and robust connectivity for every household. #AtmanirbharBharat",
    date: "2:30 PM · June 19, 2026",
    author: "Shri Krishna Pal",
    handle: "@KrishnaPal",
    retweets: 342,
    likes: 1200,
    hashtag: "#AtmanirbharBharat",
    replies: [
      {
        author: "Anil Sharma",
        handle: "@anil_sharma",
        text: "Proud of your dedication to local governance, Sir!",
        verified: true,
        avatar: "AS",
        time: "1 hour ago"
      },
      {
        author: "Priya Patel",
        handle: "@priya_p",
        text: "Clean drinking water is indeed a game changer. Keep it up!",
        verified: false,
        avatar: "PP",
        time: "30 mins ago"
      },
      {
        author: "Rajesh Kumar",
        handle: "@rajesh_k",
        text: "Amazing to see grassroots development focus.",
        verified: true,
        avatar: "RK",
        time: "15 mins ago"
      }
    ]
  },
  "2": {
    id: "2",
    content: "Gratitude to Prime Minister Narendra Modi ji for allocating capital support for PACS digitization. This cooperative structural shift will strengthen rural economies and empower small-scale farmers. #CooperativeMovement",
    date: "10:15 AM · June 19, 2026",
    author: "Shri Krishna Pal",
    handle: "@KrishnaPal",
    retweets: 820,
    likes: 2450,
    hashtag: "#CooperativeMovement",
    replies: [
      {
        author: "Sunita Verma",
        handle: "@sunita_v",
        text: "PACS digitization will eliminate credit middle-men. Huge win for farmers!",
        verified: true,
        avatar: "SV",
        time: "2 hours ago"
      },
      {
        author: "Vijay Patel",
        handle: "@vijay_coop",
        text: "Cooperative movement is the backbone of rural India.",
        verified: false,
        avatar: "VP",
        time: "1 hour ago"
      },
      {
        author: "Ramesh Mehta",
        handle: "@ramesh_m",
        text: "Thank you for Sahkar Se Samriddhi initiatives.",
        verified: true,
        avatar: "RM",
        time: "45 mins ago"
      }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" }
  ];
}

interface SocialDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function SocialDetailPage({ params }: SocialDetailPageProps) {
  const { id } = await params;
  const post = POSTS_DATA[id as keyof typeof POSTS_DATA];

  if (!post) {
    notFound();
  }

  return <SocialDetailClient post={post} />;
}
