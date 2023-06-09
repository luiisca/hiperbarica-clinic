import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { MedicalClinic, WithContext } from "schema-dts";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/core/button";
import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/blur";
import { SquircleShape } from "@/components/shapes";
import { cn } from "@/utils/cn";
import { organization } from "./shared-metadata";
import Heading from "@/components/ui/core/heading";
import CountUp from "./countup";
import TreatmentsCarousel from "./treatments-carousel";
import ArticlesCarousel from "./articles-carousel";
import Cta from "./cta";
import HeroCarousel from "./hero-carousel";
import { allBlogs } from "contentlayer/generated";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/map"), {
  loading: () => (
    <div className="mx-auto h-[450px] w-full max-w-[900px] overflow-hidden rounded-2xl blog-lg:h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15600.817508002872!2d-76.9609675!3d-12.1664846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9f8f2833d65%3A0xad490f379af13ee0!2sHiperb%C3%A1rica%20Del%20Sur!5e0!3m2!1sen!2spe!4v1687279341569!5m2!1sen!2spe"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  ),
  ssr: false,
});

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
    <section className="relative -mt-32 w-full bg-primary-100 pt-32">
      <HeroCarousel />
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
    <section className="w-full" id="certificaciones">
      <Container className="text-center">
        <div
          id="certificates"
          data-intersect="false"
          className={cn(
            "mb-16 flex flex-col items-center",
            "data-[intersect=false]:opacity-0 data-[intersect=true]:animate-in data-[intersect=true]:fade-in data-[intersect=true]:slide-in-from-bottom-16 data-[intersect=true]:duration-1000"
          )}
        >
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
                      sizes="30vw"
                      className="object-contain object-center grayscale"
                    />
                  </div>
                </SquircleShape>
              </div>
              <div className="flex flex-col items-center">
                <Heading type="tertiary" className="mb-2 md:text-2xl">
                  {certifcate.title}
                </Heading>
                <p className="max-w-xs text-sm md:text-base">
                  {certifcate.description}
                </p>
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
    <section className="w-full">
      <Container className="overflow-x-hidden">
        <div
          id="treatments"
          data-intersect="false"
          className={cn(
            "mb-8 flex flex-col items-center text-center",
            "data-[intersect=false]:opacity-0 data-[intersect=true]:animate-in data-[intersect=true]:fade-in data-[intersect=true]:slide-in-from-bottom-16 data-[intersect=true]:duration-1000"
          )}
        >
          <Heading type="subHeading">Tratamientos</Heading>
          <Heading type="secondary" className="mb-8 max-w-xl">
            Tratamos una amplia variedad de enfermedades y dolencias
          </Heading>
        </div>
        {/* overlay */}
        <div className="relative">
          <TreatmentsCarousel />
        </div>
        <div className="mt-16 flex w-full justify-center md:mt-12">
          <Link href="/tratamientos">
            <Button>Ver todos</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

const benefitsCopy = [
  {
    url: "/blog/pie-diabetico",
    percentage: 78,
    description:
      "Aumenta la tasa de curación de heridas en un 78.3% en pacientes diabéticos con más de 10 sesiones de TOHB",
    logo: "/treatments/icons/gland.png",
    blob: "/left-blob.png",
  },
  {
    url: "/blog/ictus",
    percentage: 86,
    description: "Tasa de éxito del 86% en la mejora de pacientes post-ictus",
    logo: "/treatments/icons/brain.png",
    blob: "/center-blob.png",
  },
  {
    url: "/blog/osteomielitis",
    percentage: 85,
    description:
      "Inhibe la infección hasta en un 60-85% de los pacientes con osteomielitis crónica y refractaria",
    logo: "/treatments/icons/bone.png",
    blob: "/right-blob.png",
  },
  {
    url: "/blog/intoxicacion-monoxido-de-carbono",
    percentage: 89,
    description:
      "Tasa de recuperación completa del 89% en pacientes con intoxicación por monóxido de carbono tratados con HBOT",
    logo: "/treatments/icons/gas.png",
    blob: "/center-blob.png",
  },
];

const Benefits = () => {
  return (
    <section className="w-full" id="beneficios">
      <Container className="max-w-screen-2xl">
        <div
          id="benefits"
          data-intersect="false"
          className={cn(
            "mb-8 flex flex-col items-center text-center",
            "data-[intersect=false]:opacity-0 data-[intersect=true]:animate-in data-[intersect=true]:fade-in data-[intersect=true]:slide-in-from-bottom-16 data-[intersect=true]:duration-1000"
          )}
        >
          <Heading type="subHeading">BENEFICIOS</Heading>
          <Heading type="secondary" className="max-w-xl">
            Descubre cómo el oxígeno hiperbárico puede ayudarte a sanar más
            rápido
          </Heading>
        </div>
        <div className="mx-auto grid w-fit justify-center gap-8 sm:grid-cols-2 2xl:flex 2xl:space-x-8">
          {benefitsCopy.map((copy, i) => (
            <div
              className="group relative flex max-w-xs flex-col rounded-md bg-primary-100 p-6"
              key={i}
            >
              {copy.url && (
                <Link
                  className="absolute left-0 top-0 z-10 h-full w-full"
                  href={copy.url}
                  key={i}
                />
              )}
              <div className="h-full space-y-4">
                {/* percentage */}
                <div className="relative w-fit font-semibold">
                  <p className="relative h-[72px] text-6xl text-gray-500">
                    <CountUp end={copy.percentage} className="z-10" />
                  </p>
                  <span className="absolute left-full top-0 inline-block text-2xl">
                    %
                  </span>
                </div>
                {/* text */}
                <p className="text-sm md:text-base">{copy.description}</p>
              </div>
              {/* icon */}
              <div className="relative mt-8 flex h-16 w-16 shrink-0 flex-col items-center justify-start">
                <Image
                  src={copy.logo}
                  alt="benefit image"
                  fill
                  sizes="20vw"
                  className="relative z-20 object-contain"
                />
                <div className="absolute bottom-0 left-0 mt-[-3.06rem] h-[3.75rem] w-[3.75rem]">
                  <Image
                    src={copy.blob}
                    alt=""
                    fill
                    sizes="20vw"
                    className="object-contain"
                  />
                </div>
              </div>
              {copy.url && (
                <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 p-2.5 text-sm opacity-0 transition-all group-hover:opacity-100">
                  <ExternalLink />
                </div>
              )}
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
    cta: () => (
      <Button color="link" href="/blog/recomendaciones" className="mt-4">
        Conocer más
      </Button>
    ),
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
    <section className="w-full" id="proceso">
      <Container>
        <div
          id="process"
          data-intersect="false"
          className={cn(
            "mb-8 flex flex-col items-center text-center",
            "data-[intersect=false]:opacity-0 data-[intersect=true]:animate-in data-[intersect=true]:fade-in data-[intersect=true]:slide-in-from-bottom-16 data-[intersect=true]:duration-1000"
          )}
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
              <div
                id={`process-step-image-${i}`}
                data-intersect="false"
                className={cn(
                  "relative flex w-full justify-center justify-self-center overflow-hidden rounded-[9px] sm:w-4/5 md:w-1/2",
                  "data-[intersect=false]:opacity-0 data-[intersect=true]:animate-in data-[intersect=true]:fade-in data-[intersect=true]:duration-1000",
                  i % 2 === 0
                    ? "data-[intersect=true]:slide-in-from-right-16"
                    : "data-[intersect=true]:slide-in-from-left-16"
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
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
              <div
                id={`process-step-text-${i}`}
                data-intersect="false"
                className={cn(
                  "md:w-1/2",
                  "data-[intersect=false]:opacity-0 data-[intersect=true]:animate-in data-[intersect=true]:fade-in data-[intersect=true]:slide-in-from-bottom-16 data-[intersect=true]:duration-1000"
                )}
              >
                <span className="mb-3 inline-block text-7xl font-semibold text-[#ddd] md:text-[4.75rem] blog-lg:text-[5.375rem]">
                  0{i + 1}
                </span>
                <p className="mb-8 font-lora text-2xl text-gray-500 md:text-3xl">
                  {copy.title}
                </p>
                <p className="text-base">{copy.description}</p>
                {copy.cta && <copy.cta />}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

function Map() {
  return (
    <section className="w-full" id="mapa">
      <Container className="pb-44 text-center">
        <div
          id="map"
          data-intersect="false"
          className={cn(
            "mb-8 flex flex-col items-center",
            "data-[intersect=false]:opacity-0 data-[intersect=true]:animate-in data-[intersect=true]:fade-in data-[intersect=true]:slide-in-from-bottom-16 data-[intersect=true]:duration-1000"
          )}
        >
          <Heading type="subHeading">Ubicación</Heading>
          <Heading type="secondary" className="max-w-xl">
            Dónde encontrarnos?
          </Heading>
        </div>
        <DynamicMap />
      </Container>
    </section>
  );
}

function Articles() {
  const latestPosts = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="w-full">
      <Container className="relative max-md:flex max-md:flex-col max-md:space-y-10 md:grid md:grid-cols-[37.5%_62.5%] md:items-end md:gap-4 blog-lg:grid-cols-[35%_65%]">
        <div className="md:mb-0 md:h-[max-content] md:pb-24 md:pr-5 blog-lg:pr-14">
          <Heading type="subHeading">Articulos</Heading>
          <Heading type="secondary" className="mb-6">
            Lo último de Hiperbárica del Sur Perú
          </Heading>
          <Button
            color="link"
            href="/blog"
            className="text-sm underline decoration-2 underline-offset-[10px] md:text-lg"
          >
            Ver todos
          </Button>
        </div>
        <ArticlesCarousel content={latestPosts.slice(0, 10)} />
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
    <section className="w-full">
      <Container>
        <div
          id="faq"
          data-intersect="false"
          className={cn(
            "mb-8 flex flex-col",
            "data-[intersect=false]:opacity-0 data-[intersect=true]:animate-in data-[intersect=true]:fade-in data-[intersect=true]:slide-in-from-bottom-16 data-[intersect=true]:duration-1000"
          )}
        >
          <Heading type="subHeading">PREGUNTAS FREQUENTES</Heading>
          <Heading type="secondary" className="max-w-xl">
            Descubre todo lo que necesitas saber sobre la terapia hiperbárica
          </Heading>
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
    </section>
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
      <Map />
      <Cta />
      <Articles />
      <Faq />
    </>
  );
}
