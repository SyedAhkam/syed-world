"use client";

import { useEffect, useRef, useState } from "react";

type TocEntry = {
  title: string;
  url: string;
  items?: TocEntry[];
};

function TocItem({
  item,
  activeId,
  depth = 0,
}: {
  item: TocEntry;
  activeId: string;
  depth?: number;
}) {
  const id = item.url.slice(1);
  const isActive = activeId === id;

  return (
    <li className="flex flex-col">
      <a
        href={item.url}
        className={`border-l-2 py-1 pl-3 text-sm transition-colors hover:text-foreground ${
          depth > 0 ? "ml-3" : ""
        } ${
          isActive
            ? "border-green text-foreground"
            : "border-transparent text-muted"
        }`}
      >
        {item.title}
      </a>
      {item.items && item.items.length > 0 && (
        <ul>
          {item.items.map((child) => (
            <TocItem key={child.url} item={child} activeId={activeId} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TableOfContents({ toc }: { toc: TocEntry[] }) {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const allIds = toc.flatMap((item) => [
      item.url.slice(1),
      ...(item.items?.map((c) => c.url.slice(1)) ?? []),
    ]);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <nav className="flex flex-col gap-3">
      <p className="text-xs uppercase tracking-widest text-purple">on this page</p>
      <ul className="border-l border-dotted border-muted/30">
        {toc.map((item) => (
          <TocItem key={item.url} item={item} activeId={activeId} />
        ))}
      </ul>
    </nav>
  );
}
