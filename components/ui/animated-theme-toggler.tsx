"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export function AnimatedThemeToggler({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isDark = theme === "dark";

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();

    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark");
      });
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [isDark, setTheme, duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
