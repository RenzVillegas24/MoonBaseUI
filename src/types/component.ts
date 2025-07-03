import React from "react";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Variant = "default" | "primary" | "secondary" | "accent" | "destructive" | "ghost" | "link" | "outline";
export type Color = "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "neutral";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface VariantProps {
  variant?: Variant;
  size?: Size;
}

export interface ColorProps {
  color?: Color;
}

export interface AnimationProps {
  animate?: boolean;
  animationDuration?: number;
}

export interface FocusableProps {
  autoFocus?: boolean;
  tabIndex?: number;
}

export interface DisableableProps {
  disabled?: boolean;
}

export interface LoadingProps {
  loading?: boolean;
}

export interface ResponsiveProps {
  responsive?: boolean;
}
