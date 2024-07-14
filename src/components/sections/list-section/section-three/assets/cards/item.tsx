import React, { MutableRefObject, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface CardProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
  delay?: number;
}

export const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
  delay,
}: CardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };
  return (
    <motion.img
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      onMouseDown={updateZIndex}
      initial={{ opacity: 0, rotate: 0 }}
      whileInView={{ opacity: 1, rotate }}
      transition={{ duration: 0.3, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.6}
      className={cn(
        "absolute drag-elements rounded-sm shadow-lg cursor-pointer object-cover",
        className
      )}
    />
  );
};
