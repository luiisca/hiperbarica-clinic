"use client";

import BaseCarousel from "@/components/carousel";
import Heading from "@/components/ui/core/heading";
import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "@/utils/blur";
import { cn } from "@/utils/cn";
import { Blog } from "contentlayer/generated";
import { Skeleton } from "@/components/ui/skeleton";

export default function Carousel({ content }: { content: Array<Blog> }) {
  return (
    <BaseCarousel
      Skeleton={() => (
        <Skeleton className="h-[clamp(450px,_25vh,_600px)] w-full " />
      )}
      slidesCopy={content}
      className={cn("relative blog-lg:pb-0")}
      arrowsClasses={{
        container:
          "flex relative blog-lg:absolute blog-lg:left-[calc(55%+96px)] blog-lg:bottom-0 blog-lg:mb-5 space-x-3",
        prev: "static translate-x-0 translate-y-0",
        next: "static translate-x-0 translate-y-0",
        // prev: cn(
        //   "top-full left-0 translate-x-0 translate-y-0",
        //   "blog-lg:translate-x-full blog-lg:top-auto blog-lg:left-auto blog-lg:bottom-0 blog-lg:right-[calc(45%-96px)] blog-lg:mb-4 blog-lg:z-10"
        // ),
        // next: cn(
        //   "top-full left-0 ml-3 translate-x-full translate-y-0",
        //   "blog-lg:translate-x-full blog-lg:top-auto blog-lg:left-auto blog-lg:bottom-0 blog-lg:right-[calc(45%-158px)] blog-lg:mb-4 blog-lg:z-10"
        // ),
      }}
    >
      {(post) => (
        <Link href={`/blog/${post.slug}`}>
          <div
            className={cn(
              "z-100",
              "!flex flex-col space-y-5",
              "md:space-y-14 blog-lg:flex-row"
            )}
          >
            {/* image */}
            <div
              className={cn(
                "w-full blog-lg:h-full blog-lg:w-[55%]",
                "relative h-[clamp(250px,_25vh,_600px)] max-h-[400px]",
                "sm:max-h-[480px] md:max-h-[600px] md:min-h-[450px] blog-lg:h-full blog-lg:max-h-full"
              )}
            >
              <Image
                src={post.image as string}
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
            <div className="flex-col justify-center pb-[50px] blog-lg:flex blog-lg:w-[45%] blog-lg:pl-24">
              {/* category */}
              <Heading
                type="subHeading"
                color="category"
                href={`/blog/${post.category}`}
              >
                {post.category}
              </Heading>

              {/* title */}
              <Heading
                type="primary"
                className="mb-3 text-2xl md:text-4xl xl:text-5xl"
              >
                {post.title}
              </Heading>
              <p className="text-sm leading-6">{post.summary}</p>
            </div>
          </div>
        </Link>
      )}
    </BaseCarousel>
  );
}
