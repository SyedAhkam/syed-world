"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathName = usePathname();

  const destinations = [
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-none flex-row gap-8">
      {destinations.map((destination, idx) => (
        <Link
          key={idx}
          href={destination.path}
          className={`${
            destination.path == pathName ? "text-foreground" : "text-white"
          } text-xl hover:underline`}
        >
          {destination.name}
        </Link>
      ))}
    </div>
  );
}
