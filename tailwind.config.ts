import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          950: "var(--color-primary-950)",
          5000: "rgba(var(--color-primary-500), 0.05)", // Custom color with opacity 5%
          50010: "rgba(var(--color-primary-500), 0.10)", // Custom color with opacity 10%
          50020: "rgba(var(--color-primary-500), 0.20)", // Custom color with opacity 20%
          50030: "rgba(var(--color-primary-500), 0.30)", // Custom color with opacity 30%
          50040: "rgba(var(--color-primary-500), 0.40)", // Custom color with opacity 40%
          50050: "rgba(var(--color-primary-500), 0.50)", // Custom color with opacity 50%
          50060: "rgba(var(--color-primary-500), 0.60)", // Custom color with opacity 60%
          50070: "rgba(var(--color-primary-500), 0.70)", // Custom color with opacity 70%
          50080: "rgba(var(--color-primary-500), 0.80)", // Custom color with opacity 80%
          50090: "rgba(var(--color-primary-500), 0.90)", // Custom color with opacity 90%
        },
        secondary: {
          50: "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
          950: "var(--color-secondary-950)",
        },
        info: {
          50: "var(--color-info-50)",
          100: "var(--color-info-100)",
          200: "var(--color-info-200)",
          300: "var(--color-info-300)",
          400: "var(--color-info-400)",
          500: "var(--color-info-500)",
          600: "var(--color-info-600)",
          700: "var(--color-info-700)",
          800: "var(--color-info-800)",
          900: "var(--color-info-900)",
          950: "var(--color-info-950)",
        },
        success: {
          50: "var(--color-success-50)",
          100: "var(--color-success-100)",
          200: "var(--color-success-200)",
          300: "var(--color-success-300)",
          400: "var(--color-success-400)",
          500: "var(--color-success-500)",
          600: "var(--color-success-600)",
          700: "var(--color-success-700)",
          800: "var(--color-success-800)",
          900: "var(--color-success-900)",
          950: "var(--color-success-950)",
        },
        warning: {
          50: "var(--color-warning-50)",
          100: "var(--color-warning-100)",
          200: "var(--color-warning-200)",
          300: "var(--color-warning-300)",
          400: "var(--color-warning-400)",
          500: "var(--color-warning-500)",
          600: "var(--color-warning-600)",
          700: "var(--color-warning-700)",
          800: "var(--color-warning-800)",
          900: "var(--color-warning-900)",
          950: "var(--color-warning-950)",
        },
        error: {
          50: "var(--color-error-50)",
          100: "var(--color-error-100)",
          200: "var(--color-error-200)",
          300: "var(--color-error-300)",
          400: "var(--color-error-400)",
          500: "var(--color-error-500)",
          600: "var(--color-error-600)",
          700: "var(--color-error-700)",
          800: "var(--color-error-800)",
          900: "var(--color-error-900)",
          950: "var(--color-error-950)",
        },
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
