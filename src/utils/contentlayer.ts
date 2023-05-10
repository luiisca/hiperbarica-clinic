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
          "La terapia de oxígeno hiperbárico (TOHB) puede ayudar a controlar los niveles de azúcar en sangre y reducir los síntomas diabéticos al mejorar la entrega de oxígeno a las células del cuerpo",
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
        url: "/blog/osteoporosis/og.jpg",
        image: "/blog/osteoporosis/og.jpg",
        description:
          "La terapia de oxígeno hiperbárico (TOHB) puede aumentar la densidad ósea y reducir el riesgo de fracturas en pacientes con Osteoporosis",
        icon: "",
      },
      {
        title: "Fibromialgia",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Vasculitis",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Esclerodermia",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Artritis",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
    ],
  },
  "secuelas oncológicas": {
    icon: "cancer.png",
    diseases: [
      {
        title: "Lesiones por radioterapia",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
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
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
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
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
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
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
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
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
      {
        title: "Infecciones necrotizantes de tejidos blandos",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
    ],
  },
  oftalmológia: {
    icon: "eye.png",
    diseases: [
      {
        title: "Oclusión de arteria central de la retina",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
    ],
  },
  gastroenterología: {
    icon: "intestines.png",
    diseases: [
      {
        title: "Íleo paralítico",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "",
      },
    ],
  },
  otros: {
    icon: "",
    diseases: [
      {
        title: "Anemia de difícil tratamiento",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "blood.png",
      },
      {
        title: "Neurología infantil",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "blocks.png",
      },
      {
        title: "Intoxicación por gases toxicos",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
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
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
        icon: "mother.png",
      },
      {
        title: "Antienjecimiento",
        url: "#",
        image: "/blog/pie-diabetico/og.jpg",
        description: "",
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
