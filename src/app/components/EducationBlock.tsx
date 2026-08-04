"use client";

import React from "react";
import { motion } from "framer-motion";
import { education } from "../data";
import SectionHeading from "./SectionHeading";

const EducationBlock: React.FC = () => {
  return (
    <section id="education" className="py-10 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="04" title="Education" />

        <motion.div
          className="p-4 sm:p-0 border border-border rounded-lg sm:rounded-none sm:border-x-0 sm:border-b-0 sm:pt-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 sm:gap-x-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
        >
          <div>
            <h3 className="font-display text-lg sm:text-2xl text-fg">{education.degree}</h3>
            <p className="text-accent text-sm mt-1">{education.school}</p>
            <p className="mt-3 text-sm text-fg-muted leading-relaxed max-w-2xl">
              {education.description}
            </p>
          </div>
          <div className="text-sm text-fg-muted sm:whitespace-nowrap shrink-0">
            <div>{education.duration}</div>
            <div>{education.location}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationBlock;
