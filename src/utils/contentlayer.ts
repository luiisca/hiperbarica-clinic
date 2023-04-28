export const categories = ["tratamientos", "efectividad", "general"] as const;
export function formatSlug(slug: string) {
  return slug.split("/").pop();
}
