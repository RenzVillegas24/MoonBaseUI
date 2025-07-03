"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Separator
} from "@/components/ui";
import { Copy, Check, Home, User, Settings, Bell, Mail, Calendar } from "lucide-react";

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

// Animated Tab Navigation Component
function AnimatedTabNavigation() {
  const [activeTab, setActiveTab] = React.useState("home");
  
  const tabs = [
    { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full">
      <div className="relative flex space-x-1 rounded-lg bg-muted p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-background rounded-md shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center space-x-2">
              {tab.icon}
              <span>{tab.label}</span>
            </span>
          </button>
        ))}
      </div>
      
      <div className="mt-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="p-4 bg-muted/50 rounded-lg"
        >
          <p className="text-sm">Content for {tabs.find(t => t.id === activeTab)?.label} tab</p>
        </motion.div>
      </div>
    </div>
  );
}

// Breadcrumb Component
function Breadcrumb() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/components/navigation" },
  ];

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          {index > 0 && <span className="mx-2">/</span>}
          <motion.a
            href={item.href}
            whileHover={{ scale: 1.05 }}
            className={`hover:text-foreground transition-colors ${
              index === items.length - 1 ? "text-foreground font-medium" : ""
            }`}
          >
            {item.label}
          </motion.a>
        </React.Fragment>
      ))}
    </nav>
  );
}

export default function NavigationPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Navigation Components</h1>
          <p className="text-muted-foreground">
            Components for navigating between different sections and pages.
          </p>
        </div>
      </motion.div>

      {/* Animated Tabs */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Animated Tab Navigation</CardTitle>
            <CardDescription>
              Tab navigation with smooth animations using Framer Motion.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AnimatedTabNavigation />
            
            <CodeBlock>{`function AnimatedTabNavigation() {
  const [activeTab, setActiveTab] = React.useState("home");
  
  const tabs = [
    { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div className="relative flex space-x-1 rounded-lg bg-muted p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className="relative flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors rounded-md"
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTabBackground"
              className="absolute inset-0 bg-background rounded-md shadow-sm"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center space-x-2">
            {tab.icon}
            <span>{tab.label}</span>
          </span>
        </button>
      ))}
    </div>
  );
}`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Standard Tabs */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Standard Tabs</CardTitle>
            <CardDescription>
              Built-in tabs component with content switching.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Overview</h3>
                  <p className="text-muted-foreground">
                    Get a high-level view of your data and performance metrics.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Analytics</h3>
                  <p className="text-muted-foreground">
                    Dive deep into your analytics and user behavior patterns.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reports" className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Reports</h3>
                  <p className="text-muted-foreground">
                    Generate and view detailed reports for your data.
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <CodeBlock>{`<Tabs defaultValue="overview" className="w-full">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <h3 className="text-lg font-semibold">Overview</h3>
    <p className="text-muted-foreground">Content for overview tab...</p>
  </TabsContent>
  <TabsContent value="analytics">
    <h3 className="text-lg font-semibold">Analytics</h3>
    <p className="text-muted-foreground">Content for analytics tab...</p>
  </TabsContent>
</Tabs>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Breadcrumbs */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Breadcrumbs</CardTitle>
            <CardDescription>
              Show the current page location within a navigation hierarchy.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb />
            
            <CodeBlock>{`function Breadcrumb() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/components/navigation" },
  ];

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          {index > 0 && <span className="mx-2">/</span>}
          <motion.a
            href={item.href}
            whileHover={{ scale: 1.05 }}
            className="hover:text-foreground transition-colors"
          >
            {item.label}
          </motion.a>
        </React.Fragment>
      ))}
    </nav>
  );
}`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>

      {/* Vertical Navigation */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Vertical Navigation</CardTitle>
            <CardDescription>
              Sidebar-style navigation with icons and labels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-64 space-y-1">
              {[
                { icon: <Home className="h-4 w-4" />, label: "Dashboard", active: true },
                { icon: <User className="h-4 w-4" />, label: "Profile", active: false },
                { icon: <Mail className="h-4 w-4" />, label: "Messages", active: false },
                { icon: <Calendar className="h-4 w-4" />, label: "Calendar", active: false },
                { icon: <Settings className="h-4 w-4" />, label: "Settings", active: false },
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            <Separator />

            <CodeBlock>{`<div className="w-64 space-y-1">
  {navItems.map((item) => (
    <motion.button
      key={item.label}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors hover:bg-muted"
    >
      {item.icon}
      <span className="font-medium">{item.label}</span>
    </motion.button>
  ))}
</div>`}</CodeBlock>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
