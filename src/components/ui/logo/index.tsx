import { LogoIcon } from "@/components/assets/icons";
import React from "react";

export default function Logo() {
  return (
    <div className="flex gap-1 items-center mr-6">
      <LogoIcon />
      <p className="text-black font-semibold ">UI HUB</p>
    </div>
  );
}
