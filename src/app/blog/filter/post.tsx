import { cn } from "@/utils/cn";
import { shimmer, toBase64 } from "@/utils/blur";
import Heading from "@/components/ui/core/heading";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "contentlayer/generated";

export default function Post({ post }: { post: Blog }) {
  return (
    <div className="relative flex flex-col space-y-5 transition duration-300 ease-in-out hover:-translate-y-1">
      <Link
        href={`/blog/${post.slug}`}
        className="absolute left-0 top-0 z-10 h-full w-full"
      />

      {/* image */}
      <div
        className={cn(
          "relative min-h-[250px] h-[25vh] max-h-[600px] overflow-hidden rounded-md"
        )}
      >
        <Image
          src={post.image || ""}
          fill
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          sizes="60vw"
          alt={`${post.title} image`}
          className="object-cover object-center"
        />
      </div>

      {/* text */}
      <div>
        {/* category */}
        <Heading
          type="subHeading"
          color="category"
          href={`/blog/categorias/${post.category}`}
          className="relative z-20"
        >
          {post.category}
        </Heading>

        {/* title */}
        <Heading
          type="secondary"
          className="mb-5 text-xl md:text-2xl blog-lg:mb-[10px]"
        >
          {post.title}
        </Heading>
        <p className="text-sm leading-6">{post.summary}</p>
      </div>
    </div>
  );
}
