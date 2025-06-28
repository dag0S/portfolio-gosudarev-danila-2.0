import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/src/shared/ui";

const socials = [
  {
    name: "GitHub",
    pathIcon: "/icons/socials/gh.svg",
    link: "https://github.com/dag0S",
  },
  {
    name: "Telegram",
    pathIcon: "/icons/socials/tg.svg",
    link: "https://t.me/DanilaGosudarev",
  },
  {
    name: "VKontakte",
    pathIcon: "/icons/socials/vk.svg",
    link: "https://vk.com/dag0s",
  },
];

export const Header: FC = () => {
  return (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
      <Container className="py-4 flex justify-between items-center gap-4">
        <Link href="/">
          <h1 className="font-bold text-2xl">ГОСУДАРЕВ ДАНИЛА</h1>
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
    </div>
  );
};
