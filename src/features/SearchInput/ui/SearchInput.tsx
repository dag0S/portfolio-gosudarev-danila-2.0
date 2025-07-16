"use client";

import { ChangeEvent, useEffect, useState, type FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

import { Button, cn, Input } from "@/src/shared/lib/shadcn";
import { useDebounceCallback } from "@/src/shared/hooks";

interface Props {
  className?: string;
  placeholder?: string;
}

export const SearchInput: FC<Props> = ({ className, placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSearchBy = searchParams?.get("searchBy") || "";

  useEffect(() => {
    setSearchValue(currentSearchBy);
  }, []);

  const handleSearch = useDebounceCallback((value: string) => {
    const params = new URLSearchParams(searchParams?.toString());

    if (value) {
      params.set("searchBy", value);
    } else {
      params.delete("searchBy");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 1000);

  const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    handleSearch(value);
  };

  const handleClear = () => {
    setSearchValue("");
    const params = new URLSearchParams(searchParams?.toString());
    params.delete("searchBy");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={cn("max-w-[500px] mx-auto relative", className)}>
      <Button variant="ghost" size="icon" className="absolute left-0">
        <Search />
      </Button>
      <Input
        placeholder={placeholder}
        onChange={handleSetSearch}
        value={searchValue || ""}
        className="px-10"
      />
      {searchValue && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClear}
          className="absolute right-0 top-0"
        >
          <X />
        </Button>
      )}
    </div>
  );
};
