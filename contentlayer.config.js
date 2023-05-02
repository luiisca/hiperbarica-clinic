import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readingTime from "reading-time";
import { organization } from "./src/app/shared-metadata";
import { formatSlug } from "./src/utils/contentlayer";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => formatSlug(doc._raw.flattenedPath),
  },
  category: {
    type: "string",
    resolve: (doc) =>
      doc._raw.sourceFileDir === "." ? "general" : doc._raw.sourceFileDir,
  },
  readingTime: {
    type: "number",
    resolve: (doc) => Math.floor(readingTime(doc.body.raw).minutes),
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://hiperbaricadelsurperu.com${doc.image}`
        : `https://hiperbaricadelsurperu.com/api/og?title=${doc.title}`,
      url: `https://hiperbaricadelsurperu.com/blog/${formatSlug(
        doc._raw.flattenedPath
      )}`,
      author: {
        "@tye": "Organization",
        ...organization,
      },
    }),
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    featured: {
      type: "boolean",
    },
    image: {
      type: "string",
    },
    readingTime: {
      type: "number",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
