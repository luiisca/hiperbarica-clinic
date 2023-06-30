"use client";

import { capitalize, categories } from "@/utils/contentlayer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SelectItemsMobile() {
  const pathName = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="blog-lg:hidden">
      <Select
        value={
          pathName === "/blog"
            ? "all"
            : (pathName?.split("/").reverse()[0] as string)
        }
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent open={open} setOpen={setOpen}>
          {["all", ...categories].map((categoryTitle, i) => (
            <div
              key={i}
              className="group relative"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push(
                    categoryTitle === "all"
                      ? "/blog"
                      : `/blog/categorias/${categoryTitle}`
                  );
                }
              }}
            >
              <Link
                href={
                  categoryTitle === "all"
                    ? "/blog"
                    : `/blog/categorias/${categoryTitle}`
                }
                className="absolute left-0 top-0 z-10 h-full w-full"
              />
              <SelectItem
                value={categoryTitle}
                className="group-hover:text-primary-500"
              >
                {capitalize(categoryTitle === "all" ? "todos" : categoryTitle)}
              </SelectItem>
            </div>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
