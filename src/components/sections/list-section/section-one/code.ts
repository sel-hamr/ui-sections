export const codeOne = `
--- dependencies:
    npm:
        react-icons
        framer-motion
        react-icon-cloud
        tailwindcss

==> @/components/ui/fold-element <==
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

==> INDEX/assets/block-one.tsx <==

import CloudIcon from "@/components/ui/CloudIcon";
import { SiIcloud } from "react-icons/si";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function Intro() {
  return (
    <div className=" grid grid-cols-10 h-full bg-white rounded-xl px-10">
      <div className="col-span-7 flex gap-5 flex-col w-[90%] mt-6">
        <div className="flex items-center relative w-4/5 justify-center">
          <p className="text-gray-400 font-semibold">XLS</p>
          <div className=" border border-dashed border-gray-400 mx-6 w-full"></div>
          <SiIcloud
            fontSize="20px"
            className="absolute left-0 text-gray-400 animate-cloud-section-one"
          />
          <p className="text-gray-400 font-semibold">RNW</p>
        </div>
        <h1 className="text-7xl font-semibold line-clamp-2">
          What is Lorem Ipsum?
        </h1>
        <p className="text-sm leading-6 line-clamp-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
        </p>
      </div>
      <div className="col-span-3 flex items-center">
        <CloudIcon iconSlugs={slugs} />
      </div>
    </div>
  );
}
 
==> @/components/ui/CloudIcon <==

"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },

  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon: SimpleIcon) => {
  const bgHex = "#080510";
  const fallbackHex = "#ffffff";
  const minContrastRatio = 2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export default function CloudIcon({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);
  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}

==> INDEX <==

import {
  SiReact,
  SiActivision,
  SiNodedotjs,
  SiEa,
  SiAmd,
  SiAbusedotch,
  SiCisco,
  SiAmazonprime,
  SiAngular,
  SiAppletv,
  SiDotnet,
} from "react-icons/si";
import { LuArrowRightCircle } from "react-icons/lu";
import { FoldElement, FoldElements } from "@/components/ui/fold-element";
import { Intro } from "./assets/block-one";

export function SectionOne() {
  return (
    <section className="w-full h-full gap-5 grid grid-cols-7 px-5 py-2">
      <div className="h-[370px]  col-span-7 rounded-xl">
        <Intro />
      </div>
      <div className="h-[95px] col-span-5 grid grid-cols-3 rounded-md">
        <div className="h-full col-span-1">
          <FoldElements
            items={[
              <FoldElement key={1} className="bg-[#2e2e35]">
                <SiActivision fontSize="200px" fill="white" />
              </FoldElement>,
              <FoldElement key={2} className="bg-[#2e2e35]">
                <SiAmd fontSize="150px" fill="white" />
              </FoldElement>,
              <FoldElement key={3} className="bg-[#2e2e35]">
                <SiAbusedotch fontSize="150px" fill="white" />
              </FoldElement>,
              <FoldElement key={4} className="bg-[#2e2e35]">
                <SiCisco fontSize="100px" fill="white" />
              </FoldElement>,
              <FoldElement key={5} className="bg-[#2e2e35]">
                <SiAmazonprime fontSize="200px" fill="white" />
              </FoldElement>,
            ]}
          />
        </div>
        <div className="h-full col-span-1">
          <FoldElements
            delay={500}
            items={[
              <FoldElement key={1} className="bg-[#2e2e35]">
                <SiAmazonprime fontSize="200px" fill="white" />
              </FoldElement>,
              <FoldElement key={2} className="bg-[#2e2e35]">
                <SiAppletv fontSize="90px" fill="white" />
              </FoldElement>,
              <FoldElement key={3} className="bg-[#2e2e35]">
                <SiEa fontSize="90px" fill="white" />
              </FoldElement>,
            ]}
          />
        </div>
        <div className="h-full col-span-1">
          <FoldElements
            delay={1000}
            items={[
              <FoldElement key={1} className="bg-[#2e2e35]">
                <SiReact fontSize="70px" fill="white" />
              </FoldElement>,
              <FoldElement key={2} className="bg-[#2e2e35]">
                <SiDotnet fontSize="70px" fill="white" />
              </FoldElement>,
              <FoldElement key={3} className="bg-[#2e2e35]">
                <SiNodedotjs fontSize="70px" fill="white" />
              </FoldElement>,
              <FoldElement key={4} className="bg-[#2e2e35]">
                <SiAngular fontSize="70px" fill="white" />
              </FoldElement>,
            ]}
          />
        </div>
      </div>
      <div className="h-full col-span-2 flex items-center">
        <button className=" text-black flex items-center gap-3 justify-center text-2xl font-semibold px-5 py-2 rounded-md w-full h-full bg-white">
          Contact
          <LuArrowRightCircle fontSize="40px" />
        </button>
      </div>
    </section>
  );
}`;
