"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Github, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "../data";
import CollapsibleSection from "./CollapsibleSection";
import Magnetic from "./Magnetic";

const icons = { email: Mail, linkedin: Linkedin, github: Github };

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
        <CollapsibleSection id="contact" number="05" title="Let's talk">
        <motion.p
          className="text-sm sm:text-lg text-fg-muted leading-relaxed max-w-xl mx-auto sm:mx-0 text-center sm:text-left"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
        >
          I&apos;m always interested in new opportunities and collaborations.
          Feel free to reach out.
        </motion.p>

        {/* Mobile: icon buttons */}
        <div className="sm:hidden flex items-center justify-center gap-8 py-8">
          {contactLinks.map((c) => {
            const Icon = icons[c.label as keyof typeof icons];
            const isCopied = c.label === "email" && copied;
            return (
              <Magnetic
                key={c.label}
                href={c.href}
                target={c.label === "email" ? undefined : "_blank"}
                rel={c.label === "email" ? undefined : "noopener noreferrer"}
                onClick={(e) => handleClick(e, c.label, c.href)}
                strength={0.15}
                maxOffset={6}
                className="flex flex-col items-center gap-2"
              >
                <span className="w-14 h-14 flex items-center justify-center rounded-full border border-border">
                  {isCopied ? (
                    <Check className="w-5 h-5 text-accent" />
                  ) : (
                    <Icon className="w-5 h-5 text-fg" />
                  )}
                </span>
                <span className="text-xs text-fg-muted capitalize">
                  {isCopied ? "copied" : c.label}
                </span>
              </Magnetic>
            );
          })}
        </div>

        {/* Tablet/desktop: label + url rows */}
        <div className="hidden sm:flex mt-8 flex-col border-t border-border">
          {contactLinks.map((c) => (
            <Magnetic
              key={c.label}
              href={c.href}
              target={c.label === "email" ? undefined : "_blank"}
              rel={c.label === "email" ? undefined : "noopener noreferrer"}
              onClick={(e) => handleClick(e, c.label, c.href)}
              strength={0.15}
              maxOffset={8}
              className="group flex items-center justify-between py-5 border-b border-border"
            >
              <span className="font-display text-2xl text-fg group-hover:text-accent transition-colors capitalize">
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
        </CollapsibleSection>
      </div>
    </section>
  );
};

export default ContactPrompt;
