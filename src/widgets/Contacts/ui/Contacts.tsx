import type { FC } from "react";

import { Container, SectionWithAnimation, Text, Title } from "@/src/shared/ui";
import { SOCIALS } from "@/src/shared/const/socials";

export const Contacts: FC = () => {
  return (
    <SectionWithAnimation>
      <Container className="pt-6 md:pt-12">
        <Title className="text-center mb-4">Контакты</Title>
        <Text>Буду рад сотрудничеству и новым проектам!</Text>
        <ul className="mt-6">
          <li>
            Telegram —{" "}
            <a
              href={SOCIALS.telegram}
              target="_blank"
              className="text-primary hover:opacity-75 hover:underline"
            >
              @DanilaGosudarev
            </a>
          </li>
          <li>
            WhatsApp —{" "}
            <a
              href={SOCIALS.whatsapp}
              target="_blank"
              className="text-primary hover:opacity-75 hover:underline"
            >
              {SOCIALS.phone}
            </a>
          </li>
          <li>
            VK —{" "}
            <a
              href={SOCIALS.vk}
              target="_blank"
              className="text-primary hover:opacity-75 hover:underline"
            >
              Даня Государев
            </a>
          </li>
          <li>
            Email —{" "}
            <a
              href={`mailto:${SOCIALS.email}`}
              target="_blank"
              className="text-primary hover:opacity-75 hover:underline"
            >
              {SOCIALS.email}
            </a>
          </li>
          <li>
            Телефон —{" "}
            <a
              href="tel:+79933620105"
              target="_blank"
              className="text-primary hover:opacity-75 hover:underline"
            >
              {SOCIALS.phone}
            </a>
          </li>
        </ul>
        <Text>
          Если у вас есть идея, предложение или вы хотите обсудить совместную
          работу — свяжитесь со мной любым удобным способом
        </Text>
        <Text>
          Открыт к интересным задачам, коллаборациям и новым возможностям. Не
          стесняйтесь писать — обсудим детали и найдем лучшее решение вместе!
        </Text>
      </Container>
    </SectionWithAnimation>
  );
};
