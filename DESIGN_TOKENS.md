# MoonBase UI Design Tokens Documentation

## Overview

MoonBase UI features an extended design token system that provides comprehensive color palettes, spacing utilities, and pre-built component styles. This system is built on top of Tailwind CSS and leverages CSS custom properties for theming.

## Color System

### Base Colors

Each color family includes 11 shades (50-950) for maximum flexibility:

```css
/* Available Color Families */
- primary: Blue-based brand colors
- secondary: Gray-based supporting colors  
- tertiary: Yellow-based accent colors
- accent: Purple-based highlight colors
- neutral: True neutral grays
- success: Green-based success states
- warning: Orange-based warning states
- error: Red-based error states
```

### Usage Examples

```tsx
// Background colors
<div className="bg-primary-500">Primary background</div>
<div className="bg-secondary-100">Light secondary background</div>

// Text colors
<h1 className="text-primary-700">Primary heading</h1>
<p className="text-neutral-600">Body text</p>

// Border colors
<div className="border border-primary-300">Primary border</div>
```

## Extended Utilities

### Gradient Utilities

Pre-built gradient classes using the color system:

```tsx
// Background gradients
<div className="bg-gradient-primary">Primary gradient</div>
<div className="bg-gradient-rainbow">Rainbow gradient</div>

// Text gradients  
<h1 className="text-gradient-primary">Gradient text</h1>
<h2 className="text-gradient-accent">Accent gradient text</h2>
```

### Glass Morphism

Modern glass effects with backdrop blur:

```tsx
<div className="glass">Light glass effect</div>
<div className="glass-dark">Dark glass effect</div>
```

### Enhanced Spacing

Extended spacing scale with half-steps:

```tsx
<div className="p-4.5">Padding 1.125rem</div>
<div className="m-6.5">Margin 1.625rem</div>
<div className="w-15">Width 3.75rem</div>
```

### Content Layout Utilities

```tsx
// Content container with max-width and padding
<div className="content-container">
  <p>Centered content with responsive padding</p>
</div>

// Or use separately
<div className="content-max-width content-padding">
  <p>Manual layout control</p>
</div>
```

## Component Utilities

### Pre-styled Buttons

```tsx
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
```

### Custom Border Colors

```tsx
<div className="border-primary">Primary border</div>
<div className="border-success">Success border</div>
```

## Shadow System

Enhanced shadow utilities:

```tsx
<div className="shadow-colored">Primary colored shadow</div>
<div className="shadow-glow">Glowing effect</div>
<div className="shadow-glow-lg">Large glow effect</div>
```

## Typography Enhancements

### Font Families

```tsx
<h1 className="font-display">Display font</h1>
<p className="font-body">Body font</p>
<code className="font-mono">Monospace font</code>
```

### Extended Font Sizes

```tsx
<span className="text-2xs">Extra extra small</span>
<span className="text-3xs">Tiny text</span>
```

## Border Radius

Extended border radius scale:

```tsx
<div className="rounded-xs">Extra small radius</div>
<div className="rounded-4xl">Extra large radius</div>
<div className="rounded-6xl">Huge radius</div>
```

## Animation & Transitions

### Enhanced Timing Functions

```tsx
<div className="transition-all duration-300 ease-bounce-in">Bouncy transition</div>
<div className="transition-colors duration-200 ease-smooth">Smooth transition</div>
```

### Z-Index Scale

```tsx
<div className="z-1">Layer 1</div>
<div className="z-60">Layer 60</div>
<div className="z-100">Layer 100</div>
```

## CSS Custom Properties

All colors are available as CSS custom properties:

```css
.custom-element {
  background-color: var(--color-primary-500);
  border-color: var(--color-accent-300);
  color: var(--color-neutral-700);
}
```

## Dark Mode Support

All design tokens automatically adapt to dark mode:

```tsx
// Automatically switches between light/dark variants
<div className="bg-background text-foreground">
  Content with theme-aware colors
</div>
```

## Best Practices

1. **Use semantic tokens first**: Prefer `bg-background` over `bg-white`
2. **Leverage color scales**: Use lighter shades (100-300) for backgrounds, darker (600-900) for text
3. **Maintain contrast**: Ensure sufficient contrast between text and background colors
4. **Be consistent**: Use the same color tokens across similar components
5. **Test dark mode**: Always verify your designs work in both light and dark themes

## Migration Guide

### From Basic Tailwind

```tsx
// Before
<div className="bg-blue-500 text-white">

// After  
<div className="bg-primary-500 text-primary-foreground">
```

### From Hardcoded Colors

```tsx
// Before
<div style={{backgroundColor: '#3b82f6'}}>

// After
<div className="bg-primary-500">
```

## Contributing

When adding new design tokens:

1. Add CSS custom properties to `globals.css`
2. Update `tailwind.config.ts` color mappings
3. Add utility classes if needed
4. Update this documentation
5. Add examples to the color palette demo component
