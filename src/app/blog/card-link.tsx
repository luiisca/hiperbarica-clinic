"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function CardLink({
  href,
  children,
  ...props
}: React.PropsWithChildren<LinkProps> & { href: string }) {
  const router = useRouter();
  const [mouseMoved, setMouseMoved] = useState(false);
  const handleClick = useCallback(() => {
    console.log("🐭 clicked,", mouseMoved);
    if (!mouseMoved) {
      router.push(href);
    }
  }, []);

  return (
    <Link
      {...props}
      onMouseMove={() => {
        console.log("🐭 mouse moved");
        setMouseMoved(true);
      }}
      onMouseDown={() => {
        console.log("🐭 mouse down");
        setMouseMoved(false);
      }}
      // onMouseUp={() => handleClick()}
      onClick={(e) => e.preventDefault()}
      href={href}
    >
      {children}
    </Link>
  );
}
