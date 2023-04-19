"use client";

import { initSuperflow } from "@usesuperflow/client";
import { useEffect } from "react";

export default function InitSuperFlow() {
  useEffect(() => {
    initSuperflow("P9inIQP5Zn7dFA1Thh1j").catch(console.error);
  }, []);

  return <></>;
}
