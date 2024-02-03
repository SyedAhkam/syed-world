import Image from "next/image";

import DynamicAvatar from "@/components/DynamicAvatar";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8 pb-12">
      <div className="relative flex h-52 w-52 flex-col items-center justify-center overflow-hidden rounded-full md:h-60 md:w-60 lg:h-80 lg:w-80 border-2 border-dotted border-blue">
        <DynamicAvatar />
      </div>

      <h2 className="text-2xl font-bold text-green md:text-4xl lg:text-5xl">
        Syed Ahkam
      </h2>

      <p className="w-4/5 text-center text-base font-medium md:w-2/3 md:text-lg lg:w-1/2 xl:w-1/3">
        I&apos;m a passionate comp-sci student who is a nerd for all things
        software. Currently working on open-source and a few side-projects of my
        own.
      </p>
    </div>
  );
}
