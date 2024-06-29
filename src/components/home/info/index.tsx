"use client";
import {
  NextJsIcon,
  ReactJsIcon,
  TailwindIcon,
  FramerMotionIcon,
} from "@/components/assets/icons";
import { motion } from "framer-motion";

const listLang = [
  { name: "Next.js", icon: <NextJsIcon /> },
  { name: "React", icon: <ReactJsIcon /> },
  { name: "TailwindCSS", icon: <TailwindIcon /> },
  { name: "Framer Motion", icon: <FramerMotionIcon /> },
];

export default function Info() {
  const animateList = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 },
    }),
  };
  const animate = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 },
    },
  };
  return (
    <>
      <div className="relative z-10 hidden md:flex">
        <div className="flex justify-start items-center overflow-x-auto relative z-20 overflow-hidden">
          {listLang.map((lang, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 mr-4"
              variants={animateList}
              custom={index}
              animate={"visible"}
              initial={"hidden"}
            >
              {lang.icon}
              <span className="text-sm font-semibold text-black flex-shrink-0">
                {lang.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="space-y-2 z-10"
        variants={animate}
        animate={"visible"}
        initial={"hidden"}
      >
        <h1 className="max-w-4xl  text-center text-2xl  2xl:text-3xl  font-black leading-[1.15]  md:leading-[1.15] tracking-tighter text-balance">
          What People Are Saying
        </h1>
        <p className=" max-w-lg text-center text-sm ">
          Don&apos;t just take our word for it. Here&apos;s what{" "}
          <b>real people</b> are saying about UI HUB on Twitter.
        </p>
      </motion.div>
    </>
  );
}
