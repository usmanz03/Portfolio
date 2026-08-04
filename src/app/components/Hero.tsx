"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contactLinks } from "../data";
import Magnetic from "./Magnetic";

const Hero: React.FC = () => {
  const githubLink = contactLinks.find((c) => c.label === "github");
  const linkedinLink = contactLinks.find((c) => c.label === "linkedin");

  return (
    <section id="about" className="pt-32 sm:pt-40 pb-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-fg">
            I&apos;m Usman — a software engineer who ships full-stack
            products end to end.
          </h1>

          <p className="mt-8 text-lg text-fg-muted leading-relaxed max-w-xl">
            Backend engineer focused on agentic AI systems — designing and
            shipping production-grade pipelines that put autonomous agents
            to real-world use.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <Magnetic
              href="/resume.pdf"
              download="Syed Muhammad Usman Zafar's Resume.pdf"
              className="group inline-flex items-center gap-1.5 text-sm text-fg hover:text-accent transition-colors"
            >
              Download résumé
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Magnetic>
            <Magnetic
              href={linkedinLink?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-fg hover:text-accent transition-colors"
            >
              Connect on LinkedIn
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Magnetic>
            <Magnetic
              href={githubLink?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-fg hover:text-accent transition-colors"
            >
              View GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute -top-3 -left-3 w-full h-full border border-accent/40 rounded-sm" />
          <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Usman Zafar"
              width={260}
              height={347}
              className="w-full h-full object-cover sepia-[0.15] contrast-105"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
