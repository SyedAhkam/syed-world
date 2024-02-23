import Link from "next/link";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Socials() {
  const socials = [
    { icon: FaEnvelope, path: "mailto:smahkam57@gmail.com" },
    { icon: FaTwitter, path: "https://twitter.com/SyedAhkam1" },
    { icon: FaGithub, path: "https://github.com/SyedAhkam" },
    { icon: FaLinkedin, path: "https://linkedin.com/in/syedahkam/" },
    { icon: FaDiscord, path: "https://discord.gg/MTWutRPzrf" },
  ];

  return (
    <div className="flex flex-none flex-row gap-4">
      {socials.map((social, idx) => (
        <Link key={idx} href={social.path}>
          <social.icon className="text-2xl hover:text-green" />
        </Link>
      ))}
    </div>
  );
}
