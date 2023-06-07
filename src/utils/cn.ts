import { twMerge } from "tailwind-merge";

export function cn(...classes: unknown[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}
