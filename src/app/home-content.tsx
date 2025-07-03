"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun, Palette, ArrowRight, Code, Zap, Shield, Palette as PaletteIcon } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ThemeProvider,
  useTheme,
} from "@/components/ui";

function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleMode}
      className="fixed top-4 right-4 z-50"
    >
      {mode === "light" ? (
        <Moon className="h-4 w-4" />
      ) : mode === "dark" ? (
        <PaletteIcon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Navigation */}
      <nav className="border-b">
        <div className="content-max-width content-padding py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-lg">MoonBase UI</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-foreground font-medium">Home</Link>
              <Link href="/components" className="text-muted-foreground hover:text-foreground transition-colors">Components</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="content-max-width content-padding py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              MoonBase UI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive React component library built from scratch with TypeScript, Tailwind CSS, and modern accessibility standards.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/components">
              <Button size="lg" className="min-w-[160px]">
                View Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="min-w-[160px]">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="content-max-width content-padding py-16">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Why MoonBase UI?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built with modern development practices and designed for scalability, accessibility, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-lg">TypeScript First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built with TypeScript for type safety and better developer experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-accent-100 dark:bg-accent-900 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-600" />
                </div>
                <CardTitle className="text-lg">Accessible</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ARIA compliant components with keyboard navigation and screen reader support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-success-100 dark:bg-success-900 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-success-600" />
                </div>
                <CardTitle className="text-lg">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lightweight components with tree-shaking support and minimal bundle size.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-warning-100 dark:bg-warning-900 flex items-center justify-center mb-4">
                  <PaletteIcon className="h-6 w-6 text-warning-600" />
                </div>
                <CardTitle className="text-lg">Themeable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive theming system with dark mode and custom color schemes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-muted/50">
        <div className="content-max-width content-padding py-16">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Getting Started</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Start building beautiful interfaces with our component library.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-left max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">Install the library</div>
                <div className="bg-muted rounded p-4 font-mono text-sm">
                  npm install @moonbase/ui
                </div>
                <div className="text-sm text-muted-foreground">Import components</div>
                <div className="bg-muted rounded p-4 font-mono text-sm">
                  import {`{ Button, Card, Input }`} from '@moonbase/ui'
                </div>
              </div>
            </div>

            <Link href="/components">
              <Button size="lg">
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t">
        <div className="content-max-width content-padding py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 MoonBase UI. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function HomePageWrapper() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}
