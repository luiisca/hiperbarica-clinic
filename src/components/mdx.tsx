import * as React from "react";
import Link, { LinkProps } from "next/link";
import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (
  props: React.PropsWithChildren<Omit<LinkProps, "href">> & { href?: string }
) => {
  const href = props.href;

  if (href && href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }

  if (href && href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} />;
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-gray prose-quoteless">
      <Component components={{ ...components }} />
    </article>
  );
}
