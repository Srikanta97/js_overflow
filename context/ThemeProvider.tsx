"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeType = "light" | "dark";

type ThemeContextType = {
  mode: ThemeType;
  setMode: (mode: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeType>("dark");

  const handleThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => handleThemeChange(), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider!"); // essentially saying, wrap the component
    // where useTheme() is being used with <ThemeProvider>. Since we need the theme info throughout the codebase,
    // wrap the children in app/layout.tsx with ThemeProvider
  }
  return context;
}
