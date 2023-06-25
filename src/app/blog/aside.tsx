import { Button } from "@/components/ui/core/button";
import Heading from "@/components/ui/core/heading";
import { Separator } from "@/components/ui/separator";
import { allBlogs } from "contentlayer/generated";

function Search() {
  return (
    <form
      className="flex flex-col items-start space-y-2"
      action={"/blog/buscar"}
    >
      <input type="search" name="query" />
      <Button className="px-3 py-2" type="submit">
        Buscar
      </Button>
    </form>
  );
}

export default function Aside() {
  return (
    <div className="mt-24 self-start md:sticky md:top-24 md:ml-[60px]">
      <Heading type="subHeading">Recomendados</Heading>
      <Search />
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
