"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sections } from "../data";
import ScrambleText from "./ScrambleText";

interface NavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Nav: React.FC<NavProps> = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => handleNavigate("about")}>
              <ScrambleText text="Usman" className="font-display text-xl tracking-tight text-fg" />
            </button>

            <nav className="hidden md:flex items-center gap-7">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleNavigate(s.id)}
                  className={`text-sm transition-colors ${
                    activeSection === s.id ? "text-accent" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden relative z-[70] p-2 -mr-2 text-fg"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 z-[65] bg-bg overflow-y-auto"
          >
            <div className="px-5 py-2 flex flex-col">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleNavigate(s.id)}
                  className={`text-left py-4 border-b border-border font-display text-2xl ${
                    activeSection === s.id ? "text-accent" : "text-fg"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
