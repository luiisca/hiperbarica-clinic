"use client";

import { allBlogs } from "contentlayer/generated";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsProps } from "@radix-ui/react-tabs";
import { capitalize, categories } from "@/utils/contentlayer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Post from "./post";

export function Content() {
  return (
    <>
      <TabsContent
        value="all"
        className="grid gap-[3.75rem] blog-lg:grid-cols-2"
      >
        {allBlogs.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </TabsContent>
      {categories.map((category, i) => (
        <TabsContent
          key={i}
          value={category}
          className="grid gap-[3.75rem] blog-lg:grid-cols-2"
        >
          {allBlogs.map((post, i) => {
            if (post.category === category) {
              return <Post key={i} post={post} />;
            }
          })}
        </TabsContent>
      ))}
    </>
  );
}

export default function Filter({
  ...props
}: TabsProps & {
  panel?: React.ReactNode;
}) {
  const [active, setActive] = useState("all");
  const [open, setOpen] = useState(false);

  return (
    <Tabs {...props} value={active} onValueChange={setActive} className="z-10">
      <TabsList>
        <TabsTrigger
          value="all"
          className="shrink-0 text-base uppercase text-primary-600 hover:text-primary-700 data-[state=active]:text-primary-700 data-[state=active]:decoration-transparent focus-visible:data-[state=active]:decoration-primary-700"
        >
          FILTRAR POR
        </TabsTrigger>

        {/* desktop */}
        {categories.map((category, i) => (
          <TabsTrigger value={category} key={i} className="max-blog-lg:hidden">
            {capitalize(category)}
          </TabsTrigger>
        ))}

        {/* mobile */}
        <div className="blog-lg:hidden">
          <Select
            value={active}
            onValueChange={setActive}
            open={open}
            onOpenChange={setOpen}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent open={open} setOpen={setOpen}>
              <SelectItem value="all">Todos</SelectItem>
              {categories.map((category, i) => (
                <SelectItem value={category} key={i}>
                  {capitalize(category)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </TabsList>
      <Content />
    </Tabs>
  );
}
