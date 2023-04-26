"use client";

import BaseSlider from "@/components/slider";
import { Button } from "@/components/ui/core/button";
import { shimmer, toBase64 } from "@/utils/blur";
import { cn } from "@/utils/cn";
import Image from "next/image";

const treatmentsCopy = [
  {
    title: "Pie Diabético",
    description:
      "El pie diabético puede provocar lesiones graves y, en algunos casos, llevar a la amputación. La terapia de oxígeno hiperbárico puede mejorar la circulación sanguínea y de oxígeno para acelerar la curación de las úlceras y prevenir la amputación",
    img: "/treatments/diabetes.jpg",
  },
  {
    title: "Heridas y Quemaduras",
    description:
      "La terapia de oxígeno hiperbárico puede ayudarte a curar heridas y quemaduras crónicas de forma efectiva y reducir el riesgo de infección",
    img: "/treatments/herida.jpg",
  },
  {
    title: "Lesiones Deportivas",
    description:
      "¿Lesiones deportivas dolorosas? ¿Tiempo de recuperación prolongado? La terapia de oxígeno hiperbárico puede acelerar la recuperación y permitir el retorno a la acción más rápido. Además, también puede ser útil para las lesiones de tejidos blandos.",
    img: "/treatments/deporte.jpg",
  },
  {
    title: "Fatiga Crónica",
    description:
      "¿Sufres de fatiga crónica? La terapia de oxígeno hiperbárico puede ayudarte a reducir la fatiga y aumentar tus niveles de energía",
    img: "/treatments/fatiga.jpg",
  },
];

export default function Slider() {
  return (
    <BaseSlider<(typeof treatmentsCopy)[0]>
      content={treatmentsCopy}
      className="xl:overflow-hidden xl:pb-14"
      slideClassName={cn("pt-2 md:py-2 xl:p-0 bg-transparent")}
      arrowsClasses={{
        container: "flex",
      }}
      dotClasses={{
        list: "home-slider",
      }}
      breakpoints={{
        1280: {
          slidesPerView: 2,
        },
      }}
      pagination
    >
      {(copy) => (
        <div
          className={cn(
            "mx-auto flex h-full flex-col md:flex-row",
            "xl:rounded-md xl:bg-primary-200"
          )}
        >
          {/* // img */}
          <div
            className={cn(
              "min-h-40 relative overflow-hidden rounded-md shadow-sm shadow-gray-100 md:shadow-md xl:shadow-none",
              "mx-auto h-48 w-11/12 md:ml-6 md:h-full md:w-[45%]",
              "xl:min-h-80 xl:ml-0 xl:w-1/2"
            )}
          >
            <Image
              src={copy.img}
              alt={`${copy.title} beneficio`}
              fill
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              sizes="50vw"
              className="object-cover object-center "
            />
          </div>
          {/* text */}
          <div
            className={cn(
              "relative flex w-auto flex-1 flex-shrink-0",
              "p-4 pb-8 md:p-10 md:pb-14 md:pl-6 md:pr-0 xl:p-6 xl:pb-12 xl:pr-0",
              "flex flex-col items-center text-center md:block md:text-left"
            )}
          >
            <h3 className="mb-1 w-full pr-4 font-lora text-2xl font-medium xl:pr-6">
              {copy.title}
            </h3>
            <span className="relative mb-3 inline-block h-2 w-full">
              <Image
                src="/wavy-line-2.svg"
                alt="wavy line svg"
                fill
                sizes="20vw"
                className="object-contain object-center"
              />
            </span>
            <p className="mb-6 max-w-sm pr-4 text-base md:max-w-xs xl:pr-6">
              {copy.description}
            </p>
            <Button
              color="link"
              href="/blog"
              className={cn("absolute bottom-4 w-fit md:bottom-10 xl:bottom-6")}
            >
              Descubre cómo
            </Button>
          </div>
        </div>
      )}
    </BaseSlider>
  );
}
