import { cn } from "@/utils/cn";
import { capitalize } from "@/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { notFound } from "next/navigation";
import { shimmer, toBase64 } from "@/utils/blur";
import Heading from "@/components/ui/core/heading";
import { Separator } from "@/components/ui/separator";

import { format, parse, setGlobalDateI18n } from "fecha";
import { Mdx } from "@/components/mdx";
import { FacebookShare, WhatsappShare } from "./share-bttns";
import Aside from "../aside";
import Post from "../post";
import { Metadata } from "next";

export function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata | undefined {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `https://hiperbaricadelsurperu.com${image}`
    : `https://hiperbaricadelsurperu.com/api/og?title=${title}`;

  return {
    title: capitalize(title),
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://hiperbaricadelsurperu.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

setGlobalDateI18n({
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
});

const formatDate = (dateString: string) => {
  const date = parse(dateString, "YYYY-MM-DD") as Date;
  return format(date, "DD [de] MMMM, YYYY");
};

function Date({ dateString }: { dateString: string }) {
  return <time dateTime={dateString}>{formatDate(dateString)}</time>;
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const relatedPosts = allBlogs.filter(
    (blog) => blog.category === post?.category && blog._id !== post._id
  );

  if (!post) {
    notFound();
  }

  return (
    <section className="mt-8 w-full md:mt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      />
      {/* intro */}
      <div className="flex flex-col items-start blog-lg:h-[350px] blog-lg:flex-row-reverse blog-lg:items-center lg:!h-[410px]">
        {/* image */}
        <div
          className={cn(
            "relative overflow-hidden rounded-md",
            "h-[clamp(250px,_25vh,_600px)] max-h-[400px] w-full sm:max-h-[480px] md:max-h-[600px] md:min-h-[450px] blog-lg:h-full blog-lg:max-h-full blog-lg:min-h-full blog-lg:w-1/2",
            "mb-7 w-full blog-lg:mb-0 blog-lg:w-1/2"
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
        <div className="shrink-0 flex-col justify-center blog-lg:flex blog-lg:w-1/2 blog-lg:pr-32">
          {/* breadcrumb */}
          <div className="mb-5 flex items-center space-x-2.5 text-xs md:mb-7">
            <Link href="/blog" className="text-gray-100 hover:text-gray-300">
              Blog
            </Link>
            <IoIosArrowForward className="text-sm leading-6 text-[#757575]" />
            <Link
              href={`/blog/categorias/${post.category}`}
              className="text-primary-500 hover:text-primary-600"
            >
              {capitalize(post.category)}
            </Link>
          </div>

          {/* title */}
          <Heading className="mb-5 text-2xl md:mb-7 md:text-4xl">
            {post.title}
          </Heading>

          {/* time */}
          <div className="mb-2.5 text-sm text-[rgb(117,_117,_117)] md:mb-[5px]">
            Actualizado el <Date dateString={post.publishedAt} />
          </div>
          <div className="flex space-x-2.5 text-sm text-[rgb(195,_195,_194)]">
            <AiOutlineClockCircle className="text-lg" />
            <span>{post.readingTime} min</span>
          </div>
        </div>
      </div>

      <Separator className="my-9 md:mb-24 md:mt-14 blog-lg:mb-14 blog-lg:mt-16" />
      {/*Content*/}
      <div className="md:grid md:grid-cols-[60%_40%] blog-lg:grid-cols-[70%_30%]">
        <div>
          <div className="mb-8 flex items-center space-x-7 md:mb-12">
            <Heading type="subHeading" className="mb-0 text-xs blog-lg:text-sm">
              Compartir
            </Heading>
            <div className="flex items-center space-x-5">
              <FacebookShare title={post.title} slug={params.slug} />
              <WhatsappShare title={post.title} slug={params.slug} />
            </div>
          </div>
          <Mdx code={post.body.code} />
        </div>
        <div className="max-md:hidden">
          <Aside />
        </div>
      </div>
      <Separator className="my-20 md:my-24 blog-lg:my-[7.5rem]" />
      {/*Related Posts*/}
      {relatedPosts.length > 0 && (
        <div className="mb-20 md:mb-24 blog-lg:mb-[7.5rem]">
          <Heading
            type="tertiary"
            className="mb-12 text-2xl text-primary-700 md:leading-[2.125rem]"
          >
            Artículos Relacionados
          </Heading>

          <div className="grid gap-12 md:grid-cols-2 md:gap-7 blog-lg:grid-cols-3 blog-lg:gap-x-14 blog-lg:gap-y-4">
            {relatedPosts.map((post, i) => (
              <Post post={post} key={i} />
            ))}
          </div>
        </div>
      )}
      {/*Recommended Posts*/}
      <div className="mb-20 md:hidden ">
        <Aside />
      </div>
    </section>
  );
}
