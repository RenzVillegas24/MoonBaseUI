import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full transition-all duration-200 hover:scale-105",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-sm", 
        default: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
        "2xl": "h-20 w-20 text-xl",
      },
      variant: {
        default: "border-2 border-border/20 shadow-sm",
        ring: "border-2 border-primary/30 ring-2 ring-primary/20 shadow-md",
        glow: "border-2 border-primary/40 shadow-lg shadow-primary/25 ring-1 ring-primary/10",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

interface AvatarProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  status?: "online" | "offline" | "away" | "busy";
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, variant, status, ...props }, ref) => (
    <div className="relative">
      <div
        ref={ref}
        className={cn(avatarVariants({ size, variant }), className)}
        {...props}
      />
      {status && (
        <div
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-background shadow-sm transition-all duration-200",
            size === "xs" && "h-2 w-2 -bottom-0.5 -right-0.5",
            size === "sm" && "h-2.5 w-2.5 -bottom-0.5 -right-0.5",
            size === "default" && "h-3 w-3 -bottom-0.5 -right-0.5",
            size === "lg" && "h-3.5 w-3.5 -bottom-1 -right-1",
            size === "xl" && "h-4 w-4 -bottom-1 -right-1",
            size === "2xl" && "h-5 w-5 -bottom-1 -right-1",
            {
              "bg-success shadow-success/25": status === "online",
              "bg-muted-foreground/60 shadow-muted/25": status === "offline", 
              "bg-warning shadow-warning/25": status === "away",
              "bg-error shadow-error/25": status === "busy",
            }
          )}
        />
      )}
    </div>
  )
);
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLDivElement,
  React.ImgHTMLAttributes<HTMLImageElement> & {
    fallback?: string;
  }
>(({ className, alt, fallback, src }, ref) => {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError && fallback) {
    return (
      <div 
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 font-medium text-foreground animate-[bounce-in_0.3s_ease-out]",
          className
        )}
      >
        {fallback}
      </div>
    );
  }

  if (!src || typeof src !== 'string') {
    return (
      <div 
        ref={ref}
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 font-medium text-foreground animate-[bounce-in_0.3s_ease-out]",
          className
        )}
      >
        {fallback || alt?.charAt(0)?.toUpperCase() || "?"}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-muted animate-pulse">
          <div className="h-1/2 w-1/2 rounded-full bg-muted-foreground/20 animate-pulse" />
        </div>
      )}
      <Image
        className={cn(
          "aspect-square h-full w-full object-cover rounded-full transition-all duration-300 hover:scale-105",
          isLoading && "opacity-0",
          className
        )}
        alt={alt || "Avatar"}
        src={src as string}
        fill
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
});
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/15 via-secondary/10 to-tertiary/15 font-semibold text-foreground/80 shadow-inner animate-[bounce-in_0.3s_ease-out] backdrop-blur-sm",
      className
    )}
    {...props}
  >
    {typeof children === 'string' && children.length > 0 
      ? children.slice(0, 2).toUpperCase() 
      : children}
  </div>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
