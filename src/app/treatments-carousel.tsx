"use client";

import BaseCarousel from "@/components/carousel";
import { Button } from "@/components/ui/core/button";
import Heading from "@/components/ui/core/heading";
import { shimmer, toBase64 } from "@/utils/blur";
import { cn } from "@/utils/cn";
import Image from "next/image";

const treatmentsCopy = [
  {
    title: "Pie Diabético",
    url: "/blog/pie-diabetico",
    description:
      "El pie diabético puede provocar lesiones graves y, en algunos casos, llevar a la amputación. La terapia de oxígeno hiperbárico puede mejorar la circulación sanguínea y de oxígeno para acelerar la curación de las úlceras y prevenir la amputación",
    img: "/treatments/pie-diabetico.jpg",
  },
  {
    title: "Heridas y Quemaduras",
    url: "/blog/quemaduras",
    description:
      "La terapia de oxígeno hiperbárico puede ayudarte a curar heridas y quemaduras crónicas de forma efectiva y reducir el riesgo de infección",
    img: "/blog/quemaduras/og.webp",
  },
  {
    title: "Lesiones Deportivas",
    url: "/blog/lesiones-musculares",
    description:
      "¿Lesiones deportivas dolorosas? ¿Tiempo de recuperación prolongado? La terapia de oxígeno hiperbárico puede acelerar la recuperación y permitir el retorno a la acción más rápido.",
    img: "/treatments/lesiones-musculares.jpg",
  },
  {
    title: "Fatiga Crónica",
    url: "/blog/fatiga",
    description:
      "¿Sufres de fatiga crónica? La terapia de oxígeno hiperbárico puede ayudarte a reducir la fatiga y aumentar tus niveles de energía",
    img: "/treatments/fatiga.jpg",
  },
];

function Treatment({ copy }: { copy: (typeof treatmentsCopy)[0] }) {
  return (
    <div
      className={cn(
        "mx-auto flex h-full flex-col md:flex-row",
        "xl:rounded-md xl:bg-primary-200"
      )}
    >
      {/* // img */}
      <div
        className={cn(
          "relative overflow-hidden rounded-md shadow-sm shadow-gray-100 md:ml-6 md:shadow-md xl:shadow-none ",
          "min-h-40 mx-auto h-48 w-11/12 md:h-full md:w-[45%]",
          "xl:min-h-80 xl:ml-0 xl:w-1/2"
        )}
      >
        <Image
          src={copy.img}
          alt={`${copy.title} tratamiento`}
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
          "relative flex w-auto flex-1 flex-shrink-0  xl:overflow-hidden",
          "p-4 pb-8 md:p-10 md:pb-14 md:pl-6 md:pr-0 xl:p-6 xl:pb-12 xl:pr-0",
          "flex flex-col items-center text-center md:block md:text-left"
        )}
      >
        <div className="relative mb-5 w-full">
          <Heading
            type="tertiary"
            className="mb-1 w-full px-4 md:pl-0 md:text-2xl xl:pr-6"
          >
            {copy.title}
          </Heading>
          <div className="absolute top-full h-2 w-[calc(100%+0.5rem)] xl:h-4 xl:w-[200%]">
            <span className="relative mb-3 inline-block h-full w-full">
              <Image
                src="/wavy-line-2.svg"
                alt="wavy line svg"
                fill
                sizes="20vw"
                className="object-contain object-center"
              />
            </span>
          </div>
        </div>
        <p className="mb-8 max-w-sm text-sm md:pr-8 md:text-base lg:max-w-prose">
          {copy.description}
        </p>
        <Button
          color="link"
          href={copy.url || "/blog"}
          className={cn("absolute bottom-4 w-fit md:bottom-10 xl:bottom-6")}
        >
          Descubre cómo
        </Button>
      </div>
    </div>
  );
}

export default function TreatmentsCarousel() {
  return (
    <>
      <div className="absolute mx-auto flex h-full w-full justify-center pt-6 md:py-8 xl:hidden">
        <div className="h-full w-full rounded-md bg-primary-200" />
      </div>
      <BaseCarousel<(typeof treatmentsCopy)[0]>
        Skeleton={() => (
          <div className="xl:flex xl:space-x-12">
            <div className="bg-transparent pt-2 md:py-2 md:max-xl:h-[348px] md:max-xl:max-h-[364px] md:max-xl:min-h-[324px] xl:p-0">
              <Treatment
                copy={treatmentsCopy[0] as (typeof treatmentsCopy)[0]}
              />
            </div>
            <div className="hidden bg-transparent pt-2 md:py-2 md:max-xl:h-[348px] md:max-xl:max-h-[364px] md:max-xl:min-h-[324px] xl:block xl:p-0">
              <Treatment
                copy={treatmentsCopy[1] as (typeof treatmentsCopy)[1]}
              />
            </div>
          </div>
        )}
        slidesCopy={treatmentsCopy}
        className="xl:overflow-hidden xl:pb-14"
        slideClassName={cn("pt-2 md:py-2 xl:p-0 bg-transparent")}
        arrowsClasses={{
          container: "flex",
        }}
        dotClasses={{
          list: "treatments-carousel",
        }}
        breakpoints={{
          1280: {
            slidesPerView: 2,
          },
        }}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        spaceBetween={48}
      >
        {(copy) => <Treatment copy={copy} />}
      </BaseCarousel>
    </>
  );
}
