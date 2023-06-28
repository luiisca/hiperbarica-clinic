import { HTMLProps, createElement, Fragment } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import rehypeReact from "rehype-react";

import { removeDiacritics } from "@/utils/contentlayer";

export function formatRegex(searchQuery: string) {
  const w = "[a-zA-Z0-9_áéíóúÁÉÍÓÚñÑüÜ]";
  const formattedSearchQuery = searchQuery
    .replace(/[aáàäâ]/giu, "[aáàäâ]")
    .replace(/[eéèëê]/giu, "[eéèëê]")
    .replace(/[iíìïî]/giu, "[iíìïî]")
    .replace(/[oóòöô]/giu, "[oóòöô]")
    .replace(/[uúùüû]/giu, "[uúùüû]")
    .replace(/\(/giu, "\\(")
    .replace(/\)/giu, "\\)");

  return new RegExp(`\\b${w}*${formattedSearchQuery}${w}*\\b`, "giu");
}

export function normalize(text: string) {
  return removeDiacritics(text).toLowerCase().trim();
}

export const markdownToHtmlProcessor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify);

export const htmlToReactProcessor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeReact, {
    createElement,
    Fragment,
    components: {
      a: (props: HTMLProps<HTMLAnchorElement>) => (
        <a
          {...props}
          className="z-20 font-medium text-[#111827] underline decoration-[#a3a3a3] decoration-[0.1em] underline-offset-2"
        />
      ),
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
