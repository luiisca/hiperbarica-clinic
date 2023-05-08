import "./globals.css";
import React from "react";
import { cn } from "@/utils/cn";
import { Analytics } from "@vercel/analytics/react";
import CalDialog from "@/components/calDialog";
import { Inter, Lora } from "next/font/google";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import {
  ADDRESS,
  FB_PAGE,
  KEYWORDS,
  MAIL,
  PHONE,
  WEB_URL,
} from "@/utils/constants";
import WhatsApp from "./whatsapp";
import { Metadata } from "next";
import { Button } from "@/components/ui/core/button";
import NavContainer from "./nav/nav-container";
import Observer from "./intersection-observer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--lora-font",
});

export const metadata: Metadata = {
  title: {
    default: "Hiperbárica del sur Perú",
    template: "%s | Hiperbárica del sur Perú",
  },
  description:
    "En Hiperbárica del Sur Perú ofrecemos terapia de oxígeno hiperbárico, una opción segura y efectiva para tratar diversas condiciones médicas. Contáctanos para programar una cita con nuestro equipo altamente capacitado.",
  keywords: KEYWORDS,
  openGraph: {
    title: "Hiperbárica del sur Perú",
    description:
      "En Hiperbárica del Sur Perú ofrecemos terapia de oxígeno hiperbárico, una opción segura y efectiva para tratar diversas condiciones médicas. Contáctanos para programar una cita con nuestro equipo altamente capacitado.",
    emails: MAIL,
    phoneNumbers: PHONE,
    siteName: "Hiperbárica del sur Perú",
    locale: "es_PE",
    images: [
      {
        url: "https://hiperbaricadelsurperu.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Logo de Hiperbárica del sur Perú",
      },
    ],
    url: "https://hiperbaricadelsurperu.com",
    countryName: "Perú",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Hiperbárica del sur Perú",
    card: "summary_large_image",
  },
  icons: {
    apple: {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#f1f9ff",
  verification: {
    google: "RpT2m0PjXYI4Kx2BusqtbFGo6pi75r_EAFQReR5UOmM",
  },
  other: {
    "msapplication-TileColor": "#f1f9ff",
  },
};

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl px-8 py-24", className)}>
      {props.children}
    </div>
  );
};

function Logo({ className }: { className?: string }) {
  return (
    <div className="relative">
      <Link href="/" className="absolute left-0 top-0 z-10 h-full w-full" />
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
            Hiperbárica del Sur Perú
          </p>
          <p className="relative w-max text-center text-[0.75rem] font-light leading-[1rem] text-gray-500">
            El arte de oxigenarte
          </p>
        </div>
      </div>
    </div>
  );
}

const navItems = [
  {
    name: "Tratamientos",
    href: "/tratamientos",
  },
  {
    name: "Contáctanos",
    href: "#footer",
  },
  {
    name: "Proceso",
    href: `${WEB_URL}#proceso`,
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

function Nav() {
  return (
    <div className="px-6 py-4">
      <nav
        className={cn(
          "flex h-24 w-full items-center justify-between rounded-lg bg-primary-300 px-8 ",
          "ring-1 ring-gray-100 ring-offset-0"
        )}
      >
        <div className="flex h-full items-center justify-between max-lg:w-full">
          <Logo />
        </div>
        <ul className="flex list-none items-center max-lg:hidden">
          {navItems.map((item, i) => (
            <li key={i}>
              <Button
                href={item.href}
                className={cn(
                  "bg-transparent text-base text-gray-500 hover:bg-transparent hover:text-primary-600 max-xl:px-4",
                  "focus-visible:text-primary-600"
                )}
              >
                {item.name}
              </Button>
            </li>
          ))}
          <li className="ml-4">
            <CalDialog />
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <section className="w-full bg-primary-100" id="footer">
      <Container className="flex flex-col gap-12 md:flex-row">
        <div className="flex w-1/4 shrink-0 flex-col justify-start gap-8">
          <Logo className="flex-col lg:flex-row " />
          <div className="flex gap-6 text-2xl text-[#AFAFAE] md:text-[1.35rem]">
            <a href={FB_PAGE} target="_blank" className="hover:text-[#9e9e9d] ">
              <BsFacebook />
            </a>
            <WhatsApp className="hover:text-[#9e9e9d]" />
          </div>
        </div>
        <div className="flex w-full flex-col gap-12 sm:flex-row">
          <div className="w-1/2 shrink-0">
            <p className="mb-8 text-lg font-medium sm:mb-10">Contacto</p>
            <address className="text-base not-italic leading-[1.6]">
              {/* @TODO: add link to map */}
              <p className="mb-4 text-sm sm:mb-6">{ADDRESS}</p>
              <div className="flex flex-col text-sm text-[#767676]">
                <a
                  href={`tel:${PHONE}`}
                  target="_blank"
                  className="transition-all duration-300 hover:text-gray-500"
                >
                  992-569-407
                </a>
                {/* @TODO: add subject and body */}
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
              {/* @TODO: change copy */}
              <Link
                href="/tratamientos"
                className="transition-all duration-300 hover:text-gray-500"
              >
                Tratamientos
              </Link>
              <Link
                href={`${WEB_URL}#proceso`}
                className="transition-all duration-300 hover:text-gray-500"
              >
                Proceso
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
      </Container>
    </section>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cn(lora.variable, inter.variable)}>
      <body className="flex flex-col items-center overflow-x-hidden font-inter text-gray-200 antialiased md:text-lg">
        <Observer />
        <NavContainer>
          <Nav />
        </NavContainer>
        <main className="relative z-0 flex w-full min-w-0 flex-auto flex-col items-center justify-center">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
