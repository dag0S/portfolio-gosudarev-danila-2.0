import type { FC } from "react";

import { Badge, cn } from "@/src/shared/lib/shadcn";
import { ITag } from "../model/types";

interface Props {
  className?: string;
  tags: ITag[];
}

export const TagList: FC<Props> = ({ tags, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.length > 0 &&
        tags.map((tag) => (
          <Badge variant="outline" key={tag.id}>
            {tag.name}
          </Badge>
        ))}
    </div>
  );
};
