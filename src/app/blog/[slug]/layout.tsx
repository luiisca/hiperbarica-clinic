import { categories } from "@/utils/contentlayer";

export default function Layout({
  children,
  category,
  post,
}: {
  children: React.ReactElement<HTMLDivElement>;
  category: React.ReactNode;
  post: React.ReactNode;
}) {
  const props = children.props as HTMLDivElement & { segmentPath: string[][] };
  return categories.includes(
    (props.segmentPath[3]?.[1] as (typeof categories)[number]) || ""
  )
    ? category
    : post;
}
