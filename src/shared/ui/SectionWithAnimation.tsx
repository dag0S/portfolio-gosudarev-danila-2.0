import type { FC, ReactNode } from "react";
import * as motion from "motion/react-client";

import { cn } from "../lib/shadcn";

interface Props {
  className?: string;
  children: ReactNode;
}

export const SectionWithAnimation: FC<Props> = ({ children, className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ amount: 0.3, once: true }}
      className={cn("", className)}
    >
      {children}
    </motion.section>
  );
};
