import { Button } from "@/components/ui/core/button";
import Heading from "@/components/ui/core/heading";
import { cn } from "@/utils/cn";

export default function Cta(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...props} className={cn("w-full", props.className)}>
      <div className="mx-auto w-11/12 rounded-3xl bg-primary-200 px-8 py-24 xl:mx-auto xl:max-w-screen-xl 2xl:w-full">
        <div
          id="cta"
          data-intersect="false"
          className={cn(
            "flex flex-col items-center justify-center space-y-10 text-center md:space-y-12",
            "data-[intersect=false]:opacity-0 data-[intersect=true]:animate-in data-[intersect=true]:fade-in data-[intersect=true]:slide-in-from-bottom-16 data-[intersect=true]:duration-1000"
          )}
        >
          <div className="flex max-w-prose flex-col items-center">
            <Heading type="secondary" className="mb-4 md:mb-8">
              ¿Listo para mejorar tu salud con la terapia hiperbárica? ¡Agenda
              una cita hoy mismo!
            </Heading>
            <p className="max-w-lg">
              ¡No esperes más y comienza tu camino hacia una mejor salud con
              Hiperbárica del Sur Perú! Nuestro equipo médico profesional estará
              encantado de atenderte y responder a todas tus preguntas
            </p>
          </div>
          <Button href="/citas">Agendar cita</Button>
        </div>
      </div>
    </section>
  );
}
