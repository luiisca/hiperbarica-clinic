"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsProps } from "@radix-ui/react-tabs";
import { capitalize, treatments } from "@/utils/contentlayer";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Heading from "@/components/ui/core/heading";
import { shimmer, toBase64 } from "@/utils/blur";
import { cn } from "@/utils/cn";

function Post({
  post,
  category,
  icon,
}: {
  icon: string;
  post: {
    title: string;
    url: string;
    image: string;
    description: string;
    icon?: string;
  };
  category: keyof typeof treatments;
}) {
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
      <div className="relative !mt-0 h-[clamp(250px,_25vh,_400px)] w-full">
        <div className="relative h-full w-full overflow-hidden rounded-md">
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
        <div className="absolute left-1/2 top-full flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[url('/center-blob.png')] bg-contain bg-center bg-no-repeat ">
          <div className="relative h-11 w-11">
            <Image
              src={`/treatments/icons/${icon}`}
              alt={`${icon.split(".")[0]} icon`}
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

export default function Filter({ ...props }: TabsProps) {
  const router = useRouter();

  return (
    <Tabs {...props}>
      <TabsList>
        <Link
          className="shrink-0 text-base uppercase text-primary-600"
          href="/tratamientos"
        >
          FILTRAR POR
        </Link>

        {/* desktop */}
        {Object.keys(treatments).map((treatment, i) => (
          <TabsTrigger
            value={treatment}
            className="max-blog-lg:hidden"
            tabIndex={-1}
            key={i}
          >
            <Link href={`/tratamientos/${treatment}`}>
              {capitalize(treatment)}
            </Link>
          </TabsTrigger>
        ))}

        {/* mobile */}
        <div className="blog-lg:hidden">
          <Select
            value={props.value}
            onValueChange={(value) => router.push(`/tratamientos/${value}`)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(treatments).map((treatment, i) => (
                <SelectItem value={treatment} key={i}>
                  {capitalize(treatment)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </TabsList>
      <TabsContent
        value="all"
        className="grid p-0 mob-me:grid-cols-2 md:gap-8 blog-lg:grid-cols-3"
      >
        {Object.keys(treatments).map((treatmentTitle, i) =>
          treatments[treatmentTitle as keyof typeof treatments].diseases.map(
            (disease) => (
              <Post
                key={i}
                icon={
                  treatments[treatmentTitle as keyof typeof treatments].icon ||
                  disease.icon
                }
                post={disease}
                category={treatmentTitle as keyof typeof treatments}
              />
            )
          )
        )}
      </TabsContent>
      {Object.keys(treatments).map((treatmentTitle, i) => (
        <TabsContent
          key={i}
          value={treatmentTitle}
          className="grid gap-8 p-0 mob-me:grid-cols-2 blog-lg:grid-cols-3"
        >
          {treatments[treatmentTitle as keyof typeof treatments].diseases.map(
            (disease, i) => (
              <Post
                key={i}
                icon={
                  treatments[treatmentTitle as keyof typeof treatments].icon ||
                  disease.icon
                }
                post={disease}
                category={treatmentTitle as keyof typeof treatments}
              />
            )
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
