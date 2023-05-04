"use client";

import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import CalDialog from "@/components/calDialog";
import { Button } from "@/components/ui/core/button";
import { Separator } from "@/components/ui/separator";
import { Cross as CrossHamburger } from "hamburger-react";

const navItems = [
  {
    name: "Servicios",
    href: "",
  },
  {
    name: "Contáctanos",
    href: "",
  },
  {
    name: "Proceso",
    href: "#proceso",
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
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="absolute right-0 top-0 z-10 px-6 py-4 ">
      <Overlay hamburgerOpen={isOpen} setHamburgerOpen={setOpen} />
      <div className="flex h-24 items-center justify-between rounded-lg bg-primary-100 px-8 lg:hidden">
        <CrossHamburger
          toggled={isOpen}
          toggle={setOpen}
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
  hamburgerOpen: boolean;
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
      hamburgerOpen && setHamburgerOpen(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div
        className={cn(
          "sticky z-10 mx-auto w-full transition-all",
          "top-0 fill-mode-forwards",
          visible
            ? "animate-nav-fade-in-down"
            : "animate-nav-fade-out-up ease-out"
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
          "fill-mode-forwards",
          hamburgerOpen
            ? "animate-opacity-100 duration-200"
            : "animate-opacity-0 duration-200",
          visible ? "top-32 z-20" : "z-0 opacity-0"
        )}
      >
        <Overlay
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
          className="h-screen"
        />
        {/* mobile nav */}
        <nav
          className={cn(
            "absolute left-0 top-0 mx-auto ml-6 w-[calc(100%-3rem)] transition-all duration-700 ease-in-out"
          )}
        >
          <ul className="flex flex-col rounded-lg bg-primary-100 pb-8">
            {navItems.map((item, i) => (
              <li key={i} onClick={() => setHamburgerOpen(false)}>
                <Button
                  href={item.href}
                  className={cn(
                    "relative w-full justify-start bg-transparent px-12 py-8 text-base text-gray-500 transition-all hover:bg-transparent hover:text-primary-600",
                    "focus-visible:text-primary-600",
                    i === 0 ? "pt-8" : "pt-0"
                  )}
                >
                  {item.name}
                </Button>
              </li>
            ))}
            <Separator className="mx-auto mb-8 w-[calc(100%-4rem)]" />
            <li className="ml-12">
              <CalDialog />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
