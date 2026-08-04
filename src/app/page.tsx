"use client";

import React, { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ExperienceLog from "./components/ExperienceLog";
import ProjectFiles from "./components/ProjectFiles";
import SkillsManifest from "./components/SkillsManifest";
import EducationBlock from "./components/EducationBlock";
import ContactPrompt from "./components/ContactPrompt";
import SiteFooter from "./components/SiteFooter";
import { sections } from "./data";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav activeSection={activeSection} onNavigate={handleNavigate} />

      <Hero />
      <ExperienceLog />
      <ProjectFiles />
      <SkillsManifest />
      <EducationBlock />
      <ContactPrompt />
      <SiteFooter />
    </div>
  );
};

export default Portfolio;
