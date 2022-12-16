import Image from "next/image";
import profilePic from "../public/static/img/profile.jpg";

export default function Home() {
  return (
    <div className="flex flex-col content-center items-center justify-center lg:py-[6%]">
      <div className="relative h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px] lg:h-[368px] lg:w-[368px]">
        <Image
          src={profilePic}
          alt="The author's profile picture"
          className="rounded-full object-cover"
          sizes="100vw"
          fill
        />
      </div>

      <h2 className="my-8 text-3xl font-bold text-green md:text-4xl lg:text-5xl">
        Syed Ahkam
      </h2>
      <br />
      <p className="w-3/4 text-center text-base font-medium text-foreground md:w-3/5 md:text-lg lg:w-2/5">
        I&apos;m a passionate comp-sci student who is a nerd for all things
        software. Currently working on open-source and a few side-projects of my
        own.
      </p>
    </div>
  );
}
