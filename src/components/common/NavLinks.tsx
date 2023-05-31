"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useClick,
  useFloating,
  useInteractions,
  flip,
  offset,
} from "@floating-ui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import ThemeSwitcher from "./ThemeSwitcher";

const destinations = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
  { name: "About Me", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function MobileMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      flip(),
      offset({
        crossAxis: 16,
      }),
    ],
  });

  const click = useClick(context, {
    toggle: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="text-2xl text-white hover:text-green"
      >
        <FiMenu />
      </button>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="flex flex-col items-center gap-4 rounded-sm bg-background p-4 shadow-md drop-shadow"
        >
          {children}

          {/* ThemeSwitcher for mobile */}
          <ThemeSwitcher embedInMobile={true} />
        </div>
      )}
    </>
  );
}

export default function NavLinks() {
  const pathName = usePathname();

  const Links = ({ isLargeScreen = false }: { isLargeScreen?: boolean }) => {
    return (
      <>
        {destinations.map((destination, idx) => (
          <Link
            key={idx}
            href={destination.path}
            className={`${
              pathName === destination.path ? "text-foreground" : "text-white"
            } ${isLargeScreen ? "text-xl" : ""} hover:underline`}
          >
            {destination.name}
          </Link>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="md:hidden">
        <MobileMenu>
          <Links />
        </MobileMenu>
      </div>

      <div className="hidden flex-none flex-row gap-8 md:flex">
        <Links isLargeScreen={true} />
      </div>
    </>
  );
}
