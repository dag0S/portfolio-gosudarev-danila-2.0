import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, MoveRight, SquareArrowOutUpRight } from "lucide-react";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  cn,
} from "@/src/shared/lib/shadcn";
import { Container, Text, Title } from "@/src/shared/ui";
import { ROUTES } from "@/src/shared/const";

interface Props {
  className?: string;
}

export const MyProjects: FC<Props> = ({ className }) => {
  return (
    <section className={cn("flex items-center pt-32", className)}>
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
          <Card className="pt-0 overflow-hidden transition ease-in-out duration-300 hover:scale-101 md:hover:scale-105 hover:border-primary">
            <CardHeader className="px-0">
              <Link href={ROUTES.project("1")}>
                <Image
                  src="/project-1.jpg"
                  alt="project-1"
                  width={590}
                  height={302}
                  className="w-full"
                />
              </Link>
            </CardHeader>
            <CardContent>
              <Link
                href={ROUTES.project("1")}
                className="inline-block mb-2 transition ease-in-out hover:text-primary hover:underline"
              >
                <Title variant="h4">Аукцион для стримеров</Title>
              </Link>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline">NextJS</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Redux Toolkit</Badge>
                <Badge variant="outline">shadcn</Badge>
                <Badge variant="outline">Tailwind</Badge>
                <Badge variant="outline">Axios</Badge>
              </div>
              <Text variant="small">
                Этот сайт предназначен для взаимодействия между стримером и его
                аудиторией, позволяя им совместно принимать решения во время
                стрима. Будь то выбор фильма, сериала или игры для развлечения.
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
          <Card className="pt-0 overflow-hidden transition ease-in-out duration-300 hover:scale-101 md:hover:scale-105 hover:border-primary">
            <CardHeader className="px-0">
              <Link href={ROUTES.project("2")}>
                <Image
                  src="/project-1.jpg"
                  alt="project-1"
                  width={590}
                  height={302}
                  className="w-full"
                />
              </Link>
            </CardHeader>
            <CardContent>
              <Link
                href={ROUTES.project("2")}
                className="inline-block mb-2 transition ease-in-out hover:text-primary hover:underline"
              >
                <Title variant="h4">Аукцион для стримеров</Title>
              </Link>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline">NextJS</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Redux Toolkit</Badge>
                <Badge variant="outline">shadcn</Badge>
                <Badge variant="outline">Tailwind</Badge>
                <Badge variant="outline">Axios</Badge>
              </div>
              <Text variant="small">
                Этот сайт предназначен для взаимодействия между стримером и его
                аудиторией, позволяя им совместно принимать решения во время
                стрима. Будь то выбор фильма, сериала или игры для развлечения.
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
        </div>
      </Container>
    </section>
  );
};
