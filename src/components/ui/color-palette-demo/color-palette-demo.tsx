"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";

export function ColorPaletteDemo() {
  const colorPalettes = [
    {
      name: "Primary",
      prefix: "primary",
      description: "Main brand color for primary actions and elements"
    },
    {
      name: "Secondary",
      prefix: "secondary", 
      description: "Secondary brand color for supporting elements"
    },
    {
      name: "Tertiary",
      prefix: "tertiary",
      description: "Accent color for highlights and special elements"
    },
    {
      name: "Accent",
      prefix: "accent",
      description: "Vibrant accent color for call-to-action elements"
    },
    {
      name: "Success",
      prefix: "success",
      description: "Success states and positive feedback"
    },
    {
      name: "Warning", 
      prefix: "warning",
      description: "Warning states and cautionary messages"
    },
    {
      name: "Error",
      prefix: "error",
      description: "Error states and negative feedback"
    },
    {
      name: "Neutral",
      prefix: "neutral",
      description: "Neutral colors for backgrounds and text"
    },
  ];

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Extended Color Palette</h2>
        <p className="text-muted-foreground mb-6">
          Complete color system with full shade ranges for consistent theming
        </p>
      </div>

      {colorPalettes.map((palette) => (
        <Card key={palette.name}>
          <CardHeader>
            <CardTitle className="text-lg">{palette.name}</CardTitle>
            <CardDescription>{palette.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-11 gap-2">
              {shades.map((shade) => (
                <div key={shade} className="text-center">
                  <div
                    className={`w-full h-16 rounded-lg border border-border mb-2`}
                    style={{
                      backgroundColor: `var(--color-${palette.prefix}-${shade})`,
                    }}
                  />
                  <div className="text-xs font-mono text-muted-foreground">
                    {shade}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-muted-foreground font-mono">
              Usage: <code>bg-{palette.prefix}-500</code>, <code>text-{palette.prefix}-600</code>, <code>border-{palette.prefix}-300</code>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Gradient Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Gradient Utilities</CardTitle>
          <CardDescription>Pre-built gradient utilities using the color system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-primary h-20 rounded-lg flex items-center justify-center text-white font-medium">
              .bg-gradient-primary
            </div>
            <div className="bg-gradient-secondary h-20 rounded-lg flex items-center justify-center text-white font-medium">
              .bg-gradient-secondary  
            </div>
            <div className="bg-gradient-accent h-20 rounded-lg flex items-center justify-center text-white font-medium">
              .bg-gradient-accent
            </div>
            <div className="bg-gradient-success h-20 rounded-lg flex items-center justify-center text-white font-medium">
              .bg-gradient-success
            </div>
            <div className="bg-gradient-warning h-20 rounded-lg flex items-center justify-center text-white font-medium">
              .bg-gradient-warning
            </div>
            <div className="bg-gradient-rainbow h-20 rounded-lg flex items-center justify-center text-white font-medium">
              .bg-gradient-rainbow
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Text Gradients */}
      <Card>
        <CardHeader>
          <CardTitle>Text Gradient Utilities</CardTitle>
          <CardDescription>Gradient text effects for headers and emphasis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gradient-primary">
              Primary Gradient Text
            </h3>
            <h3 className="text-3xl font-bold text-gradient-accent">
              Accent Gradient Text
            </h3>
            <h3 className="text-3xl font-bold text-gradient-rainbow">
              Rainbow Gradient Text
            </h3>
          </div>
        </CardContent>
      </Card>

      {/* Glass Morphism */}
      <Card>
        <CardHeader>
          <CardTitle>Glass Morphism</CardTitle>
          <CardDescription>Modern glass effects with backdrop blur</CardDescription>
        </CardHeader>
        <CardContent>
          <div 
            className="relative h-40 rounded-lg overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-500), var(--color-accent-500))"
            }}
          >
            <div className="absolute inset-4 glass rounded-lg p-4 text-center flex items-center justify-center">
              <div>
                <div className="text-lg font-semibold mb-2">Glass Effect Light</div>
                <div className="text-sm opacity-80">.glass utility class</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
