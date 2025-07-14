import type { FC } from "react";

import { Container, Text, Title } from "@/src/shared/ui";
import { Separator } from "@/src/shared/lib/shadcn";
import Link from "next/link";
import { ROUTES } from "@/src/shared/const";

const NotFoundPage: FC = () => {
  return (
    <Container className="pt-16">
      <div className="flex flex-col justify-center items-center gap-4 text-center max-w-[600px] mx-auto">
        <Title className="text-8xl">404</Title>
        <Title>Страница не найдена ¯\_(ツ)_/¯</Title>
        <Separator />
        <Text variant="lead">
          Такой страницы не существует. Вы можете воспользоваться меню или
          перейти{" "}
          <Link
            href={ROUTES.main}
            className="text-primary transition ease-in-out hover:underline hover:opacity-80"
          >
            на главную
          </Link>
          .
        </Text>
      </div>
    </Container>
  );
};

export default NotFoundPage;
