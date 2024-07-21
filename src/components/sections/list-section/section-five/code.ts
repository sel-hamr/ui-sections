export const codeFive = `
--- dependencies:
    npm:
        react-icons
        framer-motion
        tailwindcss
}
====> INDEX/assets/cards/item.tsx <====
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

====> INDEX/assets/cards/index.tsx <====
"use client";
import React, { useRef } from "react";
import { Card } from "./item";

const listCards = [
  {
    src: "https://images.unsplash.com/photo-1595139280770-95b6de5f0635?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "6deg",
    top: "15%",
    left: "15%",
    className: "w-36 md:w-48",
  },
  {
    src: "https://images.unsplash.com/photo-1607335614785-e1436e859ebf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "18deg",
    top: "10%",
    left: "50%",
    className: "w-40 md:w-40",
  },
  {
    src: "https://images.unsplash.com/photo-1585261941984-0145bb423997?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "-15deg",
    top: "40%",
    left: "65%",
    className: "w-24 md:w-40",
  },
  {
    src: "https://images.unsplash.com/photo-1617799890023-c7b03d079b1f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "-3deg",
    top: "35%",
    left: "34%",
    className: "w-24 md:w-48",
  },
];

export const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="absolute inset-0 z-20" ref={containerRef}>
      {listCards.map((card, index) => (
        <Card
          key={index}
          containerRef={containerRef}
          src={card.src}
          alt={card.alt}
          rotate={card.rotate}
          top={card.top}
          left={card.left}
          className={card.className}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};


==> Index.tsx <==
import React from "react";
import { Cards } from "./assets/cards";

export const SectionThree = () => {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden relative">
      <h2 className=" z-0 text-[16vh] font-bold text-neutral-800 md:text-[150px] ">
        SECTION<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </div>
  );
};

`;
