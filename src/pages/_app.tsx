import { type AppType } from "next/dist/shared/lib/utils";
import { Inter, Lora } from "next/font/google";
import { initSuperflow } from "@usesuperflow/client";
initSuperflow("P9inIQP5Zn7dFA1Thh1j").catch(console.error);

// config Inter and Lora fonts from Google Fonts with the latin subset
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});
const LoraFont = Lora({
  subsets: ["latin"],
  variable: "--loar-font",
});

import "src/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --inter-font: ${InterFont.variable};
          --lora-font: ${LoraFont.variable};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
