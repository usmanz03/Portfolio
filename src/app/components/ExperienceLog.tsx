"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "../data";
import CollapsibleSection from "./CollapsibleSection";
import Magnetic from "./Magnetic";

const ExperienceLog: React.FC = () => {
  return (
    <section id="experience" className="py-10 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <CollapsibleSection id="experience" number="01" title="Experience">
        <div className="flex flex-col gap-4 sm:gap-0 sm:border-t sm:border-border">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-0 border border-border rounded-lg sm:rounded-none sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:py-8 grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <div>
                <h3 className="font-display text-lg sm:text-2xl text-fg">
                  {exp.title} <span className="text-accent">— {exp.company}</span>
                </h3>

                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 max-w-2xl">
                  {exp.achievements.map((line, i) => (
                    <li key={i} className="text-sm text-fg-muted leading-relaxed flex gap-2.5">
                      <span className="text-accent shrink-0">—</span>
                      {line}
                    </li>
                  ))}
                </ul>

                {"website" in exp && exp.website && (
                  <Magnetic
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-fg hover:text-accent transition-colors"
                  >
                    {exp.website.replace(/^https?:\/\//, "")}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Magnetic>
                )}
              </div>

              <div className="text-sm text-fg-muted sm:text-right whitespace-nowrap">
                <div>{exp.duration}</div>
                <div>{exp.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
        </CollapsibleSection>
      </div>
    </section>
  );
};

export default ExperienceLog;
