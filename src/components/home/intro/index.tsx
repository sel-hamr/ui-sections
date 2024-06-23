import { SpotlightButton } from "@/components/ui/Button";
import React from "react";
import Sonner from "./sonner";

export function Intro() {
  return (
    <div className="flex flex-col gap-5  items-center">
      <Sonner />

      <h1 className="max-w-4xl z-10 text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15] tracking-tighter text-balance">
        UI library for Design Engineers
      </h1>
      <p className="mx-auto z-10  max-w-3xl text-center text-base leading-relaxed  md:text-xl md:leading-relaxed">
        Copy paste the most trending components and use them in your websites
        without having to worry about styling and animations.
      </p>
      <SpotlightButton title="Get Started" className="w-80 h-14" />
    </div>
  );
}
