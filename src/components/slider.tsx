"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "./ui/core/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Settings } from "react-slick";

export const baseSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

function Arrow(props: ButtonProps & { next?: boolean; prev?: boolean }) {
  return (
    <Button
      {...props}
      variant="icon"
      className={cn(
        "absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 lg:h-[50px] lg:w-[50px]",
        props.prev ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
      )}
    >
      {props.next ? <ArrowRight /> : <ArrowLeft />}
    </Button>
  );
}

export default function BaseSlider(
  props: Settings & {
    children: React.ReactNode;
    dotClasses?: Partial<{ list: string; dot: string }>;
    arrowClasses?: Partial<{ left: string; right: string }>;
  }
) {
  let listRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<Slider>(null);

  useEffect(() => {
    console.log("🚀 REF", ref);
    if (ref.current) {
      const listEl = ref.current.innerSlider?.list;

      if (listEl) {
        const changeSlidingFn = (e: "down" | "up") => {
          listEl.style.cursor = e === "down" ? "grabbing" : "grab";
        };

        listEl.addEventListener("mousedown", () => changeSlidingFn("down"));
        listEl.addEventListener("mouseup", () => changeSlidingFn("up"));

        return () => {
          listEl.removeEventListener("mousedown", () =>
            changeSlidingFn("down")
          );
          listEl.addEventListener("mouseup", () => changeSlidingFn("up"));
        };
      }
    }
  }, [ref]);

  return (
    <Slider
      {...baseSettings}
      {...props}
      ref={ref}
      accessibility
      // dots list
      appendDots={(dots) => (
        <>
          <ul
            className={cn(
              "flex justify-center space-x-2 [&>.slick-active>button]:border-primary-500 [&>.slick-active>button]:bg-primary-500",
              props.dotClasses?.list
            )}
          >
            {dots}
          </ul>
        </>
      )}
      // dot item
      customPaging={() => (
        <button
          className={cn(
            "inline-block h-3 w-3 rounded-full border-[1px] border-primary-400 bg-white lg:h-4 lg:w-4 lg:border-2",
            props.dotClasses?.dot
          )}
        />
      )}
      nextArrow={<Arrow next className={cn(props.arrowClasses?.left)} />}
      prevArrow={<Arrow prev className={cn(props.arrowClasses?.right)} />}
      onSwipe={() => {
        listRef.current && (listRef.current.style.cursor = "grab");
      }}
      className={cn(
        "relative",
        "[&>.slick-list]:select-none hover:[&>.slick-list]:cursor-grab",
        "[&_.slick-track]:flex",
        props.className
      )}
    >
      {props.children}
    </Slider>
  );
}
