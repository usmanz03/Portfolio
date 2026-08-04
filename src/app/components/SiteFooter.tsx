import React from "react";
import Magnetic from "./Magnetic";

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-2 text-sm text-fg-muted">
        <span>© {new Date().getFullYear()} Usman Zafar</span>
        <Magnetic href="#about" className="hover:text-accent transition-colors">
          Back to top
        </Magnetic>
      </div>
    </footer>
  );
};

export default SiteFooter;
