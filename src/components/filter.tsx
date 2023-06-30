import { categories } from "@/utils/contentlayer";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { HTMLProps } from "react";

export default function Filter<T extends typeof categories | string[]>({
  url,
  allUrl,
  categories,
  crrCategory,
  Search,
  SelectItemsMobile,
  ...props
}: HTMLProps<HTMLDivElement> & {
  url: string;
  allUrl?: string;
  categories: T;
  crrCategory?: string | "all";
  Search: React.ComponentType;
  SelectItemsMobile: React.ComponentType;
}) {
  return (
    <div className="mb-24 blog-lg:mb-[7.5rem]">
      {/* options */}
      <div className="mb-6 flex w-full flex-wrap items-center justify-between space-x-9 blog-lg:justify-start">
        <Link
          className="shrink-0 text-base uppercase text-primary-600"
          href={allUrl || url}
        >
          FILTRAR POR
        </Link>
        {/* desktop */}
        {categories.map((categoryTitle, i) => (
          <Link
            href={`${url}/${categoryTitle}`}
            key={i}
            className={cn(
              "max-blog-lg:hidden",
              "font-medium tracking-[.02px] text-[#919191] underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary-500",
              "inline-flex items-center justify-center whitespace-nowrap py-1.5 text-sm transition-all focus-visible:text-primary-700 focus-visible:decoration-primary-700 focus-visible:outline-none focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50",
              categoryTitle === crrCategory
                ? "text-primary-500 decoration-primary-500"
                : ""
            )}
          >
            {categoryTitle}
          </Link>
        ))}

        {/* mobile */}
        {SelectItemsMobile && <SelectItemsMobile />}
      </div>

      {/* treatments */}
      {props.children}
    </div>
  );
}
