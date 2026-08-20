/** Segmentation diagram: untrusted edge, inspection point, trusted zones. */
export function SecurityVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 420"
      className={className}
      role="img"
      aria-label="Diagram of a segmented network protected by a firewall"
    >
      <defs>
        <radialGradient id="sec-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#1F5BEF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1F5BEF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sec-shield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A82FB" />
          <stop offset="100%" stopColor="#0A34A0" />
        </linearGradient>
      </defs>

      <rect width="520" height="420" fill="url(#sec-glow)" opacity="0.6" />

      {/* Untrusted traffic arriving */}
      <g stroke="#5C7399" strokeOpacity="0.5" strokeWidth="1.5" fill="none">
        {[70, 110, 150].map((y, index) => (
          <path key={y} d={`M20 ${y}h${120 + index * 14}`} strokeDasharray="4 6" />
        ))}
      </g>
      {[70, 110, 150].map((y, index) => (
        <circle
          key={y}
          cx={20 + index * 6}
          cy={y}
          r="3.5"
          fill={index === 1 ? "#F26522" : "#5C7399"}
        />
      ))}
      <text
        x="20"
        y="44"
        fill="#93A8C9"
        fontSize="11"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="1.6"
      >
        UNTRUSTED
      </text>

      {/* Inspection plane */}
      <rect
        x="176"
        y="40"
        width="168"
        height="340"
        rx="12"
        fill="#0A1730"
        stroke="#33507D"
        strokeOpacity="0.6"
      />
      <g opacity="0.35" stroke="#33507D" strokeWidth="1">
        {Array.from({ length: 8 }, (_, index) => (
          <path key={index} d={`M176 ${72 + index * 40}h168`} />
        ))}
      </g>

      {/* Shield */}
      <g transform="translate(260 178)">
        <path
          d="M0-64 56-38v40C56 40 32 70 0 84-32 70-56 40-56 2v-40L0-64Z"
          fill="url(#sec-shield)"
          opacity="0.18"
        />
        <path
          d="M0-64 56-38v40C56 40 32 70 0 84-32 70-56 40-56 2v-40L0-64Z"
          fill="none"
          stroke="#4A82FB"
          strokeWidth="2"
        />
        <path
          d="m-20 6 14 15L24-14"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="260"
        y="322"
        fill="#FFFFFF"
        fontSize="12"
        fontWeight="600"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="1.4"
      >
        INSPECTION
      </text>
      <text
        x="260"
        y="344"
        fill="#93A8C9"
        fontSize="10.5"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
      >
        IPS · VPN · Policy · Logging
      </text>

      {/* Trusted zones */}
      {[
        { y: 70, label: "SERVER ZONE" },
        { y: 160, label: "USER ZONE" },
        { y: 250, label: "DMZ" },
        { y: 340, label: "REMOTE ACCESS" },
      ].map((zone, index) => (
        <g key={zone.label}>
          <path
            d={`M344 ${210 - index * 6}C384 ${210 - index * 6} 384 ${zone.y + 22} 404 ${zone.y + 22}`}
            fill="none"
            stroke="#1F5BEF"
            strokeOpacity="0.55"
            strokeWidth="1.5"
          />
          <rect
            x="404"
            y={zone.y}
            width="96"
            height="46"
            rx="7"
            fill="#0D1E38"
            stroke="#33507D"
            strokeOpacity="0.7"
          />
          <circle cx="418" cy={zone.y + 23} r="4" fill="#4ADE80" />
          <text
            x="430"
            y={zone.y + 27}
            fill="#C2CFE4"
            fontSize="9"
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="1"
          >
            {zone.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
