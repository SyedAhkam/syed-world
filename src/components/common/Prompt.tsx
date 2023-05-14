"use client";

import { usePathname } from "next/navigation";

import { getPageFromPath } from "@/utils";

export default function Prompt() {
  const pathName = usePathname();

  const page = getPageFromPath(pathName);

  return (
    <div className="flex flex-col">
      <div className="inline-flex flex-row text-2xl">
        <p className="text-green">guest@</p>
        <p className="text-white">syed-world</p>

        <p className="ml-2 text-green">{"~>"}</p>
        <p className="ml-2 text-blue">./{page}</p>
      </div>
    </div>
  );
}
