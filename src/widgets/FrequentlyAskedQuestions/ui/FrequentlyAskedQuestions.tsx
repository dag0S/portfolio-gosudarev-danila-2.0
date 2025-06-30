import type { FC } from "react";

import { Container, Text, Title } from "@/src/shared/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  cn,
} from "@/src/shared/lib/shadcn";

const accordionValue = [
  {
    id: 1,
    question: "Кто вы?",
    answer:
      "Найдите ответы на распространенные вопросы о моей работе, навыках и о том, как установить контакт или сотрудничать со мной.",
  },
  {
    id: 2,
    question: "Какие технологии вы используете в работе?",
    answer:
      "Я работаю с современным стеком для frontend-разработки: React,Next.js, TypeScript, Redux Toolkit, Zustand, React Router и другие. Также знаком с backend-технологиями — Node.js, Express ибазами данных. Использую Git, GitHub и придерживаюсь лучших практик в написании кода и организации проектов.",
  },
  {
    id: 3,
    question: "Можно ли вас нанять для проекта?",
    answer:
      "Да, я открыт к интересным предложениям. Если вам нужен frontend-разработчик или fullstack-специалист для проекта — буду рад обсудить детали. Просто свяжитесь со мной удобным способом, указанным в контактах.",
  },
  {
    id: 4,
    question: "Как можно с вами связаться?",
    answer:
      "Вы можете написать мне на электронную почту или через форму обратной связи на сайте. Также можно найти меня в Telegram или на GitHub, ссылки доступны в разделе контактов.",
  },
  {
    id: 5,
    question: "Вы работаете над проектами с открытым исходным кодом?",
    answer:
      "Да, я периодически выкладываю pet-проекты и эксперименты в открытый доступ. С моими репозиториями можно ознакомиться на GitHub — возможно, вы найдёте там что-то интересное!",
  },
  {
    id: 6,
    question: "Вы предлагаете услуги фрилансера?",
    answer:
      "Да, я работаю как фрилансер. Готов подключиться к разработке, помочь с интерфейсом или реализовать проект «под ключ». Напишите мне по почте или через форму на сайте — и мы обсудим задачи.",
  },
  {
    id: 7,
    question: "Я пытался связаться с вами, но не получил ответа. Что делать?",
    answer:
      "Извините, если я не ответил сразу — иногда сообщения могут потеряться или попасть в спам. Пожалуйста, повторно напишите мне на почту или через другой канал связи. Я обязательно вам отвечу!",
  },
];

interface Props {
  className?: string;
}

export const FrequentlyAskedQuestions: FC<Props> = ({ className }) => {
  return (
    <div className={cn("min-h-screen flex items-center", className)}>
      <Container>
        <Title className="text-center mb-4">Часто задаваемые вопросы</Title>
        <Text variant="lead" className="text-center mb-6">
          Найдите ответы на распространенные вопросы о моей работе, навыках и о
          том, как установить контакт или сотрудничать со мной.
        </Text>
        <Container variant="md">
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
    </div>
  );
};
