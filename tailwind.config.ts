import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mob-me": "545px",
        "blog-lg": "992px",
      },
      colors: {
        primary: {
          100: "#f1f9ff",
          200: "#e1f3ff",
          400: "#74c0fc",
          500: "#3f9cf5",
          600: "#398cdd",
          700: "#327dc4",
        },
        gray: {
          100: "#767676",
          200: "#555",
          500: "#333",
        },
      },
      fontFamily: {
        inter: ["var(--inter-font)", "sans-serif"],
        lora: ["var(--lora-font)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
