"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { sections } from "../data";
import ScrambleText from "./ScrambleText";

interface NavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Nav: React.FC<NavProps> = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
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
            className="md:hidden p-2 text-fg-muted hover:text-fg"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-border py-3 flex flex-col">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavigate(s.id)}
                className={`text-left px-1 py-2.5 text-sm ${
                  activeSection === s.id ? "text-accent" : "text-fg-muted"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
