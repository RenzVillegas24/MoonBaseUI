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

// Color System Section
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

// Buttons Section
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
        <Card className="glass-light">
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
                <Button variant="tertiary">Tertiary</Button>
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
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
              </div>
            </div>

            <CodeBlock>
{`<Button variant="default">Default</Button>
<Button variant="shadow">Shadow</Button>
<Button variant="gradient">Gradient</Button>`}
            </CodeBlock>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>Different sizes for various use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 items-center mb-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
              <Button size="icon">
                <Star className="h-4 w-4" />
              </Button>
            </div>

            <CodeBlock>
{`<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Star className="h-4 w-4" /></Button>`}
            </CodeBlock>
          </CardContent>
        </Card>

        {/* States */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Button States</CardTitle>
            <CardDescription>Loading, disabled, and interactive states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button>Normal</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button variant="shadow" loading>Shadow Loading</Button>
            </div>

            <CodeBlock>
{`<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`}
            </CodeBlock>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Buttons with Icons</CardTitle>
            <CardDescription>Combining text and icons for better UX</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-3">
                <Label className="text-sm font-medium">Icon + Text</Label>
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
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label className="text-sm font-medium">Text + Icon</Label>
                <div className="flex flex-wrap gap-3">
                  <Button>
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline">
                    External
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="ghost">
                    Settings
                    <Settings className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            <CodeBlock>
{`<Button>
  <Star className="w-4 h-4 mr-2" />
  Star
</Button>
<Button>
  Continue
  <ChevronRight className="w-4 h-4 ml-2" />
</Button>`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Forms Section
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
        <Card className="glass-light">
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
                  <Label htmlFor="input-password">Password Input</Label>
                  <Input
                    id="input-password"
                    type="password"
                    placeholder="Enter password..."
                  />
                </div>
                
                <div>
                  <Label htmlFor="input-email">Email Input</Label>
                  <Input
                    id="input-email"
                    type="email"
                    placeholder="Enter email..."
                  />
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
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="checkbox-demo"
                      checked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked(e.target.checked)}
                    />
                    <Label htmlFor="checkbox-demo">Accept terms and conditions</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="checkbox-demo-2"
                      checked={true}
                      disabled
                    />
                    <Label htmlFor="checkbox-demo-2">Checked & Disabled</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="switch-demo"
                      checked={switchChecked}
                      onChange={(e) => setSwitchChecked(e.target.checked)}
                    />
                    <Label htmlFor="switch-demo">Enable notifications</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="switch-demo-2"
                      checked={true}
                      disabled
                    />
                    <Label htmlFor="switch-demo-2">Enabled & Disabled</Label>
                  </div>
                </div>
              </div>
            </div>

            <CodeBlock>
{`<Input
  type="email"
  placeholder="Enter email..."
/>
<Textarea
  placeholder="Enter your message..."
  rows={4}
/>
<Checkbox checked={checked} onChange={setChecked} />
<Switch checked={enabled} onChange={setEnabled} />`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Feedback Section
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
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-3 block">Basic Badges</Label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Status Badges</Label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">With Icons</Label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Completed
                </Badge>
                <Badge variant="warning">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Pending
                </Badge>
                <Badge variant="error">
                  <X className="w-3 h-3 mr-1" />
                  Failed
                </Badge>
              </div>
            </div>

            <CodeBlock>
{`<Badge variant="success">Success</Badge>
<Badge variant="warning">
  <AlertTriangle className="w-3 h-3 mr-1" />
  Pending
</Badge>`}
            </CodeBlock>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>Important messages and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert with some additional details about the current state.
              </AlertDescription>
            </Alert>
            
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please check your input and try again.
              </AlertDescription>
            </Alert>
            
            <Alert variant="success">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your action was completed successfully! You can now proceed to the next step.
              </AlertDescription>
            </Alert>

            <CodeBlock>
{`<Alert variant="success">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your action was completed successfully!
  </AlertDescription>
</Alert>`}
            </CodeBlock>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Progress Indicators</CardTitle>
            <CardDescription>Loading states and progress bars</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-3 block">Progress Bars</Label>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Upload Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Storage Used</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="w-full" />
                </div>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Skeleton Loading</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                  <Skeleton className="h-4 w-3/6" />
                </div>
              </div>
            </div>

            <CodeBlock>
{`<Progress value={75} className="w-full" />
<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-12 w-12 rounded-full" />`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Data Display Section
function DataDisplaySection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gradient-ocean mb-4">Data Display</h2>
        <p className="text-muted-foreground text-lg">
          Components for displaying and organizing data
        </p>
      </div>

      <div className="grid gap-6">
        {/* Avatars */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Avatars</CardTitle>
            <CardDescription>User profile pictures and placeholder avatars</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-3 block">Avatar Sizes</Label>
              <div className="flex items-center space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>XS</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <Avatar className="h-16 w-16">
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">Avatar Group</Label>
              <div className="flex -space-x-2">
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10 border-2 border-background">
                  <AvatarFallback>+5</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <CodeBlock>
{`<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
            </CodeBlock>
          </CardContent>
        </Card>

        {/* Cards */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Cards</CardTitle>
            <CardDescription>Flexible container components for grouping content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Simple Card</CardTitle>
                  <CardDescription>Basic card with header and content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is a simple card component with some example content.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-floating">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-success-500" />
                    Stats Card
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,345</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>

              <Card className="glass-gradient">
                <CardHeader>
                  <CardTitle className="text-lg">Glass Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Card with glass morphism effect.
                  </p>
                </CardContent>
              </Card>
            </div>

            <CodeBlock>
{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`}
            </CodeBlock>
          </CardContent>
        </Card>

        {/* Separators */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Separators</CardTitle>
            <CardDescription>Visual dividers for organizing content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm">Content above separator</p>
              <Separator className="my-4" />
              <p className="text-sm">Content below separator</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm">Left</span>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-sm">Center</span>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-sm">Right</span>
            </div>

            <CodeBlock>
{`<Separator />
<Separator orientation="vertical" className="h-6" />`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Navigation Section
function NavigationSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gradient-forest mb-4">Navigation</h2>
        <p className="text-muted-foreground text-lg">
          Components for navigation and organizing content
        </p>
      </div>

      <div className="grid gap-6">
        {/* Tabs */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Organize content into separate views</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="@username" />
                </div>
              </TabsContent>
              <TabsContent value="password" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </TabsContent>
              <TabsContent value="settings" className="space-y-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Email notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="marketing" />
                  <Label htmlFor="marketing">Marketing emails</Label>
                </div>
              </TabsContent>
            </Tabs>

            <CodeBlock>
{`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    {/* Account content */}
  </TabsContent>
  <TabsContent value="password">
    {/* Password content */}
  </TabsContent>
</Tabs>`}
            </CodeBlock>
          </CardContent>
        </Card>

        {/* Breadcrumbs */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Breadcrumbs</CardTitle>
            <CardDescription>Show navigation hierarchy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link href="/components" className="text-muted-foreground hover:text-foreground">
                Components
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">Navigation</span>
            </div>

            <CodeBlock>
{`<div className="flex items-center space-x-2">
  <Link href="/">Home</Link>
  <ChevronRight className="h-4 w-4" />
  <Link href="/components">Components</Link>
  <ChevronRight className="h-4 w-4" />
  <span>Current Page</span>
</div>`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Layout Section
function LayoutSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gradient-midnight mb-4">Layout</h2>
        <p className="text-muted-foreground text-lg">
          Structural components for organizing page layout
        </p>
      </div>

      <div className="grid gap-6">
        {/* Grid Examples */}
        <Card className="glass-light">
          <CardHeader>
            <CardTitle>Grid Layouts</CardTitle>
            <CardDescription>Responsive grid systems for content organization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-3 block">2 Column Grid</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg text-center text-sm">Column 1</div>
                <div className="bg-muted/50 p-4 rounded-lg text-center text-sm">Column 2</div>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">3 Column Grid</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg text-center text-sm">Column 1</div>
                <div className="bg-muted/50 p-4 rounded-lg text-center text-sm">Column 2</div>
                <div className="bg-muted/50 p-4 rounded-lg text-center text-sm">Column 3</div>
              </div>
            </div>

            <CodeBlock>
{`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`}
            </CodeBlock>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Overlays Section (placeholder for future components like Dialog, Popover, etc.)
function OverlaysSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gradient-neon mb-4">Overlays</h2>
        <p className="text-muted-foreground text-lg">
          Modal dialogs, popovers, and overlay components (coming soon)
        </p>
      </div>

      <Card className="glass-light">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>These components are in development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-dashed border-muted-foreground/25 rounded-lg text-center">
              <div className="text-muted-foreground text-sm">Dialog</div>
            </div>
            <div className="p-4 border border-dashed border-muted-foreground/25 rounded-lg text-center">
              <div className="text-muted-foreground text-sm">Popover</div>
            </div>
            <div className="p-4 border border-dashed border-muted-foreground/25 rounded-lg text-center">
              <div className="text-muted-foreground text-sm">Tooltip</div>
            </div>
          </div>
        </CardContent>
      </Card>
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
      case "data":
        return <DataDisplaySection />;
      case "navigation":
        return <NavigationSection />;
      case "layout":
        return <LayoutSection />;
      case "overlays":
        return <OverlaysSection />;
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
