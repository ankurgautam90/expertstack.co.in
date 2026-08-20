/**
 * Original vector artwork — a populated 42U-style rack, front elevation.
 * Drawn rather than photographed so the imagery stays on-brand, weighs nothing
 * and carries no licensing baggage. Replace with photography if desired.
 */
export function ServerRackVisual({ className }: { className?: string }) {
  const units = Array.from({ length: 11 }, (_, index) => index);

  return (
    <svg
      viewBox="0 0 420 540"
      className={className}
      role="img"
      aria-label="Illustration of a populated enterprise server rack"
    >
      <defs>
        <linearGradient id="rack-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#142B4C" />
          <stop offset="100%" stopColor="#050E1B" />
        </linearGradient>
        <linearGradient id="rack-unit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A63" />
          <stop offset="100%" stopColor="#0D1E38" />
        </linearGradient>
        <linearGradient id="rack-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F5BEF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1F5BEF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Floor shadow */}
      <ellipse cx="210" cy="518" rx="150" ry="14" fill="#050E1B" opacity="0.18" />

      {/* Cabinet */}
      <rect x="26" y="18" width="368" height="484" rx="10" fill="url(#rack-frame)" />
      <rect
        x="26"
        y="18"
        width="368"
        height="484"
        rx="10"
        fill="none"
        stroke="#33507D"
        strokeOpacity="0.55"
      />
      <rect x="42" y="34" width="336" height="452" rx="5" fill="#050E1B" />

      {/* Mounting rails */}
      {[48, 366].map((x) => (
        <rect key={x} x={x} y="40" width="6" height="440" rx="3" fill="#1E3A63" />
      ))}

      {/* Rack units */}
      {units.map((index) => {
        const y = 48 + index * 40;
        const isStorage = index === 3 || index === 7;
        const isSwitch = index === 0 || index === 5;

        return (
          <g key={index}>
            <rect
              x="58"
              y={y}
              width="304"
              height="32"
              rx="3"
              fill="url(#rack-unit)"
              stroke="#33507D"
              strokeOpacity="0.4"
            />

            {isSwitch ? (
              <>
                {/* Switch face: two rows of ports */}
                {Array.from({ length: 16 }, (_, port) => (
                  <g key={port}>
                    <rect
                      x={74 + port * 15}
                      y={y + 7}
                      width="9"
                      height="7"
                      rx="1"
                      fill="#050E1B"
                    />
                    <rect
                      x={74 + port * 15}
                      y={y + 18}
                      width="9"
                      height="7"
                      rx="1"
                      fill="#050E1B"
                    />
                  </g>
                ))}
                <circle cx="330" cy={y + 11} r="2.4" fill="#4ADE80" />
                <circle cx="330" cy={y + 22} r="2.4" fill="#1F5BEF" />
                <rect x="342" y={y + 8} width="12" height="16" rx="2" fill="#F26522" />
              </>
            ) : isStorage ? (
              <>
                {/* Storage shelf: dense drive carriers */}
                {Array.from({ length: 12 }, (_, bay) => (
                  <g key={bay}>
                    <rect
                      x={70 + bay * 24}
                      y={y + 5}
                      width="20"
                      height="22"
                      rx="2"
                      fill="#0D1E38"
                      stroke="#33507D"
                      strokeOpacity="0.5"
                    />
                    <rect
                      x={73 + bay * 24}
                      y={y + 9}
                      width="8"
                      height="2"
                      rx="1"
                      fill="#5C7399"
                    />
                    <circle
                      cx={85 + bay * 24}
                      cy={y + 22}
                      r="1.6"
                      fill={bay % 3 === 0 ? "#4ADE80" : "#33507D"}
                    />
                  </g>
                ))}
              </>
            ) : (
              <>
                {/* Server face: bezel, drive bays, status cluster */}
                <rect x="62" y={y + 4} width="10" height="24" rx="2" fill="#0D1E38" />
                <circle cx="67" cy={y + 10} r="1.6" fill="#1F5BEF" />
                <circle cx="67" cy={y + 16} r="1.6" fill="#4ADE80" />
                {Array.from({ length: 8 }, (_, bay) => (
                  <rect
                    key={bay}
                    x={80 + bay * 28}
                    y={y + 6}
                    width="22"
                    height="20"
                    rx="2"
                    fill="#0D1E38"
                    stroke="#33507D"
                    strokeOpacity="0.45"
                  />
                ))}
                {Array.from({ length: 8 }, (_, bay) => (
                  <rect
                    key={`h-${bay}`}
                    x={84 + bay * 28}
                    y={y + 10}
                    width="9"
                    height="2"
                    rx="1"
                    fill="#5C7399"
                  />
                ))}
                <rect x="310" y={y + 8} width="34" height="16" rx="2" fill="#050E1B" />
                <circle cx="352" cy={y + 16} r="3.2" fill="#F26522" opacity="0.9" />
              </>
            )}
          </g>
        );
      })}

      {/* Cooling glow rising through the cabinet */}
      <rect x="42" y="34" width="336" height="180" fill="url(#rack-glow)" opacity="0.35" />

      {/* Perforated base panel */}
      <g opacity="0.5">
        {Array.from({ length: 24 }, (_, index) => (
          <circle
            key={index}
            cx={70 + (index % 12) * 26}
            cy={488 + Math.floor(index / 12) * 8}
            r="2"
            fill="#1E3A63"
          />
        ))}
      </g>
    </svg>
  );
}
