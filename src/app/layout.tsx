import "./globals.css";
import React from "react";
import { cn } from "@/utils/cn";
import { Analytics } from "@vercel/analytics/react";
import CalDialog from "@/components/calDialog";
import InitSuperFlow from "./init-super-flow";
import { Inter, Lora } from "next/font/google";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { ADDRESS, FB_PAGE, MAIL, PHONE } from "@/utils/constants";
import WhatsApp from "./whatsapp";
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});
const LoraFont = Lora({
  subsets: ["latin"],
  variable: "--lora-font",
});

function Logo({ className }: { className: string }) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 190 190"
        fill="none"
        className="h-12 w-12 shrink-0"
      >
        <g clip-path="url(#a)" className="h-full w-full">
          <path
            d="M189.023 49.333V.003H92.325c-24.898 0-45.076 20.177-45.076 45.075v49.316h96.699c24.898 0 45.075-20.177 45.075-45.061Z"
            fill="url(#b)"
          />
          <path
            d="M.418 139.496v49.357h96.658c24.912 0 45.102-20.191 45.102-45.102V94.394H45.52c-24.912 0-45.102 20.191-45.102 45.102Z"
            fill="url(#c)"
          />
          <path
            d="M142.545 94.296H94.509v47.982c0 25.659 20.804 46.476 46.475 46.476h48.036v-47.983c0-25.671-20.804-46.475-46.475-46.475Z"
            fill="url(#d)"
          />
          <path
            d="M47.263 0H0v141.667c0 26.098 21.164 47.249 47.263 47.249H94.51V47.262C94.511 21.164 73.362 0 47.264 0Z"
            fill="url(#e)"
            fill-opacity=".78"
            style={{ mixBlendMode: "darken" }}
          />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1="189.023"
            y1="47.199"
            x2="47"
            y2="94"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".677" stop-color="#03A5B0" />
            <stop offset="1" stop-color="#03A5B0" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="c"
            x1="0"
            y1="189"
            x2="142"
            y2="94"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".345" stop-color="#03A5B0" />
            <stop offset=".544" stop-color="#03A5B0" stop-opacity=".638" />
            <stop offset=".684" stop-color="#03A5B0" stop-opacity=".269" />
            <stop offset=".847" stop-color="#03A5B0" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="d"
            x1="93"
            y1="99.5"
            x2="190.5"
            y2="194.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".505" stop-color="#C9EAFF" />
            <stop offset="1" stop-color="#C9EAFF" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="e"
            x1=".5"
            y1=".5"
            x2="94"
            y2="186.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".39" stop-color="#03436E" />
            <stop offset=".502" stop-color="#03436E" />
            <stop offset=".595" stop-color="#03436E" />
            <stop offset=".677" stop-color="#03436E" stop-opacity=".879" />
            <stop offset=".76" stop-color="#03436E" stop-opacity=".711" />
            <stop offset=".885" stop-color="#03436E" stop-opacity=".39" />
            <stop offset="1" stop-color="#03436E" stop-opacity="0" />
          </linearGradient>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h189.024v189.024H0z" />
          </clipPath>
        </defs>
      </svg>

      <div className="flex flex-col items-start justify-center">
        <p className="relative w-max font-lora leading-[1.75rem] text-[#03436E]">
          Hiperbárica Del Sur
        </p>
        <p className="relative w-max text-center text-[0.75rem] font-light leading-[1rem] text-gray-500">
          El arte de oxigenarte
        </p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <section className="box-border flex h-[6.44rem] w-[120rem] shrink-0 flex-row items-center justify-between bg-primary-100 px-[3rem] py-[0rem] text-[1.25rem] text-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)]">
      <div className="flex flex-row items-center justify-center gap-[0.75rem]">
        <Logo />
      </div>
      <div className="box-border flex h-[2.63rem] w-[31.25rem] shrink-0 flex-row items-center justify-start gap-[1.81rem] px-[0rem] pb-[0.04rem] pt-[0.05rem] text-[0.81rem] text-gray-500">
        <a
          className="relative font-medium leading-[1.41rem] text-[inherit] [text-decoration:none]"
          target="_blank"
        >
          Servicios
        </a>
        <a
          className="relative font-medium leading-[1.41rem] text-[inherit] [text-decoration:none]"
          target="_blank"
        >
          Contáctanos
        </a>
        <a
          className="relative text-[0.88rem] font-medium leading-[1.41rem] text-[inherit] [text-decoration:none]"
          target="_blank"
        >
          Blog
        </a>
        <CalDialog />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="mx-8 max-w-screen-xl py-24 lg:mx-auto">
      {/* need 3 columns: logo, contact, clinic */}
      <div className="flex w-full flex-col gap-12 md:flex-row">
        <div className="flex w-1/4 shrink-0 flex-col justify-start gap-8">
          <Link href="/">
            <Logo className="flex-col lg:flex-row " />
          </Link>
          <div className="flex gap-6 text-2xl text-[#AFAFAE] hover:text-[#9e9e9d] md:text-[1.35rem]">
            <a href={FB_PAGE} target="_blank">
              <BsFacebook />
            </a>
            <WhatsApp />
          </div>
        </div>
        <div className="flex w-full flex-col gap-12 sm:flex-row">
          <div className="w-1/2 shrink-0">
            <p className="mb-8 text-lg font-medium sm:mb-10">Contacto</p>
            <address className="text-base not-italic leading-[1.6]">
              {/* TODO: add link to map */}
              <p className="mb-4 text-sm sm:mb-6">{ADDRESS}</p>
              <div className="flex flex-col text-sm text-[#767676]">
                <a
                  href={`tel:${PHONE}`}
                  target="_blank"
                  className="transition-all duration-300 hover:text-gray-500"
                >
                  992-569-407
                </a>
                {/* TODO: add subject and body */}
                <a
                  href={`mailto:${MAIL}?subject=Test&body=Test`}
                  target="_blank"
                  className="transition-all duration-300 hover:text-gray-500"
                >
                  {MAIL}
                </a>
              </div>
            </address>
          </div>
          <div className="w-1/2 shrink-0">
            <p className="mb-8 text-lg font-medium sm:mb-10">Clínica</p>
            <div className="flex flex-col gap-4 text-sm text-[#767676] sm:gap-6">
              {/* TODO: change copy */}
              <Link
                href="#"
                className="transition-all duration-300 hover:text-gray-500"
              >
                Nuestro equipo
              </Link>
              <Link
                href="/blog"
                className="transition-all duration-300 hover:text-gray-500"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cn(LoraFont.variable, InterFont.variable)}>
      <body className="flex flex-col font-inter text-gray-500 antialiased">
        <Nav />
        <main className="relative mx-8 flex w-full min-w-0 max-w-screen-xl flex-auto flex-col items-center justify-center px-2 md:px-0">
          {children}
          <InitSuperFlow />
          <Analytics />
        </main>
        <hr className="w-full border-[#c7c7c7]/30" />
        <Footer />
      </body>
    </html>
  );
}
