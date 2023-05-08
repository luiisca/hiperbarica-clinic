"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsProps } from "@radix-ui/react-tabs";
import { capitalize, categories } from "@/utils/contentlayer";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Content } from "../../filter";
import { useRouter } from "next/navigation";

export default function Filter({ ...props }: TabsProps) {
  const router = useRouter();

  return (
    <Tabs {...props}>
      <TabsList>
        <div className="shrink-0 text-base uppercase text-primary-600">
          FILTRAR POR
        </div>

        {/* desktop */}
        {categories.map((category, i) => (
          <TabsTrigger
            value={category}
            className="max-blog-lg:hidden"
            tabIndex={-1}
            key={i}
          >
            <Link href={`/blog/categorias/${category}`}>
              {capitalize(category)}
            </Link>
          </TabsTrigger>
        ))}

        {/* mobile */}
        <div className="blog-lg:hidden">
          <Select
            value={props.value}
            onValueChange={(value) => router.push(`/blog/categorias/${value}`)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
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
