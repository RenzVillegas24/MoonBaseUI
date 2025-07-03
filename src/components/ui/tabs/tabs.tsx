import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  previousValue?: string;
}

const TabsContext = React.createContext<TabsContextValue>({});

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, value, defaultValue, onValueChange, orientation = "horizontal", ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    const [previousValue, setPreviousValue] = React.useState<string>("");
    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = (newValue: string) => {
      setPreviousValue(currentValue);
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange, orientation, previousValue }}>
        <div
          ref={ref}
          className={cn(
            "w-full",
            orientation === "vertical" && "flex gap-4",
            className
          )}
          {...props}
        />
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { orientation = "horizontal" } = React.useContext(TabsContext);
  const [indicatorStyle, setIndicatorStyle] = React.useState({ 
    width: 0, 
    left: 0, 
    top: 0, 
    height: 0,
    opacity: 0 
  });
  const listRef = React.useRef<HTMLDivElement>(null);
  const [previousLeft, setPreviousLeft] = React.useState(0);
  
  const updateIndicator = React.useCallback(() => {
    const container = listRef.current;
    if (!container) return;
    
    const activeButton = container.querySelector('[data-state="active"]') as HTMLElement;
    if (!activeButton) {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      return;
    }
    
    const containerRect = container.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    
    const newLeft = buttonRect.left - containerRect.left;
    
    if (orientation === "horizontal") {
      setIndicatorStyle({
        width: buttonRect.width,
        left: newLeft,
        top: 0,
        height: buttonRect.height,
        opacity: 1
      });
    } else {
      setIndicatorStyle({
        width: buttonRect.width,
        left: 0,
        top: buttonRect.top - containerRect.top,
        height: buttonRect.height,
        opacity: 1
      });
    }
    
    setPreviousLeft(newLeft);
  }, [orientation]);

  React.useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  React.useEffect(() => {
    // Update indicator when children change
    const observer = new MutationObserver(updateIndicator);
    if (listRef.current) {
      observer.observe(listRef.current, { childList: true, subtree: true, attributes: true });
    }
    return () => observer.disconnect();
  }, [updateIndicator]);
  
  return (
    <div
      ref={(node) => {
        listRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      role="tablist"
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg bg-muted/40 p-1.5 text-muted-foreground backdrop-blur-sm border border-border/30 shadow-sm",
        orientation === "horizontal" ? "h-12" : "flex-col h-auto w-auto min-w-[140px]",
        className
      )}
      {...props}
    >
      {/* Animated indicator */}
      <div
        className="absolute bg-background border border-border/20 shadow-md rounded-md transition-all duration-300 ease-out pointer-events-none"
        style={{
          width: indicatorStyle.width,
          height: indicatorStyle.height,
          transform: `translate(${indicatorStyle.left}px, ${indicatorStyle.top}px)`,
          opacity: indicatorStyle.opacity,
        }}
      />
      {children}
    </div>
  );
});
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string;
  }
>(({ className, value: triggerValue, children, ...props }, ref) => {
  const { value, onValueChange, orientation = "horizontal" } = React.useContext(TabsContext);
  const [isPressed, setIsPressed] = React.useState(false);
  const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; size: number; id: number }>>([]);
  const isActive = value === triggerValue;

  const createRipple = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const size = Math.max(rect.width, rect.height) * 2;
    
    const newRipple = { 
      x: x - size / 2, 
      y: y - size / 2, 
      size,
      id: Date.now() 
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    createRipple(event);
    props.onMouseDown?.(event);
  };
  
  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    props.onMouseUp?.(event);
  };
  
  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    props.onMouseLeave?.(event);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onValueChange?.(triggerValue);
    props.onClick?.(event);
  };

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      data-state={isActive ? "active" : "inactive"}
      data-value={triggerValue}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 z-10 overflow-hidden",
        isActive 
          ? "text-foreground font-semibold" 
          : "text-muted-foreground hover:text-foreground hover:bg-background/30",
        isPressed && "scale-[0.98]",
        orientation === "vertical" && "w-full justify-start px-3",
        className
      )}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-foreground/20 pointer-events-none animate-[ripple_0.6s_ease-out]"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string;
  }
>(({ className, value: contentValue, children, ...props }, ref) => {
  const { value, previousValue } = React.useContext(TabsContext);
  const isActive = value === contentValue;
  const [shouldRender, setShouldRender] = React.useState(isActive);
  const [slideDirection, setSlideDirection] = React.useState<"left" | "right" | "none">("none");
  
  React.useEffect(() => {
    if (isActive) {
      setShouldRender(true);
      
      // Determine slide direction based on tab order
      if (previousValue && previousValue !== contentValue) {
        const tabsList = document.querySelector('[role="tablist"]');
        if (tabsList) {
          const tabs = Array.from(tabsList.querySelectorAll('[role="tab"]'));
          const previousIndex = tabs.findIndex(tab => tab.getAttribute('data-value') === previousValue);
          const currentIndex = tabs.findIndex(tab => tab.getAttribute('data-value') === contentValue);
          
          if (previousIndex >= 0 && currentIndex >= 0) {
            setSlideDirection(currentIndex > previousIndex ? "right" : "left");
          } else {
            setSlideDirection("none");
          }
        }
      } else {
        setSlideDirection("none");
      }
    } else {
      // Delay unmounting to allow exit animation
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isActive, contentValue, previousValue]);

  if (!shouldRender) return null;

  const getAnimationClass = () => {
    if (slideDirection === "left") return "animate-[slide-from-left_0.3s_ease-out]";
    if (slideDirection === "right") return "animate-[slide-from-right_0.3s_ease-out]";
    return "animate-[fade-in_0.2s_ease-out]";
  };

  return (
    <div
      ref={ref}
      className={cn(
        "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300",
        isActive 
          ? `${getAnimationClass()} opacity-100` 
          : "animate-[fade-out_0.2s_ease-out] opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
