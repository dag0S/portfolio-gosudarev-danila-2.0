import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, SquareArrowOutUpRight } from "lucide-react";

import { ROUTES } from "@/src/shared/const";
import { Text, Title } from "@/src/shared/ui";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@/src/shared/lib/shadcn";
import { IProject } from "../../model/types";

interface Props {
  project: IProject;
}

export const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <Card className="pt-0 text-left overflow-hidden transition ease-in-out duration-300 hover:scale-101 md:hover:scale-105 hover:border-primary">
      <CardHeader className="px-0">
        <Link href={ROUTES.project("1")}>
          <Image
            src={`http://localhost:4321/${project.imageURL}`}
            alt={project.title}
            width={590}
            height={302}
            className="w-full"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <Link
          href={ROUTES.project(project.id)}
          className="inline-block mb-2 transition ease-in-out hover:text-primary hover:underline"
        >
          <Title variant="h4">{project.title}</Title>
        </Link>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.length > 0 &&
            project.tags.map((tag) => (
              <Badge variant="outline" key={tag.id}>
                {tag.name}
              </Badge>
            ))}
        </div>
        <Text variant="small" className="text-ellipsis line-clamp-2">
          {project.description}
        </Text>
        <div className="pt-2 flex gap-2">
          <a
            href="https://auction-for-streamers.netlify.app/ru"
            target="_blank"
          >
            <Button variant="ghost" size="sm">
              Demo <SquareArrowOutUpRight />
            </Button>
          </a>
          <a
            href="https://github.com/dag0S/auction-for-streamers"
            target="_blank"
          >
            <Button variant="ghost" size="sm">
              frontend <Github />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
