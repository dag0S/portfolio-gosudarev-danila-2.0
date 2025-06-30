import type { FC } from "react";

import { Button } from "@/src/shared/lib/shadcn";
import { Text, Title } from "@/src/shared/ui";
import { Promo } from "@/src/widgets/Promo";
import { AboutMe } from "@/src/widgets/AboutMe";
import { TechStack } from "@/src/widgets/TechStack";
import { MyProjects } from "@/src/widgets/MyProjects";
import { FrequentlyAskedQuestions } from "@/src/widgets/FrequentlyAskedQuestions";

const HomePage: FC = () => {
  return (
    <div>
      <Promo />
      <AboutMe />
      <TechStack />
      <MyProjects />
      <FrequentlyAskedQuestions />

      Hello World! <br /> <br />
      <Button>Button</Button> <br />
      <Title variant="h1">Gosudarev Danila</Title> <br />
      <Title variant="h2">Gosudarev Danila</Title> <br />
      <Title variant="h3">Gosudarev Danila</Title> <br />
      <Title variant="h4">Gosudarev Danila</Title> <br />
      <Title>Gosudarev Danila</Title> <br />
      <br />
      <Text variant="p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <br />
      <Text variant="blockquote">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <br />
      <Text variant="code">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <br />
      <Text variant="large">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <br />
      <Text variant="lead">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <br />
      <Text variant="muted">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <br />
      <Text variant="small">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <br />
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <br />
    </div>
  );
};

export default HomePage;
