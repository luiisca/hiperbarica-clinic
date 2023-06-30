import { treatments } from "@/utils/contentlayer";
import {
  formatRegex,
  htmlToReactProcessor,
  markdownToHtmlProcessor,
  normalize,
} from "@/utils/search";
import Filter from "../filter";
import Post, { PostType } from "../filter/post";

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const searchQuery = normalize(searchParams?.query || "");

  const filteredTreatments = Object.values(treatments)
    .flatMap((treatment) => {
      return treatment.diseases.map((disease) => {
        if (
          normalize(disease.title).includes(searchQuery) ||
          normalize(disease.description).includes(searchQuery) ||
          normalize(treatment.title).includes(searchQuery)
        ) {
          const highlightedDescription = disease.description.replace(
            formatRegex(searchQuery),
            (match) => `**${match}**`
          );

          return {
            icon: disease.icon || treatment.icon,
            post: {
              ...disease,
              description: htmlToReactProcessor.processSync(
                markdownToHtmlProcessor
                  .processSync(highlightedDescription)
                  .toString()
              ).result,
            },
            category: treatment.title,
          };
        }

        return null;
      });
    })
    .filter(Boolean) as unknown as PostType[];

  return (
    <Filter
      treatmentParam="all"
      Content={() => (
        <>
          {filteredTreatments.length > 0 ? (
            filteredTreatments.map((treatment, i) => (
              <Post
                key={i}
                icon={treatment.icon}
                post={treatment.post}
                category={treatment.category}
              />
            ))
          ) : (
            <p className="text-sm text-primary-700">
              No se encontraron resultados.
            </p>
          )}
        </>
      )}
    />
  );
}
