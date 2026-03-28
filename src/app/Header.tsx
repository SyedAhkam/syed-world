import Prompt from "@/components/common/Prompt";
import Stdout from "@/components/common/Stdout";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import NavLinks from "@/components/common/NavLinks";

async function getLatestCommitHash() {
  const response = await fetch("https://api.github.com/repos/sedbytes/syed-world/commits/main", {
      method: "GET",
      headers: {
        "Authorization": `token ${process.env.GITHUB_ACCESS_TOKEN}`,
        "Accept": "application/vnd.github.VERSION.sha"
      },
      next: { revalidate: 86400 }
    });

  return (await response.text()).slice(0, 7)
}

export default async function Header() {
  const latestCommitHash = await getLatestCommitHash();

  return (
    <nav className="m-8 flex flex-row items-start md:m-16">
      <div className="flex-1 space-y-2">
        <Stdout commitHash={latestCommitHash} />
        <Prompt />
      </div>

      <div className="flex items-center gap-4">
        <NavLinks mobileOnly />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
