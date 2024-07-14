"use client";
import React, { useState } from "react";
import { DEFAULT_BOARD_DATA, DEFAULT_COLUMN_DATA } from "./assets/constants";
import { Columns } from "./assets/columns";
import { BorderBeam } from "@/components/ui/border-beam";

export const SectionFour = () => {
  const [cards, setCards] = useState(DEFAULT_BOARD_DATA);
  const [columns, setColumns] = useState(DEFAULT_COLUMN_DATA);
  return (
    <div className="flex gap-3 overflow-scroll p-5 w-auto h-full overflow-y-hidden overflow-x-auto">
      <Columns columns={columns} cards={cards} setCards={setCards} />
    </div>
  );
};
