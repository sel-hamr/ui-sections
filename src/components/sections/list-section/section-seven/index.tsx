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

export const SectionSeven = () => {
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
