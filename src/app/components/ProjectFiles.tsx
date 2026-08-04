"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";

const ProjectFiles: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="02" title="Selected work" />

        <div className="border-t border-border">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="py-10 border-b border-border"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (index % 2) * 0.04 }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-2xl sm:text-3xl text-fg">{project.title}</h3>
                <span className="text-xs uppercase tracking-wide text-fg-muted">
                  {project.category} · {project.date}
                </span>
              </div>
              <p className="text-accent text-sm mt-1">{project.subtitle}</p>

              <p className="mt-4 text-fg-muted leading-relaxed max-w-2xl">{project.description}</p>

              <p className="mt-4 text-sm text-fg-muted max-w-2xl">
                {project.highlights.join("  ·  ")}
              </p>

              <p className="mt-4 text-xs text-fg-muted">{project.tech.join(", ")}</p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {project.github && (
                  <Magnetic
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-fg hover:text-accent transition-colors"
                  >
                    View code
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Magnetic>
                )}
                {"website" in project && project.website && (
                  <Magnetic
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-fg hover:text-accent transition-colors"
                  >
                    Live demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Magnetic>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFiles;
