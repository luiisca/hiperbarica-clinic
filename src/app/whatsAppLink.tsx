import { PHONE } from "@/utils/constants";
import { BsWhatsapp } from "react-icons/bs";
import { isMobile } from "react-device-detect";
import { cn } from "@/utils/cn";

export const getWhatsappLink: (mobile: boolean) => string = (mobile) =>
  `https://${
    mobile ? "api" : "web"
  }.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(
    "Hola. Me gustaría que me contactaran para poder resolver unas dudas."
  )}`;

export default function WhatsAppLink(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
  return (
    <a
      href={getWhatsappLink(isMobile)}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "fixed bottom-6 left-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary-400 text-center text-[35px] leading-[63px] text-white shadow-sm transition-all hover:bg-primary-500 hover:shadow-md",
        props.className
      )}
      {...props}
    >
      <BsWhatsapp />
    </a>
  );
}
