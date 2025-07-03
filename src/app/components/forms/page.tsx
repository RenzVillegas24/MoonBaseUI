"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Input,
  Label,
  Textarea,
  Button,
  Checkbox,
  Switch
} from "@/components/ui";
import { Copy, Check } from "lucide-react";

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

function CodeBlock({ children, language = "tsx" }: { children: string; language?: string }) {
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
        <code className="language-tsx">{children}</code>
      </pre>
    </div>
  );
}

// Floating Label Input Component
function FloatingLabelInput({ 
  id, 
  label, 
  type = "text", 
  placeholder,
  ...props 
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  [key: string]: any;
}) {
  const [focused, setFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  return (
    <div className="relative">
      <Input
        id={id}
        type={type}
        placeholder=" "
        className="peer pt-6 pb-2"
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
        {...props}
      />
      <Label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 pointer-events-none
          ${focused || hasValue 
            ? "top-2 text-xs text-primary" 
            : "top-1/2 -translate-y-1/2 text-muted-foreground"
          }`}
      >
        {label}
      </Label>
    </div>
  );
}

// Floating Label Textarea Component
function FloatingLabelTextarea({ 
  id, 
  label, 
  ...props 
}: {
  id: string;
  label: string;
  [key: string]: any;
}) {
  const [focused, setFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  return (
    <div className="relative">
      <Textarea
        id={id}
        placeholder=" "
        className="peer pt-6 pb-2 min-h-[120px]"
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
        {...props}
      />
      <Label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 pointer-events-none
          ${focused || hasValue 
            ? "top-2 text-xs text-primary" 
            : "top-6 text-muted-foreground"
          }`}
      >
        {label}
      </Label>
    </div>
  );
}

export default function FormsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Form Elements</h1>
          <p className="text-muted-foreground">
            A collection of form components with various styles and features.
          </p>
        </div>
      </motion.div>

      {/* Basic Input */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Basic Input</CardTitle>
            <CardDescription>
              Standard input field with label and placeholder.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="basic-input">Email Address</Label>
              <Input id="basic-input" type="email" placeholder="Enter your email" />
            </div>
            
            <CodeBlock>{`<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Floating Label Input */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Floating Label Input</CardTitle>
            <CardDescription>
              Input with animated floating label that moves when focused.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FloatingLabelInput id="floating-email" label="Email Address" type="email" />
              <FloatingLabelInput id="floating-name" label="Full Name" />
            </div>
            
            <CodeBlock>{`function FloatingLabelInput({ id, label, type = "text", ...props }) {
  const [focused, setFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  return (
    <div className="relative">
      <Input
        id={id}
        type={type}
        placeholder=" "
        className="peer pt-6 pb-2"
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
        {...props}
      />
      <Label
        htmlFor={id}
        className={\`absolute left-3 transition-all duration-200 pointer-events-none
          \${focused || hasValue 
            ? "top-2 text-xs text-primary" 
            : "top-1/2 -translate-y-1/2 text-muted-foreground"
          }\`}
      >
        {label}
      </Label>
    </div>
  );
}`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Input Variants */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Input Variants</CardTitle>
            <CardDescription>
              Different input sizes and states.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Small Input</Label>
                <Input inputSize="sm" placeholder="Small input" />
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">Default Input</Label>
                <Input placeholder="Default input" />
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">Large Input</Label>
                <Input inputSize="lg" placeholder="Large input" />
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">Disabled Input</Label>
                <Input placeholder="Disabled input" disabled />
              </div>
            </div>

            <CodeBlock>{`<Input inputSize="sm" placeholder="Small input" />
<Input placeholder="Default input" />
<Input inputSize="lg" placeholder="Large input" />
<Input placeholder="Disabled input" disabled />`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Textarea */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Textarea</CardTitle>
            <CardDescription>
              Multi-line text input with various configurations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="basic-textarea">Basic Textarea</Label>
                <Textarea id="basic-textarea" placeholder="Enter your message..." />
              </div>
              
              <FloatingLabelTextarea id="floating-textarea" label="Message" />
            </div>

            <CodeBlock>{`<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Enter your message..." />
</div>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Form Controls */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Form Controls</CardTitle>
            <CardDescription>
              Checkboxes and switches for boolean inputs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
            </div>

            <CodeBlock>{`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Complete Form Example */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Complete Form</CardTitle>
            <CardDescription>
              A comprehensive form example with validation styling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingLabelInput id="first-name" label="First Name" />
                <FloatingLabelInput id="last-name" label="Last Name" />
              </div>
              
              <FloatingLabelInput id="email" label="Email Address" type="email" />
              
              <FloatingLabelTextarea id="message" label="Your Message" />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="form-terms" />
                  <Label htmlFor="form-terms">I agree to the terms and conditions</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="form-updates" />
                  <Label htmlFor="form-updates">Receive product updates</Label>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button type="submit">Submit Form</Button>
                <Button type="button" variant="outline">Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
