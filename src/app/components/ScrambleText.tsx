"use client";

import React, { useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useHasHover } from "../hooks/useHasHover";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "span" | "h2" | "h3";
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, as = "span" }) => {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const hasHover = useHasHover();
  const Tag = as;

  const scramble = () => {
    if (reducedMotion || !hasHover) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration += text.length / 12;

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 30);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplay(text);
  };

  return (
    <Tag className={className} onMouseEnter={scramble} onMouseLeave={reset}>
      {display}
    </Tag>
  );
};

export default ScrambleText;
