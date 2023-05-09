import Heading from "@/components/ui/core/heading";
import CalInline from "./cal-inline";
import { cn } from "@/utils/cn";

export default function Citas() {
  return (
    <div className="w-full py-4 md:px-6">
      <div className="flex w-full items-center space-y-8 bg-primary-200 py-24 max-2xl:flex-col md:space-y-16 md:rounded-lg 2xl:space-y-0">
        <div
          className={cn(
            "flex w-full max-w-prose flex-col px-8 max-2xl:items-center max-2xl:text-center 2xl:w-4/5 2xl:pl-24 2xl:pr-0 min-[1700px]:pl-32",
            "animate-in fade-in slide-in-from-bottom-16 duration-1000"
          )}
        >
          <Heading>
            ¡Solicita tu cita hoy mismo y comienza a mejorar tu salud y calidad
            de vida!
          </Heading>
          <p className="max-w-[50ch] max-xl:mx-auto">
            Nuestro equipo altamente capacitado te brindará una evaluación para
            determinar el costo y el número de sesiones necesarias para tu
            tratamiento.
          </p>
        </div>
        <CalInline />
      </div>
    </div>
  );
}
