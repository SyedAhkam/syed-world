import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center md:pb-12">
      <h1 className="text-8xl text-blue md:text-[22rem]">404</h1>
      <p className="text-xl md:text-4xl">This page doesn&apos;t exist yet</p>
      <Link href="/" className="mt-8 text-green hover:underline">
        ← go home
      </Link>
    </div>
  );
}
