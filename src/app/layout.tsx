import "./globals.css";
import React from "react";
import { cn } from "@/utils/cn";
import { Analytics } from "@vercel/analytics/react";
import CalDialog from "@/components/calDialog";
import InitSuperFlow from "./init-super-flow";
import Fonts from "./fonts";

function Nav() {
  return (
    <section className="box-border flex h-[6.44rem] w-[120rem] shrink-0 flex-row items-center justify-between bg-primary-100 px-[3rem] py-[0rem] font-lora text-[1.25rem] text-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)]">
      <div className="flex flex-row items-center justify-center gap-[0.75rem]">
        <img
          className="relative h-[3.02rem] w-[3.01rem] shrink-0"
          alt=""
          src="/vector.svg"
        />
        <div className="flex flex-col items-start justify-center">
          <div className="relative leading-[1.75rem]">Hiperbárica del sur</div>
          <div className="relative text-[0.75rem] font-light leading-[1rem]">
            El arte de oxigenarte
          </div>
        </div>
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
        <CalDialog triggerMsg="Agendar cita" />
      </div>
    </section>
  );
}
function Footer() {
  return (
    <section className="box-border flex w-[120rem] flex-col items-center justify-center overflow-hidden bg-white px-[0rem] py-[6rem] text-[0.93rem] text-gray-100">
      <div className="flex h-[22.5rem] w-[96rem] shrink-0 flex-col items-center justify-end overflow-hidden">
        <div className="relative h-[22.64rem] w-[80rem] shrink-0">
          <div className="absolute left-[1.88rem] right-[57.78rem] top-[5.63rem] box-border flex h-[11.39rem] w-[calc(100%_-_954.5px)] flex-col items-center justify-end px-[0rem] py-[4.91rem]">
            <div className="flex flex-row items-start justify-start gap-[1.41rem] py-[0rem] pl-[0rem] pr-[16.41rem]">
              <img
                className="relative h-[1.27rem] w-[1.27rem] shrink-0 overflow-hidden"
                alt=""
                src="/frame20.svg"
              />
              <img
                className="relative h-[1.27rem] w-[1.27rem] shrink-0 overflow-hidden"
                alt=""
                src="/frame21.svg"
              />
            </div>
          </div>
          <div className="absolute left-[25.03rem] top-[5.63rem] box-border flex h-[11.39rem] w-[20.34rem] flex-col items-start justify-start gap-[2.56rem] px-[0rem] pb-[0rem] pt-[0.19rem]">
            <div className="relative flex h-[1.19rem] w-[4.23rem] shrink-0 items-center font-medium leading-[1.64rem]">
              Contacto
            </div>
            <div className="flex h-[7.41rem] w-[20.34rem] shrink-0 flex-col items-center justify-start gap-[1.38rem] text-[0.88rem]">
              <div className="box-border flex h-[3rem] w-[20.34rem] shrink-0 flex-col items-start justify-start gap-[0.44rem] px-[0rem] py-[0.19rem]">
                <div className="relative flex h-[1.06rem] w-[19.61rem] shrink-0 items-center leading-[1.5rem]">
                  Clínica SantaMaría, Elías Aguirre #761- interior
                </div>
                <div className="relative flex h-[1.06rem] w-[16.12rem] shrink-0 items-center leading-[1.5rem]">
                  1er piso, 2do Pabellón Chimbote, Perú
                </div>
              </div>
              <div className="relative h-[3rem] w-[20.34rem] shrink-0 text-[0.81rem] text-gray-100">
                <div className="absolute left-[0rem] top-[0.19rem] flex h-[1.06rem] w-[5.33rem] items-center leading-[1.41rem]">
                  992-569-407
                </div>
                <div className="absolute left-[5.32rem] top-[0.19rem] flex h-[1.06rem] w-[0.8rem] items-center text-[0.94rem] leading-[1.5rem] text-gray-100">{` / `}</div>
                <div className="absolute left-[6.1rem] top-[0.19rem] flex h-[1.06rem] w-[5.33rem] items-center leading-[1.41rem]">
                  969-780-055
                </div>
                <div className="absolute left-[0rem] top-[1.5rem] text-[0.88rem] leading-[1.41rem]">
                  contacto@hiperbaricadelsurperu.com
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[48.19rem] top-[5.63rem] box-border flex h-[9.52rem] w-[13.56rem] flex-col items-start justify-start gap-[2.56rem] px-[0rem] py-[0.19rem]">
            <div className="relative flex h-[1.19rem] w-[3.41rem] shrink-0 items-center font-medium leading-[1.64rem]">
              Cuenta
            </div>
            <div className="box-border flex h-[4.22rem] w-[13.56rem] shrink-0 flex-col items-start justify-start gap-[1.75rem] px-[0rem] py-[0.13rem] text-[0.88rem] text-gray-100">
              <a
                className="relative flex h-[1.06rem] w-[5.43rem] shrink-0 items-center leading-[1.41rem] text-[inherit] [text-decoration:none]"
                href="https://osteocenter.vercel.app/"
                target="_blank"
              >
                Crear cuenta
              </a>
              <a
                className="relative flex h-[1.06rem] w-[2.57rem] shrink-0 items-center leading-[1.41rem] text-[inherit] [text-decoration:none]"
                href="https://osteocenter.vercel.app/"
                target="_blank"
              >
                Entrar
              </a>
            </div>
          </div>
          <div className="absolute left-[64.56rem] top-[5.63rem] box-border flex h-[9.52rem] w-[13.56rem] flex-col items-start justify-start gap-[2.56rem] px-[0rem] py-[0.19rem] text-[0.99rem]">
            <div className="relative flex h-[1.19rem] w-[3.23rem] shrink-0 items-center font-medium leading-[1.64rem]">
              Clínica
            </div>
            <div className="box-border flex h-[4.22rem] w-[13.56rem] shrink-0 flex-col items-start justify-start gap-[1.75rem] px-[0rem] py-[0.13rem] text-[0.88rem] text-gray-100">
              <a
                className="relative flex h-[1.06rem] w-[7.88rem] shrink-0 items-center leading-[1.41rem] text-[inherit] [text-decoration:none]"
                href="https://osteocenter.vercel.app/"
                target="_blank"
              >
                Sobre Osteocenter
              </a>
              <a
                className="relative flex h-[1.06rem] w-[1.89rem] shrink-0 items-center leading-[1.41rem] text-[inherit] [text-decoration:none]"
                href="https://osteocenter.vercel.app/blog"
                target="_blank"
              >
                Blog
              </a>
            </div>
          </div>
          <div className="absolute left-[1.88rem] top-[5.81rem] flex flex-row items-center justify-center gap-[0.75rem] font-lora text-[1.25rem] text-black">
            <img
              className="relative h-[3.02rem] w-[3.01rem] shrink-0"
              alt=""
              src="/vector5.svg"
            />
            <div className="flex flex-col items-start justify-center">
              <div className="relative leading-[1.75rem]">
                Hiperbárica del sur
              </div>
              <div className="relative text-[0.75rem] font-light leading-[1rem]">
                El arte de oxigenarte
              </div>
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
    <html lang="es">
      <Fonts />
      <body className="flex flex-col font-inter text-primary-500 antialiased">
        <Nav />
        <main className="relative mx-4 mt-6 flex w-full min-w-0 max-w-screen-xl flex-auto flex-col items-center justify-center px-2 md:mt-0 lg:mx-auto">
          {children}
          <Footer />
          <InitSuperFlow />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
