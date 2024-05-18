import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pxPrimary: "#185CFF",
        pxSecondary: "#002B4E",
        pxBlack: "#292D33",
        pxTertiary: "#F0F9FF",
        pxHelperblue1: "#194060",
        pxHelperblue2: "#607D94",
        pxHelperblue3: "#C9DCEC",
        pxBackground: "#F1F6FA",
        pxGrey: "#9497A1",
      },
      boxShadow: {
        Button: "0px 12px 30px 0px rgba(24, 92, 255, 0.18);",
        Card1: "0px 2px 20px 17px rgba(24, 92, 255, 0.04);",
        Card2: "0px 12px 30px 17px rgba(24, 92, 255, 0.04);",
        Card3: "0px 4px 12px 0px rgba(12, 68, 204, 0.10);",
        DropDown:
          "0px 1px 2px 0px rgba(0, 43, 78, 0.30), 0px 2px 6px 0px rgba(0, 43, 78, 0.15);",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
