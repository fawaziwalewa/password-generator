import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#24232C",
        mutedPurple: "#817D92",
        lightGray: "#E6E5EA",
        deepBlack: "#18171F",
        neonGreen: "#A4FFAF",
        softRed: "#F64A4A",
        warmOrange: "#FB7C58",
        goldenYellow: "#F8CD65",
      },
    },
  },
  plugins: [],
} satisfies Config;
