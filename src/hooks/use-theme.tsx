"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeMode, ThemeName, themes } from "@/types/theme";

interface ThemeProviderContextProps {
  theme: ThemeName;
  mode: ThemeMode;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeProviderContext = createContext<ThemeProviderContextProps | undefined>(
  undefined
);

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  defaultMode?: ThemeMode;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "default",
  defaultMode = "system",
  storageKey = "moonbase-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    
    if (stored) {
      try {
        const { theme: storedTheme, mode: storedMode } = JSON.parse(stored);
        if (storedTheme && storedTheme in themes) {
          setTheme(storedTheme as ThemeName);
        }
        if (storedMode && ["light", "dark", "system"].includes(storedMode)) {
          setMode(storedMode as ThemeMode);
        }
      } catch (error) {
        console.warn("Failed to parse stored theme:", error);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;

    // Apply theme mode
    root.classList.remove("light", "dark");

    if (mode === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(mode);
    }

    // Apply theme colors as CSS custom properties
    const themeColors = themes[theme].colors;
    
    Object.entries(themeColors).forEach(([colorName, shades]) => {
      Object.entries(shades).forEach(([shade, value]) => {
        root.style.setProperty(`--color-${colorName}-${shade}`, value as string);
      });
    });

    // Store in localStorage
    localStorage.setItem(storageKey, JSON.stringify({ theme, mode }));
  }, [theme, mode, storageKey]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (mode === "system") {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  const value: ThemeProviderContextProps = {
    theme,
    mode,
    setTheme,
    setMode,
    toggleMode,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
