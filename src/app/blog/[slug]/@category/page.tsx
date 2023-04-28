import Heading from "@/components/ui/core/heading";
import { cn } from "@/utils/cn";
import { capitalize } from "@/utils/contentlayer";
import Aside from "../../aside";
import Filter from "./filter";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Heading
        type="primary"
        className={cn(
          "my-12 w-full text-center text-[1.625rem] leading-[2.125rem] text-primary-700 opacity-0 md:my-20 md:text-4xl md:leading-[2.875rem]",
          "animate-fade-in-up duration-1000 delay-150 ease-in-out fill-mode-forwards"
        )}
      >
        {capitalize(params.slug)}
      </Heading>
      <hr className="mb-20 w-full border-[#c7c7c7]/30" />
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
