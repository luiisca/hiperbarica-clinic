import type { Metadata } from "next";
import { allBlogs } from "contentlayer/generated";
import Heading from "@/components/ui/core/heading";
import Carousel from "./carousel";
import Filter from "./filter";
import { cn } from "@/utils/cn";
import { formatSlug } from "@/utils/contentlayer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  const latestPosts = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="w-full">
      {/* carousel  */}
      <div className="mb-20 mt-12">
        <Heading type="subHeading">Lo ultimo</Heading>
        <Carousel content={latestPosts} />
      </div>
      <hr className="mb-20 w-full border-[#c7c7c7]/30" />

      <div
        className={cn(
          "md:grid md:grid-cols-[60%_40%] blog-lg:grid-cols-[70%_30%]",
          "mb-24 blog-lg:mb-[7.5rem]"
        )}
      >
        <Filter />
        {/* aside */}
        <div className="self-start md:sticky md:top-24 md:ml-[60px]">
          <Heading type="subHeading">Recomendados</Heading>
          <div className="flex flex-col first:pt-0">
            {allBlogs.map((post, i) => {
              if (post.featured && formatSlug(post.slug)) {
                return (
                  <>
                    <Heading
                      key={i}
                      type="tertiary"
                      href={`/blog/${formatSlug(post.slug) as string}`}
                      className="m-0 py-6 text-xl text-primary-700 hover:text-primary-400 md:text-xl"
                    >
                      {post.title}
                    </Heading>
                    <hr className="w-full border-[#c7c7c7]/30" />
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
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
