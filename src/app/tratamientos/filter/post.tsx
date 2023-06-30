import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

import { treatments } from "@/utils/contentlayer";
import Heading from "@/components/ui/core/heading";
import { shimmer, toBase64 } from "@/utils/blur";

export type PostType = {
  icon: string;
  post: {
    title: string;
    url: string;
    image: string;
    description: string;
    icon?: string;
  };
  category: keyof typeof treatments;
};

export default function Post({ post, category, icon }: PostType) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center space-y-16 p-4 text-center transition-all duration-300 ease-in-out",
        post.url !== "#" ? " hover:translate-y-[-5px]" : ""
      )}
    >
      <Link
        href={post.url !== "#" ? post.url : ""}
        className={cn(
          "absolute left-0 top-0 z-10 h-full w-full",
          post.url !== "#" ? "" : "cursor-default"
        )}
      />
      {/* images */}
      <div className="relative !mt-0 h-[25vh] max-h-[400px] min-h-[250px] w-full">
        <div className="relative h-full w-full overflow-hidden rounded-md">
          <Image
            src={(post.url !== "#" ? post.image : "/blog/default.jpg") || ""}
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
        <div className="absolute left-1/2 top-full flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[url('/center-blob.png')] bg-contain bg-center bg-no-repeat ">
          <div className="relative h-11 w-11">
            <Image
              src={`/treatments/icons/${icon}`}
              alt={`${icon.split(".")[0] || ""} icon`}
              fill
              sizes="10vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      {/* text */}
      <div className="flex flex-col space-y-4 md:space-y-5">
        <Heading type="subHeading" className="mb-0">
          {category}
        </Heading>
        <Heading type="secondary" className="text-2xl md:text-3xl">
          {post.title}
        </Heading>
        <p className="mb-4 text-sm md:mb-6 md:text-base">{post.description}</p>
      </div>
    </div>
  );
}
