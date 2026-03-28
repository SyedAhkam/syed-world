import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { MdStar } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
import { FaPython, FaRust } from "react-icons/fa";
import { MdAndroid } from "react-icons/md";
import { SiTypescript, SiWebassembly, SiFlutter, SiJavascript } from "react-icons/si";
import { IconType } from "react-icons";

import { Project } from "#content";

const techIconMap: { [key: string]: IconType } = {
  "rust": FaRust,
  "python": FaPython,
  "android": MdAndroid,
  "wasm": SiWebassembly,
  "typescript": SiTypescript,
  "javascript": SiJavascript,
  "flutter": SiFlutter
}

dayjs.extend(relativeTime);

const getLatestCommit = async (repo: string) => {
  let resp = await fetch(`https://api.github.com/repos/${repo}/commits?page=1&per_page=1`, {
    method: 'GET',
    headers: {
      "Authorization": `Token ${process.env.GITHUB_ACCESS_TOKEN}`,
      "accept": "application/vnd.github+json"
    },
    next: { revalidate: 86400 }
  });

  const commits = await resp.json();
  return commits[0];
}

const getRepo = async (repo: string) => {
  let resp = await fetch(`https://api.github.com/repos/${repo}`, {
    method: 'GET',
    headers: {
      "Authorization": `Token ${process.env.GITHUB_ACCESS_TOKEN}`,
      "accept": "application/vnd.github+json"
    },
    next: { revalidate: 86400 }
  });

  return await resp.json();
}

export default async function ProjectCard({ project }: { project: Project }) {
  const repo = await getRepo(project.repo);
  const latestCommit = await getLatestCommit(project.repo);

  const icons = project.tech.map((t: string) => ({ Icon: techIconMap[t], label: t }));
  const commitHash = latestCommit.sha.slice(0, 7);
  const commitMessage = latestCommit.commit.message.split("\n")[0];
  const commitDate = dayjs(latestCommit.commit.committer.date).fromNow();

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col gap-3 py-6 pr-4 transition-colors hover:bg-background-alt">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-0">
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <h3 className="text-base font-bold text-blue md:text-xl">{project.name}</h3>
              <LuExternalLink className="text-muted" />
            </div>
            <p className="text-sm text-muted">{project.tagline}</p>
          </div>

          <div className="flex flex-row items-center gap-4 md:flex-col md:items-end md:gap-2">
            <div className="flex flex-row gap-1">
              {icons.map(({ Icon, label }, idx) => (
                <span key={idx} title={label}>
                  <Icon className="text-2xl" />
                </span>
              ))}
            </div>

            <div className="flex flex-row items-center gap-3 text-sm text-muted">
              <div className="flex flex-row items-center gap-1">
                <MdStar className="text-yellow text-lg" />
                <span>{repo.stargazers_count}</span>
              </div>
              <span className="hidden md:block">·</span>
              <span className="hidden md:block">{commitDate}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 text-sm">
          <span className="text-orange shrink-0">{commitHash}</span>
          <span className="text-muted truncate">{commitMessage}</span>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-muted/40 to-transparent" />
      </div>
    </a>
  );
}
