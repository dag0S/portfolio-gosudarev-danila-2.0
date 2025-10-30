import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import * as motion from "motion/react-client";

import { ROUTES } from "@/src/shared/const";
import { Text, Title } from "@/src/shared/ui";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@/src/shared/lib/shadcn";
import type { IProject } from "../../model/types";

interface Props {
  project: IProject;
}

export const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ amount: 0.3, once: true }}
    >
      <Card className="pt-0 text-left overflow-hidden transition ease-in-out duration-300 hover:scale-101 md:hover:scale-105">
        <CardHeader className="px-0">
          <Link href={ROUTES.project(project.id)}>
            <Image
              src={project.imagesURL[0]}
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
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.length > 0 &&
              project.tags.slice(0, 4).map((tag, index) => (
                <Badge variant="outline" key={index}>
                  {tag}
                </Badge>
              ))}
            <Badge variant="outline">И другие</Badge>
          </div>
          <Text
            variant="small"
            className="text-muted-foreground text-ellipsis line-clamp-2 mb-4"
          >
            {project.description}
          </Text>
          <div className="flex justify-center gap-2">
            {project.linkLiveDemo && (
              <a href={project.linkLiveDemo} target="_blank">
                <Button variant="ghost" size="sm">
                  Demo <SquareArrowOutUpRight />
                </Button>
              </a>
            )}
            {project.linkFrontendCode && (
              <a href={project.linkFrontendCode} target="_blank">
                <Button variant="ghost" size="sm">
                  frontend <Github />
                </Button>
              </a>
            )}
            {project.linkBackendCode && (
              <a href={project.linkBackendCode} target="_blank">
                <Button variant="ghost" size="sm">
                  backend <Github />
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
