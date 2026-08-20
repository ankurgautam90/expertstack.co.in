/** Cold-aisle view: two rack rows, containment, power and cooling annotations. */
export function DataCenterVisual({ className }: { className?: string }) {
  const rowA = Array.from({ length: 5 }, (_, index) => index);
  const rowB = Array.from({ length: 5 }, (_, index) => index);

  return (
    <svg
      viewBox="0 0 760 440"
      className={className}
      role="img"
      aria-label="Illustration of a data center cold aisle with two rack rows"
    >
      <defs>
        <linearGradient id="dc-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D1E38" />
          <stop offset="100%" stopColor="#050E1B" />
        </linearGradient>
        <linearGradient id="dc-aisle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F5BEF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1F5BEF" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="dc-rack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A63" />
          <stop offset="100%" stopColor="#0A1730" />
        </linearGradient>
      </defs>

      <rect width="760" height="440" fill="url(#dc-floor)" />

      {/* Raised floor grid in perspective */}
      <g stroke="#1E3A63" strokeOpacity="0.5" strokeWidth="1">
        {Array.from({ length: 9 }, (_, index) => (
          <path key={index} d={`M${60 + index * 80} 440 L${300 + index * 20} 250`} />
        ))}
        {Array.from({ length: 5 }, (_, index) => (
          <path key={`h-${index}`} d={`M0 ${268 + index * 44}h760`} />
        ))}
      </g>

      {/* Cold aisle light */}
      <path d="M300 250 460 250 640 440 120 440Z" fill="url(#dc-aisle)" />

      {/* Left rack row */}
      {rowA.map((index) => {
        const x = 46 + index * 46;
        const height = 190 - index * 6;
        const y = 250 - height + index * 4;
        return (
          <g key={`a-${index}`}>
            <rect x={x} y={y} width="40" height={height} rx="4" fill="url(#dc-rack)" />
            <rect
              x={x}
              y={y}
              width="40"
              height={height}
              rx="4"
              fill="none"
              stroke="#33507D"
              strokeOpacity="0.55"
            />
            {Array.from({ length: 9 }, (_, u) => (
              <rect
                key={u}
                x={x + 5}
                y={y + 10 + u * ((height - 24) / 9)}
                width="30"
                height="8"
                rx="1.5"
                fill="#050E1B"
              />
            ))}
            {Array.from({ length: 3 }, (_, led) => (
              <circle
                key={led}
                cx={x + 33}
                cy={y + 16 + led * 34}
                r="1.8"
                fill={led === 1 ? "#F26522" : "#4ADE80"}
              />
            ))}
          </g>
        );
      })}

      {/* Right rack row */}
      {rowB.map((index) => {
        const x = 674 - index * 46;
        const height = 190 - index * 6;
        const y = 250 - height + index * 4;
        return (
          <g key={`b-${index}`}>
            <rect x={x} y={y} width="40" height={height} rx="4" fill="url(#dc-rack)" />
            <rect
              x={x}
              y={y}
              width="40"
              height={height}
              rx="4"
              fill="none"
              stroke="#33507D"
              strokeOpacity="0.55"
            />
            {Array.from({ length: 9 }, (_, u) => (
              <rect
                key={u}
                x={x + 5}
                y={y + 10 + u * ((height - 24) / 9)}
                width="30"
                height="8"
                rx="1.5"
                fill="#050E1B"
              />
            ))}
            {Array.from({ length: 3 }, (_, led) => (
              <circle
                key={led}
                cx={x + 7}
                cy={y + 16 + led * 34}
                r="1.8"
                fill={led === 2 ? "#1F5BEF" : "#4ADE80"}
              />
            ))}
          </g>
        );
      })}

      {/* Containment roof */}
      <path
        d="M300 250 460 250"
        stroke="#4A82FB"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M46 60h140M574 60h140"
        stroke="#33507D"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Overhead busway + cable tray */}
      <rect x="30" y="34" width="700" height="10" rx="5" fill="#132A4A" />
      {Array.from({ length: 14 }, (_, index) => (
        <rect
          key={index}
          x={44 + index * 50}
          y="44"
          width="6"
          height="14"
          rx="2"
          fill={index % 4 === 0 ? "#F26522" : "#1E3A63"}
        />
      ))}

      {/* Cooling arrows rising through the aisle */}
      <g stroke="#4A82FB" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round">
        {[340, 380, 420].map((x, index) => (
          <path key={x} d={`M${x} ${400 - index * 10}v-70m0-14 6 10m-6-10-6 10`} />
        ))}
      </g>
    </svg>
  );
}
