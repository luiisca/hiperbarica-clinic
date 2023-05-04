import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import React, { HTMLAttributes } from "react";

type InferredVariantProps = VariantProps<typeof headingVariants>;
type HeadingColor = NonNullable<InferredVariantProps["color"]>;
type HeadingBaseProps = {
  shallow?: boolean;
} & Omit<InferredVariantProps, "color"> & {
    color?: HeadingColor;
  };

const headingVariants = cva("font-lora mb-8", {
  variants: {
    type: {
      primary: "text-5xl xl:text-6xl",
      secondary: "text-4xl md:text-5xl",
      tertiary: "text-3xl md:text-4xl",
      subHeading:
        "font-inter block text-sm font-medium text-primary-500 uppercase mb-4 tracking-[0.75px]",
    },
    color: {
      category:
        "mb-5 text-xs leading-[1.125rem] text-primary-400 hover:text-primary-500",
    },
  },
  defaultVariants: {
    type: "primary",
  },
});

export type HeadingProps = HeadingBaseProps &
  (
    | (HTMLAttributes<HTMLHeadingElement> & { href?: never })
    | (Omit<JSX.IntrinsicElements["a"], "href" | "onClick" | "ref"> & LinkProps)
  );

const Heading = React.forwardRef<
  HTMLHeadingElement | HTMLAnchorElement,
  HeadingProps
>(({ type, color, shallow, className, ...props }: HeadingProps, ref) => {
  const isLink = typeof props.href !== "undefined";
  const { tag } = getElTag(type || "primary");
  const element = React.createElement(isLink ? "a" : tag, {
    ...props,
    ref,
    className: cn(headingVariants({ type, color, className })),
  });

  return props.href ? (
    <Link {...props} shallow={shallow && shallow} legacyBehavior passHref>
      {element}
    </Link>
  ) : (
    <>{element}</>
  );
});
Heading.displayName = "Heading";
export default Heading;

type HeadingType = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  subHeading?: boolean;
};
function getElTag(type: keyof HeadingType) {
  switch (type) {
    case "primary": {
      return {
        tag: "h1",
      };
    }
    case "secondary": {
      return {
        tag: "h2",
      };
    }
    case "tertiary": {
      return {
        tag: "h3",
      };
    }
    case "subHeading": {
      return {
        tag: "span",
      };
    }

    default: {
      return {
        tag: "h1",
      };
    }
  }
}
