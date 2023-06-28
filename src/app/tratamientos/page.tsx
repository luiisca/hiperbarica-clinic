import Heading from "@/components/ui/core/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import Filter from "./filter";

export const metadata: Metadata = {
  title: "Todos nuestros tratamientos",
};

export default function CategoryPage() {
  return (
    <div>
      <div
        className={cn(
          "my-12 w-full text-center md:my-20 ",
          "animate-fade-in-up opacity-0 duration-1000 delay-150 ease-in-out fill-mode-forwards"
        )}
      >
        <Heading className="text-primary-700 md:text-4xl xl:text-6xl">
          Tratamientos
        </Heading>
        <p className="mx-auto max-w-prose ">
          En Hiperbárica del Sur Perú, nuestro tratamiento de terapia
          hiperbárica de última generación ofrece alivio para una amplia
          variedad de condiciones médicas. Desde lesiones cerebrales hasta
          heridas crónicas, nuestro equipo médico profesional está capacitado
          para brindar un enfoque especializado que se adapta a tus necesidades
          individuales.
        </p>
      </div>
      <Separator className="mb-20" />
      <Filter treatment="all" />
    </div>
  );
}
