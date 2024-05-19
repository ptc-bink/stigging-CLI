import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cdark-100": "#16171B",
        "cdark-200": "#202125",
        "cgrey-100": "#1D1E22",
        "cgrey-200": "#292A2E",
        "cgrey-900": "#939393",
        "cblue-500": "#5865F2",
      }
    },
  },
  darkMode: "class",
};