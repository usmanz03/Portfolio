"use client";

import React, { createContext, useContext, useState } from "react";

interface MobileAccordionContextValue {
  openId: string;
  toggle: (id: string) => void;
  open: (id: string) => void;
}

const MobileAccordionContext = createContext<MobileAccordionContextValue | null>(null);

export const MobileAccordionProvider: React.FC<{
  children: React.ReactNode;
  defaultOpen?: string;
}> = ({ children, defaultOpen = "experience" }) => {
  const [openId, setOpenId] = useState(defaultOpen);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  const open = (id: string) => setOpenId(id);

  return (
    <MobileAccordionContext.Provider value={{ openId, toggle, open }}>
      {children}
    </MobileAccordionContext.Provider>
  );
};

export function useMobileAccordion() {
  const ctx = useContext(MobileAccordionContext);
  if (!ctx) throw new Error("useMobileAccordion must be used within MobileAccordionProvider");
  return ctx;
}
