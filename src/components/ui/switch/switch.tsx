import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, description, size = "md", id, checked, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked || false);
    const [isPressed, setIsPressed] = React.useState(false);
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      setIsChecked(newChecked);
      onChange?.(e);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsPressed(false);

    const sizeClasses = {
      sm: {
      track: {
        base: "h-4 w-7",
        checked: "bg-primary shadow-lg",
        unchecked: "bg-input hover:bg-input/80",
      },
      thumb: {
        base: "h-3 w-3",
        translate: "translate-x-3",
        pressed: {
        unchecked: "w-4",
        checked: "w-4 translate-x-2",
        },
      },
      },
      md: {
      track: {
        base: "h-5 w-9",
        checked: "bg-primary shadow-lg",
        unchecked: "bg-input hover:bg-input/80",
      },
      thumb: {
        base: "h-4 w-4",
        translate: "translate-x-4",
        pressed: {
        unchecked: "w-5",
        checked: "w-5 translate-x-3",
        },
      },
      },
      lg: {
      track: {
        base: "h-6 w-11",
        checked: "bg-primary shadow-lg",
        unchecked: "bg-input hover:bg-input/80",
      },
      thumb: {
        base: "h-5 w-5",
        translate: "translate-x-5",
        pressed: {
        unchecked: "w-6",
        checked: "w-6 translate-x-4",
        },
      },
      },
    };

    return (
      <div className="flex items-center space-x-2">
      <div className="relative">
        <input
        type="checkbox"
        ref={ref}
        id={switchId}
        className="sr-only"
        checked={isChecked}
        onChange={handleChange}
        {...props}
        />
        <label
        htmlFor={switchId}
        className={cn(
          "inline-flex cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-md",
          sizeClasses[size].track.base,
          isChecked
          ? sizeClasses[size].track.checked
          : sizeClasses[size].track.unchecked,
          isPressed && "scale-95",
          className
        )}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        >
        <span
          className={cn(
          "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-all duration-200 ease-in-out",
          sizeClasses[size].thumb.base,
          isChecked && sizeClasses[size].thumb.translate,
          isPressed
            ? isChecked
            ? sizeClasses[size].thumb.pressed.checked
            : sizeClasses[size].thumb.pressed.unchecked
            : undefined
          )}
        />
        </label>
      </div>
        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={switchId}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer transition-colors duration-200 hover:text-foreground/80"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-muted-foreground transition-colors duration-200">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
