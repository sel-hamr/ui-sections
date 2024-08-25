"use client";
import { motion } from "framer-motion";

import { BlockAbout } from "./assets/block-about";
import { BlockCube } from "./assets/block-cube";
import { BlockSocialMedia } from "./assets/block-social-media";

export const SectionSix = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.2,
      }}
      className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12  grid-rows-4 gap-4 h-full py-5"
    >
      <BlockCube />
      <BlockSocialMedia />
      <BlockAbout className="col-span-12 row-span-2  " />
    </motion.div>
  );
};
