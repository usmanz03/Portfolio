"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "../data";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";

const ExperienceLog: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="01" title="Experience" />

        <div className="border-t border-border">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="py-8 border-b border-border grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <div>
                <h3 className="font-display text-2xl text-fg">
                  {exp.title} <span className="text-accent">— {exp.company}</span>
                </h3>

                <ul className="mt-4 space-y-2 max-w-2xl">
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
      </div>
    </section>
  );
};

export default ExperienceLog;
