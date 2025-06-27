import { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "../lib/shadcn";

interface Props {
  className?: string;
  children: ReactNode;
}

const containerVariants = cva("w-full px-2 mx-auto", {
  variants: {
    variant: {
      xl: "xl:max-w-[1024px]",
      md: "md:max-w-[768px]",
      sm: "sm:max-w-[500px]",
    },
  },
  defaultVariants: {
    variant: "xl",
  },
});

export const Container: FC<Props & VariantProps<typeof containerVariants>> = ({
  className,
  children,
  variant,
}) => {
  return (
    <div className={cn(containerVariants({ variant, className }))}>
      {children}
    </div>
  );
};
