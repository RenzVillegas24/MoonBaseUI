"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Moon, Sun, Palette, X, Star, Heart, Info, AlertTriangle, CheckCircle, 
  Menu, Search, ChevronRight, Copy, Check, User, Settings, Bell,
  Calendar, Download, ExternalLink, Eye, EyeOff, Play, Pause,
  Volume2, VolumeX, Filter, MoreHorizontal, Plus, Minus,
  ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Home, Users, Mail,
  Phone, MapPin, Clock, DollarSign, TrendingUp
} from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Badge,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Checkbox,
  Progress,
  Separator,
  Skeleton,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeProvider,
  useTheme,
} from "@/components/ui";
import { ColorPaletteDemo } from "@/components/ui/color-palette-demo/color-palette-demo";

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

function ComponentsSidebar({ activeSection, onSectionChange }: { 
  activeSection: string;
  onSectionChange: (section: string) => void;
}) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const componentSections = [
    { id: "colors", label: "Color System", icon: "🎨", count: 8 },
    { id: "buttons", label: "Buttons", icon: "⏺️", count: 12 },
    { id: "forms", label: "Form Elements", icon: "📝", count: 8 },
    { id: "feedback", label: "Feedback", icon: "💬", count: 6 },
    { id: "data", label: "Data Display", icon: "📊", count: 5 },
    { id: "navigation", label: "Navigation", icon: "🧭", count: 4 },
    { id: "overlays", label: "Overlays", icon: "🪟", count: 3 },
    { id: "layout", label: "Layout", icon: "📐", count: 4 },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden"
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 sidebar-glass z-40 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-gradient-cosmic flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h2 className="font-bold text-lg">Components</h2>
              <p className="text-sm text-muted-foreground">Browse all components</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              className="pl-9"
            />
          </div>

          {/* Component List */}
          <div className="space-y-2">
            {componentSections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionChange(section.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                  activeSection === section.id
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                    : 'hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{section.icon}</span>
                  <div>
                    <span className="font-medium">{section.label}</span>
                    <div className="text-xs text-muted-foreground">{section.count} components</div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4" />
              </button>
            ))}
          </div>

          {/* Quick Links */}
          <Separator className="my-6" />
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Quick Links</h3>
            <Link href="/" className="block p-2 rounded-lg hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="block p-2 rounded-lg hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/about/me" className="block p-2 rounded-lg hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">
              Developer
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}

function ColorSystemSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gradient-cosmic mb-4">Color System</h2>
        <p className="text-muted-foreground text-lg">
          Comprehensive color palette with semantic tokens and full shade ranges
        </p>
      </div>
      <ColorPaletteDemo />
    </div>
  );
}

function ButtonsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gradient-primary mb-4">Buttons</h2>
        <p className="text-muted-foreground text-lg">
          Interactive button components with various styles and states
        </p>
      </div>

      <div className="grid gap-6">
        {/* Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>Different visual styles for various contexts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-3 block">Basic Variants</Label>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Enhanced Variants</Label>
              <div className="flex flex-wrap gap-3">
                <Button variant="shadow">Shadow</Button>
                <Button variant="blur">Blur Effect</Button>
                <Button variant="gradient">Gradient</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>Different sizes for various use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Star className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* States */}
        <Card>
          <CardHeader>
            <CardTitle>Button States</CardTitle>
            <CardDescription>Loading, disabled, and interactive states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>Normal</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button variant="shadow" loading>Shadow Loading</Button>
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons with Icons</CardTitle>
            <CardDescription>Combining text and icons for better UX</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Star className="w-4 h-4 mr-2" />
                Star
              </Button>
              <Button variant="outline">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="secondary">
                Download
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function FormsSection() {
  const [inputValue, setInputValue] = React.useState("");
  const [textareaValue, setTextareaValue] = React.useState("");
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gradient-accent mb-4">Form Elements</h2>
        <p className="text-muted-foreground text-lg">
          Input fields, textareas, checkboxes, and other form controls
        </p>
      </div>

      <div className="grid gap-6">
        {/* Input Fields */}
        <Card>
          <CardHeader>
            <CardTitle>Input Fields</CardTitle>
            <CardDescription>Various input field types and states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="input-basic">Basic Input</Label>
                  <Input
                    id="input-basic"
                    type="text"
                    placeholder="Enter text..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="input-icon">Input with Icon</Label>
                  <div className="relative">
                    <Input
                      id="input-icon"
                      type="email"
                      placeholder="Enter email..."
                      className="pl-8"
                    />
                    <Heart className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="input-disabled">Disabled Input</Label>
                  <Input
                    id="input-disabled"
                    type="text"
                    placeholder="Disabled input..."
                    disabled
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="textarea-basic">Textarea</Label>
                  <Textarea
                    id="textarea-basic"
                    placeholder="Enter your message..."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="checkbox-demo"
                    checked={checkboxChecked}
                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                  />
                  <Label htmlFor="checkbox-demo">Accept terms and conditions</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="switch-demo"
                    checked={switchChecked}
                    onChange={(e) => setSwitchChecked(e.target.checked)}
                  />
                  <Label htmlFor="switch-demo">Enable notifications</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function FeedbackSection() {
  const [progress, setProgress] = React.useState(33);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gradient-sunset mb-4">Feedback</h2>
        <p className="text-muted-foreground text-lg">
          Alerts, badges, progress indicators, and status components
        </p>
      </div>

      <div className="grid gap-6">
        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>Important messages and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert with some additional details.
              </AlertDescription>
            </Alert>
            
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
            
            <Alert variant="success">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your action was completed successfully!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Progress Indicators</CardTitle>
            <CardDescription>Loading states and progress bars</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-3 block">Progress Bar</Label>
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-muted-foreground mt-2">{progress}% complete</p>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Skeleton Loading</Label>
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ComponentDemo() {
  const [activeSection, setActiveSection] = React.useState("colors");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "colors":
        return <ColorSystemSection />;
      case "buttons":
        return <ButtonsSection />;
      case "forms":
        return <FormsSection />;
      case "feedback":
        return <FeedbackSection />;
      default:
        return <ColorSystemSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <ComponentsSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      {/* Floating Header */}
      <div className="floating-header-gradient px-6 py-3 mx-4 lg:mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-cosmic flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-lg">MoonBase UI</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link href="/components" className="text-foreground font-medium">Components</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-80 pt-24 p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
}

export default function ComponentPageWrapper() {
  return (
    <ThemeProvider>
      <ComponentDemo />
    </ThemeProvider>
  );
}
