import { Button } from "@/components/ui/core/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Search() {
  return (
    <form className="relative" action={"/blog/buscar"}>
      <Input
        placeholder="Buscar posts"
        type="search"
        name="query"
        className="pr-9"
      />
      <Button
        className="absolute right-2 top-0 m-0 h-full p-0 text-primary-600 hover:text-primary-700"
        type="submit"
        color="icon"
      >
        <ArrowRight />
      </Button>
    </form>
  );
}
