import { LogoIcon } from "@/components/assets/icons";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link className="flex gap-1 items-center mr-6" href="/">
      <LogoIcon className="w-9 md:w-10" />
      <p className="text-black font-semibold hidden md:flex text-xl">UI HUB</p>
    </Link>
  );
}
