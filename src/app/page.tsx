import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8 pb-24">
      <div className="relative flex h-80 w-80 flex-col items-center justify-center overflow-hidden rounded-full">
        <Image
          src="/img/avatar.webp"
          alt="Author's avatar image"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-5xl font-bold text-green">Syed Ahkam</h2>

      <p className="w-1/3 text-center text-base font-medium">
        I&apos;m a passionate comp-sci student who is a nerd for all things
        software. Currently working on open-source and a few side-projects of my
        own.
      </p>
    </div>
  );
}
