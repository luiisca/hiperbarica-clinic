import { allBlogs } from "contentlayer/generated";

export default function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://hiperbaricadelsurperu.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `https://hiperbaricadelsurperu.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
