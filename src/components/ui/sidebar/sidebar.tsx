"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import { Separator } from "../separator";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  count?: number;
  href?: string;
  onClick?: () => void;
}

interface ComponentsSidebarProps {
  items: SidebarItem[];
  activeSection?: string;
  onSectionChange?: (section: string) => void;
  className?: string;
}

export function ComponentsSidebar({ 
  items, 
  activeSection, 
  onSectionChange,
  className 
}: ComponentsSidebarProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathname = usePathname();

  const filteredItems = React.useMemo(() => {
    if (!searchQuery) return items;
    return items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  const sidebarVariants = {
    closed: { x: "-100%" },
    open: { x: 0 },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const handleItemClick = (item: SidebarItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (onSectionChange) {
      onSectionChange(item.id);
    }
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-100 lg:hidden bg-background/80 backdrop-blur-sm border"
      >
        <motion.div
          animate={{ rotate: sidebarOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </motion.div>
      </Button>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={sidebarOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background/95 backdrop-blur-lg border-r z-40 overflow-hidden",
          "lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)] lg:sticky lg:top-16",
          className
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex-shrink-0">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h2 className="font-bold text-lg">Components</h2>
                <p className="text-sm text-muted-foreground">Browse all components</p>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search components..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Component List */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <motion.div 
              className="space-y-2"
              initial="closed"
              animate="open"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  custom={index}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => handleItemClick(item)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors group",
                        pathname.includes(item.id) || activeSection === item.id
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <span className="font-medium">{item.label}</span>
                          {item.count && (
                            <div className="text-xs text-muted-foreground">
                              {item.count} components
                            </div>
                          )}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleItemClick(item)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors group",
                        activeSection === item.id
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <span className="font-medium">{item.label}</span>
                          {item.count && (
                            <div className="text-xs text-muted-foreground">
                              {item.count} components
                            </div>
                          )}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.div>
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Links */}
            <Separator className="my-6" />
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Quick Links
              </h3>
              <Link 
                href="/" 
                className="block p-2 rounded-lg hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block p-2 rounded-lg hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link 
                href="/about/me" 
                className="block p-2 rounded-lg hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Developer
              </Link>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
