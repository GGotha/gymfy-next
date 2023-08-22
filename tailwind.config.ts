import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        oxanium: ["Oxanium", "cursive"],
      },
      colors: {
        primaryBlack: "#0D0D0D",
        primaryWhite: "#FFFFFF",
        primaryGrey: "#BFBFBF",
        darkGrey: "#131313",
        smoothGrey: "#A9A9A9",
        sidebarText: "#A2A3A4",
        sidebarDivider: "#B3B3B3",
        secondaryGreen: "#34D178",
        secondaryRed: "#FF0000",
        gradientOne: "#0042FF",
        gradientTwo: "#EB001B",
        gyRed: "#EB001B",
        gyGreen: "#34D178",
        metamask: "#e8821e",
      },
      backgroundImage: {
        wallpaper_home: "url('/assets/images/wallpaper.jpg')",
      },
    },
  },
  plugins: [],
}

export default config
