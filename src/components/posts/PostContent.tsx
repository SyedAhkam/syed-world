import { Post } from "#content";
import MDXContent from "./MDXContent";

export default function PostContent({ post }: { post: Post }) {
  return (
    /* <article className="prose flex w-full flex-col flex-wrap overflow-hidden px-4 pb-4 dark:prose-invert xl:prose-xl"> */
    <div className="flex flex-col max-w-full px-4 pb-4 prose dark:prose-invert prose-h2:text-green prose-h3:text-purple prose-h4:text-yellow">
      <MDXContent code={post.content} />
    </div>
  );
}
