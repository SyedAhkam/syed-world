import BlogSidebar from "../../components/blog/sidebar";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-8 flex h-[75vh] flex-row flex-wrap justify-between space-x-8 md:mx-16 lg:mx-16">
        <div className="flex grow flex-col border">{children}</div>
        <div className="flex w-[15%] flex-col justify-start border">
          <BlogSidebar />
        </div>
      </div>
    </>
  );
}
