"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ColorPaletteDemo } from "@/components/ui/color-palette-demo/color-palette-demo";

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

export default function ColorSystemPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Color System</h1>
          <p className="text-muted-foreground">
            A comprehensive color palette designed for accessibility and visual hierarchy.
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>
              Our design system uses a semantic color approach with primary, secondary, 
              and accent colors that adapt to light and dark themes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ColorPaletteDemo />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
            <CardDescription>
              Best practices for using colors in your components.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Primary Colors</h4>
              <p className="text-sm text-muted-foreground">
                Use primary colors for main actions, links, and important UI elements.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Secondary Colors</h4>
              <p className="text-sm text-muted-foreground">
                Secondary colors are for supporting actions and less prominent elements.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Accent Colors</h4>
              <p className="text-sm text-muted-foreground">
                Accent colors highlight special content and create visual interest.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
