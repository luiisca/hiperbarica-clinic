import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f1f9ff",
          200: "#e1f3ff",
          400: "#74c0fc",
          500: "#3f9cf5",
        },
        gray: {
          100: "#767676",
          200: "#555",
          500: "#333",
        },
        // gainsboro: "#ddd",
      },
      fontFamily: {
        inter: ["var(--inter-font)", "sans-serif"],
        lora: ["var(--lora-font)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
