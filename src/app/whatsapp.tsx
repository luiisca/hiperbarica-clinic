"use client";

import { cn } from "@/utils/cn";
import { PHONE } from "@/utils/constants";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

export const getWhatsappLink: (mobile: boolean) => string = (mobile) =>
  `https://${
    mobile ? "api" : "web"
  }.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(
    "Hola. Me gustaría que me contactaran para poder resolver unas dudas."
  )}`;

export default function WhatsApp({ floating }: { floating?: boolean }) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect((): void => {
    setIsMobile(
      "ontouchstart" in window ||
        (navigator.maxTouchPoints > 0 &&
          /Mobi|Android/i.test(navigator.userAgent))
    );
  }, []);

  return (
    <a
      href={getWhatsappLink(isMobile)}
      target="_blank"
      className={cn(
        floating &&
          "bg-primary hover:bg-primary-shade-1 fixed bottom-6 left-6 z-10 flex h-16 w-16 items-center justify-center rounded-full text-center text-[35px] leading-[63px] text-white shadow-sm transition-all hover:shadow-md md:h-[3.75rem] md:w-[3.75rem]"
      )}
    >
      <BsWhatsapp />
    </a>
  );
}