"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useHasHover } from "../hooks/useHasHover";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  maxOffset?: number;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Magnetic: React.FC<MagneticProps> = ({
  children,
  className,
  strength = 0.3,
  maxOffset = 10,
  href,
  target,
  rel,
  download,
  onClick,
}) => {
  const reducedMotion = usePrefersReducedMotion();
  const hasHover = useHasHover();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  const clamp = (v: number) => Math.max(-maxOffset, Math.min(maxOffset, v));

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion || !hasHover) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(clamp(relX * strength));
    y.set(clamp(relY * strength));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const shared = {
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.96 },
    className,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} download={download} onClick={onClick} {...shared}>
        {children}
      </motion.a>
    );
  }

  return <motion.span {...shared}>{children}</motion.span>;
};

export default Magnetic;
