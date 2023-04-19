import { ExternalLink } from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CalDialog from "@/components/calDialog";

const Container = (props: { children: React.ReactNode }) => {
  return <div className="mx-8 max-w-screen-xl py-24">{props.children}</div>;
};

const diseasesCopy = [
  {
    title: "Endocrinologia",
    description:
      "Si buscas alivio para enfermedades relacionadas con la tiroides, diabetes, o cualquier otra condición endocrina, la terapia hiperbárica de Hiperbarica del Sur Perú puede ayudarte",
  },
  {
    title: "Fertilidad",
    description:
      "Ofrecemos una variedad de tratamientos de terapia hiperbárica diseñados para mejorar la salud reproductiva y aumentar las posibilidades de fertilidad exitosa.",
  },
  {
    title: "Envejecimiento",
    description:
      "Nuestro tratamiento de última generación está diseñado para mejorar la salud celular y puede ayudar a reducir los signos del envejecimiento",
  },
  {
    title: "Lesiones",
    description:
      "Nuestro tratamiento de terapia hiperbárica de última generación puede ayudarte a acelerar la curación de lesiones deportivas, mejorar la fuerza y la resistencia, y reducir el dolor y la inflamación",
  },
  {
    title: "Reumatologia",
    description:
      "Si estás buscando alivio para enfermedades reumatológicas como la fibromialgia, la terapia hiperbárica de Hiperbarica del Sur Perú puede ayudarte a mejorar tu calidad de vida y reducir los síntomas",
  },
  {
    title: "Lesiones por radioterapia",
    description:
      "En Hiperbarica del Sur Perú, ofrecemos tratamientos de terapia hiperbárica diseñados específicamente para aliviar los efectos secundarios de la radioterapia",
  },
  {
    title: "Heridas y Ulceras",
    description:
      "Nuestro tratamiento de terapia hiperbárica de última generación puede acelerar el proceso de cicatrización y prevenir complicaciones adicionales",
  },
  {
    title: "Lesiones neurológicas",
    description:
      "Si buscas alivio para lesiones neurológicas como el Alzheimer, Parkinson y el Accidente Cerebrovascular, la terapia hiperbárica de Hiperbarica del Sur Perú puede ayudarte",
  },
  {
    title: "Cirugías estéticas ",
    description:
      "Si quieres recuperarte rápido después de una cirugía estética, Hiperbarica del Sur Perú puede ayudarte.",
  },
];

const IllnessCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex h-[32.56rem] flex-col items-center justify-center gap-[2.25rem] rounded-md border-[1px] border-solid border-gray-200 p-[1rem] text-center font-lora text-[1.76rem] text-gray-500">
      <div className="flex h-[16.88rem] w-[22.29rem] shrink-0 flex-col items-center justify-end">
        <img
          className="relative h-[16.88rem] w-[22.29rem] shrink-0 overflow-hidden rounded-md object-cover"
          alt=""
          src="/frame@2x.png"
        />
        <div className="mt-[-2.81rem] flex h-[5.63rem] w-[5.63rem] shrink-0 flex-col items-center justify-center bg-[url(/frame2@3x.png)] bg-cover bg-[top] bg-no-repeat">
          <img
            className="relative h-[2.34rem] w-[2.34rem] shrink-0 overflow-hidden object-cover"
            alt=""
            src="/frame1@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[1rem]">
        <div className="relative flex h-[2.25rem] w-[21.38rem] shrink-0 items-center justify-center leading-[2.11rem] tracking-[-0.7px]">
          {title}
        </div>
        <div className="box-border flex h-[5.06rem] w-[20.39rem] shrink-0 flex-col items-center justify-start px-[0rem] py-[1.94rem] font-inter text-[0.88rem] text-gray-200">
          <div className="relative flex h-[1.06rem] w-[20.39rem] shrink-0 items-center justify-center leading-[1.41rem]">
            {description}
          </div>
        </div>
      </div>
      <div className="flex w-[6rem] flex-col items-center justify-center overflow-hidden font-inter text-[0.81rem] text-primary-400">
        <div className="relative leading-[0.88rem] tracking-[-0.7px]">
          Ver tratamientos
        </div>
      </div>
    </div>
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
            <div className="flex h-[3.81rem] w-[44.72rem] shrink-0 flex-col items-start justify-center font-inter text-[1.05rem] text-gray-200">
              <div className="relative flex h-[2.56rem] w-[42.63rem] shrink-0 items-center leading-[1.9rem]">
                Obtén un diagnóstico personalizado y un tratamiento eficaz con
                Hiperbarica del sur peru.
              </div>
            </div>
          </div>
          <div className="absolute left-[0rem] top-[19.04rem] flex flex-row items-center justify-center gap-[1rem] text-[1.05rem]">
            <div className="rounded-4xs box-border flex h-[3.13rem] w-[13.63rem] shrink-0 cursor-pointer flex-col items-end justify-center bg-primary-400 px-[1.56rem] py-[0rem] [border:none]">
              <CalDialog />
            </div>
            <div className="rounded-4xs box-border flex h-[3.13rem] w-[13.97rem] shrink-0 flex-col items-start justify-center bg-white px-[1.88rem] py-[0rem]">
              <div className="relative font-semibold leading-[1.25rem]">
                Más información ↓
              </div>
            </div>
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
        <div className="rounded-3xl bg-primary-200">
          <img
            className="relative h-[43.06rem] w-[51.19rem] shrink-0 rounded-[101px] object-cover"
            alt=""
            src="/hero.png"
          />
        </div>
      </div>
    </div>
  );
};

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
              Los beneficios de la terapia hiperbárica que debes conocer para
              mejorar tu salud y bienestar
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
    number: 1,
    title: "Evaluación inicial",
    description:
      "Al programar una cita gratuita, ya sea virtual o presencial con un profesional, se evaluará el estado del paciente y recomendará el número de sesiones necesarias. También se informará al paciente sobre los efectos secundarios posibles durante y después de la sesión.",
    image: "/frame9@2x.png",
  },
  {
    number: 2,
    title: "Preparación",
    description:
      "Antes de comenzar el tratamiento, el paciente será instruido en los procedimientos de seguridad y las normas de la terapia hiperbárica",
    image: "/frame10@2x.png",
  },
  {
    number: 3,
    title: "Durante el procedimiento",
    description:
      "La sesión de terapia hiperbárica se lleva a cabo en una cámara hiperbárica con oxígeno al 100% a presión mayor que la atmosférica. El paciente es monitoreado constantemente por el equipo médico para asegurar su seguridad y cumplir con los estándares de calidad.",
    image: "/frame11@2x.png",
  },
  {
    number: 4,
    title: "Seguimiento",
    description:
      "Después de cada sesión, nuestro equipo médico se asegurará de que el paciente esté completamente recuperado antes de dar fin al tratamiento. En caso de ser necesario, se pueden programar múltiples sesiones para asegurar la recuperación completa del paciente. Contamos conun seguimiento personalizado para cada paciente y nos aseguramos de que todo el proceso sea seguro y efectivo.",
    image: "/frame12@2x.png",
  },
];

const Process = () => {
  return (
    <Container>
      <div className="box-border flex h-[4.92rem] w-[76.25rem] shrink-0 flex-col items-start justify-start gap-[0.63rem] px-[0rem] pb-[0rem] pt-[0.06rem]">
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
              <div className="relative h-[13.76rem] w-[45.19rem] shrink-0">
                <span className="flex items-center text-5xl font-semibold leading-[5.04rem]">
                  0{copy.number}
                </span>
                <p className="font-lora text-[2.11rem] leading-[2.34rem] tracking-[-0.84px] text-gray-500">
                  {copy.title}
                </p>
                <p className="relative flex shrink-0 items-center text-base text-gray-200">
                  {copy.description}
                </p>
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
      "El costo de la terapia de oxígeno hiperbárico varía según la cantidad de sesiones necesarias y el tipo de seguro médico que tenga el paciente. Ofrecemos una evaluación gratuita para determinar el costo de la terapia y podemos ayudar a los pacientes a explorar opciones de seguro médico.",
  },
  {
    question: "¿Cómo puedo programar una cita para una evaluación inicial?",
    answer:
      "Puede programar una cita para una evaluación inicial gratis ya sea virtual o presencial en nuestra clínica llamando a nuestro número de teléfono o enviando un correo electrónico a nuestro equipo de atención al cliente.",
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
    <section>
      <Hero />
      {/* INTRO */}
      <div className="box-border flex w-[120rem] flex-row items-center justify-center bg-white px-[0rem] py-[6rem] text-center font-lora text-[2.81rem] text-gray-500">
        <div className="flex w-[69.53rem] shrink-0 flex-row items-center justify-center gap-[2rem]">
          <img
            className="relative h-[34.81rem] w-[23.44rem] shrink-0 rounded-[32px] object-cover"
            alt=""
            src="/frame-5@2x.png"
          />
          <div className="flex flex-1 flex-col items-center justify-center gap-[2rem] self-stretch">
            <div className="flex flex-col items-center justify-center gap-[1rem]">
              <div className="relative flex w-[44.09rem] items-center justify-center leading-[2.81rem] tracking-[-1.12px]">
                Descubre cómo la oxigenoterapia hiperbárica puede mejorar tu
                salud y calidad de vida
              </div>
              <div className="flex w-[38.97rem] flex-col items-center justify-center font-inter text-[1.11rem] text-gray-200">
                <div className="relative flex w-[38.97rem] items-center justify-center leading-[1.64rem]">
                  En Hiperbarica del sur peru te ofrecemos la oportunidad de
                  mejorar tu salud y bienestar con nuestra técnica terapéutica
                  de última generación: la oxigenoterapia hiperbárica. Este
                  tratamiento consiste en la administración de oxígeno puro al
                  100% a una presión mayor que la atmosférica, lo que ayuda a
                  reducir la inflamación, aliviar el dolor y acelerar la
                  curación de heridas crónicas
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center self-stretch text-[1.5rem] text-black">
              <div className="flex w-[32.63rem] flex-row items-start justify-center">
                <div className="flex flex-1 flex-col items-center justify-center gap-[1.25rem]">
                  <div className="flex h-[4rem] w-[4rem] shrink-0 flex-col items-center justify-start">
                    <img
                      className="relative h-[4.06rem] w-[4.06rem] shrink-0"
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className="relative mt-[-3.06rem] h-[3.75rem] w-[3.75rem] shrink-0 object-cover"
                      alt=""
                      src="/image5@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center self-stretch overflow-hidden">
                    <div className="relative flex w-[9.63rem] shrink-0 items-center justify-center leading-[1.5rem]">
                      Reduce la inflamación
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-[1.25rem]">
                  <div className="flex h-[4rem] w-[4rem] shrink-0 flex-col items-center justify-start">
                    <img
                      className="relative h-[4.06rem] w-[4.06rem] shrink-0"
                      alt=""
                      src="/vector2.svg"
                    />
                    <img
                      className="relative mt-[-2.75rem] h-[3.75rem] w-[3.75rem] shrink-0 object-cover"
                      alt=""
                      src="/image6@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center self-stretch overflow-hidden">
                    <div className="relative flex w-[9.63rem] shrink-0 items-center justify-center leading-[1.5rem]">
                      Alivia el dolor
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-[1.25rem]">
                  <div className="flex h-[4rem] w-[4rem] shrink-0 flex-col items-center justify-start">
                    <img
                      className="relative h-[4.06rem] w-[4.06rem] shrink-0"
                      alt=""
                      src="/vector3.svg"
                    />
                    <img
                      className="relative mt-[-2.87rem] h-[3.75rem] w-[3.75rem] shrink-0 object-cover"
                      alt=""
                      src="/image7@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center self-stretch overflow-hidden">
                    <div className="relative flex w-[9.63rem] shrink-0 items-center justify-center leading-[1.5rem]">
                      Reduce la inflamación
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TRATAMIENTO POST-COVID */}
      <div className="flex flex-col items-center justify-center overflow-hidden bg-primary-100 px-[12rem] py-[6rem]">
        <div className="flex w-[96rem] flex-row items-center justify-center gap-[4rem] overflow-hidden">
          <div className="flex flex-col items-start justify-center gap-[2rem]">
            <div className="flex flex-col items-start justify-center gap-[1rem]">
              <div className="flex flex-col items-start justify-center gap-[0.75rem]">
                <div className="relative font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
                  TRATAMIENTO POST-COVID
                </div>
                <div className="relative flex w-[44.09rem] items-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">
                  ¿Sigues luchando con los efectos del COVID?
                </div>
              </div>
              <div className="flex h-[9.88rem] w-[38.97rem] shrink-0 flex-col items-center justify-center text-[1.11rem] text-gray-200">
                <div className="relative flex w-[38.97rem] items-center leading-[1.64rem]">
                  La terapia hiperbárica ha demostrado ser una solución efectiva
                  para los efectos post-COVID, como fatiga, dificultad
                  respiratoria y daño pulmonar. Nuestro equipo de profesionales
                  de la salud está capacitado para ayudar a los pacientes a
                  recuperarse y mejorar su calidad de vida mediante la
                  oxigenoterapia hiperbárica.
                </div>
              </div>
            </div>
            <div className="flex w-[13.44rem] flex-col items-center justify-center overflow-hidden">
              <CalDialog />
            </div>
          </div>
          <img
            className="max-h-full max-w-full overflow-hidden rounded-3xl object-cover"
            alt=""
            src="/frame-21@2x.png"
          />
        </div>
      </div>
      <div className="box-border flex w-[120rem] flex-row items-center justify-center overflow-hidden bg-white px-[0.63rem] py-[6rem]">
        <div className="box-border flex w-[96rem] shrink-0 flex-col items-center justify-center gap-[4rem] overflow-hidden px-[0.06rem] py-[0rem]">
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            <div className="flex flex-col items-center justify-center gap-[0.75rem]">
              <div className="relative font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
                TRATAMIENTOS
              </div>
              <div className="relative flex w-[44.09rem] items-center justify-center text-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">
                Condiciones que podemos tratar con la terapia hiperbárica
              </div>
            </div>
            <div className="flex h-[9.88rem] w-[38.97rem] shrink-0 flex-col items-center justify-center text-center text-[1.11rem] text-gray-200">
              <div className="relative flex w-[38.97rem] items-center justify-center leading-[1.64rem]">
                En Hiperbarica del Sur Perú, nuestro tratamiento de terapia
                hiperbárica de última generación ofrece alivio para una amplia
                variedad de condiciones médicas. Desde lesiones cerebrales hasta
                heridas crónicas, nuestro equipo médico profesional está
                capacitado para brindar un enfoque especializado que se adapta a
                tus necesidades individuales.
              </div>
            </div>
          </div>
          <div className="relative grid h-[101.5rem] w-[77.06rem] shrink-0 grid-cols-3 gap-8">
            {diseasesCopy.map((copy, i) => (
              <IllnessCard
                key={i}
                title={copy.title}
                description={copy.description}
              />
            ))}
          </div>
        </div>
      </div>
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
                  Me siento como una persona completamente nueva después de
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
                una cita gratuita hoy mismo!
              </div>
            </div>
            <div className="flex w-[38.97rem] flex-col items-center justify-center font-inter text-[1.11rem] text-gray-200">
              <div className="relative flex w-[38.97rem] items-center justify-center leading-[1.64rem]">
                ¡No esperes más y comienza tu camino hacia una mejor salud con
                Hiperbárica del Sur Perú! Nuestro equipo médico profesional
                estará encantado de atenderte y responder a todas tus preguntas
              </div>
            </div>
          </div>
          <div className="flex w-[13.44rem] flex-col items-center justify-center overflow-hidden">
            <div className="rounded-4xs box-border flex h-[3.13rem] w-[13.44rem] shrink-0 cursor-pointer flex-col items-end justify-center bg-primary-400 px-[1.38rem] py-[0rem] [border:none]">
              <CalDialog />
            </div>
          </div>
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
    </section>
  );
}
