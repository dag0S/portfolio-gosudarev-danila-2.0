import type { FC } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

import { TagList } from "@/src/entities/Tag";
import { ProjectNavigation } from "@/src/features/ProjectNavigation";
import { Container, Text, Title } from "@/src/shared/ui";
import { LinksToProjects } from "@/src/features/LinksToProjects";
import { IProject } from "@/src/entities/Project";

interface Props {
  project: IProject;
}

export const ProjectDetails: FC<Props> = ({ project }) => {
  const date = new Date(project.createdAt);
  const formatter = new Intl.DateTimeFormat("ru");

  return (
    <Container variant="md" className="mb-6 pt-2">
      <ProjectNavigation />
      <Image
        src={`http://localhost:4321/${project.imageURL}`}
        width={300}
        height={150}
        alt={project.title}
        className="w-full mb-4 rounded"
      />
      <div className="flex flex-col justify-between gap-2 sm:flex-row">
        <div>
          <Title className="mb-4">{project.title}</Title>
          <TagList className="mb-4" tags={project.tags} />
          <div className="flex items-center gap-6 mb-2 sm:mb-0">
            <Text variant="muted" className="flex items-center gap-2">
              <Eye /> {project.views}
            </Text>
            <Text variant="muted">{formatter.format(date)}</Text>
          </div>
        </div>
        <LinksToProjects
          linkLiveDemo={project.linkLiveDemo}
          linkFrontendCode={project.linkFrontendCode}
        />
      </div>
      <Text>{project.description}</Text>
    </Container>
  );
};
