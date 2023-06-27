import { Metadata } from "next";
import Image from "next/image";
import Heading from "@/components/ui/core/heading";
import { cn } from "@/utils/cn";
import { capitalize, treatments } from "@/utils/contentlayer";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { shimmer, toBase64 } from "@/utils/blur";
import SelectItemsMobile from "./select-items-mobile";

export function generateStaticParams() {
  return ["todos", ...Object.keys(treatments)].map((treatment) => ({
    treatment,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { treatment: string };
}): Metadata | undefined {
  const treatment = ["todos", ...Object.keys(treatments)].find(
    (treatment) => treatment === params.treatment
  );
  if (!treatment) {
    return;
  }

  return {
    title: capitalize(treatment),
  };
}

function Post({
  post,
  category,
  icon,
}: {
  icon: string;
  post: {
    title: string;
    url: string;
    image: string;
    description: string;
    icon?: string;
  };
  category: keyof typeof treatments;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center space-y-16 p-4 text-center transition-all duration-300 ease-in-out",
        post.url !== "#" ? " hover:translate-y-[-5px]" : ""
      )}
    >
      <Link
        href={post.url !== "#" ? post.url : ""}
        className={cn(
          "absolute left-0 top-0 z-10 h-full w-full",
          post.url !== "#" ? "" : "cursor-default"
        )}
      />
      {/* images */}
      <div className="relative !mt-0 h-[25vh] max-h-[400px] min-h-[250px] w-full">
        <div className="relative h-full w-full overflow-hidden rounded-md">
          <Image
            src={(post.url !== "#" ? post.image : "/blog/default.jpg") || ""}
            fill
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            sizes="60vw"
            alt={`${post.title} image`}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute left-1/2 top-full flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[url('/center-blob.png')] bg-contain bg-center bg-no-repeat ">
          <div className="relative h-11 w-11">
            <Image
              src={`/treatments/icons/${icon}`}
              alt={`${icon.split(".")[0] || ""} icon`}
              fill
              sizes="10vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      {/* text */}
      <div className="flex flex-col space-y-4 md:space-y-5">
        <Heading type="subHeading" className="mb-0">
          {category}
        </Heading>
        <Heading type="secondary" className="text-2xl md:text-3xl">
          {post.title}
        </Heading>
        <p className="mb-4 text-sm md:mb-6 md:text-base">{post.description}</p>
      </div>
    </div>
  );
}

export default function TreatmentsPage({
  params,
}: {
  params: { treatment: string };
}) {
  const treatment = params.treatment as keyof typeof treatments | "todos";
  console.log("TREATMENT", treatment);

  return (
    <div>
      <div
        className={cn(
          "my-12 w-full text-center md:my-20 ",
          "animate-fade-in-up opacity-0 duration-1000 delay-150 ease-in-out fill-mode-forwards"
        )}
      >
        <Heading className="text-primary-700 md:text-4xl xl:text-6xl">
          {treatment === "todos" ? "Tratamientos" : capitalize(treatment)}
        </Heading>
        {treatment === "todos" && (
          <p className="mx-auto max-w-prose ">
            En Hiperbárica del Sur Perú, nuestro tratamiento de terapia
            hiperbárica de última generación ofrece alivio para una amplia
            variedad de condiciones médicas. Desde lesiones cerebrales hasta
            heridas crónicas, nuestro equipo médico profesional está capacitado
            para brindar un enfoque especializado que se adapta a tus
            necesidades individuales.
          </p>
        )}
      </div>
      <Separator className="mb-20" />
      <div className="mb-24 blog-lg:mb-[7.5rem]">
        {/* options */}
        <div className="mb-9 flex w-full flex-wrap items-center justify-between space-x-9 blog-lg:justify-start">
          <Link
            className="shrink-0 text-base uppercase text-primary-600"
            href="/tratamientos"
          >
            FILTRAR POR
          </Link>
          {/* desktop */}
          {Object.keys(treatments).map((treatmentTitle, i) => (
            <Link
              href={`/tratamientos/${treatmentTitle}`}
              key={i}
              className={cn(
                "max-blog-lg:hidden",
                "font-medium tracking-[.02px] text-[#919191] underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary-500",
                "inline-flex items-center justify-center whitespace-nowrap py-1.5 text-sm transition-all focus-visible:text-primary-700 focus-visible:decoration-primary-700 focus-visible:outline-none focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50",
                treatmentTitle === treatment
                  ? "text-primary-500 decoration-primary-500"
                  : ""
              )}
            >
              {capitalize(treatmentTitle)}
            </Link>
          ))}

          {/* mobile */}
          <SelectItemsMobile />
        </div>

        {/* treatments */}
        <div className="mt-2 grid p-0 mob-me:grid-cols-2 md:gap-8 blog-lg:grid-cols-3">
          {treatment === "todos"
            ? Object.entries(treatments).map(([_, treatment]) =>
                treatment.diseases.map((disease, i) => (
                  <Post
                    key={i}
                    icon={treatment.icon || disease.icon}
                    post={disease}
                    category={treatment.title as keyof typeof treatments}
                  />
                ))
              )
            : treatments[treatment].diseases.map((disease, i) => (
                <Post
                  key={i}
                  icon={treatments[treatment].icon || disease.icon}
                  post={disease}
                  category={
                    treatments[treatment].title as keyof typeof treatments
                  }
                />
              ))}
        </div>
      </div>
    </div>
  );
}
