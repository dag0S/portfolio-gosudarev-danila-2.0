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
import { techs } from "../const/techs";

interface Props {
  className?: string;
}

export const TechStack: FC<Props> = ({ className }) => {
  return (
    <section className={cn("flex items-center pt-32", className)}>
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
    </section>
  );
};
