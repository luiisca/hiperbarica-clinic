import type { Metadata } from "next";
import { HTMLProps, createElement, Fragment } from "react";
import { cn } from "@/utils/cn";
import { allBlogs } from "contentlayer/generated";
import Heading from "@/components/ui/core/heading";
import Carousel from "./carousel";
import Aside from "./aside";
import { Separator } from "@/components/ui/separator";
import TabsContent from "./filter/tabs-content";
import Filter from "./filter";
import { capitalize, categories, removeDiacritics } from "@/utils/contentlayer";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import rehypeReact from "rehype-react";
import { CLINIC_NAME } from "@/utils/constants";

// const markdownToHtmlProcessor = unified()
//   .use(remarkParse)
//   .use(remarkRehype)
//   .use(rehypeStringify);
//
// const htmlToReactProcessor = unified()
//   .use(rehypeParse, { fragment: true })
//   .use(rehypeReact, {
//     createElement,
//     components: {
//       h1: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
//       h2: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
//       h3: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
//       h4: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
//       h5: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
//       h6: (props: HTMLProps<HTMLHeadingElement>) => <p {...props} />,
//       ul: (props: HTMLProps<HTMLUListElement>) => (
//         <p {...(props as unknown as HTMLProps<HTMLParagraphElement>)} />
//       ),
//       ol: (props: HTMLProps<HTMLOListElement>) => (
//         <p {...(props as unknown as HTMLProps<HTMLParagraphElement>)} />
//       ),
//       li: (props: HTMLProps<HTMLLIElement>) => (
//         <p {...(props as unknown as HTMLProps<HTMLParagraphElement>)} />
//       ),
//     },
//   });

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Lee cómo la terapia de oxígeno hiperbárico puede mejorar tu salud y calidad de vida. Conoce todo sobre la terapia, desde sus múltiples beneficios hasta sus efectos secundarios y cómo funciona",
};

export default function BlogPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const latestPosts = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
  // const searchQuery = searchParams.q?.toLowerCase().trim() || "";
  // console.log("RUNNING BLOGPAGE!");

  // const filteredResults = (() => {
  //   console.log("RUNING filteredBlogs");
  //   console.log("ALLBLOGS", allBlogs.length);
  //   const filteredBlogs = allBlogs.map((post) => {
  //     const title = removeDiacritics(post.title.toLowerCase());
  //     const content = removeDiacritics(post.body.raw.toLowerCase());
  //     // console.log("TITLE: ", title);
  //
  //     if (title.includes("alzheimer")) {
  //       // console.log("🤯 INSIDE FILTEREDBLOGS TITLE: ", title);
  //       // console.log("SEARCHQUERY: ", searchQuery);
  //       // console.log("CONTENT: ", content);
  //       // console.log("CONTENT INCLUDES: ", content.includes(searchQuery));
  //     }
  //
  //     if (title.includes(searchQuery) || content.includes(searchQuery)) {
  //       // 1. find first paragraph where query is mentioned
  //       const paragraph =
  //         post.body.raw
  //           .split("\n\n")
  //           .find((paragraph) =>
  //             paragraph.toLowerCase().includes(searchQuery)
  //           ) || post.summary;
  //
  //       // 2. parse paragraph to HTML and highlight query word
  //       const htmlParagraph = markdownToHtmlProcessor
  //         .processSync(paragraph)
  //         .toString();
  //       const highlightedHtmlParagraph = htmlParagraph.replace(
  //         new RegExp(`\\b${searchQuery}\\w*`, "gi"),
  //         (match) => `<b>${match}</b>`
  //       );
  //
  //       // 3. parse html to react element
  //       const reactParagraph = htmlToReactProcessor.processSync(
  //         highlightedHtmlParagraph
  //       ).result;
  //
  //       return {
  //         title: post.title,
  //         content: reactParagraph,
  //         href: `/blog/${post.slug}`,
  //       };
  //     }
  //   });
  //   const filteredCategories = categories.map((category) => {
  //     if (category.includes(searchQuery)) {
  //       return {
  //         title: `${capitalize(category)} | ${CLINIC_NAME}`,
  //         content: "",
  //         href: `/blog/categorias/${category}`,
  //       };
  //     }
  //   });
  //
  //   return [...filteredBlogs, ...filteredCategories];
  // })();

  return (
    <div className="w-full">
      <div>{JSON.stringify(searchParams)}</div>
      <>
        {/* carousel  */}
        <div className="mb-20 mt-8 md:mt-14">
          <Heading type="subHeading">Lo ultimo</Heading>
          <Carousel content={latestPosts.slice(0, 10)} />
        </div>
        <Separator className="mb-20" />

        <div
          className={cn(
            "md:grid md:grid-cols-[60%_40%] blog-lg:grid-cols-[70%_30%]",
            "mb-24 blog-lg:mb-[7.5rem]"
          )}
        >
          <Filter>
            <TabsContent content={allBlogs} />
          </Filter>
          <Aside />
        </div>
      </>
    </div>
  );
}
export const dynamic = "force-dynamic";
