"use client";

import BaseCarousel from "@/components/carousel";
import Heading from "@/components/ui/core/heading";
import { shimmer, toBase64 } from "@/utils/blur";
import type { Blog } from "contentlayer/generated";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

function Article({ post }: { post: Blog }) {
  return (
    <div className="relative flex flex-col space-y-4">
      <Link
        href={`/blog/${post.slug}`}
        className="absolute left-0 top-0 z-10 h-full w-full"
      />

      {/* image */}
      <div
        className={cn(
          "relative !mt-0 h-[25vh] max-h-[600px] min-h-[250px] overflow-hidden rounded-md"
        )}
      >
        <Image
          src={post.image || ""}
          fill
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          sizes="60vw"
          alt={`${post.title} image`}
          className="object-cover object-center"
        />
      </div>

      {/* text */}
      <div>
        {/* category */}
        <Heading
          type="subHeading"
          color="category"
          href={`/blog/categorias/${post.category}`}
          className="relative z-20"
        >
          {post.category}
        </Heading>

        {/* title */}
        <Heading type="tertiary" className="mb-0 text-xl md:mb-1.5 md:text-2xl">
          {post.title}
        </Heading>
      </div>
    </div>
  );
}
export default function ArticlesCarousel({
  content,
}: {
  content: Array<Blog>;
}) {
  return (
    <>
      <BaseCarousel
        Skeleton={() => (
          <div className="blog-lg:flex blog-lg:space-x-12">
            <div className="">
              <Article post={content[0] as (typeof content)[0]} />
            </div>
            <div className="hidden blog-lg:block">
              <Article post={content[1] as (typeof content)[1]} />
            </div>
          </div>
        )}
        slidesCopy={content}
        className="overflow-hidden"
        arrowsClasses={{
          container: "flex absolute left-8 bottom-0 md:bottom-24 space-x-3",
          prev: "static translate-x-0 translate-y-0",
          next: "static translate-x-0 translate-y-0",
        }}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
        }}
      >
        {(post) => <Article post={post} />}
      </BaseCarousel>
    </>
  );
}
