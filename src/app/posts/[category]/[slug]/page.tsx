import { posts as allPosts } from "#content";
import { notFound } from "next/navigation";

import PostMetadata from "@/components/posts/PostMetadata";
import PostContent from "@/components/posts/PostContent";
import TableOfContents from "@/components/posts/TableOfContents";

type Params = {
  slug: string;
  category: string;
};

export async function generateStaticParams() {
  return allPosts
    .filter((post) => !post.draft)
    .map((post) => ({
      slug: post.slug,
      category: post.category,
    }));
}

export async function generateMetadata(props: { params: Promise<Params> }) {
  const params = await props.params;
  const post = allPosts.find(
    (post) => post.slug === params.slug && post.category === params.category
  );

  if (!post) return {};

  return {
    title: post?.title,
    description: post?.description,
  };
}

export default async function PostView(props: { params: Promise<Params> }) {
  const params = await props.params;
  const post = allPosts.find(
    (post) => post.slug === params.slug && post.category === params.category
  );

  if (!post) {
    notFound();
  }

  if (post.draft && process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <div className="flex h-full gap-8 mx-8 md:mx-16">
      <article className="flex min-w-0 flex-1 flex-col space-y-8">
        <PostMetadata post={post!} />
        <PostContent post={post!} />
      </article>

      <aside className="sticky top-8 hidden h-fit w-56 shrink-0 lg:block">
        <TableOfContents toc={post!.toc} />
      </aside>
    </div>
  );
}
