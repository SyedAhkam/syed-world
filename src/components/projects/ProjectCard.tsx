import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { MdStar } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
import { FaPython, FaRust } from "react-icons/fa";
import { MdAndroid } from "react-icons/md";
import { IconType } from "react-icons";

import { Project } from "#content";

const techIconMap: { [key: string]: IconType } = {
  "rust": FaRust,
  "python": FaPython,
  "android": MdAndroid
}

dayjs.extend(relativeTime);

const getLatestCommits = async (repo: string) => {
  let resp = await fetch(`https://api.github.com/repos/${repo}/commits?page=1`, {
    method: 'GET',
    headers: {
      "Authorization": `Token ${process.env.GITHUB_ACCESS_TOKEN}`,
      "accept": "application/vnd.github+json"
    }
  });

  return await resp.json();
}

const getRepo = async (repo: string) => {
  let resp = await fetch(`https://api.github.com/repos/${repo}`, {
    method: 'GET',
    headers: {
      "Authorization": `Token ${process.env.GITHUB_ACCESS_TOKEN}`,
      "accept": "application/vnd.github+json"
    }
  });

  return await resp.json();
}

export default async function ProjectCard({ project }: { project: Project  }) {
  const repo = await getRepo(project.repo);
  const commits = await getLatestCommits(project.repo)

  const latestCommit = commits[0].commit;

  const icons: IconType[] = project.tech.map((t: string) => techIconMap[t]);

  return (
    <div className="flex flex-col p-6 bg-background-alt rounded-lg gap-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <a href={project.url} target="_blank" className="flex flex-row items-center gap-2">
              <h3 className="text-white text-2xl">{project.name}</h3>
                <LuExternalLink />
            </a>

            <div className="border-l border-dotted border-purple w-1 ml-1 my-2 self-stretch" />

            <div className="flex flex-row items-center space-x-2">
              <MdStar className="text-yellow text-xl" />
              <p>{repo.stargazers_count}</p>
            </div>
          </div>

          <p className="text-lg">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-row gap-1">
          {icons.map((Icon, idx) => (
            <Icon key={idx} className="text-6xl" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <div className="flex flex-row justify-between">
          <p className="text-orange">Latest Commit:</p>
          <p className="text-cyan/80">Initial commit was {dayjs(project.initialCommit).fromNow()}</p>
        </div>
        <code className="bg-background rounded-md p-4">
          {latestCommit.message} [{latestCommit.committer.date}]
        </code>
      </div>
    </div>
  )
}
