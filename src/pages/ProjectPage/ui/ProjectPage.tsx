import type { FC } from "react";

import { ProjectDetails } from "@/src/widgets/ProjectDetails";
import { fetchProjectById } from "@/src/entities/Tag";

interface Props {
  params: Promise<{ projectId: string }>;
}

const ProjectPage: FC<Props> = async ({ params }) => {
  const { projectId } = await params;
  const project = await fetchProjectById(projectId);

  return <ProjectDetails project={project} />;
};

export default ProjectPage;
