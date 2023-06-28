import { capitalize, treatments } from "@/utils/contentlayer";
import Link from "next/link";
import SelectItemsMobile from "./select-items-mobile";
import { cn } from "@/utils/cn";
import Search from "@/components/search";
import Post from "./post";

export default function Filter({
  treatment,
  Content,
}: {
  treatment: keyof typeof treatments | "all";
  Content?: React.ComponentType;
}) {
  return (
    <div className="mb-24 blog-lg:mb-[7.5rem]">
      {/* options */}
      <div className="mb-6 flex w-full flex-wrap items-center justify-between space-x-9 blog-lg:justify-start">
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
      <Search
        placeholder="Buscar tratamientos"
        action="/tratamientos/buscar"
        className="mb-7"
      />

      {/* treatments */}
      <div className="mt-2 grid p-0 mob-me:grid-cols-2 md:gap-8 blog-lg:grid-cols-3">
        {(Content && <Content />) ||
          (treatment === "all"
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
              )))}
      </div>
    </div>
  );
}
