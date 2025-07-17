import type { FC } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

import { Button, cn } from "@/src/shared/lib/shadcn";
import { Container, SectionWithAnimation, Text, Title } from "@/src/shared/ui";
import { ROUTES } from "@/src/shared/const";
import { fetchProjects } from "@/src/entities/Tag";
import { ProjectCard } from "@/src/entities/Project";

interface Props {
  className?: string;
}

export const MyProjects: FC<Props> = async ({ className }) => {
  const projects = (await fetchProjects({ searchBy: "" })).slice(0, 2);

  return (
    <SectionWithAnimation className={cn("flex items-center pt-32", className)}>
      <Container>
        <Title className="text-center mb-4">Мои проекты</Title>
        <Text variant="lead" className="text-center mb-6">
          Подборка моих проектов с открытым исходным кодом
        </Text>
        <div className="flex items-center justify-between gap-4 mb-6">
          <Title variant="h3">Мои проекты</Title>
          <Link href={ROUTES.projects}>
            <Button variant="secondary">
              Все проекты <MoveRight />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </Container>
    </SectionWithAnimation>
  );
};
