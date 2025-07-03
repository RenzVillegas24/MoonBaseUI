# MoonBase UI

A comprehensive, accessible, and customizable React component library built from scratch for Next.js applications. MoonBase UI provides a complete set of UI components without relying on third-party libraries like Radix UI or shadcn.

## ✨ Features

- 🎨 **Complete Theme System** - Dark mode support with customizable color palettes
- 🏗️ **Built from Scratch** - No dependencies on third-party UI libraries
- ♿ **Accessibility First** - ARIA attributes and keyboard navigation
- 🎯 **TypeScript Native** - Full TypeScript support with strict typing
- 🎭 **Variant System** - Flexible component variants using class-variance-authority
- 📱 **Responsive Design** - Mobile-first responsive components
- 🚀 **Modern Stack** - Built with Next.js 15, React 19, and Tailwind CSS v3.4.17
- ✨ **Rich Animations** - Smooth transitions, ripple effects, and micro-interactions
- 🎪 **Floating Labels** - Modern floating label inputs and textareas
- 💫 **Enhanced Interactions** - Android-like ripple effects, animated checkboxes
- 🎨 **Advanced Theming** - Tertiary colors, success/warning/error states
- 🔄 **Modern Components** - Enhanced avatars with status, improved tabs and switches

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the component demo.

## 📦 Available Components

### Core Components
- **Alert** - Status messages and notifications
- **Avatar** - User profile pictures with fallbacks
- **Badge** - Status indicators and tags
- **Button** - Interactive buttons with variants and loading states
- **Card** - Container component for content sections
- **Checkbox** - Form checkbox with labels and descriptions
- **Input** - Text input fields with validation states
- **Label** - Form labels with accessibility support
- **Progress** - Progress bars with different variants
- **Separator** - Visual dividers for content sections
- **Skeleton** - Loading placeholders for content
- **Switch** - Toggle switches for settings
- **Tabs** - Tabbed content organization
- **Textarea** - Multi-line text input

## ⚡ Enhanced Features

### Button Enhancements
- **Ripple Effect** - Android-like touch feedback animation
- **New Variants**: `shadow` (enhanced elevation), `gradient` (gradient backgrounds), `blur` (backdrop blur)
- **Loading States** - Smooth spinner animations
- **Enhanced Shadows** - Dynamic shadow effects on hover

### Input & Textarea Enhancements  
- **Floating Labels** - Smooth label animation with `variant="floating"`
- **Enhanced States** - Better error/success styling
- **Helper Text** - Improved helper text positioning and styling

### Checkbox Enhancements
- **Animated Check** - Smooth check mark animation using custom keyframes
- **Indeterminate State** - Support for indeterminate state with animation
- **Fixed Toggle Logic** - Improved state management and accessibility

### Switch Enhancements
- **Pressed Effect** - Slight width increase during interaction
- **Smooth Animation** - Enhanced toggle animations
- **Fixed State Logic** - Corrected toggle behavior

### Avatar Enhancements
- **Status Indicators** - Online, offline, away, busy status with colored dots
- **Multiple Sizes** - xs, sm, default, lg, xl, 2xl
- **Enhanced Variants** - `ring` and `glow` effects
- **Better Fallbacks** - Improved loading and error states

### Tabs Enhancements
- **Smooth Transitions** - Enhanced trigger and content animations
- **Pressed Effects** - Visual feedback during interaction
- **Better Styling** - Improved active/inactive state appearance

### Theme System Improvements
- **Tertiary Color** - Added tertiary brand color support
- **Enhanced Semantic Colors** - Improved warning, success, error color definitions
- **New Keyframes** - Added ripple, bounce, check-in animations
- **CSS Variables** - Complete color token system for theming

### Coming Soon
- Accordion
- Alert Dialog
- Aspect Ratio
- Breadcrumb
- Calendar
- Carousel
- Chart
- Combobox
- Command
- Context Menu
- Data Table
- Date Picker
- Dialog
- Drawer
- Dropdown Menu
- React Hook Form Integration
- Hover Card
- Input OTP
- Menubar
- Navigation Menu
- Pagination
- Popover
- Radio Group
- Resizable
- Scroll Area
- Select
- Sheet
- Sidebar
- Slider
- Sonner (Toast notifications)
- Table
- Toggle
- Toggle Group
- Tooltip

## 🎨 Theming

MoonBase UI includes a comprehensive theming system with:

- **Dark Mode Support** - Automatic system preference detection
- **Custom Color Palettes** - Primary, secondary, accent, and semantic colors
- **CSS Custom Properties** - Easy theme customization
- **Responsive Design** - Mobile-first approach

### Using the Theme Provider

```tsx
import { ThemeProvider } from "@/components/ui";

function App() {
  return (
    <ThemeProvider defaultMode="system" defaultTheme="default">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### Theme Hook

```tsx
import { useTheme } from "@/components/ui";

function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  
  return (
    <button onClick={toggleMode}>
      Current mode: {mode}
    </button>
  );
}
```

## 💡 Usage Examples

### Basic Button

```tsx
import { Button } from "@/components/ui";

function MyComponent() {
  return (
    <Button variant="primary" size="lg" loading>
      Click me
    </Button>
  );
}
```

### Form with Validation

```tsx
import { Input, Label, Button, Card } from "@/components/ui";

function LoginForm() {
  return (
    <Card>
      <form className="space-y-4 p-6">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={false}
          helperText="We'll never share your email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={true}
          helperText="Password must be at least 8 characters"
        />
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </Card>
  );
}
```

## 🛠️ Development

### Project Structure

```
src/
├── components/
│   └── ui/
│       ├── button/
│       ├── card/
│       ├── input/
│       └── ...
├── hooks/
│   └── use-theme.tsx
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
└── types/
    ├── component.ts
    └── theme.ts
```

### Building Components

Each component follows this structure:
- Self-contained directory
- TypeScript interfaces
- Variant support with CVA
- Accessibility features
- Ref forwarding
- Proper exports

## 🔧 Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **class-variance-authority** - Component variants
- **Lucide React** - Icon library

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using modern web technologies

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
