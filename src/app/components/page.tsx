"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui";
import { ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const componentCategories = [
  {
    id: "color-system",
    title: "Color System",
    description: "Comprehensive color palette and theming system",
    icon: "🎨",
    href: "/components/color-system",
    count: "8 colors"
  },
  {
    id: "buttons",
    title: "Buttons",
    description: "Interactive buttons with various styles and states",
    icon: "⏺️",
    href: "/components/buttons",
    count: "12 variants"
  },
  {
    id: "forms",
    title: "Form Elements",
    description: "Input fields, textareas, and form controls",
    icon: "📝",
    href: "/components/forms",
    count: "8 components"
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Alerts, notifications, and user feedback components",
    icon: "💬",
    href: "/components/feedback",
    count: "6 components"
  },
  {
    id: "data",
    title: "Data Display",
    description: "Tables, lists, and data visualization components",
    icon: "📊",
    href: "/components/data",
    count: "5 components"
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Tabs, breadcrumbs, and navigation components",
    icon: "🧭",
    href: "/components/navigation",
    count: "4 components"
  },
  {
    id: "overlays",
    title: "Overlays",
    description: "Modals, tooltips, and overlay components",
    icon: "🪟",
    href: "/components/overlays",
    count: "3 components"
  },
  {
    id: "layout",
    title: "Layout",
    description: "Grid, containers, and layout components",
    icon: "📐",
    href: "/components/layout",
    count: "4 components"
  }
];

export default function ComponentsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Components</h1>
          <p className="text-muted-foreground">
            A comprehensive collection of UI components built from scratch with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {componentCategories.map((category, index) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Link href={category.href}>
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <div className="text-xs text-muted-foreground">{category.count}</div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ x: 0, opacity: 0.5 }}
                      whileHover={{ x: 4, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Learn how to use these components in your projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Installation</h4>
              <div className="bg-muted/50 rounded p-3 text-sm font-mono">
                npm install moonbase-ui
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Usage</h4>
              <div className="bg-muted/50 rounded p-3 text-sm font-mono">
                {`import { Button, Card } from "moonbase-ui";`}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Each component is fully customizable and follows accessibility best practices.
              All components support theming and dark mode out of the box.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
