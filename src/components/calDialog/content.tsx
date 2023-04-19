"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Content() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (async function () {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          styles: {
            branding: { brandColor: "#74c0fc" },
          },
          hideEventTypeDetails: false,
        });
      })().catch(console.error);
    }
  }, []);

  return (
    <div className="h-auto w-[40vw]">
      <Cal
        calLink="hiperbaricadelsurperu/cita-gratuita"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
