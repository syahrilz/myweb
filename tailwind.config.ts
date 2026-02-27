import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        terminal: {
          bg: "#0a0a0a",
          border: "#2a2a2a",
          green: "#4ade80",
          cyan: "#22d3ee",
          orange: "#f97316",
          body: "#d1d5db",
          muted: "#6b7280",
        },
      },
    },
  },
  plugins: [],
};

export default config;
