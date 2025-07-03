"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Palette } from "lucide-react";
import { Button } from "../button";
import { UniversalSidebar, SidebarToggle } from "../universal-sidebar";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: null },
  { href: "/components", label: "Components", icon: null },
  { href: "/about", label: "About", icon: null },
];

function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleMode}
      className="relative"
    >
      <AnimatePresence mode="wait">
        {mode === "light" ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-4 w-4" />
          </motion.div>
        ) : mode === "dark" ? (
          <motion.div
            key="palette"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Palette className="h-4 w-4" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}

function MobileSidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <SidebarToggle
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        className="lg:hidden"
      />
      <UniversalSidebar
        variant="mobile"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors",
            pathname === item.href
              ? "text-primary"
              : "text-foreground/60 hover:text-foreground hover:bg-muted"
          )}
        >
          {pathname === item.href && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary/10 rounded-lg"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export function Header({ className }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">M</span>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl">MoonBase UI</h1>
              <p className="text-xs text-muted-foreground">Component Library</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <MobileSidebar />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
