export const codeSix = `
--- dependencies:
    npm:
        react-icons
        framer-motion
        react-icon-cloud
        tailwindcss
        cube


==> @/assets/block-about.tsx <==

import React from "react";
import { Block } from "./block";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
type BlockAboutProps = {
  className?: string;
};

export const BlockAbout = ({ className }: BlockAboutProps) => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <Block className={cn(className, "flex justify-center items-center gap-1")}>
      {images.map((image, idx) => (
        <motion.div
          key={"images" + idx}
          style={{
            rotate: Math.random() * 20 - 10,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          whileTap={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
        >
          <Image
            src={image}
            alt="bali images"
            width="500"
            height="500"
            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
          />
        </motion.div>
      ))}
    </Block>
  );
};


==> @/assets/block-cube.tsx <==

import React, { useRef, useEffect } from "react";
import { Block } from "./block";
import createGlobe from "cobe";

export const BlockCube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <Block className="col-span-12 row-span-2 md:col-span-6  overflow-hidden flex justify-end">
      <canvas
        ref={canvasRef}
        style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      />
    </Block>
  );
};

==> INDEX/assets/Block-social-media.tsx <==

import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { Block } from "./block";

const socialMedia = [
  {
    icon: SiGithub,
    color: "bg-green-600",
  },
  {
    icon: SiTiktok,
    color: "bg-pink-500",
  },
  {
    icon: SiTwitter,
    color: "bg-blue-400",
  },
  {
    icon: SiYoutube,
    color: "bg-red-500",
  },
];

export const BlockSocialMedia = () => {
  return (
    <>
      {socialMedia.map((media, idx) => {
        const Icon = media.icon;
        return (
          <Block
            key={idx}
            whileHover={{
              rotate: "2.5deg",
              scale: 1.1,
            }}
            className={col-span-6 text-white grid place-content-center md:col-span-3 {media.color} }
          >
            <Icon className="size-9" />
          </Block>
        );
      })}
    </>
  );
};

 
==> INDEX/assest/block <==
import { cn } from "@/lib/utils";
import { MotionProps, motion } from "framer-motion";
type BlockProps = {
  className?: string;
} & MotionProps &
  React.HTMLAttributes<HTMLDivElement>;
export const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={cn(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 ",
        className
      )}
      {...rest}
    />
  );
};


==> INDEX <==

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
`;
