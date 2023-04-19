"use client";

import { Inter, Lora } from "next/font/google";
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});
const LoraFont = Lora({
  subsets: ["latin"],
  variable: "--lora-font",
});

export default function Fonts() {
  return (
    <style jsx global>
      {`
        :root {
          --lora-font: ${LoraFont.className};
          --inter-font: ${InterFont.className};
        }
      `}
    </style>
  );
}
