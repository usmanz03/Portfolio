import React from "react";

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center border border-border rounded-full px-3 py-1 text-xs text-fg-muted">
    {children}
  </span>
);

export default Badge;
