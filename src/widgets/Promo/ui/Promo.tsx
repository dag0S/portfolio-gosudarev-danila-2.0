import type { FC } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

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
        />
      </Container>
    </section>
  );
};
