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
  searchParams: { query: string };
}) {
  const searchQuery = searchParams.query?.toLowerCase().trim() || "";
  console.log("RUNNING BLOGPAGE!");

  const filteredResults = (() => {
    console.log("RUNING filteredBlogs");
    console.log("ALLBLOGS", allBlogs.length);
    const filteredBlogs = allBlogs.map((post) => {
      const title = removeDiacritics(post.title.toLowerCase());
      const content = removeDiacritics(post.body.raw.toLowerCase());
      // console.log("TITLE: ", title);

      if (title.includes("alzheimer")) {
        // console.log("🤯 INSIDE FILTEREDBLOGS TITLE: ", title);
        // console.log("SEARCHQUERY: ", searchQuery);
        // console.log("CONTENT: ", content);
        // console.log("CONTENT INCLUDES: ", content.includes(searchQuery));
      }

      if (title.includes(searchQuery) || content.includes(searchQuery)) {
        // 1. find first paragraph where query is mentioned
        const paragraph =
          post.body.raw
            .split("\n\n")
            .find((paragraph) =>
              paragraph.toLowerCase().includes(searchQuery)
            ) || post.summary;

        // 2. parse paragraph to HTML and highlight query word
        const htmlParagraph = markdownToHtmlProcessor
          .processSync(paragraph)
          .toString();
        const highlightedHtmlParagraph = htmlParagraph.replace(
          new RegExp(`\\b${searchQuery}\\w*`, "gi"),
          (match) => `<b>${match}</b>`
        );

        // 3. parse html to react element
        const reactParagraph = htmlToReactProcessor.processSync(
          highlightedHtmlParagraph
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
    <main>
      {filteredResults.map((post) => (
        <Fragment key={post?.title}>
          <Link
            className="mb-4 text-2xl text-primary-700"
            href={post?.href || ""}
          >
            {post?.title}
          </Link>
          <p>{post?.content}</p>
        </Fragment>
      ))}
    </main>
  );
}
