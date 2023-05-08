"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const targetElementIds = [
  "certificaciones",
  "treatments",
  "benefits",
  "proceso",
  ...Array.from({ length: 3 }).map((_, i) => `process-step-image-${i}`),
  ...Array.from({ length: 3 }).map((_, i) => `process-step-text-${i}`),
  "cta",
  "faq",
];

export default function Observer() {
  const pathName = usePathname();

  useEffect(() => {
    const targetElements = targetElementIds.map((id) =>
      document.getElementById(id)
    );
    const visibleElements: Element[] = [];

    const handleIntersection = (entry: IntersectionObserverEntry) => {
      visibleElements.push(entry.target);
      const element = entry.target as Element & {
        dataset: { intersect: string };
      };
      element.dataset.intersect = "true";

      if (element && element.dataset.intersect === "true") {
        observer.unobserve(entry.target);
      }
    };

    // create observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleIntersection(entry);
          }
        });

        // Disconnect when all elements are visible
        if (visibleElements.length === targetElements.length) {
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    // Observe elements
    targetElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathName === "/"]);

  return <></>;
}
