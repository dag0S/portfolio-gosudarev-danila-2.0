import type { FC } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetails } from "@/src/widgets/ProjectDetails";
import { PROJECTS } from "@/src/shared/const";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{
    projectId: string;
  }>;
}): Promise<Metadata> => {
  const { projectId } = await params;
  const project = PROJECTS.find((project) => project.id === +projectId);

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [
        {
          url: project.imagesURL[0] || "",
          alt: project.title,
        },
      ],
    },
  };
};

interface Props {
  params: Promise<{ projectId: string }>;
}

const ProjectPage: FC<Props> = async ({ params }) => {
  const { projectId } = await params;

  const project = PROJECTS.find((project) => project.id === +projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;
