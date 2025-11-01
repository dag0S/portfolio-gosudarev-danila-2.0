import type { FC } from "react";
import type { Metadata } from "next";

import {
  AboutMe,
  FrequentlyAskedQuestions,
  MyProjects,
  Promo,
  TechStack,
} from "@/src/widgets/HomePageSections";
import { SITE_NAME } from "@/src/shared/const";

export const metadata: Metadata = {
  title: `Fullstack-разработчик | ${SITE_NAME}`,
};

const HomePage: FC = () => {
  return (
    <>
      <Promo />
      <AboutMe />
      <TechStack />
      <MyProjects />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default HomePage;
