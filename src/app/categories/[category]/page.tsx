import PostListItem from "@/components/posts/PostListItem";
import { posts as allPosts, Post } from "#content";
import { compareDesc } from "date-fns";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const categories = [...new Set(allPosts.map((p) => p.category))];
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return { title: category };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  let posts: Post[] = allPosts
    .filter((p) => p.category === category)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  if (process.env.NODE_ENV === "production") {
    posts = posts.filter((post) => !post.draft);
  }

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="mx-8 flex flex-col border border-foreground md:mx-16">
      <div className="border-b border-foreground px-4 py-3 text-sm text-gray-500">
        category: <span className="text-green">{category}</span>
      </div>
      <div className="flex flex-1 flex-col">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
