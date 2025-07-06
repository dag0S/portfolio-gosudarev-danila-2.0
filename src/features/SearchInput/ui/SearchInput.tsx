import type { FC } from "react";
import { Search, X } from "lucide-react";

import { Button, cn, Input } from "@/src/shared/lib/shadcn";

interface Props {
  className?: string;
  placeholder?: string;
}

export const SearchInput: FC<Props> = ({ className, placeholder }) => {
  return (
    <div className={cn("w-[500px] mx-auto relative", className)}>
      <Button variant="ghost" size="icon" className="absolute left-0">
        <Search />
      </Button>
      <Input placeholder={placeholder} className="px-10" />
      <Button variant="ghost" size="icon" className="absolute right-0 top-0">
        <X />
      </Button>
    </div>
  );
};
