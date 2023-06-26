"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { capitalize, categories } from "@/utils/contentlayer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import type { TabsProps } from "@radix-ui/react-tabs";

export default function Filter({ ...props }: TabsProps) {
  const [active, setActive] = useState("all");
  const [open, setOpen] = useState(false);

  return (
    <Tabs {...props} value={active} onValueChange={setActive} className="z-10">
      <TabsList className="max-md:mb-4">
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
      {props.children}
    </Tabs>
  );
}
