"use client";

import Link from "next/link";
import PopoverDestinationMenu from "../components/footer/PopoverDestinationMenu";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Footer() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const destinations = [
    { name: "Home", path: "/", isActive: true },
    { name: "Posts", path: "/posts", isActive: false },
    { name: "About Me", path: "/about", isActive: false },
    { name: "Contact", path: "/contact", isActive: false },
  ];

  const socials = [
    { name: "", path: "https://twitter.com/SyedAhkam1" },
    { name: "", path: "https://github.com/SyedAhkam" },
    { name: "", path: "https://linkedin.com/in/syedahkam/" },
    { name: "ﭮ", path: "#coming-soon" },
  ];

  if (!isDesktop) {
    return (
      <footer className="fixed bottom-2 flex w-screen flex-row items-center justify-between justify-items-stretch pr-8">
        <PopoverDestinationMenu destinations={destinations} />

        {/* TODO: build socials menu responsive */}
        <div className="flex flex-row space-x-3 px-8 text-left text-4xl text-blue">
          {socials.map((social) => (
            <Link
              className="hover:text-green"
              href={social.path}
              key={social.name}
            >
              {social.name}
            </Link>
          ))}
        </div>
      </footer>
    );
  }

  return (
    <footer className="fixed bottom-8 mx-16 flex w-screen flex-row items-stretch justify-between justify-items-stretch pr-16">
      <div className="flex flex-row space-x-8 text-xl">
        {destinations.map((destination) => (
          <Link
            className={
              "hover:underline" +
              (destination.isActive ? " text-foreground" : "")
            }
            href={destination.path}
            key={destination.name}
          >
            {destination.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row space-x-3 px-8 text-left text-4xl text-blue">
        {socials.map((social) => (
          <Link
            className="hover:text-green"
            href={social.path}
            key={social.name}
          >
            {social.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
