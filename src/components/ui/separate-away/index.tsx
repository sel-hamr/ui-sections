"use client";

import { cn } from "@/lib/utils";
import { motion, TargetAndTransition } from "framer-motion";

interface SeparateAwayProps {
  upper_text: string;
  lower_text: string;
  duration?: number;
  className?: string;
  hidden_settings?: TargetAndTransition;
  visible_settings?: TargetAndTransition;
}

export function SeparateAway({
  upper_text,
  lower_text,
  duration = 1.5,
  visible_settings = {},
  className,
  hidden_settings = {},
}: SeparateAwayProps) {
  const separate = {
    hidden: { ...hidden_settings, y: 0 },
    visible: (custom: number) => ({
      ...visible_settings,
      x: custom * 10,
      transition: {
        duration: duration,
        type: "spring",
        stiffness: 260,
      },
    }),
  };

  return (
    <div>
      <motion.h1
        custom={-1}
        variants={separate}
        initial="hidden"
        animate="visible"
        className={cn(className)}
      >
        {upper_text}
      </motion.h1>
      <motion.h1
        custom={1}
        variants={separate}
        initial="hidden"
        animate="visible"
        className={cn(className)}
      >
        {lower_text}
      </motion.h1>
    </div>
  );
}
