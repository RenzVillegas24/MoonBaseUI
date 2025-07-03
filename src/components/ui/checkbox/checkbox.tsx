import * as React from "react";
import { Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  indeterminate?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, indeterminate = false, id, checked, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked || false);
    const [isPressed, setIsPressed] = React.useState(false);
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

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

    const showCheck = isChecked && !indeterminate;
    const showIndeterminate = indeterminate;

    return (
      <div className="flex items-start space-x-2">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            ref={inputRef}
            id={checkboxId}
            className="sr-only"
            checked={isChecked}
            onChange={handleChange}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className={cn(
              "flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border border-primary shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary/80",
              (showCheck || showIndeterminate)
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background hover:bg-accent/10",
              isPressed && "scale-95",
              className
            )}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {showCheck && (
              <svg
                className="h-3 w-3 animate-[check-in_0.2s_ease-out]"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="16"
                  strokeDashoffset="0"
                  className="animate-[check-draw_0.3s_ease-out]"
                  style={{
                    animationDelay: '0.1s',
                    animationFillMode: 'both'
                  }}
                />
              </svg>
            )}
            {showIndeterminate && (
              <Minus className="h-3 w-3 animate-[bounce-in_0.2s_ease-out]" />
            )}
          </label>
        </div>
        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={checkboxId}
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

Checkbox.displayName = "Checkbox";

export { Checkbox };
