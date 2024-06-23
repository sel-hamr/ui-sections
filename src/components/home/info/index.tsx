import {
  NextJsIcon,
  ReactJsIcon,
  TailwindIcon,
  FramerMotionIcon,
} from "@/components/assets/icons";
import React from "react";

export default function Info() {
  return (
    <div className="relative z-10">
      <div className="block sm:hidden absolute h-full w-20 bg-white dark:bg-black right-0 [mask-image:linear-gradient(to_left,white,transparent)] z-40"></div>
      <div className="flex  justify-start items-center mb-4 overflow-x-auto relative z-20 no-visible-scrollbar ">
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <NextJsIcon />
          </span>
          <span className="text-sm font-semibold text-black flex-shrink-0">
            Next.js
          </span>
        </div>
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <ReactJsIcon />
          </span>
          <span className="text-sm font-semibold text-black flex-shrink-0">
            React
          </span>
        </div>
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <TailwindIcon />
          </span>
          <span className="text-sm font-semibold text-black flex-shrink-0">
            TailwindCSS
          </span>
        </div>
        <div className="flex items-center space-x-2 mr-4">
          <span>
            <FramerMotionIcon />
          </span>
          <span className="text-sm font-semibold text-black flex-shrink-0">
            Framer Motion
          </span>
        </div>
      </div>
    </div>
  );
}
