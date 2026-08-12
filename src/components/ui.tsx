"use client";

import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

export type Color = "green" | "red" | "yellow" | "blue" | "ink" | "orange";

export const colorStyles: Record<Color, string> = {
  green: "bg-pgreen",
  red: "bg-pred",
  yellow: "bg-pyellow",
  blue: "bg-pblue",
  ink: "bg-ink text-bg",
  orange: "bg-porange",
};

/** Safe lookup for colors coming from the content dictionary. */
export function colorCls(color: string, fallback: Color = "yellow"): string {
  return colorStyles[(color as Color) ?? fallback] ?? colorStyles[fallback];
}

const buttonVariants: Record<Color, string> = {
  green: "bg-pgreen text-ink hover:bg-[#3fd573]",
  red: "bg-pred text-ink hover:bg-[#f45f5f]",
  yellow: "bg-pyellow text-ink hover:bg-[#f4c809]",
  blue: "bg-pblue text-ink hover:bg-[#4f9bfa]",
  ink: "bg-ink text-bg hover:opacity-90",
  orange: "bg-porange text-ink hover:bg-[#f2842c]",
};

export function PixelButton({
  variant = "green",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Color }) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 border-4 border-ink px-5 py-3 text-center font-pixel text-[11px] uppercase leading-relaxed tracking-wide shadow-pixel transition-all",
        "hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none",
        "active:translate-x-[4px] active:translate-y-[4px]",
        buttonVariants[variant],
        className
      )}
    >
      {children}
    </a>
  );
}

export function Chip({
  children,
  className,
  icon,
  compact,
}: {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border-2 border-ink bg-bg font-silk text-xs font-bold shadow-pixel-sm transition-transform hover:-translate-y-0.5",
        compact ? "px-2 py-0.5" : "px-2.5 py-1",
        className
      )}
    >
      {icon ? <span className="shrink-0 text-sm" aria-hidden="true">{icon}</span> : null}
      {children}
    </span>
  );
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  icon,
  color = "yellow",
  className,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  icon: string;
  color?: Color;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <p className="font-pixel text-[10px] text-muted">{kicker}</p>
      <h2 className="mt-3 flex flex-wrap items-center gap-3 font-pixel text-lg leading-relaxed sm:text-2xl">
        <span
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center border-4 border-ink text-base shadow-pixel-sm",
            colorCls(color)
          )}
          aria-hidden="true"
        >
          {icon}
        </span>
        {title}
      </h2>
      <p className="mt-3 font-body text-base font-bold text-muted sm:text-lg">{subtitle}</p>
      <div className="mt-4 flex h-2 w-full max-w-xs border-2 border-ink" aria-hidden="true">
        {["bg-pgreen", "bg-pred", "bg-pyellow", "bg-pblue"].map((c) => (
          <span key={c} className={cn("flex-1", c)} />
        ))}
      </div>
    </div>
  );
}

/** Pixel block-by-block stat bar that fills when scrolled into view. */
export function StatBar({ value, color = "#4ade80" }: { value: number; color?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const blocks = 10;
  const filled = Math.round((value / 100) * blocks);

  return (
    <div
      ref={ref}
      className="flex items-center gap-[3px]"
      role="img"
      aria-label={`${value}%`}
    >
      {Array.from({ length: blocks }).map((_, i) => (
        <span
          key={i}
          className="h-3.5 w-3.5 border-2 border-ink transition-[background-color] duration-300"
          style={{
            backgroundColor: inView && i < filled ? color : "transparent",
            transitionDelay: `${i * 45}ms`,
          }}
        />
      ))}
    </div>
  );
}
