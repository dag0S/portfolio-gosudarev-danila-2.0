import type { FC } from "react";

import { Container, SectionWithAnimation, Text, Title } from "@/src/shared/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  cn,
} from "@/src/shared/lib/shadcn";
import { accordionValue } from "../const/accordionValue";

interface Props {
  className?: string;
}

export const FrequentlyAskedQuestions: FC<Props> = ({ className }) => {
  return (
    <SectionWithAnimation
      className={cn("flex items-center pt-32 pb-14", className)}
    >
      <Container>
        <Title className="text-center mb-4">Часто задаваемые вопросы</Title>
        <Text variant="lead" className="text-center mb-6">
          Найдите ответы на распространенные вопросы о моей работе, навыках и о
          том, как установить контакт или сотрудничать со мной.
        </Text>
        <Container variant="md" className="px-0 md:px-4">
          <Accordion type="single" collapsible>
            {accordionValue.map((value) => (
              <AccordionItem key={value.id} value={value.id.toString()}>
                <AccordionTrigger>{value.question}</AccordionTrigger>
                <AccordionContent>{value.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Container>
    </SectionWithAnimation>
  );
};
