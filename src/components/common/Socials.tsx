import Link from "next/link";

export default function Socials() {
  const socials = [
    { name: "", path: "https://twitter.com/SyedAhkam1" },
    { name: "", path: "https://github.com/SyedAhkam" },
    { name: "", path: "https://linkedin.com/in/syedahkam/" },
    { name: "ﭮ", path: "#coming-soon" },
  ];

  return (
    <div className="flex flex-none flex-row gap-4">
      {socials.map((social, idx) => (
        <Link key={idx} href={social.path}>
          <p className="text-2xl">{social.name}</p>
        </Link>
      ))}
    </div>
  );
}
