import { Post } from "#content";
import MDXContent from "./MDXContent";

export default function PostContent({ post }: { post: Post }) {
  // FIXME: prose invert not working conditionally
  return (
    <article className="prose flex w-full flex-1 flex-col flex-wrap overflow-hidden px-4 pb-4 dark:prose-invert xl:prose-xl">
      <MDXContent code={post.content} />
    </article>
  );
}
