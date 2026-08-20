import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "@/components/icons/Icon";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "onDark" | "ghost" | "quiet";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-300 ease-enterprise disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-600 text-white shadow-[0_10px_24px_-12px_rgba(14,68,204,0.9)] hover:bg-accent-700 hover:shadow-[0_16px_32px_-14px_rgba(14,68,204,0.95)] hover:-translate-y-0.5",
  secondary:
    "border border-navy-200 bg-white text-navy-800 hover:border-navy-800 hover:bg-navy-900 hover:text-white",
  onDark:
    "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white hover:text-navy-900",
  ghost: "text-accent-600 hover:text-accent-700",
  quiet:
    "border border-navy-200/70 bg-surface-muted text-navy-700 hover:border-accent-400 hover:text-accent-700",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-[0.9375rem]",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Adds a right arrow that nudges on hover. */
  withArrow?: boolean;
};

function content(children: ReactNode, withArrow?: boolean) {
  return (
    <>
      {children}
      {withArrow ? (
        <Icon
          name="arrowRight"
          size={17}
          className="transition-transform duration-300 ease-enterprise group-hover:translate-x-1"
        />
      ) : null}
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow,
  ...props
}: ButtonProps & Omit<ComponentProps<typeof Link>, "children" | "className">) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {content(children, withArrow)}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow,
  ...props
}: ButtonProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {content(children, withArrow)}
    </button>
  );
}
