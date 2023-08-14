import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts",
    "./nuxt.config.{js,ts",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#466eb2",
          light: "#557bbc",
        },
        secondary: "#95cebc",
        brand: {
          yellow: "#fce698",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
