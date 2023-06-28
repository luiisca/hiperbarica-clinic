import { capitalize, categories, removeDiacritics } from "@/utils/contentlayer";
import { CLINIC_NAME } from "@/utils/constants";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Heading from "@/components/ui/core/heading";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/search";
import {
  formatRegex,
  htmlToReactProcessor,
  markdownToHtmlProcessor,
  normalize,
} from "@/utils/search";

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const searchQuery = normalize(searchParams?.query || "");

  const filteredBlogs = allBlogs.map((post) => {
    if (
      normalize(post.title).includes(searchQuery) ||
      normalize(post.body.raw).includes(searchQuery)
    ) {
      let foundParagraphPosition: null | "first" | "last" = null;

      // 1. Find first paragraph where query is mentioned
      const paragraph =
        post.body.raw.split("\n\n").find((paragraph, i, arr) => {
          if (normalize(paragraph).includes(searchQuery)) {
            foundParagraphPosition =
              i === 0 ? "first" : i === arr.length - 1 ? "last" : null;

            return true;
          }
          return false;
        }) || post.summary;

      // 2. Format paragraph
      // 2.1 Replace all occurences of query with ** to highlight them
      const highlightedMdParagraph = paragraph.replace(
        formatRegex(searchQuery),
        (match) => `**${match}**`
      );
      // 2.2 Convert markdown to html
      const htmlParagraph = markdownToHtmlProcessor
        .processSync(highlightedMdParagraph)
        .toString();
      // 2.3 Add elipsis where needed
      const htmlParagraphArr = htmlParagraph.split(" ");
      // start
      if (foundParagraphPosition !== "first" && htmlParagraphArr[0]) {
        let firstTagFound = false;
        htmlParagraphArr[0] = htmlParagraphArr[0]
          ?.split("")
          .map((el, i, arr) => {
            if (i > 0 && arr[i - 1] === ">" && !firstTagFound) {
              firstTagFound = true;

              return `... ${el}`;
            }

            return el;
          })
          .join("");
      }
      // end
      if (
        foundParagraphPosition !== "last" &&
        htmlParagraphArr[htmlParagraphArr.length - 1]
      ) {
        let lastTagFound = false;
        htmlParagraphArr[htmlParagraphArr.length - 1] = htmlParagraphArr[
          htmlParagraphArr.length - 1
        ]
          ?.split("")
          .reverse()
          .map((el, i, arr) => {
            if (i > 0 && arr[i - 1] === "<" && !lastTagFound) {
              lastTagFound = true;

              return `${el} ...`;
            }
            return el;
          })
          .reverse()
          .join("") as string;
      }

      // 3. parse html to react element
      const reactParagraph = htmlToReactProcessor.processSync(
        htmlParagraphArr.join(" ")
      ).result;

      return {
        title: post.title,
        content: reactParagraph,
        href: `/blog/${post.slug}`,
      };
    }

    return null;
  });

  const filteredCategories = categories.map((category) => {
    if (category.includes(searchQuery)) {
      return {
        title: `${capitalize(category)} | ${CLINIC_NAME}`,
        content: "",
        href: `/blog/categorias/${category}`,
      };
    }

    return null;
  });

  const filteredResults = [...filteredBlogs, ...filteredCategories].filter(
    Boolean
  );

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col space-y-12 px-8 py-24 md:space-y-16">
      {/* search */}
      <div className="flex flex-col space-y-5">
        <div className="relative flex w-fit items-center space-x-2 text-sm text-[#757575] opacity-80 transition-all hover:opacity-100">
          <Link
            href="/blog"
            className="absolute left-0 top-0 z-10 h-full w-full"
          />
          <ArrowLeft className="!ml-0 py-0.5" />
          <p>Todos los artículos</p>
        </div>
        <div className="space-between flex max-md:flex-col max-md:space-y-6 md:items-start md:space-x-5">
          <Heading
            type="primary"
            className="m-0 text-2xl text-primary-700 md:w-9/12 md:text-3xl"
          >
            Resultados para `&quot;`{searchParams?.query}`&quot;`
          </Heading>
          <Search className="md:w-3/12" />
        </div>
      </div>
      {/* results */}
      <ul className="md:w-9/12">
        {filteredResults.length > 0 ? (
          filteredResults.map((post, i) => (
            <li key={i} className="group relative flex flex-col space-y-3">
              <Link
                href={post?.href || ""}
                className="absolute left-0 top-0 z-10 h-full w-full"
              />
              <Heading
                type="tertiary"
                className="m-0 text-xl text-primary-700 transition-all group-hover:text-primary-500 md:text-2xl"
              >
                {post?.title}
              </Heading>
              {post?.content}
              <Separator className="!my-7 md:!my-12" />
            </li>
          ))
        ) : (
          <p className="text-sm text-primary-700">
            No se encontraron resultados.
          </p>
        )}
      </ul>
    </div>
  );
}
