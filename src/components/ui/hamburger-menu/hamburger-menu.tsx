"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HamburgerMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: HamburgerMenuItem[];
  onClick?: () => void;
  href?: string;
}

interface HamburgerMenuGroupProps {
  items: HamburgerMenuItem[];
  className?: string;
}

interface CollapsibleGroupProps {
  item: HamburgerMenuItem;
  level?: number;
}

function CollapsibleGroup({ item, level = 0 }: CollapsibleGroupProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const toggleExpanded = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else if (item.onClick) {
      item.onClick();
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  const childrenVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <div className="w-full">
      <motion.button
        variants={itemVariants}
        className={cn(
          "w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors hover:bg-muted",
          level > 0 && "ml-4 border-l-2 border-muted pl-4"
        )}
        onClick={toggleExpanded}
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center space-x-3">
          {item.icon && <span className="text-lg">{item.icon}</span>}
          <span className="font-medium">{item.label}</span>
        </div>
        {hasChildren && (
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.div>
        )}
      </motion.button>

      {hasChildren && (
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={childrenVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-2 space-y-1">
                {item.children?.map((child, index) => (
                  <motion.div
                    key={child.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CollapsibleGroup item={child} level={level + 1} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export function HamburgerMenuGroup({ items, className }: HamburgerMenuGroupProps) {
  const containerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="closed"
      animate="open"
      className={cn("space-y-2", className)}
    >
      {items.map((item) => (
        <CollapsibleGroup key={item.id} item={item} />
      ))}
    </motion.div>
  );
}

// Example usage component
export function ExampleHamburgerMenu() {
  const menuItems: HamburgerMenuItem[] = [
    {
      id: "components",
      label: "Components",
      icon: "🧩",
      children: [
        {
          id: "forms",
          label: "Form Elements",
          icon: "📝",
          children: [
            { id: "input", label: "Input", onClick: () => console.log("Input clicked") },
            { id: "textarea", label: "Textarea", onClick: () => console.log("Textarea clicked") },
            { id: "select", label: "Select", onClick: () => console.log("Select clicked") },
          ],
        },
        {
          id: "buttons",
          label: "Buttons",
          icon: "⏺️",
          children: [
            { id: "primary-btn", label: "Primary Button", onClick: () => console.log("Primary Button clicked") },
            { id: "secondary-btn", label: "Secondary Button", onClick: () => console.log("Secondary Button clicked") },
          ],
        },
        {
          id: "feedback",
          label: "Feedback",
          icon: "💬",
          children: [
            { id: "alert", label: "Alert", onClick: () => console.log("Alert clicked") },
            { id: "toast", label: "Toast", onClick: () => console.log("Toast clicked") },
          ],
        },
      ],
    },
    {
      id: "documentation",
      label: "Documentation",
      icon: "📚",
      children: [
        { id: "getting-started", label: "Getting Started", onClick: () => console.log("Getting Started clicked") },
        { id: "theming", label: "Theming", onClick: () => console.log("Theming clicked") },
      ],
    },
    {
      id: "about",
      label: "About",
      icon: "ℹ️",
      onClick: () => console.log("About clicked"),
    },
  ];

  return (
    <div className="w-full max-w-sm p-4 bg-background border rounded-lg">
      <HamburgerMenuGroup items={menuItems} />
    </div>
  );
}
