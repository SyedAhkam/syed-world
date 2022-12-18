export default function PostListing({
  category,
  title,
  subtitle,
  date,
  readingTime,
}: {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
}) {
  return (
    <div className="flex h-1/5 flex-col justify-center space-y-2 border-b-2 border-dotted px-4 text-xl">
      <p className="text-blue">{`${category}/${title}`}</p>

      <div className="w-3/5">
        <p className="text-foreground">{subtitle}</p>
      </div>

      <div className="flex flex-row space-x-2 text-xl font-bold">
        <p>
          <span className="px-2 text-4xl text-green"></span>
          {date}
        </p>
        <p>
          <span className="px-2 text-4xl text-green"></span>
          {date}
        </p>
      </div>
    </div>
  );
}
