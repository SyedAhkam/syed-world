"use client";

import { usePathname } from "next/navigation";

import { getPageFromPath } from "@/utils";

export default function Stdout({ commitHash }: { commitHash: string }) {
  const pathName = usePathname();

  const page = getPageFromPath(pathName);

  const messages = [
    {
      text: <>Serving commit: <em>{commitHash}</em></>,
      type: "info",
    },
    {
      text: `Loaded page: ${page}`,
      type: "info",
    },
    {
      text: "Rendering requested page",
      type: "info",
    },
  ];

  const getColorByType = (type: string) => {
    switch (type) {
      case "info":
        return "text-blue";
      case "warning":
        return "text-yellow";
      case "error":
        return "text-red";
      default:
        return "text-white";
    }
  };

  const getTagByType = (type: string) => {
    switch (type) {
      case "info":
        return "[*]";
      case "warning":
        return "[!]";
      case "error":
        return "[X]";
      default:
        return "[*]";
    }
  };

  return (
    <div className="hidden flex-col md:flex md:text-xl">
      {messages.map((message, index) => (
        <p key={index}>
          <span className={getColorByType(message.type)}>
            {getTagByType(message.type)}
          </span>{" "}
          {message.text}
          {index === messages.length - 1 && (
            <span className="animate-pulse">...</span>
          )}
        </p>
      ))}
    </div>
  );
}
