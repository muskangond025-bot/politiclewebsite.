"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Pointer } from "lucide-react";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view" | "play">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia("(max-width: 1024px)").matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverEl = target.closest("[data-cursor]");
      if (hoverEl) {
        const type = hoverEl.getAttribute("data-cursor") as any;
        setCursorType(type || "hover");
      } else if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile) return null;

  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "rgba(30, 58, 138, 0.8)", 
      border: "none",
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(30, 58, 138, 0.08)",
      border: "2px solid rgba(30, 58, 138, 0.8)",
    },
    view: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(226, 88, 34, 0.95)", 
      border: "none",
    },
    play: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(226, 88, 34, 0.95)", 
      border: "none",
    }
  };

  return (
    <motion.div
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        x: "-50%",
        y: "-50%",
        pointerEvents: "none",
        position: "fixed",
        zIndex: 9999,
        borderRadius: "50%",
        display: isVisible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
      }}
      variants={cursorVariants}
      animate={cursorType}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="shadow-md"
    >
      {cursorType === "hover" && (
        <Pointer className="w-5 h-5 text-[#1E3A8A] transform -rotate-[15deg] drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]" />
      )}
      {cursorType === "view" && (
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-white font-sans">
          View
        </span>
      )}
      {cursorType === "play" && (
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-white font-sans">
          Play
        </span>
      )}
    </motion.div>
  );
}
