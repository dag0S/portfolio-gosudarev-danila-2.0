import type { FC } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/src/shared/lib/shadcn";

export const ProjectNavigation: FC = () => {
  return (
    <div className="flex gap-2 justify-between items-center mb-2">
      <Button size="sm" variant="ghost">
        <ArrowLeft /> назад
      </Button>
      <Button size="sm" variant="ghost">
        вперед <ArrowRight />
      </Button>
    </div>
  );
};
