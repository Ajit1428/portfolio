"use client";

import { createContext, useContext, useState } from "react";

import { navbarRoutes } from "@/utils/navbar/navbar-routes";

type SectionLabel = (typeof navbarRoutes)[number]["label"];

type ActiveSectionChildren = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  isActive: SectionLabel;
  setIsActive: React.Dispatch<React.SetStateAction<SectionLabel>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionChildren) => {
  const [isActive, setIsActive] = useState<SectionLabel>("Home");

  return (
    <ActiveSectionContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection must be used within the ActiveSectionContextProvider",
    );
  }

  return context;
}
