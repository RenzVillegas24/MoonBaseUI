# Universal Sidebar System

The Universal Sidebar is a context-aware navigation component that adapts its content based on the current page:

## Features

### 🎯 **Context-Aware Content**
- **General Navigation**: Shows main navigation (Home, Components, About) on all pages
- **Components Section**: When on `/components/*` pages, shows detailed component navigation
- **Search Functionality**: Includes search for components when in components section

### 📱 **Responsive Design**
- **Desktop**: Fixed sidebar with sticky positioning
- **Mobile**: Slide-out sidebar triggered by hamburger menu in header
- **Backdrop**: Full-screen overlay for mobile with click-to-close functionality

### 🎨 **Design System Integration**
- **Consistent Theming**: Follows the same design tokens as other components
- **Smooth Animations**: Powered by Framer Motion for smooth transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Usage

### Desktop Sidebar (Components Layout)
```tsx
import { UniversalSidebar } from "@/components/ui/universal-sidebar";

<UniversalSidebar variant="desktop" />
```

### Mobile Sidebar (Header Component)
```tsx
import { UniversalSidebar, SidebarToggle } from "@/components/ui/universal-sidebar";

function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <SidebarToggle onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <UniversalSidebar 
        variant="mobile" 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
```

## Content Sections

### Navigation Section
Always visible on all pages:
- Home
- Components
- About

### Components Section
Only visible when on `/components/*` pages:
- Color System
- Buttons
- Form Elements
- Feedback
- Data Display
- Navigation
- Overlays
- Layout

### Quick Links Section
Additional helpful links:
- Developer Profile
- GitHub Repository
- NPM Package

## Implementation Details

- **Path Detection**: Uses `usePathname()` to determine current section
- **Search Filtering**: Real-time filtering of components based on search query
- **Mobile Optimization**: Touch-friendly interactions and proper z-index stacking
- **Animation System**: Staggered animations for smooth content loading

The Universal Sidebar replaces the previous separate `ComponentsSidebar` and simple hamburger menu, providing a unified navigation experience across the entire application.
