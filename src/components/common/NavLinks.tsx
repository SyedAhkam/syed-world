"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathName = usePathname();

  const destinations = [
    { name: "Home", path: "/", isActive: pathName === "/" },
    { name: "Posts", path: "/posts", isActive: pathName === "/posts" },
    { name: "About Me", path: "/about", isActive: pathName === "/about" },
    { name: "Contact", path: "/contact", isActive: pathName === "/contact" },
  ];

  return (
    <div className="flex flex-none flex-row gap-8">
      {destinations.map((destination, idx) => (
        <Link
          key={idx}
          href={destination.path}
          className={`${
            destination.isActive ? "text-foreground" : "text-white"
          } text-xl hover:underline`}
        >
          {destination.name}
        </Link>
      ))}
    </div>
  );
}
