import { type NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function CalDialog({ Trigger }: { Trigger: React.ElementType }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (async function () {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          styles: {
            branding: { brandColor: "#74c0fc" },
          },
          hideEventTypeDetails: false,
        });
      })().catch(console.error);
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <Trigger />
      </DialogTrigger>
      <DialogContent>
        <div className="h-auto w-[40vw]">
          <Cal
            calLink="hiperbaricadelsurperu/cita-gratuita"
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
function CTABttn() {
  return (
    <span className="rounded-4xs [border:none ] box-border flex h-[3.13rem] w-[13.44rem] shrink-0 cursor-pointer flex-col items-end justify-center bg-primary-400 px-[1.38rem] py-[0rem] text-left font-inter text-[0.99rem] font-semibold leading-[1.25rem] text-white">
      Agendar cita gratuita
    </span>
  );
}

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
              <CalDialog Trigger={CTABttn} />
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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hiperbárica del sur Perú</title>
        <meta
          name="description"
          content="Hiperbarica del sur peru es una clínica que ofrece tratamientos de oxígeno hiperbárico para aliviar secuelas del COVID, así como otras condiciones médicas. El primer paso para comenzar es programar una cita gratuita ya sea virtual o presencial con uno de nuestros profesionales. Contamos con tecnología de última generación y equipo médico profesional para ofrecer seguridad, alta calidad y una experiencia personalizada en terapias hiperbáricas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex w-full flex-col items-center justify-center text-left font-inter text-[0.82rem] text-primary-500">
        <div className="box-border flex h-[6.44rem] w-[120rem] shrink-0 flex-row items-center justify-between bg-primary-100 px-[3rem] py-[0rem] font-lora text-[1.25rem] text-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)]">
          <div className="flex flex-row items-center justify-center gap-[0.75rem]">
            <img
              className="relative h-[3.02rem] w-[3.01rem] shrink-0"
              alt=""
              src="/vector.svg"
            />
            <div className="flex flex-col items-start justify-center">
              <div className="relative leading-[1.75rem]">
                Hiperbárica del sur
              </div>
              <div className="relative font-inter text-[0.75rem] font-light leading-[1rem]">
                El arte de oxigenarte
              </div>
            </div>
          </div>
          <div className="box-border flex h-[2.63rem] w-[31.25rem] shrink-0 flex-row items-center justify-start gap-[1.81rem] px-[0rem] pb-[0.04rem] pt-[0.05rem] font-inter text-[0.81rem] text-gray-500">
            <a
              className="relative font-medium leading-[1.41rem] text-[inherit] [text-decoration:none]"
              target="_blank"
            >
              Servicios
            </a>
            <a
              className="relative font-medium leading-[1.41rem] text-[inherit] [text-decoration:none]"
              target="_blank"
            >
              Contáctanos
            </a>
            <a
              className="relative text-[0.88rem] font-medium leading-[1.41rem] text-[inherit] [text-decoration:none]"
              target="_blank"
            >
              Blog
            </a>
            <div className="rounded-4xs box-border flex h-[3.13rem] w-[13.63rem] shrink-0 cursor-pointer flex-col items-end justify-center bg-primary-400 px-[1.56rem] py-[0rem] [border:none]">
              <CalDialog Trigger={CTABttn} />
            </div>
          </div>
        </div>
        <Hero />
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
                    La terapia hiperbárica ha demostrado ser una solución
                    efectiva para los efectos post-COVID, como fatiga,
                    dificultad respiratoria y daño pulmonar. Nuestro equipo de
                    profesionales de la salud está capacitado para ayudar a los
                    pacientes a recuperarse y mejorar su calidad de vida
                    mediante la oxigenoterapia hiperbárica.
                  </div>
                </div>
              </div>
              <div className="flex w-[13.44rem] flex-col items-center justify-center overflow-hidden">
                <CalDialog Trigger={CTABttn} />
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
                  variedad de condiciones médicas. Desde lesiones cerebrales
                  hasta heridas crónicas, nuestro equipo médico profesional está
                  capacitado para brindar un enfoque especializado que se adapta
                  a tus necesidades individuales.
                </div>
              </div>
            </div>
            <div className="relative grid h-[101.5rem] w-[77.06rem] shrink-0 grid-cols-3 gap-8">
              {diseasesCopy.map((copy) => (
                <IllnessCard
                  title={copy.title}
                  description={copy.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="box-border flex w-[120rem] flex-col items-center justify-center bg-white px-[0rem] py-[6rem]">
          <div className="box-border flex w-[96rem] flex-col items-center justify-center gap-[4rem] overflow-hidden bg-white px-[12.25rem] py-[0rem]">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-[0.75rem]">
                <div className="relative font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
                  BENEFICIOS
                </div>
                <div className="relative flex w-[44.09rem] items-center justify-center text-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">{`Los beneficios de la terapia hiperbárica que debes conocer para mejorar tu salud y bienestar `}</div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[2rem] px-[0.06rem] py-[0rem] text-[4.16rem]">
              <div className="flex flex-col items-start justify-start gap-[2rem] overflow-hidden rounded-md bg-primary-100 p-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-semibold leading-[5.04rem]">
                    30%
                  </div>
                  <div className="relative flex w-[15.69rem] items-center text-[1.11rem] leading-[1.64rem] text-gray-200">
                    Reduce la inflamación en un promedio del 30% en pacientes
                    con enfermedades crónicas.
                  </div>
                </div>
                <div className="flex h-[4rem] w-[4rem] shrink-0 flex-col items-center justify-start">
                  <img
                    className="relative h-[4.06rem] w-[4.06rem] shrink-0"
                    alt=""
                    src="/vector4.svg"
                  />
                  <img
                    className="relative mt-[-3.06rem] h-[3.75rem] w-[3.75rem] shrink-0 object-cover"
                    alt=""
                    src="/image8@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[2rem] overflow-hidden rounded-md bg-primary-100 p-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-semibold leading-[5.04rem]">
                    30%
                  </div>
                  <div className="relative flex w-[15.69rem] items-center text-[1.11rem] leading-[1.64rem] text-gray-200">
                    Reduce la inflamación en un promedio del 30% en pacientes
                    con enfermedades crónicas.
                  </div>
                </div>
                <div className="flex h-[4rem] w-[4rem] shrink-0 flex-col items-center justify-start">
                  <img
                    className="relative h-[4.06rem] w-[4.06rem] shrink-0"
                    alt=""
                    src="/vector4.svg"
                  />
                  <img
                    className="relative mt-[-3.06rem] h-[3.75rem] w-[3.75rem] shrink-0 object-cover"
                    alt=""
                    src="/image8@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[2rem] overflow-hidden rounded-md bg-primary-100 p-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-semibold leading-[5.04rem]">
                    30%
                  </div>
                  <div className="relative flex w-[15.69rem] items-center text-[1.11rem] leading-[1.64rem] text-gray-200">
                    Reduce la inflamación en un promedio del 30% en pacientes
                    con enfermedades crónicas.
                  </div>
                </div>
                <div className="flex h-[4rem] w-[4rem] shrink-0 flex-col items-center justify-start">
                  <img
                    className="relative h-[4.06rem] w-[4.06rem] shrink-0"
                    alt=""
                    src="/vector4.svg"
                  />
                  <img
                    className="relative mt-[-3.06rem] h-[3.75rem] w-[3.75rem] shrink-0 object-cover"
                    alt=""
                    src="/image8@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[2rem] overflow-hidden rounded-md bg-primary-100 p-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative font-semibold leading-[5.04rem]">
                    30%
                  </div>
                  <div className="relative flex w-[15.69rem] items-center text-[1.11rem] leading-[1.64rem] text-gray-200">
                    Reduce la inflamación en un promedio del 30% en pacientes
                    con enfermedades crónicas.
                  </div>
                </div>
                <div className="flex h-[4rem] w-[4rem] shrink-0 flex-col items-center justify-start">
                  <img
                    className="relative h-[4.06rem] w-[4.06rem] shrink-0"
                    alt=""
                    src="/vector4.svg"
                  />
                  <img
                    className="relative mt-[-3.06rem] h-[3.75rem] w-[3.75rem] shrink-0 object-cover"
                    alt=""
                    src="/image8@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border flex w-[120rem] flex-row items-center justify-center overflow-hidden bg-white px-[0rem] py-[6rem]">
          <div className="box-border flex h-[143.21rem] w-[80rem] shrink-0 flex-col items-start justify-end gap-[2.81rem] px-[1.88rem] py-[0rem]">
            <div className="box-border flex h-[4.92rem] w-[76.25rem] shrink-0 flex-col items-start justify-start gap-[0.63rem] px-[0rem] pb-[0rem] pt-[0.06rem]">
              <div className="relative flex h-[1rem] w-[4.28rem] shrink-0 items-center font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
                Proceso
              </div>
              <div className="relative flex h-[3.56rem] w-[31.09rem] shrink-0 items-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">
                La atención que mereces
              </div>
            </div>
            <div className="text-gainsboro flex h-[135.48rem] w-[76.25rem] shrink-0 flex-col items-start justify-end gap-[5.56rem] text-[4.85rem]">
              <div className="flex w-[76.31rem] flex-row items-center justify-start gap-[5.63rem]">
                <div className="relative h-[13.76rem] w-[45.19rem] shrink-0">
                  <div className="absolute left-[0rem] top-[-0.31rem] flex h-[5.63rem] w-[5.62rem] items-center font-semibold leading-[5.04rem]">
                    01
                  </div>
                  <div className="absolute left-[0rem] top-[5.68rem] font-lora text-[2.11rem] leading-[2.34rem] tracking-[-0.84px] text-gray-500">
                    Evaluación inicial
                  </div>
                  <div className="absolute left-[-0.03rem] top-[8.6rem] box-border flex h-[4.69rem] w-[43.66rem] flex-col items-center justify-start px-[0rem] py-[1.68rem] text-[0.93rem] text-gray-200">
                    <div className="relative flex h-[1.19rem] w-[43.63rem] shrink-0 items-center leading-[1.9rem]">
                      Al programar una cita gratuita, ya sea virtual o
                      presencial con un profesional, se evaluará el estado del
                      paciente y recomendará el número de sesiones necesarias.
                      También se informará al paciente sobre los efectos
                      secundarios posibles durante y después de la sesión.
                    </div>
                  </div>
                </div>
                <div className="rounded-4xs flex w-[22.6rem] shrink-0 flex-col items-center justify-center overflow-hidden">
                  <img
                    className="relative h-[22.6rem] w-[22.6rem] shrink-0 overflow-hidden object-cover"
                    alt=""
                    src="/frame9@2x.png"
                  />
                </div>
              </div>
              <div className="flex h-[22.6rem] w-[76.25rem] shrink-0 flex-row items-center justify-start gap-[5.63rem] text-[4.35rem]">
                <div className="rounded-4xs flex w-[22.6rem] shrink-0 flex-col items-center justify-center overflow-hidden">
                  <img
                    className="relative h-[22.6rem] w-[22.6rem] shrink-0 overflow-hidden object-cover"
                    alt=""
                    src="/frame10@2x.png"
                  />
                </div>
                <div className="relative h-[13.76rem] w-[45.19rem] shrink-0">
                  <div className="absolute left-[0rem] top-[-0.31rem] flex h-[5.63rem] w-[5.62rem] items-center font-semibold leading-[5.04rem]">
                    02
                  </div>
                  <div className="absolute left-[0rem] top-[5.55rem] flex h-[2.69rem] w-[11.89rem] items-center font-lora text-[2.11rem] leading-[2.34rem] tracking-[-0.84px] text-gray-500">
                    Preparación
                  </div>
                  <div className="absolute left-[-0.03rem] top-[9.5rem] box-border flex h-[2.88rem] w-[43.65rem] flex-col items-center justify-start px-[0rem] py-[0.77rem] text-[0.93rem] text-gray-200">
                    <div className="relative flex h-[1.19rem] w-[43.63rem] shrink-0 items-center leading-[1.9rem]">
                      Antes de comenzar el tratamiento, el paciente será
                      instruido en los procedimientos de seguridad y las normas
                      de la terapia hiperbárica.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[22.6rem] w-[76.25rem] shrink-0 flex-row items-center justify-end gap-[5.63rem] text-[4.23rem]">
                <div className="relative h-[13.76rem] w-[45.19rem] shrink-0">
                  <div className="absolute left-[0rem] top-[-0.31rem] flex h-[5.63rem] w-[5.62rem] items-center font-semibold leading-[5.04rem]">
                    03
                  </div>
                  <div className="absolute left-[0rem] top-[5.68rem] font-lora text-[2.11rem] leading-[2.34rem] tracking-[-0.84px] text-gray-500">
                    Durante el procedimiento
                  </div>
                  <div className="absolute left-[0rem] top-[8.59rem] box-border flex h-[4.75rem] w-[43.63rem] flex-col items-center justify-start px-[0rem] py-[1.68rem] text-[0.93rem] text-gray-200">
                    <div className="relative flex h-[1.19rem] w-[43.63rem] shrink-0 items-center leading-[1.9rem]">
                      La sesión de terapia hiperbárica se lleva a cabo en una
                      cámara hiperbárica con oxígeno al 100% a presión mayor que
                      la atmosférica. El paciente es monitoreado constantemente
                      por el equipo médico para asegurar su seguridad y cumplir
                      con los estándares de calidad.
                    </div>
                  </div>
                </div>
                <div className="rounded-4xs flex w-[22.6rem] shrink-0 flex-col items-center justify-center overflow-hidden">
                  <img
                    className="relative h-[22.6rem] w-[22.6rem] shrink-0 overflow-hidden object-cover"
                    alt=""
                    src="/frame11@2x.png"
                  />
                </div>
              </div>
              <div className="flex h-[22.6rem] w-[76.25rem] shrink-0 flex-row items-center justify-start gap-[5.63rem] text-[4.16rem]">
                <div className="rounded-4xs flex w-[22.6rem] shrink-0 flex-col items-center justify-center overflow-hidden">
                  <img
                    className="relative h-[22.6rem] w-[22.6rem] shrink-0 overflow-hidden object-cover"
                    alt=""
                    src="/frame12@2x.png"
                  />
                </div>
                <div className="relative h-[13.76rem] w-[45.19rem] shrink-0">
                  <div className="absolute left-[0rem] top-[-0.31rem] flex h-[5.63rem] w-[5.62rem] items-center font-semibold leading-[5.04rem]">
                    04
                  </div>
                  <div className="absolute left-[0rem] top-[5.56rem] flex h-[2.69rem] w-[12.08rem] items-center font-lora text-[2.11rem] leading-[2.34rem] tracking-[-0.84px] text-gray-500">
                    Tratamiento.
                  </div>
                  <div className="absolute left-[0rem] top-[9.96rem] box-border flex h-[3.8rem] w-[45.19rem] flex-col items-start justify-start gap-[0.69rem] px-[0rem] py-[0.31rem] text-[0.93rem] text-gray-200">
                    <div className="relative flex h-[1.19rem] w-[43.63rem] shrink-0 items-center leading-[1.9rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus vulputate lorem hendrerit est
                    </div>
                    <div className="relative flex h-[1.19rem] w-[35.57rem] shrink-0 items-center leading-[1.9rem]">
                      hendrerit egestas. Proin ac metus egestas, luctus ligula
                      finibus, dictum urna.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[22.6rem] w-[76.25rem] shrink-0 flex-row items-center justify-end gap-[5.63rem] text-[4.29rem]">
                <div className="relative h-[13.76rem] w-[45.19rem] shrink-0">
                  <div className="absolute left-[0rem] top-[-0.31rem] flex h-[5.63rem] w-[5.62rem] items-center font-semibold leading-[5.04rem]">
                    05
                  </div>
                  <div className="absolute left-[0rem] top-[5.56rem] flex h-[2.69rem] w-[14.9rem] items-center font-lora text-[2.11rem] leading-[2.34rem] tracking-[-0.84px] text-gray-500">
                    Hospitalización.
                  </div>
                  <div className="absolute left-[0rem] top-[9.96rem] box-border flex h-[3.8rem] w-[45.19rem] flex-col items-start justify-start gap-[0.69rem] px-[0rem] py-[0.31rem] text-[0.93rem] text-gray-200">
                    <div className="relative flex h-[1.19rem] w-[43.63rem] shrink-0 items-center leading-[1.9rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus vulputate lorem hendrerit est
                    </div>
                    <div className="relative flex h-[1.19rem] w-[35.57rem] shrink-0 items-center leading-[1.9rem]">
                      hendrerit egestas. Proin ac metus egestas, luctus ligula
                      finibus, dictum urna.
                    </div>
                  </div>
                </div>
                <div className="rounded-4xs flex w-[22.6rem] shrink-0 flex-col items-center justify-center overflow-hidden">
                  <img
                    className="relative h-[22.6rem] w-[22.6rem] shrink-0 overflow-hidden object-cover"
                    alt=""
                    src="/frame13@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="box-border flex w-[120rem] flex-col items-center justify-center overflow-hidden bg-white px-[0rem] py-[6rem] text-center font-lora text-[2.81rem] text-gray-500">
          <div className="flex flex-col items-center justify-center gap-[2rem] overflow-hidden rounded-3xl bg-primary-200 px-[25.94rem] py-[6.5rem]">
            <div className="flex flex-col items-center justify-center gap-[1rem]">
              <div className="flex flex-col items-center justify-center">
                <div className="relative flex w-[44.09rem] items-center justify-center leading-[2.81rem] tracking-[-1.12px]">
                  ¿Listo para mejorar tu salud con la terapia hiperbárica?
                  ¡Agenda una cita gratuita hoy mismo!
                </div>
              </div>
              <div className="flex w-[38.97rem] flex-col items-center justify-center font-inter text-[1.11rem] text-gray-200">
                <div className="relative flex w-[38.97rem] items-center justify-center leading-[1.64rem]">
                  ¡No esperes más y comienza tu camino hacia una mejor salud con
                  Hiperbárica del Sur Perú! Nuestro equipo médico profesional
                  estará encantado de atenderte y responder a todas tus
                  preguntas
                </div>
              </div>
            </div>
            <div className="flex w-[13.44rem] flex-col items-center justify-center overflow-hidden">
              <div className="rounded-4xs box-border flex h-[3.13rem] w-[13.44rem] shrink-0 cursor-pointer flex-col items-end justify-center bg-primary-400 px-[1.38rem] py-[0rem] [border:none]">
                <CalDialog Trigger={CTABttn} />
              </div>
            </div>
          </div>
        </div>
        <div className="box-border flex w-[120rem] flex-col items-center justify-center overflow-hidden bg-white px-[0rem] py-[6rem]">
          <div className="box-border flex w-[96rem] flex-col items-start justify-start overflow-hidden px-[0rem] py-[0.06rem]">
            <div className="flex flex-col items-start justify-center gap-[0.75rem]">
              <div className="relative font-medium uppercase leading-[1.17rem] tracking-[0.75px]">
                PREGUNTAS FREQUENTES
              </div>
              <div className="relative flex w-[44.09rem] items-center font-lora text-[2.81rem] leading-[2.81rem] tracking-[-1.12px] text-gray-500">
                Descubre todo lo que necesitas saber sobre la terapia
                hiperbárica
              </div>
            </div>
          </div>
        </div>
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
        <div className="box-border flex w-[120rem] flex-col items-center justify-center overflow-hidden bg-white px-[0rem] py-[6rem] text-[0.93rem] text-gray-100">
          <div className="flex h-[22.5rem] w-[96rem] shrink-0 flex-col items-center justify-end overflow-hidden">
            <div className="relative h-[22.64rem] w-[80rem] shrink-0">
              <div className="absolute left-[1.88rem] right-[57.78rem] top-[5.63rem] box-border flex h-[11.39rem] w-[calc(100%_-_954.5px)] flex-col items-center justify-end px-[0rem] py-[4.91rem]">
                <div className="flex flex-row items-start justify-start gap-[1.41rem] py-[0rem] pl-[0rem] pr-[16.41rem]">
                  <img
                    className="relative h-[1.27rem] w-[1.27rem] shrink-0 overflow-hidden"
                    alt=""
                    src="/frame20.svg"
                  />
                  <img
                    className="relative h-[1.27rem] w-[1.27rem] shrink-0 overflow-hidden"
                    alt=""
                    src="/frame21.svg"
                  />
                </div>
              </div>
              <div className="absolute left-[25.03rem] top-[5.63rem] box-border flex h-[11.39rem] w-[20.34rem] flex-col items-start justify-start gap-[2.56rem] px-[0rem] pb-[0rem] pt-[0.19rem]">
                <div className="relative flex h-[1.19rem] w-[4.23rem] shrink-0 items-center font-medium leading-[1.64rem]">
                  Contacto
                </div>
                <div className="flex h-[7.41rem] w-[20.34rem] shrink-0 flex-col items-center justify-start gap-[1.38rem] text-[0.88rem]">
                  <div className="box-border flex h-[3rem] w-[20.34rem] shrink-0 flex-col items-start justify-start gap-[0.44rem] px-[0rem] py-[0.19rem]">
                    <div className="relative flex h-[1.06rem] w-[19.61rem] shrink-0 items-center leading-[1.5rem]">
                      Clínica SantaMaría, Elías Aguirre #761- interior
                    </div>
                    <div className="relative flex h-[1.06rem] w-[16.12rem] shrink-0 items-center leading-[1.5rem]">
                      1er piso, 2do Pabellón Chimbote, Perú
                    </div>
                  </div>
                  <div className="relative h-[3rem] w-[20.34rem] shrink-0 text-[0.81rem] text-gray-100">
                    <div className="absolute left-[0rem] top-[0.19rem] flex h-[1.06rem] w-[5.33rem] items-center leading-[1.41rem]">
                      992-569-407
                    </div>
                    <div className="absolute left-[5.32rem] top-[0.19rem] flex h-[1.06rem] w-[0.8rem] items-center text-[0.94rem] leading-[1.5rem] text-gray-100">{` / `}</div>
                    <div className="absolute left-[6.1rem] top-[0.19rem] flex h-[1.06rem] w-[5.33rem] items-center leading-[1.41rem]">
                      969-780-055
                    </div>
                    <div className="absolute left-[0rem] top-[1.5rem] text-[0.88rem] leading-[1.41rem]">
                      contacto@hiperbaricadelsurperu.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-[48.19rem] top-[5.63rem] box-border flex h-[9.52rem] w-[13.56rem] flex-col items-start justify-start gap-[2.56rem] px-[0rem] py-[0.19rem]">
                <div className="relative flex h-[1.19rem] w-[3.41rem] shrink-0 items-center font-medium leading-[1.64rem]">
                  Cuenta
                </div>
                <div className="box-border flex h-[4.22rem] w-[13.56rem] shrink-0 flex-col items-start justify-start gap-[1.75rem] px-[0rem] py-[0.13rem] text-[0.88rem] text-gray-100">
                  <a
                    className="relative flex h-[1.06rem] w-[5.43rem] shrink-0 items-center leading-[1.41rem] text-[inherit] [text-decoration:none]"
                    href="https://osteocenter.vercel.app/"
                    target="_blank"
                  >
                    Crear cuenta
                  </a>
                  <a
                    className="relative flex h-[1.06rem] w-[2.57rem] shrink-0 items-center leading-[1.41rem] text-[inherit] [text-decoration:none]"
                    href="https://osteocenter.vercel.app/"
                    target="_blank"
                  >
                    Entrar
                  </a>
                </div>
              </div>
              <div className="absolute left-[64.56rem] top-[5.63rem] box-border flex h-[9.52rem] w-[13.56rem] flex-col items-start justify-start gap-[2.56rem] px-[0rem] py-[0.19rem] text-[0.99rem]">
                <div className="relative flex h-[1.19rem] w-[3.23rem] shrink-0 items-center font-medium leading-[1.64rem]">
                  Clínica
                </div>
                <div className="box-border flex h-[4.22rem] w-[13.56rem] shrink-0 flex-col items-start justify-start gap-[1.75rem] px-[0rem] py-[0.13rem] text-[0.88rem] text-gray-100">
                  <a
                    className="relative flex h-[1.06rem] w-[7.88rem] shrink-0 items-center leading-[1.41rem] text-[inherit] [text-decoration:none]"
                    href="https://osteocenter.vercel.app/"
                    target="_blank"
                  >
                    Sobre Osteocenter
                  </a>
                  <a
                    className="relative flex h-[1.06rem] w-[1.89rem] shrink-0 items-center leading-[1.41rem] text-[inherit] [text-decoration:none]"
                    href="https://osteocenter.vercel.app/blog"
                    target="_blank"
                  >
                    Blog
                  </a>
                </div>
              </div>
              <div className="absolute left-[1.88rem] top-[5.81rem] flex flex-row items-center justify-center gap-[0.75rem] font-lora text-[1.25rem] text-black">
                <img
                  className="relative h-[3.02rem] w-[3.01rem] shrink-0"
                  alt=""
                  src="/vector5.svg"
                />
                <div className="flex flex-col items-start justify-center">
                  <div className="relative leading-[1.75rem]">
                    Hiperbárica del sur
                  </div>
                  <div className="relative font-inter text-[0.75rem] font-light leading-[1rem]">
                    El arte de oxigenarte
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
