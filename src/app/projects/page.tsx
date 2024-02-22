import { projects as allProjects, Project } from "#content";

import ProjectCard from "@/components/projects/ProjectCard";
import { groupBy } from "@/utils";

export const metadata = {
  title: "Projects"
}

export default function Projects() {
  const projectsByCategory: Map<string, Project[]> = groupBy(allProjects, p => p.category);

  return (
    <div className="flex flex-col mx-4 md:mx-16 gap-8">
      {Array.from(projectsByCategory, ([category, projects], idx) => (
        <div key={idx} className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-purple">{category}</h2>

          <div className="flex flex-col gap-4 lg:grid md:grid-cols-2">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
