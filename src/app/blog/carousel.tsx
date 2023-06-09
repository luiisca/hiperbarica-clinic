"use client";

import BaseCarousel from "@/components/carousel";
import Heading from "@/components/ui/core/heading";
import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "@/utils/blur";
import { cn } from "@/utils/cn";
import type { Blog } from "contentlayer/generated";

function Article({ post }: { post: Blog }) {
  return (
    <div className="relative flex h-full flex-col space-y-5 md:space-y-14 blog-lg:flex-row">
      <Link
        href={`/blog/${post.slug}`}
        className="absolute left-0 top-0 z-10 h-full w-full"
      />
      {/* image */}
      <div
        className={cn(
          "!mt-0 w-full overflow-hidden rounded-md blog-lg:h-full blog-lg:w-[55%]",
          "relative h-[25vh] max-h-[400px] min-h-[250px]",
          "sm:max-h-[480px] md:max-h-[600px] md:min-h-[450px] blog-lg:h-auto"
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
      <div className="flex-col justify-center pb-[50px] blog-lg:flex blog-lg:w-[45%] blog-lg:pb-20 blog-lg:pl-24">
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
        <Heading className="mb-3 text-2xl md:text-4xl">{post.title}</Heading>
        <p className="text-sm leading-6">{post.summary}</p>
      </div>
    </div>
  );
}
export default function Carousel({ content }: { content: Array<Blog> }) {
  return (
    <BaseCarousel
      Skeleton={() => (
        <div className="relative -mx-8 overflow-x-hidden px-8 pb-4 blog-lg:pb-0">
          <div className="w-full">
            <Article post={content[0] as (typeof content)[0]} />
          </div>
        </div>
      )}
      slidesCopy={content}
      className={cn(
        "relative -mx-8 overflow-x-hidden px-8 pb-4 blog-lg:pb-0 [&_.swiper-pagination]:invisible [&_.swiper-slide]:w-full"
      )}
      arrowsClasses={{
        container:
          "flex relative blog-lg:absolute blog-lg:left-[calc(55%+96px)] blog-lg:bottom-0 blog-lg:mb-5 space-x-3",
        prev: "static translate-x-0 translate-y-0",
        next: "static translate-x-0 translate-y-0",
      }}
    >
      {(post) => <Article post={post} />}
    </BaseCarousel>
  );
}
