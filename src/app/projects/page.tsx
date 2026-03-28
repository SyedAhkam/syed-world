import { projects as allProjects, Project } from "#content";

import ProjectCard from "@/components/projects/ProjectCard";
import { groupBy } from "@/utils";

export const metadata = {
  title: "Projects"
}

export default function Projects() {
  const categoryOrder = ["Latest", "Maintained", "Co-Authored", "Experiments", "Hacked upon", "Archived"];
  const projectsByCategory: Map<string, Project[]> = new Map(
    Array.from(groupBy(allProjects, p => p.category))
      .sort(([a], [b]) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b))
      .map(([category, projects]) => [
        category,
        projects.sort((a, b) => new Date(b.latestCommitDate).getTime() - new Date(a.latestCommitDate).getTime())
      ])
  );

  return (
    <div className="flex flex-col mx-8 md:mx-16">
      {Array.from(projectsByCategory, ([category, projects], idx) => (
        <div key={idx} className="flex flex-col mb-12">
          <h2 className="text-xl font-bold text-purple mb-4">{category}</h2>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      ))}
    </div>
  );
}
