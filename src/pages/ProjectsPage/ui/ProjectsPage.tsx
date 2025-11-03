import { Suspense, type FC } from "react";
import type { Metadata } from "next";

import { Container } from "@/src/shared/ui";
import { ProjectList } from "@/src/entities/Project";
import { ProjectsHead } from "@/src/widgets/ProjectsHead";
import { PROJECTS } from "@/src/shared/const";

export const metadata: Metadata = {
  title: "Проекты",
};

const ProjectsPage: FC<{
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}> = async ({ searchParams }) => {
  const searchBy = ((await searchParams)?.searchBy as string) || "";

  const filteredProjects = searchBy
    ? PROJECTS.filter(
        (project) =>
          project.title.toLowerCase().includes(searchBy.toLowerCase().trim()) ||
          project.description
            .toLowerCase()
            .includes(searchBy.toLowerCase().trim()) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchBy.toLowerCase().trim())
          )
      )
    : PROJECTS;

  return (
    <Container className="text-center pt-6 md:pt-12">
      <ProjectsHead className="mb-6" />
      <Suspense fallback={<div className="h-[700px] w-[200px] bg-amber-400" />}>
        <ProjectList projects={filteredProjects} className="mb-6" />
      </Suspense>
    </Container>
  );
};

export default ProjectsPage;
