"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  src: string;
};

export const LinkPreview = ({
  children,
  url,
  className,
  height = 200,
  quality = 50,
  width = 200,
  src,
}: LinkPreviewProps) => {
  const [isOpen, setActive] = useState(false);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);
  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };
  return (
    <HoverCard.Root
      openDelay={50}
      closeDelay={150}
      onOpenChange={(open) => {
        setActive(open);
      }}
    >
      <HoverCard.Trigger
        asChild
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActive(false)}
        className={cn("text-white font-semibold cursor-pointer", className)}
      >
        {children}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)] z-50  w-52 h-32 rounded-lg p-4"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{
                  opacity: 0.6,
                  y: 20,
                  scale: 0.6,
                }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}
              >
                <Link
                  href={url}
                  className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                  style={{ fontSize: 0 }}
                >
                  <Image
                    src={src}
                    width={width}
                    height={height}
                    quality={quality}
                    className="rounded-lg"
                    alt="preview image"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
