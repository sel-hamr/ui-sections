"use client";
import React from "react";
import { motion } from "framer-motion";
import { CardHeader } from "./card-header";
import CardContent from "./card-Content";
import { CardTitle } from "./card-subtitle";
import { CardSubtitle } from "./card-title";
import CardAction from "./card-action";

function calculateResult(cartLength: number, id: number, index: number) {
  return (id + (cartLength - index)) % cartLength;
}

export const Cart = ({
  children,
  index,
  cartLength,
  id,
  setIndex,
}: {
  children: React.ReactNode;
  index: number;
  id: number;
  cartLength: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const distance = React.useRef(0);

  const currentIndex = calculateResult(cartLength, id, index);

  return (
    <motion.div
      className="w-72 absolute overflow-hidden shadow-xl rounded-2xl transition duration-200 group bg-white hover:shadow-2xl border border-zinc-100 cursor-grab"
      drag={id === index}
      layout
      dragSnapToOrigin={true}
      onDragStart={(_, info) => {
        distance.current = info.point.x;
      }}
      onDragEnd={(_, info) => {
        if (info.point.x + 400 < distance.current) {
          setIndex((pv) => (pv + 1) % cartLength);
        }
      }}
      style={{
        rotate: currentIndex * 6,
        zIndex: cartLength - currentIndex,
      }}
    >
      {children}
    </motion.div>
  );
};

Cart.Header = CardHeader;
Cart.Content = CardContent;
Cart.Title = CardTitle;
Cart.subTitle = CardSubtitle;
Cart.action = CardAction;
