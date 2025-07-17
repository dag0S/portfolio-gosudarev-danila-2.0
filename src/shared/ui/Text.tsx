import type { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "../lib/shadcn";

const textVariants = cva("", {
  variants: {
    variant: {
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-md md:text-xl text-muted-foreground ",
      large: "text-lg font-semibold",
      small: "text-sm leading-none font-medium",
      muted: "text-muted-foreground text-sm",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

interface Props {
  className?: string;
  children: ReactNode;
}

export const Text: FC<Props & VariantProps<typeof textVariants>> = ({
  children,
  className,
  variant = "p",
}) => {
  if (variant === "p" || variant === "lead" || variant === "muted")
    return (
      <p className={cn(textVariants({ variant, className }))}>{children}</p>
    );

  if (variant === "blockquote")
    return (
      <blockquote className={cn(textVariants({ variant, className }))}>
        {children}
      </blockquote>
    );

  if (variant === "code")
    return (
      <code className={cn(textVariants({ variant, className }))}>
        {children}
      </code>
    );

  if (variant === "large")
    return (
      <div className={cn(textVariants({ variant, className }))}>{children}</div>
    );

  if (variant === "small")
    return (
      <small className={cn(textVariants({ variant, className }))}>
        {children}
      </small>
    );
};
