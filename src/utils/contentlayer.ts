export const categories = ["tratamientos", "efectividad", "general"] as const;
export const treatments = {
  endocrinologia: {
    title: "Endocrinología",
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
  traumatologia: {
    title: "Traumatología",
    icon: "bone.png",
    diseases: [
      {
        title: "Fracturas",
        url: "/blog/trauma-extremidades-inferiores",
        image: "/blog/trauma-extremidades-inferiores/og.webp",
        description:
          "Trauma de extremidad inferior es una lesión común que puede afectar a los tejidos blandos, los huesos y las estructuras neurovasculares de la pierna o el pie. Puede causar complicaciones como necrosis, infección, cicatrización deficiente o amputación",
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
  reumatologia: {
    title: "Reumatología",
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
  "secuelas-oncologicas": {
    title: "Secuelas oncológicas",
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
    title: "Heridas",
    icon: "bandage.png",
    diseases: [
      // {
      //   title: "Úlcera",
      //   url: "#",
      //   image: "/blog/pie-diabetico/og.jpg",
      //   description: "",
      //   icon: "",
      // },
      {
        title: "Quemaduras",
        url: "/blog/quemaduras",
        image: "/blog/quemaduras/og.webp",
        description:
          "Las quemaduras térmicas son lesiones graves que requieren un tratamiento adecuado para evitar complicaciones y cicatrices. La Terapia con Oxígeno Hiperbárico (TOHB) puede ser una herramienta valiosa en el tratamiento de quemaduras térmicas",
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
  oido: {
    title: "Oído",
    icon: "ear.png",
    diseases: [
      {
        title: "Sordera súbita",
        url: "/blog/sordera-subita",
        image: "/blog/sordera-subita/og.webp",
        description:
          "La sordera súbita es una pérdida rápida de la audición que puede ocurrir sin una causa obvia. La mayoría de los casos son unilaterales y pueden ir acompañados de otros síntomas como acúfenos, vértigo o sensación de presión en el oído",
        icon: "",
      },
    ],
  },
  neurologia: {
    title: "Neurología",
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
        url: "/blog/migrana",
        image: "/blog/migrana/og.webp",
        description:
          "La migraña es un trastorno neurológico que causa dolores de cabeza intensos y una serie de otros síntomas",
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
      // {
      //   title: "Esclerosis Múltiple",
      //   url: "#",
      //   image: "/blog/pie-diabetico/og.jpg",
      //   description: "",
      //   icon: "",
      // },
      {
        title: "Alzheimer",
        url: "/blog/alzheimer",
        image: "/blog/alzheimer/og.webp",
        description:
          "El Alzheimer es una enfermedad grave que afecta al cerebro y causa problemas de memoria y cognición",
        icon: "",
      },
      {
        title: "Lesiones de la médula espinal",
        url: "/blog/lesiones-de-medula-espinal",
        image: "/blog/lesiones-de-medula-espinal/og.webp",
        description:
          "Lesión de la médula espinal es una condición que afecta la capacidad de transmitir señales nerviosas entre el cerebro y el resto del cuerpo. Puede provocar pérdida de sensibilidad, movilidad, control de funciones corporales e incluso funciones sexuales dependiendo de la gravedad y el nivel de la lesión",
        icon: "",
      },
      {
        title: "Parkinson",
        url: "/blog/parkinson",
        image: "/blog/parkinson/og.webp",
        description:
          "La enfermedad de Parkinson es un trastorno neurodegenerativo que afecta el movimiento. Es causada por la pérdida de neuronas productoras de dopamina en el cerebro. Los síntomas incluyen temblores, rigidez y problemas de equilibrio y coordinación",
        icon: "",
      },
    ],
  },
  deporte: {
    title: "Deporte",
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
      // {
      //   title: "Recuperación post-ejercicio",
      //   url: "#",
      //   image: "/blog/pie-diabetico/og.jpg",
      //   description: "",
      //   icon: "",
      // },
    ],
  },
  dermatologia: {
    title: "Dermatología",
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
  oftalmologia: {
    title: "Oftalmología",
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
  gastroenterologia: {
    title: "Gastroenterología",
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
    title: "Otros",
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
        url: "/blog/procesos-infecciosos",
        image: "/blog/procesos-infecciosos/og.webp",
        description:
          "La oxigenoterapia hiperbárica (TOHB) es un tratamiento que puede ayudar a tratar infecciones y estimular el sistema inmunológico. Se puede usar para tratar diferentes tipos de infecciones, como úlceras diabéticas, osteomielitis crónica refractaria, lesiones por radiación y gangrena gaseosa",
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

export function removeDiacritics(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
