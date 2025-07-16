import { Suspense, type FC } from "react";

import { Container } from "@/src/shared/ui";
import { ProjectList } from "@/src/entities/Project";
import { ProjectsHead } from "@/src/widgets/ProjectsHead";
import { fetchProjects } from "@/src/entities/Tag";

const ProjectsPage: FC<{
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}> = async ({ searchParams }) => {
  const searchBy = ((await searchParams)?.searchBy as string) || "";

  const projects = await fetchProjects({ searchBy });

  return (
    <Container className="text-center pt-12">
      <ProjectsHead className="mb-6" />
      <Suspense fallback={<div className="h-[700px] w-[200px] bg-amber-400" />}>
        <ProjectList projects={projects} className="mb-6" />
      </Suspense>
    </Container>
  );
};

export default ProjectsPage;
