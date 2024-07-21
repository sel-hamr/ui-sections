export const codeTwo = `

--- dependencies:
    npm:
        react-icons
        framer-motion
        tailwindcss

====> INDEX/assets/useHeroAnimation <====

import {
  useMotionTemplate,
  useMotionValue,
  animate,
  stagger,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = (e.target as HTMLDivElement)?.getBoundingClientRect();
  const xClient = e.clientX;
  const yClient = e.clientY;
  const width = rect.width;
  const height = rect.height;

  const mouseX = xClient - rect.left;
  const mouseY = yClient - rect.top;

  const XPct = mouseX / width - 0.5;
  const YPct = mouseY / height - 0.5;
  return { XPct, YPct };
};

function useHeroAnimation() {
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate\`1px solid \${color}\`;
  const boxShadow = useMotionTemplate\`0px 4px 24px \${color}\`;
  const backgroundImage = useMotionTemplate\`radial-gradient(125% 125% at 50% 0%, #020617 60%, \${color})\`;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const XMouse = useTransform(xSpring, [-0.5, 0.5], [-100, 100]);
  const YMouse = useTransform(ySpring, [-0.5, 0.5], [-100, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { XPct, YPct } = handleMouse(e);

    x.set(XPct);
    y.set(YPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  useEffect(() => {
    const animation = async () => {
      animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      });
    };
    animation();
  }, []);
  return {
    color,
    border,
    boxShadow,
    backgroundImage,
    cbOnMouseMove: {
      handleMouseMove,
      positionX: XMouse,
      positionY: YMouse,
      handleMouseLeave,
    },
  };
}

export default useHeroAnimation;

====> INDEX/assets/bg-rings <====

import { motion, MotionValue } from "framer-motion";

function BgRings({
  positionX,
  positionY,
}: {
  positionX: MotionValue<any>;
  positionY: MotionValue<any>;
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.ul
      className="absolute inset-0"
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      <motion.li
        className="absolute size-1 top-1/3 right-1/3  bg-white rounded-full rings opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-1/2 left-[15%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-1/4 right-[15%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-2/3 left-2/4  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-[65%] right-[30%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-0.5 top-[25%] left-[25%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-3 top-[15%] left-1/2  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1.5 top-3/4 left-1/3  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-[25%] left-[35%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[62%] left-[25%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />

      <motion.li
        className="absolute size-1 top-[15%] left-[60%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[10%] left-1/2  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-40 left-1/3  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1.5 top-[25%] left-[5%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[62%] left-[15%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-3 top-[62%] right-[15%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-1 top-[65%] right-[10%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[70%] right-[25%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
      <motion.li
        className="absolute size-2 top-[40%] right-[5%]  bg-white rounded-full  opacity-0"
        style={{ x: positionX, y: positionY }}
        variants={item}
      />
    </motion.ul>
  );
}

export default BgRings;



====> INDEX/assets/hero-provider <====

"use client";

import { motion } from "framer-motion";
import BgRings from "../bg-rings";
import useHeroAnimation from "../useHeroAnimation/index.";
import Sonner from "@/components/ui/sonner";

type HeroProviderProps = {
  children: React.ReactNode;
};

function HeroProvider({ children }: HeroProviderProps) {
  const { color, border, boxShadow, backgroundImage, cbOnMouseMove } =
    useHeroAnimation();
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gray-950 px-4 py-24 gap-5"
      onMouseMove={cbOnMouseMove.handleMouseMove}
      onMouseLeave={cbOnMouseMove.handleMouseLeave}
    >
      <Sonner className="bg-gray-600/40 py-1.5 px-4">
        <span className=" font-semibold text-sm text-white">
          Lorem ipsum dolor sit
        </span>
      </Sonner>
      <motion.p style={{ color }} className="text-4xl font-medium">
        Where does it come from?
      </motion.p>
      <BgRings
        positionX={cbOnMouseMove.positionX}
        positionY={cbOnMouseMove.positionY}
      />
      {children}
      <motion.button
        id="chat-button"
        style={{
          border,
          boxShadow,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-6 py-2 text-gray-50 transition-colors mx-auto "
      >
        contact us
      </motion.button>
    </motion.section>
  );
}

export default HeroProvider;

====> INDEX.TSX <====

import React from "react";
import HeroProvider from "./assets/hero-provider";

export const SectionTwo = () => {
  return (
    <HeroProvider>
      <p
        className="text-lg md:text-sm text-center text-gray-300 w-[70%] max-w-80 md:max-w-none"
        id="description"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </HeroProvider>
  );
};
`;
