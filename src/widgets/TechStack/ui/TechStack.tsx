import Image from "next/image";
import type { FC } from "react";

import {
  Card,
  CardContent,
  cn,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/shared/lib/shadcn";
import { Container, Text, Title } from "@/src/shared/ui";

const techs = [
  {
    name: "NextJS",
    pathIcon: "/icons/tech-stack/nextjs2.svg",
  },
  {
    name: "React",
    pathIcon: "/icons/tech-stack/react.svg",
  },
  {
    name: "TypeScript",
    pathIcon: "/icons/tech-stack/typescript.svg",
  },
  {
    name: "JavaScript",
    pathIcon: "/icons/tech-stack/js.svg",
  },
  {
    name: "HTML",
    pathIcon: "/icons/tech-stack/html5.svg",
  },
  {
    name: "CSS",
    pathIcon: "/icons/tech-stack/css3.svg",
  },
  {
    name: "Figma",
    pathIcon: "/icons/tech-stack/figma.svg",
  },
  {
    name: "PhotoShop",
    pathIcon: "/icons/tech-stack/ps.svg",
  },
  {
    name: "NodeJS",
    pathIcon: "/icons/tech-stack/nodejs.svg",
  },
  {
    name: "ExpressJS",
    pathIcon: "/icons/tech-stack/expressjs.svg",
  },
  {
    name: "Docker",
    pathIcon: "/icons/tech-stack/docker.svg",
  },
  {
    name: "Vite",
    pathIcon: "/icons/tech-stack/vitejs.svg",
  },
  {
    name: "WebPack",
    pathIcon: "/icons/tech-stack/webpack.svg",
  },
  {
    name: "Gulp",
    pathIcon: "/icons/tech-stack/gulp.svg",
  },
  {
    name: "Zod",
    pathIcon: "/icons/tech-stack/zod.svg",
  },
  {
    name: "Ant Design",
    pathIcon: "/icons/tech-stack/antd.svg",
  },
  {
    name: "Tailwind",
    pathIcon: "/icons/tech-stack/tailwindcss.svg",
  },
  {
    name: "SASS",
    pathIcon: "/icons/tech-stack/sass.svg",
  },
  {
    name: "Redux Toolkit",
    pathIcon: "/icons/tech-stack/redux.svg",
  },
  {
    name: "React Router dom",
    pathIcon: "/icons/tech-stack/reactrouter.svg",
  },
  {
    name: "React Query",
    pathIcon: "/icons/tech-stack/reactquery.svg",
  },
  {
    name: "Jest",
    pathIcon: "/icons/tech-stack/jest.svg",
  },
  {
    name: "StoryBook",
    pathIcon: "/icons/tech-stack/storybook.svg",
  },
  {
    name: "ESLint",
    pathIcon: "/icons/tech-stack/eslint.svg",
  },
  {
    name: "Prettier",
    pathIcon: "/icons/tech-stack/prettier.svg",
  },
  {
    name: "PostgreSQL",
    pathIcon: "/icons/tech-stack/postgresql.svg",
  },
  {
    name: "Git",
    pathIcon: "/icons/tech-stack/git.svg",
  },
  {
    name: "GitHub",
    pathIcon: "/icons/tech-stack/github.svg",
  },
];

interface Props {
  className?: string;
}

export const TechStack: FC<Props> = ({ className }) => {
  return (
    <div className={cn("min-h-screen flex items-center", className)}>
      <Container>
        <Title className="text-center mb-4">Стек технологий</Title>
        <Text variant="lead" className="text-center mb-6">
          Это инструменты и технологии, с которыми я работаю как
          frontend-разработчик, способный охватывать полный цикл разработки. Я
          использую современные подходы и проверенные библиотеки для создания
          быстрых, масштабируемых и удобных веб-приложений — от адаптивного
          интерфейса до логики на серверной части.
        </Text>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="flex flex-wrap gap-4 items-center">
            {techs.map((tech) => (
              <HoverCard key={tech.name}>
                <HoverCardTrigger>
                  <div className="bg-sky-950 overflow-hidden w-14 h-14 flex justify-center items-center rounded transition ease-in-out duration-300 hover:scale-115">
                    <Image
                      src={tech.pathIcon}
                      alt={tech.name}
                      width={40}
                      height={40}
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  {tech.name}
                </HoverCardContent>
              </HoverCard>
            ))}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
