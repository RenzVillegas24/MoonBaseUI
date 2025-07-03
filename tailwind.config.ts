import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Base design tokens */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        /* Component colors using CSS custom properties */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          950: "var(--color-primary-950)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
          950: "var(--color-secondary-950)",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
          50: "var(--color-tertiary-50)",
          100: "var(--color-tertiary-100)",
          200: "var(--color-tertiary-200)",
          300: "var(--color-tertiary-300)",
          400: "var(--color-tertiary-400)",
          500: "var(--color-tertiary-500)",
          600: "var(--color-tertiary-600)",
          700: "var(--color-tertiary-700)",
          800: "var(--color-tertiary-800)",
          900: "var(--color-tertiary-900)",
          950: "var(--color-tertiary-950)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "var(--color-accent-50)",
          100: "var(--color-accent-100)",
          200: "var(--color-accent-200)",
          300: "var(--color-accent-300)",
          400: "var(--color-accent-400)",
          500: "var(--color-accent-500)",
          600: "var(--color-accent-600)",
          700: "var(--color-accent-700)",
          800: "var(--color-accent-800)",
          900: "var(--color-accent-900)",
          950: "var(--color-accent-950)",
        },
        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
          950: "var(--color-neutral-950)",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          50: "var(--color-success-50)",
          100: "var(--color-success-100)",
          200: "var(--color-success-200)",
          300: "var(--color-success-300)",
          400: "var(--color-success-400)",
          500: "var(--color-success-500)",
          600: "var(--color-success-600)",
          700: "var(--color-success-700)",
          800: "var(--color-success-800)",
          900: "var(--color-success-900)",
          950: "var(--color-success-950)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          50: "var(--color-warning-50)",
          100: "var(--color-warning-100)",
          200: "var(--color-warning-200)",
          300: "var(--color-warning-300)",
          400: "var(--color-warning-400)",
          500: "var(--color-warning-500)",
          600: "var(--color-warning-600)",
          700: "var(--color-warning-700)",
          800: "var(--color-warning-800)",
          900: "var(--color-warning-900)",
          950: "var(--color-warning-950)",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
          50: "var(--color-error-50)",
          100: "var(--color-error-100)",
          200: "var(--color-error-200)",
          300: "var(--color-error-300)",
          400: "var(--color-error-400)",
          500: "var(--color-error-500)",
          600: "var(--color-error-600)",
          700: "var(--color-error-700)",
          800: "var(--color-error-800)",
          900: "var(--color-error-900)",
          950: "var(--color-error-950)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      /* Extended spacing and sizing tokens */
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '10.5': '2.625rem',
        '11.5': '2.875rem',
        '12.5': '3.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem',
      },
      /* Enhanced typography tokens */
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        '3xs': ['0.5rem', { lineHeight: '0.75rem' }],
      },
      /* Enhanced border radius tokens */
      borderRadius: {
        'xs': '0.125rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      /* Enhanced shadow tokens */
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
        'colored': '0 4px 14px 0 rgb(var(--primary) / 0.15)',
        'colored-lg': '0 10px 25px -3px rgb(var(--primary) / 0.1), 0 4px 6px -2px rgb(var(--primary) / 0.05)',
        'glow': '0 0 20px rgb(var(--primary) / 0.3)',
        'glow-lg': '0 0 40px rgb(var(--primary) / 0.4)',
      },
      /* Enhanced backdrop blur tokens */
      backdropBlur: {
        xs: '2px',
      },
      /* Enhanced font family tokens */
      fontFamily: {
        'display': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'Menlo', 'Monaco', 'monospace'],
      },
      /* Enhanced transition timing functions */
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snappy': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      /* Enhanced z-index scale */
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "check-in": {
          "0%": { strokeDashoffset: "16" },
          "100%": { strokeDashoffset: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-2px)" },
        },
        "bounce-subtle": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        "pulse-glow": {
          "0%": {
            "box-shadow": "0 0 5px rgba(139, 92, 246, 0.5)",
          },
          "100%": {
            "box-shadow": "0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)",
          },
        },
        "glow": {
          "0%": {
            "box-shadow": "0 0 5px rgba(139, 92, 246, 0.2), 0 0 10px rgba(139, 92, 246, 0.2), 0 0 15px rgba(139, 92, 246, 0.2)",
          },
          "100%": {
            "box-shadow": "0 0 10px rgba(139, 92, 246, 0.4), 0 0 20px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.4)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.2s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.2s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.2s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.2s ease-out",
        "ripple": "ripple 0.6s linear",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "bounce-in": "bounce-in 0.2s ease-out",
        "check-in": "check-in 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
    },
  },
  darkMode: "class",
  plugins: [
    // Custom plugin to add utility classes for the design system
    function({ addUtilities, theme, addComponents }: any) {
      // Add content layout utilities
      addUtilities({
        '.content-max-width': {
          'max-width': '1200px',
          'margin-left': 'auto',
          'margin-right': 'auto',
        },
        '.content-padding': {
          'padding-left': theme('spacing.6'),
          'padding-right': theme('spacing.6'),
          '@media (min-width: 768px)': {
            'padding-left': theme('spacing.8'),
            'padding-right': theme('spacing.8'),
          },
        },
        '.content-container': {
          'max-width': '1200px',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': theme('spacing.6'),
          'padding-right': theme('spacing.6'),
          '@media (min-width: 768px)': {
            'padding-left': theme('spacing.8'),
            'padding-right': theme('spacing.8'),
          },
        },
        '.floating-header': {
          'position': 'fixed',
          'top': theme('spacing.4'),
          'left': '50%',
          'transform': 'translateX(-50%)',
          'z-index': '50',
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.9)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'border-radius': theme('borderRadius.xl'),
          'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
          '.dark &': {
            'background-color': 'rgba(0, 0, 0, 0.8)',
            'border-color': 'rgba(255, 255, 255, 0.1)',
          },
        },
        '.floating-header-gradient': {
          'position': 'fixed',
          'top': theme('spacing.4'),
          'left': '50%',
          'transform': 'translateX(-50%)',
          'z-index': '50',
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
          'border-radius': theme('borderRadius.xl'),
          'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
          '.dark &': {
            'background': 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))',
            'border-color': 'rgba(255, 255, 255, 0.1)',
          },
        },
        '.sidebar-glass': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.8)',
          'border-right': '1px solid rgba(255, 255, 255, 0.2)',
          '.dark &': {
            'background-color': 'rgba(0, 0, 0, 0.8)',
            'border-color': 'rgba(255, 255, 255, 0.1)',
          },
        },
      });

      // Add gradient utilities using custom color palette
      addUtilities({
        '.bg-gradient-primary': {
          'background': 'linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700))',
        },
        '.bg-gradient-primary-soft': {
          'background': 'linear-gradient(135deg, var(--color-primary-100), var(--color-primary-300))',
        },
        '.bg-gradient-primary-intense': {
          'background': 'linear-gradient(135deg, var(--color-primary-600), var(--color-primary-900))',
        },
        '.bg-gradient-secondary': {
          'background': 'linear-gradient(135deg, var(--color-secondary-500), var(--color-secondary-700))',
        },
        '.bg-gradient-secondary-soft': {
          'background': 'linear-gradient(135deg, var(--color-secondary-100), var(--color-secondary-300))',
        },
        '.bg-gradient-accent': {
          'background': 'linear-gradient(135deg, var(--color-accent-500), var(--color-accent-700))',
        },
        '.bg-gradient-accent-soft': {
          'background': 'linear-gradient(135deg, var(--color-accent-100), var(--color-accent-300))',
        },
        '.bg-gradient-accent-intense': {
          'background': 'linear-gradient(135deg, var(--color-accent-600), var(--color-accent-900))',
        },
        '.bg-gradient-success': {
          'background': 'linear-gradient(135deg, var(--color-success-500), var(--color-success-700))',
        },
        '.bg-gradient-success-soft': {
          'background': 'linear-gradient(135deg, var(--color-success-100), var(--color-success-300))',
        },
        '.bg-gradient-warning': {
          'background': 'linear-gradient(135deg, var(--color-warning-500), var(--color-warning-700))',
        },
        '.bg-gradient-warning-soft': {
          'background': 'linear-gradient(135deg, var(--color-warning-100), var(--color-warning-300))',
        },
        '.bg-gradient-error': {
          'background': 'linear-gradient(135deg, var(--color-error-500), var(--color-error-700))',
        },
        '.bg-gradient-error-soft': {
          'background': 'linear-gradient(135deg, var(--color-error-100), var(--color-error-300))',
        },
        '.bg-gradient-rainbow': {
          'background': 'linear-gradient(135deg, var(--color-primary-500), var(--color-accent-500), var(--color-warning-500))',
        },
        '.bg-gradient-rainbow-soft': {
          'background': 'linear-gradient(135deg, var(--color-primary-200), var(--color-accent-200), var(--color-warning-200))',
        },
        '.bg-gradient-sunset': {
          'background': 'linear-gradient(135deg, var(--color-warning-400), var(--color-error-500), var(--color-accent-600))',
        },
        '.bg-gradient-ocean': {
          'background': 'linear-gradient(135deg, var(--color-primary-400), var(--color-secondary-500), var(--color-primary-700))',
        },
        '.bg-gradient-forest': {
          'background': 'linear-gradient(135deg, var(--color-success-400), var(--color-tertiary-500), var(--color-success-700))',
        },
        '.bg-gradient-cosmic': {
          'background': 'linear-gradient(135deg, var(--color-accent-500), var(--color-primary-600), var(--color-secondary-800))',
        },
        '.bg-gradient-aurora': {
          'background': 'linear-gradient(135deg, var(--color-success-300), var(--color-primary-400), var(--color-accent-500), var(--color-warning-400))',
        },
        // Enhanced gradient variations
        '.bg-gradient-cosmic-soft': {
          'background': 'linear-gradient(135deg, var(--color-accent-200), var(--color-primary-300), var(--color-secondary-400))',
        },
        '.bg-gradient-cosmic-intense': {
          'background': 'linear-gradient(135deg, var(--color-accent-700), var(--color-primary-800), var(--color-secondary-900))',
        },
        '.bg-gradient-aurora-soft': {
          'background': 'linear-gradient(135deg, var(--color-success-200), var(--color-primary-200), var(--color-accent-200), var(--color-warning-200))',
        },
        '.bg-gradient-sunset-soft': {
          'background': 'linear-gradient(135deg, var(--color-warning-200), var(--color-error-300), var(--color-accent-300))',
        },
        '.bg-gradient-sunset-intense': {
          'background': 'linear-gradient(135deg, var(--color-warning-600), var(--color-error-700), var(--color-accent-800))',
        },
        '.bg-gradient-ocean-soft': {
          'background': 'linear-gradient(135deg, var(--color-primary-200), var(--color-secondary-300), var(--color-primary-400))',
        },
        '.bg-gradient-ocean-intense': {
          'background': 'linear-gradient(135deg, var(--color-primary-600), var(--color-secondary-700), var(--color-primary-900))',
        },
        '.bg-gradient-forest-soft': {
          'background': 'linear-gradient(135deg, var(--color-success-200), var(--color-tertiary-300), var(--color-success-400))',
        },
        '.bg-gradient-forest-intense': {
          'background': 'linear-gradient(135deg, var(--color-success-600), var(--color-tertiary-700), var(--color-success-900))',
        },
        // New gradient themes
        '.bg-gradient-midnight': {
          'background': 'linear-gradient(135deg, var(--color-neutral-700), var(--color-primary-800), var(--color-neutral-900))',
        },
        '.bg-gradient-dawn': {
          'background': 'linear-gradient(135deg, var(--color-warning-300), var(--color-accent-300), var(--color-primary-400))',
        },
        '.bg-gradient-electric': {
          'background': 'linear-gradient(135deg, var(--color-accent-400), var(--color-secondary-500), var(--color-accent-600))',
        },
        '.bg-gradient-neon': {
          'background': 'linear-gradient(135deg, var(--color-success-400), var(--color-accent-500), var(--color-warning-400))',
        },
        '.bg-gradient-volcano': {
          'background': 'linear-gradient(135deg, var(--color-error-400), var(--color-warning-500), var(--color-error-600))',
        },
        '.bg-gradient-galaxy': {
          'background': 'linear-gradient(135deg, var(--color-primary-500), var(--color-accent-600), var(--color-secondary-700), var(--color-primary-800))',
        },
        // Diagonal gradients
        '.bg-gradient-diagonal-primary': {
          'background': 'linear-gradient(45deg, var(--color-primary-500), var(--color-primary-700))',
        },
        '.bg-gradient-diagonal-accent': {
          'background': 'linear-gradient(45deg, var(--color-accent-500), var(--color-accent-700))',
        },
        // Radial gradients
        '.bg-gradient-radial-primary': {
          'background': 'radial-gradient(circle at center, var(--color-primary-400), var(--color-primary-700))',
        },
        '.bg-gradient-radial-accent': {
          'background': 'radial-gradient(circle at center, var(--color-accent-400), var(--color-accent-700))',
        },
        // Vertical gradients
        '.bg-gradient-vertical-primary': {
          'background': 'linear-gradient(to bottom, var(--color-primary-500), var(--color-primary-700))',
        },
        '.bg-gradient-vertical-accent': {
          'background': 'linear-gradient(to bottom, var(--color-accent-500), var(--color-accent-700))',
        },
      });

      // Add text gradient utilities
      addUtilities({
        '.text-gradient-primary': {
          'background': 'linear-gradient(135deg, var(--color-primary-600), var(--color-primary-800))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-accent': {
          'background': 'linear-gradient(135deg, var(--color-accent-600), var(--color-accent-800))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-rainbow': {
          'background': 'linear-gradient(135deg, var(--color-primary-600), var(--color-accent-600), var(--color-warning-600))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-sunset': {
          'background': 'linear-gradient(135deg, var(--color-warning-600), var(--color-error-600), var(--color-accent-700))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-ocean': {
          'background': 'linear-gradient(135deg, var(--color-primary-600), var(--color-secondary-700), var(--color-primary-800))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-cosmic': {
          'background': 'linear-gradient(135deg, var(--color-accent-600), var(--color-primary-700), var(--color-secondary-800))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-aurora': {
          'background': 'linear-gradient(135deg, var(--color-success-600), var(--color-primary-600), var(--color-accent-600), var(--color-warning-600))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-forest': {
          'background': 'linear-gradient(135deg, var(--color-success-600), var(--color-tertiary-700), var(--color-success-800))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-midnight': {
          'background': 'linear-gradient(135deg, var(--color-neutral-700), var(--color-primary-800), var(--color-neutral-900))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-electric': {
          'background': 'linear-gradient(135deg, var(--color-accent-600), var(--color-secondary-700), var(--color-accent-800))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-neon': {
          'background': 'linear-gradient(135deg, var(--color-success-600), var(--color-accent-700), var(--color-warning-600))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });

      // Add border utilities using custom colors
      addUtilities({
        '.border-primary': { 'border-color': 'var(--color-primary-500)' },
        '.border-secondary': { 'border-color': 'var(--color-secondary-500)' },
        '.border-accent': { 'border-color': 'var(--color-accent-500)' },
        '.border-success': { 'border-color': 'var(--color-success-500)' },
        '.border-warning': { 'border-color': 'var(--color-warning-500)' },
        '.border-error': { 'border-color': 'var(--color-error-500)' },
      });

      // Add glass morphism utilities
      addUtilities({
        '.glass': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.1)',
          'border': '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.glass-dark': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(0, 0, 0, 0.2)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-light': {
          'backdrop-filter': 'blur(12px) saturate(160%)',
          'background-color': 'rgba(255, 255, 255, 0.15)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-heavy': {
          'backdrop-filter': 'blur(24px) saturate(200%)',
          'background-color': 'rgba(255, 255, 255, 0.08)',
          'border': '1px solid rgba(255, 255, 255, 0.15)',
        },
        '.glass-gradient': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
          'border': '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.glass-gradient-dark': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background': 'linear-gradient(135deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1))',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.backdrop-blur-xs': {
          'backdrop-filter': 'blur(2px)',
        },
        '.backdrop-blur-light': {
          'backdrop-filter': 'blur(8px)',
        },
        '.backdrop-blur-heavy': {
          'backdrop-filter': 'blur(32px)',
        },
      });

      // Add layout and navigation utilities
      addUtilities({
        '.floating-header': {
          'position': 'fixed',
          'top': '1rem',
          'left': '50%',
          'transform': 'translateX(-50%)',
          'z-index': '50',
          'backdrop-filter': 'blur(12px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.9)',
          'border': '1px solid rgba(255, 255, 255, 0.18)',
          'border-radius': theme('borderRadius.xl'),
          'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
          'transition': 'all 0.3s ease-in-out',
          '&:hover': {
            'box-shadow': '0 12px 40px rgba(0, 0, 0, 0.15)',
          },
        },
        '.floating-header-gradient': {
          'position': 'fixed',
          'top': '1rem',
          'left': '50%',
          'transform': 'translateX(-50%)',
          'z-index': '50',
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
          'border': '1px solid rgba(255, 255, 255, 0.18)',
          'border-radius': theme('borderRadius.xl'),
          'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
          'transition': 'all 0.3s ease-in-out',
          '&:hover': {
            'box-shadow': '0 12px 40px rgba(0, 0, 0, 0.15)',
          },
        },
        '.sidebar-glass': {
          'backdrop-filter': 'blur(20px) saturate(180%)',
          'background': 'linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))',
          'border-right': '1px solid rgba(255, 255, 255, 0.15)',
          'box-shadow': '4px 0 24px rgba(0, 0, 0, 0.1)',
        },
        '.content-blur-bg': {
          'background': 'rgba(255, 255, 255, 0.6)',
          'backdrop-filter': 'blur(8px)',
        },
        '.dark .floating-header': {
          'background-color': 'rgba(0, 0, 0, 0.8)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.dark .floating-header-gradient': {
          'background': 'linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.15))',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.dark .sidebar-glass': {
          'background': 'linear-gradient(145deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.15))',
          'border-right': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.dark .content-blur-bg': {
          'background': 'rgba(0, 0, 0, 0.6)',
        },
      });

      // Add component-specific utilities
      addComponents({
        '.btn-primary': {
          'background-color': 'hsl(var(--primary))',
          'color': 'hsl(var(--primary-foreground))',
          'padding': `${theme('spacing.2')} ${theme('spacing.4')}`,
          'border-radius': theme('borderRadius.md'),
          'font-weight': theme('fontWeight.medium'),
          'transition': 'all 0.2s ease-in-out',
          '&:hover': {
            'background-color': 'var(--color-primary-600)',
            'transform': 'translateY(-1px)',
            'box-shadow': '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
          '&:active': {
            'transform': 'translateY(0)',
          },
        },
        '.btn-secondary': {
          'background-color': 'hsl(var(--secondary))',
          'color': 'hsl(var(--secondary-foreground))',
          'padding': `${theme('spacing.2')} ${theme('spacing.4')}`,
          'border-radius': theme('borderRadius.md'),
          'font-weight': theme('fontWeight.medium'),
          'transition': 'all 0.2s ease-in-out',
          '&:hover': {
            'background-color': 'var(--color-secondary-600)',
            'transform': 'translateY(-1px)',
            'box-shadow': '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
          '&:active': {
            'transform': 'translateY(0)',
          },
        },
        '.card-floating': {
          'background': 'rgba(255, 255, 255, 0.9)',
          'backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.18)',
          'border-radius': theme('borderRadius.xl'),
          'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
          'transition': 'all 0.3s ease-in-out',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 12px 40px rgba(0, 0, 0, 0.15)',
          },
        },
        '.dark .card-floating': {
          'background': 'rgba(0, 0, 0, 0.6)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      });
    },
  ],
};

export default config;