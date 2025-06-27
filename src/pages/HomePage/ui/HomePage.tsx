import type { FC } from "react";

import { Button } from "@/src/shared/lib/shadcn";
import { Container, Text, Title } from "@/src/shared/ui";

const HomePage: FC = () => {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

export default HomePage;
