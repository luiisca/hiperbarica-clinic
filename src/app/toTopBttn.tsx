"use client";

import { Button } from "@/components/ui/core/button";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import { cn } from "@/utils/cn";
import { BsArrowUp } from "react-icons/bs";

export default function ToTopBttn() {
  const isVisible = useScrollVisibility({
    showOnScrollDown: true,
    hideOffset: 100,
    hideOnStart: true,
  });

  return (
    <Button
      className={cn(
        "fixed bottom-[88px] left-[52px] -z-10 -translate-x-1/2 transition-all",
        isVisible ? "z-10 opacity-100" : "-z-10 opacity-0"
      )}
      disabled={!isVisible}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      variant="icon"
      color="icon"
    >
      <BsArrowUp />
    </Button>
  );
}
