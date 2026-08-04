import React from "react";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";

const SectionHeading: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="mb-6 sm:mb-14 flex items-baseline gap-3 sm:gap-4">
    <Magnetic maxOffset={6} className="font-display text-base sm:text-lg text-accent">
      {number}
    </Magnetic>
    <ScrambleText text={title} as="h2" className="font-display text-2xl sm:text-4xl text-fg" />
  </div>
);

export default SectionHeading;
