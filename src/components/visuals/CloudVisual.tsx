/** Hybrid cloud: private and public platforms joined by consistent identity and
 *  networking, with workloads placed deliberately across both. */
export function CloudVisual({ className }: { className?: string }) {
  const workloads = [
    { label: "Databases", x: 60 },
    { label: "Line of business", x: 180 },
    { label: "Web & API", x: 300 },
    { label: "Analytics", x: 420 },
  ];

  return (
    <svg
      viewBox="0 0 540 440"
      className={className}
      role="img"
      aria-label="Diagram of a hybrid cloud: private and public platforms joined by shared identity and networking, with workloads placed across both"
    >
      <defs>
        <radialGradient id="cloud-glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#1F5BEF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1F5BEF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cloud-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A63" />
          <stop offset="100%" stopColor="#0A1730" />
        </linearGradient>
        <linearGradient id="cloud-public" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E44CC" />
          <stop offset="100%" stopColor="#0A2C80" />
        </linearGradient>
      </defs>

      <rect width="540" height="440" fill="url(#cloud-glow)" opacity="0.55" />

      {/* Private platform */}
      <g>
        <rect x="24" y="42" width="216" height="120" rx="14" fill="url(#cloud-body)" stroke="#33507D" strokeOpacity="0.6" />
        <text x="46" y="72" fill="#93A8C9" fontSize="10" fontFamily="Inter, system-ui, sans-serif" letterSpacing="1.6">PRIVATE</text>
        <text x="46" y="96" fill="#FFFFFF" fontSize="15" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">Owned platform</text>
        {/* mini racks */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={46 + i * 30} y="112" width="22" height="34" rx="3" fill="#050E1B" stroke="#33507D" strokeOpacity="0.5" />
            <rect x={50 + i * 30} y="118" width="14" height="3" rx="1.5" fill="#33507D" />
            <rect x={50 + i * 30} y="126" width="14" height="3" rx="1.5" fill="#33507D" />
            <circle cx={64 + i * 30} cy={140} r="1.8" fill={i === 1 ? "#F26522" : "#4ADE80"} />
          </g>
        ))}
      </g>

      {/* Public platform — cloud silhouette */}
      <g>
        <path
          d="M330 96a34 34 0 0 1 66-11 30 30 0 0 1 44 26 26 26 0 0 1-6 51h-96a33 33 0 0 1-8-66Z"
          fill="url(#cloud-public)"
          opacity="0.28"
        />
        <path
          d="M330 96a34 34 0 0 1 66-11 30 30 0 0 1 44 26 26 26 0 0 1-6 51h-96a33 33 0 0 1-8-66Z"
          fill="none"
          stroke="#4A82FB"
          strokeWidth="1.75"
        />
        <text x="398" y="72" fill="#7FAAFF" fontSize="10" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" letterSpacing="1.6">PUBLIC</text>
        <text x="398" y="130" fill="#FFFFFF" fontSize="14" fontWeight="600" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">Hyperscaler</text>
      </g>

      {/* Shared control plane joining both */}
      <path d="M132 168v26h276v-26" fill="none" stroke="#4A82FB" strokeOpacity="0.6" strokeWidth="1.75" />
      <rect x="150" y="196" width="240" height="52" rx="10" fill="#0A1730" stroke="#4A82FB" strokeOpacity="0.8" strokeWidth="1.5" />
      <text x="270" y="220" fill="#FFFFFF" fontSize="13" fontWeight="600" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">Shared identity & networking</text>
      <text x="270" y="238" fill="#93A8C9" fontSize="10.5" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">one directory · one policy · one view</text>

      {/* Down to workloads */}
      <path d="M270 254v22" stroke="#4A82FB" strokeOpacity="0.55" strokeWidth="1.75" fill="none" />
      <path d="M60 300h420" stroke="#33507D" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M270 276v24" stroke="#4A82FB" strokeOpacity="0.55" strokeWidth="1.75" fill="none" />

      <text x="270" y="292" fill="#5C7399" fontSize="10" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" letterSpacing="1.4">
        WORKLOADS PLACED BY REQUIREMENT
      </text>

      {/* Workload tiles */}
      {workloads.map((workload, index) => (
        <g key={workload.label}>
          <path d={`M${workload.x + 30} 300v18`} stroke="#33507D" strokeOpacity="0.6" strokeWidth="1.5" />
          <rect
            x={workload.x}
            y="318"
            width="60"
            height="52"
            rx="8"
            fill="#0D1E38"
            stroke={index % 2 === 0 ? "#33507D" : "#4A82FB"}
            strokeOpacity={index % 2 === 0 ? "0.55" : "0.7"}
          />
          <circle cx={workload.x + 30} cy="336" r="4" fill={index % 2 === 0 ? "#5C7399" : "#4A82FB"} />
          <text
            x={workload.x + 30}
            y="358"
            fill="#C2CFE4"
            fontSize="8.5"
            textAnchor="middle"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {workload.label}
          </text>
        </g>
      ))}

      {/* Legend */}
      <g transform="translate(60 392)">
        <rect width="10" height="10" rx="2" fill="#5C7399" />
        <text x="18" y="9" fill="#93A8C9" fontSize="10" fontFamily="Inter, system-ui, sans-serif">on private</text>
        <rect x="120" width="10" height="10" rx="2" fill="#4A82FB" />
        <text x="138" y="9" fill="#93A8C9" fontSize="10" fontFamily="Inter, system-ui, sans-serif">on public</text>
      </g>
    </svg>
  );
}
