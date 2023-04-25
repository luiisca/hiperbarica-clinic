import { categories } from "@/utils/contentlayer";

export default function Layout({
  children,
  category,
  post,
}: {
  children: React.ReactElement;
  category: React.ReactNode;
  post: React.ReactNode;
}) {
  return categories.includes(children.props.segmentPath[3][1])
    ? category
    : post;
}
