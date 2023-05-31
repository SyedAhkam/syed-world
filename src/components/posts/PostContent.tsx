import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function PostContent({ post }: { post: Post }) {
  const Content = useMDXComponent(post.body.code);

  // FIXME: prose invert not working conditionally
  return (
    <article className="prose prose-invert flex w-full flex-1 flex-col flex-wrap overflow-hidden px-4 pb-4 dark:prose-invert xl:prose-xl">
      <Content />
    </article>
  );
}
