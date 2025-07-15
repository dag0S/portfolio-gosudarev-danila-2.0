import type { FC } from "react";
import { MonitorSmartphone, Server, SquareArrowOutUpRight } from "lucide-react";

import { Button, cn } from "@/src/shared/lib/shadcn";
import { Text } from "@/src/shared/ui";

interface Props {
  className?: string;
  linkLiveDemo?: string;
  linkFrontendCode?: string;
  linkBackendCode?: string;
}

export const LinksToProjects: FC<Props> = ({
  className,
  linkLiveDemo,
  linkFrontendCode,
  linkBackendCode,
}) => {
  if (!linkLiveDemo && !linkFrontendCode && !linkBackendCode) {
    return <Text variant="large">Проект в разработке</Text>;
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {linkLiveDemo && (
        <a href={linkLiveDemo} target="_blank">
          <Button variant="outline" size="lg" className="w-full">
            Live demo <SquareArrowOutUpRight />
          </Button>
        </a>
      )}
      {linkFrontendCode && (
        <a href={linkFrontendCode} target="_blank">
          <Button variant="outline" size="lg" className="w-full">
            Frontend code <MonitorSmartphone />
          </Button>
        </a>
      )}
      {linkBackendCode && (
        <a href={linkBackendCode} target="_blank">
          <Button variant="outline" size="lg" className="w-full">
            Backend code <Server />
          </Button>
        </a>
      )}
    </div>
  );
};
