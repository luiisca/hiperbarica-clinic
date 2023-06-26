import { TabsContent } from "@/components/ui/tabs";
import Post from "../post";
import type { Blog } from "contentlayer/generated";
import { categories } from "@/utils/contentlayer";

export default function Content({ content }: { content: Array<Blog> }) {
  return (
    <>
      <TabsContent
        value="all"
        className="grid gap-[3.75rem] blog-lg:grid-cols-2"
      >
        {content.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </TabsContent>
      {categories.map((category, i) => (
        <TabsContent
          key={i}
          value={category}
          className="grid gap-[3.75rem] blog-lg:grid-cols-2"
        >
          {content.map((post, i) => {
            if (post.category === category) {
              return <Post key={i} post={post} />;
            }
          })}
        </TabsContent>
      ))}
    </>
  );
}
