"use client";

import { useEffect } from "react";

const targetElementIds = [
  "certificates",
  "treatments",
  "benefits",
  "proceso",
  ...Array.from({ length: 3 }).map((_, i) => `process-step-image-${i}`),
  ...Array.from({ length: 3 }).map((_, i) => `process-step-text-${i}`),
  "cta",
  "faq",
];

export default function Observer() {
  useEffect(() => {
    const targetElements = targetElementIds.map((id) =>
      document.getElementById(id)
    );
    const visibleElements: Element[] = [];

    const handleIntersection = (entry: IntersectionObserverEntry) => {
      visibleElements.push(entry.target);
      console.log("👁‍🗨entry", entry.target);
      const element = entry.target as Element & {
        dataset: { intersect: string };
      };
      element.dataset.intersect = "true";
      console.log("👁‍🗨entry after dataset", entry.target);

      observer.unobserve(entry.target);
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
  }, []);

  return <></>;
}
