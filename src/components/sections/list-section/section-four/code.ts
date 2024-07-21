export const codeFour = `
--- dependencies:
    npm:
        react-icons
        framer-motion
        tailwindcss
}
====> INDEX/assets/addCard

import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { CardType } from "../columns";
import { LuPlus } from "react-icons/lu";

type AddCardProps = {
  column: string;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

function AddCard({ column, setCards }: AddCardProps) {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };
  if (adding)
    return (
      <motion.form onSubmit={handleSubmit} layout>
        <textarea
          onChange={(e) => setText(e.target.value)}
          autoFocus
          placeholder="Add new task..."
          className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
        />
        <div className="mt-1.5 flex items-center justify-end gap-1.5">
          <button
            onClick={() => setAdding(false)}
            className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
          >
            Close
          </button>
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded bg-[#1D7AFC] px-3 py-1.5 text-xs text-black transition-colors hover:bg-neutral-300"
          >
            <span>Add</span>
            <LuPlus />
          </button>
        </div>
      </motion.form>
    );
  return (
    <motion.button
      layout
      onClick={() => setAdding(true)}
      className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
    >
      add a task
    </motion.button>
  );
}

export default AddCard;


====> INDEX/assets/card

import { motion } from "framer-motion";
import { CardType } from "../columns";
import DropIndicator from "../drop-indicator";

export const Card = ({ column, id, title }: CardType) => {
  const handleDragStart = (e: DragEvent, card: CardType) => {
    if (e.dataTransfer) e.dataTransfer.setData("cardId", card.id);
  };
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        data-id={id}
        onDragStart={(e: DragEvent) =>
          handleDragStart(e, { title, id, column })
        }
        draggable="true"
        className="cursor-grab rounded border border-neutral-700 bg-[#22272B] p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};


====> INDEX/assets/columns/item.tsx <====

import React, { useState } from "react";
import { motion } from "framer-motion";
import { clearHighlights, highlightIndicator } from "../utilis";
type ColumnProps = {
  title: string;
  headingColor: string;
  column: string;
  length: number;
  children?: React.ReactNode;
  handleDrag: (e: React.DragEvent<HTMLDivElement>) => void;
};

export const Column = ({
  title,
  headingColor,
  column,
  children,
  length,
  handleDrag,
}: ColumnProps) => {
  const [active, setActive] = useState(false);
  const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e, column);
    setActive(true);
  };

  const handleOnDragLeave = () => {
    setActive(false);
    clearHighlights(column);
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    clearHighlights(column);
    setActive(false);
    handleDrag(e);
  };
  return (
    <motion.div
      className={\`w-64 shrink-0 transition-colors px-2 py-3 rounded-lg  \${
        active ? "bg-[#282E33]" : "bg-[#161A1D]"
      }\`}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
      onDragLeave={handleOnDragLeave}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3
          className={'font-medium '}
          style={{
            color: headingColor,
          }}
        >
          {title}
        </h3>
        <span className="rounded text-sm text-neutral-400">{length}</span>
      </div>
      <div className={'h-full w-full '}>{children}</div>
    </motion.div>
  );
};


====> INDEX/assets/columns/index.tsx <====

import { Dispatch } from "react";
import { Column } from "./item";
import { Card } from "../card";
import { moveCard } from "../utilis";
import DropIndicator from "../drop-indicator";
import AddCard from "../addCard";

export type CardType = {
  title: string;
  id: string;
  column: string;
};

export type ColumnType = {
  id: string;
  title: string;
  headingColor: string;
  column: string;
  columnIndex: number;
};
type ColumnCardsProps = {
  columns: ColumnType[];
  cards: CardType[];
  setCards: Dispatch<React.SetStateAction<CardType[]>>;
};

export function Columns({ columns, cards, setCards }: ColumnCardsProps) {
  return (
    <>
      {columns.map((column) => {
        const columnCards = cards.filter((card) => card.column === column.id);
        return (
          <Column
            key={column.id}
            title={column.title}
            headingColor={column.headingColor}
            column={column.id}
            length={columnCards.length}
            handleDrag={(e) => {
              const copyCard = moveCard(e, column.id, cards);
              if (copyCard) setCards(copyCard);
              console.log("handleDrag");
            }}
          >
            {columnCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
            <DropIndicator beforeId={null} column={column.id} />
            <AddCard column={column.id} setCards={setCards} />
          </Column>
        );
      })}
    </>
  );
}


====> INDEX/assets/drop-indicator <====

type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-[#1D7AFC] opacity-0"
    />
  );
};

export default DropIndicator;


===> constant.ts <====

import { CardType, ColumnType } from "./columns";

export const DEFAULT_BOARD_DATA = [
  { title: "create dashboard with tailwind", id: "1", column: "backlog" },
  { title: "update dockerfile ", id: "2", column: "backlog" },
  { title: "update vision nextjs ", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },

  {
    title: "Refactor microservices to use gRPC",
    id: "5",
    column: "todo",
  },
  { title: "add new page for about", id: "6", column: "todo" },
  { title: "Refactor carousel home page", id: "7", column: "todo" },

  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "switch page FAQ to SSR", id: "9", column: "doing" },
  {
    title: "update all tests to use Jest and React Testing Library",
    id: "10",
    column: "done",
  },
] as CardType[];

export const DEFAULT_COLUMN_DATA = [
  {
    id: "backlog",
    title: "Backlog",
    headingColor: "#4793AF",
    columnIndex: 0,
  },
  {
    id: "todo",
    title: "TODO",
    headingColor: "#DD5746",
    columnIndex: 1,
  },
  {
    id: "doing",
    title: "In progress",
    headingColor: "#FFBB70",
    columnIndex: 2,
  },
  {
    id: "done",
    title: "Complete",
    headingColor: "#6C0345",
    columnIndex: 3,
  },
] as ColumnType[];

====> utilis.ts <====

import { Dispatch } from "react";
import { CardType, ColumnType } from "./columns";
export const getIndicators = (column: string) => {
  return Array.from(
    document.querySelectorAll(
      
    [data-column="+column ]
    ) as unknown as HTMLElement[]
  );
};

export const highlightIndicator = (
  e: React.DragEvent<HTMLDivElement>,
  column: string
) => {
  const indicators = getIndicators(column);

  clearHighlights(column, indicators);

  const el = getNearestIndicator(e, indicators);
  if (el?.element) el.element.style.opacity = "1";
};

export const getNearestIndicator = (
  e: React.DragEvent<HTMLDivElement>,
  indicators: HTMLElement[]
) => {
  const DISTANCE_OFFSET = 55;
  const el = indicators.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = e.clientY - (box.top + DISTANCE_OFFSET);
      // console.log("offset", offset, e.clientY, box.top);
      if (offset < 0 && offset > closest.offset) {
        // console.log("change", offset, e.clientY, box.top);
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
      element: indicators[indicators.length - 1],
    }
  );
  return el;
};

export const clearHighlights = (column: string, els?: HTMLElement[]) => {
  const indicators = els || getIndicators(column);

  indicators.forEach((i) => {
    i.style.opacity = "0";
  });
};

export const moveCard = (
  e: React.DragEvent<HTMLDivElement>,
  column: string,
  cards: CardType[]
) => {
  const cardId = e.dataTransfer.getData("cardId");
  const indicators = getIndicators(column);
  const { element } = getNearestIndicator(e, indicators);
  if (element && element.dataset.before) {
    const beforeCard = element.dataset.before || "-1";
    if (beforeCard !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = beforeCard === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === beforeCard);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      return copy;
    } else return undefined;
  } else return undefined;
};

export const moveColumn = (
  e: React.DragEvent<HTMLDivElement>,
  columns: ColumnType[],
  setColumns: Dispatch<React.SetStateAction<ColumnType[]>>
) => {
  const dragIndex = Number(e.dataTransfer.getData("columnId"));
  const hoverIndex = Number(e.currentTarget.dataset.index);
  if (dragIndex === hoverIndex) return;
  const newColumns = [...columns];
  const dragColumn = columns[dragIndex];
  newColumns.splice(dragIndex, 1);
  newColumns.splice(hoverIndex, 0, dragColumn);
  setColumns(newColumns);
};

export const clearHighlightsColumns = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  const element = e.currentTarget as HTMLElement;
  element.setAttribute("data-drop", "false");
};

export const highlightsColumns = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  const element = e.currentTarget as HTMLElement;
  element.setAttribute("data-drop", "true");
};

====> INDEX <====

"use client";
import React, { useState } from "react";
import { DEFAULT_BOARD_DATA, DEFAULT_COLUMN_DATA } from "./assets/constants";
import { Columns } from "./assets/columns";

export const SectionFour = () => {
  const [cards, setCards] = useState(DEFAULT_BOARD_DATA);
  return (
    <div className="flex gap-3 overflow-scroll p-5 w-auto h-full overflow-y-hidden overflow-x-auto">
      <Columns
        columns={DEFAULT_COLUMN_DATA}
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};
`;
