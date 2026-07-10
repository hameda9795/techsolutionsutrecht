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
        // Brand colors — sourced from CSS custom properties
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          dark: "var(--color-accent-dark)",
        },
        secondary: {
          DEFAULT: "var(--color-primary-light)",
          dark: "var(--color-primary)",
        },
        // Dark theme (legacy structural tokens)
        dark: {
          bg: {
            primary: "var(--color-bg)",
            secondary: "var(--color-surface)",
            tertiary: "var(--color-surface)",
            card: "var(--color-bg)",
          },
          text: {
            primary: "var(--color-ink)",
            secondary: "var(--color-muted)",
            muted: "var(--color-muted)",
          },
          border: {
            DEFAULT: "var(--color-border)",
            hover: "var(--color-border)",
          },
        },
        // Light theme (legacy structural tokens)
        light: {
          bg: {
            primary: "var(--color-bg)",
            secondary: "var(--color-surface)",
            tertiary: "var(--color-surface)",
            card: "var(--color-bg)",
          },
          text: {
            primary: "var(--color-ink)",
            secondary: "var(--color-muted)",
            muted: "var(--color-muted)",
          },
          border: {
            DEFAULT: "var(--color-border)",
          },
        },
        // Semantic
        success: "var(--color-success)",
        warning: "oklch(0.700 0.150 75)",
        error: "oklch(0.550 0.180 25)",
        info: "oklch(0.600 0.120 247)",
        whatsapp: "var(--color-whatsapp)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
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
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--color-muted)',
            h1: {
              color: 'var(--color-ink)',
            },
            h2: {
              color: 'var(--color-ink)',
            },
            h3: {
              color: 'var(--color-ink)',
            },
            h4: {
              color: 'var(--color-ink)',
            },
            strong: {
              color: 'var(--color-ink)',
            },
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-primary-dark)',
              },
            },
            code: {
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-surface)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'var(--color-surface)',
              code: {
                backgroundColor: 'transparent',
                padding: '0',
              },
            },
            blockquote: {
              borderLeftColor: 'var(--color-primary)',
              color: 'var(--color-muted)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
