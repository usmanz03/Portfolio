"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import CollapsibleSection from "./CollapsibleSection";
import Magnetic from "./Magnetic";
import Badge from "./Badge";

const ProjectFiles: React.FC = () => {
  return (
    <section id="projects" className="py-10 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <CollapsibleSection id="projects" number="02" title="Selected work">
        <div className="flex flex-col gap-4 sm:gap-0 sm:border-t sm:border-border">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-0 border border-border rounded-lg sm:rounded-none sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:py-10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (index % 2) * 0.04 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-x-6">
                <h3 className="font-display text-lg sm:text-3xl text-fg">{project.title}</h3>
                <span className="text-xs uppercase tracking-wide text-fg-muted shrink-0">
                  {project.category} · {project.date}
                </span>
              </div>
              <p className="text-accent text-sm mt-1">{project.subtitle}</p>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-fg-muted leading-relaxed max-w-2xl">{project.description}</p>

              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                {project.highlights.map((h) => (
                  <Badge key={h}>{h}</Badge>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

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
        </CollapsibleSection>
      </div>
    </section>
  );
};

export default ProjectFiles;
