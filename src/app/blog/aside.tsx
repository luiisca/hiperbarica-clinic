import Heading from "@/components/ui/core/heading";
import { formatSlug } from "@/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";

export default function Aside() {
  return (
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
  );
}
