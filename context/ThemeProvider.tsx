"use client";

import { ThemeContextType, ThemeType } from "@/types";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeType>(localStorage.theme ?? "system");

  const handleThemeChange = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => handleThemeChange(), [mode, handleThemeChange]);

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
