import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_dark300 flex min-h-[48px] grow items-center gap-4 rounded-xl px-4">
        <Image
          src="assets/icons/search.svg"
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search globally"
          value=""
          className="paragraph-regular no-focus placeholder background-light800_dark300 border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
