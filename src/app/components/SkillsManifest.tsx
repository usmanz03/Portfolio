"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data";
import SectionHeading from "./SectionHeading";

const SkillsManifest: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="03" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-border pt-10">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <h3 className="text-xs uppercase tracking-wide text-accent">{group.category}</h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-fg-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsManifest;
