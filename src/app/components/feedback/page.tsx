"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Progress,
  Skeleton
} from "@/components/ui";
import { Copy, Check, Info, AlertTriangle, CheckCircle, X } from "lucide-react";

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

export default function FeedbackPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Feedback Components</h1>
          <p className="text-muted-foreground">
            Components for displaying alerts, notifications, and user feedback.
          </p>
        </div>
      </motion.div>

      {/* Alerts */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>
              Alert messages for different types of feedback.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert message.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again.
                </AlertDescription>
              </Alert>

              <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your action was completed successfully.
                </AlertDescription>
              </Alert>
            </div>

            <CodeBlock>{`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert message.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Badges */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>
              Small status indicators and labels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge className="bg-green-500 hover:bg-green-500/80">Success</Badge>
              <Badge className="bg-yellow-500 hover:bg-yellow-500/80">Warning</Badge>
            </div>

            <CodeBlock>{`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Progress */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Progress</CardTitle>
            <CardDescription>
              Progress indicators for loading and completion states.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Upload Progress</span>
                  <span>25%</span>
                </div>
                <Progress value={25} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Installation</span>
                  <span>60%</span>
                </div>
                <Progress value={60} />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Complete</span>
                  <span>100%</span>
                </div>
                <Progress value={100} />
              </div>
            </div>

            <CodeBlock>{`<div>
  <div className="flex justify-between text-sm mb-2">
    <span>Upload Progress</span>
    <span>25%</span>
  </div>
  <Progress value={25} />
</div>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Skeletons */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Skeleton</CardTitle>
            <CardDescription>
              Loading placeholders for content that's being fetched.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-5/6" />
            </div>

            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[160px]" />
              </div>
            </div>

            <CodeBlock>{`<div className="space-y-3">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
  <Skeleton className="h-4 w-5/6" />
</div>

<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[160px]" />
  </div>
</div>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Animated Toast Example */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Toast Notifications</CardTitle>
            <CardDescription>
              Animated notification messages (example implementation).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="flex items-center justify-between p-4 bg-background border rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium">Success!</p>
                    <p className="text-sm text-muted-foreground">Your changes have been saved.</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <div>
                    <p className="font-medium">Error</p>
                    <p className="text-sm text-muted-foreground">Something went wrong. Please try again.</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            </div>

            <CodeBlock>{`<motion.div
  initial={{ opacity: 0, y: 50, scale: 0.3 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  className="flex items-center justify-between p-4 bg-background border rounded-lg shadow-lg"
>
  <div className="flex items-center space-x-3">
    <CheckCircle className="h-5 w-5 text-green-500" />
    <div>
      <p className="font-medium">Success!</p>
      <p className="text-sm text-muted-foreground">Your changes have been saved.</p>
    </div>
  </div>
  <button className="text-muted-foreground hover:text-foreground">
    <X className="h-4 w-4" />
  </button>
</motion.div>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
