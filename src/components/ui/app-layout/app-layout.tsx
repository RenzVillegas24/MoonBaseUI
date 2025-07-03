"use client";

import * as React from "react";
import { Header } from "../header";
import { ThemeProvider } from "@/hooks/use-theme";

interface AppLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export function AppLayout({ children, showHeader = true }: AppLayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {showHeader && <Header />}
        <main className={showHeader ? "pt-16" : ""}>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
