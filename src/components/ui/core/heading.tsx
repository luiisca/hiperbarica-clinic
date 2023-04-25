import React, { HTMLAttributes } from "react";

type HeadingType = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  subHeading?: boolean;
};
type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  type: keyof HeadingType;
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ type, ...props }: HeadingProps, ref) => {
    const { tag, className } = getElTag(type);
    const element = React.createElement(tag, { ...props, ref, className });

    return element;
  }
);
export default Heading;

function getElTag(type: keyof HeadingType) {
  switch (type) {
    case "primary": {
      return {
        tag: "h1",
        className: "font-lora text-5xl xl:text-6xl leading-[1.1] my-0 mb-8",
      };
    }
    case "secondary": {
      return {
        tag: "h2",
        className: "font-lora mb-8 text-4xl md:text-5xl leading-[1.1]",
      };
    }
    case "tertiary": {
      return {
        tag: "h3",
        className: "font-lora text-3xl md:text-4xl leading-[1.2] mb-8",
      };
    }
    case "subHeading": {
      return {
        tag: "span",
        className:
          "block text-sm font-medium text-primary-shade-1 uppercase mb-4 tracking-[0.75px]",
      };
    }

    default: {
      return {
        tag: "h1",
        className: "font-lora text-5xl xl:text-6xl leading-[1.1] my-0 mb-8",
      };
    }
  }
}
