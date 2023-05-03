"use client";

import { WEB_URL } from "@/utils/constants";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FacebookShareButton, WhatsappShareButton } from "react-share";

export function FacebookShare({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  return (
    <FacebookShareButton quote={title} url={`${WEB_URL}/blog/${slug}`}>
      <div className="text-2xl text-[#AFAFAE] hover:text-[#9e9e9d] md:text-[1.35rem]">
        <BsFacebook />
      </div>
    </FacebookShareButton>
  );
}

export function WhatsappShare({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  return (
    <WhatsappShareButton title={title} url={`${WEB_URL}/blog/${slug}`}>
      <div className="text-2xl text-[#AFAFAE] hover:text-[#9e9e9d] md:text-[1.35rem]">
        <BsWhatsapp />
      </div>
    </WhatsappShareButton>
  );
}
