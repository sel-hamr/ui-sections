"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default () => {
  return (
    <div className="min-h-svh w-full bg-slate-700 flex">
      <div className="flex-1"></div>
      <div className="flex shrink-0 relative flex-1 items-center">
        {listCart?.map((cart, key) => (
          <Cart key={key} {...cart} index={key} cartLength={listCart.length} />
        ))}
      </div>
    </div>
  );
};

const Cart = ({
  title,
  subtitle,
  date,
  index,
  cartLength,
}: {
  title: string;
  subtitle: string;
  date: string;
  index: number;
  cartLength: number;
}) => {
  const [x, setX] = React.useState(false);
  return (
    <motion.div
      className="w-80 absolute overflow-hidden  rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDrag={(event, info) => {
        if (info.point.x < 400) setX(true);
        else setX(false);
      }}
      onDragStart={(event, info) =>
        console.log(info.point.x, info.point.y, "start dragging")
      }
      dragSnapToOrigin={x}
      style={{ x: index * 100, rotate: index * 5, zIndex: cartLength - index }}
    >
      <div className="w-full h-44 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
        <Image
          src={
            "https://res.cloudinary.com/djyh0q01q/image/upload/v1720526109/cld-sample-5.jpg"
          }
          alt="thumbnail"
          fill
          className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
        />
      </div>
      <div className="px-4 pb-4">
        <h2 className="font-bold my-3 text-lg text-zinc-700">{title}</h2>
        <h2 className="font-normal my-3 text-sm text-zinc-500">{subtitle}</h2>
        <div className="flex flex-row justify-between items-center mt-6">
          <span className="text-sm text-gray-500">{date}</span>
          <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
            Read More
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const listCart = [
  {
    title: "Amazing Tailwindcss Grid Layout Examples",
    subtitle:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    date: "28th March, 2023",
  },
  {
    title: "Amazing Tailwindcss Grid Layout Examples",
    subtitle:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    date: "28th March, 2023",
  },
  {
    title: "Amazing Tailwindcss Grid Layout Examples",
    subtitle:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    date: "28th March, 2023",
  },
  {
    title: "Amazing Tailwindcss Grid Layout Examples",
    subtitle:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    date: "28th March, 2023",
  },
];
