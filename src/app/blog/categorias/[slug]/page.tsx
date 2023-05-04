import Heading from "@/components/ui/core/heading";
import { cn } from "@/utils/cn";
import { capitalize, categories } from "@/utils/contentlayer";
import Aside from "../../aside";
import Filter from "./filter";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata | undefined {
  const category = categories.find((category) => category === params.slug);
  if (!category) {
    return;
  }

  return {
    title: capitalize(category),
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Heading
        className={cn(
          "my-12 w-full text-center text-[1.625rem] leading-[2.125rem] text-primary-700 opacity-0 md:my-20 md:text-4xl md:leading-[2.875rem] xl:text-6xl",
          "animate-fade-in-up duration-1000 delay-150 ease-in-out fill-mode-forwards"
        )}
      >
        {capitalize(params.slug)}
      </Heading>
      <Separator className="mb-20" />
      <div
        className={cn(
          "md:grid md:grid-cols-[60%_40%] blog-lg:grid-cols-[70%_30%]",
          "mb-24 blog-lg:mb-[7.5rem]"
        )}
      >
        <Filter value={params.slug} />
        <Aside />
      </div>
    </div>
  );
}
