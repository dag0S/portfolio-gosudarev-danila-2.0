import type { FC } from "react";

import { IProject } from "../../model/types";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { cn } from "@/src/shared/lib/shadcn";

interface Props {
  className?: string;
  projects: IProject[];
}

export const ProjectList: FC<Props> = ({ projects, className }) => {
  return (
    <div className={cn("grid md:grid-cols-2 gap-8", className)}>
      {projects.length > 0 &&
        projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
    </div>
  );
};
