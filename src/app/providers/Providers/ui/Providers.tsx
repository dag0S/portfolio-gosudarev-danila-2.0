import type { FC, ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "../../ThemeProvider";

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <NextTopLoader showSpinner={false} />
      {children}
    </ThemeProvider>
  );
};
