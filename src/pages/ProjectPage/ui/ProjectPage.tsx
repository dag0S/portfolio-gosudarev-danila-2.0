import { Badge, Button } from "@/src/shared/lib/shadcn";
import { Container, Text, Title } from "@/src/shared/ui";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  SquareArrowOutUpRight,
} from "lucide-react";
import Image from "next/image";
import type { FC } from "react";

const ProjectPage: FC = () => {
  return (
    <Container variant="md" className="mb-6 pt-2">
      <div className="flex gap-2 justify-between items-center mb-2">
        <Button size="sm" variant="ghost">
          <ArrowLeft /> назад
        </Button>
        <Button size="sm" variant="ghost">
          вперед <ArrowRight />
        </Button>
      </div>
      <Image
        src="/project-1.jpg"
        width={300}
        height={150}
        alt="project"
        className="w-full mb-4 rounded"
      />
      <div className="flex">
        <div>
          <Title className="mb-2">Аукцион для стримеров</Title>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="outline">NextJS</Badge>
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Redux Toolkit</Badge>
            <Badge variant="outline">shadcn</Badge>
            <Badge variant="outline">Tailwind</Badge>
            <Badge variant="outline">Axios</Badge>
          </div>
          <Text variant="muted">10.02.2025</Text>
          <Text>
            Этот сайт предназначен для взаимодействия между стримером и его
            аудиторией, позволяя им совместно принимать решения во время стрима.
            Будь то выбор фильма, сериала или игры для развлечения.
          </Text>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          <a
            href="https://auction-for-streamers.netlify.app/ru"
            target="_blank"
          >
            <Button variant="outline" size="lg" className="w-full">
              Demo <SquareArrowOutUpRight />
            </Button>
          </a>
          <a
            href="https://github.com/dag0S/auction-for-streamers"
            target="_blank"
          >
            <Button variant="outline" size="lg" className="w-full">
              frontend <Github />
            </Button>
          </a>
        </div>
      </div>
      {/* NextJS
React
TypeScript
Redux Toolkit
shadcn
Tailwind
Axios
Этот сайт предназначен для взаимодействия между стримером и его аудиторией, позволяя им совместно принимать решения во время стрима. Будь то выбор фильма, сериала или игры для развлечения. */}
    </Container>
  );
};

export default ProjectPage;
