import type { FC } from "react";

import { Container } from "@/src/shared/ui";
import { IProject, ProjectList } from "@/src/entities/Project";
import { ProjectsHead } from "@/src/widgets/ProjectsHead";

const fetchProjects = async () => {
  const data = await fetch("http://localhost:4321/api/projects");
  const projects = (await data.json()) as IProject[];

  return projects;
};

const ProjectsPage: FC = async () => {
  const projects = await fetchProjects();

  return (
    <Container className="text-center pt-12">
      <ProjectsHead className="mb-6" />
      <ProjectList projects={projects} className="mb-6" />
    </Container>
  );
};

export default ProjectsPage;
