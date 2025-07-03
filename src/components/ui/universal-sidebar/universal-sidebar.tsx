"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Menu, X, Home, Users, Code } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import { Separator } from "../separator";
import { cn } from "@/lib/utils";

// Navigation items
const navItems = [
  { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
  { href: "/components", label: "Components", icon: <Code className="h-4 w-4" /> },
  { href: "/about", label: "About", icon: <Users className="h-4 w-4" /> },
];

// Component sections for components page
const componentSections = [
  { id: "color-system", label: "Color System", icon: "🎨", count: 8, href: "/components/color-system" },
  { id: "buttons", label: "Buttons", icon: "⏺️", count: 12, href: "/components/buttons" },
  { id: "forms", label: "Form Elements", icon: "📝", count: 8, href: "/components/forms" },
  { id: "feedback", label: "Feedback", icon: "💬", count: 6, href: "/components/feedback" },
  { id: "data", label: "Data Display", icon: "📊", count: 5, href: "/components/data" },
  { id: "navigation", label: "Navigation", icon: "🧭", count: 4, href: "/components/navigation" },
  { id: "overlays", label: "Overlays", icon: "🪟", count: 3, href: "/components/overlays" },
  { id: "layout", label: "Layout", icon: "📐", count: 4, href: "/components/layout" },
];

interface UniversalSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  variant?: "desktop" | "mobile";
  className?: string;
}

export function UniversalSidebar({ 
  isOpen = false, 
  onClose, 
  variant = "desktop",
  className 
}: UniversalSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathname = usePathname();

  // Determine if we're on the components page or subpages
  const isComponentsSection = pathname.startsWith("/components");
  
  // Filter components based on search
  const filteredComponents = React.useMemo(() => {
    if (!searchQuery) return componentSections;
    return componentSections.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const sidebarVariants = {
    closed: { x: variant === "mobile" ? "-100%" : 0, opacity: variant === "mobile" ? 0 : 1 },
    open: { x: 0, opacity: 1 },
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

  const handleItemClick = () => {
    if (onClose && variant === "mobile") {
      onClose();
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 flex-shrink-0">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h2 className="font-bold text-lg">
                {isComponentsSection ? "Components" : "MoonBase UI"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {isComponentsSection ? "Browse all components" : "Component Library"}
              </p>
            </div>
          </div>
          {variant === "mobile" && onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Search - only show for components section */}
        {isComponentsSection && (
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <motion.div 
          className="space-y-4"
          initial="closed"
          animate="open"
        >
          {/* Main Navigation */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Navigation
            </h3>
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                variants={itemVariants}
                custom={index}
              >
                <Link
                  href={item.href}
                  onClick={handleItemClick}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors group",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted text-foreground/80 hover:text-foreground"
                  )}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  <motion.div
                    whileHover={{ x: 2 }}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Components Section - only show when in components section */}
          {isComponentsSection && (
            <>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Components
                </h3>
                {filteredComponents.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    custom={index + navItems.length}
                  >
                    <Link
                      href={item.href}
                      onClick={handleItemClick}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors group",
                        pathname.includes(item.id) || pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <span className="font-medium">{item.label}</span>
                          <div className="text-xs text-muted-foreground">
                            {item.count} components
                          </div>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 2 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Quick Links */}
          <Separator />
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <Link 
              href="/about/me" 
              onClick={handleItemClick}
              className="block p-2 rounded-lg hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Developer
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleItemClick}
              className="block p-2 rounded-lg hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://npmjs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleItemClick}
              className="block p-2 rounded-lg hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              NPM Package
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );

  if (variant === "mobile") {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/50 z-[60]"
              onClick={onClose}
            />

            {/* Mobile Sidebar */}
            <motion.aside
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={cn(
                "fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background/95 backdrop-blur-lg border-r z-[70] overflow-hidden",
                className
              )}
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Desktop sidebar
  return (
    <motion.aside
      variants={sidebarVariants}
      initial="closed"
      animate="open"
      className={cn(
        "h-[calc(100vh-4rem)] w-80 bg-background/95 backdrop-blur-lg border-r sticky top-16 overflow-hidden",
        className
      )}
    >
      {sidebarContent}
    </motion.aside>
  );
}

// Sidebar Toggle Button Component
interface SidebarToggleProps {
  onClick: () => void;
  isOpen?: boolean;
  className?: string;
}

export function SidebarToggle({ onClick, isOpen = false, className }: SidebarToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn("relative z-[80]", className)}
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </motion.div>
    </Button>
  );
}
