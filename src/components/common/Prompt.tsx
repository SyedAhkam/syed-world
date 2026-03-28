"use client";

import { usePathname } from "next/navigation";

import { getPageFromPath } from "@/utils";

export default function Prompt() {
  const pathName = usePathname();

  const page = getPageFromPath(pathName);
  const [command, ...args] = page.split(" ");

  return (
    <div className="flex flex-col">
      <div className="flex min-w-0 flex-row text-sm md:text-2xl">
        <p className="text-green">guest@</p>
        <p className="text-foreground">syed-world</p>

        <p className="ml-2 text-green">{"~>"}</p>
        <p className="ml-2 shrink-0 text-blue">./{command}</p>
        {args.length > 0 && (
          <p className="ml-2 hidden min-w-0 flex-1 truncate text-blue/70 md:block">
            {args.join(" ")}
          </p>
        )}
      </div>
    </div>
  );
}
