import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Original wordmark. The mark is three stacked rack units with a rising
 * connector — compute, network and storage layers tied together.
 * Swap the <svg> for the real logo asset when brand files are available.
 */
export function Logo({
  tone = "dark",
  className,
  showTagline = false,
}: {
  /** "dark" = navy text for light headers, "light" = white text for dark backgrounds. */
  tone?: "dark" | "light";
  className?: string;
  showTagline?: boolean;
}) {
  const light = tone === "light";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "relative grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-transform duration-300 ease-enterprise group-hover:-translate-y-0.5",
          light ? "bg-white/10 ring-1 ring-white/20" : "bg-navy-900",
        )}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="4.5" rx="1.25" fill="#F26522" />
          <rect
            x="3"
            y="9.75"
            width="18"
            height="4.5"
            rx="1.25"
            fill="#FFFFFF"
            fillOpacity="0.92"
          />
          <rect
            x="3"
            y="15.5"
            width="18"
            height="4.5"
            rx="1.25"
            fill="#FFFFFF"
            fillOpacity="0.55"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-extrabold tracking-[-0.03em]",
            light ? "text-white" : "text-navy-900",
          )}
        >
          {site.name}
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.16em]",
              light ? "text-navy-200" : "text-ink-soft",
            )}
          >
            {site.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
