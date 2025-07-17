import type { FC } from "react";

import {
  AboutMe,
  FrequentlyAskedQuestions,
  MyProjects,
  Promo,
  TechStack,
} from "@/src/widgets/HomePageSections";

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
