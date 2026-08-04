"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { contactLinks } from "../data";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";

const ContactPrompt: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent, label: string, href: string) => {
    if (label === "email") {
      e.preventDefault();
      navigator.clipboard.writeText(href.replace("mailto:", ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="05" title="Let's talk" />

        <motion.p
          className="text-sm sm:text-lg text-fg-muted leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
        >
          I&apos;m always interested in new opportunities and collaborations.
          Feel free to reach out.
        </motion.p>

        <div className="mt-6 sm:mt-8 flex flex-col border-t border-border">
          {contactLinks.map((c) => (
            <Magnetic
              key={c.label}
              href={c.href}
              target={c.label === "email" ? undefined : "_blank"}
              rel={c.label === "email" ? undefined : "noopener noreferrer"}
              onClick={(e) => handleClick(e, c.label, c.href)}
              strength={0.15}
              maxOffset={8}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 py-3.5 sm:py-5 border-b border-border"
            >
              <span className="font-display text-lg sm:text-2xl text-fg group-hover:text-accent transition-colors capitalize">
                {c.label}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-fg-muted group-hover:text-accent transition-colors">
                {c.label === "email" && copied ? (
                  <span className="flex items-center gap-1.5 text-accent">
                    <Check className="w-4 h-4" /> copied
                  </span>
                ) : (
                  <>
                    {c.value}
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </span>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPrompt;
