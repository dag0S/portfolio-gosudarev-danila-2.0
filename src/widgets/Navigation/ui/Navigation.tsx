"use client";

import type { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuList } from "../const/menuList";
import { ThemeSwitcher } from "@/src/features/ThemeSwitcher";
import { cn } from "@/src/shared/lib/shadcn";

export const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-4 left-1/2 -translate-x-1/2 z-15 bg-background/80 backdrop-blur-sm px-5 py-3 border rounded-4xl w-fit mb-4">
      <ul className="flex items-center gap-4">
        {menuList.map((item) => (
          <li
            key={item.link}
            className={cn("py-2 transition ease-in-out hover:opacity-80", {
              "border-b border-foreground": pathname === item.link,
            })}
          >
            <Link href={item.link}>{item.content}</Link>
          </li>
        ))}
        <li className="transition ease-in-out hover:opacity-80 flex">
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};
