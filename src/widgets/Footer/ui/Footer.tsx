import type { FC } from "react";

import { Container } from "@/src/shared/ui";
import { cn } from "@/src/shared/lib/shadcn";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("", className)}>
      <Container className="border-t py-4">
        <div className="text-center">Copyright © {year} Данила Государев</div>
      </Container>
    </footer>
  );
};
