"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "./ui/core/button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperProps, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y, Swiper as SwiperType } from "swiper";
import "swiper/css/a11y";

function Arrow({ ...props }: ButtonProps & { next?: boolean; prev?: boolean }) {
  const swiper = useSwiper();

  return (
    <Button
      {...props}
      variant="icon"
      color="icon"
      className={cn(
        "absolute top-1/2 z-10 -translate-y-1/2 max-xl:h-12 max-xl:w-12",
        props.prev ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2",
        props.className
      )}
      onClick={() => {
        props.next ? swiper.slideNext() : swiper.slidePrev();
      }}
    >
      {props.next ? <BsArrowRight /> : <BsArrowLeft />}
    </Button>
  );
}

export default function BaseCarousel<T>({
  Skeleton,
  className,
  slideClassName,
  arrowsClasses,
  dotClasses,
  children,
  slidesCopy,
  ...props
}: Omit<SwiperProps, "children"> & {
  Skeleton?: React.ElementType;
  className?: string;
  slideClassName?: string;
  arrowsClasses?: Partial<{
    container: string;
    prev: string;
    next: string;
  }>;
  dotClasses?: Partial<{ list: string; dot: string }>;
  children: (copy: T) => React.ReactNode;
  slidesCopy: Array<T>;
  onSwiperFn?: (swiper: SwiperType) => void;
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <>
      <Swiper
        {...props}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiperReady(true);
          props.onSwiperFn?.(swiper);
        }}
        className={cn(
          "static [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:select-none",
          className,
          dotClasses?.list,
          dotClasses?.dot
        )}
        modules={[Navigation, Pagination, A11y]}
        pagination={{
          enabled: !!props.pagination,
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={32} // same as body margin-x
        speed={400}
        grabCursor
        loop
      >
        {!swiperReady && Skeleton && <Skeleton />}
        {slidesCopy?.map((copy, i) => (
          <SwiperSlide
            className={cn(
              "shrink-0",
              swiperReady ? "" : "hidden",
              slideClassName
            )}
            key={i}
          >
            {children(copy)}
          </SwiperSlide>
        ))}
        <div className={cn("", arrowsClasses?.container)}>
          <Arrow prev className={arrowsClasses?.prev} disabled={!swiperReady} />
          <Arrow next className={arrowsClasses?.next} disabled={!swiperReady} />
        </div>
      </Swiper>
    </>
  );
}
