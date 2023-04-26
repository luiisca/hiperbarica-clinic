"use client";

import React, { useRef } from "react";
import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "./ui/core/button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  SwiperOptions,
  A11y,
  Swiper as SwiperType,
} from "swiper";
import "swiper/css/a11y";

function Arrow({
  swiper,
  ...props
}: ButtonProps & { next?: boolean; prev?: boolean; swiper: SwiperType }) {
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

export default function BaseSider<T>({
  className,
  slideClassName,
  arrowsClasses,
  dotClasses,
  children,
  content,
  ...props
}: SwiperOptions & {
  className?: string;
  slideClassName?: string;
  arrowsClasses?: Partial<{
    container: string;
    prev: string;
    next: string;
  }>;
  dotClasses?: Partial<{ list: string; dot: string }>;
  children: (copy: T) => React.ReactNode;
  content: Array<T>;
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <Swiper
        {...props}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={cn(
          "relative",
          "[&_.swiper-wrapper]:flex [&_.swiper-wrapper]:select-none",
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
        {content?.map((copy, i) => (
          <SwiperSlide className={cn("shrink-0", slideClassName)} key={i}>
            {children(copy)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cn("", arrowsClasses?.container)}>
        <Arrow
          prev
          swiper={swiperRef.current as SwiperType}
          className={arrowsClasses?.prev}
        />
        <Arrow
          next
          swiper={swiperRef.current as SwiperType}
          className={arrowsClasses?.next}
        />
      </div>
    </>
  );
}
