"use client";
import React, { useState } from "react";
import { Cart } from "./assets/card";
import { AnimatePresence } from "framer-motion";
import { LinkPreview } from "@/components/ui/linkPreview";
import { SiFramer, SiReact, SiTailwindcss, SiVercel } from "react-icons/si";

export const SectionFive = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full w-full flex  justify-center overflow-hidden relative">
      <div className="flex-1 justify-center flex p-9 flex-col gap-4">
        <p className="text-5xl font-bold text-sky-500 max-w-[550px] leading-tight	mb-5">
          Make your websites look 10x better
        </p>
        <p className="text-zinc-100	text-2xl ">
          <LinkPreview
            src="https://res.cloudinary.com/djyh0q01q/image/upload/v1721572955/plus-tailwind_dfugkz.jpg"
            url="https://tailwindcss.com/"
          >
            <span>Tailwind CSS</span>
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            src="https://res.cloudinary.com/djyh0q01q/image/upload/v1721572956/70574400-9e6a-11e9-8708-22d4bf4c3322_hc68pi.png"
            url="https://www.framer.com/motion/"
          >
            <span>Tailwind CSS</span>
          </LinkPreview>{" "}
          are a great way to build modern websites.
        </p>
      </div>
      <div className="flex shrink-0 relative w-96 items-center ">
        <AnimatePresence>
          {listCart?.map((cart, key) => (
            <Cart
              key={key}
              index={index}
              cartLength={listCart.length}
              setIndex={setIndex}
              id={cart.id}
            >
              <Cart.Header
                icon={<cart.icon fontSize={100} className="text-white" />}
                color={cart.color}
              />
              <Cart.Content>
                <Cart.Title title={cart.title} />
                <Cart.subTitle subtitle={cart.subtitle} />
              </Cart.Content>
              <Cart.action>
                <span className="text-sm   text-gray-500">{cart.date}</span>
                <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                  Read More
                </div>
              </Cart.action>
            </Cart>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const listCart = [
  {
    id: 0,
    title: "The library for web and native user interfaces",
    subtitle:
      "React lets you build user interfaces out of individual pieces called components. Create your own React components",
    date: "ReactJs",
    icon: SiReact,
    color: "bg-sky-500",
  },
  {
    id: 1,
    title: "The production-ready motion library for React",
    subtitle:
      "Complete documentation of the Framer Motion animation library. A production-ready motion library for React.",
    date: "Framer Motion",
    icon: SiFramer,
    color: "bg-sky-500",
  },
  {
    id: 2,
    title: "Rapidly build modern websites without ever leaving your HTML.",
    subtitle:
      "Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap",
    date: "Tailwindcss",
    icon: SiTailwindcss,
    color: "bg-sky-500",
  },
  {
    id: 3,
    title: "Next.js by Vercel - The React Framework",
    subtitle:
      "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications",
    date: "nextjs",
    icon: SiVercel,
    color: "bg-sky-500",
  },
];
