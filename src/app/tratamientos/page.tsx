import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Todos nuestros tratamientos",
};

export default function CategoryPage() {
  redirect("/tratamientos/todos");
}
