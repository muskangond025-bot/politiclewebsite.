"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VolunteerRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/explore/volunteer");
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50/50 flex items-center justify-center">
      <div className="text-slate-400 font-bold text-xs uppercase tracking-wider animate-pulse">
        Loading Volunteer Portal...
      </div>
    </div>
  );
}
