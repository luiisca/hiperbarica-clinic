export const categories = ["tratamientos", "efectividad", "general"] as const;
export function formatSlug(slug: string) {
  return slug.split("/").pop();
}
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
