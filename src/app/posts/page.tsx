import PostListItem from "@/components/posts/PostListItem";
import { posts as allPosts, Post } from "#content";
import { compareDesc } from "date-fns";

export default function Posts() {
  // Sort posts by publish date
  let posts: Post[] = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // Filter out unpublished posts in production
  if (process.env.NODE_ENV === "production") {
    posts = posts.filter((post) => !post.draft);
  }

  return (
    <div className="border-1 mx-8 flex h-full flex-col border border-foreground md:mx-16">
      <div className="flex flex-1 flex-col">
        {posts.length === 0 && (
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-blue md:text-4xl">
              No posts found
            </h1>
          </div>
        )}

        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>

      <div className="flex flex-row justify-center">
        {/* TODO: Implement pagination */}
      </div>
    </div>
  );
}
