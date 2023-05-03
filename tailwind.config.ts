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
          300: "#333",
          500: "#333",
        },
      },
      fontFamily: {
        inter: ["var(--inter-font)", "sans-serif"],
        lora: ["var(--lora-font)", "serif"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(60px)",
          },
          "50%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(.21,1.02,.73,1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
