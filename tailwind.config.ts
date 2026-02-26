import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          DEFAULT: "#FF5722",
          light: "#FF8A65",
          dark: "#E64A19",
        },
        secondary: {
          DEFAULT: "#7C4DFF",
          light: "#B388FF",
          dark: "#651FFF",
        },
        accent: {
          DEFAULT: "#00E5FF",
          light: "#6EFFFF",
        },
        // Dark theme
        dark: {
          bg: {
            primary: "#0D1117",
            secondary: "#161B22",
            tertiary: "#21262D",
            card: "#1C2128",
          },
          text: {
            primary: "#F0F6FC",
            secondary: "#8B949E",
            muted: "#6E7681",
          },
          border: {
            DEFAULT: "#30363D",
            hover: "#8B949E",
          },
        },
        // Light theme
        light: {
          bg: {
            primary: "#FFFFFF",
            secondary: "#F6F8FA",
            tertiary: "#EAEEF2",
            card: "#FFFFFF",
          },
          text: {
            primary: "#1F2328",
            secondary: "#656D76",
            muted: "#8C959F",
          },
          border: {
            DEFAULT: "#D0D7DE",
          },
        },
        // Semantic
        success: "#238636",
        warning: "#F0883E",
        error: "#DA3633",
        info: "#58A6FF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "mesh-move": "meshMove 20s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        meshMove: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(30px, -30px)" },
          "66%": { transform: "translate(-20px, 20px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-mesh": `
          radial-gradient(ellipse at 20% 20%, rgba(255, 87, 34, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(124, 77, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 70%)
        `,
      },
    },
  },
  plugins: [],
};

export default config;
