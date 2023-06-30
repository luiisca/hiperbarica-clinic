import Heading from "@/components/ui/core/heading";
import { cn } from "@/utils/cn";
import { capitalize, categories } from "@/utils/contentlayer";
import Aside from "../../aside";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import SelectItemsMobile from "../filter/select-items-mobile";
import Filter from "../filter";

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata | undefined {
  const category = categories.find((category) => category === params.category);
  if (!category) {
    return;
  }

  return {
    title: capitalize(category),
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category as (typeof categories)[number];

  return (
    <div>
      <Heading
        className={cn(
          "my-12 w-full text-center text-[1.625rem] leading-[2.125rem] text-primary-700 opacity-0 md:my-20 md:text-4xl md:leading-[2.875rem] xl:text-6xl",
          "animate-fade-in-up duration-1000 delay-150 ease-in-out fill-mode-forwards"
        )}
      >
        {capitalize(category)}
      </Heading>
      <Separator className="mb-20" />
      <div
        className={cn(
          "md:grid md:grid-cols-[60%_40%] blog-lg:grid-cols-[70%_30%]",
          "mb-24 blog-lg:mb-[7.5rem]"
        )}
      >
        <Filter
          categoryParam={category}
          url="/blog/categorias"
          allUrl="/blog"
          SelectItemsMob={SelectItemsMobile}
        />
        <Aside />
      </div>
    </div>
  );
}
