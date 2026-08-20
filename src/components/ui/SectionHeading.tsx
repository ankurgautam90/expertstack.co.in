import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Standard section header: eyebrow, large display title, supporting line and an
 * optional action pinned right on desktop.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        action && !centered
          ? "lg:flex-row lg:items-end lg:justify-between"
          : null,
        centered ? "items-center text-center" : null,
        className,
      )}
    >
      <div className={cn("max-w-3xl", centered && "mx-auto")}>
        {eyebrow ? (
          <p
            className={cn(
              "eyebrow mb-5",
              tone === "dark" && "text-accent-300",
              centered && "justify-center",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] lg:tracking-[-0.02em]",
            tone === "dark" && "text-white",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-navy-200" : "text-ink-muted",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
