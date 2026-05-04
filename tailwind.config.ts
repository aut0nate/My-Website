import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#111218",
        panel: "#171922",
        ink: "#f4f7fb",
        muted: "#aeb7c5",
        line: "rgba(255,255,255,0.16)",
        accent: "#7dd3fc"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(3, 7, 18, 0.45)"
      },
      backgroundImage: {
        "pixel-grid":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
