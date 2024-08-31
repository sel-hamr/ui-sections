"use client";

import { useState } from "react";
import { Card } from "./card";
import { LuArrowRightCircle, LuChevronLeftCircle } from "react-icons/lu";
import { Background } from "./background";

const cardData = [
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

export const SectionEight = () => {
  const [listCard, setList] = useState(cardData);
  const [activeCard, setActiveCard] = useState(4);

  const handleNext = () => {
    setActiveCard((prev) => prev + 1);

    setList((prev) => [
      ...prev,
      {
        id: listCard.length + 1,
        url: prev[activeCard - 4].url,
      },
    ]);
  };

  const handlePrev = () => {
    if (activeCard + 4 >= listCard.length) setActiveCard((prev) => prev - 1);
    else
      setList((prev) => [
        {
          id: listCard.length + 1,
          url: prev[4].url,
        },
        ...prev,
      ]);
  };

  return (
    <div
      className="w-full h-full items-center flex overflow-hidden relative"
      style={{
        perspective: "1000px",
      }}
    >
      <div className="flex mx-auto mt-auto gap-10 mb-5 z-10">
        <LuChevronLeftCircle
          className="cursor-pointer size-10"
          onClick={handlePrev}
        />
        <LuArrowRightCircle
          className="cursor-pointer size-10 "
          onClick={handleNext}
        />
      </div>
      {listCard.map((card, index) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            index={index}
            src={card.url}
            indexActive={activeCard}
          />
        );
      })}
      <Background src={listCard[activeCard].url} />
    </div>
  );
};
