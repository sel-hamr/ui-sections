import { SpotlightButton } from "@/components/ui/Button";
import React from "react";
import Sonner from "./sonner";
import { SeparateAway } from "@/components/ui/separate-away";
import MotionAnimate from "@/components/ui/motion-animate";

const animateElement = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 260,
    },
  },
};

export function Intro() {
  return (
    <div className="flex flex-col gap-5  items-center">
      <Sonner />
      <SeparateAway
        upper_text="UI library for"
        lower_text="Design Engineers"
        duration={0.2}
        hidden_settings={{ opacity: 0 }}
        visible_settings={{ opacity: 1 }}
        className="max-w-4xl opacity-0  z-10 translate-y-4 text-center text-4xl font-black  md:text-7xl  tracking-tighter text-balance"
      />

      <MotionAnimate variant={animateElement}>
        <p className="mx-auto z-10  max-w-3xl text-center text-base leading-relaxed  md:text-xl md:leading-relaxed">
          Copy paste the most trending components and use them in your websites
          without having to worry about styling and animations.
        </p>
      </MotionAnimate>
      <MotionAnimate variant={animateElement}>
        <SpotlightButton title="See sections" className="w-80 h-14" />
      </MotionAnimate>
    </div>
  );
}
