import type { FC } from "react";

import { Container, Text, Title } from "@/src/shared/ui";
import { cn } from "@/src/shared/lib/shadcn";

interface Props {
  className?: string;
}

export const AboutMe: FC<Props> = ({ className }) => {
  return (
    <div className={cn("h-screen flex items-center", className)}>
      <Container>
        <Title className="text-center mb-6">Обо мне</Title>
        <Text variant="lead" className="text-center mb-6">
          Вот немного обо мне и о моём пути как разработчика.
        </Text>
        <Text>
          Привет! Меня зовут <span className="font-bold">Государев Данила</span>
          , я frontend-разработчик с трёхлетним опытом. Моё увлечение
          программированием началось ещё в школе и со временем превратилось в
          профессию. Сейчас я учусь на 4 курсе в РосНОУ по направлению
          «Информатика и вычислительная техника», профиль — Кибербезопасность.
        </Text>
        <Text>
          Мой путь начался с классической вёрстки, после чего я постепенно
          освоил JavaScript и перешёл к современным фреймворкам. Сегодня я
          разрабатываю веб-приложения с использованием React, Next.js,
          TypeScript, Redux Toolkit, React Router и Zustand. Также имею опыт
          бэкенд-разработки на Node.js и Express, умею работать с базами данных.
          Проходил обучение на курсах, а также создавал собственные pet-проекты.
        </Text>
        <Text>
          Если вы хотите реализовать интересную идею или вам нужна помощь с
          веб-проектом — буду рад поработать вместе. Давайте создадим что-то
          потрясающее!
        </Text>
      </Container>
    </div>
  );
};
