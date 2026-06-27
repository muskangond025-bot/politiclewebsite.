import React, { Suspense } from "react";
import SearchResultsClient from "@/app/search/SearchResultsClient";


export const metadata = {
  title: "Search Results | Shri Krishna Pal",
  description: "Search results for official statements, press releases, history, and achievements of Shri Krishna Pal.",
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center">
          <div className="text-sm font-extrabold text-slate-400 animate-pulse uppercase tracking-wider">
            Loading Search Results...
          </div>
        </div>
      }
    >
      <SearchResultsClient />
    </Suspense>
  );
}
