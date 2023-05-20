import { Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export default function PostContent({ post }: { post: Post }) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className="flex flex-1 flex-col px-4 pb-4">
      <Content />
    </div>
  );
}
