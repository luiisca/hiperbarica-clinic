"use client";

import { capitalize, treatments } from "@/utils/contentlayer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SelectItemsMobile() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="blog-lg:hidden">
      <Select value={pathName?.split("/").reverse()[0] as string}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["todos", ...Object.keys(treatments)].map((treatmentTitle, i) => (
            <div
              className="group relative"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push(`/tratamientos/${treatmentTitle}`);
                }
              }}
            >
              <Link
                href={`/tratamientos/${treatmentTitle}`}
                className="absolute left-0 top-0 z-10 h-full w-full"
              />
              <SelectItem
                value={treatmentTitle}
                key={i}
                className="group-hover:text-primary-500"
              >
                {capitalize(
                  treatmentTitle === "todos"
                    ? "todos"
                    : treatments[treatmentTitle as keyof typeof treatments]
                        .title
                )}
              </SelectItem>
            </div>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
