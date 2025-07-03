"use client";

import * as React from "react";
import { Moon, Sun, Palette, X, Star, Heart, Info, AlertTriangle, CheckCircle } from "lucide-react";
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

function ComponentDemo() {
  const [progress, setProgress] = React.useState(33);
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [textareaValue, setTextareaValue] = React.useState("");

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Header */}
      <div className="border-b">
        <div className="content-max-width content-padding py-8">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">MoonBase UI</h1>
              <p className="text-muted-foreground">A comprehensive React component library built from scratch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-max-width content-padding py-8 space-y-8">
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>
              Different button variants with ripple effects, shadows, and loading states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-3 block">Variants</Label>
              <div className="flex flex-wrap gap-2">
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
              <div className="flex flex-wrap gap-2">
                <Button variant="shadow">Shadow</Button>
                <Button variant="blur">Blur</Button>
                <Button variant="gradient">Gradient</Button>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Sizes</Label>
              <div className="flex flex-wrap gap-2 items-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Star className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">States</Label>
              <div className="flex gap-2">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button variant="shadow" loading>Shadow Loading</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>
              Enhanced input fields, textareas, checkboxes, and switches with modern animations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <Label className="text-sm font-medium mb-3 block">Standard Inputs</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  error
                  helperText="Password must be at least 8 characters"
                />
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">Floating Label Inputs</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  variant="floating"
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                />
                <Input
                  variant="floating"
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                  error
                  helperText="Please enter a valid phone number"
                />
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Textarea</Label>
              <div className="space-y-4">
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  helperText="Maximum 500 characters"
                />
                <Textarea
                  variant="floating"
                  label="Floating Textarea"
                  placeholder="Enter your description"
                  helperText="This textarea has a floating label"
                />
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">Interactive Controls</Label>
              <div className="space-y-6">
                <Checkbox
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                  label="Accept terms and conditions"
                  description="By checking this box, you agree to our terms of service"
                />
                <Checkbox
                  indeterminate
                  label="Indeterminate state"
                  description="This checkbox shows an indeterminate state"
                />
                <Switch
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                  label="Enable notifications"
                  description="Receive email notifications about updates"
                />
                <Switch
                  checked={false}
                  disabled
                  label="Disabled switch"
                  description="This switch is in a disabled state"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges and Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Badges & Alerts</CardTitle>
            <CardDescription>
              Status indicators and notification components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>

            <div className="space-y-4">
              <Alert variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert message.
                </AlertDescription>
              </Alert>
              
              <Alert variant="success">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your action was completed successfully.
                </AlertDescription>
              </Alert>
              
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Please review the information before proceeding.
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive">
                <X className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  An error occurred while processing your request.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Progress and Loading */}
        <Card>
          <CardHeader>
            <CardTitle>Progress & Loading</CardTitle>
            <CardDescription>
              Progress bars and skeleton loading states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Default Progress</Label>
                <Progress value={progress} className="mt-2" />
              </div>
              <div>
                <Label className="text-sm font-medium">Success Progress</Label>
                <Progress value={80} variant="success" showValue className="mt-2" />
              </div>
              <div>
                <Label className="text-sm font-medium">Warning Progress</Label>
                <Progress value={60} variant="warning" size="lg" className="mt-2" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label className="text-sm font-medium">Loading Skeletons</Label>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatars */}
        <Card>
          <CardHeader>
            <CardTitle>Avatars</CardTitle>
            <CardDescription>
              User profile pictures with different sizes, variants, and status indicators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-3 block">Sizes</Label>
              <div className="flex items-center space-x-4">
                <Avatar size="sm">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <Avatar size="default">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>DF</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <Avatar size="xl">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>XL</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">Variants</Label>
              <div className="flex items-center space-x-4">
                <Avatar variant="default">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
                  <AvatarFallback>DF</AvatarFallback>
                </Avatar>
                <Avatar variant="ring">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Ring" />
                  <AvatarFallback>RG</AvatarFallback>
                </Avatar>
                <Avatar variant="glow">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Glow" />
                  <AvatarFallback>GL</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">Status Indicators</Label>
              <div className="flex items-center space-x-4">
                <Avatar status="online">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Online" />
                  <AvatarFallback>ON</AvatarFallback>
                </Avatar>
                <Avatar status="away">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Away" />
                  <AvatarFallback>AW</AvatarFallback>
                </Avatar>
                <Avatar status="busy">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Busy" />
                  <AvatarFallback>BY</AvatarFallback>
                </Avatar>
                <Avatar status="offline">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Offline" />
                  <AvatarFallback>OF</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">Fallback Examples</Label>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/nonexistent.jpg" alt="Fallback" />
                  <AvatarFallback>FB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>LD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>
                    <Heart className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>
              Organize content into tabbed sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <h3 className="text-lg font-semibold">Project Overview</h3>
                <p className="text-muted-foreground">
                  This is the overview tab content. Here you can see general information about your project.
                </p>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4">
                <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  View detailed analytics and metrics for your project performance.
                </p>
              </TabsContent>
              <TabsContent value="settings" className="space-y-4">
                <h3 className="text-lg font-semibold">Project Settings</h3>
                <p className="text-muted-foreground">
                  Configure your project settings and preferences here.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Examples</CardTitle>
            <CardDescription>
              Code examples of the enhanced components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-3 block">Floating Label Input</Label>
              <div className="bg-muted/30 p-4 rounded-lg">
                <code className="text-sm">
                  {`<Input variant="floating" label="Email Address" type="email" />`}
                </code>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Enhanced Button</Label>
              <div className="bg-muted/30 p-4 rounded-lg">
                <code className="text-sm">
                  {`<Button variant="gradient" size="lg" loading>Processing...</Button>`}
                </code>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Avatar with Status</Label>
              <div className="bg-muted/30 p-4 rounded-lg">
                <code className="text-sm">
                  {`<Avatar size="lg" variant="ring" status="online">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
                </code>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Animated Checkbox</Label>
              <div className="bg-muted/30 p-4 rounded-lg">
                <code className="text-sm">
                  {`<Checkbox 
  checked={isChecked} 
  onChange={setIsChecked}
  label="Accept Terms"
  description="I agree to the terms and conditions"
/>`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="border-t pt-8 mt-12">
          <div className="text-center text-muted-foreground">
            <p>MoonBase UI - Built with Next.js, TypeScript, and Tailwind CSS</p>
            <p className="mt-2">Created without third-party UI libraries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider defaultMode="system" defaultTheme="default">
      <ComponentDemo />
    </ThemeProvider>
  );
}
