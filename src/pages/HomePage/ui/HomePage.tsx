import type { FC } from "react";

import { Promo } from "@/src/widgets/Promo";
import { AboutMe } from "@/src/widgets/AboutMe";
import { TechStack } from "@/src/widgets/TechStack";
import { MyProjects } from "@/src/widgets/MyProjects";
import { FrequentlyAskedQuestions } from "@/src/widgets/FrequentlyAskedQuestions";

const HomePage: FC = async () => {
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
