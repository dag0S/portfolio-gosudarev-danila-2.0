import type { FC } from "react";
import Image from "next/image";

import { Button, cn } from "@/src/shared/lib/shadcn";
import { Container, SectionWithAnimation } from "@/src/shared/ui";

interface Props {
  className?: string;
}

export const Promo: FC<Props> = ({ className }) => {
  return (
    <SectionWithAnimation
      className={cn("min-h-[calc(100vh-64px)] flex", className)}
    >
      <Container className="flex flex-col-reverse justify-center gap-8 md:gap-4 md:flex-row md:justify-between items-center">
        <div className="w-4/5 text-center md:w-1/2 md:text-left">
          <div className="text-2xl">Привет! 👋 Меня зовут</div>
          <h1 className="text-5xl font-bold text-primary mb-4">
            Данила Государев
          </h1>
          <h2 className="text-xl mb-4">
            Я <span className="text-primary font-bold">Fullstack</span>
            -разработчик, создаю современные и удобные веб-приложения на React,
            NextJS, NestJS, TypeScript и другие.
          </h2>
          <Button size="lg" className="font-bold">
            СВЯЗАТЬСЯ
          </Button>
        </div>
        <Image
          src="/hero-1.png"
          alt="Государев Данила"
          width={400}
          height={400}
        />
      </Container>
    </SectionWithAnimation>
  );
};
