import type { FC } from "react";

import { ProjectDetails } from "@/src/widgets/ProjectDetails";
import { PROJECTS } from "@/src/shared/const";

interface Props {
  params: Promise<{ projectId: string }>;
}

const ProjectPage: FC<Props> = async ({ params }) => {
  const { projectId } = await params;

  return <ProjectDetails project={PROJECTS[+projectId - 1]} />;
};

export default ProjectPage;
