"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun, Palette, ArrowRight, Code, Users, Heart, Lightbulb } from "lucide-react";
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
        <Palette className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
}

function AboutPage() {
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
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link href="/components" className="text-muted-foreground hover:text-foreground transition-colors">Components</Link>
              <Link href="/about" className="text-foreground font-medium">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-galaxy opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-aurora opacity-10"></div>
        <div className="content-max-width content-padding py-20 relative">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-gradient-galaxy">About MoonBase UI</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A modern React component library built from the ground up with accessibility, performance, and developer experience as core principles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="content-max-width content-padding py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gradient-electric">Our Mission</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              To provide developers with a comprehensive, accessible, and beautifully designed component library that accelerates the development of modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center card-floating">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-electric flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Developer First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built with developers in mind, featuring TypeScript support, comprehensive documentation, and intuitive APIs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-floating">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-neon flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every component is designed with accessibility in mind, following WCAG guidelines and supporting screen readers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-floating">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-dawn flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Open source and community-driven, we believe in collaborative development and shared knowledge.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-floating">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-volcano flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Constantly evolving with the latest web technologies and design trends to stay ahead of the curve.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-muted/50">
        <div className="content-max-width content-padding py-16">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">What Makes Us Different</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                MoonBase UI stands out with its unique approach to component design and development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Built from Scratch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Unlike many libraries that depend on external component libraries, MoonBase UI is built entirely from scratch. 
                      This gives us complete control over functionality, styling, and performance optimization.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Modern Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Built with the latest technologies including React 18, TypeScript, Tailwind CSS, and modern React patterns 
                      like hooks and context for optimal performance and developer experience.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Comprehensive Theming</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Advanced theming system supporting dark mode, custom color schemes, and CSS custom properties for 
                      complete visual customization to match your brand.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Optimized</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Tree-shakable components, minimal bundle size, and optimized rendering ensure your applications 
                      load fast and run smoothly across all devices and browsers.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Accessibility First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Every component includes proper ARIA attributes, keyboard navigation, focus management, and 
                      screen reader support to ensure your applications are accessible to all users.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Developer Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Intuitive APIs, comprehensive TypeScript support, detailed documentation, and helpful error messages 
                      make development faster and more enjoyable.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="content-max-width content-padding py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Meet the Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn more about the people behind MoonBase UI and their passion for creating amazing developer tools.
            </p>
          </div>

          <div className="text-center">
            <Link href="/about/me">
              <Button size="lg">
                Meet the Developer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-muted/50">
        <div className="content-max-width content-padding py-16">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Get Involved</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                MoonBase UI is open source and we welcome contributions from the community. 
                Whether you're reporting bugs, suggesting features, or contributing code, every contribution matters.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/RenzVillegas24/MoonBaseUI" target="_blank">
                <Button size="lg">
                  View on GitHub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
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

export default function AboutPageWrapper() {
  return (
    <ThemeProvider>
      <AboutPage />
    </ThemeProvider>
  );
}
