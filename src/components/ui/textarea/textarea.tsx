import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
  {
    variants: {
      variant: {
        default: "border-input px-3 py-2",
        floating: "border-input px-3 pt-3 pb-2",
      },
      textareaSize: {
        default: "min-h-[80px]",
        sm: "min-h-[60px] text-xs",
        lg: "min-h-[120px] text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      textareaSize: "default",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textareaVariants> {
  error?: boolean;
  helperText?: string;
  label?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, helperText, label, id, variant, textareaSize, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
            <textarea
              className={cn(
                textareaVariants({ variant, textareaSize }),
                "placeholder:transition-all placeholder:duration-200",
                !(isFocused || hasValue) && "placeholder:opacity-0 placeholder:-top-1/2 placeholder:translate-y-1/2 placeholder:blur-sm",
                error && "border-destructive focus-visible:ring-destructive",
                className
              )}
              ref={ref}
              id={textareaId}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...props}
            />
            {label && (
              <label
                htmlFor={textareaId}
                className={cn(
                  "absolute left-3 transition-all duration-200 pointer-events-none z-10 bg-background px-1",
                  "text-muted-foreground",
                  (isFocused || hasValue)
                    ? "left-2 top-0 -translate-y-1/2 text-xs font-medium"
                    : "top-4 text-sm",
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

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "block text-sm font-medium mb-2 transition-colors duration-200",
              error ? "text-destructive" : "text-foreground"
            )}
          >
            {label}
          </label>
        )}
        <textarea
          className={cn(
            textareaVariants({ variant, textareaSize }),
            error && "border-destructive focus-visible:ring-destructive",
            "hover:border-ring/50",
            className
          )}
          ref={ref}
          id={textareaId}
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

Textarea.displayName = "Textarea";

export { Textarea };
