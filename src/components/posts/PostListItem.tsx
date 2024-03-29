import { Post } from "#content";
import { IoMdCalendar } from "react-icons/io";
import { MdTimelapse } from "react-icons/md";
import { formatRelative } from "date-fns";
import Link from "next/link";

export default function PostListItem({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.category}/${post.slug}`}>
      <div className="space-y-4 border-b border-dotted border-foreground p-4 hover:cursor-pointer hover:opacity-70">
        <h3 className="text-xl font-bold text-blue">
          {post.category}/{post.slug}
        </h3>

        <p className="text-sm lg:w-2/3 xl:w-1/2">{post.description}</p>

        <div className="flex flex-col space-y-1 md:flex-row md:items-center md:space-x-4">
          <div className="flex flex-row">
            <IoMdCalendar className="mr-2 text-xl text-green" />
            <p className="text-sm text-gray-500">
              {formatRelative(new Date(post.date), new Date())}
            </p>
          </div>

          <div className="flex flex-row">
            <MdTimelapse className="mr-2 text-xl text-green" />

            <p className="text-sm text-gray-500">{post.metadata.readingTime} minute</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
