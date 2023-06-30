import { Metadata } from "next";
import Heading from "@/components/ui/core/heading";
import { cn } from "@/utils/cn";
import { capitalize, treatments } from "@/utils/contentlayer";
import { Separator } from "@/components/ui/separator";
import Filter from "../filter";

export function generateStaticParams() {
  return Object.keys(treatments).map((treatment) => ({
    treatment,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { treatment: string };
}): Metadata | undefined {
  const treatment = Object.keys(treatments).find(
    (treatment) => treatment === params.treatment
  );
  if (!treatment) {
    return;
  }

  return {
    title: capitalize(treatment),
  };
}

export default function TreatmentsPage({
  params,
}: {
  params: { treatment: string };
}) {
  const treatment = params.treatment as keyof typeof treatments;

  return (
    <div>
      <div
        className={cn(
          "my-12 w-full text-center md:my-20 ",
          "animate-fade-in-up opacity-0 duration-1000 delay-150 ease-in-out fill-mode-forwards"
        )}
      >
        <Heading className="text-primary-700 md:text-4xl xl:text-6xl">
          {capitalize(treatment)}
        </Heading>
      </div>
      <Separator className="mb-20" />
      <Filter treatmentParam={treatment} />
    </div>
  );
}
