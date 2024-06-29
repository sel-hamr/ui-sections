import { LogoIcon } from "@/components/assets/icons";
import React from "react";

export default function Logo() {
  return (
    <div className="flex gap-1 items-center mr-6">
      <LogoIcon className="w-9 md:w-5" />
      <p className="text-black font-semibold hidden md:flex">UI HUB</p>
    </div>
  );
}
