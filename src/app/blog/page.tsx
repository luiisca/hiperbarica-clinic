import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import Heading from "@/components/ui/core/heading";
import Slider, { baseSettings } from "@/components/slider";
import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/blur";
import { cn } from "@/utils/cn";
import CardLink from "./card-link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  const latestPosts = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
  let mouseMoved = false;

  return (
    <section className="w-full">
      {/* carousel  */}
      <div className="mb-32 mt-12 blog-lg:mb-24">
        <Heading type="subHeading">Lo ultimo</Heading>
        <Slider
          className={cn(
            "pb-10 blog-lg:pb-0",
            "[&_.slick-slide.slick-active]:visible [&_.slick-slide]:invisible"
          )}
          arrowClasses={{
            left: cn(
              "top-full left-0 translate-x-0 translate-y-0",
              "blog-lg:translate-x-full blog-lg:top-auto blog-lg:left-auto blog-lg:bottom-0 blog-lg:right-[calc(45%-96px)] blog-lg:mb-4 blog-lg:z-10"
            ),
            right: cn(
              "top-full left-0 ml-3 translate-x-full translate-y-0",
              "blog-lg:translate-x-full blog-lg:top-auto blog-lg:left-auto blog-lg:bottom-0 blog-lg:right-[calc(45%-158px)] blog-lg:mb-4 blog-lg:z-10"
            ),
          }}
          dots={false}
        >
          {latestPosts.slice(0, 4).map((post, i) => (
            <div
              className={cn(
                "z-100",
                "!flex flex-col space-y-5",
                "md:space-y-14 blog-lg:flex-row"
              )}
            >
              <a href={`blog/${post.slug}`} className="z-0">
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
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <hr className="w-full border-[#c7c7c7]/30" />
    </section>
  );
}

// {allBlogs
//   .sort((a, b) => {
//     if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
//       return -1;
//     }
//     return 1;
//   })
//   .map((post) => (
//     <Link
//       key={post.slug}
//       className="mb-4 flex flex-col space-y-1"
//       href={`/blog/${post.slug}`}
//     >
//       <div className="flex w-full flex-col">
//         <p>{post.title}</p>
//       </div>
//     </Link>
//   ))}
