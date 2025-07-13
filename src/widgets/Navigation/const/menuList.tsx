import { Home } from "lucide-react";

import { ROUTES } from "@/src/shared/const";

export const menuList = [
  {
    link: ROUTES.main,
    content: <Home />,
  },
  {
    link: ROUTES.about_me,
    content: "Обо мне",
  },
  {
    link: ROUTES.projects,
    content: "Проекты",
  },
  {
    link: ROUTES.blog,
    content: "Блог",
  },
];
