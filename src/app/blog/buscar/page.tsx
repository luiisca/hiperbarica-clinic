import { HTMLProps, createElement, Fragment } from "react";
import { capitalize, categories, removeDiacritics } from "@/utils/contentlayer";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import rehypeReact from "rehype-react";
import { CLINIC_NAME } from "@/utils/constants";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

const markdownToHtmlProcessor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify);

const htmlToReactProcessor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeReact, {
    createElement,
    Fragment,
    components: {
      h1: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
      h2: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
      h3: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
      h4: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
      h5: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
      h6: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
      ul: (props: HTMLProps<HTMLUListElement>) => (
        <p {...(props as unknown as HTMLProps<HTMLParagraphElement>)} />
      ),
      ol: (props: HTMLProps<HTMLOListElement>) => (
        <p {...(props as unknown as HTMLProps<HTMLParagraphElement>)} />
      ),
      li: (props: HTMLProps<HTMLLIElement>) => (
        <p {...(props as unknown as HTMLProps<HTMLParagraphElement>)} />
      ),
    },
  });

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  function generateSearchQueryRegExp(searchQuery: string) {
    const searchQueryRegExp = searchQuery
      .replace(/[aáàäâ]/giu, "[aáàäâ]")
      .replace(/[eéèëê]/giu, "[eéèëê]")
      .replace(/[iíìïî]/giu, "[iíìïî]")
      .replace(/[oóòöô]/giu, "[oóòöô]")
      .replace(/[uúùüû]/giu, "[uúùüû]")
      .replace(/\(/giu, "\\(")
      .replace(/\)/giu, "\\)");
    return new RegExp(searchQueryRegExp, "giu");
  }
  function normalize(text: string) {
    return removeDiacritics(text).toLowerCase().trim();
  }

  const searchQuery = normalize(searchParams?.query || "");

  const filteredResults = (() => {
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
          generateSearchQueryRegExp(searchQuery),
          (match) => `**${match}**`
        );
        // 2.2 Convert markdown to html
        let htmlParagraph = markdownToHtmlProcessor
          .processSync(highlightedMdParagraph)
          .toString();
        // 2.3 Add elipsis where needed
        let htmlParagraphArr = htmlParagraph.split(" ");
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
    });
    const filteredCategories = categories.map((category) => {
      if (category.includes(searchQuery)) {
        return {
          title: `${capitalize(category)} | ${CLINIC_NAME}`,
          content: "",
          href: `/blog/categorias/${category}`,
        };
      }
    });

    return [...filteredBlogs, ...filteredCategories];
  })();

  return (
    <>
      {filteredResults.map((post) => (
        <div key={post?.title}>
          <Link
            className="mb-4 text-2xl text-primary-700"
            href={post?.href || ""}
          >
            {post?.title}
          </Link>
          {post?.content}
        </div>
      ))}
    </>
  );
}
