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
    <div className="flex flex-col md:gap-6 gap-8  items-center pt-6 md:pt-0">
      <Sonner />
      <SeparateAway
        upper_text="UI library for"
        lower_text="Design Engineers"
        duration={0.2}
        hidden_settings={{ opacity: 0 }}
        visible_settings={{ opacity: 1 }}
        className="max-w-4xl opacity-0 w-full  z-10 translate-y-4 text-center text-4xl font-black  md:text-5xl 2xl:text-7xl  xl:text-6xl  tracking-tighter text-balance"
      />

      <MotionAnimate variant={animateElement}>
        <p className="mx-auto z-[1]  max-w-3xl text-center text-base leading-relaxed   md:leading-relaxed   ">
          Copy paste the most trending components and use them in your websites
          without having to worry about styling and animations.
        </p>
      </MotionAnimate>
      <MotionAnimate variant={animateElement}>
        <SpotlightButton
          title="See sections"
          className="w-80 h-10  2xl:h-14  xl:h-11"
        />
      </MotionAnimate>
    </div>
  );
}
