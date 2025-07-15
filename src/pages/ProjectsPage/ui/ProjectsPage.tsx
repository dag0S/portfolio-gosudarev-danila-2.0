import type { FC } from "react";

import { Container } from "@/src/shared/ui";
import { ProjectList } from "@/src/entities/Project";
import { ProjectsHead } from "@/src/widgets/ProjectsHead";
import { fetchProjects } from "@/src/entities/Tag";

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
