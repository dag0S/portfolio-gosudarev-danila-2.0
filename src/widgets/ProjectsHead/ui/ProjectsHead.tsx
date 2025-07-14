import type { FC } from "react";

import { Text, Title } from "@/src/shared/ui";
import { cn } from "@/src/shared/lib/shadcn";
import { SearchInput } from "@/src/features/SearchInput";

interface Props {
  className?: string;
}

export const ProjectsHead: FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title className="mb-4">Проекты</Title>
      <Text variant="lead" className="mb-4">
        Это большинство проектов, над которыми я работал с тех пор, как начал
        программировать, некоторые из них являются личными, внештатными, для
        работы, практики или для других ситуаций. Если вы хотите увидеть
        абсолютно все мои проекты, перейдите на мою страницу на{" "}
        <a
          href="https://github.com/dag0S"
          target="_blank"
          className="text-primary transition ease-in-out hover:underline hover:opacity-80"
        >
          GitHub
        </a>
        .
      </Text>
      <SearchInput placeholder="Поиск проектов (Технологиям, названию, описанию и т.д.)" />
    </div>
  );
};
