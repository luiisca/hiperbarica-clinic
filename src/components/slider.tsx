"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "./ui/core/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Settings } from "react-slick";

function Arrow(props: ButtonProps & { next?: boolean; prev?: boolean }) {
  return (
    <Button
      {...props}
      variant="icon"
      className={cn(
        "absolute top-1/2 -translate-y-1/2",
        props.prev ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
      )}
    >
      {props.next ? <ArrowRight /> : <ArrowLeft />}
    </Button>
  );
}

export default function BaseSlider(
  props: Settings & {
    cards: React.ReactNode;
    dots?: Partial<{ listClassName: string; dotClassName: string }>;
    arrows?: Partial<{ leftClassName: string; rightClassName: string }>;
  }
) {
  let listRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<Slider>(null);

  useEffect(() => {
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
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "theClass",
    arrows: true,
  };

  return (
    <Slider
      {...settings}
      {...props}
      ref={ref}
      accessibility
      // dots list
      appendDots={(dots) => (
        <>
          <ul
            className={cn(
              "flex justify-center space-x-2 [&>.slick-active>button]:border-primary-500 [&>.slick-active>button]:bg-primary-500",
              props.dots?.listClassName
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
            "inline-block h-4 w-4 rounded-full border-2 border-primary-400 bg-white",
            props.dots?.dotClassName
          )}
        />
      )}
      nextArrow={<Arrow next className={cn(props.arrows?.leftClassName)} />}
      prevArrow={<Arrow prev className={cn(props.arrows?.rightClassName)} />}
      onSwipe={() => {
        listRef.current && (listRef.current.style.cursor = "grab");
      }}
      className={cn(
        "relative rounded-md bg-primary-200 p-8",
        "[&>.slick-list]:select-none [&>.slick-list]:overflow-hidden hover:[&>.slick-list]:cursor-grab ",
        "[&_.slick-track]:flex"
      )}
    >
      {props.cards}
    </Slider>
  );
}
