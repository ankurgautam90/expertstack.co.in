"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle enter animation: content slides up 16px and fades in the first time it
 * reaches the viewport, then stays put. Respects prefers-reduced-motion by way
 * of the global media query in globals.css.
 *
 * Always renders a plain <div> — it is a presentation wrapper, so semantic
 * elements belong inside it rather than in place of it.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** Stagger, in milliseconds. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Without IntersectionObserver support, show everything immediately.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-enterprise motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
