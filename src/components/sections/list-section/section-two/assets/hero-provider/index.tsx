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
