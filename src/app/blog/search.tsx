import { Button } from "@/components/ui/core/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { ArrowRight } from "lucide-react";
import { HTMLProps } from "react";

export default function Search(props: HTMLProps<HTMLFormElement>) {
  return (
    <form
      {...props}
      className={cn("relative", props.className)}
      action={"/blog/buscar"}
    >
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
