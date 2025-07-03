"use client";

import * as React from "react";
import { UniversalSidebar } from "@/components/ui/universal-sidebar";

interface ComponentsLayoutProps {
  children: React.ReactNode;
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <div className="hidden lg:block">
        <UniversalSidebar variant="desktop" />
      </div>
      <div className="flex-1 lg:ml-0">
        <div className="container mx-auto px-4 py-8 lg:pl-8">
          {children}
        </div>
      </div>
    </div>
  );
}
