import type { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "../lib/shadcn";

const titleVariants = cva(
  "scroll-m-20 tracking-tight text-balance",
  {
    variants: {
      variant: {
        h1: "text-4xl font-extrabold",
        h2: "text-3xl font-semibold first:mt-0",
        h3: "text-2xl font-semibold",
        h4: "text-xl font-semibold",
      },
    },
    defaultVariants: {
      variant: "h2",
    },
  }
);

interface Props {
  className?: string;
  children: ReactNode;
}

export const Title: FC<Props & VariantProps<typeof titleVariants>> = ({
  children,
  className,
  variant = "h2",
}) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={cn(titleVariants({ variant, className }))}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(titleVariants({ variant, className }))}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(titleVariants({ variant, className }))}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={cn(titleVariants({ variant, className }))}>
          {children}
        </h4>
      );
  }
};
