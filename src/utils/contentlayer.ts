export const categories = ["tratamientos", "efectividad", "general"] as const;
export const treatments = {
  endocrinología: {
    icon: "gland.png",
    diseases: [
      {
        title: "Diabetes mellitus",
        url: "/blog/diabetes-mellitus",
        image: "/blog/diabetes/og.jpg",
        description:
          "La Diabetes Mellitus es una enfermedad crónica caracterizada por altos niveles de glucosa en la sangre debido a una deficiencia o resistencia a la insulina, lo que puede causar complicaciones graves, como el pie diabético",
        icon: "",
      },
      {
        title: "Pie diabético",
        url: "/blog/pie-diabetico",
        image: "/blog/pie-diabetico/og.jpg",
        description:
          "Una complicación de la diabetes que provoca cicatrización lenta de heridas, infecciones y amputaciones. La terapia de oxígeno hiperbárico puede acelerar el proceso de curación",
        icon: "",
      },
    ],
  },
  traumatología: {
    icon: "bone.png",
    diseases: [
      {
        title: "Fracturas",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Osteomielitis",
        url: "/blog/osteomielitis",
        image: "/blog/osteomielitis/og.jpg",
        description:
          "La osteomielitis es una infección ósea que puede provocar dolor, fiebre, inflamación y necrosis ósea. Nuestra clínica ofrece un tratamiento seguro y efectivo para casos crónicos y refractarios a través de la terapia con oxígeno hiperbárico.",
        icon: "",
      },
    ],
  },
  reumatología: {
    icon: "joint.png",
    diseases: [
      {
        title: "Osteoporosis",
        url: "/blog/osteoporosis",
        image: "/blog/osteoporosis/og.jpg",
        description:
          "La terapia de oxígeno hiperbárico (TOHB) puede aumentar la densidad ósea y reducir el riesgo de fracturas en pacientes con Osteoporosis",
        icon: "",
      },
      {
        title: "Fibromialgia",
        url: "/blog/fibromalgia",
        image: "/blog/fibromalgia/og.webp",
        description:
          "La fibromialgia es un síndrome de dolor crónico que afecta a millones de personas en todo el mundo. Aunque su causa es desconocida, se cree que está relacionada con alteraciones en las vías del procesamiento del dolor en el cerebro",
        icon: "",
      },
      {
        title: "Vasculitis",
        url: "/blog/vasculitis",
        image: "/blog/vasculitis/og.webp",
        description:
          "La vasculitis es una afección en la que el sistema inmunológico del cuerpo ataca y daña los vasos sanguíneos, lo que puede causar síntomas como fiebre, fatiga, dolor en las articulaciones y erupciones en la piel",
        icon: "",
      },
      {
        title: "Esclerodermia",
        url: "/blog/esclerodermia",
        image: "/blog/esclerodermia/og.webp",
        description:
          "La esclerodermia es una enfermedad autoinmune crónica que afecta la piel y otros órganos del cuerpo. Causa endurecimiento y engrosamiento de la piel y puede provocar complicaciones como dolor articular, dificultad para tragar y problemas pulmonares",
        icon: "",
      },
      {
        title: "Artritis",
        url: "/blog/artritis",
        image: "/blog/artritis/og.webp",
        description:
          "La artritis reumatoide es una enfermedad inflamatoria crónica que causa dolor, hinchazón, rigidez y pérdida de movilidad en las articulaciones",
        icon: "",
      },
    ],
  },
  "secuelas oncológicas": {
    icon: "cancer.png",
    diseases: [
      {
        title: "Lesiones por radioterapia",
        url: "/blog/lesiones-por-radioterapia",
        image: "/blog/lesiones-por-radioterapia/og.webp",
        description:
          "Las lesiones de tejidos inducidas por la radiación son condiciones crónicas y dolorosas que resultan de la radioterapia utilizada para tratar el cáncer. Estas lesiones pueden ocurrir en varias partes del cuerpo y pueden ser debilitantes",
        icon: "",
      },
    ],
  },
  heridas: {
    icon: "bandage.png",
    diseases: [
      {
        title: "Úlcera",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Quemaduras",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "heridas post-quirúrgicas",
        url: "/blog/heridas-post-quirurgicas",
        image: "/blog/heridas-post-quirurgicas/og.webp",
        description:
          "Las heridas postoperatorias pueden ser complicadas y difíciles de curar, especialmente en pacientes con factores de riesgo como diabetes, mala circulación, tabaquismo, obesidad o radioterapia",
        icon: "",
      },
    ],
  },
  oído: {
    icon: "ear.png",
    diseases: [
      {
        title: "Sordera súbita",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
    ],
  },
  neurología: {
    icon: "brain.png",
    diseases: [
      {
        title: "Parálisis cerebral",
        url: "/blog/paralisis-cerebral",
        image: "/blog/paralisis-cerebral/og.jpg",
        description:
          "Parálisis cerebral es una condición que afecta al sistema nervioso y causa problemas de movimiento y postura. Es causada por daño en el cerebro durante el desarrollo, a menudo antes del nacimiento",
        icon: "",
      },
      {
        title: "Trastorno del espectro autista (TEA)",
        url: "/blog/autismo",
        image: "/blog/autismo/og.jpg",
        description:
          "Los Trastornos del Espectro Autista (TEA) son trastornos del desarrollo caracterizados por dificultades en la interacción social, comunicación y comportamiento. Los afecta de diferentes maneras y puede variar desde leve hasta grave",
        icon: "blocks.png",
      },
      {
        title: "Neurología infantil",
        url: "/blog/neurologia-infantil",
        image: "/blog/neurologia-infantil/og.webp",
        description:
          "La terapia con oxígeno hiperbárico (TOHB) puede beneficiar a niños con condiciones neurológicas como la parálisis cerebral, el síndrome post-conmoción cerebral, el autismo y el TDAH. Los estudios actuales sugieren que el TOHB puede mejorar la función cognitiva, la espasticidad muscular y la calidad de vida en general",
        icon: "",
      },
      {
        title: "Migraña",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Post-ictus",
        url: "/blog/ictus",
        image: "/blog/ictus/og.jpg",
        description:
          "Aprenda cómo la oxigenoterapia hiperbárica puede ayudarlo a recuperarse de las secuelas del ictus. Esta enfermedad es una repentina interrupción del flujo sanguíneo al cerebro que puede causar daños duraderos en las habilidades cognitivas y motoras",
        icon: "",
      },
      {
        title: "Esclerosis Múltiple",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Alzheimer",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Lesiones de la médula espinal",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Parkinson",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
    ],
  },
  deporte: {
    icon: "soccer.png",
    diseases: [
      {
        title: "Lesiones musculares",
        url: "/blog/lesiones-musculares",
        image: "/blog/lesiones-musculares/og.jpg",
        description:
          "Las lesiones musculares son comunes en los deportistas y pueden ir desde pequeñas roturas de fibras hasta desgarros y contracturas más graves. El uso de terapia con oxígeno hiperbárico (TOHB) puede acelerar el proceso de curación.",
        icon: "",
      },
      {
        title: "Síndrome de fatiga aguda y cronica",
        url: "/blog/fatiga",
        image: "/blog/fatiga/og.jpg",
        description:
          "El Síndrome de Fatiga Crónica (SFC) es una condición crónica que se caracteriza por un cansancio persistente y debilitante que no mejora con el descanso. Puede causar otros síntomas como dolor muscular, problemas de sueño y dificultades cognitivas",
        icon: "",
      },
      {
        title: "Recuperación post-ejercicio",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
    ],
  },
  dermatología: {
    icon: "skin.png",
    diseases: [
      {
        title: "Problemas de cicatrización en heridas",
        url: "/blog/cicatrizacion",
        image: "/blog/cicatrizacion/og.jpg",
        description:
          "La terapia con oxígeno hiperbárico (TOHB) es un tratamiento altamente efectivo para acelerar la cicatrización de heridas. La terapia reduce el dolor y la inflamación, previene complicaciones graves y potencia el efecto de otros tratamientos.",
        icon: "",
      },
      {
        title: "Infecciones necrotizantes de tejidos blandos",
        url: "/blog/infecciones-necrotizantes",
        image: "/blog/infecciones-necrotizantes/og.jpg",
        description:
          "Infecciones Necrotizantes de Tejidos Blandos (INTB) es una grave infección bacteriana que ataca los tejidos blandos. Puede causar daño tisular, inflamación e incluso necrosis",
        icon: "",
      },
    ],
  },
  oftalmológia: {
    icon: "eye.png",
    diseases: [
      {
        title: "Oclusión de arteria central de la retina",
        url: "/blog/OACR",
        image: "/blog/OACR/og.jpg",
        description:
          "Una obstrucción súbita en la circulación sanguínea de la retina que puede resultar en pérdida de visión irreversible. La terapia con oxígeno hiperbárico (TOHB) puede mejorar el pronóstico visual de los pacientes con OACR",
        icon: "",
      },
    ],
  },
  gastroenterología: {
    icon: "intestines.png",
    diseases: [
      {
        title: "Íleo paralítico",
        url: "/blog/ileo-paralitico",
        image: "/blog/ileo-paralitico/og.webp",
        description:
          "Íleo paralítico postoperatorio y obstrucción intestinal son dos condiciones que pueden ocurrir después de una cirugía abdominal y afectar la actividad normal del intestino. La terapia con oxígeno hiperbárico (TOHB) es un tratamiento seguro y efectivo para aliviar estos síntomas",
        icon: "",
      },
    ],
  },
  otros: {
    icon: "",
    diseases: [
      {
        title: "Anemia de difícil tratamiento",
        url: "/blog/anemia",
        image: "/blog/anemia/og.webp",
        description:
          "La anemia es una condición en la que el cuerpo carece de suficientes glóbulos rojos para transportar oxígeno adecuado a los tejidos. Puede causar fatiga, debilidad y falta de aire, entre otros síntomas",
        icon: "blood.png",
      },
      {
        title: "Intoxicación por gases toxicos",
        url: "/blog/intoxicacion-monoxido-de-carbono",
        image: "/blog/intoxicacion-monoxido-de-carbono/og.jpg",
        description:
          "El envenenamiento por monóxido de carbono es una condición grave que puede causar daño cerebral o incluso la muerte. La TOHB puede aumentar significativamente las posibilidades de recuperación completa y prevenir complicaciones.",
        icon: "gas.png",
      },
      {
        title: "Procesos infecciosos",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "virus.png",
      },
      {
        title: "Fertilidad",
        url: "/blog/fertilidad",
        image: "/blog/fertilidad/og.webp",
        description:
          "La infertilidad es una condición médica que afecta a un número significativo de parejas en todo el mundo. Se caracteriza por la incapacidad de concebir después de un año de relaciones sexuales sin protección",
        icon: "mother.png",
      },
      {
        title: "Antienjecimiento",
        url: "/blog/antienvejecimiento",
        image: "/blog/antienvejecimiento/og.webp",
        description:
          "La terapia con oxígeno hiperbárico (TOHB) ha demostrado tener implicaciones terapéuticas en el envejecimiento saludable y la prevención de enfermedades relacionadas con la edad",
        icon: "hourglass.png",
      },
    ],
  },
};
export function formatSlug(slug: string) {
  return slug.split("/").pop();
}
export function capitalize(str: string): string {
  return str.replace(/^\W*\w/, (match) => match.toUpperCase());
}
