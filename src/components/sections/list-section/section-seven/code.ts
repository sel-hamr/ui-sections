export const codeSeven = `
--- dependencies:
    npm:
        react-icons
        framer-motion
        react-icon-cloud
        tailwindcss

==> @/card <==
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CardType } from ".";

export const Card = ({
  id,
  url,
  cards,
  setList,
  setStatus,
}: {
  id: number;
  url: string;
  cards: CardType[];
  setList: React.Dispatch<React.SetStateAction<CardType[]>>;
  setStatus: React.Dispatch<React.SetStateAction<null | "like" | "unlike">>;
}) => {
  const isFront = id === cards[cards.length - 1].id;
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return {rotateRaw.get() + offset}deg;
  });
  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 150) {
      setList((prev) => prev.filter((card) => card.id !== id));
    }
    setStatus(null);
  };

  const handleDragStart = () => {
    if (x.get() > 0) {
      setStatus("like");
    } else {
      setStatus("unlike");
    }
  };

  return (
    <motion.img
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      src={url}
      key={id}
      style={{
        gridRow: 1,
        gridColumn: 1,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
        x,
        opacity,
        rotate,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
          x: id % 2 ? -55 : 50,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
          x: 0,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      className="h-96 w-72 origin-bottom relative rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing "
    />
  );
};


==> INDEX <==

"use client";
import { motion } from "framer-motion";
import { Card } from "./card";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type CardType = {
  id: number;
  url: string;
};

const cardData: CardType[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1724390684295-e1f66475a67a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1724266568802-763291ef4875?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1723591808777-20670e8ba6e0?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1723112366132-3915699490f9?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1723816736251-4e8236ca5b3d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const sectionSeven = () => {
  const [listCard, setList] = useState(cardData);
  const [status, setStatus] = useState<null | "like" | "unlike">(null);
  return (
    <motion.section
      className={cn(
        "grid place-content-center h-full",
        status === "unlike" &&
          "bg-gradient-to-r from-red-500 via-transparent to-transparent",
        status === "like" &&
          "bg-gradient-to-r from-transparent via-transparent to-green-500"
      )}
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.3,
      }}
    >
      {listCard.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          url={card.url}
          cards={listCard}
          setList={setList}
          setStatus={setStatus}
        />
      ))}
    </motion.section>
  );
};
`;
