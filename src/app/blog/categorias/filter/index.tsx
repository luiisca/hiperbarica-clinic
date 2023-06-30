import Search from "@/components/search";
import BaseFilter from "@/components/filter";
import SelectItemsMobile from "./select-items-mobile";
import { categories } from "@/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";
import Post from "../../filter/post";

export default function Filter({
  url,
  allUrl,
  categoryParam,
  indexPage,
  SelectItemsMob,
}: {
  url?: string;
  allUrl?: string;
  categoryParam?: (typeof categories)[number];
  indexPage?: boolean;
  SelectItemsMob?: React.ComponentType;
}) {
  return (
    <BaseFilter<typeof categories>
      url={url || "/blog"}
      allUrl={allUrl}
      categories={categories}
      Search={() => <Search className="mb-7" />}
      SelectItemsMobile={SelectItemsMob || SelectItemsMobile}
    >
      <Search className="mb-7 md:hidden" />
      <div className="mt-2 grid gap-[3.75rem] blog-lg:grid-cols-2">
        {indexPage
          ? allBlogs.map((post, i) => <Post post={post} key={i} />)
          : allBlogs
              .map((post, i) => {
                if (post.category === categoryParam) {
                  return <Post post={post} key={i} />;
                }
                return null;
              })
              .filter(Boolean)}
      </div>
    </BaseFilter>
  );
}
