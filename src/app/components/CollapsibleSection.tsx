"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";
import { useMobileAccordion } from "../context/MobileAccordionContext";
import { useIsMobile } from "../hooks/useIsMobile";

interface CollapsibleSectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ id, number, title, children }) => {
  const { openId, toggle } = useMobileAccordion();
  const isMobile = useIsMobile();
  const isOpen = !isMobile || openId === id;

  if (!isMobile) {
    return (
      <div>
        <div className="mb-10 sm:mb-14 flex items-baseline gap-3 sm:gap-4">
          <Magnetic maxOffset={6} className="font-display text-base sm:text-lg text-accent">
            {number}
          </Magnetic>
          <ScrambleText text={title} as="h2" className="font-display text-2xl sm:text-4xl text-fg" />
        </div>
        {children}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => toggle(id)}
        className="w-full flex items-center justify-between gap-3 mb-6"
        aria-expanded={isOpen}
      >
        <span className="flex items-baseline gap-3">
          <span className="font-display text-base text-accent">{number}</span>
          <span className="font-display text-2xl text-fg">{title}</span>
        </span>
        <ChevronDown
          className={`w-5 h-5 text-fg-muted shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CollapsibleSection;
