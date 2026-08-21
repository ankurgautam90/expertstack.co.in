/**
 * The integration story as one drawing: seven layers, connected top to bottom,
 * with the integration spine running through them. Replaces hardware imagery as
 * the primary visual language of the site.
 */
const LAYERS = [
  { label: "Applications", detail: "ERP · ITSM · line of business", accent: false },
  { label: "APIs & Integration", detail: "contracts · middleware · events", accent: true },
  { label: "Identity", detail: "directory · MFA · privileged access", accent: false },
  { label: "Cloud & Data Center", detail: "private · public · hybrid", accent: false },
  { label: "Network", detail: "campus · WAN · segmentation", accent: false },
  { label: "Security", detail: "controls · inspection · monitoring", accent: true },
  { label: "Infrastructure", detail: "compute · storage · platforms", accent: false },
];

export function IntegrationStackVisual({ className }: { className?: string }) {
  const bandHeight = 52;
  const gap = 14;
  const top = 26;

  return (
    <svg
      viewBox="0 0 720 500"
      className={className}
      role="img"
      aria-label="Architecture diagram: applications, APIs, identity, cloud, network, security and infrastructure connected as one environment"
    >
      <defs>
        <linearGradient id="int-band" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#132A4A" />
          <stop offset="100%" stopColor="#0A1730" />
        </linearGradient>
        <linearGradient id="int-band-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A34A0" />
          <stop offset="100%" stopColor="#0F2140" />
        </linearGradient>
        <linearGradient id="int-spine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A82FB" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#4A82FB" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4A82FB" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Integration spine */}
      <rect x="62" y={top} width="2.5" height={LAYERS.length * (bandHeight + gap) - gap} fill="url(#int-spine)" />

      {LAYERS.map((layer, index) => {
        const y = top + index * (bandHeight + gap);
        const cy = y + bandHeight / 2;

        return (
          <g key={layer.label}>
            {/* Spine node */}
            <circle
              cx="63"
              cy={cy}
              r={layer.accent ? 7 : 5}
              fill="#0A1730"
              stroke={layer.accent ? "#4A82FB" : "#33507D"}
              strokeWidth="2"
            />
            {layer.accent ? <circle cx="63" cy={cy} r="2.5" fill="#4A82FB" /> : null}

            {/* Connector into the band */}
            <path
              d={`M70 ${cy}h28`}
              stroke="#33507D"
              strokeOpacity="0.7"
              strokeWidth="1.5"
            />

            {/* Band */}
            <rect
              x="98"
              y={y}
              width="596"
              height={bandHeight}
              rx="8"
              fill={layer.accent ? "url(#int-band-accent)" : "url(#int-band)"}
              stroke={layer.accent ? "#4A82FB" : "#33507D"}
              strokeOpacity={layer.accent ? "0.75" : "0.45"}
            />

            <text
              x="122"
              y={cy - 2}
              fill="#FFFFFF"
              fontSize="15"
              fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {layer.label}
            </text>
            <text
              x="122"
              y={cy + 15}
              fill="#93A8C9"
              fontSize="11"
              fontFamily="Inter, system-ui, sans-serif"
              letterSpacing="0.4"
            >
              {layer.detail}
            </text>

            {/* Right-hand status ticks */}
            {[0, 1, 2].map((tick) => (
              <rect
                key={tick}
                x={630 + tick * 14}
                y={cy - 4}
                width="8"
                height="8"
                rx="2"
                fill={layer.accent ? "#4A82FB" : "#1E3A63"}
                opacity={layer.accent ? 0.9 - tick * 0.25 : 0.8 - tick * 0.2}
              />
            ))}

            {/* Flow arrow to the next band */}
            {index < LAYERS.length - 1 ? (
              <path
                d={`M396 ${y + bandHeight + 2}v${gap - 5}m0 0-4-4m4 4 4-4`}
                stroke="#4A82FB"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
