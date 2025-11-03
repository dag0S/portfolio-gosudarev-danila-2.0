import type { Metadata } from "next";
import type { FC } from "react";

import { Contacts } from "@/src/widgets/Contacts";

export const metadata: Metadata = {
  title: "Контакты",
};

const ContactsPage: FC = () => {
  return <Contacts />;
};

export default ContactsPage;
