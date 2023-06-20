"use client";

import BaseCarousel from "@/components/carousel";
import { SquircleShape } from "@/components/shapes";
import { Button } from "@/components/ui/core/button";
import Heading from "@/components/ui/core/heading";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import { SwiperProps } from "swiper/react";
import { Autoplay, Controller, Swiper as SwiperType } from "swiper";
import { Progress } from "@/components/ui/progress";
import { ArrowDown, ArrowRight } from "lucide-react";

const copy = [
  {
    title:
      "Experimenta la tecnología de última generación en terapias hiperbáricas",
    description:
      "Obtén un diagnóstico personalizado y un tratamiento eficaz con Hiperbárica del sur Perú.",
    url: "/#certificaciones",
  },
  {
    title: "Tratamos más de 30 condiciones médicas",
    description:
      "En Hiperbárica del Sur Perú, podemos tratar una amplia variedad de condiciones médicas, desde heridas crónicas hasta trastornos neurológicos",
    url: "/tratamientos",
  },
  {
    title: "Descubre cómo funciona nuestro tratamiento",
    description:
      "Conoce nuestro proceso integral de evaluación y tratamiento para garantizar la mejor atención médica posible y los mejores resultados para tu tratamiento de oxígeno hiperbárico",
    url: "/#proceso",
  },
  {
    title: "Beneficios comprobados científicamente",
    description:
      "La terapia de oxigenación hiperbárica (TOHB) te ayuda a mejorar tu salud y calidad de vida con resultados respaldados por la ciencia. Descubre cómo puede acelerar la curación de heridas, combatir infecciones, recuperar la función cerebral y más",
    url: "/#beneficios",
  },
];
const images = [
  "/hero/01.webp",
  "/hero/02.webp",
  "/hero/03.webp",
  "/hero/04.webp",
];

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

function TextCarousel({
  progress,
  setProgress,
  ...props
}: Omit<SwiperProps, "children"> & {
  onSwiperFn?: (swiper: SwiperType) => void;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [transitionEnd, setTransitionEnd] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);

  return (
    <>
      <BaseCarousel
        Skeleton={() => (
          <div className="opacity-100 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <Heading className="text-3xl sm:text-5xl">
              Experimenta la tecnología de última generación en terapias
              hiperbáricas
            </Heading>
            <p className="mb-12 max-w-[50ch] max-xl:mx-auto xl:mr-6">
              Obtén un diagnóstico personalizado y un tratamiento eficaz con
              Hiperbárica del sur Perú.
            </p>
          </div>
        )}
        slidesCopy={copy}
        className="overflow-hidden xl:pb-14"
        slideClassName="pt-2 md:py-2 xl:p-0 bg-transparent"
        arrowsClasses={{
          container:
            "pl-1 max-xl:absolute max-xl:left-0 max-xl:top-1/2 max-xl:-translate-y-1/2 w-full xl:space-x-3",
          prev: "top-0 xl:relative translate-y-0 translate-x-0 max-md:h-8 max-md:w-8 max-md:px-1 left-2 md:left-4 xl:left-0",
          next: "top-0 xl:relative translate-x-0 translate-y-0 max-md:h-8 max-md:w-8 max-md:px-1 right-2 md:right-4 xl:right-0",
        }}
        onInit={() => {
          setTransitionEnd(true);
        }}
        onSlideChangeTransitionEnd={() => {
          setTransitionEnd(true);
        }}
        onSlideChangeTransitionStart={(swiper) => {
          setTransitionEnd(false);
          setAnimationActive(true);
          setProgress(swiper.realIndex + 1);
        }}
        allowTouchMove={false}
        autoplay={{
          delay: 5000,
        }}
        {...props}
      >
        {(copy) => (
          <div
            className={cn(
              "opacity-0",
              transitionEnd &&
                animationActive &&
                "opacity-100 animate-in fade-in slide-in-from-bottom-16 duration-1000",
              !animationActive && "opacity-100"
            )}
          >
            <Heading className="text-3xl sm:text-5xl">{copy.title}</Heading>
            <p className="mb-12 max-w-[50ch] max-xl:mx-auto xl:mr-6">
              {copy.description}
            </p>
          </div>
        )}
      </BaseCarousel>
      <div className="absolute bottom-36 right-0 z-20 flex items-center space-x-2 text-gray-200 max-xl:hidden">
        <p className="text-center text-sm  tabular-nums">{progress}</p>
        <Progress
          value={Math.round(progress / (copy.length / 100))}
          className="w-24"
        />
        <p className="text-center text-sm tabular-nums">{copy.length}</p>
      </div>
    </>
  );
}
function ImgCarousel(
  props: Omit<SwiperProps, "children"> & {
    onSwiperFn?: (swiper: SwiperType) => void;
  }
) {
  return (
    <>
      <BaseCarousel
        Skeleton={() => (
          <div className="absolute top-0 h-full w-full overflow-hidden rounded-md xl:h-[calc(100%-56px)]">
            <Image
              src="/hero/01.webp"
              priority={true}
              alt="mujer acostada dentro de una cámara hiperbárica"
              fill
              sizes="100vw"
              className="relative object-contain"
            />
          </div>
        )}
        slidesCopy={images}
        className="relative z-10 h-full overflow-hidden xl:pb-14 [&_.swiper-wrapper]:h-full"
        slideClassName={cn(
          "relative pt-2 md:py-2 xl:p-0 bg-transparent w-full"
        )}
        arrowsClasses={{
          container: "hidden",
        }}
        allowTouchMove={false}
        pagination={{
          enabled: true,
          clickable: true,
          type: "fraction",
        }}
        {...props}
      >
        {(src) => (
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <Image
              src={src}
              priority={true}
              alt="mujer acostada dentro de una cámara hiperbárica"
              fill
              sizes="100vw"
              className={cn(
                "relative",
                src === images[0] ? "object-contain" : "object-cover"
              )}
            />
          </div>
        )}
      </BaseCarousel>
    </>
  );
}

export default function HeroCarousel() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [progress, setProgress] = useState(1);

  return (
    <Container className="relative flex flex-col-reverse items-center justify-items-end text-center max-xl:pt-0 xl:flex-row xl:space-x-12 xl:text-left 2xl:max-w-screen-2xl">
      <div className="w-full max-xl:px-2 xl:w-2/5 2xl:w-1/2">
        <TextCarousel
          modules={[Controller, Autoplay]}
          onSwiperFn={setFirstSwiper as unknown as (swiper: SwiperType) => void}
          controller={{ control: secondSwiper }}
          progress={progress}
          setProgress={setProgress}
        />
        <div className="flex flex-col items-center justify-center max-mob-me:space-y-4 mob-me:flex-row mob-me:space-x-4 xl:justify-start">
          <Button href="/citas">Agendar cita</Button>
          <Button
            color="outline"
            href={copy[progress - 1]?.url as string}
            nativeAnchor
            className="flex space-x-2"
          >
            <span>Más información</span>
            {copy[progress - 1]?.url.includes("#") ? (
              <ArrowDown />
            ) : (
              <ArrowRight />
            )}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "relative h-60 w-full max-w-2xl py-8 sm:h-[28rem] xl:h-[40rem] xl:w-3/5 2xl:w-1/2"
        )}
      >
        <ImgCarousel
          modules={[Controller]}
          onSwiperFn={
            setSecondSwiper as unknown as (swiper: SwiperType) => void
          }
          controller={{ control: firstSwiper }}
        />
        <SquircleShape className="absolute left-[10%] top-[5%] z-0 h-4/5 w-3/5 sm:h-[90%] sm:w-4/5 md:left-[15%] xl:w-[90%]" />
      </div>
    </Container>
  );
}
