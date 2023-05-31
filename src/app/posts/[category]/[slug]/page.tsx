import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import PostMetadata from "@/components/posts/PostMetadata";
import PostContent from "@/components/posts/PostContent";

type Params = {
  slug: string;
  category: string;
};

export async function generateStaticParams() {
  return allPosts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug,
      category: post.category,
    }));
}

export function generateMetadata({ params }: { params: Params }) {
  const post = allPosts.find(
    (post) => post.slug === params.slug && post.category === params.category
  );

  if (!post) return;

  return {
    title: post?.title,
    description: post?.description,
  };
}

export default function PostView({ params }: { params: Params }) {
  const post = allPosts.find(
    (post) => post.slug === params.slug && post.category === params.category
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="flex h-full flex-row md:mx-16 md:gap-8">
      <div className="flex flex-1 flex-col space-y-8 md:border md:border-dotted md:border-foreground">
        <PostMetadata post={post!} />

        <PostContent post={post!} />
      </div>

      <div className="hidden flex-col border border-foreground p-4 md:flex md:min-w-[15%]">
        TOC
      </div>
    </div>
  );
}
