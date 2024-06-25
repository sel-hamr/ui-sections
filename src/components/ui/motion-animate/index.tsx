"use client";
import { motion, TargetAndTransition } from "framer-motion";

type MotionAnimateProps = {
  children: React.ReactNode;

  variant?: {
    hidden: TargetAndTransition;
    visible: TargetAndTransition;
  };
};

export default function MotionAnimate({
  children,
  variant,
}: MotionAnimateProps) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className="relative z-20"
    >
      {children}
    </motion.div>
  );
}
