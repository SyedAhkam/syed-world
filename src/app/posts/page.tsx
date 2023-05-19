import PostListItem from "@/components/posts/PostListItem";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="border-1 mx-8 flex h-full flex-col border border-foreground md:mx-16">
      <div className="flex flex-1 flex-col">
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
