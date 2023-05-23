"use client";

import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/core/button";
import { Separator } from "@/components/ui/separator";
import { Cross as CrossHamburger } from "hamburger-react";
import { WEB_URL } from "@/utils/constants";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";

const navItems = [
  {
    name: "Tratamientos",
    href: "/tratamientos",
  },
  {
    name: "Contáctanos",
    href: "#footer",
  },
  {
    name: "Proceso",
    href: `${WEB_URL}#proceso`,
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

function HamburgerMenu({
  isOpen,
  setOpen,
}: {
  isOpen: boolean | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) {
  return (
    <div className="absolute right-0 top-0 z-10 px-6 py-4 ">
      <Overlay hamburgerOpen={isOpen} setHamburgerOpen={setOpen} />
      <div className="flex h-24 items-center justify-between rounded-lg bg-primary-300 px-8 lg:hidden">
        <CrossHamburger
          toggled={isOpen}
          toggle={setOpen as React.Dispatch<React.SetStateAction<boolean>>}
          color="#555"
          direction="right"
          distance="sm"
          duration={0.5}
          easing="cubic-bezier(.21,1.02,.73,1)"
          hideOutline={false}
          label="Abrir barra de navegación"
          rounded
          size={30}
        />
      </div>
    </div>
  );
}

function Overlay({
  hamburgerOpen,
  setHamburgerOpen,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  hamburgerOpen: boolean | undefined;
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) {
  return (
    <div
      {...props}
      className={cn(
        "absolute left-0 top-0 z-0 h-full w-full bg-transparent",
        !hamburgerOpen ? "hidden" : "",
        props.className || ""
      )}
      onClick={() => hamburgerOpen && setHamburgerOpen(false)}
    />
  );
}

export default function NavContainer(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean | undefined>(
    undefined
  );
  const visible = useScrollVisibility({
    onScrollDown: () => {
      hamburgerOpen && setHamburgerOpen(false);
    },
  });

  return (
    <>
      <div
        className={cn(
          "sticky z-10 mx-auto w-full transition-all",
          "top-0 fill-mode-forwards",
          visible
            ? "animate-nav-fade-in-down"
            : visible === false
            ? "animate-nav-fade-out-up ease-out"
            : ""
        )}
        {...props}
      >
        <div className="z-10">{props.children}</div>
        <Overlay
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
        <HamburgerMenu isOpen={hamburgerOpen} setOpen={setHamburgerOpen} />
      </div>

      <div
        className={cn(
          "sticky top-0 mx-auto w-full transition-all",
          "top-32 fill-mode-forwards",
          hamburgerOpen
            ? "animate-opacity-100 duration-200"
            : hamburgerOpen === false
            ? "animate-opacity-0 duration-200"
            : "-z-10 opacity-0"
        )}
      >
        <Overlay
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
          className="h-screen"
        />
        {/* mobile nav */}
        <nav className="absolute left-0 top-0 mx-auto ml-6 w-[calc(100%-3rem)] transition-all duration-700 ease-in-out">
          <ul
            className={cn(
              "flex flex-col rounded-lg bg-primary-300 pb-8",
              "ring-1 ring-gray-100 ring-offset-0"
            )}
          >
            {navItems.map((item, i) => (
              <li key={i} onClick={() => setHamburgerOpen(false)}>
                <Button
                  href={item.href}
                  tabIndex={!hamburgerOpen ? -1 : 0}
                  className={cn(
                    "relative w-full justify-start bg-transparent px-12 py-8 text-base text-gray-500 transition-all hover:bg-transparent hover:text-primary-600",
                    "focus-visible:text-primary-600",
                    i === 0 ? "pt-8" : "pt-0"
                  )}
                  nativeAnchor={item.href.includes("#")}
                >
                  {item.name}
                </Button>
              </li>
            ))}
            <Separator className="mx-auto mb-8 w-[calc(100%-4rem)]" />
            <li className="ml-12" onClick={() => setHamburgerOpen(false)}>
              <Button href="/citas" tabIndex={!hamburgerOpen ? -1 : 0}>
                Agendar cita
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
