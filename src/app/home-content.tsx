"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Shield, Palette as PaletteIcon } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-20 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="h-32 w-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
          >
            <span className="text-white font-bold text-5xl">M</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            MoonBase UI
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            A comprehensive React component library built from scratch with TypeScript and Tailwind CSS.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/components">
                <Button size="lg" className="text-lg px-8 py-4">
                  Browse Components
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center space-y-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold">Why MoonBase UI?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built with modern development practices and designed for scalability, accessibility, and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Built from Scratch</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    No third-party dependencies. Every component is built from the ground up with React and TypeScript.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Optimized for performance with minimal bundle size and efficient rendering.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle>Accessible First</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Built with accessibility in mind, featuring proper ARIA attributes and keyboard navigation.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <PaletteIcon className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle>Themeable</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive theming system with dark mode support and customizable design tokens.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div variants={itemVariants}>
            <div className="text-3xl font-bold text-primary">40+</div>
            <div className="text-muted-foreground">Components</div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="text-3xl font-bold text-accent">100%</div>
            <div className="text-muted-foreground">TypeScript</div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="text-3xl font-bold text-green-500">A11Y</div>
            <div className="text-muted-foreground">Compliant</div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="text-3xl font-bold text-purple-500">0</div>
            <div className="text-muted-foreground">Dependencies</div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <Card className="text-center">
          <CardHeader>
            <motion.div variants={itemVariants}>
              <CardTitle className="text-3xl">Ready to get started?</CardTitle>
              <CardDescription className="text-lg">
                Explore our comprehensive component library and start building amazing UIs today.
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/components">
                  <Button size="lg">
                    View All Components
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/about/me">
                  <Button variant="outline" size="lg">
                    Meet the Developer
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}

export default function HomePageWrapper() {
  return <HomePage />;
}
