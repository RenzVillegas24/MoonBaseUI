# Copilot Instructions for MoonBase UI

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a custom UI component library for Next.js built from scratch without third-party UI libraries like Radix UI or shadcn. 

## Key Principles
- Build all components from scratch using React, TypeScript, and Tailwind CSS
- No third-party UI component dependencies (Radix UI, shadcn, etc.)
- Comprehensive theming system with dark mode support
- Accessibility-first approach
- TypeScript strict mode
- Component composition patterns
- Modern React patterns (hooks, context, etc.)

## Component Architecture
- Each component should be in its own directory under `src/components/ui/`
- Include proper TypeScript interfaces and prop types
- Support ref forwarding where appropriate
- Include variants and size options
- Proper ARIA attributes and accessibility support

## Styling Guidelines
- Use Tailwind CSS for all styling
- Create utility classes for common patterns
- Support theming through CSS custom properties
- Dark mode through class-based approach
- Responsive design considerations

## File Structure
- Components: `src/components/ui/[component-name]/`
- Hooks: `src/hooks/`
- Utils: `src/lib/`
- Types: `src/types/`
- Themes: `src/styles/`
