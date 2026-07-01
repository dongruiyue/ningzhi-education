"use client";

import { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Use "stagger-children" to stagger direct children with increasing delay */
  variant?: "single" | "stagger";
};

/**
 * Scroll-triggered fade-up reveal.
 * DNA: scroll_effects.scroll_triggered_animations
 * Uses IntersectionObserver — lightweight, no library needed.
 */
export function ScrollReveal({ children, className = "", variant = "single" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes =
    variant === "stagger"
      ? `stagger-children ${className}`
      : `animate-on-scroll ${className}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
