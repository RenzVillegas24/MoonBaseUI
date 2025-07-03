import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border bg-background text-foreground text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-input hover:border-ring/50 focus-visible:border-ring px-3 py-2 h-10",
        floating: "border-input hover:border-ring/50 focus-visible:border-ring px-3 pt-3 pb-2 h-14",
      },
      inputSize: {
        default: "h-10",
        sm: "h-9 text-xs",
        lg: "h-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  error?: boolean;
  helperText?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, helperText, label, id, variant, inputSize, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    React.useEffect(() => {
      if (props.value || props.defaultValue) {
        setHasValue(true);
      }
    }, [props.value, props.defaultValue]);

    if (variant === "floating") {
      return (
        <div className="w-full">
          <div className="relative">
            <input
              type={type}
              className={cn(
                inputVariants({ variant, inputSize }),
                "placeholder:transition-all placeholder:duration-200",
                !(isFocused || hasValue) && "placeholder:opacity-0 placeholder:-top-1/2 placeholder:translate-y-1/2 placeholder:blur-sm",
                error && "border-destructive focus-visible:ring-destructive",
                className
              )}
              ref={ref}
              id={inputId}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...props}
            />
            {label && (
              <label
                htmlFor={inputId}
                className={cn(
                  "absolute left-3 transition-all duration-200 pointer-events-none z-10 bg-background px-1",
                  "text-muted-foreground",
                  (isFocused || hasValue)
                    ? "left-2 top-0 -translate-y-1/2 text-xs font-medium"
                    : "top-1/2 -translate-y-1/2 text-sm",
                  error && "text-destructive",
                  isFocused && "text-primary"
                )}
              >
                {label}
              </label>
            )}
          </div>

          {helperText && (
            <p
              className={cn(
                "mt-2 text-sm",
                error ? "text-destructive" : "text-muted-foreground"
              )}
            >
              {helperText}
            </p>
          )}
        </div>
      );
    }

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "block text-sm font-medium mb-2 transition-colors duration-200",
              error ? "text-destructive" : "text-foreground"
            )}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ variant, inputSize }),
            error && "border-destructive focus-visible:ring-destructive",
            "hover:border-ring/50",
            className
          )}
          ref={ref}
          id={inputId}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        {helperText && (
          <p
            className={cn(
              "mt-2 text-sm transition-colors duration-200",
              error ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
