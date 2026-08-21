/** Application integration flow: two systems joined through an API layer, with
 *  the database and reporting that hang off it. */
export function AppFlowVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 300"
      className={className}
      role="img"
      aria-label="Diagram: application A and application B connected through an API and integration layer, feeding a database and analytics"
    >
      <defs>
        <linearGradient id="flow-node" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A63" />
          <stop offset="100%" stopColor="#0A1730" />
        </linearGradient>
        <linearGradient id="flow-layer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A34A0" />
          <stop offset="100%" stopColor="#0E44CC" />
        </linearGradient>
        <marker id="flow-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 1l6 3-6 3z" fill="#4A82FB" />
        </marker>
      </defs>

      {/* Application A */}
      <rect x="24" y="40" width="150" height="70" rx="10" fill="url(#flow-node)" stroke="#33507D" strokeOpacity="0.6" />
      <text x="99" y="70" fill="#FFFFFF" fontSize="14" fontWeight="600" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">Application A</text>
      <text x="99" y="90" fill="#93A8C9" fontSize="11" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">system of record</text>

      {/* Application B */}
      <rect x="586" y="40" width="150" height="70" rx="10" fill="url(#flow-node)" stroke="#33507D" strokeOpacity="0.6" />
      <text x="661" y="70" fill="#FFFFFF" fontSize="14" fontWeight="600" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">Application B</text>
      <text x="661" y="90" fill="#93A8C9" fontSize="11" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">consuming system</text>

      {/* Integration layer */}
      <rect x="230" y="30" width="300" height="90" rx="12" fill="url(#flow-layer)" opacity="0.22" />
      <rect x="230" y="30" width="300" height="90" rx="12" fill="none" stroke="#4A82FB" strokeWidth="1.75" />
      <text x="380" y="62" fill="#FFFFFF" fontSize="15" fontWeight="600" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">API / Integration Layer</text>
      <text x="380" y="83" fill="#B0CCFF" fontSize="11" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">contracts · transformation · retry</text>
      <text x="380" y="102" fill="#7FAAFF" fontSize="10" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" letterSpacing="1.2">AUTHENTICATED · LOGGED · MONITORED</text>

      {/* Horizontal flows */}
      <path d="M180 75h42" stroke="#4A82FB" strokeWidth="1.75" markerEnd="url(#flow-arrow)" fill="none" />
      <path d="M538 75h42" stroke="#4A82FB" strokeWidth="1.75" markerEnd="url(#flow-arrow)" fill="none" />

      {/* Down to database */}
      <path d="M380 126v34" stroke="#4A82FB" strokeWidth="1.75" markerEnd="url(#flow-arrow)" fill="none" />

      {/* Database */}
      <g transform="translate(300 168)">
        <ellipse cx="80" cy="14" rx="80" ry="14" fill="#132A4A" stroke="#33507D" strokeOpacity="0.6" />
        <path d="M0 14v34c0 7.7 35.8 14 80 14s80-6.3 80-14V14" fill="#0F2140" stroke="#33507D" strokeOpacity="0.6" />
        <ellipse cx="80" cy="48" rx="80" ry="14" fill="none" stroke="#33507D" strokeOpacity="0.4" />
        <text x="80" y="42" fill="#C2CFE4" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">Database</text>
      </g>

      {/* Down to analytics */}
      <path d="M380 246v18" stroke="#4A82FB" strokeWidth="1.75" markerEnd="url(#flow-arrow)" fill="none" />
      <rect x="272" y="268" width="216" height="26" rx="6" fill="#0D1E38" stroke="#33507D" strokeOpacity="0.6" />
      <text x="380" y="286" fill="#C2CFE4" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif">Analytics / Reporting</text>

      {/* Side annotations */}
      <text x="99" y="150" fill="#5C7399" fontSize="10" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" letterSpacing="1">NO MANUAL EXPORT</text>
      <text x="661" y="150" fill="#5C7399" fontSize="10" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" letterSpacing="1">NO RE-KEYING</text>
    </svg>
  );
}
