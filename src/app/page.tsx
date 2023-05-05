import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { MedicalClinic, WithContext } from "schema-dts";

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
import Carousel from "./carousel";
import { organization } from "./shared-metadata";
import Heading from "@/components/ui/core/heading";

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

const Hero = () => {
  return (
    <section className="w-full">
      <Container className="flex flex-col-reverse items-center justify-items-end text-center max-xl:pt-0 xl:flex-row xl:space-x-12 xl:text-left 2xl:max-w-screen-2xl">
        <div className="xl:w-2/5 2xl:w-1/2">
          <Heading>
            Experimenta la tecnología de última generación en terapias
            hiperbáricas
          </Heading>
          <p className="mb-12">
            Obtén un diagnóstico personalizado y un tratamiento eficaz con
            Hiperbárica del sur Perú.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mob-me:flex-row xl:justify-start">
            <CalDialog />
            <Button color="outline" href="#hey">
              Más información ↓
            </Button>
          </div>
        </div>
        <div className="relative max-w-2xl py-8 max-xl:mb-16 max-xl:pr-12 xl:w-3/5 2xl:w-1/2">
          <img
            className="relative z-10 shrink-0 object-cover"
            alt=""
            src="/hero.png"
          />
          <SquircleShape className="absolute left-[10%] top-[5%] z-0 h-[90%] w-4/5 md:left-[15%] xl:w-[90%]" />
        </div>
      </Container>
    </section>
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
    <section className="w-full bg-white">
      <Container className="text-center">
        <div className="mb-16 flex flex-col items-center">
          <Heading type="subHeading">Certificaciones</Heading>
          <Heading type="secondary" className="max-w-xl">
            Certificaciones de seguridad y calidad
          </Heading>
          <p className="max-w-prose text-center">
            En Hiperbárica del sur Perú nos tomamos muy en serio la seguridad y
            bienestar de nuestros pacientes. Es por eso que todas nuestras
            cámaras hiperbáricas han pasado rigurosas pruebas y cuentan con
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
                <Heading type="tertiary" className="mb-2 md:text-2xl">
                  {certifcate.title}
                </Heading>
                <p className="max-w-xs text-sm">{certifcate.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Treatments() {
  return (
    <section className="w-full bg-white">
      <Container>
        <div className="mb-8 flex flex-col items-center text-center">
          <Heading type="subHeading">Tratamientos</Heading>
          <Heading type="secondary" className="mb-8 max-w-xl">
            Tratamos una amplia variedad de enfermedades y dolencias
          </Heading>
        </div>
        {/* overlay */}
        <div className="relative">
          <Carousel />
        </div>
        <div className="mt-16 flex w-full justify-center md:mt-12">
          <Link href="#">
            <Button>Ver todos</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

const benefitsCopy = [
  {
    link: "/blog/pie-diabetico",
    percentage: 40,
    description:
      "Reduce el riesgo de amputaciones mayores hasta en un 40% en pacientes con pie diabético.",
    logo: "/hospital.svg",
  },
  {
    link: "#",
    percentage: 92,
    description:
      "Tasa de éxito del 92% en la cicatrización de úlceras diabéticas.",
    logo: "/patches.svg",
  },
  {
    link: "#",
    percentage: 27,
    description:
      "Aumento del 27% en la producción de células blancas en pacientes con enfermedades autoinmunes.",
    logo: "/dna.svg",
  },
  {
    link: "#",
    percentage: 70,
    description:
      "Tasa de éxito del 70% en la reducción del dolor de espalda crónico.",
    logo: "/heart.svg",
  },
];

const Benefits = () => {
  return (
    <section className="w-full bg-white">
      <Container className="max-w-screen-2xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <Heading type="subHeading">BENEFICIOS</Heading>
          <Heading type="secondary" className="max-w-xl">
            Descubre cómo el oxígeno hiperbárico puede ayudarte a sanar más
            rápido
          </Heading>
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {benefitsCopy.map((copy, i) => (
            <div
              className="group relative flex max-w-xs flex-col rounded-md bg-primary-100 p-6"
              key={i}
            >
              <Link
                className="absolute left-0 top-0 z-10 h-full w-full"
                href={copy.link}
                key={i}
              />
              <div className="h-full space-y-4">
                {/* percentage */}
                <div className="relative w-fit font-semibold">
                  <p className="text-6xl text-gray-500">{copy.percentage}</p>
                  <span className="absolute left-full top-0 inline-block text-2xl">
                    %
                  </span>
                </div>
                {/* text */}
                <p className="text-sm">{copy.description}</p>
              </div>
              {/* icon */}
              {/* @TODO: refactor */}
              <div className="relative mt-8 flex h-16 w-16 shrink-0 flex-col items-center justify-start">
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
              <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 p-2.5 text-sm opacity-0 transition-all group-hover:opacity-100">
                <ExternalLink />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

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

const Process = () => {
  return (
    <section className="w-full bg-white">
      <Container>
        <div
          className="mb-8 flex flex-col items-center text-center"
          id="proceso"
        >
          <Heading type="subHeading">Proceso</Heading>
          <Heading type="secondary">La atención que mereces</Heading>
        </div>
        <ul className="flex flex-col items-center space-y-24">
          {processCopy.map((copy, i) => (
            <li
              className="flex w-full items-center justify-end max-md:flex-col max-md:space-y-12 odd:md:flex-row-reverse md:[&:not(:nth-child(odd))]:space-x-12 md:[&:nth-child(odd)>:first-child]:ml-12"
              key={i}
            >
              <div className="relative flex w-full justify-center justify-self-center overflow-hidden rounded-[9px] sm:w-4/5 md:w-1/2">
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
              <div className="md:w-1/2">
                <span className="mb-3 inline-block text-7xl font-semibold text-[#ddd] md:text-[4.75rem] blog-lg:text-[5.375rem]">
                  0{i + 1}
                </span>
                <p className="mb-8 font-lora text-2xl text-gray-500 md:text-3xl">
                  {copy.title}
                </p>
                <p className="">{copy.description}</p>
                {copy.cta && (
                  <Button color="link" href="#" className="mt-4">
                    {copy.cta}
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

function Cta() {
  return (
    <section className="w-full bg-white">
      <Container className="p-0">
        <div className="mx-auto flex w-11/12 flex-col items-center justify-center space-y-12 rounded-3xl bg-primary-200 px-8 py-24 text-center xl:w-full">
          <div className="flex max-w-prose flex-col items-center">
            <Heading type="secondary">
              ¿Listo para mejorar tu salud con la terapia hiperbárica? ¡Agenda
              una cita hoy mismo!
            </Heading>
            <p className="max-w-lg">
              ¡No esperes más y comienza tu camino hacia una mejor salud con
              Hiperbárica del Sur Perú! Nuestro equipo médico profesional estará
              encantado de atenderte y responder a todas tus preguntas
            </p>
          </div>
          <CalDialog />
        </div>
      </Container>
    </section>
  );
}

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
  const jsonLd: WithContext<MedicalClinic> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    ...organization,
    medicalSpecialty: [
      "Cardiovascular",
      "Geriatric",
      "Midwifery",
      "Musculoskeletal",
      "Pulmonary",
      "RespiratoryTherapy",
      "Rheumatologic",
    ],
    isAcceptingNewPatients: true,
    // tourBookingPage: ''
    smokingAllowed: false,
    // photo:
    latitude: -12.1665053,
    longitude: -76.9609184,
    // LocalBusiness
    paymentAccepted: ["Efectivo", "Tarjeta de crédito", "Yape"],
    openingHours: "Mo-Su 8:00:20:00",
    currenciesAccepted: "PEN,USD",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Hero />
      <Certificates />
      <Treatments />
      <Benefits />
      <Process />
      {/* CTA */}
      <Cta />
      {/* FAQ */}
      <Faq />
    </>
  );
}
