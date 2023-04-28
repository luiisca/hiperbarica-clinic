import type { Metadata } from "next";
import { allBlogs } from "contentlayer/generated";
import Heading from "@/components/ui/core/heading";
import Carousel from "./carousel";
import Filter from "./filter";
import { cn } from "@/utils/cn";

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
          "md:grid-cols-[60% 40%] blog-lg:grid-cols-[70% 30%] md:grid",
          "mb-24 blog-lg:mb-[7.5rem]"
        )}
      >
        {/* filter */}
        <Filter />
        {/* aside */}
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
