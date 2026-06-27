"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TranslationManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const preferred = localStorage.getItem("preferred_language");
      // If language is set to Hindi or Marathi, force a browser page reload upon SPA page navigation.
      // This allows Google Translate to scan and translate the newly loaded route content
      // and avoids React virtual DOM mismatch issues during client-side hydration.
      if (preferred && preferred !== "EN") {
        const lastReloaded = sessionStorage.getItem("last_reloaded_path");
        if (lastReloaded !== pathname) {
          sessionStorage.setItem("last_reloaded_path", pathname);
          window.location.reload();
        }
      }
    }
  }, [pathname]);

  // Interval script to continuously hide Google Translate banner, tooltips, and body offsets
  useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        // Hide banner iframe
        const banner = document.querySelector('.goog-te-banner-frame') as HTMLElement;
        if (banner) {
          banner.style.display = 'none';
          banner.style.visibility = 'hidden';
          banner.style.height = '0px';
        }

        // Hide skip translate nodes
        const skiptranslates = document.querySelectorAll('.skiptranslate');
        skiptranslates.forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.display = 'none';
          htmlEl.style.visibility = 'hidden';
        });

        // Hide tooltips and balloon frames
        const tooltip = document.querySelector('#goog-gt-tt') as HTMLElement;
        if (tooltip) {
          tooltip.style.display = 'none';
          tooltip.style.visibility = 'hidden';
        }
        const balloon = document.querySelector('.goog-te-balloon-frame') as HTMLElement;
        if (balloon) {
          balloon.style.display = 'none';
          balloon.style.visibility = 'hidden';
        }

        // Reset top margin/top offset on body and html elements
        if (document.body && document.body.style.top !== '0px' && document.body.style.top !== '') {
          document.body.style.top = '0px';
        }
        if (document.documentElement && document.documentElement.style.top !== '0px' && document.documentElement.style.top !== '') {
          document.documentElement.style.top = '0px';
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

  return null;
}
