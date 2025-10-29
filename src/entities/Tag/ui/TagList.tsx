import type { FC } from "react";

import { Badge, cn } from "@/src/shared/lib/shadcn";

interface Props {
  className?: string;
  tags: string[];
}

export const TagList: FC<Props> = ({ tags, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.length > 0 &&
        tags.map((tag, index) => (
          <Badge variant="outline" key={index}>
            {tag}
          </Badge>
        ))}
    </div>
  );
};
