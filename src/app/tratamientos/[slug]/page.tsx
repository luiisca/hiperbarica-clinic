import Heading from "@/components/ui/core/heading";
import { cn } from "@/utils/cn";
import { capitalize, treatments } from "@/utils/contentlayer";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Filter from "../filter";

export function generateStaticParams() {
  return Object.keys(treatments).map((treatment) => ({
    slug: treatment,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata | undefined {
  const treatment = Object.keys(treatments).find(
    (treatment) => treatment === decodeURIComponent(params.slug)
  );
  if (!treatment) {
    return;
  }

  return {
    title: capitalize(treatment),
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div
        className={cn(
          "my-12 w-full text-center md:my-20 ",
          "animate-fade-in-up duration-1000 delay-150 ease-in-out fill-mode-forwards"
        )}
      >
        <Heading className="text-primary-700 md:text-4xl xl:text-6xl">
          {capitalize(decodeURIComponent(params.slug))}
        </Heading>
      </div>
      <Separator className="mb-20" />
      <div className="mb-24 blog-lg:mb-[7.5rem]">
        <Filter value={decodeURIComponent(params.slug)} />
      </div>
    </div>
  );
}
