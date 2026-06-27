"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GalleryRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/explore/gallery");
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50/50 flex items-center justify-center">
      <div className="text-slate-400 font-bold text-xs uppercase tracking-wider animate-pulse">
        Loading Visual Gallery...
      </div>
    </div>
  );
}
