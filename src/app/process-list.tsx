"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/blur";
import { Button } from "@/components/ui/core/button";
import { cn } from "@/utils/cn";

const processCopy = [
  {
    title: "Evaluación inicial",
    description:
      "Para comenzar con el tratamiento, necesitas programar una cita ya sea virtual o presencial. Durante la cita, se evaluará tu estado y se recomendará el número de sesiones necesarias para tu tratamiento. También recibirás información sobre los efectos secundarios posibles y las preparaciones previas al tratamiento con oxígeno hiperbárico.",
    cta: "Conocer más",
    image: "/process/1.svg",
  },
  {
    title: "Durante el procedimiento",
    description:
      "Durante tu sesión de terapia hiperbárica, estarás en una cámara hiperbárica y respirarás oxígeno puro al 100% a una presión mayor que la atmosférica. Nuestro equipo médico profesional te monitoreará constantemente para garantizar tu seguridad y cumplir con los estándares de calidad.",
    image: "/process/2.svg",
  },
  {
    title: "Seguimiento",
    description:
      "Después de cada sesión, nuestro equipo médico se asegurará de que estés completamente recuperado antes de dar fin al tratamiento. En caso de ser necesario, se pueden programar múltiples sesiones para asegurar tu completa recuperación. Contamos con un seguimiento personalizado para cada paciente y nos aseguramos de que todo el proceso sea seguro y efectivo para ti.",
    image: "/process/3.svg",
  },
];

export default function ProcessList() {
  const [visibleElements, setVisibleElements] = useState<Element[]>([]);
  const imageElementsRef = useRef<(Element | null)[]>([]);
  const textElementsRef = useRef<(Element | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visibleElements.includes(entry.target)) {
            setVisibleElements((prevVisibleElements) => [
              ...prevVisibleElements,
              entry.target,
            ]);
            observer.unobserve(entry.target);
          }
        });

        // Disconnect when all elements are visible
        if (
          visibleElements.length ===
          [...textElementsRef.current, ...imageElementsRef.current].length
        ) {
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    [...textElementsRef.current, ...imageElementsRef.current].forEach(
      (element) => {
        if (element) {
          observer.observe(element);
        }
      }
    );

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex flex-col items-center space-y-24">
      {processCopy.map((copy, i) => (
        <li
          className="flex w-full items-center justify-end max-md:flex-col max-md:space-y-12 odd:md:flex-row-reverse md:[&:not(:nth-child(odd))]:space-x-12 md:[&:nth-child(odd)>:first-child]:ml-12"
          key={i}
        >
          <div
            ref={(el) => (imageElementsRef.current[i] = el)}
            className={cn(
              "relative flex w-full justify-center justify-self-center overflow-hidden rounded-[9px] sm:w-4/5 md:w-1/2",
              imageElementsRef.current[i] &&
                visibleElements.includes(imageElementsRef.current[i] as Element)
                ? cn(
                    "animate-in fade-in duration-1000",
                    i % 2 === 0
                      ? "slide-in-from-right-16"
                      : "slide-in-from-left-16"
                  )
                : "opacity-0"
            )}
          >
            <Image
              src={copy.image}
              alt={`${copy.title} step image`}
              width={1}
              height={1}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              sizes="50vw"
              className="object-contain object-center"
              style={{
                height: "auto",
                width: "100%",
              }}
            />
          </div>
          <div
            ref={(el) => (textElementsRef.current[i] = el)}
            className={cn(
              "md:w-1/2",

              textElementsRef.current[i] &&
                visibleElements.includes(textElementsRef.current[i] as Element)
                ? "animate-in fade-in slide-in-from-bottom-16 duration-1000"
                : "opacity-0"
            )}
          >
            <span className="mb-3 inline-block text-7xl font-semibold text-[#ddd] md:text-[4.75rem] blog-lg:text-[5.375rem]">
              0{i + 1}
            </span>
            <p className="mb-8 font-lora text-2xl text-gray-500 md:text-3xl">
              {copy.title}
            </p>
            <p className="text-base">{copy.description}</p>
            {copy.cta && (
              <Button color="link" href="#" className="mt-4">
                {copy.cta}
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
