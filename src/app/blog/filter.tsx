"use client";

import { Blog, allBlogs } from "contentlayer/generated";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsProps } from "@radix-ui/react-tabs";
import { categories, formatSlug } from "@/utils/contentlayer";
import Heading from "@/components/ui/core/heading";
import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { shimmer, toBase64 } from "@/utils/blur";

function Post({ post }: { post: Blog }) {
  return (
    <Link
      href={`/blog/${formatSlug(post.slug) as string}`}
      className="flex flex-col space-y-5 transition duration-300 ease-in-out hover:-translate-y-1"
    >
      {/* image */}
      <div
        className={cn(
          "relative h-[clamp(250px,_25vh,_600px)] overflow-hidden rounded-md"
        )}
      >
        <Image
          src={post.image as string}
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
          href={`/blog/${post.category}`}
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
    </Link>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function Filter({
  ...props
}: TabsProps & {
  panel?: React.ReactNode;
}) {
  const [active, setActive] = useState("all");

  return (
    <Tabs {...props} value={active} onValueChange={setActive}>
      <TabsList>
        <TabsTrigger
          value="all"
          className="shrink-0 text-base uppercase text-primary-600 hover:text-primary-700 data-[state=active]:text-primary-700 data-[state=active]:decoration-transparent focus-visible:data-[state=active]:decoration-primary-700"
        >
          FILTRAR POR
        </TabsTrigger>

        {/* desktop */}
        {categories.map((category) => (
          <TabsTrigger value={category} className="max-blog-lg:hidden">
            {capitalize(category)}
          </TabsTrigger>
        ))}

        {/* mobile */}
        <div className="blog-lg:hidden">
          <Select value={active} onValueChange={setActive}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {categories.map((category) => (
                <SelectItem value={category}>{capitalize(category)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </TabsList>
      <TabsContent
        value="all"
        className="grid gap-[3.75rem] blog-lg:grid-cols-2"
      >
        {allBlogs.map((post) => (
          <Post post={post} />
        ))}
      </TabsContent>
      {categories.map((category) => (
        <TabsContent
          value={category}
          className="grid gap-[3.75rem] blog-lg:grid-cols-2"
        >
          {allBlogs.map((post) => {
            if (post.category === category && formatSlug(post.slug)) {
              return <Post post={post} />;
            }
          })}
        </TabsContent>
      ))}
    </Tabs>
  );
}

const test = "efectividad/efe1";
test.split("/").pop();
