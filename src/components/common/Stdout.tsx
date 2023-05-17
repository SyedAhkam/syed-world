"use client";

import { usePathname } from "next/navigation";

import { getPageFromPath } from "@/utils";

export default function Stdout() {
  const pathName = usePathname();

  const page = getPageFromPath(pathName);

  const messages = [
    "Initializing Page renderer: v0.1",
    `Loaded page: ${page}`,
    "Rendering requested page",
  ];

  return (
    <div className="hidden flex-col md:flex md:text-xl">
      {messages.map((message, index) => (
        <p key={index}>
          <span className="text-red">[*]</span> {message}
          {index === messages.length - 1 && (
            <span className="animate-pulse">...</span>
          )}
        </p>
      ))}
    </div>
  );
}
