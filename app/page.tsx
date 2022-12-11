import Image from "next/image";
import profilePic from "../public/static/img/profile.jpg";

export default function Home() {
  return (
    <div className="flex flex-col content-center items-center justify-center py-[6%]">
      <div className="relative h-[386px] w-[386px]">
        <Image
          src={profilePic}
          alt="The author's profile picture"
          className="rounded-full object-cover"
          sizes="100vw"
          fill
        />
      </div>

      <h2 className="my-8 text-5xl font-bold text-green">Syed Ahkam</h2>
      <br />
      <p className="w-2/6 text-center text-lg font-medium text-foreground">
        I&apos;m a passionate comp-sci student who is a nerd for all things
        software. Currently working on open-source and a few side-projects of my
        own.
      </p>
    </div>
  );
}
