"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: string;
  className?: string;
  type?: "words" | "chars";
  delay?: number;
}

export function ScrollReveal({ children, className = "", type = "words", delay = 0 }: ScrollRevealProps) {
  const items = type === "words" ? children.split(" ") : children.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === "words" ? 0.05 : 0.015,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(4px)" 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("inline-block", className)}
    >
      {items.map((item, idx) => (
        <span key={idx} className="inline-block overflow-hidden py-0.5">
          <motion.span
            variants={itemVariants}
            className="inline-block whitespace-pre"
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
          {type === "words" && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}
