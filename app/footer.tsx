import Link from "next/link";

export default function Footer() {
  const destinations = [
    { name: "Home", path: "/", isActive: true },
    { name: "Posts", path: "/posts" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    { name: "", path: "https://twitter.com/SyedAhkam1" },
    { name: "", path: "https://github.com/SyedAhkam" },
    { name: "", path: "https://linkedin.com/in/syedahkam/" },
    { name: "ﭮ", path: "#coming-soon" },
  ];

  return (
    <footer className="fixed bottom-8 flex w-screen flex-row items-stretch justify-between justify-items-stretch pr-16">
      <div className="flex flex-row space-x-8 text-xl">
        {destinations.map((destination) => (
          <Link
            className={
              "hover:underline" +
              (destination.isActive ? " text-foreground" : "")
            }
            href={destination.path}
            key={destination.name}
          >
            {destination.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row space-x-3 px-8 text-left text-4xl text-blue">
        {socials.map((social) => (
          <Link
            className="hover:text-green"
            href={social.path}
            key={social.name}
          >
            {social.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
