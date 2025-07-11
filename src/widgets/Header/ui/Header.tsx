import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/src/shared/ui";
import { socials } from "../const/socials";
import { cn } from "@/src/shared/lib/shadcn";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 bg-background/80 backdrop-blur-sm",
        className
      )}
    >
      <Container className="py-4 flex justify-between items-center gap-4">
        <Link href="/">
          <h1 className="font-bold text-lg sm:text-2xl">ДАНИЛА ГОСУДАРЕВ</h1>
        </Link>
        <div>
          <ul className="flex gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  className="transition delay-100 duration-300 ease-in-out hover:opacity-70"
                >
                  <Image
                    src={social.pathIcon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};
