"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { cn } from "@/utils/cn";
import { SquircleShape } from "@/components/shapes";

export default function CalInline() {
  const [calIframeVisible, setCalIframeVisible] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#74c0fc" },
        },
        hideEventTypeDetails: true,
      });
      cal("on", {
        action: "linkReady",
        callback: () => {
          setCalIframeVisible(true);
        },
      });
    })().catch(console.error);
  }, []);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        calIframeVisible ? "" : "min-h-[402px] lg:min-h-[437px]"
      )}
    >
      <Cal
        calLink="hiperbaricadelsurperu/consulta"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 1,
        }}
        config={{ theme: "light" }}
      />
      <SquircleShape
        className="absolute left-1/2 top-[10%] z-0 h-full w-2/5 -translate-x-[35%] max-md:hidden"
        shapeClassName="bg-primary-100"
      />
    </div>
  );
}
