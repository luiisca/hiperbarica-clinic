"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

export default function SelectOverlay({ open }: { open: boolean }) {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 200);
      return () => {
        clearTimeout(timer);
      };
    }
    setVisible(true);
  }, [open]);

  return visible ? (
    <div
      id="select-overlay"
      className="fixed inset-0"
      onClick={(e) => e.stopPropagation()}
    ></div>
  ) : null;
}

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "isolate z-20 font-medium tracking-[.02px] text-primary-400 underline decoration-primary-500 decoration-2 underline-offset-8 hover:text-primary-500",
      "inline-flex items-center justify-center space-x-4 whitespace-nowrap py-1.5 text-sm transition-all focus-visible:text-primary-700 focus-visible:decoration-primary-700 focus-visible:outline-none focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50 ",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    open: boolean;
    setOpen: (open: boolean) => void;
  }
>(
  (
    { className, children, position = "popper", open, setOpen, ...props },
    ref
  ) => (
    <SelectPrimitive.Portal>
      <>
        {/* Workaround for https://github.com/radix-ui/primitives/issues/1658 */}
        <SelectOverlay open={open} />
        <SelectPrimitive.Content
          ref={ref}
          className={cn(
            "relative isolate z-20 min-w-[8rem] select-text overflow-hidden rounded-md border border-primary-500 bg-white px-5 animate-in fade-in-80",
            position === "popper" && "translate-y-1",
            className
          )}
          position={position}
          onEscapeKeyDown={() => setOpen(false)}
          {...props}
        >
          <SelectPrimitive.Viewport
            className={cn(
              "p-1",
              position === "popper" &&
                "h-min w-full min-w-[var(--radix-select-trigger-width)]"
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "w-full cursor-pointer py-2.5 pr-1.5",
      "font-medium tracking-[.02px] text-gray-500 hover:text-primary-500",
      "[&:not(:focus-visible)]:data-[state=checked]:text-primary-500",
      "flex items-center space-x-2 whitespace-nowrap text-sm transition-all focus-visible:text-primary-700 focus-visible:outline-none focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50 ",
      className
    )}
    {...props}
  >
    <span className="flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
