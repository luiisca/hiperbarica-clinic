import { treatments } from "@/utils/contentlayer";
import Search from "@/components/search";
import Post from "./post";
import SelectItemsMobile from "./select-items-mobile";
import BaseFilter from "@/components/filter";

export default function Filter({
  treatmentParam,
  Content,
}: {
  treatmentParam: keyof typeof treatments | "all";
  Content?: React.ComponentType;
}) {
  return (
    <BaseFilter
      url="/tratamientos"
      categories={Object.keys(treatments)}
      crrCategory={treatmentParam}
      Search={() => (
        <Search
          placeholder="Buscar tratamientos"
          action="/tratamientos/buscar"
          className="mb-7"
        />
      )}
      SelectItemsMobile={SelectItemsMobile}
    >
      <Search
        placeholder="Buscar tratamientos"
        action="/tratamientos/buscar"
        className="mb-7"
      />
      <div className="mt-2 grid p-0 mob-me:grid-cols-2 md:gap-8 blog-lg:grid-cols-3">
        {(Content && <Content />) ||
          (treatmentParam === "all"
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
            : treatments[treatmentParam].diseases.map((disease, i) => (
                <Post
                  key={i}
                  icon={treatments[treatmentParam].icon || disease.icon}
                  post={disease}
                  category={
                    treatments[treatmentParam].title as keyof typeof treatments
                  }
                />
              )))}
      </div>
    </BaseFilter>
  );
}
