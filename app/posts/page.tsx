import PostListing from "../../components/blog/post_listing";

export default function Posts() {
  const limit = 10;
  const curr = 1;

  const posts = [
    {
      category: "guide",
      title: "how-to-setup-id-with-kde",
      subtitle:
        "Yes plz small batch seitan, nostrud drinking vinegar hella keytar synth subway tile cliche banjo copper mug knausgaard slow-carb.",
      date: "11/9/22",
      readingTime: "3 mins",
    },
    {
      category: "programming",
      title: "building-a-rust-crate",
      subtitle:
        "Yes plz small batch seitan, nostrud drinking vinegar hella keytar synth subway tile cliche banjo copper mug knausgaard slow-carb.",
      date: "11/9/22",
      readingTime: "3 mins",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex h-[70vh] flex-col">
        {posts.map((post) => (
          <PostListing {...post} key={post.title} />
        ))}
      </div>
      <div className="flex flex-row justify-center space-x-4 text-lg">
        <p>Showing page</p>
        <p className="font-bold">
          <span className="text-magenta">{curr}</span>/{limit}
        </p>
        <p className="font-bold text-green hover:underline">Next</p>
      </div>
    </div>
  );
}
