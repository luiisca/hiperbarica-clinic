"use client";

import BaseCarousel from "@/components/carousel";
import Heading from "@/components/ui/core/heading";
import { Skeleton } from "@/components/ui/skeleton";
import { shimmer, toBase64 } from "@/utils/blur";
import { allBlogs } from "contentlayer/generated";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default function ArticlesCarousel() {
  return (
    <>
      <BaseCarousel
        Skeleton={() => (
          <div className="mx-auto flex h-96 space-x-8 overflow-hidden">
            <Skeleton className="h-full w-full shrink-0 xl:w-1/2" />
            <Skeleton className="h-full w-full shrink-0 xl:w-1/2" />
          </div>
        )}
        slidesCopy={allBlogs.sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })}
        className="overflow-hidden xl:pb-14"
        slideClassName={cn("pt-2 md:py-2 xl:p-0 bg-transparent")}
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
        {(post) => (
          <div className="relative flex flex-col space-y-4">
            <Link
              href={`/blog/${post.slug}`}
              className="absolute left-0 top-0 z-10 h-full w-full"
            />

            {/* image */}
            <div
              className={cn(
                "relative !mt-0 h-[clamp(250px,_25vh,_600px)] overflow-hidden rounded-md"
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
              <Heading
                type="tertiary"
                className="mb-0 text-xl md:mb-1.5 md:text-2xl"
              >
                {post.title}
              </Heading>
            </div>
          </div>
        )}
      </BaseCarousel>
    </>
  );
}
