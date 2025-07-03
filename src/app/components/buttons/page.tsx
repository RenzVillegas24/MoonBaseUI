"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Button
} from "@/components/ui";
import { Copy, Check, Download, Heart, Star, Plus, Settings, Search } from "lucide-react";

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

function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-muted/50 rounded-lg p-4 mt-4">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-muted transition-colors"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      <pre className="text-sm overflow-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function ButtonsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Buttons</h1>
          <p className="text-muted-foreground">
            Interactive button components with various styles and states.
          </p>
        </div>
      </motion.div>

      {/* Button Variants */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Different button styles for various use cases.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            
            <CodeBlock>{`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Button Sizes */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>
              Buttons come in different sizes to fit your design needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Star className="h-4 w-4" />
              </Button>
            </div>
            
            <CodeBlock>{`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Star className="h-4 w-4" />
</Button>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Button States */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Button States</CardTitle>
            <CardDescription>
              Interactive states for better user feedback.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                With Icon
              </Button>
            </div>
            
            <CodeBlock>{`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button>
  <Download className="mr-2 h-4 w-4" />
  With Icon
</Button>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Icon Buttons */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Icon Buttons</CardTitle>
            <CardDescription>
              Compact buttons with just icons for toolbars and actions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button size="icon" variant="outline">
                <Search className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Settings className="h-4 w-4" />
              </Button>
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="destructive">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            
            <CodeBlock>{`<Button size="icon" variant="outline">
  <Search className="h-4 w-4" />
</Button>
<Button size="icon" variant="ghost">
  <Settings className="h-4 w-4" />
</Button>
<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Button Groups */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Button Groups</CardTitle>
            <CardDescription>
              Grouped buttons for related actions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline">First</Button>
                <Button variant="outline">Second</Button>
                <Button variant="outline">Third</Button>
              </div>
              
              <div className="flex">
                <Button variant="outline" className="rounded-r-none border-r-0">
                  Copy
                </Button>
                <Button variant="outline" className="rounded-l-none">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <CodeBlock>{`{/* Spaced group */}
<div className="flex gap-2">
  <Button variant="outline">First</Button>
  <Button variant="outline">Second</Button>
  <Button variant="outline">Third</Button>
</div>

{/* Connected group */}
<div className="flex">
  <Button variant="outline" className="rounded-r-none border-r-0">
    Copy
  </Button>
  <Button variant="outline" className="rounded-l-none">
    <Copy className="h-4 w-4" />
  </Button>
</div>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Animated Buttons */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Animated Buttons</CardTitle>
            <CardDescription>
              Buttons with hover and tap animations using Framer Motion.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>Hover Scale</Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -2 }} 
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button variant="outline">Hover Lift</Button>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  y: -2
                }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="secondary">Shadow Effect</Button>
              </motion.div>
            </div>
            
            <CodeBlock>{`<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button>Hover Scale</Button>
</motion.div>

<motion.div 
  whileHover={{ y: -2 }} 
  whileTap={{ y: 0 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  <Button variant="outline">Hover Lift</Button>
</motion.div>

<motion.div
  whileHover={{ 
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    y: -2
  }}
  transition={{ duration: 0.2 }}
>
  <Button variant="secondary">Shadow Effect</Button>
</motion.div>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
