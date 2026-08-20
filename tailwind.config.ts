import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      // Mirrors the default breakpoints, capping the widest track at 1320px.
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        // Primary — deep navy. The structural colour of the site.
        navy: {
          50: "#F2F5FA",
          100: "#E1E8F3",
          200: "#C2CFE4",
          300: "#93A8C9",
          400: "#5C7399",
          500: "#33507D",
          600: "#1E3A63",
          700: "#142B4C",
          800: "#0D1E38",
          900: "#081527",
          950: "#050E1B",
        },
        // Accent — strong modern blue. Primary interactive colour.
        accent: {
          50: "#EDF4FF",
          100: "#D7E6FF",
          200: "#B0CCFF",
          300: "#7FAAFF",
          400: "#4A82FB",
          500: "#1F5BEF",
          600: "#0E44CC",
          700: "#0A34A0",
          800: "#0A2C80",
          900: "#0C2867",
        },
        // Small warm accent — used sparingly for emphasis rules and numerals.
        ember: {
          400: "#FF9257",
          500: "#F26522",
          600: "#D24E11",
        },
        ink: {
          DEFAULT: "#0D1522",
          muted: "#4A5568",
          soft: "#6B7A90",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F7FA",
          sunken: "#EDF1F6",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Manrope",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-sm": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(8, 21, 39, 0.04), 0 8px 24px -12px rgba(8, 21, 39, 0.14)",
        "card-hover":
          "0 2px 4px rgba(8, 21, 39, 0.06), 0 24px 48px -20px rgba(8, 21, 39, 0.28)",
        menu: "0 24px 60px -24px rgba(8, 21, 39, 0.32)",
      },
      transitionTimingFunction: {
        enterprise: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "menu-in": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "sheen": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "menu-in": "menu-in 180ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up": "fade-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
        sheen: "sheen 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
