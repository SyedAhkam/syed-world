import Link from "next/link";
import { useState } from "react";

export default function BlogSidebar() {
  const categories = ["guide", "programming", "tips", "review", "tech"];
  const tags = ["kde", "doas", "python", "react", "rust", "cooking"];

  return (
    <>
      <div className="flex h-1/2 flex-col items-center border-b-2 border-dotted py-2">
        <h3 className="text-2xl text-magenta underline">Categories</h3>
        <ul className="flex list-disc flex-col space-y-2 self-start py-8 px-16 text-xl marker:text-green">
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/posts/categories/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-1/2 flex-col items-center py-2">
        <h3 className="text-2xl text-magenta underline">Tags</h3>
        <ul className="flex list-disc flex-col space-y-2 self-start py-8 px-16 text-xl marker:text-green">
          {tags.map((tag) => (
            <li key={tag}>
              <Link href={`/posts/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
