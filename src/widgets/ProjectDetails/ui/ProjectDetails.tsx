import type { FC } from "react";

import { TagList } from "@/src/entities/Tag";
import { ProjectNavigation } from "@/src/features/ProjectNavigation";
import { Container, Text, Title } from "@/src/shared/ui";
import { LinksToProjects } from "@/src/features/LinksToProjects";
import { IProject } from "@/src/entities/Project";
import { Slider } from "./Slider/Slider";

interface Props {
  project: IProject;
}

export const ProjectDetails: FC<Props> = ({ project }) => {
  return (
    <Container variant="md" className="mb-6 pt-2">
      <ProjectNavigation />
      <Slider project={project} />
      <div className="flex flex-col justify-between gap-2 sm:flex-row mb-6">
        <div>
          <Title className="mb-4">{project.title}</Title>
          <TagList tags={project.tags} />
        </div>
        <LinksToProjects
          linkLiveDemo={project.linkLiveDemo}
          linkFrontendCode={project.linkFrontendCode}
          linkBackendCode={project.linkBackendCode}
        />
      </div>
      <Title variant="h3">Описание</Title>
      <Text className="mb-6">{project.description}</Text>
      <Title variant="h3">Функционал</Title>
      <ul className="pl-7 mt-6 leading-7">
        {project.functional.map((item, index) => (
          <li className="list-disc" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
};
