import { Post } from "contentlayer/generated";
import { formatRelative } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { IoMdCalendar } from "react-icons/io";
import { MdTimelapse } from "react-icons/md";

export default function PostMetadata({ post }: { post: Post }) {
  return (
    <div className="flex flex-col space-y-6 px-4">
      <h1 className="mt-8 text-4xl font-bold text-blue">{post!.title}</h1>

      <div className="flex flex-row space-x-2">
        <div className="mr-2 border-r pr-4">
          <Link href={`/categories/${post!.category}`}>{post!.category}</Link>
        </div>

        <div className="flex flex-row items-center">
          <IoMdCalendar className="mr-2 text-2xl text-green" />

          <p className="text-sm text-gray-500">
            {formatRelative(new Date(post!.date), new Date())}
          </p>
        </div>

        <div className="flex flex-row items-center">
          <MdTimelapse className="mr-2 text-2xl text-green" />

          <p className="text-sm text-gray-500">{post!.readingTime}</p>
        </div>
      </div>

      {post!.cover && (
        <div className="relative h-64 w-full lg:h-96 xl:h-[30rem]">
          <Image
            src={post!.cover!}
            alt={"Cover image for " + post!.title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      )}
    </div>
  );
}
