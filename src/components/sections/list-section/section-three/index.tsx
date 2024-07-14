import React from "react";
import { Cards } from "./assets/cards";

export const SectionThree = () => {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden relative">
      <h2 className=" z-0 text-[16vh] font-bold text-neutral-800 md:text-[150px] ">
        SECTION<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </div>
  );
};
