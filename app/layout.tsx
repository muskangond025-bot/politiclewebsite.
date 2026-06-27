import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Shri Krishna Pal | Official Website",
  description: "Official website of Shri Krishna Pal, Union Home Minister and Minister of Cooperation, Government of India. Explore milestones, news, achievements, and press statements.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionPanel from "@/components/FloatingActionPanel";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import TranslationManager from "../components/TranslationManager";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        playfair.variable,
        "font-sans text-slate-900 bg-white"
      )}
    >
      <body className="min-h-screen flex flex-col">
        <div id="google_translate_element" style={{ display: "none" }} />
        
        <Script
          id="google-translate-config"
          strategy="afterInteractive"
        >
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,mr',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <TranslationManager />
        <Preloader />
        <CustomCursor />
        <Header />
        <main className="flex-grow flex flex-col bg-white relative z-10 shadow-[0_15px_30px_rgba(0,0,0,0.08)]">{children}</main>
        <FloatingActionPanel />
        <Footer />
      </body>
    </html>
  );
}
