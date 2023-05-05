import type { Metadata } from "next";
import { cn } from "@/utils/cn";
import { allBlogs } from "contentlayer/generated";
import Heading from "@/components/ui/core/heading";
import Carousel from "./carousel";
import Filter from "./filter";
import Aside from "./aside";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Lee cómo la terapia de oxígeno hiperbárico puede mejorar tu salud y calidad de vida. Conoce todo sobre la terapia, desde sus múltiples beneficios hasta sus efectos secundarios y cómo funciona",
};

export default function BlogPage() {
  const latestPosts = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="w-full">
      {/* carousel  */}
      <div className="mb-20 mt-12">
        <Heading type="subHeading">Lo ultimo</Heading>
        <Carousel content={latestPosts} />
      </div>
      <Separator className="mb-20" />

      <div
        className={cn(
          "md:grid md:grid-cols-[60%_40%] blog-lg:grid-cols-[70%_30%]",
          "mb-24 blog-lg:mb-[7.5rem]"
        )}
      >
        <Filter />
        <Aside />
      </div>
    </div>
  );
}
