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

  const ctaClass =
    "group inline-flex items-center justify-center gap-1.5 text-sm text-fg border border-border rounded-full px-5 py-3 sm:border-0 sm:rounded-none sm:px-0 sm:py-0 hover:text-accent hover:border-accent-dim transition-colors";

  return (
    <section id="about" className="pt-24 sm:pt-40 pb-12 sm:pb-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_260px] gap-6 lg:gap-16 items-center lg:items-start text-center lg:text-left">
        <motion.div
          className="order-2 lg:order-none"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="font-display text-2xl sm:text-5xl lg:text-6xl leading-tight sm:leading-[1.1] text-fg">
            I&apos;m Usman — a software engineer who ships full-stack
            products end to end.
          </h1>

          <p className="mt-4 sm:mt-8 text-sm sm:text-lg text-fg-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
            Backend engineer focused on agentic AI systems — designing and
            shipping production-grade pipelines that put autonomous agents
            to real-world use.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-x-8 sm:gap-y-3">
            <Magnetic
              href="/resume.pdf"
              download="Syed Muhammad Usman Zafar's Resume.pdf"
              className={ctaClass}
            >
              Download resume
              <ArrowUpRight className="w-4 h-4 transition-transform sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
            </Magnetic>
            <Magnetic
              href={linkedinLink?.href}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              Connect on LinkedIn
              <ArrowUpRight className="w-4 h-4 transition-transform sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
            </Magnetic>
            <Magnetic
              href={githubLink?.href}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              View GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          className="relative w-20 sm:w-32 lg:w-auto mx-auto lg:mx-0 order-1 lg:order-none"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div className="hidden lg:block absolute -top-3 -left-3 w-full h-full border border-accent/40 rounded-sm" />
          <div className="relative w-full aspect-square lg:aspect-[3/4] rounded-full lg:rounded-sm overflow-hidden border border-border lg:border-0">
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
