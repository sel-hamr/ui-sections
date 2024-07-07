"use client";
import { cn } from "@/lib/utils";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const DELAY_IN_MS = 3000;
const TRANSITION_DURATION_IN_SECS = 1;
export function FoldElements({
  items,
  delay = 0,
}: {
  items: ReactElement[];
  delay?: number;
}) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS + delay);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);
  const currentIndex = index % items.length;
  return (
    <div
      className="relative w-full h-full z-0 "
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-20deg)",
      }}
    >
      <AnimatePresence>
        <motion.div
          className="absolute left-1/2 top-1/2 w-[90%] h-[85%]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            y: "-50%",
            x: "-50%",
            backfaceVisibility: "hidden",
            zIndex: -index,
          }}
          key={index}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
        >
          {items[currentIndex]}
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/2 w-[90%] h-[85%]"
          style={{
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            y: "-50%",
            x: "-50%",
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
        >
          {items[currentIndex]}
        </motion.div>
        <hr className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-[2.5px] border-[#2e2e35]" />
      </AnimatePresence>
    </div>
  );
}

export function FoldElement({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid h-full w-full place-content-center rounded-lg  text-3xl font-semibold text-white",
        className
      )}
    >
      {children}
    </div>
  );
}
