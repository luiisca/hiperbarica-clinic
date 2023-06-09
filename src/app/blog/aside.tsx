import Search from "@/components/search";
import Heading from "@/components/ui/core/heading";
import { Separator } from "@/components/ui/separator";
import { allBlogs } from "contentlayer/generated";

export default function Aside() {
  return (
    <div className="self-start md:sticky md:top-32 md:ml-[60px]">
      <Search className="mb-8" />
      <Heading type="subHeading" className="mb-0">
        Recomendados
      </Heading>
      <div className="flex flex-col first:pt-0">
        {allBlogs.map((post, i) => {
          if (post.featured) {
            return (
              <>
                <Heading
                  key={i}
                  type="tertiary"
                  href={`/blog/${post.slug}`}
                  className="m-0 py-6 text-xl text-primary-700 hover:text-primary-400 md:text-xl"
                >
                  {post.title}
                </Heading>
                <Separator />
              </>
            );
          }
        })}
      </div>
    </div>
  );
}
