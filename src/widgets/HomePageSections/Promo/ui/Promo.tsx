import type { FC } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

import { Button, cn } from "@/src/shared/lib/shadcn";
import { Container, SectionWithAnimation } from "@/src/shared/ui";

interface Props {
  className?: string;
}

export const Promo: FC<Props> = ({ className }) => {
  return (
    <SectionWithAnimation className={cn("min-h-[calc(100vh-64px)] flex", className)}>
      <Container className="flex flex-col-reverse justify-center gap-8 md:gap-4 md:flex-row md:justify-between items-center">
        <div className="w-4/5 text-center md:w-1/2 md:text-left">
          <div className="text-2xl">Привет! 👋 Меня зовут</div>
          <h1 className="text-5xl font-bold text-primary mb-4">
            Данила Государев
          </h1>
          <h2 className="text-xl mb-4">
            Я frontend-разработчик, создаю современные и удобные веб-интерфейсы
            на React, Next.js и TypeScript.
          </h2>
          <Button size="lg" className="font-bold">
            <Phone /> СВЯЗАТЬСЯ
          </Button>
        </div>
        <Image
          src="/hero.png"
          alt="Государев Данила"
          width={400}
          height={400}
          className="w-4/5 sm:w-fit"
        />
      </Container>
    </SectionWithAnimation>
  );
};
