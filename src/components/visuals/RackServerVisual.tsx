/** Close elevation of a 2U rack server: bezel, drive carriers, status cluster. */
export function RackServerVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 320"
      className={className}
      role="img"
      aria-label="Illustration of a 2U enterprise rack server front panel"
    >
      <defs>
        <linearGradient id="srv-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A63" />
          <stop offset="55%" stopColor="#132A4A" />
          <stop offset="100%" stopColor="#0A1730" />
        </linearGradient>
        <linearGradient id="srv-bay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F2140" />
          <stop offset="100%" stopColor="#070F1F" />
        </linearGradient>
        <linearGradient id="srv-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Rack ears */}
      <rect x="8" y="46" width="26" height="228" rx="4" fill="#0D1E38" />
      <rect x="686" y="46" width="26" height="228" rx="4" fill="#0D1E38" />
      {[70, 250].map((y) => (
        <g key={y}>
          <circle cx="21" cy={y} r="4" fill="#33507D" />
          <circle cx="699" cy={y} r="4" fill="#33507D" />
        </g>
      ))}

      {/* Chassis */}
      <rect x="30" y="46" width="660" height="228" rx="8" fill="url(#srv-body)" />
      <rect
        x="30"
        y="46"
        width="660"
        height="228"
        rx="8"
        fill="none"
        stroke="#33507D"
        strokeOpacity="0.6"
      />
      <rect x="30" y="46" width="660" height="40" fill="url(#srv-sheen)" />

      {/* Left control bezel */}
      <rect x="46" y="62" width="58" height="196" rx="5" fill="#0A1730" />
      <circle cx="75" cy="90" r="9" fill="none" stroke="#1F5BEF" strokeWidth="2.5" />
      <path d="M75 84v10" stroke="#1F5BEF" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="62" y="112" width="26" height="4" rx="2" fill="#33507D" />
      <circle cx="68" cy="132" r="3.2" fill="#4ADE80" />
      <circle cx="82" cy="132" r="3.2" fill="#F26522" />
      <rect x="62" y="150" width="26" height="30" rx="3" fill="#050E1B" />
      {Array.from({ length: 4 }, (_, i) => (
        <rect key={i} x="65" y={155 + i * 7} width="20" height="2" rx="1" fill="#1E3A63" />
      ))}
      <rect x="62" y="196" width="26" height="46" rx="3" fill="#050E1B" />

      {/* Drive bays — 2 rows × 8 */}
      {Array.from({ length: 16 }, (_, index) => {
        const col = index % 8;
        const row = Math.floor(index / 8);
        const x = 122 + col * 62;
        const y = 66 + row * 100;
        return (
          <g key={index}>
            <rect
              x={x}
              y={y}
              width="54"
              height="92"
              rx="4"
              fill="url(#srv-bay)"
              stroke="#33507D"
              strokeOpacity="0.45"
            />
            {/* Carrier handle */}
            <rect x={x + 8} y={y + 12} width="26" height="5" rx="2.5" fill="#5C7399" />
            <rect x={x + 8} y={y + 24} width="16" height="3" rx="1.5" fill="#33507D" />
            {/* Vent slots */}
            {Array.from({ length: 5 }, (_, v) => (
              <rect
                key={v}
                x={x + 8}
                y={y + 44 + v * 8}
                width="38"
                height="3"
                rx="1.5"
                fill="#132A4A"
              />
            ))}
            <circle
              cx={x + 44}
              cy={y + 16}
              r="2.6"
              fill={index % 4 === 0 ? "#1F5BEF" : "#4ADE80"}
            />
          </g>
        );
      })}

      {/* Right ventilation grille */}
      <rect x="622" y="62" width="54" height="196" rx="5" fill="#0A1730" />
      <g opacity="0.65">
        {Array.from({ length: 40 }, (_, index) => (
          <circle
            key={index}
            cx={634 + (index % 5) * 10}
            cy={74 + Math.floor(index / 5) * 22}
            r="3"
            fill="#132A4A"
          />
        ))}
      </g>

      {/* Baseline reflection */}
      <rect x="60" y="286" width="600" height="10" rx="5" fill="#050E1B" opacity="0.12" />
    </svg>
  );
}
