import { PHONE } from "@/utils/constants";
import { BsWhatsapp } from "react-icons/bs";
import { isMobile } from "react-device-detect";

export const getWhatsappLink: (mobile: boolean) => string = (mobile) =>
  `https://${
    mobile ? "api" : "web"
  }.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(
    "Hola. Me gustaría que me contactaran para poder resolver unas dudas."
  )}`;

export default function WhatsAppLink() {
  return (
    <a
      href={getWhatsappLink(isMobile)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary-400 text-center text-[35px] leading-[63px] text-white shadow-sm transition-all hover:bg-primary-500 hover:shadow-md md:h-[3.75rem] md:w-[3.75rem]"
    >
      <BsWhatsapp />
    </a>
  );
}
