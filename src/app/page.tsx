import { ExternalLink } from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CalDialog from "@/components/calDialog";
import { Button } from "@/components/ui/core/button";
import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/blur";
import { SquircleShape } from "@/components/shapes";
import { cn } from "@/utils/cn";
import Slider, { baseSettings } from "@/components/slider";

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={cn("w-full py-24", className)}>
      {props.children}
    </section>
  );
};

const Hero = () => {
  return (
    <div className="box-border flex h-[51.48rem] w-[120rem] shrink-0 flex-col items-center justify-end bg-primary-100 px-[0rem] py-[4.19rem] text-[3.52rem] text-gray-200">
      <div className="flex h-[43.04rem] w-[96rem] shrink-0 flex-row items-center justify-start">
        <div className="relative h-[29.86rem] w-[44.72rem] shrink-0">
          <div className="absolute left-[0rem] top-[0rem] box-border flex h-[16.23rem] w-[44.72rem] flex-col items-center justify-start gap-[1.81rem] px-[0rem] pb-[0rem] pt-[0rem] font-lora text-gray-500">
            <div className="flex h-[10.55rem] w-[44.72rem] shrink-0 flex-col items-center justify-start">
              <div className="relative flex h-[9.44rem] w-[44.69rem] shrink-0 items-center leading-[3.52rem] tracking-[-1.41px]">
                Experimenta la tecnología de última generación en terapias
                hiperbáricas
              </div>
            </div>
            <div className="flex h-[3.81rem] w-[44.72rem] shrink-0 flex-col items-start justify-center text-[1.05rem] text-gray-200">
              <div className="relative flex h-[2.56rem] w-[42.63rem] shrink-0 items-center leading-[1.9rem]">
                Obtén un diagnóstico personalizado y un tratamiento eficaz con
                Hiperbarica del sur peru.
              </div>
            </div>
          </div>
          <div className="absolute left-[0rem] top-[19.04rem] flex flex-row items-center justify-center gap-[1rem] text-[1.05rem]">
            <CalDialog />
            <Button color="outline" href="#hey">
              Más información ↓
            </Button>
          </div>
          <div className="absolute left-[0rem] top-[26.86rem] flex h-[3rem] w-[44.72rem] flex-row items-center justify-start gap-[0.94rem] text-[0.99rem] text-primary-500">
            <div className="flex h-[3rem] w-[11rem] shrink-0 flex-row items-center justify-start">
              <img
                className="rounded-9980xl relative h-[3rem] w-[3rem] shrink-0 object-cover"
                alt=""
                src="/image@2x.png"
              />
              <img
                className="rounded-9980xl relative ml-[-1rem] h-[3rem] w-[3rem] shrink-0 object-cover"
                alt=""
                src="/image1@2x.png"
              />
              <img
                className="rounded-9980xl relative ml-[-1rem] h-[3rem] w-[3rem] shrink-0 object-cover"
                alt=""
                src="/image2@2x.png"
              />
              <img
                className="rounded-9980xl relative ml-[-1rem] h-[3rem] w-[3rem] shrink-0 object-cover"
                alt=""
                src="/image3@2x.png"
              />
              <img
                className="rounded-9980xl relative ml-[-1rem] h-[3rem] w-[3rem] shrink-0 object-cover"
                alt=""
                src="/image4@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start pb-[0.05rem] pl-[0rem] pr-[0.87rem] pt-[0rem]">
              <div className="relative leading-[1.06rem]">
                <b>250+</b>
                <span className="font-semibold text-gray-200">
                  {" "}
                  pacientes satisfechos con nuestros servicios.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-16 py-8">
          <img
            className="relative z-10 shrink-0 object-cover"
            alt=""
            src="/hero.png"
          />
          <SquircleShape className="absolute -top-[10%] left-[10%] z-0 m-20 h-[90%] w-[90%]" />
        </div>
      </div>
    </div>
  );
};
const certificatesCopy = [
  {
    title: "BPM - DIGEMID",
    description: "Buenas Prácticas de Manofactura – Ministerio de Salud",
    logo: "/certificates/bpm.png",
  },
  {
    title: "BUREAU VERITAS",
    description: "Inspectorate S.A.C",
    logo: "/certificates/bureau.svg",
  },
  {
    title: "ASME",
    description: "Society of Mechanical Engineers",
    logo: "/certificates/asme.svg",
  },
  {
    title: "CCL",
    description: "Cámara de Comercio de Lima",
    logo: "/certificates/ccl.svg",
  },
  {
    title: "UHMS MEMBER - USA",
    description: "Undersea & Hyperbaric Medical Society",
    logo: "/certificates/uhms.svg",
  },
  {
    title: "NFPA",
    description: "National Fire Protection Association",
    logo: "/certificates/nfpa.svg",
  },
];
function Certificates() {
  return (
    <Container className="text-center">
      <div className="mb-16 flex flex-col items-center">
        <h2 className="mb-8 max-w-xl font-lora text-5xl ">
          Certificaciones de seguridad y calidad
        </h2>
        <p className="max-w-prose text-center">
          En Hiperbárica del sur Perú nos tomamos muy en serio la seguridad y
          bienestar de nuestros pacientes. Es por eso que todas nuestras cámaras
          hiperbáricas han pasado rigurosas pruebas y cuentan con
          certificaciones de calidad que avalan su eficacia
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {certificatesCopy.map((certifcate, i) => (
          <li key={i} className="flex flex-col items-center">
            <div className="mb-6 h-32 w-32 md:h-40 md:w-40">
              <SquircleShape
                className="h-full w-full"
                shapeClassName="flex h-full w-full items-center justify-center"
              >
                <div className="relative h-24 w-24 md:h-32 md:w-32">
                  <Image
                    src={certifcate.logo}
                    alt={`${certifcate.title} logo`}
                    fill
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                    sizes="10vw"
                    className="grayscale-100 object-contain object-center"
                  />
                </div>
              </SquircleShape>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-2 font-lora text-2xl font-medium">
                {certifcate.title}
              </h3>
              <p className="max-w-xs text-base">{certifcate.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

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
function Treatments() {
  return (
    <Container className="my-24 w-full p-0">
      <div className="mb-8 flex flex-col items-center text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-primary-500">
          Tratamientos
        </p>
        <h2 className="mb-8 max-w-xl font-lora text-5xl">
          Tratamos una amplia variedad de enfermedades y dolencias
        </h2>
      </div>
      {/* overlay */}
      <div className="relative">
        <div
          className={cn(
            "absolute mx-auto flex h-full w-full justify-center pt-6 md:py-8 xl:hidden"
          )}
        >
          <div className="h-full w-11/12 rounded-md bg-primary-200" />
        </div>
        <Slider
          className={cn(
            "relative mx-auto w-11/12 rounded-md [&>.slick-list]:overflow-hidden",
            "[&_.slick-slide>div]:h-full",
            "xl:[&_.slick-track]:space-x-6"
          )}
          dotClasses={{
            list: "absolute -bottom-10 md:-bottom-1 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[calc(45%+48px)] xl:-bottom-12 xl:left-1/2 xl:-translate-x-1/2",
            dot: "h-3 w-3 xl:w-4 xl:h-4",
          }}
          responsive={[
            {
              breakpoint: 1280,
              settings: {
                ...baseSettings,
                slidesToShow: 1,
                slidesToScroll: 1,
                className: cn(
                  "relative mx-auto w-11/12 [&>.slick-list]:overflow-hidden",
                  "[&_.slick-slide>div]:h-full",
                  "[&>.slick-list]:select-none hover:[&>.slick-list]:cursor-grab",
                  "[&_.slick-track]:flex"
                ),
              },
            },
          ]}
          slidesToShow={2}
          slidesToScroll={2}
        >
          {treatmentsCopy.map((copy, i) => (
            <div
              key={i}
              className={cn(
                "pt-2 md:py-2 xl:p-0",
                "!flex h-full bg-transparent",
                "flex-col md:flex-row",
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
                  className={cn(
                    "absolute bottom-4 w-fit md:bottom-10 xl:bottom-6"
                  )}
                >
                  Descubre cómo
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-16 flex w-full justify-center md:mt-8 xl:mt-20">
        <Link href="#">
          <Button>Ver todos</Button>
        </Link>
      </div>
    </Container>
  );
}

const benefitsCopy = [
  {
    percentage: 30,
    description:
      "Reduce la inflamación en un promedio del 30% en pacientes con enfermedades crónicas.",
    logo: "/hospital.svg",
  },
  {
    percentage: 92,
    description:
      "Tasa de éxito del 92% en la cicatrización de úlceras diabéticas.",
    logo: "/patches.svg",
  },
  {
    percentage: 27,
    description:
      "Aumento del 27% en la producción de células blancas en pacientes con enfermedades autoinmunes.",
    logo: "/dna.svg",
  },
  {
    percentage: 70,
    description:
      "Tasa de éxito del 70% en la reducción del dolor de espalda crónico.",
    logo: "/heart.svg",
  },
];

const Benefits = () => {
  return (
    <div className="box-border flex w-[120rem] flex-col items-center justify-center bg-white px-[0rem] py-[6rem]">
      <div className="box-border flex w-[96rem] flex-col items-center justify-center gap-[4rem] overflow-hidden bg-white px-[12.25rem] py-[0rem]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-[0.75rem]">
            <div className="relative font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
              BENEFICIOS
            </div>
            <div className="relative flex w-[44.09rem] items-center justify-center text-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">
              Descubre cómo el oxígeno hiperbárico puede ayudarte a sanar más
              rápido
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[2rem] px-[0.06rem] py-[0rem] text-[4.16rem]">
          {benefitsCopy.map((copy, i) => (
            <Link className="group relative" href="#" key={i}>
              <div className="relative flex flex-col items-start justify-start gap-[2rem] overflow-hidden rounded-md bg-primary-100 p-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-semibold leading-[5.04rem]">
                    <p>{copy.percentage}</p>
                    <span className="absolute left-full top-0 inline-block text-2xl">
                      %
                    </span>
                  </div>
                  <div className="relative flex w-[15.69rem] items-center text-[1.11rem] leading-[1.64rem] text-gray-200">
                    {copy.description}
                  </div>
                </div>
                <div className="relative flex h-[4rem] w-[4rem] shrink-0 flex-col items-center justify-start">
                  <img
                    className="relative z-20 h-[4.06rem] w-[4.06rem] shrink-0"
                    alt=""
                    src={copy.logo}
                  />
                  <img
                    className="absolute bottom-0 left-0 mt-[-3.06rem] h-[3.75rem] w-[3.75rem] shrink-0 object-cover"
                    alt=""
                    src="/image8@2x.png"
                  />
                </div>
              </div>
              <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 p-2.5 text-sm opacity-0 transition-all group-hover:opacity-100">
                <ExternalLink />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const processCopy = [
  {
    title: "Evaluación inicial",
    description:
      "Para comenzar con el tratamiento, necesitas programar una cita ya sea virtual o presencial. Durante la cita, se evaluará tu estado y se recomendará el número de sesiones necesarias para tu tratamiento. También recibirás información sobre los efectos secundarios posibles y las preparaciones previas al tratamiento con oxígeno hiperbárico.",
    cta: "Conocer más",
    image: "/frame9@2x.png",
  },
  {
    title: "Durante el procedimiento",
    description:
      "Durante tu sesión de terapia hiperbárica, estarás en una cámara hiperbárica y respirarás oxígeno puro al 100% a una presión mayor que la atmosférica. Nuestro equipo médico profesional te monitoreará constantemente para garantizar tu seguridad y cumplir con los estándares de calidad.",
    image: "/frame11@2x.png",
  },
  {
    title: "Seguimiento",
    description:
      "Después de cada sesión, nuestro equipo médico se asegurará de que estés completamente recuperado antes de dar fin al tratamiento. En caso de ser necesario, se pueden programar múltiples sesiones para asegurar tu completa recuperación. Contamos con un seguimiento personalizado para cada paciente y nos aseguramos de que todo el proceso sea seguro y efectivo para ti.",
    image: "/frame12@2x.png",
  },
];

const Process = () => {
  return (
    <Container>
      <div
        className="box-border flex h-[4.92rem] w-[76.25rem] shrink-0 flex-col items-start justify-start gap-[0.63rem] px-[0rem] pb-[0rem] pt-[0.06rem]"
        id="proceso"
      >
        <div className="relative flex h-[1rem] w-[4.28rem] shrink-0 items-center font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
          Proceso
        </div>
        <div className="relative flex h-[3.56rem] w-[31.09rem] shrink-0 items-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">
          La atención que mereces
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {processCopy.map((copy, i) => (
          <div
            className="flex w-full flex-col items-start justify-end "
            key={i}
          >
            <div className="flex w-[76.31rem] flex-row items-center justify-start gap-[5.63rem]">
              <div className="relative flex h-[13.76rem] w-[45.19rem] shrink-0 flex-col items-start gap-2">
                <span className="flex items-center text-5xl font-semibold leading-[5.04rem]">
                  0{i + 1}
                </span>
                <p className="font-lora text-[2.11rem] leading-[2.34rem] tracking-[-0.84px] text-gray-500">
                  {copy.title}
                </p>
                <p className="relative flex shrink-0 items-center text-base text-gray-200">
                  {copy.description}
                </p>
                {copy.cta && (
                  <Button color="link" href="#">
                    {copy.cta}
                  </Button>
                )}
              </div>
              <div className="rounded-4xs flex w-[22.6rem] shrink-0 flex-col items-center justify-center overflow-hidden">
                <img
                  className="relative h-[22.6rem] w-[22.6rem] shrink-0 overflow-hidden object-cover"
                  alt=""
                  src="/frame9@2x.png"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqCopy = [
  {
    question: "¿Qué es la terapia de oxígeno hiperbárico?",
    answer:
      "La terapia de oxígeno hiperbárico es un tratamiento médico que consiste en respirar oxígeno puro en una cámara presurizada. Esta terapia aumenta la cantidad de oxígeno en la sangre y en los tejidos, lo que ayuda a acelerar la recuperación de diversas condiciones médicas.",
  },
  {
    question:
      "¿Cómo funciona la terapia de oxígeno hiperbárico para aliviar las secuelas del COVID?",
    answer:
      "La terapia de oxígeno hiperbárico aumenta la cantidad de oxígeno en la sangre y en los tejidos, lo que ayuda a reducir la inflamación y mejorar la circulación sanguínea. Esto puede ayudar a aliviar las secuelas del COVID, como la fatiga, la dificultad para respirar y la niebla cerebral.",
  },
  {
    question:
      "¿Cuántas sesiones de terapia de oxígeno hiperbárico se necesitan?",
    answer:
      "La cantidad de sesiones de terapia de oxígeno hiperbárico necesarias varía según la condición médica y la gravedad de los síntomas. Nuestros profesionales pueden ayudar a determinar la cantidad de sesiones necesarias después de una evaluación inicial.",
  },
  {
    question:
      "¿Hay algún efecto secundario de la terapia de oxígeno hiperbárico?",
    answer:
      "La terapia de oxígeno hiperbárico es generalmente segura y no tiene efectos secundarios graves. Sin embargo, algunos pacientes pueden experimentar dolor de oídos o sinusitis durante el tratamiento.",
  },
  {
    question: "¿Cuál es el costo de la terapia de oxígeno hiperbárico?",
    answer:
      "El costo de la terapia de oxígeno hiperbárico varía según la cantidad de sesiones necesarias y el tipo de seguro médico que tenga el paciente. Ofrecemos una evaluación para determinar el costo de la terapia y podemos ayudar a los pacientes a explorar opciones de seguro médico.",
  },
  {
    question: "¿Cómo puedo programar una cita para una evaluación inicial?",
    answer:
      "Puede programar una cita para una evaluación inicial ya sea virtual o presencial en nuestra clínica llamando a nuestro número de teléfono o enviando un correo electrónico a nuestro equipo de atención al cliente.",
  },
  {
    question:
      "¿Qué tipo de resultados puedo esperar de la terapia de oxígeno hiperbárico?",
    answer:
      "Los resultados de la terapia de oxígeno hiperbárico varían según la condición médica y la gravedad de los síntomas. Sin embargo, la terapia ha demostrado ser efectiva para una amplia variedad de condiciones médicas, incluyendo las secuelas del COVID.",
  },
];
const Faq = () => {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center gap-[0.75rem]">
        <p className="relative max-w-prose font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
          PREGUNTAS FREQUENTES
        </p>
        <p className="relative flex items-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">
          Descubre todo lo que necesitas saber sobre la terapia hiperbárica
        </p>
      </div>

      <Accordion type="single" collapsible>
        {faqCopy.map((copy, i) => (
          <AccordionItem value={`question-${i}`} key={i}>
            <AccordionTrigger>{copy.question}</AccordionTrigger>
            <AccordionContent>{copy.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Certificates />
      <Treatments />
      <Benefits />
      <Process />
      {/* TESTIMONIALS */}
      <div className="box-border flex w-[120rem] flex-col items-center justify-center bg-primary-100 px-[0rem] py-[6rem] text-center">
        <div className="flex flex-col items-center justify-center gap-[1.56rem] px-[16.75rem] py-[0rem]">
          <div className="flex flex-col items-center justify-center gap-[1.5rem]">
            <div className="relative flex h-[1rem] w-[6.19rem] shrink-0 items-center justify-center font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
              Testimonios
            </div>
            <div className="relative flex h-[3.56rem] w-[40.74rem] shrink-0 items-center justify-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">
              Lo que dicen nuestros pacientes.
            </div>
          </div>
          <div className="flex flex-row items-center justify-center overflow-hidden text-[1.05rem] text-gray-200">
            <img
              className="rounded-9980xl relative h-[4.38rem] w-[3.81rem] shrink-0"
              alt=""
              src="/frame14.svg"
            />
            <div className="flex flex-col items-center justify-center gap-[3.38rem]">
              <div className="relative h-[6.06rem] w-[33.56rem] shrink-0">
                <div className="absolute left-[0rem] top-[-0.31rem] flex w-[33.56rem] items-center justify-center leading-[1.64rem]">
                  Me siento como una persona completamente nueva despu��s de
                  recibir terapia hiperbárica en Hiperbárica del Sur Perú. Mi
                  dolor crónico ha disminuido y mi calidad de vida ha mejorado
                  significativamente.
                </div>
              </div>
              <div className="box-border flex h-[2.34rem] w-[62.5rem] shrink-0 flex-row items-center justify-start gap-[0.69rem] px-[26.11rem] py-[0rem] text-[0.99rem] text-gray-100">
                <img
                  className="relative h-[2.34rem] w-[2.34rem] shrink-0 overflow-hidden object-cover"
                  alt=""
                  src="/frame15@2x.png"
                />
                <div className="relative flex h-[1.19rem] w-[7.22rem] shrink-0 items-center justify-center leading-[1.64rem]">
                  Leticia Nogales
                </div>
              </div>
            </div>
            <img
              className="rounded-9980xl relative h-[4.38rem] w-[3.69rem] shrink-0"
              alt=""
              src="/frame16.svg"
            />
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="box-border flex w-[120rem] flex-col items-center justify-center overflow-hidden bg-white px-[0rem] py-[6rem] text-center font-lora text-[2.81rem] text-gray-500">
        <div className="flex flex-col items-center justify-center gap-[2rem] overflow-hidden rounded-3xl bg-primary-200 px-[25.94rem] py-[6.5rem]">
          <div className="flex flex-col items-center justify-center gap-[1rem]">
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex w-[44.09rem] items-center justify-center leading-[2.81rem] tracking-[-1.12px]">
                ¿Listo para mejorar tu salud con la terapia hiperbárica? ¡Agenda
                una cita hoy mismo!
              </div>
            </div>
            <div className="flex w-[38.97rem] flex-col items-center justify-center text-[1.11rem] text-gray-200">
              <div className="relative flex w-[38.97rem] items-center justify-center leading-[1.64rem]">
                ¡No esperes más y comienza tu camino hacia una mejor salud con
                Hiperbárica del Sur Perú! Nuestro equipo médico profesional
                estará encantado de atenderte y responder a todas tus preguntas
              </div>
            </div>
          </div>
          <CalDialog />
        </div>
      </div>
      {/* FAQ */}
      <Faq />
      <div className="box-border flex w-[120rem] flex-col items-center justify-center overflow-hidden bg-white px-[0rem] py-[6rem]">
        <div className="flex w-[96rem] flex-col items-center justify-center overflow-hidden">
          <div className="flex flex-row items-end justify-start self-stretch">
            <div className="box-border flex h-[17.31rem] w-[46.44rem] shrink-0 flex-col items-start justify-start px-[0.03rem] py-[0rem]">
              <div className="flex flex-col items-start justify-start gap-[1rem]">
                <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                  <div className="relative flex h-[1rem] w-[5.09rem] shrink-0 items-center font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
                    Artículos
                  </div>
                  <div className="relative flex w-[15.67rem] items-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">
                    Lo último de Hiperbarica del sur Perú
                  </div>
                </div>
                <div className="box-border flex h-[1.77rem] w-[3.96rem] shrink-0 flex-col items-center justify-start border-b-[2px] border-solid border-primary-400 px-[0rem] py-[0.25rem] text-[0.81rem] text-primary-400">
                  <div className="relative flex h-[1.06rem] w-[3.97rem] shrink-0 items-center leading-[1.64rem]">
                    Ver todos
                  </div>
                </div>
              </div>
              <img
                className="relative mt-[-1.56rem] h-[5.94rem] w-[7.56rem] shrink-0"
                alt=""
                src="/frame17.svg"
              />
            </div>
            <div className="relative h-[24.26rem] w-[49.56rem] shrink-0 overflow-hidden text-[0.7rem]">
              <div className="absolute bottom-[0rem] left-[calc(50%_-_1219.5px)] top-[0rem] box-border flex h-full flex-row items-start justify-start gap-[1.88rem] py-[0rem] pl-[51.44rem] pr-[0rem]">
                <div className="relative h-[24.26rem] w-[23.84rem] shrink-0">
                  <img
                    className="absolute left-[0rem] top-[0rem] h-[16.88rem] w-[23.84rem] overflow-hidden object-cover"
                    alt=""
                    src="/frame18@2x.png"
                  />
                  <a
                    className="absolute left-[0rem] top-[17.81rem] flex h-[0.88rem] w-[5.51rem] items-center font-medium uppercase leading-[0.94rem] tracking-[0.75px] text-[inherit] [text-decoration:none]"
                    href="https://osteocenter.vercel.app/blog/categorias/tratamiento"
                    target="_blank"
                  >
                    Tratamiento
                  </a>
                  <a
                    className="absolute left-[0rem] top-[19.03rem] flex h-[2.69rem] w-[22.94rem] items-center font-lora text-[2.11rem] leading-[2.34rem] tracking-[-0.84px] text-gray-500 [text-decoration:none]"
                    href="https://osteocenter.vercel.app/blog/como-tratar-la-artrosis"
                    target="_blank"
                  >
                    ¿Cómo tratar la artrosis?
                  </a>
                </div>
                <div className="relative h-[24.26rem] w-[23.84rem] shrink-0">
                  <img
                    className="absolute left-[0rem] top-[0rem] h-[16.88rem] w-[23.84rem] overflow-hidden object-cover"
                    alt=""
                    src="/frame19@2x.png"
                  />
                  <a
                    className="absolute left-[0rem] top-[17.81rem] flex h-[0.88rem] w-[4.1rem] items-center font-medium uppercase leading-[0.94rem] tracking-[0.75px] text-[inherit] [text-decoration:none]"
                    href="https://osteocenter.vercel.app/blog/categorias/sintomas"
                    target="_blank"
                  >
                    Síntomas
                  </a>
                  <div className="absolute left-[0rem] top-[19.03rem] flex flex-col items-start justify-start px-[0rem] pb-[0.13rem] pt-[0.19rem] font-lora text-[2.11rem] text-gray-500">
                    <a
                      className="relative leading-[2.34rem] tracking-[-0.84px] text-[inherit] [text-decoration:none]"
                      href="https://osteocenter.vercel.app/blog/conoce-los-sintomas-y-causas-de-la-artritis"
                      target="_blank"
                    >
                      Conoce los síntomas y
                    </a>
                    <a
                      className="relative mt-[-0.03rem] inline-block leading-[2.34rem] tracking-[-0.84px] text-[inherit] [text-decoration:none]"
                      href="https://osteocenter.vercel.app/blog/conoce-los-sintomas-y-causas-de-la-artritis"
                      target="_blank"
                    >
                      causas de la Artritis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
