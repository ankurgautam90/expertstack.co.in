import type { SVGProps } from "react";

/**
 * One line-icon set for the whole site: 24×24 grid, 1.5 stroke, currentColor.
 * Keeping them in a single map means every icon shares the same optical weight.
 */
const paths = {
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M6.5 7h.01M6.5 17h.01" />
      <path d="M10 7h5M10 17h5" />
    </>
  ),
  network: (
    <>
      <rect x="3" y="15" width="18" height="5" rx="1.5" />
      <path d="M12 4v6M7 10V8.5A1.5 1.5 0 0 1 8.5 7h7A1.5 1.5 0 0 1 17 8.5V10" />
      <circle cx="12" cy="3.5" r="1.5" />
      <path d="M7 10v5M12 10v5M17 10v5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.6 7 9.5 4.1-1.9 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.9L15 10" />
    </>
  ),
  storage: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </>
  ),
  datacenter: (
    <>
      <rect x="3" y="3" width="7" height="18" rx="1.5" />
      <rect x="14" y="3" width="7" height="18" rx="1.5" />
      <path d="M5.5 7h2M5.5 11h2M5.5 15h2M16.5 7h2M16.5 11h2M16.5 15h2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  cable: (
    <>
      <path d="M5 3v4a3 3 0 0 0 3 3h1a3 3 0 0 1 3 3v3" />
      <rect x="3" y="17" width="6" height="4" rx="1" />
      <rect x="15" y="3" width="6" height="4" rx="1" />
      <path d="M18 7v3a4 4 0 0 1-4 4" />
    </>
  ),
  blueprint: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M9 9v11M9 14h6" />
    </>
  ),
  migrate: (
    <>
      <path d="M3 8h11M10.5 4.5 14 8l-3.5 3.5" />
      <path d="M21 16H10M13.5 12.5 10 16l3.5 3.5" />
    </>
  ),
  support: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </>
  ),
  bank: (
    <>
      <path d="m12 3 9 4.5H3L12 3Z" />
      <path d="M5.5 11v6M10 11v6M14 11v6M18.5 11v6" />
      <path d="M3 20.5h18" />
    </>
  ),
  government: (
    <>
      <path d="M4 20.5h16M5 20.5V9l7-5 7 5v11.5" />
      <path d="M9.5 20.5v-6h5v6" />
      <path d="M12 8.5h.01" />
    </>
  ),
  health: (
    <>
      <rect x="3.5" y="5.5" width="17" height="14" rx="2" />
      <path d="M12 9v7M8.5 12.5h7" />
      <path d="M8.5 5.5V3.5h7v2" />
    </>
  ),
  education: (
    <>
      <path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z" />
      <path d="M7 11v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5" />
      <path d="M21 8.5V14" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20.5h18" />
      <path d="M3 20.5V10l6 3.5V10l6 3.5V6h6v14.5" />
      <path d="M18 10.5h.01M18 15h.01" />
    </>
  ),
  code: (
    <>
      <path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  retail: (
    <>
      <path d="M4 8h16l-1 12.5H5L4 8Z" />
      <path d="M8.5 10.5V7a3.5 3.5 0 0 1 7 0v3.5" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="17.5" rx="1.5" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
      <path d="M10 20.5v-2.5h4v2.5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.4 2.5L15.5 9.5" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 11 4-4 3 1 2-1 2 1 3-1 4 4-3.5 4-2-2" />
      <path d="m8.5 15 2 2 2-2 2 2" />
      <path d="M6.5 14.5 9 17" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <rect x="5.5" y="11" width="3.5" height="6" rx="1" />
      <rect x="11" y="7" width="3.5" height="10" rx="1" />
      <rect x="16.5" y="13" width="3.5" height="4" rx="1" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <>
      <path d="M5 3.5h3.5l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V17a2.5 2.5 0 0 1-2.7 2.5A16 16 0 0 1 2.5 6.2 2.5 2.5 0 0 1 5 3.5Z" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  arrowRight: <path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5" />,
  arrowUpRight: <path d="M7 17 17 7m0 0h-7m7 0v7" />,
  chevronDown: <path d="m6 9.5 6 5.5 6-5.5" />,
  bolt: <path d="M13 3 5.5 13.5H11l-1 7.5L18.5 10H13l1-7Z" />,
  gauge: (
    <>
      <path d="M4 17a8.5 8.5 0 1 1 16 0" />
      <path d="m12 13 4-3.5" />
      <circle cx="12" cy="14" r="1.5" />
    </>
  ),
  cooling: (
    <>
      <path d="M12 3v18M4 7.5l16 9M20 7.5l-16 9" />
      <path d="m9.5 4.5 2.5 2 2.5-2M9.5 19.5l2.5-2 2.5 2" />
    </>
  ),
  power: (
    <>
      <path d="M12 3v9" />
      <path d="M7 6.5a7 7 0 1 0 10 0" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.75" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 8a8.5 8.5 0 0 0-15-1.5M4 16a8.5 8.5 0 0 0 15 1.5" />
      <path d="M20 3.5V8h-4.5M4 20.5V16h4.5" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.5h10a4 4 0 0 0 .6-7.96 6 6 0 0 0-11.53-1.3A3.75 3.75 0 0 0 7 18.5Z" />
    </>
  ),
  api: (
    <>
      <path d="M8 5.5 4 12l4 6.5M16 5.5 20 12l-4 6.5" />
      <circle cx="12" cy="12" r="1.6" />
      <path d="M12 5.5v3M12 15.5v3" />
    </>
  ),
  identity: (
    <>
      <circle cx="10" cy="8.5" r="3.5" />
      <path d="M3.5 20a6.5 6.5 0 0 1 10.2-5.35" />
      <path d="M17.5 12.5 21 14v3c0 2-1.6 3.4-3.5 4-1.9-.6-3.5-2-3.5-4v-3l3.5-1.5Z" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="4.5" width="19" height="13" rx="2" />
      <path d="m6 12 3-3 2.5 3.5L14 10l4 4" />
      <path d="M9 20.5h6M12 17.5v3" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3.5" width="6" height="5" rx="1.5" />
      <rect x="15" y="3.5" width="6" height="5" rx="1.5" />
      <rect x="9" y="15.5" width="6" height="5" rx="1.5" />
      <path d="M6 8.5v3a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 11.5v-3M12 13v2.5" />
    </>
  ),
  apps: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>
  ),
  scale: (
    <>
      <path d="M4 20V9M10 20V4M16 20v-7M22 20V7" />
      <path d="M2 20h20" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  /** Pixel size for both axes. */
  size?: number;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
