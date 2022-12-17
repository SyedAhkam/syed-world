"use client";

import { usePathname } from "next/navigation";
import Prompt from "../components/common/Prompt";
import Stdout from "../components/common/Stdout";

export default function Header() {
  const pathName = usePathname();

  const getPageFromPath = () => {
    switch (pathName) {
      case "/":
        return "index";
      case "/posts":
        return "posts";
      case "/about":
        return "about";
      case "/contact":
        return "contact";
      default:
        return "home";
    }
  };

  return (
    <header className="mx-16 my-16">
      <Prompt exec={getPageFromPath()} />
      <Stdout page={getPageFromPath()} />
    </header>
  );
}
