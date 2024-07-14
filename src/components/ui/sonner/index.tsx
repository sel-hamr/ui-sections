"use client";
import { cn } from "@/lib/utils";
import { motion, MotionStyle } from "framer-motion";

type SonnerProps = {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle | undefined;
};

export default function Sonner({ children, style, className }: SonnerProps) {
  return (
    <motion.div
      className={cn("rounded-full cursor-pointer relative", className)}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
