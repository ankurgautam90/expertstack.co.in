import { Icon, type IconName } from "@/components/icons/Icon";
import { cn } from "@/lib/utils";

type Variant = "circuit" | "topology" | "stack" | "signal";

/**
 * Lightweight generated artwork for card media and page banners. Four variants
 * keep the grid varied without any two cards looking identical.
 */
export function PatternVisual({
  variant = "circuit",
  icon,
  className,
  tone = "dark",
}: {
  variant?: Variant;
  icon?: IconName;
  className?: string;
  tone?: "dark" | "light";
}) {
  const stroke = tone === "dark" ? "#4A82FB" : "#1E3A63";
  const faint = tone === "dark" ? "#33507D" : "#93A8C9";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        tone === "dark" ? "bg-navy-900" : "bg-surface-sunken",
        className,
      )}
    >
      <svg
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {variant === "circuit" ? (
          <g fill="none" stroke={faint} strokeOpacity="0.55" strokeWidth="1.25">
            <path d="M-20 60h120l30 30h130l40-40h140" />
            <path d="M-20 150h80l40-40h90l30 30h180" />
            <path d="M60 -20v60l30 30v90l-30 30v60" />
            <path d="M300 -20v40l-30 30v70l40 40v100" />
            <circle cx="100" cy="60" r="4" fill={stroke} stroke="none" />
            <circle cx="260" cy="50" r="4" fill={stroke} stroke="none" />
            <circle cx="120" cy="110" r="4" fill={stroke} stroke="none" />
            <circle cx="310" cy="180" r="4" fill={stroke} stroke="none" />
          </g>
        ) : null}

        {variant === "topology" ? (
          <g fill="none" stroke={faint} strokeOpacity="0.5" strokeWidth="1.25">
            <path d="M200 40 80 140M200 40l120 100M200 40v60M80 140v60M320 140v60M80 140h240" />
            <circle cx="200" cy="40" r="9" fill="#0A1730" stroke={stroke} strokeWidth="1.5" />
            <circle cx="80" cy="140" r="7" fill="#0A1730" />
            <circle cx="320" cy="140" r="7" fill="#0A1730" />
            <circle cx="200" cy="100" r="5" fill={stroke} stroke="none" opacity="0.8" />
            {[40, 120, 200, 280, 360].map((x) => (
              <rect key={x} x={x - 14} y="200" width="28" height="14" rx="3" fill="#0D1E38" />
            ))}
          </g>
        ) : null}

        {variant === "stack" ? (
          <g>
            {[0, 1, 2, 3].map((index) => (
              <g key={index}>
                <rect
                  x={70 + index * 8}
                  y={40 + index * 42}
                  width={260 - index * 16}
                  height="30"
                  rx="4"
                  fill="#0D1E38"
                  stroke={faint}
                  strokeOpacity="0.5"
                />
                <circle
                  cx={92 + index * 8}
                  cy={55 + index * 42}
                  r="3"
                  fill={index === 1 ? "#F26522" : stroke}
                />
                {Array.from({ length: 6 }, (_, bay) => (
                  <rect
                    key={bay}
                    x={112 + index * 8 + bay * 26}
                    y={46 + index * 42}
                    width="18"
                    height="18"
                    rx="2"
                    fill="#050E1B"
                  />
                ))}
              </g>
            ))}
          </g>
        ) : null}

        {variant === "signal" ? (
          <g fill="none" stroke={faint} strokeOpacity="0.5" strokeWidth="1.25">
            {[40, 70, 100, 130, 160].map((r, index) => (
              <circle
                key={r}
                cx="200"
                cy="240"
                r={r}
                strokeOpacity={0.5 - index * 0.07}
              />
            ))}
            <path d="M0 200h60l20-40 24 80 26-120 24 160 22-90 20 10h204" stroke={stroke} />
          </g>
        ) : null}
      </svg>

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          tone === "dark"
            ? "bg-gradient-to-tr from-navy-950 via-navy-950/55 to-transparent"
            : "bg-gradient-to-tr from-white via-white/50 to-transparent",
        )}
      />

      {icon ? (
        <span
          className={cn(
            "absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-lg backdrop-blur-sm",
            tone === "dark"
              ? "bg-white/10 text-white ring-1 ring-white/20"
              : "bg-navy-900 text-white",
          )}
        >
          <Icon name={icon} size={21} />
        </span>
      ) : null}
    </div>
  );
}
