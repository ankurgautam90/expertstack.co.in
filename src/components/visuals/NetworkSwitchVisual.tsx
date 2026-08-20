/** A 48-port managed switch face with uplink cage and link activity. */
export function NetworkSwitchVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 260"
      className={className}
      role="img"
      aria-label="Illustration of a 48-port managed network switch"
    >
      <defs>
        <linearGradient id="sw-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A63" />
          <stop offset="100%" stopColor="#0A1730" />
        </linearGradient>
        <linearGradient id="sw-link" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1F5BEF" stopOpacity="0" />
          <stop offset="45%" stopColor="#4A82FB" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1F5BEF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Uplink topology above the unit */}
      <g stroke="#33507D" strokeOpacity="0.55" strokeWidth="1.5" fill="none">
        <path d="M360 24v22M360 46c-90 0-140 0-200 24M360 46c90 0 140 0 200 24" />
      </g>
      <circle cx="360" cy="20" r="9" fill="#0D1E38" stroke="#4A82FB" strokeWidth="1.5" />
      <circle cx="160" cy="72" r="6" fill="#0D1E38" stroke="#33507D" strokeWidth="1.5" />
      <circle cx="560" cy="72" r="6" fill="#0D1E38" stroke="#33507D" strokeWidth="1.5" />

      {/* Chassis */}
      <rect x="18" y="96" width="684" height="112" rx="8" fill="url(#sw-body)" />
      <rect
        x="18"
        y="96"
        width="684"
        height="112"
        rx="8"
        fill="none"
        stroke="#33507D"
        strokeOpacity="0.6"
      />

      {/* Rack ears */}
      <rect x="4" y="104" width="16" height="96" rx="3" fill="#0D1E38" />
      <rect x="700" y="104" width="16" height="96" rx="3" fill="#0D1E38" />

      {/* Status cluster */}
      <rect x="34" y="114" width="52" height="76" rx="4" fill="#050E1B" />
      <circle cx="48" cy="130" r="3" fill="#4ADE80" />
      <circle cx="48" cy="146" r="3" fill="#1F5BEF" />
      <circle cx="48" cy="162" r="3" fill="#F26522" />
      <rect x="60" y="126" width="18" height="2.5" rx="1.25" fill="#33507D" />
      <rect x="60" y="142" width="18" height="2.5" rx="1.25" fill="#33507D" />
      <rect x="60" y="158" width="18" height="2.5" rx="1.25" fill="#33507D" />
      <rect x="40" y="174" width="38" height="8" rx="2" fill="#0D1E38" />

      {/* 48 copper ports, 2 rows × 24 */}
      {Array.from({ length: 48 }, (_, index) => {
        const col = index % 24;
        const row = Math.floor(index / 24);
        const x = 100 + col * 21;
        const y = 118 + row * 38;
        const active = [2, 5, 9, 14, 18, 27, 31, 38, 44].includes(index);
        return (
          <g key={index}>
            <rect
              x={x}
              y={y}
              width="16"
              height="30"
              rx="2"
              fill="#050E1B"
              stroke="#33507D"
              strokeOpacity="0.4"
            />
            <rect x={x + 4} y={y + 3} width="8" height="10" rx="1" fill="#0F2140" />
            <circle
              cx={x + 8}
              cy={y + 23}
              r="2.2"
              fill={active ? "#4ADE80" : "#1E3A63"}
              className={active ? "animate-pulse-soft" : undefined}
            />
          </g>
        );
      })}

      {/* SFP+ uplink cage */}
      <rect x="608" y="114" width="80" height="76" rx="4" fill="#050E1B" />
      {Array.from({ length: 4 }, (_, index) => (
        <g key={index}>
          <rect
            x={616 + (index % 2) * 36}
            y={122 + Math.floor(index / 2) * 34}
            width="30"
            height="26"
            rx="2"
            fill="#0F2140"
            stroke="#33507D"
            strokeOpacity="0.5"
          />
          <rect
            x={622 + (index % 2) * 36}
            y={130 + Math.floor(index / 2) * 34}
            width="18"
            height="4"
            rx="2"
            fill={index === 0 ? "#F26522" : "#1E3A63"}
          />
        </g>
      ))}

      {/* Link sheen sweeping the port bank */}
      <rect x="100" y="150" width="504" height="2" fill="url(#sw-link)" opacity="0.7" />

      {/* Downlinks */}
      <g stroke="#33507D" strokeOpacity="0.45" strokeWidth="1.5" fill="none">
        <path d="M200 208v20M360 208v30M520 208v20" />
      </g>
      <rect x="176" y="228" width="48" height="18" rx="3" fill="#0D1E38" />
      <rect x="330" y="238" width="60" height="18" rx="3" fill="#0D1E38" />
      <rect x="496" y="228" width="48" height="18" rx="3" fill="#0D1E38" />
    </svg>
  );
}
