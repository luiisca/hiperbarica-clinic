import * as React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
export type SVGComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
>;

import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";

type InferredVariantProps = VariantProps<typeof buttonVariants>;
type ButtonColor = NonNullable<InferredVariantProps["color"]>;
type ButtonBaseProps = {
  StartIcon?: SVGComponent | React.ElementType;
  EndIcon?: SVGComponent | React.ElementType;
  shallow?: boolean;
} & Omit<InferredVariantProps, "color"> & {
    color?: ButtonColor;
  };

const buttonVariants = cva(
  "!inline-flex items-center justify-center px-8 py-4 rounded-[9px] text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:bg-gray-100",
  {
    variants: {
      variant: {
        default: "",
        icon: cn(
          "p-0 transition-all w-[50px] h-[50px] text-3xl text-primary-500 bg-white rounded-full",
          "shadow-md shadow-[1px_1px_10px_0_rgb(116_192_252/15%)] hover:shadow-[1px_1px_15px_0_rgb(116_192_252/25%)]",
          "disabled:text-primary-100 disabled:cursor-not-allowed disabled:hover:shadow-none"
        ),
      },
      color: {
        default: "bg-primary-400 text-white hover:bg-primary-500",
        icon: "",
        // destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "bg-white text-gray-500 hover:bg-transparent hover:shadow-[inset_0_0_0_3px_#fff]",
        // subtle:
        //   "bg-slate-100 text-slate-900 hover:bg-slate-200 :text-slate-100",
        // ghost:
        //   "bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent",
        link: "p-0 transition-color text-primary-600 underline-offset-4 hover:text-primary-700 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
      color: "default",
      // size: "default",
    },
  }
);

export type ButtonProps = ButtonBaseProps &
  (
    | (Omit<JSX.IntrinsicElements["a"], "href" | "onClick" | "ref"> & LinkProps)
    | (Omit<JSX.IntrinsicElements["button"], "ref"> & {
        href?: never;
      })
  );

// ref receives <Element type, Element props>
const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      color,
      // size,
      shallow,
      StartIcon,
      EndIcon,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const isLink = typeof props.href !== "undefined";

    const element = React.createElement(
      isLink ? "a" : "button",
      {
        ...props,
        ref,
        className: cn(buttonVariants({ variant, color, className })),
      },
      <>
        {StartIcon && (
          <>
            <StartIcon
              className={cn(
                variant === "icon"
                  ? "h-4 w-4"
                  : "h-4 w-4 stroke-[1.5px] ltr:mr-2 rtl:ml-2"
              )}
            />
            )
          </>
        )}
        {props.children}
        {EndIcon && (
          <>
            <EndIcon
              className={cn(
                "inline-flex",
                variant === "icon"
                  ? "h-4 w-4"
                  : "h-4 w-4 stroke-[1.5px] ltr:mr-2 rtl:ml-2"
              )}
            />
          </>
        )}
      </>
    );

    return props.href ? (
      <Link {...props} shallow={shallow && shallow} legacyBehavior passHref>
        {element}
      </Link>
    ) : (
      <>{element}</>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
