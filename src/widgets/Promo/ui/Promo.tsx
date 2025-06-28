import type { FC } from "react";
import Image from "next/image";

import { Button, cn } from "@/src/shared/lib/shadcn";
import { Container } from "@/src/shared/ui";

interface Props {
  className?: string;
}

export const Promo: FC<Props> = ({ className }) => {
  return (
    <section className={cn("h-[calc(100vh-64px)] flex", className)}>
      <Container className="flex gap-4 justify-between items-center">
        <div className="w-1/2">
          <div className="text-2xl">Привер! Меня зовут</div>
          <h1 className="text-5xl font-bold text-primary mb-4">
            Государев Данила
          </h1>
          <h2 className="text-xl mb-4">
            Я frontend-разработчик, создаю современные и удобные веб-интерфейсы
            на React, Next.js и TypeScript.
          </h2>
          <Button>Связаться</Button>
        </div>
        <Image
          src="/hero-1.jpg"
          alt="Государев Данила"
          width={387}
          height={387}
          className="rounded-2xl rotate-9 shadow-accent shadow-2xl"
        />
      </Container>
    </section>
  );
};
